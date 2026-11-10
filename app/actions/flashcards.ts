'use server';

import prisma from '@/lib/prisma';
import { calculateSM2, FlashcardRating, formatReviewInterval } from '@/lib/sm2';
import { ORGANS_REGISTRY, SPECIES_REGISTRY, SYSTEMS_REGISTRY } from '@/data/anatomyRegistry';

export interface FlashcardProgressData {
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReviewDate: string;
  isDue: boolean;
  lastDifficulty?: string;
}

export interface FlashcardItem {
  id: string;
  organId: string;
  meshId: string;
  speciesSlug: string;
  speciesNameEn: string;
  speciesNameAr: string;
  systemSlug: string;
  systemNameEn: string;
  systemNameAr: string;
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
  focusCoordinates?: any;
  modelUrl: string;
  progress: FlashcardProgressData;
}

/**
 * Server Action: Fetch Flashcards Deck with due reviews and SM-2 progress
 */
export async function getFlashcardsDeck(
  speciesSlug?: string,
  systemSlug?: string
): Promise<FlashcardItem[]> {
  const now = new Date();

  try {
    if (process.env.DATABASE_URL) {
      const whereClause: any = {};
      if (speciesSlug && speciesSlug !== 'all') {
        whereClause.speciesSystem = {
          ...whereClause.speciesSystem,
          species: { slug: speciesSlug },
        };
      }
      if (systemSlug && systemSlug !== 'all') {
        whereClause.speciesSystem = {
          ...whereClause.speciesSystem,
          system: { slug: systemSlug },
        };
      }

      const organs = await prisma.organ.findMany({
        where: whereClause,
        include: {
          speciesSystem: {
            include: {
              species: true,
              system: true,
            },
          },
          flashcardProgress: true,
        },
        orderBy: {
          nameEn: 'asc',
        },
      });

      if (organs.length > 0) {
        return organs.map((organ) => {
          const prog = organ.flashcardProgress;
          const nextDate = prog?.nextReviewDate ? new Date(prog.nextReviewDate) : now;
          const isDue = !prog || nextDate <= now;

          return {
            id: organ.id,
            organId: organ.id,
            meshId: organ.meshId,
            speciesSlug: organ.speciesSystem.species.slug,
            speciesNameEn: organ.speciesSystem.species.nameEn,
            speciesNameAr: organ.speciesSystem.species.nameAr,
            systemSlug: organ.speciesSystem.system.slug,
            systemNameEn: organ.speciesSystem.system.nameEn,
            systemNameAr: organ.speciesSystem.system.nameAr,
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
            focusCoordinates: organ.focusCoordinates,
            modelUrl: organ.speciesSystem.modelUrl || `/models/${organ.speciesSystem.species.slug}/${organ.speciesSystem.system.slug}.glb`,
            progress: {
              easeFactor: prog?.easeFactor ?? 2.5,
              interval: prog?.interval ?? 0,
              repetitions: prog?.repetitions ?? 0,
              nextReviewDate: nextDate.toISOString(),
              isDue,
              lastDifficulty: prog?.lastDifficulty ?? undefined,
            },
          };
        });
      }
    }
  } catch (error) {
    console.warn('Prisma query fallback for flashcards deck:', error);
  }

  // Fallback to in-memory registry
  let filtered = ORGANS_REGISTRY;
  if (speciesSlug && speciesSlug !== 'all') {
    filtered = filtered.filter((o) => o.speciesId === speciesSlug);
  }
  if (systemSlug && systemSlug !== 'all') {
    filtered = filtered.filter((o) => o.systemId === systemSlug);
  }

  return filtered.map((organ) => {
    const spec = SPECIES_REGISTRY[organ.speciesId] || SPECIES_REGISTRY.equine;
    const sys = SYSTEMS_REGISTRY.find((s) => s.id === organ.systemId) || SYSTEMS_REGISTRY[0];

    return {
      id: organ.id,
      organId: organ.id,
      meshId: organ.meshId,
      speciesSlug: organ.speciesId,
      speciesNameEn: spec.name.en,
      speciesNameAr: spec.name.ar,
      systemSlug: organ.systemId,
      systemNameEn: sys.name.en,
      systemNameAr: sys.name.ar,
      nameEn: organ.name.en,
      nameAr: organ.name.ar,
      latinName: organ.latinTaxonomyName,
      descriptionEn: organ.description.en,
      descriptionAr: organ.description.ar,
      bloodSupplyEn: organ.bloodSupply.en,
      bloodSupplyAr: organ.bloodSupply.ar,
      innervationEn: organ.innervation.en,
      innervationAr: organ.innervation.ar,
      clinicalPearlsEn: organ.clinicalPearls.en,
      clinicalPearlsAr: organ.clinicalPearls.ar,
      focusCoordinates: organ.cameraFocus,
      modelUrl: `/models/${organ.speciesId}/${organ.systemId}.glb`,
      progress: {
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
        nextReviewDate: now.toISOString(),
        isDue: true,
      },
    };
  });
}

/**
 * Server Action: Record Flashcard Review using SM-2 Algorithm and sync to Neon DB
 */
export async function recordFlashcardReview(
  organId: string,
  rating: FlashcardRating
): Promise<FlashcardProgressData> {
  let currentEase = 2.5;
  let currentInterval = 0;
  let currentReps = 0;

  try {
    if (process.env.DATABASE_URL) {
      // Find existing progress by organId OR meshId
      const existing = await prisma.flashcardProgress.findFirst({
        where: {
          OR: [{ organId }, { organ: { meshId: organId } }],
        },
      });

      if (existing) {
        currentEase = existing.easeFactor;
        currentInterval = existing.interval;
        currentReps = existing.repetitions;
      }

      const sm2 = calculateSM2(
        { easeFactor: currentEase, interval: currentInterval, repetitions: currentReps },
        rating
      );

      // Resolve true organ record id
      let targetOrganId = organId;
      const organ = await prisma.organ.findFirst({
        where: { OR: [{ id: organId }, { meshId: organId }] },
        select: { id: true },
      });
      if (organ) {
        targetOrganId = organ.id;
      }

      const updated = await prisma.flashcardProgress.upsert({
        where: { organId: targetOrganId },
        update: {
          easeFactor: sm2.easeFactor,
          interval: sm2.interval,
          repetitions: sm2.repetitions,
          nextReviewDate: sm2.nextReviewDate,
          lastDifficulty: rating,
        },
        create: {
          organId: targetOrganId,
          easeFactor: sm2.easeFactor,
          interval: sm2.interval,
          repetitions: sm2.repetitions,
          nextReviewDate: sm2.nextReviewDate,
          lastDifficulty: rating,
        },
      });

      return {
        easeFactor: updated.easeFactor,
        interval: updated.interval,
        repetitions: updated.repetitions,
        nextReviewDate: updated.nextReviewDate.toISOString(),
        isDue: updated.nextReviewDate <= new Date(),
        lastDifficulty: updated.lastDifficulty || rating,
      };
    }
  } catch (error) {
    console.warn('Prisma flashcard review fallback for organId:', organId, error);
  }

  // Local fallback calculation
  const sm2 = calculateSM2(
    { easeFactor: currentEase, interval: currentInterval, repetitions: currentReps },
    rating
  );

  return {
    easeFactor: sm2.easeFactor,
    interval: sm2.interval,
    repetitions: sm2.repetitions,
    nextReviewDate: sm2.nextReviewDate.toISOString(),
    isDue: sm2.nextReviewDate <= new Date(),
    lastDifficulty: rating,
  };
}
