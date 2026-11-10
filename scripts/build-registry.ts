import fs from 'fs';
import path from 'path';

const dataFiles = [
  'data-equine.js',
  'data-bovine.js',
  'data-canine.js',
  'data-feline.js',
  'data-ovine.js',
  'data-avian.js',
  'data-camelid.js',
];

function mapProceduralType(systemSlug: string, meshId: string): string {
  const m = meshId.toLowerCase();
  if (m.includes('cor') || m.includes('heart')) return 'heart';
  if (m.includes('pulmo') || m.includes('lung')) return 'lungs';
  if (m.includes('hepar') || m.includes('liver')) return 'liver';
  if (m.includes('rumen')) return 'rumen';
  if (m.includes('gaster') || m.includes('stomach') || m.includes('reticul') || m.includes('omasum') || m.includes('abomasum') || m.includes('c1') || m.includes('c2') || m.includes('c3') || m.includes('ventriculus')) return 'stomach';
  if (m.includes('ren') || m.includes('kidney')) return 'kidney';
  if (m.includes('vesica') || m.includes('bladder')) return 'bladder';
  if (m.includes('cerebr') || m.includes('brain') || m.includes('encephalon')) return 'brain';
  if (m.includes('cranium') || m.includes('skull')) return 'skull';
  if (m.includes('vertebra') || m.includes('columna') || m.includes('spinalis')) return 'spine';
  if (m.includes('femur') || m.includes('bone') || m.includes('ossa') || m.includes('tibia') || m.includes('radius')) return 'limb';
  if (m.includes('muscul') || m.includes('muscle') || systemSlug === 'muscular') return 'muscle';
  return 'stomach';
}

function generateRegistry() {
  let allOrgans: any[] = [];
  for (const fileName of dataFiles) {
    const fullPath = path.resolve(process.cwd(), 'scripts', fileName);
    const raw = require(fullPath);
    const organs = raw.default || raw;
    allOrgans = allOrgans.concat(organs);
  }

  const mappedOrgans = allOrgans.map((o) => {
    const speciesId = o.speciesSlug === 'ovine' ? 'ovine_caprine' : o.speciesSlug;
    return {
      id: o.meshId,
      meshId: o.meshId,
      systemId: o.systemSlug,
      speciesId: speciesId,
      latinTaxonomyName: o.latinName,
      name: { en: o.nameEn, ar: o.nameAr },
      description: { en: o.descriptionEn, ar: o.descriptionAr },
      bloodSupply: { en: o.bloodSupplyEn, ar: o.bloodSupplyAr },
      innervation: { en: o.innervationEn, ar: o.innervationAr },
      clinicalPearls: { en: o.clinicalPearlsEn, ar: o.clinicalPearlsAr },
      commonPathologies: [
        { en: o.clinicalPearlsEn.slice(0, 80) + '...', ar: o.clinicalPearlsAr.slice(0, 80) + '...' }
      ],
      cameraFocus: o.focusCoordinates || { position: [1.2, 0.8, 1.2], target: [0, 0.4, 0] },
      color: o.geometry?.color || '#38bdf8',
      emissiveColor: '#0284c7',
      proceduralType: mapProceduralType(o.systemSlug, o.meshId),
    };
  });

  const content = `import { 
  SpeciesId, 
  AnatomicalSystemId, 
  SpeciesProfile, 
  SystemMetadata, 
  OrganPart 
} from '../types/anatomy';

// Standardized Anatomical Systems
export const SYSTEMS_REGISTRY: SystemMetadata[] = [
  {
    id: 'skeletal',
    name: { en: 'Skeletal System', ar: 'الجهاز الهيكلي العظمي' },
    icon: 'Bone',
    color: '#e2e8f0',
    description: {
      en: 'Axial and appendicular framework providing structural support, organ protection, and calcium homeostasis.',
      ar: 'الدعامة المحورية والطرفية التي توفر الدعم الهيكلي وحماية الأعضاء الحيوية وتوازن الكالسيوم.',
    },
  },
  {
    id: 'muscular',
    name: { en: 'Muscular System', ar: 'الجهاز العضلي الحركي' },
    icon: 'Activity',
    color: '#ef4444',
    description: {
      en: 'Locomotor muscle groups, postural stabilization, and visceral smooth muscle layers.',
      ar: 'المجموعات العضلية الحركية وتثبيت القوام والطبقات العضلية الملساء الحشوية.',
    },
  },
  {
    id: 'cardiovascular',
    name: { en: 'Cardiovascular System', ar: 'جهاز القلب والأوعية الدموية' },
    icon: 'Heart',
    color: '#dc2626',
    description: {
      en: 'Four-chambered muscular pump, arterial perfusion tree, microvascular capillary beds, and venous return.',
      ar: 'المضخة العضلية رباعية التجاويف والشجرة الشريانية والشعيرات الدقيقة والعائد الوريدي.',
    },
  },
  {
    id: 'respiratory',
    name: { en: 'Respiratory System', ar: 'الجهاز التنفسي والشعب الهوائية' },
    icon: 'Wind',
    color: '#06b6d4',
    description: {
      en: 'Tracheobronchial arborization, gas-exchanging pulmonary parenchyma, and specialized air sac systems.',
      ar: 'الشجرة الرغامية القصبية ونسيج الرئة لتبادل الغازات وأنظمة الأكياس الهوائية المتخصصة.',
    },
  },
  {
    id: 'digestive',
    name: { en: 'Digestive System', ar: 'الجهاز الهضمي والمعدة' },
    icon: 'Coffee',
    color: '#f59e0b',
    description: {
      en: 'Alimentary tract from oral cavity through monogastric, ruminant, pseudo-ruminant, and hindgut chambers.',
      ar: 'القناة الهضمية من التجويف الفموي عبر المعدة البسيطة أو المجترة أو شبيهة المجترات أو الأمعاء الخلفية.',
    },
  },
  {
    id: 'nervous',
    name: { en: 'Nervous System', ar: 'الجهاز العصبي والتحكم' },
    icon: 'Brain',
    color: '#8b5cf6',
    description: {
      en: 'Central nervous system (cerebrum, cerebellum, spinal cord) and autonomic neurovascular control.',
      ar: 'الجهاز العصبي المركزي (المخ، المخيخ، النخاع الشوكي) وشبكة التحكم الوعائي العصبي اللاإرادي.',
    },
  },
  {
    id: 'urogenital',
    name: { en: 'Urogenital System', ar: 'الجهاز البولي والتناسلي' },
    icon: 'Layers',
    color: '#10b981',
    description: {
      en: 'Renal filtration parenchyma, lower urinary conduits, and specialized reproductive tracts.',
      ar: 'نسيج الترشيح الكلوي ومجاري البول السفلية والأجهزة التناسلية المتخصصة.',
    },
  },
];

// Standardized Species Profiles with Verified Model URLs
export const SPECIES_REGISTRY: Record<string, SpeciesProfile> = {
  equine: {
    id: 'equine',
    name: { en: 'Equine (Horse)', ar: 'الخيليات (الحصان)' },
    scientificName: 'Equus caballus',
    commonFamily: { en: 'Equidae (Perissodactyla)', ar: 'الفصيلة الخيلية (مفردات الأصابع)' },
    icon: 'Horse',
    description: {
      en: 'Specialized cursorial ungulate and hindgut fermenter characterized by an expansive cecum, stay apparatus for standing sleep, and obligate nasal respiration.',
      ar: 'حيوان حافري راكض وخمار للأمعاء الخلفية يتميز بأعور ضخم وجهاز ثبات ميكانيكي للنوم واقفاً وتنفس أنفي إجباري.',
    },
    gestation: { en: '335 - 345 days (~11 months)', ar: '335 - 345 يوماً (~11 شهراً)' },
    normalVitals: {
      tempC: '37.2 - 38.3 °C',
      heartRateBpm: '28 - 44 bpm',
      respiratoryRateBpm: '8 - 16 breaths/min',
    },
    anatomicalHighlights: [
      { en: 'Massive comma-shaped cecum (30-35 L) for microbial hindgut digestion', ar: 'أعور ضخم على شكل فاصلة (30-35 لتراً) للتخمير الميكروبي' },
      { en: 'Reciprocal apparatus mechanically locking hock and stifle in unison', ar: 'جهاز التبادل الحركي الذي يقفل مفصلي الركبة والعرقوب معاً' },
      { en: 'Obligate nasal breathing due to elongated soft palate overlapping epiglottis', ar: 'تنفس أنفي إجباري نظراً لتداخل شراع الحنك الطويل مع لسان المزمار' },
    ],
    glbAssetMap: {
      skeletal: '/models/equine/skeletal.glb',
      muscular: '/models/equine/muscular.glb',
      cardiovascular: '/models/equine/cardiovascular.glb',
      respiratory: '/models/equine/respiratory.glb',
      digestive: '/models/equine/digestive.glb',
      nervous: '/models/equine/nervous.glb',
      urogenital: '/models/equine/urogenital.glb',
    },
  },
  bovine: {
    id: 'bovine',
    name: { en: 'Bovine (Cattle / Cow)', ar: 'البقريات (الأبقار)' },
    scientificName: 'Bos taurus',
    commonFamily: { en: 'Bovidae (Artiodactyla)', ar: 'الفصيلة البقرية (مزدوجات الأصابع)' },
    icon: 'Cow',
    description: {
      en: 'Ruminant herbivore with a complex four-chambered compound stomach (Rumen, Reticulum, Omasum, Abomasum) optimized for anaerobic cellulose fermentation.',
      ar: 'حيوان مجتر عاشب ذو معدة مركبة رباعية الحجرات (الكرش، القلنسوة، أم التلافيف، والأنفحة) مهيأة لتخمير السليلوز.',
    },
    gestation: { en: '279 - 287 days (~9 months)', ar: '279 - 287 يوماً (~9 أشهر)' },
    normalVitals: {
      tempC: '38.0 - 39.3 °C',
      heartRateBpm: '60 - 80 bpm',
      respiratoryRateBpm: '15 - 30 breaths/min',
    },
    anatomicalHighlights: [
      { en: 'Four-chambered stomach with left ruminal vat holding 150-200 L', ar: 'معدة رباعية التجاويف بكرش أيسر يتسع لـ 150-200 لتر' },
      { en: 'Honeycomb reticulum in direct contact with the pericardial diaphragm', ar: 'قلنسوة شبكية ملامسة للحجاب الحاجز وغشاء التامور القلبي' },
      { en: 'Multiple cotyledonary placentomes (caruncles + cotyledons)', ar: 'مشيمة فلقية متعددة الكارنكلات' },
    ],
    glbAssetMap: {
      skeletal: '/models/bovine/skeletal.glb',
      muscular: '/models/bovine/muscular.glb',
      cardiovascular: '/models/bovine/cardiovascular.glb',
      respiratory: '/models/bovine/respiratory.glb',
      digestive: '/models/bovine/digestive.glb',
      nervous: '/models/bovine/nervous.glb',
      urogenital: '/models/bovine/urogenital.glb',
    },
  },
  canine: {
    id: 'canine',
    name: { en: 'Canine (Dog)', ar: 'الكلبيات (الكلب)' },
    scientificName: 'Canis lupus familiaris',
    commonFamily: { en: 'Canidae (Carnivora)', ar: 'الفصيلة الكلبية (الضواري)' },
    icon: 'Dog',
    description: {
      en: 'Carnivore with monogastric simple stomach, cursorial skeleton, os penis (baculum), and deep thoracic cavity.',
      ar: 'حيوان لاحم ذو معدة أحادية بسيطة وهيكل عظمي للعدو وعظم قضيب وقفص صدري عميق.',
    },
    gestation: { en: '58 - 68 days (~2 months)', ar: '58 - 68 يوماً (~شهران)' },
    normalVitals: {
      tempC: '37.8 - 39.2 °C',
      heartRateBpm: '70 - 140 bpm',
      respiratoryRateBpm: '15 - 30 breaths/min',
    },
    anatomicalHighlights: [
      { en: 'J-shaped simple stomach susceptible to Gastric Dilatation-Volvulus (GDV)', ar: 'معدة بسيطة على شكل J معرضة للالتواء والتوسع الحاد GDV' },
      { en: 'Os penis with dorsal urethral groove', ar: 'عظم القضيب ذو الميزاب الإحليلي' },
    ],
    glbAssetMap: {
      skeletal: '/models/canine/skeletal.glb',
      muscular: '/models/canine/muscular.glb',
      cardiovascular: '/models/canine/cardiovascular.glb',
      respiratory: '/models/canine/respiratory.glb',
      digestive: '/models/canine/digestive.glb',
      nervous: '/models/canine/nervous.glb',
      urogenital: '/models/canine/urogenital.glb',
    },
  },
  feline: {
    id: 'feline',
    name: { en: 'Feline (Cat)', ar: 'السنوريات (القط)' },
    scientificName: 'Felis catus',
    commonFamily: { en: 'Felidae (Carnivora)', ar: 'الفصيلة السنورية (الضواري)' },
    icon: 'Cat',
    description: {
      en: 'Obligate hypercarnivore with flexible vertebral column, vestigial clavicle, and pre-scrotal urethral narrowing in males.',
      ar: 'حيوان لاحم إجباري يتميز بعمود فقري فائق المرونة وترقوة أثرية وتضيق إحليلي بولي في الذكور.',
    },
    gestation: { en: '63 - 67 days (~9 weeks)', ar: '63 - 67 يوماً (~9 أسابيع)' },
    normalVitals: {
      tempC: '38.1 - 39.2 °C',
      heartRateBpm: '140 - 220 bpm',
      respiratoryRateBpm: '20 - 42 breaths/min',
    },
    anatomicalHighlights: [
      { en: 'Narrow penile urethra prone to obstructive feline urolithiasis', ar: 'إحليل قضيبي ضيق معرض لانسداد الحصوات البولية' },
      { en: 'Free-floating clavicle enabling passage through narrow crevices', ar: 'ترقوة حرة عائمة تسمح بالمرور عبر الشقوق الضيقة' },
    ],
    glbAssetMap: {
      skeletal: '/models/feline/skeletal.glb',
      muscular: '/models/feline/muscular.glb',
      cardiovascular: '/models/feline/cardiovascular.glb',
      respiratory: '/models/feline/respiratory.glb',
      digestive: '/models/feline/digestive.glb',
      nervous: '/models/feline/nervous.glb',
      urogenital: '/models/feline/urogenital.glb',
    },
  },
  ovine_caprine: {
    id: 'ovine_caprine',
    name: { en: 'Ovine / Caprine (Sheep & Goat)', ar: 'المجترات الصغيرة (الضأن والماعز)' },
    scientificName: 'Ovis aries / Capra hircus',
    commonFamily: { en: 'Bovidae (Caprinae)', ar: 'الفصيلة البقرية (تحت فصيلة الوعليات)' },
    icon: 'Layers',
    description: {
      en: 'Small ruminants with split philtrum, spiral colon, urethral process (vermiform appendage), and profound sensitivity to hepatic copper toxicity.',
      ar: 'مجترات صغيرة تتميز بشفة علوية مشقوقة وقولون لولبي وزائدة إحليلية دودية وحساسية كبدية مفرطة للتسمم بالنحاس.',
    },
    gestation: { en: '144 - 152 days (~5 months)', ar: '144 - 152 يوماً (~5 أشهر)' },
    normalVitals: {
      tempC: '38.5 - 39.8 °C',
      heartRateBpm: '70 - 90 bpm',
      respiratoryRateBpm: '16 - 34 breaths/min',
    },
    anatomicalHighlights: [
      { en: 'Vermiform appendage (urethral process) in rams - primary site of calculosis', ar: 'الزائدة الدودية للإحليل في الكباش - الموقع الأبرز لانحشار الحصوات' },
      { en: 'Split upper philtrum allowing ultra-low grazing close to root stems', ar: 'الشفة العليا المشقوقة التي تمكن الحيوان من الرعي الشديد بالقرب من الجذور' },
    ],
    glbAssetMap: {
      skeletal: '/models/ovine_caprine/skeletal.glb',
      muscular: '/models/ovine_caprine/muscular.glb',
      cardiovascular: '/models/ovine_caprine/cardiovascular.glb',
      respiratory: '/models/ovine_caprine/respiratory.glb',
      digestive: '/models/ovine_caprine/digestive.glb',
      nervous: '/models/ovine_caprine/nervous.glb',
      urogenital: '/models/ovine_caprine/urogenital.glb',
    },
  },
  avian: {
    id: 'avian',
    name: { en: 'Avian (Bird / Poultry)', ar: 'الطيور (الدواجن والطيور)' },
    scientificName: 'Gallus gallus domesticus',
    commonFamily: { en: 'Phasianidae (Aves)', ar: 'الفصيلة التدرجية (الطيور)' },
    icon: 'Bird',
    description: {
      en: 'Avian anatomy specialized for flight with hollow pneumatic bones, unidirectional airflow through 9 air sacs, muscular ventriculus, and shared cloacal excretion.',
      ar: 'تشريح طيري مهيأ للطيران بعظام هوائية مجوفة وتدفق هوائي أحادي الاتجاه عبر 9 أكياس وقانصة عضلية ومجمع مذرقي موحد.',
    },
    gestation: { en: '21 days (egg incubation)', ar: '21 يوماً (فترة حضانة البيض)' },
    normalVitals: {
      tempC: '40.6 - 42.5 °C',
      heartRateBpm: '250 - 450 bpm',
      respiratoryRateBpm: '20 - 40 breaths/min',
    },
    anatomicalHighlights: [
      { en: 'Unidirectional gas exchange system through parabronchi and 9 air sacs', ar: 'نظام تبادل غازي أحادي الاتجاه عبر القصبات الهوائية الدقيقة و9 أكياس هوائية' },
      { en: 'Muscular ventriculus (gizzard) lined with koilin grinding plate', ar: 'قانصة عضلية سميكة مبطنة بقرص كويلين طاحن' },
      { en: 'Fused skeletal framework (keeled sternum, synsacrum, furcula)', ar: 'هيكل عظمي ملتحم (عظم القص الزورقي، العجز المندمج، وعظم الشوكة)' },
    ],
    glbAssetMap: {
      skeletal: '/models/avian/skeletal.glb',
      muscular: '/models/avian/muscular.glb',
      cardiovascular: '/models/avian/cardiovascular.glb',
      respiratory: '/models/avian/respiratory.glb',
      digestive: '/models/avian/digestive.glb',
      nervous: '/models/avian/nervous.glb',
      urogenital: '/models/avian/urogenital.glb',
    },
  },
  camelid: {
    id: 'camelid',
    name: { en: 'Camelids (Dromedary Camel)', ar: 'الإبليات (الجمل وحيد السنام)' },
    scientificName: 'Camelus dromedarius',
    commonFamily: { en: 'Camelidae (Tylopoda)', ar: 'الفصيلة الإبلية (خفيات الأقدام)' },
    icon: 'Shield',
    description: {
      en: 'Arid-adapted pseudo-ruminant with three-chambered stomach (C1, C2, C3), glandular water saccules, oval non-nucleated erythrocytes, and subcutaneous plantar cushion.',
      ar: 'حيوان صحراوي من شبيهات المجترات ذو معدة ثلاثية الحجرات (C1، C2، C3) وأكياس مائية غدية وكريات دم بيضاوية عديمة النواة وخف جلدي.',
    },
    gestation: { en: '360 - 420 days (~13 months)', ar: '360 - 420 يوماً (~13 شهراً)' },
    normalVitals: {
      tempC: '36.5 - 39.5 °C',
      heartRateBpm: '35 - 50 bpm',
      respiratoryRateBpm: '6 - 12 breaths/min',
    },
    anatomicalHighlights: [
      { en: 'Three-chambered stomach (C1, C2, C3) completely lacking an omasum', ar: 'معدة ثلاثية الحجرات (C1 و C2 و C3) خالية تماماً من أم التلافيف' },
      { en: 'Unique elliptical/oval erythrocytes resisting osmotic lysis during acute rehydration', ar: 'كريات دم بيضاوية تقاوم الانحلال الأسموزي عند شرب 100 لتر ماء' },
    ],
    glbAssetMap: {
      skeletal: '/models/camelid/skeletal.glb',
      muscular: '/models/camelid/muscular.glb',
      cardiovascular: '/models/camelid/cardiovascular.glb',
      respiratory: '/models/camelid/respiratory.glb',
      digestive: '/models/camelid/digestive.glb',
      nervous: '/models/camelid/nervous.glb',
      urogenital: '/models/camelid/urogenital.glb',
    },
  },
};

// Aliases
SPECIES_REGISTRY.ovine = SPECIES_REGISTRY.ovine_caprine;

// Comprehensive 196 Multi-Species Organs
export const ORGANS_REGISTRY: OrganPart[] = ${JSON.stringify(mappedOrgans, null, 2)};

// Helper Functions
export function getOrgansBySpeciesAndSystem(speciesId: SpeciesId, systemId?: AnatomicalSystemId): OrganPart[] {
  const normalizedSpecies = (speciesId === 'ovine' ? 'ovine_caprine' : speciesId) as SpeciesId;
  return ORGANS_REGISTRY.filter((organ) => {
    const matchesSpecies = organ.speciesId === normalizedSpecies;
    const matchesSystem = !systemId || organ.systemId === systemId;
    return matchesSpecies && matchesSystem;
  });
}

export function getOrganById(organId: string): OrganPart | undefined {
  return ORGANS_REGISTRY.find((organ) => organ.id === organId || organ.meshId === organId);
}

export function getSpeciesProfile(speciesId: SpeciesId): SpeciesProfile {
  const normalized = speciesId === 'ovine' ? 'ovine_caprine' : speciesId;
  return SPECIES_REGISTRY[normalized] || SPECIES_REGISTRY.equine;
}
`;

  fs.writeFileSync(path.resolve(process.cwd(), 'data', 'anatomyRegistry.ts'), content, 'utf8');
  console.log(`Successfully generated data/anatomyRegistry.ts with ${mappedOrgans.length} organs!`);
}

generateRegistry();
