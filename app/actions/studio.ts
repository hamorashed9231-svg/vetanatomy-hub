'use server';

import prisma from '../../lib/prisma';
import { revalidatePath } from 'next/cache';

export interface OrganUpsertInput {
  meshId: string;
  speciesSlug: string;
  systemSlug: string;
  nameEn: string;
  nameAr: string;
  latinName: string;
  descriptionEn: string;
  descriptionAr: string;
  bloodSupplyEn: string;
  bloodSupplyAr: string;
  innervationEn: string;
  innervationAr: string;
  clinicalPearlsEn: string;
  clinicalPearlsAr: string;
  focusCoordinates: {
    position: [number, number, number];
    target: [number, number, number];
  };
}

/**
 * Fetch all linked mesh IDs and metadata from Neon PostgreSQL
 */
export async function getAllLinkedMeshIds(): Promise<Record<string, { id: string; nameEn: string; nameAr: string; latinName: string }>> {
  try {
    const organs = await prisma.organ.findMany({
      select: {
        id: true,
        meshId: true,
        nameEn: true,
        nameAr: true,
        latinName: true,
      },
    });

    const result: Record<string, { id: string; nameEn: string; nameAr: string; latinName: string }> = {};
    for (const org of organs) {
      result[org.meshId] = {
        id: org.id,
        nameEn: org.nameEn,
        nameAr: org.nameAr,
        latinName: org.latinName,
      };
    }
    return result;
  } catch (error) {
    console.error('Failed fetching linked mesh IDs from Neon:', error);
    return {};
  }
}

/**
 * Fetch complete organ record by mesh ID
 */
export async function getOrganDetailsForStudio(meshId: string) {
  try {
    const organ = await prisma.organ.findFirst({
      where: { meshId },
      include: {
        speciesSystem: {
          include: {
            species: true,
            system: true,
          },
        },
      },
    });

    if (!organ) return null;

    return {
      id: organ.id,
      meshId: organ.meshId,
      speciesSlug: organ.speciesSystem.species.slug,
      systemSlug: organ.speciesSystem.system.slug,
      nameEn: organ.nameEn,
      nameAr: organ.nameAr,
      latinName: organ.latinName,
      descriptionEn: organ.descriptionEn,
      descriptionAr: organ.descriptionAr,
      bloodSupplyEn: organ.bloodSupplyEn,
      bloodSupplyAr: organ.bloodSupplyAr,
      innervationEn: organ.innervationEn,
      innervationAr: organ.innervationAr,
      clinicalPearlsEn: organ.clinicalPearlsEn,
      clinicalPearlsAr: organ.clinicalPearlsAr,
      focusCoordinates: organ.focusCoordinates as {
        position: [number, number, number];
        target: [number, number, number];
      },
    };
  } catch (error) {
    console.error(`Error fetching organ details for ${meshId}:`, error);
    return null;
  }
}

/**
 * Fetch species and systems metadata for Studio selection dropdowns
 */
export async function getStudioMetadata() {
  try {
    const species = await prisma.species.findMany({
      select: { id: true, slug: true, nameEn: true, nameAr: true },
      orderBy: { nameEn: 'asc' },
    });

    const systems = await prisma.anatomicalSystem.findMany({
      select: { id: true, slug: true, nameEn: true, nameAr: true, icon: true },
      orderBy: { nameEn: 'asc' },
    });

    return { species, systems };
  } catch (error) {
    console.error('Failed fetching studio metadata:', error);
    return { species: [], systems: [] };
  }
}

/**
 * Direct Database Sync: Upsert Organ in Neon PostgreSQL from 3D Studio
 */
export async function upsertOrganRecord(input: OrganUpsertInput) {
  try {
    // 1. Resolve Species and System records
    const speciesRecord = await prisma.species.findUnique({
      where: { slug: input.speciesSlug },
    });
    if (!speciesRecord) {
      return { success: false, error: `Species not found: ${input.speciesSlug}` };
    }

    const systemRecord = await prisma.anatomicalSystem.findUnique({
      where: { slug: input.systemSlug },
    });
    if (!systemRecord) {
      return { success: false, error: `System not found: ${input.systemSlug}` };
    }

    // 2. Ensure SpeciesSystem join record exists
    let ss = await prisma.speciesSystem.findUnique({
      where: {
        speciesId_systemId: {
          speciesId: speciesRecord.id,
          systemId: systemRecord.id,
        },
      },
    });

    if (!ss) {
      ss = await prisma.speciesSystem.create({
        data: {
          speciesId: speciesRecord.id,
          systemId: systemRecord.id,
          modelUrl: `/models/${input.speciesSlug}/${input.systemSlug}.glb`,
          defaultCameraSettings: {
            position: [2.8, 1.8, 3.2],
            target: [0, 0.4, 0],
          },
        },
      });
    }

    // 3. Upsert Organ record
    const organData = {
      meshId: input.meshId,
      speciesSystemId: ss.id,
      nameEn: input.nameEn,
      nameAr: input.nameAr,
      latinName: input.latinName,
      descriptionEn: input.descriptionEn,
      descriptionAr: input.descriptionAr,
      bloodSupplyEn: input.bloodSupplyEn,
      bloodSupplyAr: input.bloodSupplyAr,
      innervationEn: input.innervationEn,
      innervationAr: input.innervationAr,
      clinicalPearlsEn: input.clinicalPearlsEn,
      clinicalPearlsAr: input.clinicalPearlsAr,
      focusCoordinates: input.focusCoordinates,
    };

    const organ = await prisma.organ.upsert({
      where: {
        speciesSystemId_meshId: {
          speciesSystemId: ss.id,
          meshId: input.meshId,
        },
      },
      update: organData,
      create: organData,
    });

    revalidatePath('/[locale]/admin/studio', 'page');
    revalidatePath('/[locale]/explorer/[species]/[system]', 'page');

    return { success: true, organ };
  } catch (error: any) {
    console.error('Failed to sync organ to Neon PostgreSQL:', error);
    return { success: false, error: error.message || 'Database synchronization failed' };
  }
}
