import prisma from './prisma';
import { 
  SPECIES_REGISTRY, 
  SYSTEMS_REGISTRY, 
  getOrgansBySpeciesAndSystem,
  getOrganById,
  ORGANS_REGISTRY
} from '../data/anatomyRegistry';
import { SpeciesId, AnatomicalSystemId, OrganPart } from '../types/anatomy';

export interface SpeciesSystemResult {
  species: {
    id: string;
    slug: string;
    nameEn: string;
    nameAr: string;
    scientificName: string;
    descriptionEn: string;
    descriptionAr: string;
  };
  system: {
    id: string;
    slug: string;
    nameEn: string;
    nameAr: string;
    descriptionEn: string;
    descriptionAr: string;
    icon: string;
  };
  speciesSystem: {
    id: string;
    modelUrl: string;
    defaultCameraSettings: {
      position: [number, number, number];
      target: [number, number, number];
    };
  };
  organs: Array<{
    id: string;
    meshId: string;
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
  }>;
}

/**
 * Fetch SpeciesSystem join record and all its associated Organs
 */
export async function getSpeciesSystemData(
  speciesSlug: string,
  systemSlug: string
): Promise<SpeciesSystemResult | null> {
  try {
    if (process.env.DATABASE_URL) {
      // Query PostgreSQL through Prisma ORM
      const speciesRecord = await prisma.species.findUnique({
        where: { slug: speciesSlug },
      });

      const systemRecord = await prisma.anatomicalSystem.findUnique({
        where: { slug: systemSlug },
      });

      if (speciesRecord && systemRecord) {
        const ss = await prisma.speciesSystem.findUnique({
          where: {
            speciesId_systemId: {
              speciesId: speciesRecord.id,
              systemId: systemRecord.id,
            },
          },
          include: {
            organs: true,
          },
        });

        if (ss) {
          return {
            species: {
              id: speciesRecord.id,
              slug: speciesRecord.slug,
              nameEn: speciesRecord.nameEn,
              nameAr: speciesRecord.nameAr,
              scientificName: speciesRecord.scientificName,
              descriptionEn: speciesRecord.descriptionEn,
              descriptionAr: speciesRecord.descriptionAr,
            },
            system: {
              id: systemRecord.id,
              slug: systemRecord.slug,
              nameEn: systemRecord.nameEn,
              nameAr: systemRecord.nameAr,
              descriptionEn: systemRecord.descriptionEn,
              descriptionAr: systemRecord.descriptionAr,
              icon: systemRecord.icon,
            },
            speciesSystem: {
              id: ss.id,
              modelUrl: ss.modelUrl,
              defaultCameraSettings: ss.defaultCameraSettings as any,
            },
            organs: ss.organs.map((o) => ({
              id: o.id,
              meshId: o.meshId,
              nameEn: o.nameEn,
              nameAr: o.nameAr,
              latinName: o.latinName,
              descriptionEn: o.descriptionEn,
              descriptionAr: o.descriptionAr,
              bloodSupplyEn: o.bloodSupplyEn,
              bloodSupplyAr: o.bloodSupplyAr,
              innervationEn: o.innervationEn,
              innervationAr: o.innervationAr,
              clinicalPearlsEn: o.clinicalPearlsEn,
              clinicalPearlsAr: o.clinicalPearlsAr,
              focusCoordinates: o.focusCoordinates as any,
            })),
          };
        }
      }
    }
  } catch (error) {
    console.warn('PostgreSQL/Prisma connection idle, utilizing resilient anatomy registry fallback:', error);
  }

  // Resilient Seed Fallback Pipeline: Ensures 100% uptime and seamless local functionality
  const specProfile = SPECIES_REGISTRY[speciesSlug as SpeciesId] || SPECIES_REGISTRY.equine;
  const sysMeta = SYSTEMS_REGISTRY.find((s) => s.id === systemSlug) || SYSTEMS_REGISTRY[0];
  const registryOrgans = getOrgansBySpeciesAndSystem(speciesSlug as SpeciesId, systemSlug as AnatomicalSystemId);

  return {
    species: {
      id: specProfile.id,
      slug: specProfile.id,
      nameEn: specProfile.name.en,
      nameAr: specProfile.name.ar,
      scientificName: specProfile.scientificName,
      descriptionEn: specProfile.description.en,
      descriptionAr: specProfile.description.ar,
    },
    system: {
      id: sysMeta.id,
      slug: sysMeta.id,
      nameEn: sysMeta.name.en,
      nameAr: sysMeta.name.ar,
      descriptionEn: sysMeta.description.en,
      descriptionAr: sysMeta.description.ar,
      icon: sysMeta.icon,
    },
    speciesSystem: {
      id: `${specProfile.id}_${sysMeta.id}`,
      modelUrl: specProfile.glbAssetMap[sysMeta.id as AnatomicalSystemId] || `/models/${specProfile.id}/${sysMeta.id}.glb`,
      defaultCameraSettings: {
        position: [2.8, 1.8, 3.2],
        target: [0, 0.4, 0],
      },
    },
    organs: registryOrgans.map((o) => ({
      id: o.id,
      meshId: o.meshId,
      nameEn: o.name.en,
      nameAr: o.name.ar,
      latinName: o.latinTaxonomyName,
      descriptionEn: o.description.en,
      descriptionAr: o.description.ar,
      bloodSupplyEn: o.bloodSupply.en,
      bloodSupplyAr: o.bloodSupply.ar,
      innervationEn: o.innervation.en,
      innervationAr: o.innervation.ar,
      clinicalPearlsEn: o.clinicalPearls.en,
      clinicalPearlsAr: o.clinicalPearls.ar,
      focusCoordinates: o.cameraFocus,
    })),
  };
}

/**
 * Fetch Organ details by its 3D Mesh Identifier
 */
export async function getOrganByMeshId(meshId: string) {
  try {
    if (process.env.DATABASE_URL) {
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
      if (organ) return organ;
    }
  } catch (error) {
    console.warn('Prisma query fallback for meshId:', meshId);
  }

  // Fallback to local registry
  const match = ORGANS_REGISTRY.find((o) => o.meshId === meshId);
  if (match) {
    return {
      id: match.id,
      meshId: match.meshId,
      nameEn: match.name.en,
      nameAr: match.name.ar,
      latinName: match.latinTaxonomyName,
      descriptionEn: match.description.en,
      descriptionAr: match.description.ar,
      bloodSupplyEn: match.bloodSupply.en,
      bloodSupplyAr: match.bloodSupply.ar,
      innervationEn: match.innervation.en,
      innervationAr: match.innervation.ar,
      clinicalPearlsEn: match.clinicalPearls.en,
      clinicalPearlsAr: match.clinicalPearls.ar,
      focusCoordinates: match.cameraFocus,
    };
  }
  return null;
}

export interface ExamQuestionItem {
  id: string;
  type: 'identify' | 'mcq';
  speciesSlug: string;
  systemSlug: string;
  targetMeshId: string;
  targetOrganName: {
    en: string;
    ar: string;
    latin: string;
  };
  prompt: {
    en: string;
    ar: string;
  };
  options?: Array<{
    en: string;
    ar: string;
  }>;
  correctAnswer?: string;
  correctOptionIndex?: number;
  explanation: {
    en: string;
    ar: string;
  };
  clinicalPearl: {
    en: string;
    ar: string;
  };
  cameraFocus?: {
    position: [number, number, number];
    target: [number, number, number];
  };
}

const CLINICAL_IDENTIFY_PROMPTS: Record<string, { en: string; ar: string }> = {
  'Mesh_Bovine_Reticulum': {
    en: 'Click on the organ where hardware disease / traumatic reticuloperitonitis primarily occurs in cattle.',
    ar: 'انقر على العضو الذي يحدث فيه مرض السلك المعدني / التهاب الشبكية والصفاق الرضحي في الأبقار.'
  },
  'Mesh_Bovine_Cor': {
    en: 'Click on the conical organ where traumatic reticulopericarditis produces muffled splashing fluid sounds.',
    ar: 'انقر على العضو المخروطي الذي يصدر أصوات خض سوائل مكتومة نتيجة التهاب التامور الرضحي.'
  },
  'Mesh_Bovine_Rumen': {
    en: 'Click on the massive fermentation vat occupying the entire left abdominal cavity in ruminants.',
    ar: 'انقر على حجرة التخمر الهائلة التي تشغل الجانب الأيسر بالكامل من تجويف بطن المجترات (الكرش).'
  },
  'Mesh_Bovine_Abomasum': {
    en: 'Click on the true glandular stomach prone to left or right abomasal displacement (LDA/RDA) in dairy cattle.',
    ar: 'انقر على المعدة الغدية الحقيقية المعرضة للانزياح الأيسر أو الأيمن (LDA/RDA) في أبقار الحليب.'
  },
  'Mesh_Canine_Gaster': {
    en: 'Identify and click on the organ that rotates clockwise along its mesenteric axis during GDV in deep-chested dogs.',
    ar: 'حدد وانقر على العضو الذي ينفتل باتجاه عقارب الساعة حول محوره المساريقي أثناء متلازمة انفتال المعدة (GDV) في الكلاب.'
  },
  'canine_stomach': {
    en: 'Identify and click on the organ that rotates clockwise along its mesenteric axis during GDV in deep-chested dogs.',
    ar: 'حدد وانقر على العضو الذي ينفتل باتجاه عقارب الساعة حول محوره المساريقي أثناء متلازمة انفتال المعدة (GDV) في الكلاب.'
  },
  'Mesh_Canine_Cor': {
    en: 'Locate and click on the central pump primarily affected by Myxomatous Mitral Valve Disease (MMVD) in small canine breeds.',
    ar: 'حدد وانقر في النموذج ثلاثي الأبعاد على العضو الأكثر تأثراً بمرض الصمام التاجي المخاطي في سلالات الكلاب الصغيرة.'
  },
  'canine_heart': {
    en: 'Locate and click on the central pump primarily affected by Myxomatous Mitral Valve Disease (MMVD) in small canine breeds.',
    ar: 'حدد وانقر في النموذج ثلاثي الأبعاد على العضو الأكثر تأثراً بمرض الصمام التاجي المخاطي في سلالات الكلاب الصغيرة.'
  },
  'Mesh_Canine_Ren': {
    en: 'Click on the retroperitoneal organ responsible for maintaining erythropoietin production and blood urea nitrogen filtration.',
    ar: 'انقر على العضو خلف الصفاق المسؤول عن إفراز هرمون الإريثروبويتين وترشيح نيتروجين البولينا من الدم.'
  },
  'canine_kidneys': {
    en: 'Click on the retroperitoneal organ responsible for maintaining erythropoietin production and blood urea nitrogen filtration.',
    ar: 'انقر على العضو خلف الصفاق المسؤول عن إفراز هرمون الإريثروبويتين وترشيح نيتروجين البولينا من الدم.'
  },
  'Mesh_Equine_Cecum': {
    en: 'Click on the large comma-shaped hindgut fermentation vat occupying the right flank responsible for cecal impaction colic in horses.',
    ar: 'انقر على العضو التخمري الضخم على شكل فاصلة الذي يشغل الخاصرة اليمنى والمعرض لمغص الانحشار الأعوري في الخيول.'
  },
  'Mesh_Equine_Cor': {
    en: 'Click on the muscular athletic organ prone to atrial fibrillation producing an irregular irregularly slow or fast rhythm in performance horses.',
    ar: 'انقر على العضو العضلي الرياضي المعرض للرجفان الأذيني وعدم انتظام ضربات القلب في خيول السباق.'
  },
  'Mesh_Feline_VesicaUrinaria': {
    en: 'Click on the pelvic reservoir commonly obstructed by matrix plugs in male cats presenting with Feline Lower Urinary Tract Disease (FLUTD).',
    ar: 'انقر على المستودع الحوضي المعرض للانسداد بالسدادات المخاطية في ذكور القطط المصابة بمتلازمة FLUTD.'
  },
  'Mesh_Camelid_C1': {
    en: 'Click on the primary compartment (C1) of the camelid stomach equipped with specialized glandular water saccules.',
    ar: 'انقر على الحجرة الأولى (C1) لمعدة الإبل المزودة بأكياس غدية مائية متخصصة.'
  },
  'Mesh_Avian_Gizzard': {
    en: 'Click on the thick muscular grinding ventriculus lined with hard koilin membrane in birds.',
    ar: 'انقر على القانصة العضلية الطاحنة ذات بطانة الكويلين الصلبة في الطيور.'
  }
};

/**
 * Fetch Interactive 3D Practical Exam questions pulled from Neon PostgreSQL
 * Interleaves "Identify on 3D Model" and "Clinical MCQ" questions
 */
export async function getExamQuestions(
  speciesSlug: string,
  systemSlug: string
): Promise<ExamQuestionItem[]> {
  const normalizedSpecies =
    speciesSlug === 'ovine' || speciesSlug === 'ovine_caprine'
      ? 'ovine_caprine'
      : speciesSlug;

  const questions: ExamQuestionItem[] = [];

  try {
    if (process.env.DATABASE_URL) {
      // 1. Fetch MCQs from Neon DB
      const dbMcqs = await prisma.quizQuestion.findMany({
        where: {
          organ: {
            speciesSystem: {
              species: { slug: normalizedSpecies },
              system: { slug: systemSlug },
            },
          },
        },
        include: {
          organ: true,
        },
        take: 12,
      });

      // 2. Fetch Organs to generate "Identify on 3D Model" questions
      const dbOrgans = await prisma.organ.findMany({
        where: {
          speciesSystem: {
            species: { slug: normalizedSpecies },
            system: { slug: systemSlug },
          },
        },
        take: 12,
      });

      // Map Identify questions from organs
      const identifyQuestions: ExamQuestionItem[] = dbOrgans.map((organ) => {
        const customPrompt = CLINICAL_IDENTIFY_PROMPTS[organ.meshId];
        const promptEn = customPrompt
          ? customPrompt.en
          : organ.clinicalPearlsEn
          ? `Identify on the 3D model: Organ associated with "${organ.clinicalPearlsEn.split('.')[0]}".`
          : `Locate and click on the ${organ.nameEn} (${organ.latinName}) on the 3D canvas.`;

        const promptAr = customPrompt
          ? customPrompt.ar
          : organ.clinicalPearlsAr
          ? `حدد في النموذج ثلاثي الأبعاد: العضو المرتبط بـ "${organ.clinicalPearlsAr.split('.')[0]}".`
          : `حدد وانقر على ${organ.nameAr} (${organ.latinName}) في النموذج ثلاثي الأبعاد.`;

        return {
          id: `identify_${organ.id}`,
          type: 'identify' as const,
          speciesSlug: normalizedSpecies,
          systemSlug,
          targetMeshId: organ.meshId,
          targetOrganName: {
            en: organ.nameEn,
            ar: organ.nameAr,
            latin: organ.latinName,
          },
          prompt: {
            en: promptEn,
            ar: promptAr,
          },
          explanation: {
            en: organ.descriptionEn || organ.clinicalPearlsEn,
            ar: organ.descriptionAr || organ.clinicalPearlsAr,
          },
          clinicalPearl: {
            en: organ.clinicalPearlsEn,
            ar: organ.clinicalPearlsAr,
          },
          cameraFocus: organ.focusCoordinates as any,
        };
      });

      // Map MCQ questions from Neon DB
      const mcqQuestions: ExamQuestionItem[] = dbMcqs.map((q) => {
        const rawOptions = (Array.isArray(q.options) ? q.options : []) as Array<{ en: string; ar: string }>;
        const correctIdx = rawOptions.findIndex(
          (opt) => opt.en === q.correctAnswer || opt.ar === q.correctAnswer
        );

        return {
          id: `mcq_${q.id}`,
          type: 'mcq' as const,
          speciesSlug: normalizedSpecies,
          systemSlug,
          targetMeshId: q.organ?.meshId || '',
          targetOrganName: {
            en: q.organ?.nameEn || '',
            ar: q.organ?.nameAr || '',
            latin: q.organ?.latinName || '',
          },
          prompt: {
            en: q.questionEn,
            ar: q.questionAr,
          },
          options: rawOptions,
          correctAnswer: q.correctAnswer,
          correctOptionIndex: correctIdx >= 0 ? correctIdx : 0,
          explanation: {
            en: q.explanationEn,
            ar: q.explanationAr,
          },
          clinicalPearl: {
            en: q.organ?.clinicalPearlsEn || '',
            ar: q.organ?.clinicalPearlsAr || '',
          },
          cameraFocus: q.organ?.focusCoordinates as any,
        };
      });

      // Interleave Identify and MCQ questions
      const maxLen = Math.max(identifyQuestions.length, mcqQuestions.length);
      for (let i = 0; i < maxLen; i++) {
        if (identifyQuestions[i]) questions.push(identifyQuestions[i]);
        if (mcqQuestions[i]) questions.push(mcqQuestions[i]);
      }

      if (questions.length > 0) {
        return questions;
      }
    }
  } catch (error) {
    console.warn('Neon DB Exam query fallback:', error);
  }

  // Resilient fallback using registry data
  const registryOrgans = getOrgansBySpeciesAndSystem(normalizedSpecies as SpeciesId, systemSlug as AnatomicalSystemId);
  return registryOrgans.map((organ, idx) => {
    const customPrompt = CLINICAL_IDENTIFY_PROMPTS[organ.meshId];
    return {
      id: `fallback_exam_${organ.meshId}_${idx}`,
      type: (idx % 2 === 0 ? 'identify' : 'mcq') as 'identify' | 'mcq',
      speciesSlug: normalizedSpecies,
      systemSlug,
      targetMeshId: organ.meshId,
      targetOrganName: {
        en: organ.name.en,
        ar: organ.name.ar,
        latin: organ.latinTaxonomyName,
      },
      prompt: {
        en: customPrompt ? customPrompt.en : `Click on the ${organ.name.en} (${organ.latinTaxonomyName}) in the 3D model.`,
        ar: customPrompt ? customPrompt.ar : `حدد وانقر على ${organ.name.ar} (${organ.latinTaxonomyName}) في النموذج ثلاثي الأبعاد.`,
      },
      options: [
        { en: organ.name.en, ar: organ.name.ar },
        { en: 'Adjacent Vascular Structure', ar: 'البنية الوعائية المجاورة' },
        { en: 'Deep Visceral Organ', ar: 'العضو الحشوي العميق' },
        { en: 'Superficial Fascial Plane', ar: 'الطبقة اللفائفية السطحية' },
      ],
      correctAnswer: organ.name.en,
      correctOptionIndex: 0,
      explanation: {
        en: organ.description.en,
        ar: organ.description.ar,
      },
      clinicalPearl: {
        en: organ.clinicalPearls.en,
        ar: organ.clinicalPearls.ar,
      },
      cameraFocus: organ.cameraFocus,
    };
  });
}

export interface GlobalSearchResult {
  id: string;
  meshId: string;
  nameEn: string;
  nameAr: string;
  latinName: string;
  speciesSlug: string;
  speciesNameEn: string;
  speciesNameAr: string;
  systemSlug: string;
  systemNameEn: string;
  systemNameAr: string;
}

/**
 * Fast Command-K Global Anatomical Search across Arabic, English, and Latin (NAV)
 */
export async function searchOrgansGlobal(query: string): Promise<GlobalSearchResult[]> {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  try {
    if (process.env.DATABASE_URL) {
      const organs = await prisma.organ.findMany({
        where: {
          OR: [
            { nameEn: { contains: trimmed, mode: 'insensitive' } },
            { nameAr: { contains: trimmed, mode: 'insensitive' } },
            { latinName: { contains: trimmed, mode: 'insensitive' } },
          ],
        },
        include: {
          speciesSystem: {
            include: {
              species: true,
              system: true,
            },
          },
        },
        take: 25,
      });

      if (organs.length > 0) {
        return organs.map((o) => ({
          id: o.id,
          meshId: o.meshId,
          nameEn: o.nameEn,
          nameAr: o.nameAr,
          latinName: o.latinName,
          speciesSlug: o.speciesSystem.species.slug,
          speciesNameEn: o.speciesSystem.species.nameEn,
          speciesNameAr: o.speciesSystem.species.nameAr,
          systemSlug: o.speciesSystem.system.slug,
          systemNameEn: o.speciesSystem.system.nameEn,
          systemNameAr: o.speciesSystem.system.nameAr,
        }));
      }
    }
  } catch (err) {
    console.warn('Prisma global search fallback:', err);
  }

  // Registry in-memory fallback
  const results: GlobalSearchResult[] = [];
  for (const organ of ORGANS_REGISTRY) {
    const matchEn = organ.name.en.toLowerCase().includes(trimmed);
    const matchAr = organ.name.ar.toLowerCase().includes(trimmed);
    const matchLatin = organ.latinTaxonomyName.toLowerCase().includes(trimmed);

    if (matchEn || matchAr || matchLatin) {
      const spec = SPECIES_REGISTRY[organ.speciesId] || SPECIES_REGISTRY.equine;
      const sys = SYSTEMS_REGISTRY.find((s) => s.id === organ.systemId) || SYSTEMS_REGISTRY[0];

      results.push({
        id: organ.id,
        meshId: organ.meshId,
        nameEn: organ.name.en,
        nameAr: organ.name.ar,
        latinName: organ.latinTaxonomyName,
        speciesSlug: organ.speciesId,
        speciesNameEn: spec.name.en,
        speciesNameAr: spec.name.ar,
        systemSlug: organ.systemId,
        systemNameEn: sys.name.en,
        systemNameAr: sys.name.ar,
      });

      if (results.length >= 25) break;
    }
  }

  return results;
}

export interface ComparativeOrganRecord {
  id: string;
  meshId: string;
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
  species: {
    slug: string;
    nameEn: string;
    nameAr: string;
    scientificName: string;
    descriptionEn: string;
    descriptionAr: string;
  };
  system: {
    slug: string;
    nameEn: string;
    nameAr: string;
    icon: string;
  };
}

export interface ComparativeOrganPayload {
  organA: ComparativeOrganRecord | null;
  organB: ComparativeOrganRecord | null;
}

async function fetchSingleOrganComparativePayload(
  organIdOrMeshId: string
): Promise<ComparativeOrganRecord | null> {
  if (!organIdOrMeshId) return null;

  try {
    if (process.env.DATABASE_URL) {
      const organ = await prisma.organ.findFirst({
        where: {
          OR: [{ id: organIdOrMeshId }, { meshId: organIdOrMeshId }],
        },
        include: {
          speciesSystem: {
            include: {
              species: true,
              system: true,
            },
          },
        },
      });

      if (organ) {
        return {
          id: organ.id,
          meshId: organ.meshId,
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
          species: {
            slug: organ.speciesSystem.species.slug,
            nameEn: organ.speciesSystem.species.nameEn,
            nameAr: organ.speciesSystem.species.nameAr,
            scientificName: organ.speciesSystem.species.scientificName,
            descriptionEn: organ.speciesSystem.species.descriptionEn,
            descriptionAr: organ.speciesSystem.species.descriptionAr,
          },
          system: {
            slug: organ.speciesSystem.system.slug,
            nameEn: organ.speciesSystem.system.nameEn,
            nameAr: organ.speciesSystem.system.nameAr,
            icon: organ.speciesSystem.system.icon,
          },
        };
      }
    }
  } catch (err) {
    console.warn('Prisma comparative organ query fallback for:', organIdOrMeshId, err);
  }

  // Registry in-memory fallback
  const match = getOrganById(organIdOrMeshId);
  if (match) {
    const spec = SPECIES_REGISTRY[match.speciesId] || SPECIES_REGISTRY.equine;
    const sys = SYSTEMS_REGISTRY.find((s) => s.id === match.systemId) || SYSTEMS_REGISTRY[0];

    return {
      id: match.id,
      meshId: match.meshId,
      nameEn: match.name.en,
      nameAr: match.name.ar,
      latinName: match.latinTaxonomyName,
      descriptionEn: match.description.en,
      descriptionAr: match.description.ar,
      bloodSupplyEn: match.bloodSupply.en,
      bloodSupplyAr: match.bloodSupply.ar,
      innervationEn: match.innervation.en,
      innervationAr: match.innervation.ar,
      clinicalPearlsEn: match.clinicalPearls.en,
      clinicalPearlsAr: match.clinicalPearls.ar,
      focusCoordinates: match.cameraFocus,
      species: {
        slug: spec.id,
        nameEn: spec.name.en,
        nameAr: spec.name.ar,
        scientificName: spec.scientificName,
        descriptionEn: spec.description.en,
        descriptionAr: spec.description.ar,
      },
      system: {
        slug: sys.id,
        nameEn: sys.name.en,
        nameAr: sys.name.ar,
        icon: sys.icon,
      },
    };
  }

  return null;
}

/**
 * Fetch comparative organ payloads and species metadata in a single parallel query from Neon PostgreSQL
 */
export async function getComparativeOrganData(
  organIdA: string,
  organIdB: string
): Promise<ComparativeOrganPayload> {
  const [organA, organB] = await Promise.all([
    fetchSingleOrganComparativePayload(organIdA),
    fetchSingleOrganComparativePayload(organIdB),
  ]);

  return { organA, organB };
}
