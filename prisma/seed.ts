import { PrismaClient } from '@prisma/client';
import path from 'path';

const prisma = new PrismaClient();

interface QuizQuestionSpec {
  questionEn: string;
  questionAr: string;
  options: { en: string; ar: string }[];
  correctAnswer: string;
  explanationEn: string;
  explanationAr: string;
}

interface OrganSpec {
  speciesSlug: string;
  systemSlug: string;
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
  quizQuestions: QuizQuestionSpec[];
}

async function main() {
  console.log('🐾 Seeding VetAnatomy Hub Deep Multi-Species Relational Database (Neon PostgreSQL)...');

  // 1. Seed Core Species (7 Species)
  const speciesList = [
    {
      slug: 'equine',
      nameEn: 'Equine (Horse)',
      nameAr: 'الخيليات (الحصان)',
      scientificName: 'Equus caballus',
      descriptionEn: 'Odd-toed ungulate and specialized hindgut fermenter with expansive cecum, stay apparatus, and obligate nasal breathing.',
      descriptionAr: 'حيوان حافري مفرد الأصابع وخمار للأمعاء الغليظة يتميز بأعور ضخم وجهاز ثبات ميكانيكي وتعتبر الخيول متنفساً أنفياً إجبارياً.',
      thumbnail: '/images/species/equine.webp',
    },
    {
      slug: 'bovine',
      nameEn: 'Bovine (Cattle / Cow)',
      nameAr: 'البقريات (الأبقار)',
      scientificName: 'Bos taurus',
      descriptionEn: 'Large artiodactyl ruminant with a compound 4-chambered stomach (Rumen, Reticulum, Omasum, Abomasum) for microbial fermentation.',
      descriptionAr: 'حيوان مجتر مزدوج الأصابع ذو معدة مركبة رباعية الحجرات (الكرش، القلنسوة، أم التلافيف، والأنفحة) للتخمر الميكروبي.',
      thumbnail: '/images/species/bovine.webp',
    },
    {
      slug: 'canine',
      nameEn: 'Canine (Dog)',
      nameAr: 'الكلبيات (الكلب)',
      scientificName: 'Canis lupus familiaris',
      descriptionEn: 'Primary model organism in companion animal practice with simple monogastric stomach, carnassial teeth, and cursorial locomotion.',
      descriptionAr: 'الكائن النموذجي الأساسي في طب الحيوانات الأليفة ذو معدة بسيطة وأضراس قاطعة وهيكل مصمم للعدو السريع.',
      thumbnail: '/images/species/canine.webp',
    },
    {
      slug: 'feline',
      nameEn: 'Feline (Cat)',
      nameAr: 'السنوريات (القط)',
      scientificName: 'Felis catus',
      descriptionEn: 'Obligate hypercarnivore with high dietary protein demands, flexible spine, floating clavicle, and pre-scrotal urethral narrowing in males.',
      descriptionAr: 'حيوان لاحم إجباري يتميز بمتطلبات بروتينية خاصة وعمود فقري شديد المرونة وترقوة عائمة ومجرى بولي ضيق في الذكور.',
      thumbnail: '/images/species/feline.webp',
    },
    {
      slug: 'ovine_caprine',
      nameEn: 'Ovine / Caprine (Sheep & Goat)',
      nameAr: 'المجترات الصغيرة (الضأن والماعز)',
      scientificName: 'Ovis aries / Capra hircus',
      descriptionEn: 'Small ruminants with split philtrum, spiral colon, vermiform urethral process, and extreme hepatic copper toxicity sensitivity.',
      descriptionAr: 'مجترات صغيرة تتميز بشفة علوية مشقوقة وقولون لولبي وزائدة إحليلية دودية وحساسية كبدية شديدة للنحاس.',
      thumbnail: '/images/species/ovine.webp',
    },
    {
      slug: 'avian',
      nameEn: 'Avian (Bird / Poultry)',
      nameAr: 'الطيور (الدواجن والطيور)',
      scientificName: 'Gallus gallus domesticus',
      descriptionEn: 'Avian dinosaurian lineage with pneumatic bones, unidirectional lung airflow through 9 air sacs, and grinding muscular gizzard.',
      descriptionAr: 'سلالة طيرية مهيأة للطيران تتميز بعظام هوائية وتدفق رئوي أحادي الاتجاه عبر 9 أكياس هوائية وقانصة عضلية طاحنة.',
      thumbnail: '/images/species/avian.webp',
    },
    {
      slug: 'camelid',
      nameEn: 'Camelids (Dromedary Camel)',
      nameAr: 'الإبليات (الجمل وحيد السنام)',
      scientificName: 'Camelus dromedarius',
      descriptionEn: 'Desert pseudo-ruminant with three-chambered stomach (C1, C2, C3), glandular water saccules, oval erythrocytes, and adipose dorsal hump.',
      descriptionAr: 'حيوان صحراوي من شبيهات المجترات ذو معدة ثلاثية الحجرات (C1, C2, C3) وأكياس مائية غدية وكريات دم بيضاوية وسنام شحمي.',
      thumbnail: '/images/species/camelid.webp',
    },
  ];

  const speciesMap = new Map<string, string>();
  for (const s of speciesList) {
    const created = await prisma.species.upsert({
      where: { slug: s.slug },
      update: s,
      create: s,
    });
    speciesMap.set(s.slug, created.id);
  }
  console.log(`✓ Upserted ${speciesMap.size} Core Animal Species`);

  // 2. Seed Standardized Anatomical Systems (7 Systems)
  const systemsList = [
    {
      slug: 'cardiovascular',
      nameEn: 'Cardiovascular System',
      nameAr: 'جهاز القلب والأوعية الدموية',
      descriptionEn: 'Central muscular pump, arterial perfusion tree, capillary beds, and venous return network.',
      descriptionAr: 'المضخة العضلية المركزية والشجرة الشريانية والشعيرات الدموية وشبكة العائد الوريدي.',
      icon: 'Heart',
    },
    {
      slug: 'digestive',
      nameEn: 'Digestive System',
      nameAr: 'الجهاز الهضمي والمعدة',
      descriptionEn: 'Alimentary canal from oral cavity through forestomach fermentation vats to hindgut chambers.',
      descriptionAr: 'القناة الهضمية من التجويف الفموي عبر غرف التخمر الميكروبي للمعدة حتى الأمعاء الغليظة.',
      icon: 'Coffee',
    },
    {
      slug: 'respiratory',
      nameEn: 'Respiratory System',
      nameAr: 'الجهاز التنفسي والشعب الهوائية',
      descriptionEn: 'Airways, tracheobronchial tree, gas-exchanging pulmonary parenchyma, and avian air sacs.',
      descriptionAr: 'المجاري التنفسية والشجرة القصبية ونسيج الرئة لتبادل الغازات والأكياس الهوائية للطيور.',
      icon: 'Wind',
    },
    {
      slug: 'nervous',
      nameEn: 'Nervous System',
      nameAr: 'الجهاز العصبي المركزي والمحيطي',
      descriptionEn: 'Encephalon, spinal cord, twelve cranial nerves, and peripheral autonomic network.',
      descriptionAr: 'المخ والمخيخ والنخاع الشوكي والأعصاب القحفية الـ 12 والشبكة العصبية اللاإرادية.',
      icon: 'Brain',
    },
    {
      slug: 'urogenital',
      nameEn: 'Urogenital System',
      nameAr: 'الجهاز البولي والتناسلي',
      descriptionEn: 'Renal filtration parenchyma, urinary drainage ducts, and species reproductive tracts.',
      descriptionAr: 'نسيج الترشيح الكلوي ومجاري تصريف البول والأجهزة التناسلية المتخصصة لكل نوع.',
      icon: 'Layers',
    },
    {
      slug: 'skeletal',
      nameEn: 'Skeletal System',
      nameAr: 'الهيكل العظمي',
      descriptionEn: 'Axial and appendicular framework providing biomechanical locomotion and organ protection.',
      descriptionAr: 'الهيكل المحوري والطرفي الذي يوفر الدعم الميكانيكي الحركي وحماية الأحشاء الداخلية.',
      icon: 'Bone',
    },
    {
      slug: 'muscular',
      nameEn: 'Muscular System',
      nameAr: 'الجهاز العضلي الحركي',
      descriptionEn: 'Striated locomotor muscles, postural stabilization groups, and stay apparatus biomechanics.',
      descriptionAr: 'العضلات الحركية المخططة وتثبيت القوام والآليات الميكانيكية لجهاز الثبات.',
      icon: 'Activity',
    },
  ];

  const systemMap = new Map<string, string>();
  for (const sys of systemsList) {
    const created = await prisma.anatomicalSystem.upsert({
      where: { slug: sys.slug },
      update: sys,
      create: sys,
    });
    systemMap.set(sys.slug, created.id);
  }
  console.log(`✓ Upserted ${systemMap.size} Anatomical Systems`);

  // 3. Seed SpeciesSystem Join Table (49 Combinations)
  const speciesSystemMap = new Map<string, string>();
  for (const [specSlug, specId] of speciesMap.entries()) {
    for (const [sysSlug, sysId] of systemMap.entries()) {
      const key = `${specSlug}_${sysSlug}`;
      const modelUrl = `/models/${specSlug}/${sysSlug}.glb`;
      const defaultCameraSettings = {
        position: [2.8, 1.8, 3.2],
        target: [0, 0.4, 0],
      };

      const ss = await prisma.speciesSystem.upsert({
        where: {
          speciesId_systemId: {
            speciesId: specId,
            systemId: sysId,
          },
        },
        update: { modelUrl, defaultCameraSettings },
        create: {
          speciesId: specId,
          systemId: sysId,
          modelUrl,
          defaultCameraSettings,
        },
      });
      speciesSystemMap.set(key, ss.id);
    }
  }
  console.log(`✓ Upserted ${speciesSystemMap.size} SpeciesSystem Associations with GLB model URLs`);

  // 4. Load all 7 Comprehensive Anatomical Data Files
  const dataFiles = [
    'data-equine.js',
    'data-bovine.js',
    'data-canine.js',
    'data-feline.js',
    'data-ovine.js',
    'data-avian.js',
    'data-camelid.js',
  ];

  let allOrgans: OrganSpec[] = [];
  for (const fileName of dataFiles) {
    const fullPath = path.resolve(process.cwd(), 'scripts', fileName);
    const raw = require(fullPath);
    const organs: OrganSpec[] = raw.default || raw;
    allOrgans = allOrgans.concat(organs);
  }

  console.log(`Loaded ${allOrgans.length} deep anatomical organ records with clinical quiz questions.`);

  let seededOrgansCount = 0;
  let seededQuizCount = 0;

  for (const org of allOrgans) {
    // Normalize species slug for ovine/caprine
    const normalizedSpeciesSlug =
      org.speciesSlug === 'ovine' || org.speciesSlug === 'ovine_caprine'
        ? 'ovine_caprine'
        : org.speciesSlug;

    const ssKey = `${normalizedSpeciesSlug}_${org.systemSlug}`;
    const ssId = speciesSystemMap.get(ssKey);
    if (!ssId) {
      console.warn(`⚠️ Warning: speciesSystemId not found for ${ssKey}`);
      continue;
    }

    const organData = {
      meshId: org.meshId,
      speciesSystemId: ssId,
      nameEn: org.nameEn,
      nameAr: org.nameAr,
      latinName: org.latinName,
      descriptionEn: org.descriptionEn,
      descriptionAr: org.descriptionAr,
      bloodSupplyEn: org.bloodSupplyEn,
      bloodSupplyAr: org.bloodSupplyAr,
      innervationEn: org.innervationEn,
      innervationAr: org.innervationAr,
      clinicalPearlsEn: org.clinicalPearlsEn,
      clinicalPearlsAr: org.clinicalPearlsAr,
      focusCoordinates: org.focusCoordinates,
    };

    const createdOrgan = await prisma.organ.upsert({
      where: {
        speciesSystemId_meshId: {
          speciesSystemId: ssId,
          meshId: org.meshId,
        },
      },
      update: organData,
      create: organData,
    });
    seededOrgansCount++;

    // Remove existing quiz questions for this organ to prevent duplicate questions on re-seed
    await prisma.quizQuestion.deleteMany({
      where: { organId: createdOrgan.id },
    });

    // Seed 2 Clinical Quiz Questions per organ
    if (org.quizQuestions && org.quizQuestions.length > 0) {
      for (const q of org.quizQuestions) {
        await prisma.quizQuestion.create({
          data: {
            organId: createdOrgan.id,
            questionEn: q.questionEn,
            questionAr: q.questionAr,
            options: q.options,
            correctAnswer: q.correctAnswer,
            explanationEn: q.explanationEn,
            explanationAr: q.explanationAr,
          },
        });
        seededQuizCount++;
      }
    }
  }

  console.log(`\n=============================================================`);
  console.log(`✅ Deep Database Seeding Completed Successfully!`);
  console.log(`   - Species: ${speciesMap.size}`);
  console.log(`   - Systems: ${systemMap.size}`);
  console.log(`   - Species-System Links: ${speciesSystemMap.size}`);
  console.log(`   - Organs Seeded: ${seededOrgansCount}`);
  console.log(`   - Clinical Quiz Questions Seeded: ${seededQuizCount}`);
  console.log(`=============================================================\n`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
