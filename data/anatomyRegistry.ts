import { 
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
export const ORGANS_REGISTRY: OrganPart[] = [
  {
    "id": "Mesh_Equine_Cor",
    "meshId": "Mesh_Equine_Cor",
    "systemId": "cardiovascular",
    "speciesId": "equine",
    "latinTaxonomyName": "Cor (Equus caballus)",
    "name": {
      "en": "Equine Heart",
      "ar": "قلب الحصان"
    },
    "description": {
      "en": "Massive muscular pump weighing 4-5 kg (roughly 1% of body weight), producing resting cardiac output of 35-45 L/min and up to 300 L/min during peak gallop.",
      "ar": "مضخة عضلية هائلة تزن 4-5 كجم (1% من وزن الجسم)، تضخ 35-45 لتر/دقيقة وقت الراحة وتصل لـ 300 لتر/دقيقة أثناء العدو الأقصى."
    },
    "bloodSupply": {
      "en": "Left and right coronary arteries arising directly from aortic sinuses.",
      "ar": "الشريانان التاجيان الأيمن والأيسر من الجيب الأبهري."
    },
    "innervation": {
      "en": "Vagus nerve (CN X, parasympathetic) and sympathetic fibers from cervicothoracic ganglion.",
      "ar": "العصب المبهم (العصب العاشر) والألياف الودية من العقدة الرقبية الصدرية."
    },
    "clinicalPearls": {
      "en": "Physiological 2nd-degree AV block is common and benign in athletic horses, disappearing with exercise or excitement.",
      "ar": "إحصار القلب الأذيني البطيني من الدرجة الثانية شائع وحميد في خيول السباق ويزول مع الحركة."
    },
    "commonPathologies": [
      {
        "en": "Physiological 2nd-degree AV block is common and benign in athletic horses, disap...",
        "ar": "إحصار القلب الأذيني البطيني من الدرجة الثانية شائع وحميد في خيول السباق ويزول مع..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.6,
        0.4
      ],
      "target": [
        0,
        0.3,
        0.1
      ]
    },
    "color": "#dc2626",
    "emissiveColor": "#0284c7",
    "proceduralType": "heart"
  },
  {
    "id": "Mesh_Equine_Aorta",
    "meshId": "Mesh_Equine_Aorta",
    "systemId": "cardiovascular",
    "speciesId": "equine",
    "latinTaxonomyName": "Aorta thoracica",
    "name": {
      "en": "Equine Thoracic Aorta",
      "ar": "الأبهر الصدري للحصان"
    },
    "description": {
      "en": "The primary high-pressure elastic conduit emerging from the left ventricle, distributing systemic oxygenated blood.",
      "ar": "المجرى الشرياني المرن عالي الضغط الصادر من البطين الأيسر المنحني ظهرياً لتوزيع الدم المؤكسج."
    },
    "bloodSupply": {
      "en": "Direct systemic arterial outflow.",
      "ar": "المجرى الرئيسي الشرياني الجهازي."
    },
    "innervation": {
      "en": "Aortic baroreceptors innervated by the vagus nerve (CN X).",
      "ar": "مستقبلات الضغط الأبهرية عبر العصب المبهم."
    },
    "clinicalPearls": {
      "en": "Spontaneous aortic rupture at the bulb can cause peracute collapse and hemothorax in stallions during breeding.",
      "ar": "تمزق جذر الأبهر قد يسبب الانهيار المفاجئ والنزف الصدري في الفحول أثناء التلقيح."
    },
    "commonPathologies": [
      {
        "en": "Spontaneous aortic rupture at the bulb can cause peracute collapse and hemothora...",
        "ar": "تمزق جذر الأبهر قد يسبب الانهيار المفاجئ والنزف الصدري في الفحول أثناء التلقيح...."
      }
    ],
    "cameraFocus": {
      "position": [
        1,
        0.9,
        0.3
      ],
      "target": [
        0,
        0.7,
        0.2
      ]
    },
    "color": "#b91c1c",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Equine_VenaCava",
    "meshId": "Mesh_Equine_VenaCava",
    "systemId": "cardiovascular",
    "speciesId": "equine",
    "latinTaxonomyName": "Vena cava",
    "name": {
      "en": "Equine Vena Cava",
      "ar": "الوريد الأجوف للحصان"
    },
    "description": {
      "en": "Major systemic venous drainage vessels returning deoxygenated blood to the right atrium.",
      "ar": "الأوردة الجهازية الكبرى التي تعيد الدم غير المؤكسج إلى الأذين الأيمن."
    },
    "bloodSupply": {
      "en": "Systemic venous return.",
      "ar": "العائد الوريدي الجهازي."
    },
    "innervation": {
      "en": "Sympathetic vasomotor fibers.",
      "ar": "ألياف حركية وعائية ودية."
    },
    "clinicalPearls": {
      "en": "CVP catheterization via the jugular vein into cranial vena cava guides volume resuscitation in colic.",
      "ar": "قسطرة قياس الضغط الوريدي المركزي ترشد الإنعاش بالسوائل في حالات المغص الحاد."
    },
    "commonPathologies": [
      {
        "en": "CVP catheterization via the jugular vein into cranial vena cava guides volume re...",
        "ar": "قسطرة قياس الضغط الوريدي المركزي ترشد الإنعاش بالسوائل في حالات المغص الحاد...."
      }
    ],
    "cameraFocus": {
      "position": [
        -1,
        0.6,
        0.2
      ],
      "target": [
        0,
        0.5,
        0.15
      ]
    },
    "color": "#2563eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Equine_TruncusPulmonalis",
    "meshId": "Mesh_Equine_TruncusPulmonalis",
    "systemId": "cardiovascular",
    "speciesId": "equine",
    "latinTaxonomyName": "Truncus pulmonalis",
    "name": {
      "en": "Equine Pulmonary Trunk",
      "ar": "الجذع الرئوي للحصان"
    },
    "description": {
      "en": "Arterial trunk carrying deoxygenated blood from the right ventricle into the pulmonary circulation.",
      "ar": "الجذع الشرياني الناقل للدم غير المؤكسج من البطين الأيمن للدورة الرئوية."
    },
    "bloodSupply": {
      "en": "Pulmonary afferent perfusion.",
      "ar": "التروية الرئوية الواردة."
    },
    "innervation": {
      "en": "Pulmonary plexus.",
      "ar": "الضفيرة الرئوية."
    },
    "clinicalPearls": {
      "en": "Extreme pulmonary hypertension during maximal sprint contributes to capillary stress failure and EIPH.",
      "ar": "ارتفاع الضغط الرئوي الشديد أثناء السباق يؤدي إلى النزف الرئوي الإجهادي EIPH."
    },
    "commonPathologies": [
      {
        "en": "Extreme pulmonary hypertension during maximal sprint contributes to capillary st...",
        "ar": "ارتفاع الضغط الرئوي الشديد أثناء السباق يؤدي إلى النزف الرئوي الإجهادي EIPH...."
      }
    ],
    "cameraFocus": {
      "position": [
        1,
        0.7,
        0.5
      ],
      "target": [
        0.1,
        0.55,
        0.35
      ]
    },
    "color": "#3b82f6",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Equine_Gaster",
    "meshId": "Mesh_Equine_Gaster",
    "systemId": "digestive",
    "speciesId": "equine",
    "latinTaxonomyName": "Gaster et Margo plicatus",
    "name": {
      "en": "Equine Stomach & Margo Plicatus",
      "ar": "معدة الحصان والخط المسنن"
    },
    "description": {
      "en": "Relatively small stomach (8-15 L) divided sharply by the margo plicatus into a non-glandular squamous fundus and a glandular secretory body.",
      "ar": "معدة صغيرة نسبياً (8-15 لتر) يقسمها الخط المسنن إلى قسم حرشفي غير غدي وقسم غدي إفرازي."
    },
    "bloodSupply": {
      "en": "Celiac artery branches: Left gastric, right gastric, and short gastric arteries.",
      "ar": "فروع الشريان الجوفي: المعدي الأيسر والمعدي الأيمن والشرايين القصيرة."
    },
    "innervation": {
      "en": "Vagus nerve (CN X, motor and secretomotor) and celiac sympathetic plexus.",
      "ar": "العصب المبهم (حركي وإفرازي) والضفيرة الجوفية الودية."
    },
    "clinicalPearls": {
      "en": "Equine Gastric Ulcer Syndrome (EGUS) occurs predominantly on the squamous mucosa immediately adjacent to the margo plicatus due to acid splashing.",
      "ar": "تحدث قرحة معدة الخيل EGUS بشكل رئيسي في الجزء الحرشفي الملاصق للخط المسنن نتيجة ترشاش الأحماض."
    },
    "commonPathologies": [
      {
        "en": "Equine Gastric Ulcer Syndrome (EGUS) occurs predominantly on the squamous mucosa...",
        "ar": "تحدث قرحة معدة الخيل EGUS بشكل رئيسي في الجزء الحرشفي الملاصق للخط المسنن نتيجة ..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.7,
        0.2
      ],
      "target": [
        0.1,
        0.5,
        0.1
      ]
    },
    "color": "#d97706",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Equine_Caecum",
    "meshId": "Mesh_Equine_Caecum",
    "systemId": "digestive",
    "speciesId": "equine",
    "latinTaxonomyName": "Caecum (Equus caballus)",
    "name": {
      "en": "Equine Cecum",
      "ar": "أعور الحصان"
    },
    "description": {
      "en": "Immense comma-shaped microbial fermentation vat holding 30-35 liters, occupying the right flank from the tuber coxae to the xiphoid.",
      "ar": "خزان تخمير ميكروبي هائل على شكل فاصلة يتسع لـ 30-35 لتراً ويشغل الخاصرة اليمنى للحصان."
    },
    "bloodSupply": {
      "en": "Medial and lateral cecal arteries off the ileocolic artery.",
      "ar": "الشريانان الأعوريان الأنسي والوحشي من الشريان اللفائفي القولوني."
    },
    "innervation": {
      "en": "Cranial mesenteric plexus and autonomic mesenteric nerves.",
      "ar": "الضفيرة المساريقية الأمامية والأعصاب الذاتية."
    },
    "clinicalPearls": {
      "en": "Cecal impactions can present insidiously with mild intermittent colic and are prone to sudden fatal perforation without prior violent pain.",
      "ar": "انحشار الأعور يظهر بمغص خفيف متقطع ولكنه خطير ومعرض للتمزق والانفجار المفاجئ القاتل."
    },
    "commonPathologies": [
      {
        "en": "Cecal impactions can present insidiously with mild intermittent colic and are pr...",
        "ar": "انحشار الأعور يظهر بمغص خفيف متقطع ولكنه خطير ومعرض للتمزق والانفجار المفاجئ الق..."
      }
    ],
    "cameraFocus": {
      "position": [
        -1.4,
        0.4,
        -0.6
      ],
      "target": [
        -0.2,
        0.2,
        -0.4
      ]
    },
    "color": "#ca8a04",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Equine_ColonAscendens",
    "meshId": "Mesh_Equine_ColonAscendens",
    "systemId": "digestive",
    "speciesId": "equine",
    "latinTaxonomyName": "Colon ascendens et Flexura pelvina",
    "name": {
      "en": "Equine Large Colon & Pelvic Flexure",
      "ar": "القولون الكبير والانثناء الحوضي للحصان"
    },
    "description": {
      "en": "A voluminous, four-tiered colon characterized by a narrow 180-degree turn at the pelvic flexure.",
      "ar": "قولون رباعي المسارات يتميز بدوران حاد بمقدار 180 درجة عند الانثناء الحوضي."
    },
    "bloodSupply": {
      "en": "Colic branch of ileocolic artery and right colic artery.",
      "ar": "الفرع القولوني من اللفائفي القولوني والشريان القولوني الأيمن."
    },
    "innervation": {
      "en": "Cranial and caudal mesenteric autonomic plexuses.",
      "ar": "الضفائر المساريقية الأمامية والخلفية اللاإرادية."
    },
    "clinicalPearls": {
      "en": "The pelvic flexure narrows abruptly from 30 cm to 8 cm; it is the most common site of impaction colic and is readily palpable per rectum.",
      "ar": "يتضيق الانثناء الحوضي فجأة من 30 سم إلى 8 سم وهو الموقع الأكثر عرضة لمغص الانحشار ويمكن جسه عبر المستقيم."
    },
    "commonPathologies": [
      {
        "en": "The pelvic flexure narrows abruptly from 30 cm to 8 cm; it is the most common si...",
        "ar": "يتضيق الانثناء الحوضي فجأة من 30 سم إلى 8 سم وهو الموقع الأكثر عرضة لمغص الانحشا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.2,
        0.4,
        -0.6
      ],
      "target": [
        0,
        0.25,
        -0.4
      ]
    },
    "color": "#d97706",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Equine_Hepar",
    "meshId": "Mesh_Equine_Hepar",
    "systemId": "digestive",
    "speciesId": "equine",
    "latinTaxonomyName": "Hepar (Vesica fellea deest)",
    "name": {
      "en": "Equine Liver (Gallbladder Absent)",
      "ar": "كبد الحصان (بدون مرارة)"
    },
    "description": {
      "en": "Multilobed metabolic organ positioned almost entirely to the right of the median plane; completely lacks a gallbladder.",
      "ar": "عضو أيضي متعدد الفصوص يقع معظمه في الجانب الأيمن من التجويف البطني ويفتقر تماماً للمرارة (كيس الصفراء)."
    },
    "bloodSupply": {
      "en": "Portal vein (75%) and hepatic artery (25%); drained by hepatic veins into caudal vena cava.",
      "ar": "الوريد البابي (75%) والشريان الكبدي (25%) والأوردة الكبدية تصب في الأجوف السفلي."
    },
    "innervation": {
      "en": "Hepatic plexus from celiac ganglion and vagal fibers.",
      "ar": "الضفيرة الكبدية من العقدة الجوفية وألياف العصب المبهم."
    },
    "clinicalPearls": {
      "en": "Horses continuously secrete bile directly into the duodenum; hyperbilirubinemia develops quickly during anorexia.",
      "ar": "تفرز الخيول الصفراء باستمرار إلى الإثني عشر ويرتفع البيليروبين سريعاً عند فقدان الشهية."
    },
    "commonPathologies": [
      {
        "en": "Horses continuously secrete bile directly into the duodenum; hyperbilirubinemia ...",
        "ar": "تفرز الخيول الصفراء باستمرار إلى الإثني عشر ويرتفع البيليروبين سريعاً عند فقدان ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.8,
        0.4
      ],
      "target": [
        -0.05,
        0.6,
        0.2
      ]
    },
    "color": "#854d0e",
    "emissiveColor": "#0284c7",
    "proceduralType": "liver"
  },
  {
    "id": "Mesh_Equine_Larynx",
    "meshId": "Mesh_Equine_Larynx",
    "systemId": "respiratory",
    "speciesId": "equine",
    "latinTaxonomyName": "Larynx (Equus caballus)",
    "name": {
      "en": "Equine Larynx & Vocal Apparatus",
      "ar": "حنجرة الحصان والجهاز الصوتي"
    },
    "description": {
      "en": "Cartilaginous valve regulating airflow between pharynx and trachea, containing arytenoid, thyroid, and cricoid cartilages.",
      "ar": "صمام غضروفي ينظم تدفق الهواء بين البلعوم والقصبة الهوائية، ويتكون من الغضاريف الطرجهارية والدرقية والحلقية."
    },
    "bloodSupply": {
      "en": "Cranial laryngeal artery from external carotid artery; cranial laryngeal vein.",
      "ar": "الشريان الحنجري الأمامي من السباتي الظاهر؛ والوريد الحنجري الأمامي."
    },
    "innervation": {
      "en": "Cranial laryngeal nerve (sensory and cricothyroid muscle) and Recurrent laryngeal nerve (all intrinsic muscles except cricothyroid).",
      "ar": "العصب الحنجري الأمامي (حسي) والعصب الحنجري الراجع (حركي لجميع عضلات الحنجرة ما عدا الحلقية الدرقية)."
    },
    "clinicalPearls": {
      "en": "Recurrent laryngeal neuropathy (RLN / \"Roaring\") causes left-sided hemiplegia due to denervation of the cricoarytenoideus dorsalis muscle.",
      "ar": "اعتلال العصب الحنجري الراجع RLN (الخناق أو الصفير) يسبب شللاً نصفياً للجانب الأيسر لضمور العضلة الحلقية الطرجهارية الظهرية."
    },
    "commonPathologies": [
      {
        "en": "Recurrent laryngeal neuropathy (RLN / \"Roaring\") causes left-sided hemiplegia du...",
        "ar": "اعتلال العصب الحنجري الراجع RLN (الخناق أو الصفير) يسبب شللاً نصفياً للجانب الأي..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        1.1,
        0.9
      ],
      "target": [
        0,
        0.85,
        0.75
      ]
    },
    "color": "#cbd5e1",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Equine_Trachea",
    "meshId": "Mesh_Equine_Trachea",
    "systemId": "respiratory",
    "speciesId": "equine",
    "latinTaxonomyName": "Trachea (Equus caballus)",
    "name": {
      "en": "Equine Trachea",
      "ar": "القصبة الهوائية للحصان"
    },
    "description": {
      "en": "Cartilaginous airway consisting of 50-60 incomplete hyaline rings extending from cricoid cartilage to thoracic bifurcation at T5.",
      "ar": "أنبوب هوائي غضروفي يتكون من 50-60 حلقة زجاجية غير مكتملة يمتد من الحنجرة حتى التفرع الصدري عند الفقرة T5."
    },
    "bloodSupply": {
      "en": "Common carotid arteries in neck; bronchoesophageal artery in thorax.",
      "ar": "الشريان السباتي الأصلي في العنق؛ والشريان القصبي المريئي في الصدر."
    },
    "innervation": {
      "en": "Autonomic branches of vagus (parasympathetic bronchoconstriction) and sympathetic trunk.",
      "ar": "فروع العصب المبهم (نظير ودي مقبض) والجذع الودي (موسع)."
    },
    "clinicalPearls": {
      "en": "Emergency tracheostomy is safely performed at the junction of the upper and middle thirds of the neck between cartilaginous rings 4-6.",
      "ar": "فغر الرغامي الإسعافي يجرى بأمان عند تقاطع الثلث العلوي بالأوسط من الرقبة بين الحلقات الغضروفية 4 إلى 6."
    },
    "commonPathologies": [
      {
        "en": "Emergency tracheostomy is safely performed at the junction of the upper and midd...",
        "ar": "فغر الرغامي الإسعافي يجرى بأمان عند تقاطع الثلث العلوي بالأوسط من الرقبة بين الح..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        0.9,
        0.6
      ],
      "target": [
        0,
        0.72,
        0.45
      ]
    },
    "color": "#94a3b8",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Equine_Pulmo",
    "meshId": "Mesh_Equine_Pulmo",
    "systemId": "respiratory",
    "speciesId": "equine",
    "latinTaxonomyName": "Pulmo sinister (Equus caballus)",
    "name": {
      "en": "Equine Left Lung",
      "ar": "رئة الحصان اليسرى"
    },
    "description": {
      "en": "Elongated, undivided left lung parenchyma lacking deep interlobar fissures, with prominent cardiac notch between 3rd and 6th ribs.",
      "ar": "نسيج رئة يسري ممتد غير مقسم إلى فصوص عميقة، يتميز بثلمة قلبية واسعة بين الضلعين 3 و 6."
    },
    "bloodSupply": {
      "en": "Pulmonary trunk (functional deoxygenated) and bronchoesophageal artery (nutritional oxygenated).",
      "ar": "الجذع الرئوي (وظيفي غير مؤكسج) والشريان القصبي المريئي (مغذٍ مؤكسج)."
    },
    "innervation": {
      "en": "Pulmonary plexus from vagus and sympathetic trunk.",
      "ar": "الضفيرة الرئوية من العصب المبهم والجذع الودي."
    },
    "clinicalPearls": {
      "en": "Equine Asthma (Severe Asthma / \"Heaves\") causes characteristic expiratory abdominal push and \"heave line\" due to external abdominal oblique hypertrophy.",
      "ar": "ربو الخيل الشديد (النهيج) يسبب دفعاً زفيرياً بطنياً وظهور خط النهيج لتضخم العضلة المائلة الظاهرة للبطن."
    },
    "commonPathologies": [
      {
        "en": "Equine Asthma (Severe Asthma / \"Heaves\") causes characteristic expiratory abdomi...",
        "ar": "ربو الخيل الشديد (النهيج) يسبب دفعاً زفيرياً بطنياً وظهور خط النهيج لتضخم العضلة..."
      }
    ],
    "cameraFocus": {
      "position": [
        -1.2,
        0.7,
        0.2
      ],
      "target": [
        -0.2,
        0.5,
        0.15
      ]
    },
    "color": "#f43f5e",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Equine_PulmoDexter",
    "meshId": "Mesh_Equine_PulmoDexter",
    "systemId": "respiratory",
    "speciesId": "equine",
    "latinTaxonomyName": "Pulmo dexter et Lobus accessorius",
    "name": {
      "en": "Equine Right Lung & Accessory Lobe",
      "ar": "رئة الحصان اليمنى والفص الإضافي"
    },
    "description": {
      "en": "Larger than the left lung; includes a cranial lobe, caudal lobe, and an accessory lobe wrapping around the caudal vena cava.",
      "ar": "أكبر من الرئة اليسرى وتتضمن فصاً أمامياً وفصاً خلفياً وفصاً إضافياً يلتف حول الوريد الأجوف السفلي."
    },
    "bloodSupply": {
      "en": "Right pulmonary artery and branches of bronchoesophageal artery.",
      "ar": "الشريان الرئوي الأيمن وتفرعات الشريان القصبي المريئي."
    },
    "innervation": {
      "en": "Pulmonary plexus (vagal and sympathetic).",
      "ar": "الضفيرة الرئوية الذاتية."
    },
    "clinicalPearls": {
      "en": "Aspiration pneumonia from choke or dysphagia preferentially affects the cranioventral dependent regions of the right lung.",
      "ar": "ذات الرئة الاستنشاقية الناجمة عن انسداد المريء تصيب بشكل تفضيلي الأجزاء الأمامية البطنية من الرئة اليمنى."
    },
    "commonPathologies": [
      {
        "en": "Aspiration pneumonia from choke or dysphagia preferentially affects the craniove...",
        "ar": "ذات الرئة الاستنشاقية الناجمة عن انسداد المريء تصيب بشكل تفضيلي الأجزاء الأمامية..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.7,
        0.2
      ],
      "target": [
        0.2,
        0.5,
        0.15
      ]
    },
    "color": "#fb7185",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Equine_Cerebrum",
    "meshId": "Mesh_Equine_Cerebrum",
    "systemId": "nervous",
    "speciesId": "equine",
    "latinTaxonomyName": "Cerebrum (Equus caballus)",
    "name": {
      "en": "Equine Cerebrum",
      "ar": "مخ الحصان"
    },
    "description": {
      "en": "Highly gyrencephalic cerebral hemispheres weighing 500-600 g with complex sulcal patterns mediating voluntary motor and sensory integration.",
      "ar": "نصفا كرة مخيان متطورا التلافيف يزنان 500-600 جم مع نمط شقوق معقد ينسق التكامل الحسي والحركي الإرادي."
    },
    "bloodSupply": {
      "en": "Cerebral arterial circle (Circle of Willis) supplied primarily by internal carotid artery and basilar artery.",
      "ar": "الدائرة الشريانية الدماغية (دائرة ويليس) المزودة أساساً بالشريان السباتي الباطن والشريان القاعدي."
    },
    "innervation": {
      "en": "Meningeal sensory branches of the trigeminal nerve (CN V).",
      "ar": "الفروع السحائية الحسية للعصب ثلاثي التوائم (العصب الخامس)."
    },
    "clinicalPearls": {
      "en": "Equine Protozoal Myeloencephalitis (EPM) and West Nile Encephalitis can cause asymmetric cerebral signs, seizures, and cranial nerve deficits.",
      "ar": "التهاب الدماغ والنخاع الأوالي EPM وفيروس غرب النيل يسببان أعراضاً دماغية غير متناظرة ونوبات واعتلال الأعصاب القحفية."
    },
    "commonPathologies": [
      {
        "en": "Equine Protozoal Myeloencephalitis (EPM) and West Nile Encephalitis can cause as...",
        "ar": "التهاب الدماغ والنخاع الأوالي EPM وفيروس غرب النيل يسببان أعراضاً دماغية غير متن..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        1.2,
        1
      ],
      "target": [
        0,
        0.98,
        0.88
      ]
    },
    "color": "#facc15",
    "emissiveColor": "#0284c7",
    "proceduralType": "brain"
  },
  {
    "id": "Mesh_Equine_Cerebellum",
    "meshId": "Mesh_Equine_Cerebellum",
    "systemId": "nervous",
    "speciesId": "equine",
    "latinTaxonomyName": "Cerebellum (Equus caballus)",
    "name": {
      "en": "Equine Cerebellum",
      "ar": "مخيخ الحصان"
    },
    "description": {
      "en": "Posterior brain structure with folia and deep nuclei coordinating muscular synergy, rate, range, and force of athletic movements.",
      "ar": "بنية دماغية خلفية ذات تلافيف ورقية ونوى عميقة تنسق التآزر العضلي ومعدل ومدى وقوة حركات الحصان."
    },
    "bloodSupply": {
      "en": "Rostral and caudal cerebellar arteries off the basilar artery.",
      "ar": "الشرايان المخيخيان الأمامي والخلفي من الشريان القاعدي."
    },
    "innervation": {
      "en": "Intrinsic Purkinje and granule cell networks; connected via cerebellar peduncles.",
      "ar": "شبكات خلايا بيركنجي والحبيبية الذاتية؛ متصل بالسويقات المخيخية."
    },
    "clinicalPearls": {
      "en": "Cerebellar Abiotrophy in Arabian horses manifests at 1-6 months of age with intentional tremors, dysmetria, and absence of menace response.",
      "ar": "الضمور المخيخي في الخيول العربية يظهر في عمر 1-6 أشهر برعاش قصدي وعدم تناسق حركة الأطراف وغياب استجابة التهديد."
    },
    "commonPathologies": [
      {
        "en": "Cerebellar Abiotrophy in Arabian horses manifests at 1-6 months of age with inte...",
        "ar": "الضمور المخيخي في الخيول العربية يظهر في عمر 1-6 أشهر برعاش قصدي وعدم تناسق حركة..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        1.1,
        0.8
      ],
      "target": [
        0,
        0.92,
        0.76
      ]
    },
    "color": "#eab308",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Equine_MedullaSpinalis",
    "meshId": "Mesh_Equine_MedullaSpinalis",
    "systemId": "nervous",
    "speciesId": "equine",
    "latinTaxonomyName": "Medulla spinalis (Equus caballus)",
    "name": {
      "en": "Equine Spinal Cord",
      "ar": "النخاع الشوكي للحصان"
    },
    "description": {
      "en": "Elongated neural cylinder inside vertebral canal extending from foramen magnum to second sacral vertebra, giving off 42 pairs of spinal nerves.",
      "ar": "أسطوانة عصبية ممتدة داخل القناة الفقرية من الثقبة العظمى حتى الفقرة العجزية الثانية وتتفرع لـ 42 زوجاً من الأعصاب الشوكية."
    },
    "bloodSupply": {
      "en": "Ventral spinal artery and spinal branches of vertebral and intercostal arteries.",
      "ar": "الشريان الشوكي البطني والفروع الشوكية من الشرايين الفقرية والوربية."
    },
    "innervation": {
      "en": "Somatic and autonomic spinal tract conduction.",
      "ar": "توصيل المسالك الشوكية الجسدية والذاتية."
    },
    "clinicalPearls": {
      "en": "Cervical Vertebral Stenotic Myelopathy (CVSM / \"Wobbler Syndrome\") compresses the cord at C3-C5, causing progressive symmetric hindlimb ataxia.",
      "ar": "اعتلال النخاع الرقبي التضيقي CVSM (متلازمة الترنح أو الووبلر) يضغط النخاع عند C3-C5 مسبباً ترنحاً متناظراً في القوائم الخلفية."
    },
    "commonPathologies": [
      {
        "en": "Cervical Vertebral Stenotic Myelopathy (CVSM / \"Wobbler Syndrome\") compresses th...",
        "ar": "اعتلال النخاع الرقبي التضيقي CVSM (متلازمة الترنح أو الووبلر) يضغط النخاع عند C3..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.6,
        1,
        0.4
      ],
      "target": [
        0,
        0.88,
        0.2
      ]
    },
    "color": "#fef08a",
    "emissiveColor": "#0284c7",
    "proceduralType": "spine"
  },
  {
    "id": "Mesh_Equine_NervusVagus",
    "meshId": "Mesh_Equine_NervusVagus",
    "systemId": "nervous",
    "speciesId": "equine",
    "latinTaxonomyName": "Nervus vagus et Nervus laryngeus recurrens",
    "name": {
      "en": "Equine Vagus & Recurrent Laryngeal Nerve",
      "ar": "العصب المبهم والحنجري الراجع للحصان"
    },
    "description": {
      "en": "The tenth cranial nerve traveling within the vagosympathetic trunk in the carotid sheath, looping around the aortic arch to ascend to the larynx.",
      "ar": "العصب القحفي العاشر الذي يمر ضمن الجذع المبهمي الودي في غمد السباتي، ويلتف حول قوس الأبهر صاعداً للحنجرة."
    },
    "bloodSupply": {
      "en": "Vasa nervorum off common carotid and bronchoesophageal arteries.",
      "ar": "الأوعية العصبية المغذية من السباتي الأصلي والشريان القصبي المريئي."
    },
    "innervation": {
      "en": "Parasympathetic visceral innervation to thoracic and abdominal organs.",
      "ar": "أعصاب لاإرادية نظيرة ودية للأحشاء الصدرية والبطنية."
    },
    "clinicalPearls": {
      "en": "Guttural pouch mycosis (Aspergillus) erodes the adjacent vagus and glossopharyngeal nerves, causing acute dysphagia and Horner's syndrome.",
      "ar": "فطار الأكياس الهوائية (الرشاشيات) يؤدي لتآكل العصبين المبهم والبلعومي اللساني مسبباً عسر بلع حاد ومتلازمة هورنر."
    },
    "commonPathologies": [
      {
        "en": "Guttural pouch mycosis (Aspergillus) erodes the adjacent vagus and glossopharyng...",
        "ar": "فطار الأكياس الهوائية (الرشاشيات) يؤدي لتآكل العصبين المبهم والبلعومي اللساني مس..."
      }
    ],
    "cameraFocus": {
      "position": [
        -0.6,
        0.8,
        0.4
      ],
      "target": [
        -0.1,
        0.6,
        0.35
      ]
    },
    "color": "#fef9c3",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Equine_RenDexter",
    "meshId": "Mesh_Equine_RenDexter",
    "systemId": "urogenital",
    "speciesId": "equine",
    "latinTaxonomyName": "Ren dexter (Forma cordis)",
    "name": {
      "en": "Equine Right Kidney (Heart-Shaped)",
      "ar": "كلية الحصان اليمنى (قلبية الشكل)"
    },
    "description": {
      "en": "Distinctive heart-shaped or trefoil kidney positioned more cranially than the left (under ribs 16-18), embedded in sublumbar fat.",
      "ar": "كلية مميزة على شكل قلب أو ورقة نفل تستقر أمام الكلية اليسرى (تحت الأضلاع 16-18) مغمورة في الشحم القطني."
    },
    "bloodSupply": {
      "en": "Right renal artery off abdominal aorta; right renal vein to caudal vena cava.",
      "ar": "الشريان الكلوي الأيمن من الأبهر؛ والوريد الكلوي الأيمن يصب في الأجوف الخلفي."
    },
    "innervation": {
      "en": "Renal autonomic plexus from celiacomesenteric ganglion.",
      "ar": "الضفيرة الكلوية الذاتية من العقدة الجوفية المساريقية."
    },
    "clinicalPearls": {
      "en": "The right kidney is wedged cranially against the liver and is typically not palpable per rectum, unlike the left kidney.",
      "ar": "تستقر الكلية اليمنى ملاصقة للكبد ولا يمكن جسها عبر المستقيم، بخلاف الكلية اليسرى السهلة الجس."
    },
    "commonPathologies": [
      {
        "en": "The right kidney is wedged cranially against the liver and is typically not palp...",
        "ar": "تستقر الكلية اليمنى ملاصقة للكبد ولا يمكن جسها عبر المستقيم، بخلاف الكلية اليسرى..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.8,
        0.2
      ],
      "target": [
        0.22,
        0.68,
        0.05
      ]
    },
    "color": "#701a75",
    "emissiveColor": "#0284c7",
    "proceduralType": "kidney"
  },
  {
    "id": "Mesh_Equine_RenSinister",
    "meshId": "Mesh_Equine_RenSinister",
    "systemId": "urogenital",
    "speciesId": "equine",
    "latinTaxonomyName": "Ren sinister",
    "name": {
      "en": "Equine Left Kidney (Bean-Shaped)",
      "ar": "كلية الحصان اليسرى (كلوية الشكل)"
    },
    "description": {
      "en": "Elongated bean-shaped kidney located more caudally (under L1-L3), directly adjacent to the spleen and left adrenal gland.",
      "ar": "كلية ممتدة تشبه حبة الفاصولياء تستقر في موقع خلفي (تحت الفقرات L1-L3) ملاصقة للطحال والغدة الكظرية اليسرى."
    },
    "bloodSupply": {
      "en": "Left renal artery and left renal vein.",
      "ar": "الشريان الكلوي الأيسر والوريد الكلوي الأيسر."
    },
    "innervation": {
      "en": "Renal autonomic plexus.",
      "ar": "الضفيرة الكلوية الذاتية."
    },
    "clinicalPearls": {
      "en": "Readily palpable per rectum: smooth, firm, non-painful; its caudal pole is routinely evaluated during colic examination.",
      "ar": "تُجس بسهولة عبر المستقيم: ملساء متماسكة وغير مؤلمة؛ ويُفحص قطبها الخلفي روتينياً في حالات المغص."
    },
    "commonPathologies": [
      {
        "en": "Readily palpable per rectum: smooth, firm, non-painful; its caudal pole is routi...",
        "ar": "تُجس بسهولة عبر المستقيم: ملساء متماسكة وغير مؤلمة؛ ويُفحص قطبها الخلفي روتينياً..."
      }
    ],
    "cameraFocus": {
      "position": [
        -1.1,
        0.8,
        -0.1
      ],
      "target": [
        -0.22,
        0.65,
        -0.15
      ]
    },
    "color": "#86198f",
    "emissiveColor": "#0284c7",
    "proceduralType": "kidney"
  },
  {
    "id": "Mesh_Equine_VesicaUrinaria",
    "meshId": "Mesh_Equine_VesicaUrinaria",
    "systemId": "urogenital",
    "speciesId": "equine",
    "latinTaxonomyName": "Vesica urinaria (Equus caballus)",
    "name": {
      "en": "Equine Urinary Bladder",
      "ar": "مثانة الحصان"
    },
    "description": {
      "en": "Distensible piriform musculo-membranous sac lying on the pubic bones when empty and extending into the caudal abdominal cavity when filled.",
      "ar": "كيس عضلي غشائي كمثري قابل للتمدد يستقر على عظام العانة عند الفراغ ويمتد لتجويف البطن عند امتلائه."
    },
    "bloodSupply": {
      "en": "Cranial and caudal vesical arteries (internal iliac system).",
      "ar": "الشرايين المثانية الأمامية والخلفية (من الحرقفي الباطن)."
    },
    "innervation": {
      "en": "Pelvic nerve (parasympathetic detrusor), hypogastric nerve (sympathetic sphincter), and pudendal nerve.",
      "ar": "العصب الحوضي (لاإرادي لمفرغة البول) وعصب تحت المعدة والعصب الاستحيائي."
    },
    "clinicalPearls": {
      "en": "Urolithiasis (cystic calculi / sabulous cystitis) in horses produces calcium carbonate stones that are palpable per rectum.",
      "ar": "حصوات المثانة في الخيل تتكون غالباً من كربونات الكالسيوم الخشنة وتُجس بسهولة عبر المستقيم."
    },
    "commonPathologies": [
      {
        "en": "Urolithiasis (cystic calculi / sabulous cystitis) in horses produces calcium car...",
        "ar": "حصوات المثانة في الخيل تتكون غالباً من كربونات الكالسيوم الخشنة وتُجس بسهولة عبر..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.6,
        0.5,
        -0.7
      ],
      "target": [
        0,
        0.38,
        -0.6
      ]
    },
    "color": "#a21caf",
    "emissiveColor": "#0284c7",
    "proceduralType": "bladder"
  },
  {
    "id": "Mesh_Equine_UterusBicornis",
    "meshId": "Mesh_Equine_UterusBicornis",
    "systemId": "urogenital",
    "speciesId": "equine",
    "latinTaxonomyName": "Uterus bicornis (Equus caballus)",
    "name": {
      "en": "Equine Bicornuate Uterus",
      "ar": "رحم الفرس ثنائي القرنين"
    },
    "description": {
      "en": "T-shaped uterus with substantial uterine body (~18-20 cm) and two divergent horns suspended by the broad ligament.",
      "ar": "رحم على شكل حرف T ذو جسم رحمي واضح (~18-20 سم) وقرنين متباعدين معلق بالرباط العريض."
    },
    "bloodSupply": {
      "en": "Uterine artery (from external iliac), ovarian artery, and vaginal artery.",
      "ar": "الشريان الرحمي (من الحرقفي الظاهر) والشريان المبيضي والشريان المهبلي."
    },
    "innervation": {
      "en": "Uterovaginal plexus from pelvic and hypogastric nerves.",
      "ar": "الضفيرة الرحمية المهبلية من الأعصاب الحوضية وتحت المعدة."
    },
    "clinicalPearls": {
      "en": "Fetal mobility phase: The equine embryo migrates through both horns and body up to 12-14 times per day before fixation on Day 16.",
      "ar": "مرحلة حركة الجنين: يهاجر جنين الخيل بين القرنين وجسم الرحم 12-14 مرة يومياً قبل ثبوته في اليوم 16."
    },
    "commonPathologies": [
      {
        "en": "Fetal mobility phase: The equine embryo migrates through both horns and body up ...",
        "ar": "مرحلة حركة الجنين: يهاجر جنين الخيل بين القرنين وجسم الرحم 12-14 مرة يومياً قبل ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.6,
        0.6,
        -0.6
      ],
      "target": [
        0,
        0.45,
        -0.5
      ]
    },
    "color": "#f43f5e",
    "emissiveColor": "#0284c7",
    "proceduralType": "heart"
  },
  {
    "id": "Mesh_Equine_Cranium",
    "meshId": "Mesh_Equine_Cranium",
    "systemId": "skeletal",
    "speciesId": "equine",
    "latinTaxonomyName": "Cranium (Equus caballus)",
    "name": {
      "en": "Equine Skull",
      "ar": "جمجمة الحصان"
    },
    "description": {
      "en": "Elongated facial skull with complete osseous orbit, extensive paranasal sinuses (frontal, maxillary), and hypsodont dentition.",
      "ar": "جمجمة وجهية متطاولة ذات حجاج عيني عظمي مغلق وجيوب أنفية متسعة وأسنان نامية باستمرار."
    },
    "bloodSupply": {
      "en": "Maxillary artery, facial artery, and external carotid branches.",
      "ar": "الشريان الفكي والشريان الوجهي وفروع السباتي الظاهر."
    },
    "innervation": {
      "en": "Trigeminal nerve (CN V, sensory) and facial nerve (CN VII, motor to muscles of facial expression).",
      "ar": "العصب ثلاثي التوائم (حسي) والعصب الوجهي (حركي لعضلات الوجه التعبيرية)."
    },
    "clinicalPearls": {
      "en": "Maxillary sinusitis commonly arises as a complication of dental root abscesses of the 4th premolar or molars (108-111 / 208-211).",
      "ar": "التهاب الجيب الفكي العلوي ينجم غالباً عن خراجات جذور الضواحك والأضراس العليا الخلفية الممتدة للجيب."
    },
    "commonPathologies": [
      {
        "en": "Maxillary sinusitis commonly arises as a complication of dental root abscesses o...",
        "ar": "التهاب الجيب الفكي العلوي ينجم غالباً عن خراجات جذور الضواحك والأضراس العليا الخ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        1.2,
        1.1
      ],
      "target": [
        0,
        0.95,
        0.95
      ]
    },
    "color": "#f8fafc",
    "emissiveColor": "#0284c7",
    "proceduralType": "skull"
  },
  {
    "id": "Mesh_Equine_ColumnaVertebralis",
    "meshId": "Mesh_Equine_ColumnaVertebralis",
    "systemId": "skeletal",
    "speciesId": "equine",
    "latinTaxonomyName": "Columna vertebralis (C7 T18 L6 S5 Ca15-21)",
    "name": {
      "en": "Equine Vertebral Column",
      "ar": "العمود الفقري للحصان"
    },
    "description": {
      "en": "Axial skeletal pillar characterized by 7 cervical, 18 thoracic, 6 lumbar, 5 fused sacral, and 15-21 caudal vertebrae.",
      "ar": "الدعامة الهيكلية المحورية وتتميز بـ 7 فقرات رقبية، 18 صدرية، 6 قطنية، 5 عجزية ملتحمة، و15-21 ذيلية."
    },
    "bloodSupply": {
      "en": "Intercostal, lumbar, and vertebral spinal arteries.",
      "ar": "الشرايين الوربية والقطنية والفقرية الشوكية."
    },
    "innervation": {
      "en": "Dorsal and ventral rami of segmental spinal nerves.",
      "ar": "الفروع الظهرية والبطنية للأعصاب الشوكية القطعية."
    },
    "clinicalPearls": {
      "en": "Kissing Spines (Overriding Dorsal Spinous Processes) in thoracic vertebrae T13-T18 causes back soreness, poor performance, and reluctance to canter.",
      "ar": "مرض احتكاك النواتئ الفقرية (Kissing Spines) في الفقرات T13-T18 يسبب ألماً ظهرياً وتراجعاً في الأداء ورفض العدو."
    },
    "commonPathologies": [
      {
        "en": "Kissing Spines (Overriding Dorsal Spinous Processes) in thoracic vertebrae T13-T...",
        "ar": "مرض احتكاك النواتئ الفقرية (Kissing Spines) في الفقرات T13-T18 يسبب ألماً ظهرياً..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        1.1,
        0.2
      ],
      "target": [
        0,
        0.85,
        0.1
      ]
    },
    "color": "#f1f5f9",
    "emissiveColor": "#0284c7",
    "proceduralType": "spine"
  },
  {
    "id": "Mesh_Equine_OssaDigiti",
    "meshId": "Mesh_Equine_OssaDigiti",
    "systemId": "skeletal",
    "speciesId": "equine",
    "latinTaxonomyName": "Metacarpus III, Phalanx proximalis, media, distalis et Os naviculare",
    "name": {
      "en": "Equine Distal Limb & Hoof Bones",
      "ar": "عظام القائمة البعيدة والحافر للحصان"
    },
    "description": {
      "en": "Single weight-bearing third digit: Cannon bone (McIII), long pastern (P1), short pastern (P2), coffin bone (P3), and navicular bone.",
      "ar": "الإصبع الثالث الحامل للوزن بالكامل: عظم الساق الثالث، السلامى الأولى والثانية وعظم الحافر (السلامى الثالثة) والعظم الزورقي."
    },
    "bloodSupply": {
      "en": "Medial and lateral palmar digital arteries off median artery.",
      "ar": "الشريانان الإصبعيان الراحيان الأنسي والوحشي من الشريان الأوسط."
    },
    "innervation": {
      "en": "Medial and lateral palmar digital nerves.",
      "ar": "العصبان الإصبعيان الراحيان الأنسي والوحشي."
    },
    "clinicalPearls": {
      "en": "Laminitis (Founder) causes degradation of the digital laminae, leading to downward rotation or sinking of the coffin bone (P3) through the sole.",
      "ar": "التهاب الصفائح الحساسة (الحمر أو الفاوندر) يفكك صفائح الحافر مؤدياً لدوران أو هبوط عظم الحافر P3 نحو باطن الحافر."
    },
    "commonPathologies": [
      {
        "en": "Laminitis (Founder) causes degradation of the digital laminae, leading to downwa...",
        "ar": "التهاب الصفائح الحساسة (الحمر أو الفاوندر) يفكك صفائح الحافر مؤدياً لدوران أو هب..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.4,
        0.5
      ],
      "target": [
        0.28,
        0.05,
        0.35
      ]
    },
    "color": "#e2e8f0",
    "emissiveColor": "#0284c7",
    "proceduralType": "limb"
  },
  {
    "id": "Mesh_Equine_Costae",
    "meshId": "Mesh_Equine_Costae",
    "systemId": "skeletal",
    "speciesId": "equine",
    "latinTaxonomyName": "Costae (18 paria)",
    "name": {
      "en": "Equine Rib Cage (18 Pairs)",
      "ar": "القفص الضلعي للحصان (18 زوجاً)"
    },
    "description": {
      "en": "Eighteen pairs of ribs (8 true sternal and 10 false asternal), creating a deep, laterally compressed thoracic cage.",
      "ar": "ثمانية عشر زوجاً من الأضلاع (8 حقيقية قصية و10 كاذبة لاقصية) تشكل قفصاً صدرياً عميقاً ومضغوطاً جانبياً."
    },
    "bloodSupply": {
      "en": "Intercostal arteries originating directly from thoracic aorta.",
      "ar": "الشرايين الوربية المتفرعة مباشرة من الأبهر الصدري."
    },
    "innervation": {
      "en": "Intercostal nerves running along the caudal border of each rib.",
      "ar": "الأعصاب الوربية التي تسير عند الحافة الخلفية لكل ضلع."
    },
    "clinicalPearls": {
      "en": "Thoracocentesis (pleural tap) is performed in the 7th or 8th intercostal space immediately dorsal to the lateral thoracic vein to avoid puncture of intercostal vessels.",
      "ar": "بزل الصدر يجرى في الفراغ الوربي السابع أو الثامن أعلى الوريد الصدري الوحشي مباشرة لتفادي إصابة الأوعية الوربية."
    },
    "commonPathologies": [
      {
        "en": "Thoracocentesis (pleural tap) is performed in the 7th or 8th intercostal space i...",
        "ar": "بزل الصدر يجرى في الفراغ الوربي السابع أو الثامن أعلى الوريد الصدري الوحشي مباشر..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.3,
        0.7,
        0.2
      ],
      "target": [
        0,
        0.55,
        0.25
      ]
    },
    "color": "#e2e8f0",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Equine_MusculusSerratusVentralis",
    "meshId": "Mesh_Equine_MusculusSerratusVentralis",
    "systemId": "muscular",
    "speciesId": "equine",
    "latinTaxonomyName": "Musculus serratus ventralis",
    "name": {
      "en": "Equine Serratus Ventralis Muscle",
      "ar": "العضلة المسننة البطنية للحصان"
    },
    "description": {
      "en": "Massive fan-shaped thoracic and cervical muscle forming the primary muscular sling that suspends the horse's torso between the forelimbs with no clavicle.",
      "ar": "عضلة مروحية هائلة تشكل الحمالة العضلية الرئيسية التي تعلق جذع الحصان بين القائمتين الأماميتين بدون ترقوة."
    },
    "bloodSupply": {
      "en": "Lateral thoracic and deep cervical arteries.",
      "ar": "الشريانان الصدري الوحشي والرقبي العميق."
    },
    "innervation": {
      "en": "Long thoracic nerve (Nervus thoracicus longus).",
      "ar": "العصب الصدري الطويل."
    },
    "clinicalPearls": {
      "en": "Traumatic rupture of the serratus ventralis causes dramatic dropping of the thorax and dorsal elevation of the scapula above the withers.",
      "ar": "تمزق العضلة المسننة البطنية الرضحي يسبب هبوطاً عنيفاً للصدر وبروز عظم لوح الكتف للأعلى فوق الغارب."
    },
    "commonPathologies": [
      {
        "en": "Traumatic rupture of the serratus ventralis causes dramatic dropping of the thor...",
        "ar": "تمزق العضلة المسننة البطنية الرضحي يسبب هبوطاً عنيفاً للصدر وبروز عظم لوح الكتف ..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.8,
        0.4
      ],
      "target": [
        0.2,
        0.6,
        0.3
      ]
    },
    "color": "#991b1b",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Equine_ApparatusStatocinetica",
    "meshId": "Mesh_Equine_ApparatusStatocinetica",
    "systemId": "muscular",
    "speciesId": "equine",
    "latinTaxonomyName": "Apparatus statocinetica (M. interosseus III et Tendines)",
    "name": {
      "en": "Equine Stay Apparatus (Suspensory Ligament & Tendons)",
      "ar": "جهاز الثبات الميكانيكي (الرباط المعلق والأوتار)"
    },
    "description": {
      "en": "Anatomical biomechanical system of non-fatiguing fibrous ligaments and tendons that locks the horse's joints, permitting sleep while standing.",
      "ar": "نظام ميكانيكي حيوي من أربطة وأوتار ليفية لا تتعب يقفل مفاصل الحصان، مما يتيح له النوم والوقوف دون جهد عضلي."
    },
    "bloodSupply": {
      "en": "Median and digital arterial arches.",
      "ar": "الأقواس الشريانية المتوسطة والإصبعية."
    },
    "innervation": {
      "en": "Palmar nerves.",
      "ar": "الأعصاب الراحية."
    },
    "clinicalPearls": {
      "en": "Suspensory desmitis is a major lameness entity in performance horses; desmotomy of the check ligaments is used to treat flexural limb deformities in foals.",
      "ar": "التهاب الرباط المعلق سبب رئيسي لعرج خيول القفز؛ وقطع الأربطة المساعدة يُجرى لعلاج التشوهات الانثناءية في القوائم لدى المهور."
    },
    "commonPathologies": [
      {
        "en": "Suspensory desmitis is a major lameness entity in performance horses; desmotomy ...",
        "ar": "التهاب الرباط المعلق سبب رئيسي لعرج خيول القفز؛ وقطع الأربطة المساعدة يُجرى لعلا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        0.4,
        0.4
      ],
      "target": [
        0.28,
        0.25,
        0.3
      ]
    },
    "color": "#e0e7ff",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Equine_MusculusGluteusMedius",
    "meshId": "Mesh_Equine_MusculusGluteusMedius",
    "systemId": "muscular",
    "speciesId": "equine",
    "latinTaxonomyName": "Musculus gluteus medius",
    "name": {
      "en": "Equine Gluteus Medius Muscle",
      "ar": "العضلة الألوية الوسطى للحصان"
    },
    "description": {
      "en": "Enormously developed pelvic muscle extending onto the aponeurosis of the longissimus dorsi, providing the primary engine for gallop propulsion.",
      "ar": "عضلة حوضية هائلة النمو تمتد فوق صفاق العضلة الظهرية الطولى، وتمثل المحرك العضلي الرئيسي لقوة الدفع أثناء العدو."
    },
    "bloodSupply": {
      "en": "Cranial and caudal gluteal arteries.",
      "ar": "الشريانان الألويان الأمامي والخلفي."
    },
    "innervation": {
      "en": "Cranial gluteal nerve (L6-S1).",
      "ar": "العصب الألوي الأمامي (L6-S1)."
    },
    "clinicalPearls": {
      "en": "Gluteal muscle atrophy is a key sign of chronic sacroiliac joint disease or equine motor neuron disease (EMND).",
      "ar": "ضمور العضلة الألوية علامة تشخيصية رئيسية لمرض المفصل العجزي الحرقفي المزمن أو مرض العصبون الحركي EMND."
    },
    "commonPathologies": [
      {
        "en": "Gluteal muscle atrophy is a key sign of chronic sacroiliac joint disease or equi...",
        "ar": "ضمور العضلة الألوية علامة تشخيصية رئيسية لمرض المفصل العجزي الحرقفي المزمن أو مر..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.9,
        -0.2
      ],
      "target": [
        0.22,
        0.72,
        -0.38
      ]
    },
    "color": "#b91c1c",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Equine_MusculusBrachiocephalicus",
    "meshId": "Mesh_Equine_MusculusBrachiocephalicus",
    "systemId": "muscular",
    "speciesId": "equine",
    "latinTaxonomyName": "Musculus brachiocephalicus",
    "name": {
      "en": "Equine Brachiocephalicus Muscle",
      "ar": "العضلة العضدية الرأسية للحصان"
    },
    "description": {
      "en": "Elongated compound muscle running along the dorsolateral neck from mastoid and occipital bones to the humeral crest, drawing the limb forward.",
      "ar": "عضلة ممتدة على طول الجانب الظهري الوحشي للعنق من العظمين الخشائي والقذالي لعظم العضد لسحب القائمة للأمام."
    },
    "bloodSupply": {
      "en": "Carotid and superficial cervical arteries.",
      "ar": "الشريانان السباتي والرقبي السطحي."
    },
    "innervation": {
      "en": "Accessory nerve (CN XI) and cervical spinal nerves.",
      "ar": "العصب الإضافي (العصب الحادي عشر) والأعصاب الشوكية الرقبية."
    },
    "clinicalPearls": {
      "en": "Forms the dorsal boundary of the jugular groove (Sulcus jugularis); crucial surgical landmark for venipuncture and catheter placement.",
      "ar": "تشكل الحد الظهري للميزاب الوداجي؛ وهي معلم جراحي حاسم لسحب الدم وتركيب القسطرة الوريدية."
    },
    "commonPathologies": [
      {
        "en": "Forms the dorsal boundary of the jugular groove (Sulcus jugularis); crucial surg...",
        "ar": "تشكل الحد الظهري للميزاب الوداجي؛ وهي معلم جراحي حاسم لسحب الدم وتركيب القسطرة ا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.9,
        0.8
      ],
      "target": [
        0.12,
        0.75,
        0.6
      ]
    },
    "color": "#991b1b",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Bovine_Cor",
    "meshId": "Mesh_Bovine_Cor",
    "systemId": "cardiovascular",
    "speciesId": "bovine",
    "latinTaxonomyName": "Cor (Bos taurus)",
    "name": {
      "en": "Bovine Conical Heart",
      "ar": "قلب الأبقار المخروطي"
    },
    "description": {
      "en": "Conical four-chambered heart weighing 2.5-3.5 kg, encased in a fibrous pericardium anchored directly to the sternum by two sternopericardiac ligaments.",
      "ar": "قلب مخروطي رباعي التجاويف يزن 2.5-3.5 كجم داخل غشاء تامور ليفي مثبت بعظم القص برباطين قصيين تأموريين."
    },
    "bloodSupply": {
      "en": "Left and right coronary arteries arising from aortic sinuses; left coronary dominance.",
      "ar": "الشريانان التاجيان الأيمن والأيسر مع سيادة الشريان التاجي الأيسر."
    },
    "innervation": {
      "en": "Cardiac autonomic plexus (vagal and sympathetic thoracic branches).",
      "ar": "الضفيرة القلبية الذاتية (المبهمية والودية الصدرية)."
    },
    "clinicalPearls": {
      "en": "Traumatic Pericarditis (\"Hardware Disease\"): Foreign bodies piercing the reticulum enter the ventral pericardium, producing muffled splashing heart sounds.",
      "ar": "التهاب التامور الرضحي (مرض السلك المعدني): الأجسام المعدنية تخترق الشبكية لكيس القلب مسببة أصوات خض مضطربة مكتومة."
    },
    "commonPathologies": [
      {
        "en": "Traumatic Pericarditis (\"Hardware Disease\"): Foreign bodies piercing the reticul...",
        "ar": "التهاب التامور الرضحي (مرض السلك المعدني): الأجسام المعدنية تخترق الشبكية لكيس ا..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.6,
        0.35
      ],
      "target": [
        0.1,
        0.45,
        0.35
      ]
    },
    "color": "#dc2626",
    "emissiveColor": "#0284c7",
    "proceduralType": "heart"
  },
  {
    "id": "Mesh_Bovine_OssaCordis",
    "meshId": "Mesh_Bovine_OssaCordis",
    "systemId": "cardiovascular",
    "speciesId": "bovine",
    "latinTaxonomyName": "Ossa cordis (Os cordis dextrum et sinistrum)",
    "name": {
      "en": "Bovine Heart Bones (Ossa Cordis)",
      "ar": "عظمتا القلب في الأبقار (Ossa Cordis)"
    },
    "description": {
      "en": "Two true splanchnic heterotopic bones (right larger, left smaller) embedded in the fibrous cardiac ring (anulus fibrosus) supporting the aortic valve.",
      "ar": "عظمتان حشويتان حقيقيتان (اليمنى أكبر واليسرى أصغر) مستقرتان في الحلقة الليفية القلبية لدعم الصمام الأبهري."
    },
    "bloodSupply": {
      "en": "Microvascular capillaries from aortic root coronary base.",
      "ar": "شعيرات دموية دقيقة من قاعدة الشرايين التاجية في جذر الأبهر."
    },
    "innervation": {
      "en": "None (structural skeletal support of fibrous cardiac skeleton).",
      "ar": "لا يوجد (دعامة ميكانيكية هيكلية للهيكل الليفي للقلب)."
    },
    "clinicalPearls": {
      "en": "The os cordis serves as a rigid skeletal foundation preventing aortic orifice distortion during the massive systolic pressure surges of large ruminants.",
      "ar": "تعمل عظمتا القلب كقاعدة هيكلية صلبة تمنع تشوه الفوهة الأبهرية أثناء طفرات الضغط الانقباضي الهائلة للأبقار."
    },
    "commonPathologies": [
      {
        "en": "The os cordis serves as a rigid skeletal foundation preventing aortic orifice di...",
        "ar": "تعمل عظمتا القلب كقاعدة هيكلية صلبة تمنع تشوه الفوهة الأبهرية أثناء طفرات الضغط ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.7,
        0.4
      ],
      "target": [
        0.08,
        0.55,
        0.35
      ]
    },
    "color": "#f8fafc",
    "emissiveColor": "#0284c7",
    "proceduralType": "heart"
  },
  {
    "id": "Mesh_Bovine_Aorta",
    "meshId": "Mesh_Bovine_Aorta",
    "systemId": "cardiovascular",
    "speciesId": "bovine",
    "latinTaxonomyName": "Aorta et Truncus brachiocephalicus",
    "name": {
      "en": "Bovine Aorta & Brachiocephalic Trunk",
      "ar": "أبهر الأبقار والجذع العضدي الرأسي"
    },
    "description": {
      "en": "Heavy elastic arterial conduit; the brachiocephalic trunk is the single massive arterial branch leaving the aortic arch in cattle.",
      "ar": "قناة شريانية مرنة سميكة؛ ويعد الجذع العضدي الرأسي الفرع الشرياني الهائل الوحيد المتفرع من قوس الأبهر في الأبقار."
    },
    "bloodSupply": {
      "en": "High-pressure systemic outflow delivering 60-80 L/min of blood.",
      "ar": "المجرى الجهازي عالي الضغط يضخ 60-80 لتر/دقيقة من الدم."
    },
    "innervation": {
      "en": "Aortic baroreceptor plexus via vagus nerve (CN X).",
      "ar": "ضفيرة مستقبلات الضغط الأبهرية عبر العصب المبهم."
    },
    "clinicalPearls": {
      "en": "Cattle have only one branch arising from the aortic arch (Truncus brachiocephalicus), from which both subclavian and bicarotid trunks arise.",
      "ar": "تتميز الأبقار بوجود فرع شرياني وحيد من قوس الأبهر (الجذع العضدي الرأسي) تتفرع منه الشرايين تحت الترقوية والسباتية."
    },
    "commonPathologies": [
      {
        "en": "Cattle have only one branch arising from the aortic arch (Truncus brachiocephali...",
        "ar": "تتميز الأبقار بوجود فرع شرياني وحيد من قوس الأبهر (الجذع العضدي الرأسي) تتفرع من..."
      }
    ],
    "cameraFocus": {
      "position": [
        1,
        0.9,
        0.3
      ],
      "target": [
        0,
        0.75,
        0.25
      ]
    },
    "color": "#b91c1c",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Bovine_VenaAzygosSinistra",
    "meshId": "Mesh_Bovine_VenaAzygosSinistra",
    "systemId": "cardiovascular",
    "speciesId": "bovine",
    "latinTaxonomyName": "Vena azygos sinistra (Vena hemiazygos)",
    "name": {
      "en": "Bovine Left Azygos Vein",
      "ar": "الوريد الفرد الأيسر في الأبقار"
    },
    "description": {
      "en": "Bovine characteristic vein: Unlike horses and dogs, the left azygos vein develops fully in cattle and drains directly into the coronary sinus.",
      "ar": "وريد مميز للأبقار: بخلاف الخيل والكلاب يتطور الوريد الفرد الأيسر بالكامل في البقر ويصب مباشرة في الجيب التاجي للقلب."
    },
    "bloodSupply": {
      "en": "Venous drainage from thoracic body wall and dorsal intercostal spaces.",
      "ar": "التصريف الوريدي لجدار الصدر والأوردة الوربية الظهرية."
    },
    "innervation": {
      "en": "Sympathetic vasomotor autonomic innervation.",
      "ar": "التعصيب الودي الحركي الوعائي."
    },
    "clinicalPearls": {
      "en": "The left azygos vein terminates directly into the coronary sinus of the right atrium; a right azygos vein is small or missing in ruminants.",
      "ar": "يصب الوريد الفرد الأيسر مباشرة في الجيب التاجي للأذين الأيمن، ويكون الفرد الأيمن ضامراً أو غائباً في المجترات."
    },
    "commonPathologies": [
      {
        "en": "The left azygos vein terminates directly into the coronary sinus of the right at...",
        "ar": "يصب الوريد الفرد الأيسر مباشرة في الجيب التاجي للأذين الأيمن، ويكون الفرد الأيمن..."
      }
    ],
    "cameraFocus": {
      "position": [
        -1,
        0.7,
        0.3
      ],
      "target": [
        -0.12,
        0.6,
        0.2
      ]
    },
    "color": "#1e40af",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Bovine_Rumen",
    "meshId": "Mesh_Bovine_Rumen",
    "systemId": "digestive",
    "speciesId": "bovine",
    "latinTaxonomyName": "Rumen (Bos taurus)",
    "name": {
      "en": "Bovine Rumen (Paunch)",
      "ar": "كرش الأبقار"
    },
    "description": {
      "en": "Massive microbial anaerobic fermentation vat (150-200 L) occupying the entire left abdominal cavity, lined with keratinized papillae.",
      "ar": "خزان تخمير ميكروبي لاهوائي هائل (150-200 لتر) يشغل الجانب الأيسر بالكامل من البطن، مبطن بحليمات قرنية لامتصاص الأحماض الدهنية."
    },
    "bloodSupply": {
      "en": "Right and left ruminal arteries from celiac artery; ruminal veins draining into hepatic portal vein.",
      "ar": "الشريانان الكرشيان الأيمن والأيسر من الشريان الجوفي؛ والأوردة الكرشية تصب في الوريد البابي."
    },
    "innervation": {
      "en": "Dorsal and ventral vagal nerve trunks (CN X).",
      "ar": "الجذعان المبهمان الظهري والبطني (العصب العاشر)."
    },
    "clinicalPearls": {
      "en": "Auscultated in the left paralumbar fossa: 1 to 3 primary mixing contractions per 2 minutes. Absence indicates ruminal atony/stasis.",
      "ar": "يُسمع في الخاصرة اليسرى: 1 إلى 3 حركات خلط كل دقيقتين، واختفاؤها يدل على خمول وشلل الكرش."
    },
    "commonPathologies": [
      {
        "en": "Auscultated in the left paralumbar fossa: 1 to 3 primary mixing contractions per...",
        "ar": "يُسمع في الخاصرة اليسرى: 1 إلى 3 حركات خلط كل دقيقتين، واختفاؤها يدل على خمول وش..."
      }
    ],
    "cameraFocus": {
      "position": [
        -1.6,
        0.7,
        -0.3
      ],
      "target": [
        -0.4,
        0.4,
        -0.2
      ]
    },
    "color": "#ca8a04",
    "emissiveColor": "#0284c7",
    "proceduralType": "rumen"
  },
  {
    "id": "Mesh_Bovine_Reticulum",
    "meshId": "Mesh_Bovine_Reticulum",
    "systemId": "digestive",
    "speciesId": "bovine",
    "latinTaxonomyName": "Reticulum et Pericardium",
    "name": {
      "en": "Bovine Reticulum (Honeycomb)",
      "ar": "قلنسوة الأبقار (الشبكية)"
    },
    "description": {
      "en": "Second forestomach with honeycomb mucosal ridges, located directly against the diaphragm and pericardial sac.",
      "ar": "الحجرة الثانية ذات حواف تشبه قرص العسل تقع ملاصقة للحجاب الحاجز وغشاء التامور القلبي."
    },
    "bloodSupply": {
      "en": "Reticular artery from left ruminal artery; reticular vein to portal vein.",
      "ar": "الشريان الشبكي من الشريان الكرشي الأيسر والوريد الشبكي."
    },
    "innervation": {
      "en": "Ventral vagal trunk (CN X).",
      "ar": "الجذع البطني للعصب المبهم."
    },
    "clinicalPearls": {
      "en": "Traumatic Reticuloperitonitis (Hardware Disease): swallowed wire penetrates reticulum into the pericardium causing septic pericarditis.",
      "ar": "مرض السلك المعدني (TRP): ابتلاع الأسلاك يخترق الشبكية للحجاب الحاجز وغشاء القلب مسبباً التهاب التامور الصديدي."
    },
    "commonPathologies": [
      {
        "en": "Traumatic Reticuloperitonitis (Hardware Disease): swallowed wire penetrates reti...",
        "ar": "مرض السلك المعدني (TRP): ابتلاع الأسلاك يخترق الشبكية للحجاب الحاجز وغشاء القلب ..."
      }
    ],
    "cameraFocus": {
      "position": [
        -0.8,
        0.5,
        0.3
      ],
      "target": [
        -0.2,
        0.3,
        0.1
      ]
    },
    "color": "#eab308",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Bovine_Omasum",
    "meshId": "Mesh_Bovine_Omasum",
    "systemId": "digestive",
    "speciesId": "bovine",
    "latinTaxonomyName": "Omasum (Psalterium)",
    "name": {
      "en": "Bovine Omasum (Manyplies / Bible)",
      "ar": "أم التلافيف في الأبقار (المعدة الورقية)"
    },
    "description": {
      "en": "Spherical third forestomach packed with over 100 thin longitudinal mucosal laminas resembling book leaves, absorbing 60-70% of water and electrolytes.",
      "ar": "الحجرة الثالثة الكروية المليئة بأكثر من 100 صفيحة مخاطية طولية تشبه صفحات الكتاب، تمتص 60-70% من الماء والأملاح."
    },
    "bloodSupply": {
      "en": "Omaso-abomasal artery and left gastric branches of celiac artery.",
      "ar": "الشريان الورقي الأنفحي والشريان المعدي الأيسر من الشريان الجوفي."
    },
    "innervation": {
      "en": "Dorsal and ventral vagal trunks (CN X).",
      "ar": "الجذعان المبهمان الظهري والبطني."
    },
    "clinicalPearls": {
      "en": "Omasal impaction (\"dry Bible\") occurs during severe dehydration or ingestion of high-fiber, finely ground forage, presenting with progressive stasis.",
      "ar": "انحشار أم التلافيف (المعدة الجافة) يحدث في الجفاف أو عند تناول أعلاف مطحونة عالية الألياف مسبباً خمولاً هضمياً مستمراً."
    },
    "commonPathologies": [
      {
        "en": "Omasal impaction (\"dry Bible\") occurs during severe dehydration or ingestion of ...",
        "ar": "انحشار أم التلافيف (المعدة الجافة) يحدث في الجفاف أو عند تناول أعلاف مطحونة عالي..."
      }
    ],
    "cameraFocus": {
      "position": [
        1,
        0.6,
        0.25
      ],
      "target": [
        0.2,
        0.42,
        0.15
      ]
    },
    "color": "#d97706",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Bovine_Abomasum",
    "meshId": "Mesh_Bovine_Abomasum",
    "systemId": "digestive",
    "speciesId": "bovine",
    "latinTaxonomyName": "Abomasum (Ventriculus glandularis)",
    "name": {
      "en": "Bovine Abomasum (True Stomach)",
      "ar": "أنفحة الأبقار (المعدة الحقيقية الغدية)"
    },
    "description": {
      "en": "True glandular stomach (15-25 L) lined with red secretory mucosa containing fundic and pyloric glands producing HCl, pepsin, and chymosin (rennin).",
      "ar": "المعدة الغدية الحقيقية (15-25 لتر) المبطنة بغشاء إفرازي أحمر يحتوي على غدد تفرز حمض الهيدروكلوريك والبيبسين والرينين لتخثير الحليب."
    },
    "bloodSupply": {
      "en": "Left and right gastric arteries (lesser curvature) and left/right gastroepiploic arteries (greater curvature).",
      "ar": "الشرايين المعدية اليمنى واليسرى والشرايين المعدية الثربية."
    },
    "innervation": {
      "en": "Ventral and dorsal vagal trunks (parasympathetic secretomotor) and celiac sympathetic plexus.",
      "ar": "الجذعان المبهمان البطني والظهري والضفيرة الجوفية الودية."
    },
    "clinicalPearls": {
      "en": "Left Displaced Abomasum (LDA) is classic in post-partum dairy cows; auscultation/percussion of the left 9th-12th ribs yields a resonant metallic \"ping\".",
      "ar": "انزياح الأنفحة لليسار LDA شائع في أبقار الحليب بعد الولادة؛ والقرع التسمعي بين الأضلاع 9-12 يظهر رنة معدنية شبيهة بضرب طنجرة Ping."
    },
    "commonPathologies": [
      {
        "en": "Left Displaced Abomasum (LDA) is classic in post-partum dairy cows; auscultation...",
        "ar": "انزياح الأنفحة لليسار LDA شائع في أبقار الحليب بعد الولادة؛ والقرع التسمعي بين ا..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.4,
        0.1
      ],
      "target": [
        0.15,
        0.25,
        0
      ]
    },
    "color": "#f43f5e",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Bovine_Trachea_BronchusTrachealis",
    "meshId": "Mesh_Bovine_Trachea_BronchusTrachealis",
    "systemId": "respiratory",
    "speciesId": "bovine",
    "latinTaxonomyName": "Trachea et Bronchus trachealis",
    "name": {
      "en": "Bovine Trachea & Tracheal Bronchus",
      "ar": "قصبة الأبقار والشعبة الرغامية الإضافية"
    },
    "description": {
      "en": "Wide cartilaginous trachea featuring an accessory tracheal bronchus branching off independently to aerate the right cranial lung lobe before the carina.",
      "ar": "قصبة هوائية غضروفية واسعة تتميز بوجود شعبة هوائية رغامية إضافية تتفرع بمفردها لتهوية الفص القحفي الأيمن للرئة قبل مفرق الرغامي."
    },
    "bloodSupply": {
      "en": "Common carotid arteries in cervical tract; bronchoesophageal artery in thorax.",
      "ar": "الشرايين السباتية الأصلية والشريان القصبي المريئي."
    },
    "innervation": {
      "en": "Vagus nerve (bronchoconstrictor) and sympathetic thoracic ganglia (bronchodilator).",
      "ar": "العصب المبهم والجذع الودي الصدري."
    },
    "clinicalPearls": {
      "en": "The tracheal bronchus (Bronchus trachealis) predisposes the right cranial lung lobe to severe early consolidation in Mannheimia haemolytica shipping fever.",
      "ar": "الشعبة الرغامية الإضافية تجعل الفص الرئوي القحفي الأيمن الأكثر عرضة للتصلب والالتهاب المبكر في حمى النقل Mannheimia haemolytica."
    },
    "commonPathologies": [
      {
        "en": "The tracheal bronchus (Bronchus trachealis) predisposes the right cranial lung l...",
        "ar": "الشعبة الرغامية الإضافية تجعل الفص الرئوي القحفي الأيمن الأكثر عرضة للتصلب والال..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.9,
        0.6
      ],
      "target": [
        0,
        0.75,
        0.5
      ]
    },
    "color": "#94a3b8",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Bovine_PulmoDexter",
    "meshId": "Mesh_Bovine_PulmoDexter",
    "systemId": "respiratory",
    "speciesId": "bovine",
    "latinTaxonomyName": "Pulmo dexter (Cranialis, Medius, Caudalis, Accessorius)",
    "name": {
      "en": "Bovine Right Lung (4 Lobes)",
      "ar": "رئة الأبقار اليمنى (رباعية الفصوص)"
    },
    "description": {
      "en": "Deeply fissured right lung divided into 4 distinct anatomical lobes: cranial (bipartite), middle, caudal, and accessory, with prominent interlobular connective septa.",
      "ar": "رئة يمنى عميقة الشقوق تنقسم لـ 4 فصوص مميزة: قحفي (مزدوج)، أوسط، ذيلي، وإضافي، بحواجز ضامة سميكة بين الفصيصات."
    },
    "bloodSupply": {
      "en": "Right pulmonary artery (functional) and bronchoesophageal branches (nutritional).",
      "ar": "الشريان الرئوي الأيمن (وظيفي) وتفرعات القصبي المريئي (مغذٍ)."
    },
    "innervation": {
      "en": "Cranial and caudal pulmonary plexuses.",
      "ar": "الضفائر الرئوية الأمامية والخلفية."
    },
    "clinicalPearls": {
      "en": "Contagious Bovine Pleuropneumonia (CBPP / Mycoplasma mycoides) produces massive fibrinous pleurisy and wide marbled interlobular septa.",
      "ar": "التهاب الرئة والجنبة الساري في الأبقار CBPP يسبب التهاب جنبة ليفيني شاسع مع مظهر رخامي مميز للحواجز الفصيصية."
    },
    "commonPathologies": [
      {
        "en": "Contagious Bovine Pleuropneumonia (CBPP / Mycoplasma mycoides) produces massive ...",
        "ar": "التهاب الرئة والجنبة الساري في الأبقار CBPP يسبب التهاب جنبة ليفيني شاسع مع مظهر..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.7,
        0.2
      ],
      "target": [
        0.28,
        0.52,
        0.15
      ]
    },
    "color": "#f43f5e",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Bovine_PulmoSinister",
    "meshId": "Mesh_Bovine_PulmoSinister",
    "systemId": "respiratory",
    "speciesId": "bovine",
    "latinTaxonomyName": "Pulmo sinister (Cranialis et Caudalis)",
    "name": {
      "en": "Bovine Left Lung",
      "ar": "رئة الأبقار اليسرى"
    },
    "description": {
      "en": "Left lung distinctly divided by a deep fissure into a cranial lobe (with cranial and caudal parts) and an extensive caudal lobe.",
      "ar": "رئة يسرى مقسمة بشق عميق لفص قحفي (ذو جزءين أمامي وخلفي) وفص ذيلي واسع يمتد نحو الحجاب الحاجز."
    },
    "bloodSupply": {
      "en": "Left pulmonary artery and bronchoesophageal branches.",
      "ar": "الشريان الرئوي الأيسر وتفرعات الشريان القصبي المريئي."
    },
    "innervation": {
      "en": "Pulmonary autonomic nerve plexus.",
      "ar": "الضفيرة الرئوية الذاتية."
    },
    "clinicalPearls": {
      "en": "Bovine Respiratory Disease Complex (BRD / \"Shipping Fever\"): Environmental stress and viral infection (BRSV, IBR) allow secondary Mannheimia invasion.",
      "ar": "معقد أمراض الجهاز التنفسي البقري BRD (حمى النقل): الإجهاد والعدوى الفيروسية يمهدان للغزو البكتيري بالمانهيميا هيموليتيكا."
    },
    "commonPathologies": [
      {
        "en": "Bovine Respiratory Disease Complex (BRD / \"Shipping Fever\"): Environmental stres...",
        "ar": "معقد أمراض الجهاز التنفسي البقري BRD (حمى النقل): الإجهاد والعدوى الفيروسية يمهد..."
      }
    ],
    "cameraFocus": {
      "position": [
        -1.2,
        0.7,
        0.2
      ],
      "target": [
        -0.28,
        0.52,
        0.15
      ]
    },
    "color": "#fb7185",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Bovine_PleuraParietalis",
    "meshId": "Mesh_Bovine_PleuraParietalis",
    "systemId": "respiratory",
    "speciesId": "bovine",
    "latinTaxonomyName": "Pleura parietalis (Costalis, Diaphragmatica, Mediastinalis)",
    "name": {
      "en": "Bovine Parietal Pleura & Intercostal Space",
      "ar": "الجنبة الجدارية للأبقار والفراغ الوربي"
    },
    "description": {
      "en": "Robust serous membrane lining the thoracic cavity, divided into costal, diaphragmatic, and mediastinal pleura with a completely imperforate mediastinum.",
      "ar": "غشاء مصلي متين يبطن التجويف الصدري، مقسم لجنبة ضلعية وحجابية ومنصفية مع منصف صدري صلب وغير نافذ تماماً."
    },
    "bloodSupply": {
      "en": "Internal thoracic and intercostal arteries.",
      "ar": "الشرايين الصدرية الغائرة والشرايين الوربية."
    },
    "innervation": {
      "en": "Phrenic nerve (diaphragmatic pleura) and intercostal nerves (costal pleura).",
      "ar": "العصب الحجابي والأعصاب الوربية الحسية للألم."
    },
    "clinicalPearls": {
      "en": "Unlike dogs and horses, the bovine mediastinum is complete and imperforate; unilateral pneumothorax or pleuritis does not spread to the contralateral side.",
      "ar": "بخلاف الخيول والكلاب، منصف الصدر في الأبقار سميك ومصمت تماماً؛ لذا لا ينتقل الاسترواح الصدري أحادي الجانب للجانب الآخر."
    },
    "commonPathologies": [
      {
        "en": "Unlike dogs and horses, the bovine mediastinum is complete and imperforate; unil...",
        "ar": "بخلاف الخيول والكلاب، منصف الصدر في الأبقار سميك ومصمت تماماً؛ لذا لا ينتقل الاس..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.3,
        0.7,
        0.2
      ],
      "target": [
        0,
        0.5,
        0.15
      ]
    },
    "color": "#cbd5e1",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Bovine_Cerebrum",
    "meshId": "Mesh_Bovine_Cerebrum",
    "systemId": "nervous",
    "speciesId": "bovine",
    "latinTaxonomyName": "Cerebrum (Bos taurus)",
    "name": {
      "en": "Bovine Cerebrum",
      "ar": "مخ الأبقار"
    },
    "description": {
      "en": "Voluminous cerebral hemispheres weighing 450-500 g with prominent olfactory bulbs and well-developed gyri governing herd social hierarchy and ruminant sensory processing.",
      "ar": "نصفا كرة مخيان يزنان 450-500 جم يتميزان ببصلتين شميتين بارزتين وتلافيف متطورة تتحكم بسلوك القطيع والتكامل الحسي للمجترات."
    },
    "bloodSupply": {
      "en": "Rostral epidural rete mirabile (Rete mirabile epidurale rostrale) fed by maxillary and vertebral arteries.",
      "ar": "الشبكة العجيبة الشريانية فوق الجافية المغذاة بالشريانين الفكي والفقري."
    },
    "innervation": {
      "en": "Trigeminal meningeal sensory nerve twigs.",
      "ar": "فروع سحائية حسية من العصب ثلاثي التوائم."
    },
    "clinicalPearls": {
      "en": "Polioencephalomalacia (PEM / \"Cerebrocortical Necrosis / CCN\"): Thiamine deficiency or sulfur toxicity causes autofluorescent cortical necrosis under UV Wood's lamp.",
      "ar": "تلين قشرة الدماغ PEM (نخر قشرة المخ): نقص الثيامين أو سمية الكبريت تسبب تنخراً قشرياً يتألق تحت أشعة وود فوق البنفسجية UV."
    },
    "commonPathologies": [
      {
        "en": "Polioencephalomalacia (PEM / \"Cerebrocortical Necrosis / CCN\"): Thiamine deficie...",
        "ar": "تلين قشرة الدماغ PEM (نخر قشرة المخ): نقص الثيامين أو سمية الكبريت تسبب تنخراً ق..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        1.2,
        1
      ],
      "target": [
        0,
        1,
        0.85
      ]
    },
    "color": "#facc15",
    "emissiveColor": "#0284c7",
    "proceduralType": "brain"
  },
  {
    "id": "Mesh_Bovine_Cerebellum",
    "meshId": "Mesh_Bovine_Cerebellum",
    "systemId": "nervous",
    "speciesId": "bovine",
    "latinTaxonomyName": "Cerebellum (Bos taurus)",
    "name": {
      "en": "Bovine Cerebellum",
      "ar": "مخيخ الأبقار"
    },
    "description": {
      "en": "Globular hindbrain structure with median vermis and lateral hemispheres regulating rumination balance and postural muscle tone.",
      "ar": "بنية دماغية خلفية كروية ذات دودة وسطية ونصفين جانبيين تنظم توازن وضعية الجسم أثناء الاجترار والوقوف."
    },
    "bloodSupply": {
      "en": "Rostral and caudal cerebellar arteries off basilar artery.",
      "ar": "الشرايين المخيخية من الشريان القاعدي."
    },
    "innervation": {
      "en": "Cerebellar cortical Purkinje neuron circuits.",
      "ar": "دوائر عصبونات بيركنجي القشرية المخيخية."
    },
    "clinicalPearls": {
      "en": "Bovine Spongiform Encephalopathy (BSE / \"Mad Cow Disease\") and Bovine Viral Diarrhea (BVDV) in utero induce cerebellar hypoplasia and severe ataxia.",
      "ar": "جنون البقر BSE وعدوى BVD الرحمية تسببان ضمور المخيخ وترنحاً حركياً عنيفاً في العجول حديثة الولادة."
    },
    "commonPathologies": [
      {
        "en": "Bovine Spongiform Encephalopathy (BSE / \"Mad Cow Disease\") and Bovine Viral Diar...",
        "ar": "جنون البقر BSE وعدوى BVD الرحمية تسببان ضمور المخيخ وترنحاً حركياً عنيفاً في الع..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        1.1,
        0.8
      ],
      "target": [
        0,
        0.94,
        0.72
      ]
    },
    "color": "#eab308",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Bovine_NervusCornualis",
    "meshId": "Mesh_Bovine_NervusCornualis",
    "systemId": "nervous",
    "speciesId": "bovine",
    "latinTaxonomyName": "Nervus cornualis (Ramus zygomaticotemporalis CN V2)",
    "name": {
      "en": "Bovine Cornual Nerve",
      "ar": "العصب القَرني للأبقار"
    },
    "description": {
      "en": "Sensory branch of the zygomaticotemporal nerve (mandibular/maxillary trigeminal division) supplying the horn corium and skin around the horn base.",
      "ar": "فرع حسي من العصب الوجني الصدغي (من العصب الخامس) يغذي نسيج القرن والجلد المحيط بقاعدة القرن."
    },
    "bloodSupply": {
      "en": "Cornual artery off superficial temporal artery.",
      "ar": "الشريان القرني من الشريان الصدغي السطحي."
    },
    "innervation": {
      "en": "Sensory somatic innervation to horn matrix and horn core.",
      "ar": "التعصيب الحسي الجسدي لنسيج وقاعدة القرن."
    },
    "clinicalPearls": {
      "en": "Cornual Nerve Block: Essential regional anesthesia for humane dehorning/disbudding; local anesthetic is deposited midway between the lateral canthus and horn base beneath the frontal crest.",
      "ar": "إحصار العصب القرني: تخدير موضعي أساسي لإزالة القرون دون ألم؛ يُحقن المخدر في منتصف المسافة بين زاوية العين الوحشية وقاعدة القرن أسفل العرف الجبهي."
    },
    "commonPathologies": [
      {
        "en": "Cornual Nerve Block: Essential regional anesthesia for humane dehorning/disbuddi...",
        "ar": "إحصار العصب القرني: تخدير موضعي أساسي لإزالة القرون دون ألم؛ يُحقن المخدر في منت..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        1.2,
        0.9
      ],
      "target": [
        0.22,
        1.08,
        0.78
      ]
    },
    "color": "#facc15",
    "emissiveColor": "#0284c7",
    "proceduralType": "heart"
  },
  {
    "id": "Mesh_Bovine_MedullaSpinalis",
    "meshId": "Mesh_Bovine_MedullaSpinalis",
    "systemId": "nervous",
    "speciesId": "bovine",
    "latinTaxonomyName": "Medulla spinalis et Plexus lumbosacralis",
    "name": {
      "en": "Bovine Spinal Cord & Lumbosacral Plexus",
      "ar": "النخاع الشوكي والضفيرة القطنية العجزية للأبقار"
    },
    "description": {
      "en": "Spinal cord terminating as the conus medullaris at the second sacral vertebra, giving origin to the major sciatic and obturator nerves.",
      "ar": "النخاع الشوكي الذي ينتهي بالمخروط النخاعي عند الفقرة العجزية الثانية وتنبثق منه الأعصاب الوركية والسدادية الكبرى."
    },
    "bloodSupply": {
      "en": "Ventral spinal artery, vertebral and intervertebral arteries.",
      "ar": "الشريان الشوكي البطني والشرايين بين الفقرية."
    },
    "innervation": {
      "en": "Motor and sensory somatic and autonomic conduction.",
      "ar": "التوصيل الحسي والحركي والذاتي."
    },
    "clinicalPearls": {
      "en": "Maternal Obstetric Paralysis: Dystocia with oversized calves crushes the obturator and sciatic nerves against the pelvic brim, causing downer cow syndrome.",
      "ar": "شلل الولادة في الأمهات: تعسر الولادة يضغط العصبين السدادي والوركي على حافة الحوض العظمية مسبباً متلازمة البقرة الراقدة Downer Cow."
    },
    "commonPathologies": [
      {
        "en": "Maternal Obstetric Paralysis: Dystocia with oversized calves crushes the obturat...",
        "ar": "شلل الولادة في الأمهات: تعسر الولادة يضغط العصبين السدادي والوركي على حافة الحوض..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        0.9,
        0.3
      ],
      "target": [
        0,
        0.85,
        0.15
      ]
    },
    "color": "#fef08a",
    "emissiveColor": "#0284c7",
    "proceduralType": "spine"
  },
  {
    "id": "Mesh_Bovine_RenDexter",
    "meshId": "Mesh_Bovine_RenDexter",
    "systemId": "urogenital",
    "speciesId": "bovine",
    "latinTaxonomyName": "Ren dexter (Multilobulatus)",
    "name": {
      "en": "Bovine Right Kidney (Multilobulated)",
      "ar": "كلية الأبقار اليمنى (المفصصة)"
    },
    "description": {
      "en": "Elongated kidney completely divided externally into 15 to 25 distinct superficial lobes, completely lacking a renal pelvis; calices drain directly.",
      "ar": "كلية ممتدة تنقسم خارجياً بالكامل إلى 15-25 فصاً سطحياً منفصلاً وتفتقر تماماً لحوض الكلية؛ وتصب الكؤوس مباشرة في الحالب."
    },
    "bloodSupply": {
      "en": "Right renal artery from abdominal aorta; right renal vein.",
      "ar": "الشريان الكلوي الأيمن والوريد الكلوي الأيمن."
    },
    "innervation": {
      "en": "Renal plexus from celiac and cranial mesenteric ganglia.",
      "ar": "الضفيرة الكلوية الذاتية."
    },
    "clinicalPearls": {
      "en": "Unlike equids and carnivores, ruminants have lobulated kidneys with no renal pelvis; pyelonephritis (Corynebacterium renale) causes necrotic debris in the calices.",
      "ar": "تتميز المجترات بكلى مفصصة تفتقر لحوض الكلية؛ والتهاب الكلى والكلية الصديدي يسبب تجمعات قيحية نخريّة في الكؤوس الكلوية."
    },
    "commonPathologies": [
      {
        "en": "Unlike equids and carnivores, ruminants have lobulated kidneys with no renal pel...",
        "ar": "تتميز المجترات بكلى مفصصة تفتقر لحوض الكلية؛ والتهاب الكلى والكلية الصديدي يسبب ..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.8,
        0.1
      ],
      "target": [
        0.28,
        0.65,
        0
      ]
    },
    "color": "#701a75",
    "emissiveColor": "#0284c7",
    "proceduralType": "kidney"
  },
  {
    "id": "Mesh_Bovine_RenSinister",
    "meshId": "Mesh_Bovine_RenSinister",
    "systemId": "urogenital",
    "speciesId": "bovine",
    "latinTaxonomyName": "Ren sinister (Ren mobile)",
    "name": {
      "en": "Bovine Left Kidney (Displaced to Right)",
      "ar": "كلية الأبقار اليسرى (المنزاحة يميناً)"
    },
    "description": {
      "en": "Mobile left kidney pushed completely across the median plane to the right side of the abdomen by the voluminous developing rumen.",
      "ar": "كلية يسرى متحركة مدفوعة بالكامل عبر خط الوسط للجانب الأيمن من تجويف البطن بفعل الكرش الهائل."
    },
    "bloodSupply": {
      "en": "Left renal artery originating caudal to the mesenteric vessels; left renal vein.",
      "ar": "الشريان الكلوي الأيسر والوريد الكلوي الأيسر."
    },
    "innervation": {
      "en": "Renal autonomic plexus.",
      "ar": "الضفيرة الكلوية الذاتية."
    },
    "clinicalPearls": {
      "en": "On rectal palpation, the left kidney is readily found hanging freely on the right side ventral to L2-L5, while the right kidney cannot be reached.",
      "ar": "بالجس عبر المستقيم، تُجس الكلية اليسرى متدلية بحرية في الجانب الأيمن أسفل L2-L5، بينما يستحيل الوصول للكلية اليمنى."
    },
    "commonPathologies": [
      {
        "en": "On rectal palpation, the left kidney is readily found hanging freely on the righ...",
        "ar": "بالجس عبر المستقيم، تُجس الكلية اليسرى متدلية بحرية في الجانب الأيمن أسفل L2-L5،..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        0.7,
        -0.1
      ],
      "target": [
        0.12,
        0.55,
        -0.2
      ]
    },
    "color": "#86198f",
    "emissiveColor": "#0284c7",
    "proceduralType": "kidney"
  },
  {
    "id": "Mesh_Bovine_Uterus_Carunculae",
    "meshId": "Mesh_Bovine_Uterus_Carunculae",
    "systemId": "urogenital",
    "speciesId": "bovine",
    "latinTaxonomyName": "Uterus bicornis et Carunculae uterinae",
    "name": {
      "en": "Bovine Uterus & Caruncles",
      "ar": "رحم الأبقار والفلقات الرحمية (الكارنكلات)"
    },
    "description": {
      "en": "Bicornuate uterus featuring 80-120 oval convex endometrial caruncles that interlock with fetal cotyledons to form placentomes.",
      "ar": "رحم ثنائي القرنين يتميز بـ 80-120 فلجة بطانية رحمية محدبة بيضاوية تتعاشق مع الفلقات الجنينية لتكوين المشيمة الفلقية."
    },
    "bloodSupply": {
      "en": "Uterine artery (from umbilical artery), ovarian artery, and vaginal artery.",
      "ar": "الشريان الرحمي (من الشريان السري) والشريان المبيضي والشريان المهبلي."
    },
    "innervation": {
      "en": "Pelvic and hypogastric nerves (sympathetic and parasympathetic).",
      "ar": "الأعصاب الحوضية وتحت المعدة الذاتية."
    },
    "clinicalPearls": {
      "en": "Rectal palpation of pregnancy: Palpating the middle uterine artery \"fremitus\" (buzzing thrill) and slipping of fetal membranes confirms advanced pregnancy.",
      "ar": "تشخيص الحمل عبر المستقيم: جس هدير الشريان الرحمي الأوسط (Fremitus) وانزلاق الأغشية الجنينية يؤكدان الحمل المتقدم."
    },
    "commonPathologies": [
      {
        "en": "Rectal palpation of pregnancy: Palpating the middle uterine artery \"fremitus\" (b...",
        "ar": "تشخيص الحمل عبر المستقيم: جس هدير الشريان الرحمي الأوسط (Fremitus) وانزلاق الأغش..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        0.45,
        -0.6
      ],
      "target": [
        0,
        0.35,
        -0.55
      ]
    },
    "color": "#f43f5e",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Bovine_VesicaUrinaria",
    "meshId": "Mesh_Bovine_VesicaUrinaria",
    "systemId": "urogenital",
    "speciesId": "bovine",
    "latinTaxonomyName": "Vesica urinaria (Bos taurus)",
    "name": {
      "en": "Bovine Urinary Bladder",
      "ar": "مثانة الأبقار"
    },
    "description": {
      "en": "Large thin-walled muscular reservoir situated on the pelvic floor when empty, extending cranioventrally into the abdominal cavity when distended.",
      "ar": "خزان عضلي رقيق الجدار واسع يستقر في قاع الحوض عند الفراغ ويمتد للأمام والأسفل في تجويف البطن عند امتلائه."
    },
    "bloodSupply": {
      "en": "Cranial and caudal vesical arteries off internal iliac system.",
      "ar": "الشرايين المثانية الأمامية والخلفية من الحرقفي الباطن."
    },
    "innervation": {
      "en": "Pelvic nerve (parasympathetic motor to detrusor) and hypogastric nerve (sympathetic).",
      "ar": "العصب الحوضي (حركي للمثانة) وعصب تحت المعدة (ودي)."
    },
    "clinicalPearls": {
      "en": "Enzootic Hematuria: Chronic ingestion of bracken fern (Pteridium aquilinum) causes bovine papillomavirus type 2 synergy, leading to bladder hemangiocarcinomas.",
      "ar": "البيلة الدموية المتوطنة: تناول نبات السرخس يسبب تحفيز فيروس الورم الحليمي BPV-2 محدثاً سرطانات وعائية نازفة في جدار المثانة."
    },
    "commonPathologies": [
      {
        "en": "Enzootic Hematuria: Chronic ingestion of bracken fern (Pteridium aquilinum) caus...",
        "ar": "البيلة الدموية المتوطنة: تناول نبات السرخس يسبب تحفيز فيروس الورم الحليمي BPV-2 ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        0.5,
        -0.7
      ],
      "target": [
        0,
        0.35,
        -0.65
      ]
    },
    "color": "#a21caf",
    "emissiveColor": "#0284c7",
    "proceduralType": "bladder"
  },
  {
    "id": "Mesh_Bovine_Cranium_Cornua",
    "meshId": "Mesh_Bovine_Cranium_Cornua",
    "systemId": "skeletal",
    "speciesId": "bovine",
    "latinTaxonomyName": "Cranium et Processus cornuales",
    "name": {
      "en": "Bovine Skull & Horn Processes",
      "ar": "جمجمة الأبقار والبروزات القرنية"
    },
    "description": {
      "en": "Massive skull dominated by extensive frontal bones reaching the occipital crest, bearing bilateral cornual processes that hollow out to communicate directly with the frontal sinus.",
      "ar": "جمجمة ضخمة يهيمن عليها العظم الجبهي المتسع حتى العرف القذالي، ويحمل البروزين القرنيين المتصلين مباشرة بالجيب الجبهي."
    },
    "bloodSupply": {
      "en": "Cornual artery from superficial temporal; maxillary artery branches.",
      "ar": "الشريان القرني وفروع الشريان الفكي."
    },
    "innervation": {
      "en": "Cornual nerve from zygomaticotemporal (CN V).",
      "ar": "العصب القرني من العصب الوجني الصدغي."
    },
    "clinicalPearls": {
      "en": "Dehorning adult cattle exposes the diverticulum of the caudal frontal sinus directly to the atmosphere, posing a high risk of septic sinusitis.",
      "ar": "إزالة قرون الأبقار البالغة يفتح رتج الجيب الجبهي الخلفي مباشرة للهواء الخارجي مما يعرض الحيوان لخطر التهاب الجيوب القيحي."
    },
    "commonPathologies": [
      {
        "en": "Dehorning adult cattle exposes the diverticulum of the caudal frontal sinus dire...",
        "ar": "إزالة قرون الأبقار البالغة يفتح رتج الجيب الجبهي الخلفي مباشرة للهواء الخارجي مم..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        1.2,
        1
      ],
      "target": [
        0,
        1.05,
        0.9
      ]
    },
    "color": "#f8fafc",
    "emissiveColor": "#0284c7",
    "proceduralType": "heart"
  },
  {
    "id": "Mesh_Bovine_Vertebrae",
    "meshId": "Mesh_Bovine_Vertebrae",
    "systemId": "skeletal",
    "speciesId": "bovine",
    "latinTaxonomyName": "Columna vertebralis (C7 T13 L6 S5 Ca18-20)",
    "name": {
      "en": "Bovine Vertebral Column",
      "ar": "العمود الفقري للأبقار"
    },
    "description": {
      "en": "Axial framework with prominent dorsal spinous processes at withers (T1-T4) supporting the massive head via the lamellar and funicular ligamentum nuchae.",
      "ar": "الدعامة المحورية ذات نواتئ شوكية ظهرية بارزة عند الغارب لدعم الرأس الثقيل بواسطة الحبل القفوي الليفي المرن."
    },
    "bloodSupply": {
      "en": "Vertebral, intercostal, and lumbar segmental spinal arteries.",
      "ar": "الشرايين الشوكية الفقرية والوربية والقطنية."
    },
    "innervation": {
      "en": "Spinal nerves (dorsal and ventral rami).",
      "ar": "الأعصاب الشوكية القطعية."
    },
    "clinicalPearls": {
      "en": "The tall thoracic spinous processes form the withers; the ligamentum nuchae has a funicular part attaching to the external occipital protuberance.",
      "ar": "النواتئ الشوكية الصدرية العالية تشكل الغارب؛ ويتصل الحبل القفوي بالبروز القذالي الخارجي لحمل الرأس."
    },
    "commonPathologies": [
      {
        "en": "The tall thoracic spinous processes form the withers; the ligamentum nuchae has ...",
        "ar": "النواتئ الشوكية الصدرية العالية تشكل الغارب؛ ويتصل الحبل القفوي بالبروز القذالي ..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        1.1,
        0.2
      ],
      "target": [
        0,
        0.92,
        0.15
      ]
    },
    "color": "#f1f5f9",
    "emissiveColor": "#0284c7",
    "proceduralType": "spine"
  },
  {
    "id": "Mesh_Bovine_OssaMetacarpi_Digiti",
    "meshId": "Mesh_Bovine_OssaMetacarpi_Digiti",
    "systemId": "skeletal",
    "speciesId": "bovine",
    "latinTaxonomyName": "Os metacarpale III+IV et Digiti III et IV",
    "name": {
      "en": "Bovine Cannon Bone & Cloven Digits",
      "ar": "عظم الساق والأصابع المشقوقة للأبقار"
    },
    "description": {
      "en": "Fused cannon bone (large metacarpal III and IV) bearing two fully developed weight-bearing cloven digits (digits III and IV) with paired hooves (claws).",
      "ar": "عظم الساق الملتحم (المشط الثالث والرابع) الذي يحمل إصبعين مشقوقين كاملي النمو حاملين للوزن (الإصبعان 3 و 4) بظلفين مزدوجين."
    },
    "bloodSupply": {
      "en": "Dorsal and palmar common digital arteries.",
      "ar": "الشرايين الإصبعية الظهرية والراحية المشتركة."
    },
    "innervation": {
      "en": "Axial and abaxial digital nerves.",
      "ar": "الأعصاب الإصبعية المحورية والمحاذية."
    },
    "clinicalPearls": {
      "en": "Footrot (Interdigital Phlegmon) and Sole Ulcers (Rusterholz ulcers): In dairy cows, >80% of lameness affects the lateral claw of the hindlimb.",
      "ar": "تعفن القدم وقرحة باطن الظلف: في أبقار الحليب تصيب أكثر من 80% من حالات العرج الظلف الوحشي (الخارجي) للقائمة الخلفية."
    },
    "commonPathologies": [
      {
        "en": "Footrot (Interdigital Phlegmon) and Sole Ulcers (Rusterholz ulcers): In dairy co...",
        "ar": "تعفن القدم وقرحة باطن الظلف: في أبقار الحليب تصيب أكثر من 80% من حالات العرج الظ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        0.4,
        0.4
      ],
      "target": [
        0.32,
        0.08,
        0.3
      ]
    },
    "color": "#e2e8f0",
    "emissiveColor": "#0284c7",
    "proceduralType": "limb"
  },
  {
    "id": "Mesh_Bovine_Pelvis",
    "meshId": "Mesh_Bovine_Pelvis",
    "systemId": "skeletal",
    "speciesId": "bovine",
    "latinTaxonomyName": "Pelvis (Os coxae: Ilium, Ischium, Pubis)",
    "name": {
      "en": "Bovine Pelvis & Pelvic Landmarks",
      "ar": "حوض الأبقار والمعالم الحوضية"
    },
    "description": {
      "en": "Broad, spacious pelvic girdle with prominent tuber coxae (hook bone), tuber ischiadicum (pin bone), and wide birth canal for unhindered delivery.",
      "ar": "حزام حوضي متسع ذو حدبة حرقفية بارزة (عظم الورك/الخطاف) وحدبة إسركية (عظم الدبوس) وقناة ولادة واسعة للولادة الطبيعية."
    },
    "bloodSupply": {
      "en": "Internal and external iliac arteries.",
      "ar": "الشرايين الحرقفية الباطنة والظاهرة."
    },
    "innervation": {
      "en": "Lumbosacral plexus (obturator, sciatic, femoral, pudendal nerves).",
      "ar": "الضفيرة القطنية العجزية (الأعصاب السدادية والورك والفخذية والاستحيائية)."
    },
    "clinicalPearls": {
      "en": "Calving ease and pelvimetry: Measuring the pelvic height and width between tuber coxae (hooks) and tuber ischiadicum (pins) assesses dystocia risk.",
      "ar": "قياس أبعاد الحوض: قياس المسافة بين عظم الورك (Hooks) وعظم الدبوس (Pins) يحدد ملاءمة البقرة للولادة الطبيعية وخطر التعسر."
    },
    "commonPathologies": [
      {
        "en": "Calving ease and pelvimetry: Measuring the pelvic height and width between tuber...",
        "ar": "قياس أبعاد الحوض: قياس المسافة بين عظم الورك (Hooks) وعظم الدبوس (Pins) يحدد ملا..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.9,
        -0.4
      ],
      "target": [
        0,
        0.65,
        -0.5
      ]
    },
    "color": "#f1f5f9",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Bovine_MusculusTricepsBrachii",
    "meshId": "Mesh_Bovine_MusculusTricepsBrachii",
    "systemId": "muscular",
    "speciesId": "bovine",
    "latinTaxonomyName": "Musculus triceps brachii (Caput longum, laterale, mediale)",
    "name": {
      "en": "Bovine Triceps Brachii Muscle",
      "ar": "العضلة ثلاثية الرؤوس العضدية للأبقار"
    },
    "description": {
      "en": "Massive triangular muscular engine on caudal arm extending the elbow (cubital) joint to support the cow's substantial 600-800 kg cranial body weight.",
      "ar": "كتلة عضلية مثلثة هائلة خلف العضد تبسط مفصل الكوع لتحمل وزن مقدمة جسم البقرة الضخم البالغ 600-800 كجم."
    },
    "bloodSupply": {
      "en": "Subscapular and deep brachial arteries.",
      "ar": "الشريانان تحت الكتفي والعضدي العميق."
    },
    "innervation": {
      "en": "Radial nerve (Nervus radialis C7-T1).",
      "ar": "العصب الكعبري (C7-T1)."
    },
    "clinicalPearls": {
      "en": "Radial nerve paralysis (\"dropped elbow\") prevents elbow extension; the cow is unable to bear weight on the affected forelimb, dragging the claw.",
      "ar": "شلل العصب الكعبري (سقوط الكوع): يمنع بسط مفصل الكوع فتعجز البقرة عن حمل وزنها على القائمة وتسحب ظلفها على الأرض."
    },
    "commonPathologies": [
      {
        "en": "Radial nerve paralysis (\"dropped elbow\") prevents elbow extension; the cow is un...",
        "ar": "شلل العصب الكعبري (سقوط الكوع): يمنع بسط مفصل الكوع فتعجز البقرة عن حمل وزنها عل..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.6,
        0.4
      ],
      "target": [
        0.32,
        0.42,
        0.32
      ]
    },
    "color": "#991b1b",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Bovine_MusculusBicepsFemoris",
    "meshId": "Mesh_Bovine_MusculusBicepsFemoris",
    "systemId": "muscular",
    "speciesId": "bovine",
    "latinTaxonomyName": "Musculus gluteobiceps",
    "name": {
      "en": "Bovine Gluteobiceps Muscle",
      "ar": "العضلة الألوية ذات الرأسين في الأبقار"
    },
    "description": {
      "en": "Massive fused muscular slab covering the entire lateral pelvic and thigh region, formed by the phylogenetic union of the gluteus superficialis and biceps femoris.",
      "ar": "صفيحة عضلية ضخمة ملتحمة تغطي كامل الجانب الوحشي للحوض والفخذ ناتجة عن اتحاد الألوية السطحية مع ذات الرأسين الفخذية."
    },
    "bloodSupply": {
      "en": "Caudal gluteal and lateral circumflex femoral arteries.",
      "ar": "الشريانان الألوي الخلفي والمنعطف الفخذي الوحشي."
    },
    "innervation": {
      "en": "Caudal gluteal and sciatic nerves.",
      "ar": "العصبان الألوي الخلفي والوركي."
    },
    "clinicalPearls": {
      "en": "Site for intramuscular injection in meat breeds, but avoided in high-value animals due to risk of sciatic nerve damage and carcass injection site blemishes.",
      "ar": "موقع للحقن العضلي في سلالات التسمين، ولكن يُتجنب في حيوانات التربية لتفادي إصابة العصب الوركي أو خراجات اللحم."
    },
    "commonPathologies": [
      {
        "en": "Site for intramuscular injection in meat breeds, but avoided in high-value anima...",
        "ar": "موقع للحقن العضلي في سلالات التسمين، ولكن يُتجنب في حيوانات التربية لتفادي إصابة..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.6,
        -0.4
      ],
      "target": [
        0.18,
        0.5,
        -0.35
      ]
    },
    "color": "#991b1b",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Bovine_MusculusMasseter",
    "meshId": "Mesh_Bovine_MusculusMasseter",
    "systemId": "muscular",
    "speciesId": "bovine",
    "latinTaxonomyName": "Musculus masseter",
    "name": {
      "en": "Bovine Masseter Muscle (Rumination Grinding Engine)",
      "ar": "العضلة الماضغة للأبقار (محرك طحن الاجترار)"
    },
    "description": {
      "en": "Broad, powerfully pennate jaw muscle spanning the facial tuber and zygomatic arch to the wide mandible angle, driving 8-10 hours of daily rumination chewing.",
      "ar": "عضلة فكية ريشية عريضة وقوية تمتد من حدبة الوجه والقوس الوجني لزاوية الفك السفلي العريضة، لتدوير طحن الاجترار 8-10 ساعات يومياً."
    },
    "bloodSupply": {
      "en": "Facial and transverse facial arteries.",
      "ar": "الشريانان الوجهي والوجهي المستعرض."
    },
    "innervation": {
      "en": "Masseteric nerve off mandibular branch of trigeminal nerve (CN V3).",
      "ar": "العصب الماضغي من الشعبة الفكية السفلية للعصب الخامس CN V3."
    },
    "clinicalPearls": {
      "en": "Actinomycosis (\"Lumpy Jaw\"): Chronic granulomatous infection of the mandible by Actinomyces bovis penetrates adjacent masseter muscle, forming draining sinuses.",
      "ar": "الفطار الشعاعي (الفك المتكتل): التهاب حبيبي مزمن في عظم الفك بكتيريا Actinomyces bovis يخترق العضلة الماضغة مشكلاً نواسير قيحية."
    },
    "commonPathologies": [
      {
        "en": "Actinomycosis (\"Lumpy Jaw\"): Chronic granulomatous infection of the mandible by ...",
        "ar": "الفطار الشعاعي (الفك المتكتل): التهاب حبيبي مزمن في عظم الفك بكتيريا Actinomyces..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        1.1,
        0.9
      ],
      "target": [
        0.18,
        0.95,
        0.85
      ]
    },
    "color": "#991b1b",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Bovine_TunicaFlavaAbdominis",
    "meshId": "Mesh_Bovine_TunicaFlavaAbdominis",
    "systemId": "muscular",
    "speciesId": "bovine",
    "latinTaxonomyName": "Tunica flava abdominis",
    "name": {
      "en": "Bovine Yellow Abdominal Tunic",
      "ar": "الصفاق البطني الأصفر للأبقار (السترة المرنة)"
    },
    "description": {
      "en": "Dense, highly elastic yellow fibro-elastic sheet covering the external abdominal oblique, acting as a living suspension girdle holding the massive 200 L visceral weight.",
      "ar": "صفيحة ليفية مرنة صفراء كثيفة تغطي العضلة المائلة الخارجية للبطن، تعمل كحزام شد حيوي يحمل وزن أحشاء الكرش الهائلة البالغة 200 لتر."
    },
    "bloodSupply": {
      "en": "Deep and superficial circumflex iliac arteries.",
      "ar": "الشرايين الحرقفية المنعطفة السطحية والعميقة."
    },
    "innervation": {
      "en": "Ventral branches of lumbar spinal nerves (L1-L4).",
      "ar": "الفروع البطنية للأعصاب الشوكية القطنية."
    },
    "clinicalPearls": {
      "en": "Surgical laparotomy closures in cattle must securely anchor suture bites into the tunica flava abdominis to prevent postoperative abdominal dehiscence and herniation.",
      "ar": "خياطة شق فتح البطن في الأبقار يجب أن تشمل الصفاق الأصفر بإحكام لمنع انفتاق أو تباعد جرح العملية تحت ثقل الكرش."
    },
    "commonPathologies": [
      {
        "en": "Surgical laparotomy closures in cattle must securely anchor suture bites into th...",
        "ar": "خياطة شق فتح البطن في الأبقار يجب أن تشمل الصفاق الأصفر بإحكام لمنع انفتاق أو تب..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.4,
        -0.1
      ],
      "target": [
        0,
        0.32,
        -0.1
      ]
    },
    "color": "#fef08a",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Canine_Cor",
    "meshId": "Mesh_Canine_Cor",
    "systemId": "cardiovascular",
    "speciesId": "canine",
    "latinTaxonomyName": "Cor (Canis lupus familiaris)",
    "name": {
      "en": "Canine Conical Heart",
      "ar": "قلب الكلبيات المخروطي"
    },
    "description": {
      "en": "Conical four-chambered heart positioned obliquely between 3rd and 6th intercostal spaces in the middle mediastinum, apex tilted toward the left sternal floor.",
      "ar": "قلب مخروطي رباعي التجاويف يستقر بميلان بين الفراغين الوربيين الثالث والسادس في المنصف الأوسط، متجهاً بقمته لليسار."
    },
    "bloodSupply": {
      "en": "Left coronary artery (dominant in dogs, branching into paraconal and circumflex) and right coronary artery.",
      "ar": "الشريان التاجي الأيسر (الرئيسي في الكلاب ويتفرع للمخروطي والمنعطف) والشريان التاجي الأيمن."
    },
    "innervation": {
      "en": "Cardiac autonomic plexus (vagal parasympathetic and thoracic sympathetic cardiac nerves).",
      "ar": "الضفيرة القلبية الذاتية (أعصاب مبهمة نظيرة الودية وأعصاب قلبية ودية صدرية)."
    },
    "clinicalPearls": {
      "en": "Mitral punctum maximum: Left 5th intercostal space at costochondral junction; primary listening point for systolic murmurs of MMVD.",
      "ar": "نقطة التسمع العظمى للصمام التاجي: الورب الخامس الأيسر؛ لاكتشاف نفخات مرض الصمام التاجي المخاطي MMVD."
    },
    "commonPathologies": [
      {
        "en": "Mitral punctum maximum: Left 5th intercostal space at costochondral junction; pr...",
        "ar": "نقطة التسمع العظمى للصمام التاجي: الورب الخامس الأيسر؛ لاكتشاف نفخات مرض الصمام ..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.5,
        0.3
      ],
      "target": [
        0,
        0.38,
        0.3
      ]
    },
    "color": "#dc2626",
    "emissiveColor": "#0284c7",
    "proceduralType": "heart"
  },
  {
    "id": "Mesh_Canine_Aorta",
    "meshId": "Mesh_Canine_Aorta",
    "systemId": "cardiovascular",
    "speciesId": "canine",
    "latinTaxonomyName": "Arcus aortae et Trunci arteriosi",
    "name": {
      "en": "Canine Aortic Arch & Major Trunks",
      "ar": "قوس الأبهر والجذوع الشريانية للكلب"
    },
    "description": {
      "en": "Aortic arch delivering two distinct arterial trunks: the brachiocephalic trunk and the left subclavian artery.",
      "ar": "قوس الأبهر الذي يتفرع منه جذعان شريانيان متميزان: الجذع العضدي الرأسي والشريان تحت الترقوي الأيسر."
    },
    "bloodSupply": {
      "en": "Systemic oxygenated arterial ejection.",
      "ar": "الدفع الشرياني المؤكسج الجهازي."
    },
    "innervation": {
      "en": "Aortic depressor nerve (vagal baroreceptor branch).",
      "ar": "العصب الخافض للأبهر (فرع المستقبلات الوعائية للمبهم)."
    },
    "clinicalPearls": {
      "en": "Patent Ductus Arteriosus (PDA): Continuous \"machinery\" murmur heard best at the left cranial base (3rd ICS); causes left heart volume overload.",
      "ar": "القناة الشريانية السالكة PDA: نفخة الآلة الميكانيكية المستمرة تُسمع بوضوح في الورب الثالث الأيسر؛ وتسبب فرط حمل للقلب الأيسر."
    },
    "commonPathologies": [
      {
        "en": "Patent Ductus Arteriosus (PDA): Continuous \"machinery\" murmur heard best at the ...",
        "ar": "القناة الشريانية السالكة PDA: نفخة الآلة الميكانيكية المستمرة تُسمع بوضوح في الو..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        0.7,
        0.25
      ],
      "target": [
        0,
        0.55,
        0.22
      ]
    },
    "color": "#b91c1c",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Canine_VenaCava",
    "meshId": "Mesh_Canine_VenaCava",
    "systemId": "cardiovascular",
    "speciesId": "canine",
    "latinTaxonomyName": "Vena cava cranialis et caudalis",
    "name": {
      "en": "Canine Cranial & Caudal Vena Cava",
      "ar": "الوريدان الأجوفان العلوي والسفلي للكلب"
    },
    "description": {
      "en": "Large thin-walled capacitance vessels delivering systemic deoxygenated venous return into the right atrium.",
      "ar": "الأوعية الوريدية الكبرى السعوية رقيقة الجدار التي تعيد الدم غير المؤكسج للأذين الأيمن."
    },
    "bloodSupply": {
      "en": "Venous return conduits from head, neck, forelimbs, and caudal abdomen.",
      "ar": "مجاري العائد الوريدي من الرأس والعنق والأطراف الأمامية والبطن."
    },
    "innervation": {
      "en": "Postganglionic sympathetic fibers.",
      "ar": "ألياف ودية بعد عقدية."
    },
    "clinicalPearls": {
      "en": "Caval Syndrome in Heartworm Disease (Dirofilaria immitis): Heavy adult worm burden lodges across the tricuspid valve into the caudal vena cava, causing acute intravascular hemolysis and shock.",
      "ar": "متلازمة الأجوف في مرض الديدان القلبية: احتشاد الديدان في الصمام ثلاثي الشرفات والوريد الأجوف يسبب انحلال دم حاد وصدمة مميتة."
    },
    "commonPathologies": [
      {
        "en": "Caval Syndrome in Heartworm Disease (Dirofilaria immitis): Heavy adult worm burd...",
        "ar": "متلازمة الأجوف في مرض الديدان القلبية: احتشاد الديدان في الصمام ثلاثي الشرفات وا..."
      }
    ],
    "cameraFocus": {
      "position": [
        -0.9,
        0.5,
        0.2
      ],
      "target": [
        -0.08,
        0.42,
        0.15
      ]
    },
    "color": "#2563eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Canine_VenaAzygosDextra",
    "meshId": "Mesh_Canine_VenaAzygosDextra",
    "systemId": "cardiovascular",
    "speciesId": "canine",
    "latinTaxonomyName": "Vena azygos dextra",
    "name": {
      "en": "Canine Right Azygos Vein",
      "ar": "الوريد الفرد الأيمن للكلب"
    },
    "description": {
      "en": "The dominant azygos vessel in carnivores, arching over the root of the right lung at the 5th thoracic vertebra to enter the cranial vena cava.",
      "ar": "الوريد الفرد الرئيسي في اللواحم، يلتف فوق جذر الرئة اليمنى عند الفقرة الصدرية الخامسة ليصب في الأجوف الأمامي."
    },
    "bloodSupply": {
      "en": "Drainage from dorsal intercostal veins 4 to 12.",
      "ar": "تصريف الأوردة الوربية الظهرية من 4 إلى 12."
    },
    "innervation": {
      "en": "Sympathetic vasomotor autonomic plexuses.",
      "ar": "الضفائر الودية الحركية الوعائية."
    },
    "clinicalPearls": {
      "en": "Important surgical landmark during right lateral thoracotomy for patent ductus arteriosus (PDA) ligation and persistent right aortic arch (PRAA) correction.",
      "ar": "معلم جراحي هام أثناء فتح الصدر الأيمن لربط القناة الشريانية PDA وإصلاح القوس الأبهر الأيمن المستمر PRAA."
    },
    "commonPathologies": [
      {
        "en": "Important surgical landmark during right lateral thoracotomy for patent ductus a...",
        "ar": "معلم جراحي هام أثناء فتح الصدر الأيمن لربط القناة الشريانية PDA وإصلاح القوس الأ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.6,
        0.15
      ],
      "target": [
        0.1,
        0.52,
        0.1
      ]
    },
    "color": "#1d4ed8",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Canine_Gaster",
    "meshId": "Mesh_Canine_Gaster",
    "systemId": "digestive",
    "speciesId": "canine",
    "latinTaxonomyName": "Gaster (Canis lupus familiaris)",
    "name": {
      "en": "Canine Simple Stomach",
      "ar": "معدة الكلب البسيطة"
    },
    "description": {
      "en": "J-shaped monogastric stomach situated in the cranial abdomen, prone to clockwise torsion and distension in large deep-chested breeds.",
      "ar": "معدة بسيطة أحادية التجويف على شكل حرف J في مقدمة البطن، معرضة للالتواء الميكانيكي في السلالات عميقة الصدر."
    },
    "bloodSupply": {
      "en": "Celiac artery branches: Left gastric, right gastric, left gastroepiploic, right gastroepiploic, and short gastric arteries.",
      "ar": "فروع الشريان الجوفي: المعدي الأيسر والأيمن والمعدي الثربي والشرايين القصيرة."
    },
    "innervation": {
      "en": "Vagus nerve (dorsal and ventral gastric branches) and celiac sympathetic plexus.",
      "ar": "العصب المبهم (الفروع المعدية الظهرية والبطنية) والضفيرة الودية الجوفية."
    },
    "clinicalPearls": {
      "en": "Gastric Dilatation-Volvulus (GDV): Right lateral abdominal radiograph shows pathognomonic \"double bubble\" or \"Popeye arm\" compartment sign.",
      "ar": "التواء وتمدد المعدة GDV: الأشعة الجانبية اليمنى تظهر علامة \"الفقاعة المزدوجة\" أو \"ذراع باباي\" الهوائية المميزة."
    },
    "commonPathologies": [
      {
        "en": "Gastric Dilatation-Volvulus (GDV): Right lateral abdominal radiograph shows path...",
        "ar": "التواء وتمدد المعدة GDV: الأشعة الجانبية اليمنى تظهر علامة \"الفقاعة المزدوجة\" أو..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        0.4,
        0.1
      ],
      "target": [
        0.05,
        0.38,
        0.05
      ]
    },
    "color": "#ea580c",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Canine_Hepar",
    "meshId": "Mesh_Canine_Hepar",
    "systemId": "digestive",
    "speciesId": "canine",
    "latinTaxonomyName": "Hepar et Vesica fellea",
    "name": {
      "en": "Canine Multilobed Liver & Gallbladder",
      "ar": "كبد الكلبيات متعدد الفصوص والمرارة"
    },
    "description": {
      "en": "Deeply fissured liver divided into six anatomical lobes (left lateral/medial, right lateral/medial, quadrate, and caudate with papillary process).",
      "ar": "كبد عميق الشقوق ينقسم إلى ستة فصوص تشريحية وتستقر المرارة بين الفصين المربع والأنسي الأيمن."
    },
    "bloodSupply": {
      "en": "Hepatic portal vein (70-80% flow) and hepatic artery (20-30% oxygenated); drains via hepatic veins into caudal vena cava.",
      "ar": "الوريد البابي الكبدي (70-80%) والشريان الكبدي (20-30%) ويصرف عبر الأوردة الكبدية في الأجوف الخلفي."
    },
    "innervation": {
      "en": "Hepatic plexus (vagus and celiac sympathetic).",
      "ar": "الضفيرة الكبدية (المبهم والودي الجوفي)."
    },
    "clinicalPearls": {
      "en": "Congenital Portosystemic Shunt (PSS): Extrahepatic shunts in toy breeds (Yorkies) allow portal blood to bypass the liver, causing microhepatica and ammonium urate stones.",
      "ar": "المجازة البابية الجهازية PSS: تحول دم الوريد البابي بعيداً عن الكبد في السلالات الصغيرة مسبباً صغر حجم الكبد وحصوات يورات الأمونيوم."
    },
    "commonPathologies": [
      {
        "en": "Congenital Portosystemic Shunt (PSS): Extrahepatic shunts in toy breeds (Yorkies...",
        "ar": "المجازة البابية الجهازية PSS: تحول دم الوريد البابي بعيداً عن الكبد في السلالات ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.6,
        0.3
      ],
      "target": [
        0,
        0.48,
        0.22
      ]
    },
    "color": "#991b1b",
    "emissiveColor": "#0284c7",
    "proceduralType": "liver"
  },
  {
    "id": "Mesh_Canine_IntestinumTenue",
    "meshId": "Mesh_Canine_IntestinumTenue",
    "systemId": "digestive",
    "speciesId": "canine",
    "latinTaxonomyName": "Intestinum tenue (Duodenum, Jejunum, Ileum)",
    "name": {
      "en": "Canine Small Intestine (Duodenum, Jejunum, Ileum)",
      "ar": "الأمعاء الدقيقة للكلب (الإثناعشر، الصائم، اللفائفي)"
    },
    "description": {
      "en": "Alimentary tube measuring 3-4 meters with descending duodenum held on the right by the mesoduodenum, extensive mobile jejunal loops, and antimesenteric ileal artery.",
      "ar": "أنبوب هضمي بطول 3-4 أمتار مع إثناعشر نازل على اليمين وحلقات صائم متحركة وشريان لفائفي مواجه للمساريق."
    },
    "bloodSupply": {
      "en": "Cranial mesenteric artery; drained by mesenteric veins into the portal vein.",
      "ar": "الشريان المساريقي الأمامي؛ والأوردة المساريقية تصب في الوريد البابي."
    },
    "innervation": {
      "en": "Cranial mesenteric autonomic plexus (vagal motor and sympathetic splanchnic inhibitory).",
      "ar": "الضفيرة المساريقية الأمامية (المبهم حركي والأحشائي الودي مثبط)."
    },
    "clinicalPearls": {
      "en": "Linear Foreign Body Obstruction: Strings or pantyhose anchor at the pylorus or tongue base, causing mesenteric border pleating/plication and fatal intestinal perforation.",
      "ar": "انسداد الأجسام الغريبة الخيطية: تعليق الخيوط في البواب يسبب انكماشاً وتجعداً أفقياً للأمعاء (Plication) وانثقاباً معوياً قاتلاً."
    },
    "commonPathologies": [
      {
        "en": "Linear Foreign Body Obstruction: Strings or pantyhose anchor at the pylorus or t...",
        "ar": "انسداد الأجسام الغريبة الخيطية: تعليق الخيوط في البواب يسبب انكماشاً وتجعداً أفق..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.4,
        0
      ],
      "target": [
        0,
        0.25,
        -0.2
      ]
    },
    "color": "#f59e0b",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Canine_Pancreas",
    "meshId": "Mesh_Canine_Pancreas",
    "systemId": "digestive",
    "speciesId": "canine",
    "latinTaxonomyName": "Pancreas (Lobus dexter, Lobus sinister et Corpus)",
    "name": {
      "en": "Canine V-Shaped Pancreas",
      "ar": "بنكرياس الكلب ذو الشعبتين"
    },
    "description": {
      "en": "V-shaped lobulated gland consisting of a right lobe nestled in the mesoduodenum and a left lobe extending along the dorsal surface of the stomach to the spleen.",
      "ar": "غدة مفصصة على شكل حرف V تتكون من فص أيمن يستقر في مساريق الإثناعشر وفص أيسر يمتد على الوجه الظهري للمعدة حتى الطحال."
    },
    "bloodSupply": {
      "en": "Cranial pancreaticoduodenal (from celiac) and caudal pancreaticoduodenal (from cranial mesenteric) arteries.",
      "ar": "الشريانان البنكرياسيان الإثناعشريان الأمامي والخلفي."
    },
    "innervation": {
      "en": "Autonomic branches from celiac and mesenteric plexuses.",
      "ar": "الفروع الذاتية من الضفيرتين الجوفية والمساريقية."
    },
    "clinicalPearls": {
      "en": "Acute Pancreatitis: Premature zymogen activation triggers autodigestion; dogs assume a characteristic \"praying position\" due to intense cranial abdominal pain.",
      "ar": "التهاب البنكرياس الحاد: التفعيل المبكر لإنزيمات الهضم يسبب الهضم الذاتي؛ وتتخذ الكلاب \"وضعية الصلاة/السجود\" بسبب ألم البطن الأمامي العنيف."
    },
    "commonPathologies": [
      {
        "en": "Acute Pancreatitis: Premature zymogen activation triggers autodigestion; dogs as...",
        "ar": "التهاب البنكرياس الحاد: التفعيل المبكر لإنزيمات الهضم يسبب الهضم الذاتي؛ وتتخذ ا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        0.5,
        0.1
      ],
      "target": [
        0.12,
        0.35,
        0
      ]
    },
    "color": "#fed7aa",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Canine_Larynx",
    "meshId": "Mesh_Canine_Larynx",
    "systemId": "respiratory",
    "speciesId": "canine",
    "latinTaxonomyName": "Larynx (Plicae vocales et Cartilagines)",
    "name": {
      "en": "Canine Larynx & Vocal Folds",
      "ar": "حنجرة الكلب والحبال الصوتية"
    },
    "description": {
      "en": "Musculocartilaginous valve regulating vocalization and preventing aspiration, consisting of epiglottic, thyroid, cricoid, and paired arytenoid cartilages.",
      "ar": "صمام عضلي غضروفي ينظم النباح ويمنع استنشاق الطعام، يتكون من لسان المزمار والغضاريف الدرقية والحلقية والطرجهارية."
    },
    "bloodSupply": {
      "en": "Cranial laryngeal artery from external carotid artery.",
      "ar": "الشريان الحنجري الأمامي من السباتي الظاهر."
    },
    "innervation": {
      "en": "Cranial laryngeal nerve (sensory and cricothyroid) and Caudal/Recurrent laryngeal nerve (abductor CAD muscle).",
      "ar": "العصب الحنجري الأمامي والعصب الحنجري الراجع (المغذي لعضلة فتح المزمار CAD)."
    },
    "clinicalPearls": {
      "en": "Canine Laryngeal Paralysis (Geriatric Onset Laryngeal Paralysis Polyneuropathy / GOLPP): Degeneration of CAD muscles produces inspiratory stridor and cyanosis in older Labradors.",
      "ar": "شلل الحنجرة في الكلاب المسنة GOLPP: تنكس العضلة الحلقية الطرجهارية يسبب صريراً شهيقياً واختناقاً حاداً في كلاب اللابرادور."
    },
    "commonPathologies": [
      {
        "en": "Canine Laryngeal Paralysis (Geriatric Onset Laryngeal Paralysis Polyneuropathy /...",
        "ar": "شلل الحنجرة في الكلاب المسنة GOLPP: تنكس العضلة الحلقية الطرجهارية يسبب صريراً ش..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        0.8,
        0.7
      ],
      "target": [
        0,
        0.65,
        0.6
      ]
    },
    "color": "#cbd5e1",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Canine_Trachea",
    "meshId": "Mesh_Canine_Trachea",
    "systemId": "respiratory",
    "speciesId": "canine",
    "latinTaxonomyName": "Trachea (Cartilagines tracheales)",
    "name": {
      "en": "Canine Trachea & Cartilaginous Rings",
      "ar": "قصبة الكلب الهوائية والحلقات الغضروفية"
    },
    "description": {
      "en": "Flexible conduit of ~35 C-shaped hyaline rings completed dorsally by the external trachealis muscle; traverses neck into cranial thorax to T4-T5 bifurcation.",
      "ar": "أنبوب مرن يضم حوالي 35 حلقة غضروفية غير مكتملة تكملها العضلة الرغامية ظهرياً ويمتد في العنق حتى التفرع الصدري عند T4-T5."
    },
    "bloodSupply": {
      "en": "Common carotid arteries in neck; cranial bronchoesophageal branches in thorax.",
      "ar": "الشرايين السباتية والشريان القصبي المريئي."
    },
    "innervation": {
      "en": "Recurrent laryngeal nerve and sympathetic trunk.",
      "ar": "العصب الحنجري الراجع والجذع الودي."
    },
    "clinicalPearls": {
      "en": "Tracheal Collapse: Dorsoventral flattening of rings with lax trachealis muscle in small breeds (Yorkies, Poms); causes characteristic \"goose honk\" paroxysmal cough.",
      "ar": "انهيار وتسطح القصبة الهوائية: ارتخاء العضلة وتسطح الحلقات في الكلاب الصغيرة يسبب سعالاً نوبياً شبيهاً بـ \"صياح الإوزة\"."
    },
    "commonPathologies": [
      {
        "en": "Tracheal Collapse: Dorsoventral flattening of rings with lax trachealis muscle i...",
        "ar": "انهيار وتسطح القصبة الهوائية: ارتخاء العضلة وتسطح الحلقات في الكلاب الصغيرة يسبب..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        0.7,
        0.5
      ],
      "target": [
        0,
        0.55,
        0.38
      ]
    },
    "color": "#94a3b8",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Canine_PulmoSinister",
    "meshId": "Mesh_Canine_PulmoSinister",
    "systemId": "respiratory",
    "speciesId": "canine",
    "latinTaxonomyName": "Pulmo sinister (Lobus cranialis et Lobus caudalis)",
    "name": {
      "en": "Canine Left Lung (Cranial & Caudal Lobes)",
      "ar": "رئة الكلب اليسرى (الفصان القحفي والذيلي)"
    },
    "description": {
      "en": "Left pulmonary parenchyma divided by a deep interlobar fissure into a cranial lobe (with cranial and caudal parts) and an extensive caudal lobe.",
      "ar": "نسيج الرئة اليسرى المقسم بشق عميق لفص قحفي (بجزأين أمامي وخلفي) وفص ذيلي واسع يمتد للحجاب الحاجز."
    },
    "bloodSupply": {
      "en": "Left pulmonary artery carrying deoxygenated blood; left bronchoesophageal branches for tissue nutrition.",
      "ar": "الشريان الرئوي الأيسر وفروع الشريان القصبي المريئي المغذية."
    },
    "innervation": {
      "en": "Pulmonary autonomic plexus.",
      "ar": "الضفيرة الرئوية الذاتية."
    },
    "clinicalPearls": {
      "en": "Left-sided congestive heart failure secondary to DCM or MMVD causes perihilar pulmonary venous congestion and severe cardiogenic pulmonary edema.",
      "ar": "فشل القلب الاحتقاني الأيسر يسبب احتقاناً وريدياً رئوياً ووذمة رئة قلبية حادة تبدأ حول سرة الرئة في فصوصها اليسرى واليمنى."
    },
    "commonPathologies": [
      {
        "en": "Left-sided congestive heart failure secondary to DCM or MMVD causes perihilar pu...",
        "ar": "فشل القلب الاحتقاني الأيسر يسبب احتقاناً وريدياً رئوياً ووذمة رئة قلبية حادة تبد..."
      }
    ],
    "cameraFocus": {
      "position": [
        -1,
        0.6,
        0.2
      ],
      "target": [
        -0.2,
        0.42,
        0.12
      ]
    },
    "color": "#f43f5e",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Canine_PulmoDexter",
    "meshId": "Mesh_Canine_PulmoDexter",
    "systemId": "respiratory",
    "speciesId": "canine",
    "latinTaxonomyName": "Pulmo dexter (Cranialis, Medius, Caudalis, Accessorius)",
    "name": {
      "en": "Canine Right Lung (4 Distinct Lobes)",
      "ar": "رئة الكلب اليمنى (رباعية الفصوص)"
    },
    "description": {
      "en": "Voluminous right lung divided by deep interlobar fissures into four independent lobes: cranial, middle, caudal, and accessory, accounting for ~58% of total lung volume.",
      "ar": "رئة يمنى واسعة تنقسم بشقوق عميقة لأربعة فصوص مستقلة: قحفي، أوسط، ذيلي، وإضافي، وتشكل حوالي 58% من الحجم الرئوي الكلي."
    },
    "bloodSupply": {
      "en": "Right pulmonary artery and branches of bronchoesophageal artery.",
      "ar": "الشريان الرئوي الأيمن وتفرعات الشريان القصبي المريئي."
    },
    "innervation": {
      "en": "Pulmonary plexus (vagal and sympathetic).",
      "ar": "الضفيرة الرئوية الذاتية."
    },
    "clinicalPearls": {
      "en": "Lung Lobe Torsion: Spontaneous twisting of a lung lobe (most frequently right middle or left cranial lobe) occurs in deep-chested breeds (Afghan Hounds), causing pleural effusion.",
      "ar": "انفتال الفص الرئوي: التواء الفص الرئوي التلقائي (الأوسط الأيمن غالباً) يحدث في الكلاب عميقة الصدر مسبباً انصباباً صدرياً حاداً."
    },
    "commonPathologies": [
      {
        "en": "Lung Lobe Torsion: Spontaneous twisting of a lung lobe (most frequently right mi...",
        "ar": "انفتال الفص الرئوي: التواء الفص الرئوي التلقائي (الأوسط الأيمن غالباً) يحدث في ا..."
      }
    ],
    "cameraFocus": {
      "position": [
        1,
        0.6,
        0.2
      ],
      "target": [
        0.2,
        0.42,
        0.12
      ]
    },
    "color": "#fb7185",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Canine_Cerebrum",
    "meshId": "Mesh_Canine_Cerebrum",
    "systemId": "nervous",
    "speciesId": "canine",
    "latinTaxonomyName": "Cerebrum et Bulbi olfactorii",
    "name": {
      "en": "Canine Cerebrum & Olfactory Bulbs",
      "ar": "مخ الكلبيات والبصلتان الشميتان"
    },
    "description": {
      "en": "Gyrencephalic brain weighing 70-130 g featuring massive olfactory bulbs (up to 40x human relative size) and specialized sensory integration centers.",
      "ar": "مخ متطور التلافيف يزن 70-130 جم يتميز ببصلتين شميتين هائلتين (أكبر 40 ضعفاً نسبياً من الإنسان) ومراكز تكامل حسي حركي دقيقة."
    },
    "bloodSupply": {
      "en": "Cerebral arterial circle (Circle of Willis) supplied by internal carotid and basilar arteries (vertebral system).",
      "ar": "الدائرة الشريانية الدماغية (دائرة ويليس) المزودة بالشريانين السباتي الباطن والقاعدي."
    },
    "innervation": {
      "en": "Trigeminal meningeal sensory fibers.",
      "ar": "الألياف السحائية الحسية للعصب ثلاثي التوائم."
    },
    "clinicalPearls": {
      "en": "Idiopathic Epilepsy: Most common neurological condition in dogs (1-5 years old); manifests with generalized tonic-clonic seizures requiring lifelong anticonvulsant therapy.",
      "ar": "الصرع مجهول السبب: أكثر الأمراض العصبية شيوعاً في الكلاب (عمر 1-5 سنوات)؛ ويظهر بنوبات صرعية ارتجاجية تتطلب علاجاً مضاداً للتشنج مدى الحياة."
    },
    "commonPathologies": [
      {
        "en": "Idiopathic Epilepsy: Most common neurological condition in dogs (1-5 years old);...",
        "ar": "الصرع مجهول السبب: أكثر الأمراض العصبية شيوعاً في الكلاب (عمر 1-5 سنوات)؛ ويظهر ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        0.9,
        0.8
      ],
      "target": [
        0,
        0.72,
        0.7
      ]
    },
    "color": "#facc15",
    "emissiveColor": "#0284c7",
    "proceduralType": "brain"
  },
  {
    "id": "Mesh_Canine_Cerebellum",
    "meshId": "Mesh_Canine_Cerebellum",
    "systemId": "nervous",
    "speciesId": "canine",
    "latinTaxonomyName": "Cerebellum (Canis lupus familiaris)",
    "name": {
      "en": "Canine Cerebellum",
      "ar": "مخيخ الكلبيات"
    },
    "description": {
      "en": "Tightly folded structure with median vermis and two lateral hemispheres responsible for coordination, precision, and accurate timing of motor actions.",
      "ar": "بنية مطوية بإحكام ذات دودة وسطية ونصفين جانبيين مسؤولة عن التنسيق والدقة والتوقيت الزمني للحركات."
    },
    "bloodSupply": {
      "en": "Rostral and caudal cerebellar arteries off the basilar artery.",
      "ar": "الشرايين المخيخية من الشريان القاعدي."
    },
    "innervation": {
      "en": "Purkinje cells projecting inhibitory GABAergic signals to deep cerebellar nuclei.",
      "ar": "عصبونات بيركنجي التي ترسل إشارات تثبيطية للنوى المخيخية العميقة."
    },
    "clinicalPearls": {
      "en": "Canine Distemper Encephalomyelitis: Morbillivirus induces demyelination in cerebellar white matter and peduncles, causing myoclonus and cerebellar ataxia.",
      "ar": "التهاب الدماغ بمرض الديستمبر (حمى الكلاب): يسبب الفيروس زوال الميالين في المخيخ مسبباً رمَعاً عضلياً إيقاعياً (Myoclonus) وترنحاً."
    },
    "commonPathologies": [
      {
        "en": "Canine Distemper Encephalomyelitis: Morbillivirus induces demyelination in cereb...",
        "ar": "التهاب الدماغ بمرض الديستمبر (حمى الكلاب): يسبب الفيروس زوال الميالين في المخيخ ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.6,
        0.8,
        0.65
      ],
      "target": [
        0,
        0.68,
        0.58
      ]
    },
    "color": "#eab308",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Canine_MedullaSpinalis_IVDD",
    "meshId": "Mesh_Canine_MedullaSpinalis_IVDD",
    "systemId": "nervous",
    "speciesId": "canine",
    "latinTaxonomyName": "Medulla spinalis (Regio thoracolumbalis T11 - L2)",
    "name": {
      "en": "Canine Thoracolumbar Spinal Cord (IVDD Zone)",
      "ar": "النخاع الشوكي الصدري القطني للكلب (منطقة IVDD)"
    },
    "description": {
      "en": "The segments of spinal cord between T11 and L2 where intervertebral disc disease (Hansen Type I extrusion) occurs most frequently in chondrodystrophic breeds.",
      "ar": "فقرات النخاع الشوكي بين T11 و L2 حيث يحدث انزلاق الغضروف وانفتاقه (Hansen Type I) بكثرة في السلالات قصيرة القوائم (الداشهند)."
    },
    "bloodSupply": {
      "en": "Ventral spinal artery, dorsal spinal arteries, and spinal branches of lumbar arteries.",
      "ar": "الشريان الشوكي البطني والشريانان الشوكيان الظهران وفروع الشرايين القطنية."
    },
    "innervation": {
      "en": "Sensory ascending tracts and motor descending upper/lower motor neurons.",
      "ar": "المسالك العصبية الصاعدة للحس والهابطة للحركة."
    },
    "clinicalPearls": {
      "en": "Hansen Type I Intervertebral Disc Disease (IVDD): Loss of deep pain sensation indicates a grave prognosis (<50% recovery with emergency hemilaminectomy).",
      "ar": "انزلاق الغضروف IVDD: فقدان الإحساس بالألم العميق يشير لإنذار حرج (<50% نسبة شفاء بالجراحة الإسعافية لقص صفيحة الفقرة Hemilaminectomy)."
    },
    "commonPathologies": [
      {
        "en": "Hansen Type I Intervertebral Disc Disease (IVDD): Loss of deep pain sensation in...",
        "ar": "انزلاق الغضروف IVDD: فقدان الإحساس بالألم العميق يشير لإنذار حرج (<50% نسبة شفاء..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.6,
        0.7,
        0.2
      ],
      "target": [
        0,
        0.62,
        0.05
      ]
    },
    "color": "#fef08a",
    "emissiveColor": "#0284c7",
    "proceduralType": "spine"
  },
  {
    "id": "Mesh_Canine_PlexusBrachialis",
    "meshId": "Mesh_Canine_PlexusBrachialis",
    "systemId": "nervous",
    "speciesId": "canine",
    "latinTaxonomyName": "Plexus brachialis (C6 - T2)",
    "name": {
      "en": "Canine Brachial Plexus",
      "ar": "الضفيرة العضدية للكلب"
    },
    "description": {
      "en": "Network of somatic nerve roots emerging from spinal segments C6, C7, C8, T1, and T2, innervating all thoracic limb muscles, joints, and skin.",
      "ar": "شبكة الجذور العصبية الشوكية المنبثقة من C6 و C7 و C8 و T1 و T2 لتغذية عضلات ومفاصل وجلد الطرف الصدري بالكامل."
    },
    "bloodSupply": {
      "en": "Superficial cervical, axillary, and subscapular arteries.",
      "ar": "الشرايين الرقبية السطحية والإبطية وتحت الكتفية."
    },
    "innervation": {
      "en": "Radial, ulnar, median, musculocutaneous, axillary, and suprascapular nerves.",
      "ar": "الأعصاب الكعبرية والزندية والوسطية والعضلية الجلدية والإبطية وفوق الكتفية."
    },
    "clinicalPearls": {
      "en": "Brachial Plexus Avulsion: Traction injury from vehicular trauma tears nerve roots, causing total flaccid limb paralysis and Horner's syndrome (T1-T2 sympathetic loss).",
      "ar": "اقتلاع الضفيرة العضدية: شد القائمة الأمامية بحوادث السيارات يمزق الجذور العصبية مسبباً شللاً رخواً للقائمة ومتلازمة هورنر في العين."
    },
    "commonPathologies": [
      {
        "en": "Brachial Plexus Avulsion: Traction injury from vehicular trauma tears nerve root...",
        "ar": "اقتلاع الضفيرة العضدية: شد القائمة الأمامية بحوادث السيارات يمزق الجذور العصبية ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        0.6,
        0.4
      ],
      "target": [
        0.15,
        0.48,
        0.3
      ]
    },
    "color": "#facc15",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Canine_RenSinister",
    "meshId": "Mesh_Canine_RenSinister",
    "systemId": "urogenital",
    "speciesId": "canine",
    "latinTaxonomyName": "Ren sinister (Canis lupus familiaris)",
    "name": {
      "en": "Canine Left Kidney (Bean-Shaped)",
      "ar": "كلية الكلب اليسرى (حبة الفاصولياء)"
    },
    "description": {
      "en": "Smooth, unipyramidal bean-shaped kidney located loosely in the retroperitoneal space under L1-L3, notably more mobile and caudal than the right kidney.",
      "ar": "كلية ملساء أحادية الهرم تشبه حبة الفاصولياء تستقر خلف البريتون أسفل الفقرات L1-L3، وتكون أكثر حركة وموقعاً خلفياً من الكلية اليمنى."
    },
    "bloodSupply": {
      "en": "Left renal artery originating directly from the abdominal aorta; left renal vein draining into caudal vena cava.",
      "ar": "الشريان الكلوي الأيسر من الأبهر والوريد الكلوي الأيسر يصب في الأجوف الخلفي."
    },
    "innervation": {
      "en": "Renal autonomic plexus from celiacomesenteric ganglion.",
      "ar": "الضفيرة الكلوية الذاتية."
    },
    "clinicalPearls": {
      "en": "The canine left kidney is readily palpable in normal lean dogs; the right kidney is cranial, tucked in the caudate liver lobe, and rarely palpable.",
      "ar": "كلية الكلب اليسرى سهلة الجس في الكلاب النحيفة؛ بينما اليمنى تستقر في مقدمة البطن داخل فص الكبد المذنب ولا تُجس عادة."
    },
    "commonPathologies": [
      {
        "en": "The canine left kidney is readily palpable in normal lean dogs; the right kidney...",
        "ar": "كلية الكلب اليسرى سهلة الجس في الكلاب النحيفة؛ بينما اليمنى تستقر في مقدمة البطن..."
      }
    ],
    "cameraFocus": {
      "position": [
        -0.8,
        0.6,
        -0.1
      ],
      "target": [
        -0.18,
        0.48,
        -0.1
      ]
    },
    "color": "#701a75",
    "emissiveColor": "#0284c7",
    "proceduralType": "kidney"
  },
  {
    "id": "Mesh_Canine_RenDexter",
    "meshId": "Mesh_Canine_RenDexter",
    "systemId": "urogenital",
    "speciesId": "canine",
    "latinTaxonomyName": "Ren dexter (Canis lupus familiaris)",
    "name": {
      "en": "Canine Right Kidney",
      "ar": "كلية الكلب اليمنى"
    },
    "description": {
      "en": "Cranially situated bean-shaped kidney fitting securely into the renal fossa of the caudate liver lobe under ribs 12 and 13.",
      "ar": "كلية كلوية الشكل تستقر في مقدمة البطن مستقرة بإحكام في الحفرة الكلوية لفص الكبد المذنب تحت الضلعين 12 و 13."
    },
    "bloodSupply": {
      "en": "Right renal artery and right renal vein.",
      "ar": "الشريان الكلوي الأيمن والوريد الكلوي الأيمن."
    },
    "innervation": {
      "en": "Renal autonomic nerve plexus.",
      "ar": "الضفيرة العصبية الكلوية الذاتية."
    },
    "clinicalPearls": {
      "en": "Renal Carcinoma and Nephrolithiasis: Staghorn calculi in the renal pelvis require pyelolithotomy or nephrectomy if unilateral and renal function permits.",
      "ar": "أورام الكلى وحصوات حوض الكلية (شاخية الشكل): تتطلب استخراج الحصاة من حوض الكلية أو استئصال الكلية عند سلامة الكلية الأخرى."
    },
    "commonPathologies": [
      {
        "en": "Renal Carcinoma and Nephrolithiasis: Staghorn calculi in the renal pelvis requir...",
        "ar": "أورام الكلى وحصوات حوض الكلية (شاخية الشكل): تتطلب استخراج الحصاة من حوض الكلية ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.6,
        0
      ],
      "target": [
        0.18,
        0.52,
        0
      ]
    },
    "color": "#86198f",
    "emissiveColor": "#0284c7",
    "proceduralType": "kidney"
  },
  {
    "id": "Mesh_Canine_VesicaUrinaria",
    "meshId": "Mesh_Canine_VesicaUrinaria",
    "systemId": "urogenital",
    "speciesId": "canine",
    "latinTaxonomyName": "Vesica urinaria (Canis lupus familiaris)",
    "name": {
      "en": "Canine Urinary Bladder",
      "ar": "مثانة الكلبيات"
    },
    "description": {
      "en": "Hollow distensible musculo-membranous organ collecting urine; apex projects into ventral abdominal cavity when full, neck enters the pelvic canal.",
      "ar": "عضو عضلي غشائي مجوف قابل للتمدد يجمع البول؛ تبرز قمته في تجويف البطن عند الامتلاء ويدخل عنقه لقناة الحوض."
    },
    "bloodSupply": {
      "en": "Cranial vesical artery (from umbilical remnant) and caudal vesical artery (from prostatic/vaginal artery).",
      "ar": "الشريانان المثانيان الأمامي والخلفي."
    },
    "innervation": {
      "en": "Pelvic nerve (parasympathetic detrusor), hypogastric nerve (sympathetic internal sphincter), and pudendal nerve (somatic external sphincter).",
      "ar": "العصب الحوضي (لاإرادي للمثانة) وعصب تحت المعدة والعصب الاستحيائي (إرادي للمعصرة الخارجية)."
    },
    "clinicalPearls": {
      "en": "Cystocentesis: Easily performed in dorsal or lateral recumbency using a 22-gauge needle inserted at a 45-degree angle cranial to the pubis on the ventral midline.",
      "ar": "بزل المثانة Cystocentesis: يجرى بأمان بإبرة قياس 22 بزاوية 45 درجة أمام عظم العانة على خط الوسط البطني لسحب بول نقي معقم."
    },
    "commonPathologies": [
      {
        "en": "Cystocentesis: Easily performed in dorsal or lateral recumbency using a 22-gauge...",
        "ar": "بزل المثانة Cystocentesis: يجرى بأمان بإبرة قياس 22 بزاوية 45 درجة أمام عظم العا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.6,
        0.4,
        -0.6
      ],
      "target": [
        0,
        0.28,
        -0.5
      ]
    },
    "color": "#a21caf",
    "emissiveColor": "#0284c7",
    "proceduralType": "bladder"
  },
  {
    "id": "Mesh_Canine_Prostata",
    "meshId": "Mesh_Canine_Prostata",
    "systemId": "urogenital",
    "speciesId": "canine",
    "latinTaxonomyName": "Prostata (Canis lupus familiaris)",
    "name": {
      "en": "Canine Prostate Gland",
      "ar": "بروستاتا الكلبيات (غدة الموثة)"
    },
    "description": {
      "en": "The sole accessory sex gland in male dogs; globular bilobed gland completely encircling the proximal pelvic urethra at the bladder neck.",
      "ar": "الغدة الجنسية الملحقة الوحيدة في ذكور الكلاب؛ غدة كروية ثنائية الفص تحيط بالكامل بمجرى الإحليل الحوضي عند عنق المثانة."
    },
    "bloodSupply": {
      "en": "Prostatic artery (from internal pudendal artery); drains via prostatic venous plexus into internal iliac veins.",
      "ar": "الشريان البروستاتي (من الاستحيائي الباطن) والأوردة تصب في الحرقفي الباطن."
    },
    "innervation": {
      "en": "Hypogastric (sympathetic emission) and pelvic nerves (parasympathetic secretion).",
      "ar": "العصبان تحت المعدة والحوضي."
    },
    "clinicalPearls": {
      "en": "Benign Prostatic Hyperplasia (BPH): Symmetrical non-painful enlargement in intact older males caused by DHT; causes tenesmus (ribbon-like feces) and responds to castration.",
      "ar": "تضخم البروستاتا الحميد BPH: تضخم متناظر غير مؤلم في الذكور غير المخصية بفعل DHT؛ يسبب تعصراً وتسطحاً للبراز ويستجيب للإخصاء."
    },
    "commonPathologies": [
      {
        "en": "Benign Prostatic Hyperplasia (BPH): Symmetrical non-painful enlargement in intac...",
        "ar": "تضخم البروستاتا الحميد BPH: تضخم متناظر غير مؤلم في الذكور غير المخصية بفعل DHT؛..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.5,
        0.4,
        -0.75
      ],
      "target": [
        0,
        0.25,
        -0.68
      ]
    },
    "color": "#fbcfe8",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Canine_Cranium",
    "meshId": "Mesh_Canine_Cranium",
    "systemId": "skeletal",
    "speciesId": "canine",
    "latinTaxonomyName": "Cranium (Canis lupus familiaris)",
    "name": {
      "en": "Canine Skull (Mesaticephalic)",
      "ar": "جمجمة الكلبيات (متوسطة الرأس)"
    },
    "description": {
      "en": "Mesaticephalic skull with prominent external sagittal crest, strong zygomatic arches for masseter attachment, and an open orbit completed by the orbital ligament.",
      "ar": "جمجمة متوسطة الاستطالة ذات عرف سهمي بارز وأقواس وجنية قوية لارتكاز العضلات وحجاج عيني مفتوح جانباً يكتمله رباط حجاجي ليفي."
    },
    "bloodSupply": {
      "en": "Maxillary, superficial temporal, and external ethmoidal arteries.",
      "ar": "الشرايين الفكية والصدغية السطحية والغربالية."
    },
    "innervation": {
      "en": "Trigeminal nerve (CN V, sensory) and Facial nerve (CN VII, motor).",
      "ar": "العصب ثلاثي التوائم (حسي) والعصب الوجهي (حركي)."
    },
    "clinicalPearls": {
      "en": "Carnassial Tooth Root Abscess: Periapical infection of the upper 4th premolar (PM4 / 108 or 208) erodes into the maxillary sinus, erupting as a draining fistula below the eye.",
      "ar": "خراج ضرس القواطع العلوي (Carnassial tooth): التهاب جذر الضاحك الرابع العلوي PM4 يخترق الجيب الفكي وينفجر كناسور صديدي تحت العين."
    },
    "commonPathologies": [
      {
        "en": "Carnassial Tooth Root Abscess: Periapical infection of the upper 4th premolar (P...",
        "ar": "خراج ضرس القواطع العلوي (Carnassial tooth): التهاب جذر الضاحك الرابع العلوي PM4 ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.9,
        0.9
      ],
      "target": [
        0,
        0.75,
        0.75
      ]
    },
    "color": "#f8fafc",
    "emissiveColor": "#0284c7",
    "proceduralType": "skull"
  },
  {
    "id": "Mesh_Canine_ColumnaVertebralis",
    "meshId": "Mesh_Canine_ColumnaVertebralis",
    "systemId": "skeletal",
    "speciesId": "canine",
    "latinTaxonomyName": "Columna vertebralis (C7 T13 L7 S3 Ca20-23)",
    "name": {
      "en": "Canine Vertebral Column",
      "ar": "العمود الفقري للكلب"
    },
    "description": {
      "en": "Flexible vertebral column comprising 7 cervical, 13 thoracic, 7 lumbar, 3 fused sacral, and 20-23 caudal vertebrae with thick fibrocartilaginous discs.",
      "ar": "عمود فقري مرن يضم 7 فقرات رقبية، 13 صدرية، 7 قطنية، 3 عجزية ملتحمة، و20-23 ذيلية مع أقراص بين فقرية ليفية غضروفية سميكة."
    },
    "bloodSupply": {
      "en": "Vertebral, dorsal intercostal, and lumbar segmental spinal arteries.",
      "ar": "الشرايين الفقرية والوربية والقطنية الشوكية."
    },
    "innervation": {
      "en": "Segmental dorsal and ventral primary spinal nerve rami.",
      "ar": "الفروع الأولية للأعصاب الشوكية."
    },
    "clinicalPearls": {
      "en": "Spondylospondylitis and Discospondylitis: Hematogenous bacterial infection (Brucella canis / Staph) of the intervertebral disc and adjacent vertebral endplates.",
      "ar": "التهاب الأقراص والفقرات Discospondylitis: عدوى بكتيرية دموية المنشأ (بروسيلا أو عنقوديات) للأقراص الفقرية وحواف الفقرات مسببة ألماً شديداً."
    },
    "commonPathologies": [
      {
        "en": "Spondylospondylitis and Discospondylitis: Hematogenous bacterial infection (Bruc...",
        "ar": "التهاب الأقراص والفقرات Discospondylitis: عدوى بكتيرية دموية المنشأ (بروسيلا أو ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        0.8,
        0.2
      ],
      "target": [
        0,
        0.65,
        0.1
      ]
    },
    "color": "#f1f5f9",
    "emissiveColor": "#0284c7",
    "proceduralType": "spine"
  },
  {
    "id": "Mesh_Canine_Femur",
    "meshId": "Mesh_Canine_Femur",
    "systemId": "skeletal",
    "speciesId": "canine",
    "latinTaxonomyName": "Femur, Patella et Articulatio genus",
    "name": {
      "en": "Canine Femur & Stifle Joint Complex",
      "ar": "عظم فخذ الكلب ومجمع مفصل الركبة"
    },
    "description": {
      "en": "Stout cylindrical thigh bone with hemispherical femoral head, greater trochanter, distal trochlea articulating with the patella, and paired condyles.",
      "ar": "عظم فخذ أسطواني قوي ذو رأس كروي ومدور كبير وبكرة مفصلية ترتكز عليها الرضفة ولقمتان فخذيتان."
    },
    "bloodSupply": {
      "en": "Lateral and medial circumflex femoral arteries and nutrient artery of the femur.",
      "ar": "الشرايين الفخذية المنعطفة الأنسية والوحشية والشريان المغذي لعظم الفخذ."
    },
    "innervation": {
      "en": "Femoral and sciatic nerves.",
      "ar": "العصبان الفخذي والوركي."
    },
    "clinicalPearls": {
      "en": "Cranial Cruciate Ligament Rupture (CCLR): Most common orthopedic injury in dogs; diagnosed by positive cranial drawer test and tibial thrust; treated by TPLO or TTA surgery.",
      "ar": "تمزق الرباط الصليبي الأمامي CCLR: أكثر الإصابات العظمية شيوعاً في الكلاب؛ يُشخص باختبار الجارور الأمامي وعلامة الدفع القصبي ويُعالج بعملية TPLO أو TTA."
    },
    "commonPathologies": [
      {
        "en": "Cranial Cruciate Ligament Rupture (CCLR): Most common orthopedic injury in dogs;...",
        "ar": "تمزق الرباط الصليبي الأمامي CCLR: أكثر الإصابات العظمية شيوعاً في الكلاب؛ يُشخص ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.5,
        -0.3
      ],
      "target": [
        0.22,
        0.35,
        -0.45
      ]
    },
    "color": "#e2e8f0",
    "emissiveColor": "#0284c7",
    "proceduralType": "limb"
  },
  {
    "id": "Mesh_Canine_OsPenis",
    "meshId": "Mesh_Canine_OsPenis",
    "systemId": "skeletal",
    "speciesId": "canine",
    "latinTaxonomyName": "Os penis (Baculum)",
    "name": {
      "en": "Canine Os Penis (Baculum)",
      "ar": "عظم قضيب الكلب (Baculum)"
    },
    "description": {
      "en": "Heterotopic splanchnic bone situated within the glans penis, characterized by a deep ventral urethral groove (Sulcus urethralis) conveying the penile urethra.",
      "ar": "عظم حشوي يستقر داخل حشفة القضيب، يتميز بميزاب إحليلي بطني عميق يمر عبره مجرى البول."
    },
    "bloodSupply": {
      "en": "Dorsal artery of the penis and deep artery of the penis.",
      "ar": "الشريان الظهري للقضيب والشرايين العميقة."
    },
    "innervation": {
      "en": "Dorsal nerve of the penis (terminal branch of pudendal nerve).",
      "ar": "العصب الظهري للقضيب من العصب الاستحيائي."
    },
    "clinicalPearls": {
      "en": "Urethral Obstruction / Urolithiasis: Uroliths (struvite/calcium oxalate) flushed down from the bladder reliably lodge at the caudal aspect of the os penis where the urethral groove prevents expansion.",
      "ar": "انسداد مجرى البول بالحصوات: الحصوات المنحدرة من المثانة تنحشر بشكل شبه حتمي عند الحافة الخلفية لعظم القضيب لضيق الميزاب العظمي."
    },
    "commonPathologies": [
      {
        "en": "Urethral Obstruction / Urolithiasis: Uroliths (struvite/calcium oxalate) flushed...",
        "ar": "انسداد مجرى البول بالحصوات: الحصوات المنحدرة من المثانة تنحشر بشكل شبه حتمي عند ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.6,
        0.3,
        -0.4
      ],
      "target": [
        0,
        0.18,
        -0.58
      ]
    },
    "color": "#f8fafc",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Canine_MusculusMasseter",
    "meshId": "Mesh_Canine_MusculusMasseter",
    "systemId": "muscular",
    "speciesId": "canine",
    "latinTaxonomyName": "Musculus masseter",
    "name": {
      "en": "Canine Masseter Muscle",
      "ar": "العضلة الماضغة للكلب"
    },
    "description": {
      "en": "Powerfully developed masticatory muscle covering the lateral surface of the ramus of the mandible, delivering immense vertical bite force for carnassial shearing.",
      "ar": "عضلة مضغية قوية التطور تغطي الوجه الوحشي لفك الكلب السفلي، وتوفر قوة عضة رأسية هائلة للقص بالأضراس."
    },
    "bloodSupply": {
      "en": "Masseteric branch of facial artery and transverse facial artery.",
      "ar": "الفرع الماضغي للشريان الوجهي والوجهي المستعرض."
    },
    "innervation": {
      "en": "Masseteric nerve off mandibular division of trigeminal nerve (CN V3).",
      "ar": "العصب الماضغي من الشعبة الفكية السفلية للعصب الخامس CN V3."
    },
    "clinicalPearls": {
      "en": "Masticatory Muscle Myositis (MMM): Autoantibodies against unique 2M muscle fibers cause acute jaw swelling, severe trismus (\"lockjaw\"), and marked bilateral muscle atrophy.",
      "ar": "التهاب عضلات المضغ المناعي MMM: أجسام مضادة لألياف 2M الفريدة تسبب تورماً حاداً للفك واستحالة فتح الفم (Trismus) وضموراً عضلياً ثنائياً."
    },
    "commonPathologies": [
      {
        "en": "Masticatory Muscle Myositis (MMM): Autoantibodies against unique 2M muscle fiber...",
        "ar": "التهاب عضلات المضغ المناعي MMM: أجسام مضادة لألياف 2M الفريدة تسبب تورماً حاداً ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        0.8,
        0.75
      ],
      "target": [
        0.12,
        0.68,
        0.72
      ]
    },
    "color": "#991b1b",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Canine_MusculusIliopsoas",
    "meshId": "Mesh_Canine_MusculusIliopsoas",
    "systemId": "muscular",
    "speciesId": "canine",
    "latinTaxonomyName": "Musculus iliopsoas (M. psoas major et M. iliacus)",
    "name": {
      "en": "Canine Iliopsoas Muscle Complex",
      "ar": "العضلة الحرقفية القطنية للكلب"
    },
    "description": {
      "en": "Sublumbar compound muscle formed by the fusion of the psoas major and iliacus, inserting onto the lesser trochanter of the femur to flex the hip joint.",
      "ar": "عضلة مركبة أسفل الفقرات القطنية تتكون من اتحاد العضلة القطنية الكبرى والحرقفية، وترتكز على المدور الصغير لعظم الفخذ لثني مفصل الورك."
    },
    "bloodSupply": {
      "en": "Lumbar arteries, deep circumflex iliac, and external iliac arteries.",
      "ar": "الشرايين القطنية والحرقفية المنعطفة والظاهرة."
    },
    "innervation": {
      "en": "Femoral nerve (Nervus femoralis) and ventral rami of L3-L5.",
      "ar": "العصب الفخذي (L3-L5)."
    },
    "clinicalPearls": {
      "en": "Iliopsoas Strain: Common cause of insidious hindlimb lameness in performance and agility dogs; pain is elicited on internal rotation and extension of the hip joint.",
      "ar": "إجهاد وتمزق العضلة الحرقفية القطنية: سبب شائع لعرج القوائم الخلفية في كلاب خفة الحركة؛ ويستثار الألم ببسط مفصل الورك وتدويره للداخل."
    },
    "commonPathologies": [
      {
        "en": "Iliopsoas Strain: Common cause of insidious hindlimb lameness in performance and...",
        "ar": "إجهاد وتمزق العضلة الحرقفية القطنية: سبب شائع لعرج القوائم الخلفية في كلاب خفة ا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        0.5,
        -0.2
      ],
      "target": [
        0.08,
        0.42,
        -0.3
      ]
    },
    "color": "#b91c1c",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Canine_MusculusQuadricepsFemoris",
    "meshId": "Mesh_Canine_MusculusQuadricepsFemoris",
    "systemId": "muscular",
    "speciesId": "canine",
    "latinTaxonomyName": "Musculus quadriceps femoris (Rectus femoris, Vasti lateralis, medialis, intermedius)",
    "name": {
      "en": "Canine Quadriceps Femoris Muscle",
      "ar": "العضلة رباعية الرؤوس الفخذية للكلب"
    },
    "description": {
      "en": "Massive cranial thigh muscle comprising four heads uniting into the common patellar tendon, forming the primary extensor of the stifle joint essential for weight-bearing.",
      "ar": "عضلة الفخذ الأمامية الضخمة المكونة من أربعة رؤوس تتحد في وتر الرضفة المشترك، وتمثل الباسطة الرئيسية لمفصل الركبة اللازمة لحمل وزن الجسم."
    },
    "bloodSupply": {
      "en": "Lateral circumflex femoral artery and femoral artery branches.",
      "ar": "الشريان المنعطف الفخذي الوحشي وفروع الشريان الفخذي."
    },
    "innervation": {
      "en": "Femoral nerve (Nervus femoralis L4-L6).",
      "ar": "العصب الفخذي (L4-L6)."
    },
    "clinicalPearls": {
      "en": "Femoral Nerve Paralysis: Inability to extend the stifle and bear weight; loss of the patellar tendon reflex (knee-jerk reflex) is pathognomonic.",
      "ar": "شلل العصب الفخذي: عجز الكلب عن بسط الركبة وحمل وزنه؛ وغياب المنعكس الرضفي (منعكس ضربة الركبة) علامة وصفية قاطعة."
    },
    "commonPathologies": [
      {
        "en": "Femoral Nerve Paralysis: Inability to extend the stifle and bear weight; loss of...",
        "ar": "شلل العصب الفخذي: عجز الكلب عن بسط الركبة وحمل وزنه؛ وغياب المنعكس الرضفي (منعكس..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.5,
        -0.3
      ],
      "target": [
        0.2,
        0.38,
        -0.4
      ]
    },
    "color": "#dc2626",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Canine_MusculusGastrocnemius",
    "meshId": "Mesh_Canine_MusculusGastrocnemius",
    "systemId": "muscular",
    "speciesId": "canine",
    "latinTaxonomyName": "Musculus gastrocnemius et Tendo calcaneus communis",
    "name": {
      "en": "Canine Gastrocnemius & Achilles Tendon Complex",
      "ar": "العضلة التوأمية الساقية ومجمع وتر أخيل للكلب"
    },
    "description": {
      "en": "Two-headed muscular engine on caudal crus (medial and lateral heads with fabellae) uniting into the calcanean tendon inserting on the tuber calcanei.",
      "ar": "عضلة ثنائية الرؤوس خلف الساق (رأسان وحشي وإنسي يحتويان على عظمتي الفابيلا) تتحد في وتر العرقوب المرتكز على كعب القدم."
    },
    "bloodSupply": {
      "en": "Distal caudal femoral artery and popliteal artery.",
      "ar": "الشريان الفخذي الذيلي البعيد والشريان المأبضي."
    },
    "innervation": {
      "en": "Tibial nerve (Nervus tibialis, branch of sciatic nerve).",
      "ar": "العصب القصبي (شعبة من العصب الوركي)."
    },
    "clinicalPearls": {
      "en": "Common Calcaneal Tendon Rupture (Achilles tendon rupture): Causes complete plantigrade stance (\"dropped hock\") with flexion of the digits (curled toes).",
      "ar": "تمزق وتر العرقوب (وتر أخيل): يسبب وقوفاً أخمصياً مسطحاً للقدم على الأرض (سقوط العرقوب) مع انثناء مخالب الأصابع للأعلى."
    },
    "commonPathologies": [
      {
        "en": "Common Calcaneal Tendon Rupture (Achilles tendon rupture): Causes complete plant...",
        "ar": "تمزق وتر العرقوب (وتر أخيل): يسبب وقوفاً أخمصياً مسطحاً للقدم على الأرض (سقوط ال..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.7,
        0.4,
        -0.4
      ],
      "target": [
        0.18,
        0.22,
        -0.52
      ]
    },
    "color": "#991b1b",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Feline_Cor",
    "meshId": "Mesh_Feline_Cor",
    "systemId": "cardiovascular",
    "speciesId": "feline",
    "latinTaxonomyName": "Cor (Felis catus)",
    "name": {
      "en": "Feline Heart",
      "ar": "قلب القطط"
    },
    "description": {
      "en": "Compact feline heart lying horizontally between ribs 4-7, resting directly on the sternum with a lower angle than in dogs.",
      "ar": "قلب قطي مدمج يستلقي بميل أفقي شبه ملتصق بالقص بين الأضلاع 4-7."
    },
    "bloodSupply": {
      "en": "Left and right coronary arteries; myocardial perfusion critical in hypertrophic cardiomyopathy.",
      "ar": "الشرايين التاجية اليمنى واليسرى؛ التروية العضلية حرجة في اعتلال عضلة القلب الضخامي."
    },
    "innervation": {
      "en": "Sympathetic postganglionic branches from cervicothoracic ganglion and vagal parasympathetic depressor fibers.",
      "ar": "فروع ودية بعد عقدية من العقدة العنقية الصدرية وألياف مبهمية نظيرة الودية."
    },
    "clinicalPearls": {
      "en": "Hypertrophic Cardiomyopathy (HCM) is the most common cardiac disease in cats; predisposes to aortic thromboembolism (saddle thrombus).",
      "ar": "اعتلال عضلة القلب الضخامي (HCM) هو الأكثر شيوعاً في القطط ويؤدي للخثار الساد في تفرع الأبهر."
    },
    "commonPathologies": [
      {
        "en": "Hypertrophic Cardiomyopathy (HCM) is the most common cardiac disease in cats; pr...",
        "ar": "اعتلال عضلة القلب الضخامي (HCM) هو الأكثر شيوعاً في القطط ويؤدي للخثار الساد في ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        0.4,
        0.25
      ],
      "target": [
        0,
        0.3,
        0.25
      ]
    },
    "color": "#dc2626",
    "emissiveColor": "#0284c7",
    "proceduralType": "heart"
  },
  {
    "id": "Mesh_Feline_Aorta",
    "meshId": "Mesh_Feline_Aorta",
    "systemId": "cardiovascular",
    "speciesId": "feline",
    "latinTaxonomyName": "Aorta descendens et trifurcatio",
    "name": {
      "en": "Aorta & Saddle Bifurcation",
      "ar": "الأبهر والتفرع الحرقفي الذيلي"
    },
    "description": {
      "en": "The descending aorta tapering through the feline retroperitoneal space into the terminal external and internal iliacs.",
      "ar": "الأبهر النازل يمتد عبر الحيز خلف الصفاق ويتفرع إلى الشرايين الحرقفية الخارجية والداخلية."
    },
    "bloodSupply": {
      "en": "Direct systemic arterial conduit from left ventricle delivering high pressure oxygenated blood.",
      "ar": "القناة الشريانية الجهازية المباشرة من البطين الأيسر التي تنقل الدم عالي الضغط المؤكسج."
    },
    "innervation": {
      "en": "Aortic baroreceptor nerve (cranial nerve X) and sympathetic lumbar splanchnic fibers.",
      "ar": "عصب المستقبلات الضغطية الأبهرية (العصب القحفي العاشر) وألياف قطنية حشوية ودية."
    },
    "clinicalPearls": {
      "en": "Site of saddle thrombus lodging, causing acute hindlimb paralysis, absent femoral pulses, and cold footpads.",
      "ar": "موقع استقرار الخثرة السرجية، مما يسبب شللاً مفاجئاً في القوائم الخلفية، غياب النبض الفخذي، وبرودة الكفوف."
    },
    "commonPathologies": [
      {
        "en": "Site of saddle thrombus lodging, causing acute hindlimb paralysis, absent femora...",
        "ar": "موقع استقرار الخثرة السرجية، مما يسبب شللاً مفاجئاً في القوائم الخلفية، غياب الن..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        0.55,
        0
      ],
      "target": [
        0,
        0.42,
        0
      ]
    },
    "color": "#ef4444",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_VenaCava",
    "meshId": "Mesh_Feline_VenaCava",
    "systemId": "cardiovascular",
    "speciesId": "feline",
    "latinTaxonomyName": "Vena cava caudalis",
    "name": {
      "en": "Caudal Vena Cava",
      "ar": "الوريد الأجوف الذيلي"
    },
    "description": {
      "en": "Large venous return channel receiving renal, hepatic, and pelvic venous blood flowing to the right atrium.",
      "ar": "قناة وريدية رئيسية لعودة الدم تستقبل أوردة الكلى والكبد والحوض متجهة إلى الأذين الأيمن."
    },
    "bloodSupply": {
      "en": "Major systemic venous conduit returning deoxygenated blood to the right heart.",
      "ar": "القناة الوريدية الجهازية الكبرى لنقل الدم غير المؤكسج إلى الجانب الأيمن للقلب."
    },
    "innervation": {
      "en": "Vascular sympathetic perivascular plexus mediating venoconstriction.",
      "ar": "ضفيرة وعائية ودية حول الأوعية تنظم تقلص الأوردة والتوتر الوريدي."
    },
    "clinicalPearls": {
      "en": "Visualized on ultrasound (caudal vena cava collapsibility index) to monitor feline circulating intravascular volume and fluid responsiveness.",
      "ar": "يُفحص بالموجات فوق الصوتية لتقييم مؤشر انخماص الأجوف لمراقبة الحجم داخل الوعائي لدى القطط."
    },
    "commonPathologies": [
      {
        "en": "Visualized on ultrasound (caudal vena cava collapsibility index) to monitor feli...",
        "ar": "يُفحص بالموجات فوق الصوتية لتقييم مؤشر انخماص الأجوف لمراقبة الحجم داخل الوعائي ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        0.45,
        0.05
      ],
      "target": [
        0,
        0.38,
        0.05
      ]
    },
    "color": "#2563eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_PulmonaryTrunk",
    "meshId": "Mesh_Feline_PulmonaryTrunk",
    "systemId": "cardiovascular",
    "speciesId": "feline",
    "latinTaxonomyName": "Truncus pulmonalis",
    "name": {
      "en": "Pulmonary Trunk & Arteries",
      "ar": "الجذع الرئوي والشرايين الرئوية"
    },
    "description": {
      "en": "Originates from right ventricular conus arteriosus, bifurcating into left and right pulmonary arteries beneath aortic arch.",
      "ar": "ينشأ من المخروط الشرياني للبطين الأيمن ويتفرع إلى شريانين رئويين تحت قوس الأبهر."
    },
    "bloodSupply": {
      "en": "Conveys deoxygenated venous blood under low resistance into the pulmonary capillary bed.",
      "ar": "ينقل الدم غير المؤكسج تحت مقاومة منخفضة إلى الشبكة الشعرية الرئوية."
    },
    "innervation": {
      "en": "Pulmonary autonomic plexus from cardiac nerves and sympathetic chain.",
      "ar": "الضفيرة الذاتية الرئوية المتفرعة من الأعصاب القلبية والسلسلة الودية."
    },
    "clinicalPearls": {
      "en": "Feline heartworm disease (Dirofilaria immitis) can cause HARD (Heartworm Associated Respiratory Disease) even with single-worm infestation.",
      "ar": "داء الديدان القلبية في القطط يسبب متلازمة الجهاز التنفسي المرتبطة بالديدان القلبية HARD حتى بيرقة واحدة."
    },
    "commonPathologies": [
      {
        "en": "Feline heartworm disease (Dirofilaria immitis) can cause HARD (Heartworm Associa...",
        "ar": "داء الديدان القلبية في القطط يسبب متلازمة الجهاز التنفسي المرتبطة بالديدان القلب..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.48,
        0.35
      ],
      "target": [
        0,
        0.42,
        0.32
      ]
    },
    "color": "#3b82f6",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Feline_Gaster",
    "meshId": "Mesh_Feline_Gaster",
    "systemId": "digestive",
    "speciesId": "feline",
    "latinTaxonomyName": "Gaster (Felis catus)",
    "name": {
      "en": "Feline Simple Stomach",
      "ar": "المعدة البسيطة في القطط"
    },
    "description": {
      "en": "J-shaped simple glandular stomach located in left cranial abdomen, tailored for obligate carnivore protein and fat digestion.",
      "ar": "معدة غدية بسيطة تأخذ شكل الحرف J تقع في الجزء القحفي الأيسر، مخصصة لحيوان لاحم إجباري."
    },
    "bloodSupply": {
      "en": "Celiac artery via left gastric, right gastric, and gastroepiploic arteries.",
      "ar": "الشريان الزلاقي عبر الشريان المعدي الأيسر والمعدي الأيمن والمعدي الثربي."
    },
    "innervation": {
      "en": "Vagus nerve (dorsal and ventral vagal trunks) and sympathetic celiac plexus.",
      "ar": "العصب المبهم (الجذعان المبهميان الظهري والبطني) والضفيرة الزلاقية الودية."
    },
    "clinicalPearls": {
      "en": "Cats lack salivary amylase and have constant active hepatic gluconeogenesis and low gastric pH for rapid meat digestion.",
      "ar": "تفتقر القطط إلى أميلاز اللعاب وتعتمد على تصنيع الجلوكوز المستمر وحموضة معدية عالية لهضم اللحوم."
    },
    "commonPathologies": [
      {
        "en": "Cats lack salivary amylase and have constant active hepatic gluconeogenesis and ...",
        "ar": "تفتقر القطط إلى أميلاز اللعاب وتعتمد على تصنيع الجلوكوز المستمر وحموضة معدية عال..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.45,
        0.15
      ],
      "target": [
        -0.08,
        0.35,
        0.12
      ]
    },
    "color": "#f87171",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_Hepar",
    "meshId": "Mesh_Feline_Hepar",
    "systemId": "digestive",
    "speciesId": "feline",
    "latinTaxonomyName": "Hepar (Felis catus)",
    "name": {
      "en": "Feline Lobated Liver",
      "ar": "الكبد الفصصي القطي"
    },
    "description": {
      "en": "Deeply fissured into six primary lobes (left lateral/medial, quadrate, right medial/lateral, caudate) hugging the diaphragm.",
      "ar": "مقسم بشقوق عميقة إلى ستة فصوص أساسية ملاصقة لتقعر الحجاب الحاجز."
    },
    "bloodSupply": {
      "en": "Dual supply: Portal vein (75% flow, nutrient rich) and hepatic artery proper (25% flow, oxygenated).",
      "ar": "تروية مزدوجة: وريد الباب (75% من التدفق، غني بالمغذيات) والشريان الكبدي الخاص (25% أكسجين)."
    },
    "innervation": {
      "en": "Hepatic plexus from celiac ganglion and vagal fibers.",
      "ar": "الضفيرة الكبدية من العقدة الزلاقية والألياف المبهمية."
    },
    "clinicalPearls": {
      "en": "Feline Hepatic Lipidosis develops rapidly during anorexia due to high protein demands and mobilization of peripheral lipids to the liver.",
      "ar": "داء الكبد الدهني (Hepatic Lipidosis) يتطور سريعاً عند انقطاع الشهية بسبب تعبئة الدهون المحيطية للكبد."
    },
    "commonPathologies": [
      {
        "en": "Feline Hepatic Lipidosis develops rapidly during anorexia due to high protein de...",
        "ar": "داء الكبد الدهني (Hepatic Lipidosis) يتطور سريعاً عند انقطاع الشهية بسبب تعبئة ا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.9,
        0.48,
        0.2
      ],
      "target": [
        0,
        0.38,
        0.18
      ]
    },
    "color": "#991b1b",
    "emissiveColor": "#0284c7",
    "proceduralType": "liver"
  },
  {
    "id": "Mesh_Feline_Pancreas",
    "meshId": "Mesh_Feline_Pancreas",
    "systemId": "digestive",
    "speciesId": "feline",
    "latinTaxonomyName": "Pancreas (Felis catus)",
    "name": {
      "en": "Pancreas & Major Duodenal Papilla",
      "ar": "البنكرياس والحليمة الاثناعشرية"
    },
    "description": {
      "en": "V-shaped gland with right lobe alongside duodenum and left lobe behind stomach; pancreatic duct joins bile duct in ~80% of cats.",
      "ar": "غدة على شكل V يمتد فصها الأيمن مع الاثناعشر وفصها الأيسر خلف المعدة، وتلتحم قناتها مع القناة الصفراوية في 80% من القطط."
    },
    "bloodSupply": {
      "en": "Pancreaticoduodenal arteries (cranial from celiac, caudal from cranial mesenteric).",
      "ar": "الشرايين البنكرياسية الاثناعشرية (القحفية من الزلاقي والذيلية من المساريقي القحفي)."
    },
    "innervation": {
      "en": "Autonomic nervous plexus from celiac and cranial mesenteric plexuses.",
      "ar": "الضفيرة العصبية الذاتية المتفرعة من الضفيرتين الزلاقية والمساريقية القحفية."
    },
    "clinicalPearls": {
      "en": "The common entry of pancreatic and common bile ducts into the duodenum predisposes felines to \"Triaditis\" (cholangitis, pancreatitis, IBD).",
      "ar": "الاتحاد المشترك لقناة البنكرياس وقناة الصفراء يمهد لمرض الثالوث الالتهابي القطي (Triaditis)."
    },
    "commonPathologies": [
      {
        "en": "The common entry of pancreatic and common bile ducts into the duodenum predispos...",
        "ar": "الاتحاد المشترك لقناة البنكرياس وقناة الصفراء يمهد لمرض الثالوث الالتهابي القطي ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.45,
        0.08
      ],
      "target": [
        0.05,
        0.36,
        0.06
      ]
    },
    "color": "#fbbf24",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_Intestinum",
    "meshId": "Mesh_Feline_Intestinum",
    "systemId": "digestive",
    "speciesId": "feline",
    "latinTaxonomyName": "Intestinum tenue et crassum",
    "name": {
      "en": "Feline Intestinal Tract",
      "ar": "القناة المعوية للقطط"
    },
    "description": {
      "en": "Relatively short intestinal tract (ratio ~4:1 to body length) optimized for animal protein absorption; small cecum and short colon.",
      "ar": "قناة معوية قصيرة نسبياً (بنسبة 4:1 مقارنة بطول الجسم) متكيفة لهضم البروتين؛ أعور صغير وقولون قصير."
    },
    "bloodSupply": {
      "en": "Cranial mesenteric artery (small intestine and ascending colon) and caudal mesenteric artery (descending colon).",
      "ar": "الشريان المساريقي القحفي (الأمعاء الدقيقة والقولون الصاعد) والمساريقي الذيلي (القولون النازل)."
    },
    "innervation": {
      "en": "Enteric nervous system with sympathetic inhibition via mesenteric plexuses and vagal/pelvic parasympathetic excitation.",
      "ar": "الجهاز العصبي المعوي مع تثبيط ودي عبر الضفائر المساريقية وتنبيه نظير ودي مبهمي وحوضي."
    },
    "clinicalPearls": {
      "en": "Common site of linear foreign body obstruction (e.g., string anchored under the tongue or in pylorus) causing plication.",
      "ar": "موقع شائع لانحشار الأجسام الغريبة الخطية (كالخيوط المثبتة تحت اللسان أو في البواب) مسببة تلافيف وتعرج الأمعاء."
    },
    "commonPathologies": [
      {
        "en": "Common site of linear foreign body obstruction (e.g., string anchored under the ...",
        "ar": "موقع شائع لانحشار الأجسام الغريبة الخطية (كالخيوط المثبتة تحت اللسان أو في البوا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.4,
        -0.05
      ],
      "target": [
        0,
        0.32,
        -0.05
      ]
    },
    "color": "#d97706",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_Trachea",
    "meshId": "Mesh_Feline_Trachea",
    "systemId": "respiratory",
    "speciesId": "feline",
    "latinTaxonomyName": "Trachea et larynx (Felis catus)",
    "name": {
      "en": "Feline Trachea & Larynx",
      "ar": "الرغامي والحنجرة في القطط"
    },
    "description": {
      "en": "Flexible airway conduit with 38-43 C-shaped cartilaginous rings, closed dorsally by trachealis muscle situated externally.",
      "ar": "قصبة هوائية مرنة مكونة من 38-43 حلقة غضروفية غير مكتملة تغلقها العضلة الرغامية ظهرياً."
    },
    "bloodSupply": {
      "en": "Cranial and caudal thyroid arteries, bronchoesophageal artery.",
      "ar": "الشرايين الدرقية القحفية والذيلية والشريان القصبي المريئي."
    },
    "innervation": {
      "en": "Recurrent laryngeal nerve and cranial laryngeal nerve (branches of CN X).",
      "ar": "العصب الحنجري الراجع والعصب الحنجري القحفي (فروع العصب المبهم العاشر)."
    },
    "clinicalPearls": {
      "en": "Feline larynx is highly prone to laryngospasm during endotracheal intubation; topical lidocaine spray on vocal cords is mandatory.",
      "ar": "حنجرة القطط شديدة الحساسية للتشنج الحنجري أثناء التنبيب الرغامي؛ رش الليدوكائين الموضعي إلزامي لمنع الانسداد."
    },
    "commonPathologies": [
      {
        "en": "Feline larynx is highly prone to laryngospasm during endotracheal intubation; to...",
        "ar": "حنجرة القطط شديدة الحساسية للتشنج الحنجري أثناء التنبيب الرغامي؛ رش الليدوكائين ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.55,
        0.45
      ],
      "target": [
        0,
        0.48,
        0.42
      ]
    },
    "color": "#bae6fd",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_Pulmo_Sinister",
    "meshId": "Mesh_Feline_Pulmo_Sinister",
    "systemId": "respiratory",
    "speciesId": "feline",
    "latinTaxonomyName": "Pulmo sinister (Felis catus)",
    "name": {
      "en": "Left Lung",
      "ar": "الرئة اليسرى"
    },
    "description": {
      "en": "Divided into two distinct lobes: cranial lobe (subdivided into cranial and caudal parts) and caudal lobe.",
      "ar": "تنقسم إلى فصين رئيسيين: فص قحفي (مقسم لجزء قحفي وجزء ذيلي) وفص ذيلي كبير."
    },
    "bloodSupply": {
      "en": "Pulmonary artery (functional deoxygenated flow) and bronchoesophageal artery (nutritional oxygenated supply).",
      "ar": "الشريان الرئوي (تروية وظيفية) والشريان القصبي المريئي (تروية نسيجية مغذية)."
    },
    "innervation": {
      "en": "Pulmonary plexus (vagal bronchoconstriction and sympathetic bronchodilation).",
      "ar": "الضفيرة الرئوية (العصب المبهم يسبب تقبض القصبات والودي يسبب توسعها)."
    },
    "clinicalPearls": {
      "en": "Feline asthma (allergic bronchitis) involves marked smooth muscle hypertrophy around lower airways causing expiratory dyspnea.",
      "ar": "الربو القطي يتميز بفرط تضخم العضلات الملساء حول القصبات مما يسبب ضيق تنفس زفيري مميز ونوبات سعال."
    },
    "commonPathologies": [
      {
        "en": "Feline asthma (allergic bronchitis) involves marked smooth muscle hypertrophy ar...",
        "ar": "الربو القطي يتميز بفرط تضخم العضلات الملساء حول القصبات مما يسبب ضيق تنفس زفيري ..."
      }
    ],
    "cameraFocus": {
      "position": [
        -0.65,
        0.45,
        0.28
      ],
      "target": [
        -0.1,
        0.4,
        0.28
      ]
    },
    "color": "#fda4af",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Feline_Pulmo_Dexter",
    "meshId": "Mesh_Feline_Pulmo_Dexter",
    "systemId": "respiratory",
    "speciesId": "feline",
    "latinTaxonomyName": "Pulmo dexter (Felis catus)",
    "name": {
      "en": "Right Lung (4 Lobes)",
      "ar": "الرئة اليمنى (4 فصوص)"
    },
    "description": {
      "en": "Comprises four anatomical lobes: cranial, middle, caudal, and the accessory lobe which wraps around the caudal vena cava.",
      "ar": "تتكون من أربعة فصوص تشريحية: قحفي، متوسط، ذيلي، والفص الإضافي الذي يلتف حول الوريد الأجوف الذيلي."
    },
    "bloodSupply": {
      "en": "Right branches of pulmonary artery and bronchoesophageal system.",
      "ar": "الفروع اليمنى للشريان الرئوي والجهاز القصبي المريئي."
    },
    "innervation": {
      "en": "Vagal and sympathetic pulmonary innervation.",
      "ar": "التعصيب الرئوي الودي والمبهمي."
    },
    "clinicalPearls": {
      "en": "Right middle lung lobe is the most prone to lung lobe torsion and aspiration consolidation in small animals.",
      "ar": "الفص الرئوي الأوسط الأيمن هو الأكثر عرضة للانفتال الرئوي والتصلب الناجم عن الاستنشاق."
    },
    "commonPathologies": [
      {
        "en": "Right middle lung lobe is the most prone to lung lobe torsion and aspiration con...",
        "ar": "الفص الرئوي الأوسط الأيمن هو الأكثر عرضة للانفتال الرئوي والتصلب الناجم عن الاست..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.45,
        0.28
      ],
      "target": [
        0.1,
        0.4,
        0.28
      ]
    },
    "color": "#f43f5e",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Feline_Diaphragma",
    "meshId": "Mesh_Feline_Diaphragma",
    "systemId": "respiratory",
    "speciesId": "feline",
    "latinTaxonomyName": "Diaphragma (Felis catus)",
    "name": {
      "en": "Feline Diaphragm",
      "ar": "الحجاب الحاجز القطي"
    },
    "description": {
      "en": "Dome-shaped musculotendinous septum separating thoracic and peritoneal cavities, convex toward thorax.",
      "ar": "حاجز عضلي وتري مقبب يفصل التجويف الصدري عن البريتوني ويكون محدباً باتجاه الصدر."
    },
    "bloodSupply": {
      "en": "Musculophrenic and cranial phrenic arteries, phrenic veins.",
      "ar": "الشرايين العضلية الحجابية والشرايين الحجابية القحفية والأوردة الحجابية."
    },
    "innervation": {
      "en": "Phrenic nerves (paired bilateral cervical spinal nerves C5-C7).",
      "ar": "الأعصاب الحجابية (الأعصاب الشوكية العنقية 5-7 الثنائية)."
    },
    "clinicalPearls": {
      "en": "Traumatic diaphragmatic rupture is very common after motor vehicular accidents; stomach or liver herniation impairs thoracic expansion.",
      "ar": "فتق الحجاب الحاجز الرضي شائع جداً إثر حوادث السيارات؛ يسبب فتق المعدة أو الكبد داخل الصدر ضائقة تنفسية حادة."
    },
    "commonPathologies": [
      {
        "en": "Traumatic diaphragmatic rupture is very common after motor vehicular accidents; ...",
        "ar": "فتق الحجاب الحاجز الرضي شائع جداً إثر حوادث السيارات؛ يسبب فتق المعدة أو الكبد د..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.8,
        0.45,
        0.1
      ],
      "target": [
        0,
        0.38,
        0.1
      ]
    },
    "color": "#e11d48",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_Encephalon",
    "meshId": "Mesh_Feline_Encephalon",
    "systemId": "nervous",
    "speciesId": "feline",
    "latinTaxonomyName": "Encephalon (Felis catus)",
    "name": {
      "en": "Feline Cerebrum & Brainstem",
      "ar": "المخ وجذع الدماغ القطي"
    },
    "description": {
      "en": "Highly gyrencephalic brain with complex cerebral sulci and large visual/vestibular processing centers.",
      "ar": "دماغ تلافي في غاية التطور بجيوب وأخاديد معقدة ومراكز بصرية ودهليزية كبيرة."
    },
    "bloodSupply": {
      "en": "Rete mirabile caroticum (extraordinary network derived from maxillary artery supplying the circle of Willis).",
      "ar": "الشبكة العجيبة السباتية (Rete Mirabile مشتقة من الشريان الفكي وتغذي دائرة ويليس)."
    },
    "innervation": {
      "en": "12 cranial nerves emerging from encephalon and brainstem.",
      "ar": "12 زوجاً من الأعصاب القحفية تنشأ من الدماغ وجذعه."
    },
    "clinicalPearls": {
      "en": "Unlike dogs, cats rely primarily on the maxillary artery and rete mirabile to supply intracranial blood; prolonged mouth gagging during dental work can cause blindness or brain ischemia.",
      "ar": "تعتمد القطط على الشريان الفكي والشبكة العجيبة؛ فتح الفم المفرط بفتّاحات الأسنان يضغط الفكي ويسبب عمى وسكتة دماغية."
    },
    "commonPathologies": [
      {
        "en": "Unlike dogs, cats rely primarily on the maxillary artery and rete mirabile to su...",
        "ar": "تعتمد القطط على الشريان الفكي والشبكة العجيبة؛ فتح الفم المفرط بفتّاحات الأسنان ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.55,
        0.65,
        0.6
      ],
      "target": [
        0,
        0.58,
        0.55
      ]
    },
    "color": "#fbcfe8",
    "emissiveColor": "#0284c7",
    "proceduralType": "brain"
  },
  {
    "id": "Mesh_Feline_Cerebellum",
    "meshId": "Mesh_Feline_Cerebellum",
    "systemId": "nervous",
    "speciesId": "feline",
    "latinTaxonomyName": "Cerebellum (Felis catus)",
    "name": {
      "en": "Feline Cerebellum",
      "ar": "المخيخ القطي"
    },
    "description": {
      "en": "Folded dorsal hindbrain structure consisting of central vermis and lateral hemispheres, crucial for feline balance and agility.",
      "ar": "بنية مخية خلفية مطوية تتكون من الدودة المركزية ونصفا كرة مخيخيان، مسؤولة عن التوازن والرشاقة الفائقة."
    },
    "bloodSupply": {
      "en": "Rostral and caudal cerebellar arteries.",
      "ar": "الشرايين المخيخية المنقارية والذيلية."
    },
    "innervation": {
      "en": "Cerebellar peduncles connecting with vestibular nuclei, pons, and midbrain.",
      "ar": "السويقات المخيخية المتصلة بالنوى الدهليزية والجسر والدماغ المتوسط."
    },
    "clinicalPearls": {
      "en": "In utero or perinatal Feline Panleukopenia Virus infection causes cerebellar hypoplasia, presenting with lifelong non-progressive intention tremors.",
      "ar": "إصابة الجنين بفيروس طاعون القطط Panleukopenia تسبب نقص تنسج المخيخ ورعاشاً قصدياً مستديماً غير مترقٍ."
    },
    "commonPathologies": [
      {
        "en": "In utero or perinatal Feline Panleukopenia Virus infection causes cerebellar hyp...",
        "ar": "إصابة الجنين بفيروس طاعون القطط Panleukopenia تسبب نقص تنسج المخيخ ورعاشاً قصديا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.55,
        0.65,
        0.48
      ],
      "target": [
        0,
        0.59,
        0.46
      ]
    },
    "color": "#f472b6",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_MedullaSpinalis",
    "meshId": "Mesh_Feline_MedullaSpinalis",
    "systemId": "nervous",
    "speciesId": "feline",
    "latinTaxonomyName": "Medulla spinalis (Felis catus)",
    "name": {
      "en": "Feline Spinal Cord & Cauda Equina",
      "ar": "النخاع الشوكي وذيل الفرس"
    },
    "description": {
      "en": "Elongated neural cylinder ending near the sacrum; the feline conus medullaris terminates farther caudally than in dogs (L7-S1).",
      "ar": "أسطوانة عصبية ممتدة تنتهي بالقرب من العجز؛ ينتهي المخروط النخاعي في القطط أكثر ذيلياً عند L7-S1."
    },
    "bloodSupply": {
      "en": "Ventral spinal artery, dorsal spinal arteries, and segmental spinal branches.",
      "ar": "الشريان الشوكي البطني والشرايين الشوكية الظهرية والفروع الشوكية القطعية."
    },
    "innervation": {
      "en": "Afferent sensory dorsal roots and efferent motor ventral roots.",
      "ar": "الجذور الظهرية الحسية الواردة والجذور البطنية الحركية الصادرة."
    },
    "clinicalPearls": {
      "en": "Sacrococcygeal separation (\"tail-pull injury\") damages pelvic and pudendal nerves leading to urinary/fecal incontinence and flaccid tail.",
      "ar": "إصابة شد الذيل (Tail-pull injury) تسبب تمزق أعصاب الحوض والحياء مما يؤدي إلى سلس بولي وتبرزي وذيل رخو."
    },
    "commonPathologies": [
      {
        "en": "Sacrococcygeal separation (\"tail-pull injury\") damages pelvic and pudendal nerve...",
        "ar": "إصابة شد الذيل (Tail-pull injury) تسبب تمزق أعصاب الحوض والحياء مما يؤدي إلى سلس..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.65,
        0.05
      ],
      "target": [
        0,
        0.52,
        0
      ]
    },
    "color": "#fef08a",
    "emissiveColor": "#0284c7",
    "proceduralType": "spine"
  },
  {
    "id": "Mesh_Feline_NervusIschiadicus",
    "meshId": "Mesh_Feline_NervusIschiadicus",
    "systemId": "nervous",
    "speciesId": "feline",
    "latinTaxonomyName": "Nervus ischiadicus",
    "name": {
      "en": "Sciatic Nerve (Nervus Ischiadicus)",
      "ar": "العصب الوركي في القطط"
    },
    "description": {
      "en": "Major nerve of hindlimb originating from L6-S2 spinal roots, traveling deep to gluteal muscles and caudal to the femur.",
      "ar": "العصب الرئيسي للطرف الخلفي ينشأ من الجذور الشوكية L6-S2 ويمر عميقاً تحت عضلات الإلية خلف عظم الفخذ."
    },
    "bloodSupply": {
      "en": "Arteria comitans nervi ischiadici.",
      "ar": "الشريان المرافق للعصب الوركي."
    },
    "innervation": {
      "en": "Sensory to distal hindlimb/paw and motor to hamstrings, gastrocnemius, and paw muscles.",
      "ar": "حسي للطرف الخلفي والكف وحركي لعضلات المأبض والعضلة التوأمية الساقية."
    },
    "clinicalPearls": {
      "en": "Iatrogenic damage can occur from caudal thigh intramuscular injections; injection should be made into cranial or epaxial muscles instead.",
      "ar": "قد يتضرر علاجياً إثر الحقن العضلي في الفخذ الخلفي؛ يجب الحقن في العضلات المحورية فوق الظهرية تجنباً لقطعه."
    },
    "commonPathologies": [
      {
        "en": "Iatrogenic damage can occur from caudal thigh intramuscular injections; injectio...",
        "ar": "قد يتضرر علاجياً إثر الحقن العضلي في الفخذ الخلفي؛ يجب الحقن في العضلات المحورية..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.35,
        -0.25
      ],
      "target": [
        0.12,
        0.28,
        -0.22
      ]
    },
    "color": "#facc15",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_Ren",
    "meshId": "Mesh_Feline_Ren",
    "systemId": "urogenital",
    "speciesId": "feline",
    "latinTaxonomyName": "Ren (Felis catus)",
    "name": {
      "en": "Feline Kidney with Capsular Veins",
      "ar": "كلية القط ذات الأوردة المحفظية"
    },
    "description": {
      "en": "Bean-shaped unipyramidal kidneys with prominent superficial subcapsular veins (venae capsulares) converging at renal hilus.",
      "ar": "كلية أحادية الهرم تشبه حبة الفاصولياء تتميز بأوردة تحت محفظية بارزة تجتمع عند سرة الكلية."
    },
    "bloodSupply": {
      "en": "Renal artery (single on each side) and renal vein draining into caudal vena cava.",
      "ar": "الشريان الكلوي (مفرد لكل جانب) والوريد الكلوي الذي يصب في الوريد الأجوف الذيلي."
    },
    "innervation": {
      "en": "Renal plexus from celiacomesenteric ganglion and sympathetic splanchnic fibers.",
      "ar": "الضفيرة الكلوية من العقدة الزلاقية المساريقية والألياف الحشوية الودية."
    },
    "clinicalPearls": {
      "en": "Capsular veins are anatomically unique to felines; both kidneys are palpable in normal healthy cats, right kidney slightly cranial to left.",
      "ar": "الأوردة المحفظية السطحية فريدة تشريحياً بالقطط؛ يمكن جَس الكليتين باليد في القطط السليمة بسهولة."
    },
    "commonPathologies": [
      {
        "en": "Capsular veins are anatomically unique to felines; both kidneys are palpable in ...",
        "ar": "الأوردة المحفظية السطحية فريدة تشريحياً بالقطط؛ يمكن جَس الكليتين باليد في القطط..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.45,
        0.05
      ],
      "target": [
        -0.08,
        0.42,
        0.02
      ]
    },
    "color": "#7f1d1d",
    "emissiveColor": "#0284c7",
    "proceduralType": "kidney"
  },
  {
    "id": "Mesh_Feline_VesicaUrinaria",
    "meshId": "Mesh_Feline_VesicaUrinaria",
    "systemId": "urogenital",
    "speciesId": "feline",
    "latinTaxonomyName": "Vesica urinaria et urethra (Felis catus)",
    "name": {
      "en": "Urinary Bladder & Urethra",
      "ar": "المثانة البولية ومجرى البول"
    },
    "description": {
      "en": "Distensible piriform vesicle in pelvic inlet; male feline urethra tapers into a very narrow penile urethra.",
      "ar": "كيس كمثري قابل للامتلاء عند مدخل الحوض؛ يتميز إحليل ذكر القط بتضيق شديد في الجزء القضيبي."
    },
    "bloodSupply": {
      "en": "Cranial vesical artery (from umbilical) and caudal vesical artery (from internal pudendal).",
      "ar": "الشريان المثاني القحفي (من السري) والشريان المثاني الذيلِي (من الحياء الداخلي)."
    },
    "innervation": {
      "en": "Hypogastric nerve (sympathetic storage), pelvic nerve (parasympathetic voiding), and pudendal nerve (somatic sphincter).",
      "ar": "العصب الخثلي (تخزين ودي)، العصب الحوضي (إفراغ نظير ودي)، وعصب الحياء (عاصرة جسدية)."
    },
    "clinicalPearls": {
      "en": "Feline Lower Urinary Tract Disease (FLUTD) causes urethral obstruction in tomcats by struvite matrix plugs, leading to hyperkalemia and emergency.",
      "ar": "متلازمة FLUTD تسبب انسداد مجرى البول في ذكور القطط بسدادات ستروفيتية مما يسبب فرط بوتاسيوم الدم المميت."
    },
    "commonPathologies": [
      {
        "en": "Feline Lower Urinary Tract Disease (FLUTD) causes urethral obstruction in tomcat...",
        "ar": "متلازمة FLUTD تسبب انسداد مجرى البول في ذكور القطط بسدادات ستروفيتية مما يسبب فر..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.38,
        -0.15
      ],
      "target": [
        0,
        0.32,
        -0.12
      ]
    },
    "color": "#f59e0b",
    "emissiveColor": "#0284c7",
    "proceduralType": "bladder"
  },
  {
    "id": "Mesh_Feline_Uterus",
    "meshId": "Mesh_Feline_Uterus",
    "systemId": "urogenital",
    "speciesId": "feline",
    "latinTaxonomyName": "Uterus bicornis et ovaria (Felis catus)",
    "name": {
      "en": "Bicornuate Uterus & Ovaries",
      "ar": "الرحم ذو القرنين والمبيضان"
    },
    "description": {
      "en": "Bicornuate reproductive tract with slender uterine horns and small oval ovaries suspended by the ovarian suspensory ligament.",
      "ar": "جهاز تناسلي أنثوي ذو قرنين نحيفين ومبيضين بيضاويين معلقين بالرباط المعلق للمبيض."
    },
    "bloodSupply": {
      "en": "Ovarian artery (from abdominal aorta) and uterine artery (from internal iliac/pudendal branches).",
      "ar": "الشريان المبيضي (من الأبهر البطني) والشريان الرحمي (من فروع الحياء الداخلي)."
    },
    "innervation": {
      "en": "Uterovaginal plexus and hypogastric nerves.",
      "ar": "الضفيرة الرحمية المهبلية والأعصاب الخثلية."
    },
    "clinicalPearls": {
      "en": "Queens are seasonally polyestrous and induced (reflex) ovulators; coitus triggers LH surge required for ovulation.",
      "ar": "إناث القطط متعددة دورات الشياق موسمياً وذوات إباضة محفزة (Induced ovulators) حيث يستلزم الجماع لإطلاق هرمون LH."
    },
    "commonPathologies": [
      {
        "en": "Queens are seasonally polyestrous and induced (reflex) ovulators; coitus trigger...",
        "ar": "إناث القطط متعددة دورات الشياق موسمياً وذوات إباضة محفزة (Induced ovulators) حيث..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.42,
        -0.08
      ],
      "target": [
        0,
        0.35,
        -0.08
      ]
    },
    "color": "#ec4899",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_Penis",
    "meshId": "Mesh_Feline_Penis",
    "systemId": "urogenital",
    "speciesId": "feline",
    "latinTaxonomyName": "Penis (Felis catus)",
    "name": {
      "en": "Feline Spined Penis",
      "ar": "قضيب القط ذو الأشواك المتقرنة"
    },
    "description": {
      "en": "Caudally-directed penis equipped with 120-150 androgen-dependent cornified papillae (spines) along the glans.",
      "ar": "قضيب موجه ذيلياً مزود بنحو 120-150 شوكة متقرنة تعتمد على الأندروجين على طول الحشفة."
    },
    "bloodSupply": {
      "en": "Internal pudendal artery continuing as dorsal artery of penis and deep artery of penis.",
      "ar": "الشريان الحياء الداخلي ممتداً كالشريان الظهري للقضيب والشريان العميق للقضيب."
    },
    "innervation": {
      "en": "Pudendal nerve (giving rise to dorsal nerve of penis) and pelvic autonomic plexus.",
      "ar": "عصب الحياء (الذي يعطي العصب الظهري للقضيب) والضفيرة الحوضية الذاتية."
    },
    "clinicalPearls": {
      "en": "Penile spines atrophy within 6-8 weeks after castration; their presence on physical exam confirms intact status or cryptorchidism.",
      "ar": "تضمر أشواك القضيب خلال 6-8 أسابيع بعد الإخصاء؛ وجودها في الفحص يؤكد وجود خصية هاجرة نشطة هرمونياً."
    },
    "commonPathologies": [
      {
        "en": "Penile spines atrophy within 6-8 weeks after castration; their presence on physi...",
        "ar": "تضمر أشواك القضيب خلال 6-8 أسابيع بعد الإخصاء؛ وجودها في الفحص يؤكد وجود خصية ها..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.55,
        0.32,
        -0.22
      ],
      "target": [
        0,
        0.28,
        -0.2
      ]
    },
    "color": "#f43f5e",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_Cranium",
    "meshId": "Mesh_Feline_Cranium",
    "systemId": "skeletal",
    "speciesId": "feline",
    "latinTaxonomyName": "Cranium (Felis catus)",
    "name": {
      "en": "Feline Skull with Large Orbits",
      "ar": "جمجمة القط ذات الأحداق الكبيرة"
    },
    "description": {
      "en": "Short, rounded skull with huge forward-facing orbits, prominent zygomatic arches, and specialized carnassial teeth.",
      "ar": "جمجمة قصيرة ومستديرة بمحاجر عينية ضخمة متجهة للأمام، وأقواس وجنية بارزة، وأضراس قاطعة للحوم."
    },
    "bloodSupply": {
      "en": "Maxillary, external ophthalmic, and facial arteries.",
      "ar": "الشرايين الفكية والعينية الخارجية والوجهية."
    },
    "innervation": {
      "en": "Trigeminal nerve (CN V: ophthalmic, maxillary, mandibular branches).",
      "ar": "العصب ثلاثي التوائم (القحفي الخامس: الفروع العيني، الفكي، والفك السفلي)."
    },
    "clinicalPearls": {
      "en": "Felines have a cartilaginous/ligamentous orbital ligament rather than a complete bony orbit, allowing wide jaw opening for predation.",
      "ar": "يمتلك القط رباطاً حجاجياً ليفياً بدلاً من حجاج عظمي مغلق، مما يمنحه اتساعاً لحركة الفك أثناء الصيد."
    },
    "commonPathologies": [
      {
        "en": "Felines have a cartilaginous/ligamentous orbital ligament rather than a complete...",
        "ar": "يمتلك القط رباطاً حجاجياً ليفياً بدلاً من حجاج عظمي مغلق، مما يمنحه اتساعاً لحرك..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.65,
        0.65
      ],
      "target": [
        0,
        0.55,
        0.58
      ]
    },
    "color": "#f3f4f6",
    "emissiveColor": "#0284c7",
    "proceduralType": "skull"
  },
  {
    "id": "Mesh_Feline_Clavicula",
    "meshId": "Mesh_Feline_Clavicula",
    "systemId": "skeletal",
    "speciesId": "feline",
    "latinTaxonomyName": "Clavicula (Felis catus)",
    "name": {
      "en": "Feline Clavicle (Vestigial)",
      "ar": "ترقوة القط (الضامرة السائبة)"
    },
    "description": {
      "en": "Small, curved rudimentary bone embedded freely in the brachiocephalicus muscle without articulating with skeleton.",
      "ar": "عظم ضامر صغير مقوس يستقر حراً داخل عضلة العضد الرأسية دون أي مفصل عظمي مع الهيكل."
    },
    "bloodSupply": {
      "en": "Branches of superficial cervical artery.",
      "ar": "فروع الشريان العنقي السطحي."
    },
    "innervation": {
      "en": "Cervical spinal nerve cutaneous branches.",
      "ar": "الفروع الجلدية للأعصاب الشوكية العنقية."
    },
    "clinicalPearls": {
      "en": "Readily seen as a floating thin bone cranial to shoulder on lateral radiographs; must not be mistaken for a foreign body or fracture fragment.",
      "ar": "تظهر كعظم رفيع طافٍ أمام الكتف في الأشعة السينية ويجب عدم الخلط بينها وبين جسم غريب أو شظية كسر."
    },
    "commonPathologies": [
      {
        "en": "Readily seen as a floating thin bone cranial to shoulder on lateral radiographs;...",
        "ar": "تظهر كعظم رفيع طافٍ أمام الكتف في الأشعة السينية ويجب عدم الخلط بينها وبين جسم غ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.55,
        0.52,
        0.38
      ],
      "target": [
        0.1,
        0.45,
        0.35
      ]
    },
    "color": "#e5e7eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_ColumnaVertebralis",
    "meshId": "Mesh_Feline_ColumnaVertebralis",
    "systemId": "skeletal",
    "speciesId": "feline",
    "latinTaxonomyName": "Columna vertebralis (Felis catus)",
    "name": {
      "en": "Vertebral Column & Tail",
      "ar": "العمود الفقري والذيل المرن"
    },
    "description": {
      "en": "Extremely flexible spinal column: C7, T13, L7, S3, Cd20-24, enabling supreme agility and the aerial righting reflex.",
      "ar": "عمود فقري شديد المرونة: 7 عنقية، 13 صدرية، 7 قطنية، 3 عجزية، و20-24 عصعصية تدعم رد الفعل الانعكاسي للتعديل أثناء السقوط."
    },
    "bloodSupply": {
      "en": "Intercostal, lumbar, and median caudal (coccygeal) arteries.",
      "ar": "الشرايين الوربية والقطنية والشريان الذيلي (العصعصي) المتوسط."
    },
    "innervation": {
      "en": "Spinal dorsal branches and caudal nerves.",
      "ar": "الفروع الظهرية للأعصاب الشوكية والأعصاب الذيلية."
    },
    "clinicalPearls": {
      "en": "Large flexible intervertebral discs allow cats to rotate their spine up to 180 degrees during falls to land on their paws (\"righting reflex\").",
      "ar": "الأقراص بين الفقرية المرنة تمكن القط من لف عموده الفقري 180 درجة في الهواء للهبوط على قوائمه الأربع."
    },
    "commonPathologies": [
      {
        "en": "Large flexible intervertebral discs allow cats to rotate their spine up to 180 d...",
        "ar": "الأقراص بين الفقرية المرنة تمكن القط من لف عموده الفقري 180 درجة في الهواء للهبو..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.85,
        0.65,
        0
      ],
      "target": [
        0,
        0.52,
        0
      ]
    },
    "color": "#f5f5f4",
    "emissiveColor": "#0284c7",
    "proceduralType": "spine"
  },
  {
    "id": "Mesh_Feline_PhalanxDistalis",
    "meshId": "Mesh_Feline_PhalanxDistalis",
    "systemId": "skeletal",
    "speciesId": "feline",
    "latinTaxonomyName": "Phalanx distalis et falcula",
    "name": {
      "en": "Retractile Distal Phalanges & Claws",
      "ar": "السلاميات القاصية والمخالب القابلة للسحب"
    },
    "description": {
      "en": "Ungual process supporting sharp keratinous claws, maintained in retracted position by dorsal elastic ligaments.",
      "ar": "الناتئ الظفري الحامل للمخالب الكيراتينية الحادة، المثبتة في وضع السحب بواسطة الأربطة المرنة الظهرية."
    },
    "bloodSupply": {
      "en": "Common digital arteries and dorsal/palmar digital branches.",
      "ar": "الشرايين الإصبعية المشتركة والفروع الإصبعية الظهرية والراحية."
    },
    "innervation": {
      "en": "Palmar/plantar digital nerves derived from median, ulnar, and tibial nerves.",
      "ar": "الأعصاب الإصبعية الراحية والأخمصية المشتقة من الأعصاب المتوسط والزندي والظنبوبي."
    },
    "clinicalPearls": {
      "en": "Declawing (onychectomy) requires amputating the entire distal phalanx (P3); retaining the ungual crest causes claw regrowth and abscessation.",
      "ar": "استئصال المخالب (Onychectomy) يتطلب بتر كامل السلامية الثالثة P3؛ ترك العرف الظفري يسبب نمو المخلب مجدداً وتشكل خراجات."
    },
    "commonPathologies": [
      {
        "en": "Declawing (onychectomy) requires amputating the entire distal phalanx (P3); reta...",
        "ar": "استئصال المخالب (Onychectomy) يتطلب بتر كامل السلامية الثالثة P3؛ ترك العرف الظف..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.45,
        0.15,
        0.35
      ],
      "target": [
        0.15,
        0.05,
        0.32
      ]
    },
    "color": "#fef3c7",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Feline_Brachiocephalicus",
    "meshId": "Mesh_Feline_Brachiocephalicus",
    "systemId": "muscular",
    "speciesId": "feline",
    "latinTaxonomyName": "Musculus brachiocephalicus (Felis catus)",
    "name": {
      "en": "Brachiocephalicus Muscle",
      "ar": "العضلة العضدية الرأسية"
    },
    "description": {
      "en": "Prominent superficial strap muscle extending from head/neck to humerus, divided into cleidobrachialis and cleidocephalicus.",
      "ar": "عضلة شريطية سطحية بارزة تمتد من الرأس والعنق إلى العضد، مقسومة بالترقوة الأثرية إلى جزأين."
    },
    "bloodSupply": {
      "en": "Superficial cervical artery and collateral branches.",
      "ar": "الشريان العنقي السطحي وفروعه الجانبية."
    },
    "innervation": {
      "en": "Accessory nerve (CN XI) and cervical spinal nerves.",
      "ar": "العصب القحفي الإضافي الحادي عشر والأعصاب الشوكية العنقية."
    },
    "clinicalPearls": {
      "en": "Advances the feline forelimb and pulls head down or sideways; contains the embedded floating clavicle.",
      "ar": "تسحب الطرف الأمامي للقط للأمام وتثني الرأس جانبياً، وتضم في طياتها الترقوة العائمة."
    },
    "commonPathologies": [
      {
        "en": "Advances the feline forelimb and pulls head down or sideways; contains the embed...",
        "ar": "تسحب الطرف الأمامي للقط للأمام وتثني الرأس جانبياً، وتضم في طياتها الترقوة العائ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.55,
        0.45
      ],
      "target": [
        0.08,
        0.48,
        0.4
      ]
    },
    "color": "#be123c",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Feline_LatissimusDorsi",
    "meshId": "Mesh_Feline_LatissimusDorsi",
    "systemId": "muscular",
    "speciesId": "feline",
    "latinTaxonomyName": "Musculus latissimus dorsi",
    "name": {
      "en": "Latissimus Dorsi",
      "ar": "العضلة العريضة الظهرية"
    },
    "description": {
      "en": "Broad triangular muscle sheet spanning from thoracolumbar fascia to medial teres major tuberosity of humerus.",
      "ar": "صفيحة عضلية مثلثة عريضة تمتد من اللفافة الصدرية القطنية إلى حديبة العضد الإنسية."
    },
    "bloodSupply": {
      "en": "Thoracodorsal artery (branch of subscapular artery).",
      "ar": "الشريان الصدري الظهري (فرع من الشريان تحت الكتف)."
    },
    "innervation": {
      "en": "Thoracodorsal nerve (from brachial plexus, C7-C8).",
      "ar": "العصب الصدري الظهري (من الضفيرة العضدية، C7-C8)."
    },
    "clinicalPearls": {
      "en": "Powerful limb retractor driving explosive sprinting; surgical flap used for reconstructive thoracic wall surgery.",
      "ar": "عضلة قوية لسحب القائمة للخلف في الركض الانفجاري؛ تستخدم كسديلة عضلية لترميم جدار الصدر جراحياً."
    },
    "commonPathologies": [
      {
        "en": "Powerful limb retractor driving explosive sprinting; surgical flap used for reco...",
        "ar": "عضلة قوية لسحب القائمة للخلف في الركض الانفجاري؛ تستخدم كسديلة عضلية لترميم جدار..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.55,
        0.15
      ],
      "target": [
        0.05,
        0.45,
        0.15
      ]
    },
    "color": "#9f1239",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Feline_GluteusMedius",
    "meshId": "Mesh_Feline_GluteusMedius",
    "systemId": "muscular",
    "speciesId": "feline",
    "latinTaxonomyName": "Musculus gluteus medius",
    "name": {
      "en": "Middle Gluteal Muscle",
      "ar": "العضلة الإليوية المتوسطة"
    },
    "description": {
      "en": "Massive hip extensor muscle occupying the gluteal surface of the feline ilium and inserting on greater trochanter.",
      "ar": "عضلة ضخمة باسطة للورك تشغل سطح الإلية في عظم الحرقفة وتنغرز في المدور الكبير لعظم الفخذ."
    },
    "bloodSupply": {
      "en": "Cranial gluteal artery (from internal iliac).",
      "ar": "الشريان الإليوي القحفي (من الحرقفي الداخلي)."
    },
    "innervation": {
      "en": "Cranial gluteal nerve (sacral plexus, L6-S1).",
      "ar": "العصب الإليوي القحفي (من الضفيرة العجزية L6-S1)."
    },
    "clinicalPearls": {
      "en": "Generates the massive propulsive thrust needed for feline vertical jumping up to six times body length.",
      "ar": "تولد قوة الدفع الهائلة اللازمة للقفز العمودي في القطط لما يصل إلى ستة أضعاف طول جسدها."
    },
    "commonPathologies": [
      {
        "en": "Generates the massive propulsive thrust needed for feline vertical jumping up to...",
        "ar": "تولد قوة الدفع الهائلة اللازمة للقفز العمودي في القطط لما يصل إلى ستة أضعاف طول ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.48,
        -0.18
      ],
      "target": [
        0.1,
        0.42,
        -0.15
      ]
    },
    "color": "#881337",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Feline_Gastrocnemius",
    "meshId": "Mesh_Feline_Gastrocnemius",
    "systemId": "muscular",
    "speciesId": "feline",
    "latinTaxonomyName": "Musculus gastrocnemius et tendo calcaneus",
    "name": {
      "en": "Gastrocnemius & Common Calcaneal Tendon",
      "ar": "العضلة التوأمية الساقية ووتر العرقوب المشترك"
    },
    "description": {
      "en": "Two-headed muscular powerhouse (lateral and medial heads) attaching to calcaneus via Achilles tendon.",
      "ar": "عضلة قوية ذات رأسين (وحشي وإنسي) ترتكز على عظم العقب عبر وتر أخيل المشترك."
    },
    "bloodSupply": {
      "en": "Distal caudal femoral artery and popliteal artery.",
      "ar": "الشريان الفخذي الذيلي القاصي والشريان المأبضي."
    },
    "innervation": {
      "en": "Tibial nerve (continuation of sciatic nerve).",
      "ar": "العصب الظنبوبي (امتداد العصب الوركي)."
    },
    "clinicalPearls": {
      "en": "Rupture of common calcaneal tendon causes dropped hock with intact flexed digits (plantigrade stance).",
      "ar": "تمزق وتر العرقوب المشترك يسبب هبوط مفصل العرقوب ومشي كفي منخفض مع بقاء الأصابع منحنية."
    },
    "commonPathologies": [
      {
        "en": "Rupture of common calcaneal tendon causes dropped hock with intact flexed digits...",
        "ar": "تمزق وتر العرقوب المشترك يسبب هبوط مفصل العرقوب ومشي كفي منخفض مع بقاء الأصابع م..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.55,
        0.28,
        -0.28
      ],
      "target": [
        0.12,
        0.18,
        -0.25
      ]
    },
    "color": "#b91c1c",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Ovine_Cor",
    "meshId": "Mesh_Ovine_Cor",
    "systemId": "cardiovascular",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Cor (Ovis aries / Capra hircus)",
    "name": {
      "en": "Ovine Four-Chambered Heart",
      "ar": "قلب المجترات الصغيرة رباعي التجاويف"
    },
    "description": {
      "en": "Conical ruminant heart located between 3rd and 6th ribs in middle mediastinum with right-dominant coronary circulation and os cordis.",
      "ar": "قلب مخروطي يقع بين الضلعين 3 و6 في المنصف الأوسط مع سيادة شريانية تاجية يمنى وعظم قلبي."
    },
    "bloodSupply": {
      "en": "Right coronary artery (predominant in small ruminants, continuing as subsinuosal branch) and left coronary artery.",
      "ar": "الشريان التاجي الأيمن (السائد في المجترات الصغيرة ويمتد في الميزاب تحت الجيبي) والشريان التاجي الأيسر."
    },
    "innervation": {
      "en": "Autonomic cardiac plexus from vagus and sympathetic trunk.",
      "ar": "الضفيرة القلبية الذاتية من العصب المبهم والجذع الودي."
    },
    "clinicalPearls": {
      "en": "White Muscle Disease (nutritional muscular dystrophy from selenium/vitamin E deficiency) causes acute myocardial necrosis and heart failure in lambs/kids.",
      "ar": "مرض العضلات البيضاء (نقص السيلينيوم وفيتامين هـ) يسبب تنخراً في عضلة القلب وقصوراً حاداً في الحملان والجداء."
    },
    "commonPathologies": [
      {
        "en": "White Muscle Disease (nutritional muscular dystrophy from selenium/vitamin E def...",
        "ar": "مرض العضلات البيضاء (نقص السيلينيوم وفيتامين هـ) يسبب تنخراً في عضلة القلب وقصور..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.6,
        0.35
      ],
      "target": [
        0,
        0.45,
        0.35
      ]
    },
    "color": "#dc2626",
    "emissiveColor": "#0284c7",
    "proceduralType": "heart"
  },
  {
    "id": "Mesh_Ovine_Aorta",
    "meshId": "Mesh_Ovine_Aorta",
    "systemId": "cardiovascular",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Aorta et truncus brachiocephalicus",
    "name": {
      "en": "Ovine Aorta & Brachiocephalic Trunk",
      "ar": "الأبهر والجذع العضدي الرأسي في الأغنام"
    },
    "description": {
      "en": "Arises from left ventricle giving off a single massive brachiocephalic trunk that supplies both forelimbs, head, and neck.",
      "ar": "ينشأ من البطين الأيسر معطياً جذعاً عضدياً رأسياً ضخماً ومفرداً يغذي الطرفين الأماميين والرأس والرقبة."
    },
    "bloodSupply": {
      "en": "Direct systemic high-pressure output from left ventricle.",
      "ar": "الناتج الشرياني الجهازي عالي الضغط من البطين الأيسر."
    },
    "innervation": {
      "en": "Aortic plexus and cardiac depressor nerves.",
      "ar": "الضفيرة الأبهرية وأعصاب القلب الخافضة للضغط."
    },
    "clinicalPearls": {
      "en": "Just like in equines and bovines, small ruminants feature a single common brachiocephalic trunk from the aortic arch.",
      "ar": "كما في الخيول والأبقار، تمتلك المجترات الصغيرة جذعاً عضدياً رأسياً مشتركاً ينبثق من قوس الأبهر."
    },
    "commonPathologies": [
      {
        "en": "Just like in equines and bovines, small ruminants feature a single common brachi...",
        "ar": "كما في الخيول والأبقار، تمتلك المجترات الصغيرة جذعاً عضدياً رأسياً مشتركاً ينبثق..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.7,
        0.2
      ],
      "target": [
        0,
        0.52,
        0.15
      ]
    },
    "color": "#ef4444",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Ovine_VenaCava",
    "meshId": "Mesh_Ovine_VenaCava",
    "systemId": "cardiovascular",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Vena cava caudalis",
    "name": {
      "en": "Caudal Vena Cava",
      "ar": "الوريد الأجوف الذيلي في المجترات الصغيرة"
    },
    "description": {
      "en": "Conveys systemic venous blood from pelvis, kidneys, and liver through the caval foramen of the diaphragm to right atrium.",
      "ar": "ينقل الدم الوريدي الجهازي من الحوض والكليتين والكبد عبر ثقبة الأجوف في الحجاب الحاجز إلى الأذين الأيمن."
    },
    "bloodSupply": {
      "en": "Systemic venous return channel.",
      "ar": "قناة عودة الدم الوريدي الجهازي."
    },
    "innervation": {
      "en": "Sympathetic vasomotor fibers.",
      "ar": "ألياف حركية وعائية ودية."
    },
    "clinicalPearls": {
      "en": "Right heart failure causes hepatic venous engorgement, jugular venous distension, and ventral brisket edema (\"bottle jaw\" / hypoproteinemic edema).",
      "ar": "قصور القلب الأيمن يسبب احتقاناً كبدياً وتمدد الوريد الوداجي ووذمة أسفل الفك واللبدة (\"فك القارورة\")."
    },
    "commonPathologies": [
      {
        "en": "Right heart failure causes hepatic venous engorgement, jugular venous distension...",
        "ar": "قصور القلب الأيمن يسبب احتقاناً كبدياً وتمدد الوريد الوداجي ووذمة أسفل الفك والل..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.55,
        0.1
      ],
      "target": [
        0.03,
        0.46,
        0.08
      ]
    },
    "color": "#2563eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Ovine_PulmonaryArtery",
    "meshId": "Mesh_Ovine_PulmonaryArtery",
    "systemId": "cardiovascular",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Truncus pulmonalis et ligamentum arteriosum",
    "name": {
      "en": "Pulmonary Trunk & Ductus Ligament",
      "ar": "الجذع الرئوي والرباط الشرياني"
    },
    "description": {
      "en": "Arising from right ventricular cone, bifurcating into left and right branches supplying pulmonary microvasculature.",
      "ar": "ينشأ من مخروط البطين الأيمن ويتفرع لفرعين رئويين يغذيان الشبكة الشعرية الرئوية."
    },
    "bloodSupply": {
      "en": "Low-oxygen venous blood transported to alveolar capillary plexuses.",
      "ar": "دم وريدي منخفض الأكسجين يُنقل لشبكات الشعيرات الدموية السنخية."
    },
    "innervation": {
      "en": "Pulmonary autonomic plexus.",
      "ar": "الضفيرة الذاتية الرئوية."
    },
    "clinicalPearls": {
      "en": "High altitude triggers pulmonary arterial vasoconstriction and right ventricular hypertrophy (Brisket disease) in ruminants.",
      "ar": "نقص الأكسجين في المرتفعات يحفز تقبض الشرايين الرئوية وتضخم البطين الأيمن (مرض المرتفعات/اللبدة) في المجترات."
    },
    "commonPathologies": [
      {
        "en": "High altitude triggers pulmonary arterial vasoconstriction and right ventricular...",
        "ar": "نقص الأكسجين في المرتفعات يحفز تقبض الشرايين الرئوية وتضخم البطين الأيمن (مرض ال..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.95,
        0.58,
        0.38
      ],
      "target": [
        0.06,
        0.49,
        0.35
      ]
    },
    "color": "#3b82f6",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Ovine_Rumen",
    "meshId": "Mesh_Ovine_Rumen",
    "systemId": "digestive",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Rumen (Ovis aries / Capra hircus)",
    "name": {
      "en": "Ovine Rumen (Paunch)",
      "ar": "كرش المجترات الصغيرة"
    },
    "description": {
      "en": "Massive fermentative chamber filling the entire left abdominal cavity from diaphragm to pelvis, covered with leaf-like papillae.",
      "ar": "حجرة تخمير هائلة تشغل كامل النصف الأيسر لتجويف البطن من الحجاب الحاجز حتى الحوض، مبطنة بحليمات ورقية."
    },
    "bloodSupply": {
      "en": "Right and left ruminal arteries (branches of celiac artery).",
      "ar": "الشريانان الكرشيان الأيمن والأيسر (فروع الشريان الزلاقي)."
    },
    "innervation": {
      "en": "Dorsal and ventral vagal trunks (CN X); injury causes vagal indigestion.",
      "ar": "الجذعان المبهميان الظهري والبطني (العصب العاشر)؛ وإصابتهما تسبب عسر الهضم المبهمي."
    },
    "clinicalPearls": {
      "en": "Left paralumbar fossa auscultation assesses ruminal contractions (normally 1-2 per minute); site for emergency trocharization in frothy bloat.",
      "ar": "تسمع الحفرة الجوعية اليسرى يقيم حركات الكرش (1-2 في الدقيقة)؛ وهي موقع البزل الإسعافي بالمبزل في النفاخ الرغوي الحاد."
    },
    "commonPathologies": [
      {
        "en": "Left paralumbar fossa auscultation assesses ruminal contractions (normally 1-2 p...",
        "ar": "تسمع الحفرة الجوعية اليسرى يقيم حركات الكرش (1-2 في الدقيقة)؛ وهي موقع البزل الإ..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.65,
        0.1
      ],
      "target": [
        -0.15,
        0.45,
        0.05
      ]
    },
    "color": "#78350f",
    "emissiveColor": "#0284c7",
    "proceduralType": "rumen"
  },
  {
    "id": "Mesh_Ovine_ReticuloOmasum",
    "meshId": "Mesh_Ovine_ReticuloOmasum",
    "systemId": "digestive",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Reticulum et omasum (Ovis aries / Capra hircus)",
    "name": {
      "en": "Reticulum & Omasum",
      "ar": "القلنسوة (الشبكية) وأم التلافيف"
    },
    "description": {
      "en": "Reticulum possesses honeycomb mucosal crests; omasum features spherical shape and muscular laminae for water reabsorption.",
      "ar": "القلنسوة ذات مخاطية شبيهة بقرص عسل النحل؛ وأم التلافيف كروية ذات ورقات عضلية لإعادة امتصاص الماء."
    },
    "bloodSupply": {
      "en": "Reticular artery and left gastric artery (from celiac).",
      "ar": "الشريان الشبكي والشريان المعدي الأيسر (من الزلاقي)."
    },
    "innervation": {
      "en": "Ventral and dorsal vagal trunks.",
      "ar": "الجذعان المبهميان البطني والظهري."
    },
    "clinicalPearls": {
      "en": "Hardware disease (traumatic reticuloperitonitis) is less common in sheep than cattle due to selective grazing lips, but reticular groove closure is vital for oral lamb medications.",
      "ar": "مرض الوخز الرضي أقل حدوثاً في الأغنام بفضل شفتيها الحساسة؛ وتفعيل الميزاب المريئي مهم لتوصيل أدوية الحملان للأمعاء مباشرة."
    },
    "commonPathologies": [
      {
        "en": "Hardware disease (traumatic reticuloperitonitis) is less common in sheep than ca...",
        "ar": "مرض الوخز الرضي أقل حدوثاً في الأغنام بفضل شفتيها الحساسة؛ وتفعيل الميزاب المريئ..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.55,
        0.25
      ],
      "target": [
        0.05,
        0.42,
        0.22
      ]
    },
    "color": "#a16207",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Ovine_Abomasum",
    "meshId": "Mesh_Ovine_Abomasum",
    "systemId": "digestive",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Abomasum (Ovis aries / Capra hircus)",
    "name": {
      "en": "Ovine Abomasum (True Stomach)",
      "ar": "المنفحة (المعدة الحقيقية في الأغنام)"
    },
    "description": {
      "en": "Elongated glandular stomach on the right abdominal floor secreting hydrochloric acid and pepsin; site of protein digestion.",
      "ar": "معدة غدية مستطيلة على أرضية البطن اليمنى تفرز حمض الهيدروكلوريك والببسين لهضم البروتينات والميكروبات."
    },
    "bloodSupply": {
      "en": "Right and left gastroepiploic and gastric arteries.",
      "ar": "الشرايين المعدية الثربية والمعدية اليمنى واليسرى."
    },
    "innervation": {
      "en": "Ventral vagal trunk (supplies visceral surface) and dorsal vagal trunk (parietal surface).",
      "ar": "الجذع المبهمي البطني (للسطح الحشوي) والجذع المبهمي الظهري (للسطح الجداري)."
    },
    "clinicalPearls": {
      "en": "Haemonchus contortus (\"barber pole worm\") blood-feeding in the abomasum causes severe hypoproteinemia, anemia, and sudden death in sheep.",
      "ar": "دودة هيمونكس الملتوية (دودة قطب الحلاق) تتغذى على الدم في المنفحة مسببة فقر دم حاد ونقص بروتين ونفوق مفاجئ."
    },
    "commonPathologies": [
      {
        "en": "Haemonchus contortus (\"barber pole worm\") blood-feeding in the abomasum causes s...",
        "ar": "دودة هيمونكس الملتوية (دودة قطب الحلاق) تتغذى على الدم في المنفحة مسببة فقر دم ح..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.45,
        0.15
      ],
      "target": [
        0.1,
        0.32,
        0.12
      ]
    },
    "color": "#ef4444",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Ovine_Intestinum",
    "meshId": "Mesh_Ovine_Intestinum",
    "systemId": "digestive",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Colon spirale et caecum (Ovis aries / Capra hircus)",
    "name": {
      "en": "Ovine Spiral Colon & Cecum",
      "ar": "القولون الحلزوني والأعور في الأغنام"
    },
    "description": {
      "en": "Features a flat planar spiral loop (ansa spiralis coli) with centripetal and centrifugal gyri that compacts fecal pellets.",
      "ar": "يتميز بعرى لولبية حلزونية مسطحة (Ansa spiralis coli) تلف مركزياً ومحيطياً لتجفيف وتشكيل بعر الأغنام."
    },
    "bloodSupply": {
      "en": "Cranial mesenteric artery (colic branches) and caudal mesenteric artery.",
      "ar": "الشريان المساريقي القحفي (الفروع القولونية) والشريان المساريقي الذيلي."
    },
    "innervation": {
      "en": "Enteric nervous system and mesenteric plexuses.",
      "ar": "الجهاز العصبي المعوي والضفائر المساريقية."
    },
    "clinicalPearls": {
      "en": "Clostridium perfringens type D overgrowth in the intestine produces epsilon toxin under high-concentrate diets, causing fatal \"Pulpy Kidney\" disease (Enterotoxemia).",
      "ar": "فرط نمو كلوستريديوم بيرفرنجنس D في الأمعاء يفرز ذيفان إبسيلون في التغذية المركزة مسبباً التسمم المعوي و\"الكلية الرخوة\"."
    },
    "commonPathologies": [
      {
        "en": "Clostridium perfringens type D overgrowth in the intestine produces epsilon toxi...",
        "ar": "فرط نمو كلوستريديوم بيرفرنجنس D في الأمعاء يفرز ذيفان إبسيلون في التغذية المركزة..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.55,
        -0.08
      ],
      "target": [
        0,
        0.38,
        -0.05
      ]
    },
    "color": "#d97706",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Ovine_Trachea",
    "meshId": "Mesh_Ovine_Trachea",
    "systemId": "respiratory",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Trachea et bronchus trachealis (Ovis aries)",
    "name": {
      "en": "Ovine Trachea & Tracheal Bronchus",
      "ar": "الرغامي والقصبة الرغامية الخاصة في الأغنام"
    },
    "description": {
      "en": "Flexible airway conduit possessing a specialized accessory \"bronchus trachealis\" that ventilates the right cranial lung lobe directly.",
      "ar": "قناة هوائية مرنة تمتلك قصبة إضافية فريدة (القصبة الرغامية) تفرع قبل التشعب لتهوية الفص القحفي الأيمن للرئة."
    },
    "bloodSupply": {
      "en": "Bronchoesophageal and cranial/caudal thyroid arteries.",
      "ar": "الشرايين القصبي المريئي والدرقية القحفية والذيلية."
    },
    "innervation": {
      "en": "Recurrent laryngeal nerve and vagal pulmonary branches.",
      "ar": "العصب الحنجري الراجع والفروع الرئوية المبهمية."
    },
    "clinicalPearls": {
      "en": "The bronchus trachealis arises cranial to the carina; intubation tubes pushed too deep can selectively occlude or ventilate only this lobe.",
      "ar": "تنشأ القصبة الرغامية قبل تشعب الرغامي؛ ودفع أنبوب التنبيب بعمق زائد قد يغلقها مسبباً انخماص الفص القحفي الأيمن."
    },
    "commonPathologies": [
      {
        "en": "The bronchus trachealis arises cranial to the carina; intubation tubes pushed to...",
        "ar": "تنشأ القصبة الرغامية قبل تشعب الرغامي؛ ودفع أنبوب التنبيب بعمق زائد قد يغلقها مس..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.75,
        0.5
      ],
      "target": [
        0,
        0.62,
        0.45
      ]
    },
    "color": "#bae6fd",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Ovine_Pulmo_Sinister",
    "meshId": "Mesh_Ovine_Pulmo_Sinister",
    "systemId": "respiratory",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Pulmo sinister (Ovis aries)",
    "name": {
      "en": "Ovine Left Lung (2 Lobes)",
      "ar": "الرئة اليسرى في الأغنام (فصان)"
    },
    "description": {
      "en": "Composed of a cranial lobe (divided into cranial and caudal segments) and a large caudal lobe.",
      "ar": "تتكون من فص قحفي (ينقسم إلى جزء قحفي وجزء ذيلي) وفص ذيلي واسع."
    },
    "bloodSupply": {
      "en": "Pulmonary artery and bronchoesophageal artery.",
      "ar": "الشريان الرئوي والشريان القصبي المريئي."
    },
    "innervation": {
      "en": "Pulmonary plexus from CN X and sympathetic trunk.",
      "ar": "الضفيرة الرئوية من العصب المبهم والجذع الودي."
    },
    "clinicalPearls": {
      "en": "Ovine Progressive Pneumonia (Maedi-Visna, a lentivirus) causes diffuse interstitial lymphocytic infiltration, doubling lung weight.",
      "ar": "مرض مايدي-فيزنا (الالتهاب الرئوي المترقي) يسبب ارتشاحاً لمفاوياً خلالياً يضاعف وزن الرئة ويمنع تبادل الغازات."
    },
    "commonPathologies": [
      {
        "en": "Ovine Progressive Pneumonia (Maedi-Visna, a lentivirus) causes diffuse interstit...",
        "ar": "مرض مايدي-فيزنا (الالتهاب الرئوي المترقي) يسبب ارتشاحاً لمفاوياً خلالياً يضاعف و..."
      }
    ],
    "cameraFocus": {
      "position": [
        -0.85,
        0.55,
        0.32
      ],
      "target": [
        -0.12,
        0.48,
        0.3
      ]
    },
    "color": "#fda4af",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Ovine_Pulmo_Dexter",
    "meshId": "Mesh_Ovine_Pulmo_Dexter",
    "systemId": "respiratory",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Pulmo dexter (Ovis aries)",
    "name": {
      "en": "Ovine Right Lung (4 Lobes)",
      "ar": "الرئة اليمنى في الأغنام (4 فصوص)"
    },
    "description": {
      "en": "Divided into cranial (ventilated by tracheal bronchus), middle, caudal, and accessory lobes.",
      "ar": "تنقسم إلى أربعة فصوص: قحفي (تهويه القصبة الرغامية المستقلة)، متوسط، ذيلي، وفص إضافي."
    },
    "bloodSupply": {
      "en": "Right branches of pulmonary artery and bronchoesophageal system.",
      "ar": "الفروع اليمنى للشريان الرئوي والجهاز القصبي المريئي."
    },
    "innervation": {
      "en": "Vagal and sympathetic pulmonary innervation.",
      "ar": "التعصيب الرئوي الودي والمبهمي."
    },
    "clinicalPearls": {
      "en": "Mannheimia haemolytica and Pasteurella multocida cause acute fibrinous bronchopneumonia predominantly in cranial and middle right lobes.",
      "ar": "بكتيريا مانهيميا هيموليتيكا تسبب التهاباً رئوياً فبرينياً نخرياً يبدأ في الفصوص القحفية والمتوسطة للرئة اليمنى."
    },
    "commonPathologies": [
      {
        "en": "Mannheimia haemolytica and Pasteurella multocida cause acute fibrinous bronchopn...",
        "ar": "بكتيريا مانهيميا هيموليتيكا تسبب التهاباً رئوياً فبرينياً نخرياً يبدأ في الفصوص ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.85,
        0.55,
        0.32
      ],
      "target": [
        0.12,
        0.48,
        0.3
      ]
    },
    "color": "#f43f5e",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Ovine_Diaphragma",
    "meshId": "Mesh_Ovine_Diaphragma",
    "systemId": "respiratory",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Diaphragma (Ovis aries)",
    "name": {
      "en": "Ovine Diaphragm",
      "ar": "الحجاب الحاجز في المجترات الصغيرة"
    },
    "description": {
      "en": "Broad musculotendinous partition between thoracic and peritoneal spaces, directly abutting the rumen reticulum and spleen.",
      "ar": "حاجز عضلي وتري عريض بين الصدر والبطن، يتاخم مباشرة قلنسوة الكرش والطحال."
    },
    "bloodSupply": {
      "en": "Phrenic and musculophrenic vessels.",
      "ar": "الأوعية الحجابية والحجابية العضلية."
    },
    "innervation": {
      "en": "Phrenic nerves (bilateral C5-C7 spinal origin).",
      "ar": "الأعصاب الحجابية (من الجذور الشوكية C5-C7)."
    },
    "clinicalPearls": {
      "en": "Severe ruminal tympany (bloat) elevates intraluminal pressure, pressing the diaphragm forward into the thorax and causing asphyxiation.",
      "ar": "نفاخ الكرش الشديد يدفع الحجاب الحاجز قحفياً داخل القفص الصدري مما يضغط الرئتين ويسبب الموت بالاختناق."
    },
    "commonPathologies": [
      {
        "en": "Severe ruminal tympany (bloat) elevates intraluminal pressure, pressing the diap...",
        "ar": "نفاخ الكرش الشديد يدفع الحجاب الحاجز قحفياً داخل القفص الصدري مما يضغط الرئتين و..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.55,
        0.12
      ],
      "target": [
        0,
        0.46,
        0.12
      ]
    },
    "color": "#e11d48",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Ovine_Cerebrum",
    "meshId": "Mesh_Ovine_Cerebrum",
    "systemId": "nervous",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Cerebrum (Ovis aries)",
    "name": {
      "en": "Ovine Cerebrum",
      "ar": "المخ في الأغنام"
    },
    "description": {
      "en": "Gyrencephalic cerebral hemispheres with well-developed frontal, parietal, and temporal lobes mediating herd social behaviors.",
      "ar": "نصفا كرة مخيان ذوا تلافيف متطورة وفصوص جبهية وجدارية وصدغية تنظم السلوك الاجتماعي للقطيع."
    },
    "bloodSupply": {
      "en": "Rete mirabile epidurale rostrale (derived from maxillary and internal carotid arteries) and circle of Willis.",
      "ar": "الشبكة العجيبة الروسترالية فوق الجافية (المشتقة من الشريان الفكي) ودائرة ويليس."
    },
    "innervation": {
      "en": "Cranial nerves I-XII.",
      "ar": "الأعصاب القحفية من 1 إلى 12."
    },
    "clinicalPearls": {
      "en": "Thiamine deficiency or excess dietary sulfur causes Polioencephalomalacia (PEM / Cerebrocortical Necrosis), showing cortical autofluorescence under UV light.",
      "ar": "نقص فيتامين B1 (الثيامين) يسبب نخر قشرة المخ (PEM)؛ وتظهر القشرة توهجاً مضيئاً مميزاً تحت الأشعة فوق البنفسجية UV."
    },
    "commonPathologies": [
      {
        "en": "Thiamine deficiency or excess dietary sulfur causes Polioencephalomalacia (PEM /...",
        "ar": "نقص فيتامين B1 (الثيامين) يسبب نخر قشرة المخ (PEM)؛ وتظهر القشرة توهجاً مضيئاً م..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.8,
        0.7
      ],
      "target": [
        0,
        0.72,
        0.65
      ]
    },
    "color": "#fbcfe8",
    "emissiveColor": "#0284c7",
    "proceduralType": "brain"
  },
  {
    "id": "Mesh_Ovine_Cerebellum",
    "meshId": "Mesh_Ovine_Cerebellum",
    "systemId": "nervous",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Cerebellum (Ovis aries)",
    "name": {
      "en": "Ovine Cerebellum",
      "ar": "المخيخ في الأغنام"
    },
    "description": {
      "en": "Cauliflower-shaped hindbrain coordinator of motor tone and vestibular equilibrium with deep folia and cerebellar nuclei.",
      "ar": "منسق النغمة العضلية والتوازن الدهليزي يشبه القرنبيط بتلافيف شجرية عميقة ونوى مخيخية."
    },
    "bloodSupply": {
      "en": "Rostral and caudal cerebellar arteries.",
      "ar": "الشرايين المخيخية المنقارية والذيلية."
    },
    "innervation": {
      "en": "Cerebellar peduncles.",
      "ar": "السويقات المخيخية."
    },
    "clinicalPearls": {
      "en": "Scrapie (transmissible spongiform encephalopathy prion) targets the obex, brainstem, and cerebellum, causing persistent pruritus, nibbling reflex, and severe ataxia.",
      "ar": "مرض السكريبي (البريون البريوني) يستهدف جذع الدماغ والمخيخ والـ Obex، مسبباً حكة مستمرة ومنعكس القضم والترنح الشديد."
    },
    "commonPathologies": [
      {
        "en": "Scrapie (transmissible spongiform encephalopathy prion) targets the obex, brains...",
        "ar": "مرض السكريبي (البريون البريوني) يستهدف جذع الدماغ والمخيخ والـ Obex، مسبباً حكة ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.78,
        0.55
      ],
      "target": [
        0,
        0.72,
        0.52
      ]
    },
    "color": "#f472b6",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Ovine_MedullaSpinalis",
    "meshId": "Mesh_Ovine_MedullaSpinalis",
    "systemId": "nervous",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Medulla spinalis (Ovis aries)",
    "name": {
      "en": "Ovine Spinal Cord & Enzootic Ataxia",
      "ar": "النخاع الشوكي والترنح المتوطن"
    },
    "description": {
      "en": "Continuous neural cable traversing the vertebral canal, giving off 37 pairs of spinal nerves.",
      "ar": "حبل عصبي مستمر يمر عبر القناة الشوكية ويعطي 37 زوجاً من الأعصاب الشوكية."
    },
    "bloodSupply": {
      "en": "Ventral spinal artery and spinal ramus of intercostal/lumbar arteries.",
      "ar": "الشريان الشوكي البطني والفروع الشوكية للشرايين الوربية والقطنية."
    },
    "innervation": {
      "en": "Sensory and motor spinal tract systems.",
      "ar": "المسارات العصبية الحسية والحركية الصاعدة والهابطة."
    },
    "clinicalPearls": {
      "en": "Enzootic Ataxia (\"Swayback\") caused by maternal copper deficiency causes chromatolysis of motor neurons and demyelination of spinal white matter tracts in lambs.",
      "ar": "الترنح المتوطن (Swayback) الناتج عن نقص النحاس في الأمهات يسبب زوال الميالين في حبال النخاع الشوكي وترنح أطراف الحملان."
    },
    "commonPathologies": [
      {
        "en": "Enzootic Ataxia (\"Swayback\") caused by maternal copper deficiency causes chromat...",
        "ar": "الترنح المتوطن (Swayback) الناتج عن نقص النحاس في الأمهات يسبب زوال الميالين في ..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.75,
        0.1
      ],
      "target": [
        0,
        0.62,
        0.05
      ]
    },
    "color": "#fef08a",
    "emissiveColor": "#0284c7",
    "proceduralType": "spine"
  },
  {
    "id": "Mesh_Ovine_NervusIschiadicus",
    "meshId": "Mesh_Ovine_NervusIschiadicus",
    "systemId": "nervous",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Nervus ischiadicus",
    "name": {
      "en": "Ovine Sciatic Nerve",
      "ar": "العصب الوركي في الأغنام"
    },
    "description": {
      "en": "Largest nerve of the lumbosacral plexus (L6, S1, S2) descending behind the hip joint toward the popliteal fossa.",
      "ar": "أكبر عصب في الضفيرة القطنية العجزية، ينحدر خلف مفصل الورك نحو الحفرة المأبضية."
    },
    "bloodSupply": {
      "en": "Arteria comitans nervi ischiadici.",
      "ar": "الشريان المرافق للعصب الوركي."
    },
    "innervation": {
      "en": "Motor to biceps femoris, semitendinosus, and all muscles of the distal hindlimb.",
      "ar": "حركي للعضلة ذات الرأسين الفخذية ونصف الوترية وجميع عضلات الساق والقدم."
    },
    "clinicalPearls": {
      "en": "Dystocia with oversized lambs can cause fetal compression of maternal lumbosacral roots/obturator/sciatic nerves, leading to \"downer ewe\".",
      "ar": "عسر الولادة بأجنة ضخمة يضغط الجذور الشوكية والعصب السدادي والوركي مسبباً شلل النعاج بعد الولادة (\"النعجة الرابضة\")."
    },
    "commonPathologies": [
      {
        "en": "Dystocia with oversized lambs can cause fetal compression of maternal lumbosacra...",
        "ar": "عسر الولادة بأجنة ضخمة يضغط الجذور الشوكية والعصب السدادي والوركي مسبباً شلل الن..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.85,
        0.45,
        -0.3
      ],
      "target": [
        0.15,
        0.35,
        -0.28
      ]
    },
    "color": "#facc15",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Ovine_Ren",
    "meshId": "Mesh_Ovine_Ren",
    "systemId": "urogenital",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Ren (Ovis aries)",
    "name": {
      "en": "Ovine Unipyramidal Kidney",
      "ar": "كلية المجترات الصغيرة الملساء"
    },
    "description": {
      "en": "Bean-shaped smooth unipyramidal kidney with a single unified renal crest (crista renalis), unlike the lobulated bovine kidney.",
      "ar": "كلية ملساء أحادية الهرم تشبه حبة الفاصولياء ذات عرف كلوي موحد، بخلاف كلية الأبقار المفصصة."
    },
    "bloodSupply": {
      "en": "Renal artery and renal vein.",
      "ar": "الشريان الكلوي والوريد الكلوي."
    },
    "innervation": {
      "en": "Renal plexus from sympathetic splanchnic fibers.",
      "ar": "الضفيرة الكلوية من الألياف الودية الحشوية."
    },
    "clinicalPearls": {
      "en": "Chronic Copper Toxicity in sheep triggers acute massive intravascular hemolysis and \"gunmetal black\" kidneys filled with hemoglobin casts.",
      "ar": "التسمم المزمن بالنحاس يسبب انحلال دم حاد وتصبح الكلى بلون المعدن الرصاصي الغامق (Gunmetal kidney) لتراكم الهيموجلوبين."
    },
    "commonPathologies": [
      {
        "en": "Chronic Copper Toxicity in sheep triggers acute massive intravascular hemolysis ...",
        "ar": "التسمم المزمن بالنحاس يسبب انحلال دم حاد وتصبح الكلى بلون المعدن الرصاصي الغامق ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.85,
        0.55,
        0.08
      ],
      "target": [
        -0.08,
        0.48,
        0.05
      ]
    },
    "color": "#7f1d1d",
    "emissiveColor": "#0284c7",
    "proceduralType": "kidney"
  },
  {
    "id": "Mesh_Ovine_ProcessusUrethralis",
    "meshId": "Mesh_Ovine_ProcessusUrethralis",
    "systemId": "urogenital",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Processus urethralis (Ovis aries)",
    "name": {
      "en": "Urethral Process (Vermiform Appendage)",
      "ar": "الزوائد الإحليلية الدودية في الكباش والتيس"
    },
    "description": {
      "en": "Slender, flexible vermiform projection extending 2-4 cm beyond glans penis, rotating during ejaculation.",
      "ar": "امتداد دودي نحيف مرن يبرز 2-4 سم خارج حشفة القضيب، يدور لولبياً أثناء القذف لنثر السائل المنوي."
    },
    "bloodSupply": {
      "en": "Terminal dorsal penile artery.",
      "ar": "الشريان الظهري القضيبي النهائي."
    },
    "innervation": {
      "en": "Dorsal nerve of penis (from pudendal).",
      "ar": "العصب الظهري للقضيب (من عصب الحياء)."
    },
    "clinicalPearls": {
      "en": "Primary lodging site for obstructive calculi (urolithiasis) in wethers; amputation of the urethral process is the first-line surgical decompression.",
      "ar": "الموقع الرئيسي لانحشار الحصوات البولية في الخراف المخصية؛ وبتر الزائدة الدودية هو الخطوة الجراحية الأولى لإنقاذ الحيوان."
    },
    "commonPathologies": [
      {
        "en": "Primary lodging site for obstructive calculi (urolithiasis) in wethers; amputati...",
        "ar": "الموقع الرئيسي لانحشار الحصوات البولية في الخراف المخصية؛ وبتر الزائدة الدودية ه..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.35,
        -0.25
      ],
      "target": [
        0,
        0.28,
        -0.22
      ]
    },
    "color": "#f43f5e",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Ovine_VesicaUrinaria",
    "meshId": "Mesh_Ovine_VesicaUrinaria",
    "systemId": "urogenital",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Vesica urinaria (Ovis aries)",
    "name": {
      "en": "Ovine Urinary Bladder",
      "ar": "المثانة البولية في الأغنام"
    },
    "description": {
      "en": "Muscular pear-shaped reservoir situated on the pelvic floor when empty, extending cranioventrally into abdomen when distended.",
      "ar": "خزان عضلي كمثري الشكل يستقر على أرضية الحوض عند فراغه ويمتد قحفياً بطنياً داخل البطن عند امتلائه."
    },
    "bloodSupply": {
      "en": "Cranial and caudal vesical arteries.",
      "ar": "الشرايين المثانية القحفية والذيلية."
    },
    "innervation": {
      "en": "Pelvic nerve (parasympathetic detrusor contractor) and hypogastric nerve (sympathetic sphincter retainer).",
      "ar": "العصب الحوضي (نظير ودي مقبض للجدار) والعصب الخثلي (ودي مقبض للعاصرة)."
    },
    "clinicalPearls": {
      "en": "Rupture of the urinary bladder secondary to complete obstructive urolithiasis leads to uroperitoneum, severe abdominal distension (\"water belly\"), and azotemia.",
      "ar": "تمزق المثانة البولية بسبب الانسداد البولي يسبب ارتشاح البول في البريتون وانتفاخ البطن المائي (\"البطن المائي Water belly\")."
    },
    "commonPathologies": [
      {
        "en": "Rupture of the urinary bladder secondary to complete obstructive urolithiasis le...",
        "ar": "تمزق المثانة البولية بسبب الانسداد البولي يسبب ارتشاح البول في البريتون وانتفاخ ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.45,
        -0.15
      ],
      "target": [
        0,
        0.38,
        -0.12
      ]
    },
    "color": "#f59e0b",
    "emissiveColor": "#0284c7",
    "proceduralType": "bladder"
  },
  {
    "id": "Mesh_Ovine_Uterus",
    "meshId": "Mesh_Ovine_Uterus",
    "systemId": "urogenital",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Uterus bicornis (Ovis aries)",
    "name": {
      "en": "Ovine Bicornuate Uterus with Caruncles",
      "ar": "رحم النعاج ذو القرنين ذو الفلقات المقعرة"
    },
    "description": {
      "en": "Bicornuate uterus featuring 80-100 specialized cup-shaped concave endometrial caruncles that form synepitheliochorial placentomes.",
      "ar": "رحم ذو قرنين يحتوي على 80-100 فلقة رحمية مقعرة مميزة تشكل مشيمة فلقية ظهارية متحدة."
    },
    "bloodSupply": {
      "en": "Uterine artery (from internal iliac) and ovarian artery.",
      "ar": "الشريان الرحمي (من الحرقفي الداخلي) والشريان المبيضي."
    },
    "innervation": {
      "en": "Uterovaginal autonomic plexus and hypogastric nerves.",
      "ar": "الضفيرة الرحمية المهبلية الذاتية والأعصاب الخثلية."
    },
    "clinicalPearls": {
      "en": "Ovine caruncles are distinctively concave (crater-like), contrasting with the convex mushroom-like caruncles of cattle; site of Chlamydia abortus placentitis.",
      "ar": "فلقات رحم النعاج مقعرة كالكوب، بخلاف فلقات الأبقار المحدبة الفطرية؛ وهي هدف التهاب المشيمة ببكتيريا الكلاميديا المجهضة."
    },
    "commonPathologies": [
      {
        "en": "Ovine caruncles are distinctively concave (crater-like), contrasting with the co...",
        "ar": "فلقات رحم النعاج مقعرة كالكوب، بخلاف فلقات الأبقار المحدبة الفطرية؛ وهي هدف الته..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.48,
        -0.05
      ],
      "target": [
        0,
        0.4,
        -0.05
      ]
    },
    "color": "#ec4899",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Ovine_Cranium",
    "meshId": "Mesh_Ovine_Cranium",
    "systemId": "skeletal",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Cranium et processus cornalis (Ovis aries)",
    "name": {
      "en": "Ovine Skull & Cornual Process",
      "ar": "جمجمة الأغنام والناتئ القرني"
    },
    "description": {
      "en": "Skull featuring bony orbits, missing upper incisors replaced by a fibrocartilaginous dental pad (pulvinus dentalis).",
      "ar": "جمجمة ذات حجاج عظمي مغلق وخالية من القواطع العلوية التي تعوضها وسادة سنية ليفية غضروفية صلبة."
    },
    "bloodSupply": {
      "en": "Maxillary, cornual, and superficial temporal arteries.",
      "ar": "الشرايين الفكي والقرني والصدغي السطحي."
    },
    "innervation": {
      "en": "Cornual branch of zygomaticotemporal nerve (trigeminal V2/V3).",
      "ar": "الفرع القرني للعصب الوجني الصدغي (من العصب الخامس)."
    },
    "clinicalPearls": {
      "en": "Dehorning kids requires blocking both the cornual branch of the zygomaticotemporal nerve AND the cornual branch of infratrochlear nerve.",
      "ar": "إزالة قرون صغار الماعز تتطلب تخدير فرعين عصبيين معاً: الفرع القرني الوجني الصدغي وفرع تحت البكرة."
    },
    "commonPathologies": [
      {
        "en": "Dehorning kids requires blocking both the cornual branch of the zygomaticotempor...",
        "ar": "إزالة قرون صغار الماعز تتطلب تخدير فرعين عصبيين معاً: الفرع القرني الوجني الصدغي..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.85,
        0.8,
        0.75
      ],
      "target": [
        0,
        0.68,
        0.68
      ]
    },
    "color": "#f3f4f6",
    "emissiveColor": "#0284c7",
    "proceduralType": "skull"
  },
  {
    "id": "Mesh_Ovine_ColumnaVertebralis",
    "meshId": "Mesh_Ovine_ColumnaVertebralis",
    "systemId": "skeletal",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Columna vertebralis (Ovis aries)",
    "name": {
      "en": "Ovine Vertebral Column",
      "ar": "العمود الفقري في الأغنام"
    },
    "description": {
      "en": "Axial skeletal support: C7, T13, L6-7, S4, Cd16-18, with broad lumbar transverse processes.",
      "ar": "الدعامة العظمية المحورية: 7 عنقية، 13 صدرية، 6-7 قطنية، 4 عجزية، 16-18 ذيلية بنواتئ مستعرضة عريضة."
    },
    "bloodSupply": {
      "en": "Intercostal, lumbar, and median sacral arteries.",
      "ar": "الشرايين الوربية والقطنية والشريان العجزي المتوسط."
    },
    "innervation": {
      "en": "Dorsal branches of spinal nerves.",
      "ar": "الفروع الظهرية للأعصاب الشوكية."
    },
    "clinicalPearls": {
      "en": "The lumbosacral junction (L6-S1 space) is the primary site for epidural anesthesia in small ruminants for abdominal and obstetrical procedures.",
      "ar": "المفصل القطني العجزي (الفراغ L6-S1) هو الموقع المثالي للتخدير فوق الجافية في الأغنام للعمليات البطنية والولادية."
    },
    "commonPathologies": [
      {
        "en": "The lumbosacral junction (L6-S1 space) is the primary site for epidural anesthes...",
        "ar": "المفصل القطني العجزي (الفراغ L6-S1) هو الموقع المثالي للتخدير فوق الجافية في الأ..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.75,
        0
      ],
      "target": [
        0,
        0.65,
        0
      ]
    },
    "color": "#f5f5f4",
    "emissiveColor": "#0284c7",
    "proceduralType": "spine"
  },
  {
    "id": "Mesh_Ovine_RadiusUlna",
    "meshId": "Mesh_Ovine_RadiusUlna",
    "systemId": "skeletal",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Radius et ulna (Ovis aries)",
    "name": {
      "en": "Ovine Radius & Fused Ulna",
      "ar": "عظما الكعبرة والزند الملتحمان"
    },
    "description": {
      "en": "The radius is the major weight-bearing antebrachial bone; the slender ulna is fused along its shaft, preventing pronation/supination.",
      "ar": "الكعبرة هي العظم الرئيسي الحامل للوزن؛ والزند النحيف ملتحم بجسم الكعبرة مانعاً حركات الكب والاستلقاء."
    },
    "bloodSupply": {
      "en": "Median artery and collateral radial branches.",
      "ar": "الشريان المتوسط وفروع الشريان الكعبري الإضافية."
    },
    "innervation": {
      "en": "Radial and median nerves.",
      "ar": "العصبان الكعبري والمتوسط."
    },
    "clinicalPearls": {
      "en": "Complete fusion between radius and ulna restricts the limb to simple flexion/extension, preventing cursorial fractures.",
      "ar": "الالتحام الكامل بين الكعبرة والزند يحصر حركة القائمة في البسط والثني فقط لحماية الطرف من التواءات الرعي في المنحدرات."
    },
    "commonPathologies": [
      {
        "en": "Complete fusion between radius and ulna restricts the limb to simple flexion/ext...",
        "ar": "الالتحام الكامل بين الكعبرة والزند يحصر حركة القائمة في البسط والثني فقط لحماية ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.4,
        0.35
      ],
      "target": [
        0.12,
        0.28,
        0.32
      ]
    },
    "color": "#e5e7eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "limb"
  },
  {
    "id": "Mesh_Ovine_Metatarsus",
    "meshId": "Mesh_Ovine_Metatarsus",
    "systemId": "skeletal",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Os metatarsale III et IV (Ovis aries)",
    "name": {
      "en": "Ovine Cannon Bone (Metatarsal III & IV)",
      "ar": "عظم القصبة والمشط الملتحم في الأغنام"
    },
    "description": {
      "en": "Single consolidated cannon bone formed by the embryonic fusion of 3rd and 4th metatarsals with two distinct distal condyles.",
      "ar": "عظم مشط موحد ناتج عن الالتحام الجنيني لعظمي المشط الثالث والرابع وله لقمتان قاصيتان تتمفصلان مع الظلفين."
    },
    "bloodSupply": {
      "en": "Dorsal metatarsal artery III.",
      "ar": "الشريان المشطي الظهري الثالث."
    },
    "innervation": {
      "en": "Plantar nerves and deep fibular branches.",
      "ar": "الأعصاب الأخمصية وفروع الشظوي العميق."
    },
    "clinicalPearls": {
      "en": "Transmits weight symmetrically to the two digits; foot rot (Dichelobacter nodosus) causes interdigital dermatitis and claw under-running.",
      "ar": "ينقل الوزن بتماثل إلى الظلفين؛ وتسبب بكتيريا تعفن الحافر (Dichelobacter nodosus) التهاباً بين أصابع القدم وانفصال جدار الظلف."
    },
    "commonPathologies": [
      {
        "en": "Transmits weight symmetrically to the two digits; foot rot (Dichelobacter nodosu...",
        "ar": "ينقل الوزن بتماثل إلى الظلفين؛ وتسبب بكتيريا تعفن الحافر (Dichelobacter nodosus)..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.25,
        -0.3
      ],
      "target": [
        0.15,
        0.12,
        -0.28
      ]
    },
    "color": "#e5e7eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Ovine_LongissimusDorsi",
    "meshId": "Mesh_Ovine_LongissimusDorsi",
    "systemId": "muscular",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Musculus longissimus dorsi",
    "name": {
      "en": "Longissimus Dorsi (Loin Eye Muscle)",
      "ar": "العضلة العينية الظهرية الأطول في الأغنام"
    },
    "description": {
      "en": "Massive epaxial muscle running alongside thoracic and lumbar spines; determines commercial carcass value and loin eye area.",
      "ar": "عضلة محورية ضخمة تمتد بمحاذاة الشوكات الصدرية والقطنية؛ تحدد القيمة التسويقية لذبيحة الأغنام ومساحة عين الظهر."
    },
    "bloodSupply": {
      "en": "Dorsal branches of intercostal and lumbar arteries.",
      "ar": "الفروع الظهرية للشرايين الوربية والقطنية."
    },
    "innervation": {
      "en": "Dorsal branches of thoracic and lumbar spinal nerves.",
      "ar": "الفروع الظهرية للأعصاب الشوكية الصدرية والقطنية."
    },
    "clinicalPearls": {
      "en": "Ultrasonic evaluation of the longissimus dorsi depth between the 12th and 13th ribs is the gold standard for live meat grading.",
      "ar": "قياس عمق ومساحة العضلة الظهرية بالأمواج فوق الصوتية بين الضلعين 12 و13 هو المعيار لتقييم جودة لحم الذبائح."
    },
    "commonPathologies": [
      {
        "en": "Ultrasonic evaluation of the longissimus dorsi depth between the 12th and 13th r...",
        "ar": "قياس عمق ومساحة العضلة الظهرية بالأمواج فوق الصوتية بين الضلعين 12 و13 هو المعيا..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.75,
        0.1
      ],
      "target": [
        0.08,
        0.62,
        0.08
      ]
    },
    "color": "#9f1239",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Ovine_Masseter",
    "meshId": "Mesh_Ovine_Masseter",
    "systemId": "muscular",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Musculus masseter (Ovis aries)",
    "name": {
      "en": "Ovine Masseter Muscle",
      "ar": "العضلة الماضغة في الأغنام"
    },
    "description": {
      "en": "Powerhouse masticatory muscle originating from facial tuberosity and zygomatic arch, inserting on the lateral mandible.",
      "ar": "عضلة المضغ الجبارة تنشأ من الحديبة الوجهية والقوس الوجني وتنغرز في السطح الوحشي للفك السفلي."
    },
    "bloodSupply": {
      "en": "Transverse facial artery and facial branches of maxillary artery.",
      "ar": "الشريان الوجهي المستعرض وفروع الشريان الفكي الوجهية."
    },
    "innervation": {
      "en": "Masseteric nerve (branch of mandibular division of trigeminal nerve, CN V3).",
      "ar": "العصب الماضغي (فرع عصب الفك السفلي من التوائم الثلاثي الخامس CN V3)."
    },
    "clinicalPearls": {
      "en": "Drives the lateral side-to-side rhythmic grinding movement during rumination (chewing the cud).",
      "ar": "تقود حركة الطحن الإيقاعية الجانبية من جهة لأخرى أثناء عملية الاجترار وإعادة مضغ اللقمة الكرشية."
    },
    "commonPathologies": [
      {
        "en": "Drives the lateral side-to-side rhythmic grinding movement during rumination (ch...",
        "ar": "تقود حركة الطحن الإيقاعية الجانبية من جهة لأخرى أثناء عملية الاجترار وإعادة مضغ ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.72,
        0.65
      ],
      "target": [
        0.1,
        0.64,
        0.62
      ]
    },
    "color": "#be123c",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Ovine_Gluteobiceps",
    "meshId": "Mesh_Ovine_Gluteobiceps",
    "systemId": "muscular",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Musculus gluteobiceps (Ovis aries)",
    "name": {
      "en": "Gluteobiceps Muscle",
      "ar": "العضلة الإليوية ذات الرأسين في المجترات"
    },
    "description": {
      "en": "Fused muscular complex uniting the superficial gluteal and biceps femoris muscles, dominating the lateral hindquarter contour.",
      "ar": "مركب عضلي متصل يوحد العضلة الإليوية السطحية مع ذات الرأسين الفخذية، ويهيمن على مظهر الفخذ الوحشي."
    },
    "bloodSupply": {
      "en": "Caudal gluteal and lateral circumflex femoral arteries.",
      "ar": "الشرايين الإليوية الذيلية والمنعطفة الفخذية الوحشية."
    },
    "innervation": {
      "en": "Caudal gluteal nerve and sciatic nerve.",
      "ar": "العصب الإليوي الذيلي والعصب الوركي."
    },
    "clinicalPearls": {
      "en": "Forms the broad ham musculature; prime landmark for assessing muscle condition scoring and intramuscular vaccination in market lambs.",
      "ar": "تشكل الكتلة العضلية العريضة للفخذ؛ وهي معلم لتقييم الحالة العضلية للجسم وموقع حقن اللقاحات."
    },
    "commonPathologies": [
      {
        "en": "Forms the broad ham musculature; prime landmark for assessing muscle condition s...",
        "ar": "تشكل الكتلة العضلية العريضة للفخذ؛ وهي معلم لتقييم الحالة العضلية للجسم وموقع حق..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.95,
        0.52,
        -0.22
      ],
      "target": [
        0.14,
        0.42,
        -0.2
      ]
    },
    "color": "#881337",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Ovine_Gastrocnemius",
    "meshId": "Mesh_Ovine_Gastrocnemius",
    "systemId": "muscular",
    "speciesId": "ovine_caprine",
    "latinTaxonomyName": "Musculus gastrocnemius et tendo calcaneus",
    "name": {
      "en": "Ovine Gastrocnemius & Common Calcaneal Tendon",
      "ar": "العضلة التوأمية الساقية ووتر العرقوب في الأغنام"
    },
    "description": {
      "en": "Two-headed muscular flexor of stifle and extensor of hock inserting onto tuber calcanei via the heavy common calcaneal tendon.",
      "ar": "عضلة ثنائية الرأس تثني الركبة وتبسط العرقوب وتنغرز في حديبة عظم العقب عبر وتر العرقوب القوي."
    },
    "bloodSupply": {
      "en": "Popliteal artery and caudal tibial artery.",
      "ar": "الشريان المأبضي والشريان الظنبوبي الذيلي."
    },
    "innervation": {
      "en": "Tibial nerve.",
      "ar": "العصب الظنبوبي."
    },
    "clinicalPearls": {
      "en": "Critical for the stay apparatus of the hindlimb, allowing standing with minimal muscular fatigue during prolonged grazing on hilly pastures.",
      "ar": "جزء أساسي من جهاز التثبيت بالقوائم الخلفية، مما يسمح بالوقوف بأقل جهد عضلي أثناء الرعي الطويل في المنحدرات."
    },
    "commonPathologies": [
      {
        "en": "Critical for the stay apparatus of the hindlimb, allowing standing with minimal ...",
        "ar": "جزء أساسي من جهاز التثبيت بالقوائم الخلفية، مما يسمح بالوقوف بأقل جهد عضلي أثناء..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.85,
        0.35,
        -0.32
      ],
      "target": [
        0.15,
        0.22,
        -0.28
      ]
    },
    "color": "#b91c1c",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Avian_Cor",
    "meshId": "Mesh_Avian_Cor",
    "systemId": "cardiovascular",
    "speciesId": "avian",
    "latinTaxonomyName": "Cor (Gallus gallus domesticus)",
    "name": {
      "en": "Avian Four-Chambered Heart",
      "ar": "قلب الطيور رباعي الحجرات"
    },
    "description": {
      "en": "Large, conical four-chambered heart with a specialized muscular right AV valve flap without chordae tendineae, beating at rapid rates.",
      "ar": "قلب مخروطي كبير رباعي التجاويف يتميز بصمام أذيني بطيني أيمن عضلي خالص خالي من الحبال الوترية وينبض بسرعة عالية."
    },
    "bloodSupply": {
      "en": "Left and right coronary arteries arising from right and left aortic sinuses.",
      "ar": "الشريانان التاجيان الأيمن والأيسر المنبثقان من الجيبين الأبهريين."
    },
    "innervation": {
      "en": "Autonomic cardiac plexus from vagus nerve and cardiac sympathetic nerves.",
      "ar": "الضفيرة القلبية الذاتية من العصب المبهم والأعصاب الودية."
    },
    "clinicalPearls": {
      "en": "The right atrioventricular valve is a single muscular flap of myocardium without tendinous cords, uniquely resistant to insufficiency.",
      "ar": "الصمام الأذيني البطيني الأيمن عبارة عن صفيحة عضلية نقية تتقلص مع البطين وتقاوم القصور بكفاءة عالية."
    },
    "commonPathologies": [
      {
        "en": "The right atrioventricular valve is a single muscular flap of myocardium without...",
        "ar": "الصمام الأذيني البطيني الأيمن عبارة عن صفيحة عضلية نقية تتقلص مع البطين وتقاوم ا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.45,
        0.25
      ],
      "target": [
        0,
        0.35,
        0.22
      ]
    },
    "color": "#dc2626",
    "emissiveColor": "#0284c7",
    "proceduralType": "heart"
  },
  {
    "id": "Mesh_Avian_AortaDexter",
    "meshId": "Mesh_Avian_AortaDexter",
    "systemId": "cardiovascular",
    "speciesId": "avian",
    "latinTaxonomyName": "Arcus aortae dexter (Aves)",
    "name": {
      "en": "Avian Right Systemic Aortic Arch",
      "ar": "قوس الأبهر الأيمن في الطيور"
    },
    "description": {
      "en": "Major systemic conduit; birds embryologically retain the RIGHT 4th aortic arch as their systemic aorta (opposite to mammals).",
      "ar": "القناة الشريانية الكبرى؛ تحتفظ الطيور جينياً بالقوس الأبهري الرابع الأيمن كشريان أبهر جهازي رئيسي (بعكس الثدييات)."
    },
    "bloodSupply": {
      "en": "Oxygenated blood under high systemic pressure from left ventricle.",
      "ar": "دم مؤكسج تحت ضغط مرتفع من البطين الأيسر."
    },
    "innervation": {
      "en": "Aortic baroreceptors innervated by vagal branches.",
      "ar": "مستقبلات الضغط الأبهرية المعصبة بفروع المبهم."
    },
    "clinicalPearls": {
      "en": "Embryological hallmark: Avian systemic aorta curves to the RIGHT over the right bronchus; mammalian aorta curves to the LEFT.",
      "ar": "علامة جنينية وتطورية كبرى: ينحني قوس أبهر الطيور نحو اليمين فوق القصبة اليمنى، بينما ينحني بالثدييات لليسار."
    },
    "commonPathologies": [
      {
        "en": "Embryological hallmark: Avian systemic aorta curves to the RIGHT over the right ...",
        "ar": "علامة جنينية وتطورية كبرى: ينحني قوس أبهر الطيور نحو اليمين فوق القصبة اليمنى، ب..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.55,
        0.15
      ],
      "target": [
        0,
        0.42,
        0.12
      ]
    },
    "color": "#ef4444",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_VenaCava",
    "meshId": "Mesh_Avian_VenaCava",
    "systemId": "cardiovascular",
    "speciesId": "avian",
    "latinTaxonomyName": "Venae cavae craniales et caudalis",
    "name": {
      "en": "Cranial & Caudal Venae Cavae",
      "ar": "الأوردة الجوفاء القحفية والذيلية"
    },
    "description": {
      "en": "Dual cranial venae cavae (left and right) and single caudal vena cava returning venous circulation directly into the right atrium.",
      "ar": "وريدان أجوفان قحفيان (أيمن وأيسر) ووريد أجوف ذيلي مفرد يفرغان العائد الوريدي في الأذين الأيمن."
    },
    "bloodSupply": {
      "en": "Systemic venous return.",
      "ar": "العائد الوريدي الجهازي العام."
    },
    "innervation": {
      "en": "Sympathetic venomotor fibers.",
      "ar": "ألياف حركية وريدية ودية."
    },
    "clinicalPearls": {
      "en": "Birds have TWO cranial venae cavae; right jugular vein is significantly larger than left and is the primary venipuncture site.",
      "ar": "تمتلك الطيور وريدين أجوفين قحفيين؛ والوريد الوداجي الأيمن أضخم بكثير من الأيسر وهو الموقع المفضل لسحب الدم."
    },
    "commonPathologies": [
      {
        "en": "Birds have TWO cranial venae cavae; right jugular vein is significantly larger t...",
        "ar": "تمتلك الطيور وريدين أجوفين قحفيين؛ والوريد الوداجي الأيمن أضخم بكثير من الأيسر و..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.45,
        0.05
      ],
      "target": [
        0.03,
        0.38,
        0.05
      ]
    },
    "color": "#2563eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_RenalPortal",
    "meshId": "Mesh_Avian_RenalPortal",
    "systemId": "cardiovascular",
    "speciesId": "avian",
    "latinTaxonomyName": "Systema portale renale",
    "name": {
      "en": "Avian Renal Portal System & Valve",
      "ar": "جهاز الباب الكلوي وصمام الباب الكلوي في الطيور"
    },
    "description": {
      "en": "Venous circuit directing hindlimb venous blood through the renal parenchyma; controlled by innervated smooth muscle renal portal valves.",
      "ar": "جهاز وريدي يوجه دم الأطراف الخلفية عبر أنسجة الكلى؛ تتحكم فيه صمامات عضلية ملساء ذاتية التعصيب."
    },
    "bloodSupply": {
      "en": "External iliac, ischiadic, and caudal mesenteric veins.",
      "ar": "الأوردة الحرقفية الخارجية والوركيات والمساريقي الذيلي."
    },
    "innervation": {
      "en": "Renal portal valve innervated by cholinergic parasympathetic fibers and adrenergic sympathetic fibers.",
      "ar": "صمام الباب الكلوي معصب بألياف كولينية نظيرة ودية وأدرينالية ودية."
    },
    "clinicalPearls": {
      "en": "Drugs injected intramuscularly into the avian leg/thigh can be routed directly to the kidneys and excreted or cause nephrotoxicity before systemic circulation.",
      "ar": "الأدوية المحقونة في عضلات أرجل الطيور قد تتجه مباشرة للكلى وتطرح قبل دورانها بالجسم أو تسبب تسمماً كلوياً حاداً."
    },
    "commonPathologies": [
      {
        "en": "Drugs injected intramuscularly into the avian leg/thigh can be routed directly t...",
        "ar": "الأدوية المحقونة في عضلات أرجل الطيور قد تتجه مباشرة للكلى وتطرح قبل دورانها بال..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.45,
        -0.05
      ],
      "target": [
        0,
        0.38,
        -0.08
      ]
    },
    "color": "#6366f1",
    "emissiveColor": "#0284c7",
    "proceduralType": "kidney"
  },
  {
    "id": "Mesh_Avian_Ingluvies",
    "meshId": "Mesh_Avian_Ingluvies",
    "systemId": "digestive",
    "speciesId": "avian",
    "latinTaxonomyName": "Ingluvies (Aves)",
    "name": {
      "en": "Crop (Ingluvies)",
      "ar": "الحوصلة (الحويصلة في الطيور)"
    },
    "description": {
      "en": "Bilobed or saccular esophageal diverticulum located at the thoracic inlet, storing and softening hard seeds before digestion.",
      "ar": "رَتج أو جيب مريئي متسع يقع عند مدخل الصدر، يعمل على تخزين وترطيب الحبوب القاسية قبل هضمها."
    },
    "bloodSupply": {
      "en": "Esophageal branches of carotid and subclavian arteries.",
      "ar": "فروع مريئية من الشرايين السباتية وتحت الترقوة."
    },
    "innervation": {
      "en": "Vagus nerve (CN X).",
      "ar": "العصب المبهم (العصب العاشر)."
    },
    "clinicalPearls": {
      "en": "Candida albicans overgrowth causes \"sour crop\" (thrush) with a thickened Turkish-towel mucosa; foreign body impaction can require cropotomy (ingluviotomy).",
      "ar": "فطر الكانديدا يسبب عَفَن الحوصلة (Sour crop) بمظهر بطانة بشكيرية؛ وانسداد الحوصلة يتطلب جراحة شق الحوصلة (Cropotomy)."
    },
    "commonPathologies": [
      {
        "en": "Candida albicans overgrowth causes \"sour crop\" (thrush) with a thickened Turkish...",
        "ar": "فطر الكانديدا يسبب عَفَن الحوصلة (Sour crop) بمظهر بطانة بشكيرية؛ وانسداد الحوصل..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.55,
        0.45
      ],
      "target": [
        0,
        0.46,
        0.4
      ]
    },
    "color": "#f59e0b",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_Proventriculus",
    "meshId": "Mesh_Avian_Proventriculus",
    "systemId": "digestive",
    "speciesId": "avian",
    "latinTaxonomyName": "Proventriculus (pars glandularis)",
    "name": {
      "en": "Proventriculus (Glandular Stomach)",
      "ar": "المعدة الغدية في الطيور"
    },
    "description": {
      "en": "Fusiform glandular stomach preceding the gizzard, containing macroscopic papillae that secrete hydrochloric acid and pepsinogen.",
      "ar": "معدة غدية مغزلية تسبق القانصة، تحتوي حليمات غدية مجهرية وعيانية تفرز حمض الهيدروكلوريك والببسينوجين."
    },
    "bloodSupply": {
      "en": "Proventricular artery (branch of celiac artery).",
      "ar": "الشريان المعدي الغدي (فرع من الشريان الزلاقي)."
    },
    "innervation": {
      "en": "Vagus nerve (dorsal and ventral proventricular branches).",
      "ar": "العصب المبهم (الفروع الظهرية والبطنية)."
    },
    "clinicalPearls": {
      "en": "Proventricular Dilatation Disease (PDD) caused by Avian Bornavirus destroys myenteric nerves, causing massive proventricular flaccid impaction.",
      "ar": "مرض تمدد المعدة الغدية (PDD) الناتج عن فيروس بورنا يصيب الأعصاب المعوية مسبباً تمدداً وانسداداً رخواً ضخماً للمعدة الغدية."
    },
    "commonPathologies": [
      {
        "en": "Proventricular Dilatation Disease (PDD) caused by Avian Bornavirus destroys myen...",
        "ar": "مرض تمدد المعدة الغدية (PDD) الناتج عن فيروس بورنا يصيب الأعصاب المعوية مسبباً ت..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.45,
        0.18
      ],
      "target": [
        -0.04,
        0.38,
        0.15
      ]
    },
    "color": "#f87171",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_Ventriculus",
    "meshId": "Mesh_Avian_Ventriculus",
    "systemId": "digestive",
    "speciesId": "avian",
    "latinTaxonomyName": "Ventriculus (Gigerium)",
    "name": {
      "en": "Gizzard (Ventriculus)",
      "ar": "القانصة (المعدة العضلية الميكانيكية)"
    },
    "description": {
      "en": "Powerful biconvex muscular organ composed of two pairs of opposing muscles (cranioventral and caudodorsal) lined by a hardened koilin layer.",
      "ar": "عضو عضلي محدب قوي يتكون من زوجين من العضلات المتقابلة ومبطن بطبقة كيراتينية صلبة تدعى كويلين لطحن الغذاء."
    },
    "bloodSupply": {
      "en": "Ventriculo-duodenal artery and gastroduodenal artery.",
      "ar": "الشريان القانصي الاثناعشري والشريان المعدي الاثناعشري."
    },
    "innervation": {
      "en": "Vagal gastric branches.",
      "ar": "الفروع المعدية للمبهم."
    },
    "clinicalPearls": {
      "en": "The tough koilin layer is formed by mucosal gland secretions solidified by acid; ingestion of grit aids in crushing tough grain coats.",
      "ar": "تتكون طبقة الكويلين من إفرازات بروتينية تتصلب بفعل الحمض؛ وابتلاع الطائر للحصى الدقيقة يسهل سحق الحبوب بالقانصة."
    },
    "commonPathologies": [
      {
        "en": "The tough koilin layer is formed by mucosal gland secretions solidified by acid;...",
        "ar": "تتكون طبقة الكويلين من إفرازات بروتينية تتصلب بفعل الحمض؛ وابتلاع الطائر للحصى ا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.38,
        0.05
      ],
      "target": [
        0,
        0.3,
        0.02
      ]
    },
    "color": "#b91c1c",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_Cloaca",
    "meshId": "Mesh_Avian_Cloaca",
    "systemId": "digestive",
    "speciesId": "avian",
    "latinTaxonomyName": "Cloaca et bursa cloacalis (Fabricii)",
    "name": {
      "en": "Avian Cloaca & Bursa of Fabricius",
      "ar": "المجمع وجراب فابريشيا في الطيور"
    },
    "description": {
      "en": "Terminal chamber divided by internal folds into coprodeum (digestive), urodeum (urinary/reproductive), and proctodeum, with dorsal bursa.",
      "ar": "غرفة نهائية مشتركة مقسمة لثلاث ردهات: المعوية، البولية التناسلية، والشرجية، وتعلوها جراب فابريشيا المناعية."
    },
    "bloodSupply": {
      "en": "Pudendal and cloacal arteries from internal iliac system.",
      "ar": "الشرايين الحياؤية والمجمعية من الجهاز الحرقفي الداخلي."
    },
    "innervation": {
      "en": "Pudendal nerve and pelvic visceral plexus.",
      "ar": "عصب الحياء والضفيرة الحشوية الحوضية."
    },
    "clinicalPearls": {
      "en": "The Bursa of Fabricius (dorsal wall of proctodeum) is the primary site of B-cell lymphocyte differentiation; targeted by Infectious Bursal Disease (Gumboro).",
      "ar": "جراب فابريشيا هو مهد تمايز الخلايا اللمفاوية البائية B-cells؛ ويستهدفه فيروس الجمبورو المسبب لتثبيط المناعة الحاد."
    },
    "commonPathologies": [
      {
        "en": "The Bursa of Fabricius (dorsal wall of proctodeum) is the primary site of B-cell...",
        "ar": "جراب فابريشيا هو مهد تمايز الخلايا اللمفاوية البائية B-cells؛ ويستهدفه فيروس الج..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.35,
        -0.22
      ],
      "target": [
        0,
        0.28,
        -0.2
      ]
    },
    "color": "#d97706",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_Syrinx",
    "meshId": "Mesh_Avian_Syrinx",
    "systemId": "respiratory",
    "speciesId": "avian",
    "latinTaxonomyName": "Syrinx (Aves)",
    "name": {
      "en": "Avian Syrinx (Vocal Organ)",
      "ar": "المصفار (عضو الصوت في الطيور)"
    },
    "description": {
      "en": "Specialized vocal organ situated at the bifurcation of the trachea into primary bronchi, with lateral/medial tympaniform membranes.",
      "ar": "عضو تصويت متخصص يقع عند مفرق تشعب الرغامي للقصبات الرئيسية، يضم أغشية طبلية تهتز لإنتاج التغريد."
    },
    "bloodSupply": {
      "en": "Tracheobronchial branches of carotids and cranial pulmonary vessels.",
      "ar": "فروع رغامية قصبية من السباتي والأوعية الرئوية القحفية."
    },
    "innervation": {
      "en": "Tracheolateralis and syringohyoideus nerves from hypoglossal (CN XII / hypoglossocervical nerve).",
      "ar": "العصب الرغامي الجانبي والمصفاري المشتقان من تحت اللسان والعنق."
    },
    "clinicalPearls": {
      "en": "Aspergillus granulomas frequently lodge at the syrinx, causing change in vocalization (voice loss/dysphonia) and asphyxiation.",
      "ar": "حبيبات فطر الرشاشيات تستقر كثيراً في المصفار مسببة تغير صوت الطائر (بحة أو فقدان الصوت) وصعوبة تنفس حادة."
    },
    "commonPathologies": [
      {
        "en": "Aspergillus granulomas frequently lodge at the syrinx, causing change in vocaliz...",
        "ar": "حبيبات فطر الرشاشيات تستقر كثيراً في المصفار مسببة تغير صوت الطائر (بحة أو فقدان..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.48,
        0.28
      ],
      "target": [
        0,
        0.42,
        0.25
      ]
    },
    "color": "#bae6fd",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_Pulmo",
    "meshId": "Mesh_Avian_Pulmo",
    "systemId": "respiratory",
    "speciesId": "avian",
    "latinTaxonomyName": "Pulmones (Aves)",
    "name": {
      "en": "Avian Rigid Parabronchial Lungs",
      "ar": "رئتا الطيور الصلبة ذات القصبات المتوازية"
    },
    "description": {
      "en": "Compact, non-distensible, rigid lungs recessed into thoracic ribs; continuous unidirectional airflow through tertiary parabronchi and air capillaries.",
      "ar": "رئتان مدمجتان صلبتان غير قابلتان للتمدد محفورتان بين أضلاع الصدر؛ تدفق هوائي مستمر أحادي الاتجاه عبر القصبات المتوازية."
    },
    "bloodSupply": {
      "en": "Pulmonary arteries delivering dark venous blood; cross-current gas exchange with air capillaries.",
      "ar": "شرايين رئوية تنقل دماً وريدياً؛ وتبادل غازي بنظام التيار المتصالب مع الشعيرات الهوائية."
    },
    "innervation": {
      "en": "Pulmonary branches of the vagus nerve.",
      "ar": "الفروع الرئوية للعصب المبهم."
    },
    "clinicalPearls": {
      "en": "Avian lungs do not expand or contract during breathing; air sacs act as bellows pumping air through rigid parabronchi in a unidirectional cycle.",
      "ar": "لا تتمدد رئتا الطيور ولا تنكمشان؛ بل تعمل الأكياس الهوائية كمنفاخ يدفع الهواء في دورة مستمرة أحادية الاتجاه عبر القصبات."
    },
    "commonPathologies": [
      {
        "en": "Avian lungs do not expand or contract during breathing; air sacs act as bellows ...",
        "ar": "لا تتمدد رئتا الطيور ولا تنكمشان؛ بل تعمل الأكياس الهوائية كمنفاخ يدفع الهواء في..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.52,
        0.22
      ],
      "target": [
        0,
        0.44,
        0.2
      ]
    },
    "color": "#fda4af",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Avian_SacciPneumaticiThoracici",
    "meshId": "Mesh_Avian_SacciPneumaticiThoracici",
    "systemId": "respiratory",
    "speciesId": "avian",
    "latinTaxonomyName": "Sacci pneumatici thoracici",
    "name": {
      "en": "Cranial & Caudal Thoracic Air Sacs",
      "ar": "الأكياس الهوائية الصدرية القحفية والذيلية"
    },
    "description": {
      "en": "Thin, avascular membranous reservoirs acting as volume pumps that generate continuous unidirectional air flow across parabronchi.",
      "ar": "خزانات غشائية رقيقة قليلة الأوعية تعمل كمضخات حجمية لتوليد تدفق هوائي مستمر أحادي الاتجاه عبر القصبات."
    },
    "bloodSupply": {
      "en": "Minimal systemic capillary network (no gas exchange occurs across air sac walls).",
      "ar": "شبكة شعيرات جهازية ضئيلة (لا يحدث أي تبادل غازي عبر جدران الأكياس الهوائية)."
    },
    "innervation": {
      "en": "Sensory vagal receptor fibers.",
      "ar": "ألياف مستقبلات حسية مبهمية."
    },
    "clinicalPearls": {
      "en": "Air sacs lack gas-exchanging capillaries; airsacculitis causes cloudy yellow purulent exudates in poultry respiratory disease complexes (CRD).",
      "ar": "تفتقر الأكياس للشعيرات الغازية؛ ويسبب التهاب الأكياس الهوائية إفرازات قيحية صفراء عكرة في مرض التنفس المزمن (CRD)."
    },
    "commonPathologies": [
      {
        "en": "Air sacs lack gas-exchanging capillaries; airsacculitis causes cloudy yellow pur...",
        "ar": "تفتقر الأكياس للشعيرات الغازية؛ ويسبب التهاب الأكياس الهوائية إفرازات قيحية صفرا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.45,
        0.15
      ],
      "target": [
        0,
        0.38,
        0.12
      ]
    },
    "color": "#bae6fd",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_SaccusPneumaticusAbdominalis",
    "meshId": "Mesh_Avian_SaccusPneumaticusAbdominalis",
    "systemId": "respiratory",
    "speciesId": "avian",
    "latinTaxonomyName": "Sacci pneumatici abdominales",
    "name": {
      "en": "Abdominal Air Sacs & Pneumatized Femur",
      "ar": "الأكياس الهوائية البطنية والعظام الهوائية"
    },
    "description": {
      "en": "The largest pair of air sacs, extending between abdominal viscera and sending diverticula into the synsacrum and pneumatic pelvic limb bones.",
      "ar": "أضخم زوج من الأكياس الهوائية، يمتد بين أحشاء البطن ويرسل رتوجاً هوائية داخل العجز المتحد وعظام الفخذ المجوفة."
    },
    "bloodSupply": {
      "en": "Abdominal visceral microvessels.",
      "ar": "أوعية دموية حشوية دقيقة."
    },
    "innervation": {
      "en": "Vagal autonomic plexus.",
      "ar": "الضفيرة الذاتية المبهمية."
    },
    "clinicalPearls": {
      "en": "Compound fractures of pneumatic bones (e.g., humerus or femur) communicate directly with the respiratory system; cleaning can flush fluids into airways.",
      "ar": "الكسور المضاعفة للعظام الهوائية (كالعضد أو الفخذ) تتصل مباشرة بالجهاز التنفسي؛ وغسل الجرح بتهور قد يغرق الطائر رئوياً."
    },
    "commonPathologies": [
      {
        "en": "Compound fractures of pneumatic bones (e.g., humerus or femur) communicate direc...",
        "ar": "الكسور المضاعفة للعظام الهوائية (كالعضد أو الفخذ) تتصل مباشرة بالجهاز التنفسي؛ و..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.42,
        -0.08
      ],
      "target": [
        0,
        0.34,
        -0.05
      ]
    },
    "color": "#7dd3fc",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_Cerebrum",
    "meshId": "Mesh_Avian_Cerebrum",
    "systemId": "nervous",
    "speciesId": "avian",
    "latinTaxonomyName": "Cerebrum et hyperpallium (Aves)",
    "name": {
      "en": "Avian Cerebrum & Hyperpallium (Wulst)",
      "ar": "المخ والنتوء البالي في الطيور"
    },
    "description": {
      "en": "Lissencephalic (smooth-surfaced) cerebral hemispheres featuring an elevated dorsal swelling (hyperpallium/Wulst) mediating complex vision and magnetoreception.",
      "ar": "نصفا كرة مخيان أملسان خاليان من التلافيف يتميزان بانتفاخ ظهري بارز يدعى الـ Wulst ينظم الإبصار المعقد والاستقبال المغناطيسي الملاحي."
    },
    "bloodSupply": {
      "en": "Internal carotid arteries and rete mirabile ophthalmicum.",
      "ar": "الشرايين السباتية الداخلية والشبكة العجيبة العينية."
    },
    "innervation": {
      "en": "Cranial nerves I, II, and forebrain circuits.",
      "ar": "الأعصاب القحفية الأول والثاني ودارات الدماغ الأمامي."
    },
    "clinicalPearls": {
      "en": "The Wulst region processes binocular visual input and magnetic field direction, guiding long-distance seasonal migrations.",
      "ar": "تعالج منطقة Wulst الإبصار ثنائي العينين واتجاه خطوط المجال المغناطيسي للأرض لتوجيه الهجرة الموسمية للطيور."
    },
    "commonPathologies": [
      {
        "en": "The Wulst region processes binocular visual input and magnetic field direction, ...",
        "ar": "تعالج منطقة Wulst الإبصار ثنائي العينين واتجاه خطوط المجال المغناطيسي للأرض لتوج..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.55,
        0.65,
        0.55
      ],
      "target": [
        0,
        0.58,
        0.5
      ]
    },
    "color": "#fbcfe8",
    "emissiveColor": "#0284c7",
    "proceduralType": "brain"
  },
  {
    "id": "Mesh_Avian_Cerebellum",
    "meshId": "Mesh_Avian_Cerebellum",
    "systemId": "nervous",
    "speciesId": "avian",
    "latinTaxonomyName": "Cerebellum (Aves)",
    "name": {
      "en": "Avian Foliated Cerebellum",
      "ar": "المخيخ الورقي في الطيور"
    },
    "description": {
      "en": "Prominent, heavily-foliated median vermis with tiny vestigial floccular auricles, coordinating aerodynamic equilibrium and wings.",
      "ar": "دودة مخيخية مركزية بارزة ومطوية بأوراق عميقة مع ندفتين جانبيتين، لتنسيق التوازن الإيروديناميكي الديناميكي للجناحين."
    },
    "bloodSupply": {
      "en": "Cerebellar arteries from basilar/carotid rete.",
      "ar": "الشرايين المخيخية من الشبكة القاعدية والسباتية."
    },
    "innervation": {
      "en": "Vast vestibular cerebellar tracts coordinating balance.",
      "ar": "مسارات مخيخية دهليزية ضخمة لتنسيق التوازن الحركي."
    },
    "clinicalPearls": {
      "en": "Vitamin E deficiency in growing chicks causes \"Crazy Chick Disease\" (Avian Encephalomalacia) with cerebellar hemorrhage, ataxia, and retroflexion of head.",
      "ar": "نقص فيتامين هـ في الكتاكيت يسبب \"مرض الكتكوت المجنون\" (نخر المخيخ) مع ترنح والتواء الرأس للخلف وفقدان التوازن."
    },
    "commonPathologies": [
      {
        "en": "Vitamin E deficiency in growing chicks causes \"Crazy Chick Disease\" (Avian Encep...",
        "ar": "نقص فيتامين هـ في الكتاكيت يسبب \"مرض الكتكوت المجنون\" (نخر المخيخ) مع ترنح والتو..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.55,
        0.65,
        0.42
      ],
      "target": [
        0,
        0.58,
        0.4
      ]
    },
    "color": "#f472b6",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_LobiOptici",
    "meshId": "Mesh_Avian_LobiOptici",
    "systemId": "nervous",
    "speciesId": "avian",
    "latinTaxonomyName": "Lobi optici (Tectum opticum)",
    "name": {
      "en": "Avian Optic Lobes (Tectum)",
      "ar": "الفصان البصريان (السقف البصري في الطيور)"
    },
    "description": {
      "en": "Enormous paired lateral hemispherical structures dominating the midbrain, processing high-acuity avian stereoscopic vision.",
      "ar": "بنيتان نصفيتا كرة وحشيتان ضخمتان تهيمنان على الدماغ المتوسط، تعالجان الرؤية الفائقة والدقيقة للطيور."
    },
    "bloodSupply": {
      "en": "Tectal branches of cerebral arteries.",
      "ar": "فروع سقفية من الشرايين المخية."
    },
    "innervation": {
      "en": "Direct, massive decussated optic nerve fibers (CN II).",
      "ar": "ألياف متصالبة ضخمة مباشرة من العصب البصري (العصب الثاني)."
    },
    "clinicalPearls": {
      "en": "Optic lobes are relatively larger in birds than in any other vertebrate class, reflecting supreme visual acuity and color perception (including UVA).",
      "ar": "الفصوص البصرية في الطيور هي الأكبر بين جميع الفقاريات، مما يمنحها حدة بصر خارقة ورؤية للأشعة فوق البنفسجية UVA."
    },
    "commonPathologies": [
      {
        "en": "Optic lobes are relatively larger in birds than in any other vertebrate class, r...",
        "ar": "الفصوص البصرية في الطيور هي الأكبر بين جميع الفقاريات، مما يمنحها حدة بصر خارقة ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.55,
        0.6,
        0.48
      ],
      "target": [
        0.08,
        0.54,
        0.46
      ]
    },
    "color": "#e879f9",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_PlexusBrachialis",
    "meshId": "Mesh_Avian_PlexusBrachialis",
    "systemId": "nervous",
    "speciesId": "avian",
    "latinTaxonomyName": "Plexus brachialis (Aves)",
    "name": {
      "en": "Brachial Plexus & Wing Innervation",
      "ar": "الضفيرة العضدية وأعصاب الجناح"
    },
    "description": {
      "en": "Formed by spinal nerves C13-T2, giving rise to the huge pectoralis, supracoracoideus, and radial nerves driving wing aerodynamics.",
      "ar": "تتشكل من الأعصاب الشوكية C13-T2، وتنبثق منها أعصاب العضلات الصدرية وفوق الغرابية والكعبري لقيادة الجناح."
    },
    "bloodSupply": {
      "en": "Subclavian and pectoral vascular trunks.",
      "ar": "الجذوع الوعائية تحت الترقوية والصدرية."
    },
    "innervation": {
      "en": "Motor and sensory innervation of the pectoral girdle and thoracic limb.",
      "ar": "تعصيب حركي وحسي لحزام الصدر والطرف الجناحي."
    },
    "clinicalPearls": {
      "en": "Marek's Disease (alphaherpesvirus) causes unilateral lymphomatous enlargement of brachial or sciatic nerve roots, causing asymmetric wing/leg drop.",
      "ar": "مرض الماريك (فيروس هربس) يسبب تضخماً لمفاوياً في أعصاب الضفيرة العضدية والورك مسبباً تدلياً أحادي الجانب للجناح أو الرجل."
    },
    "commonPathologies": [
      {
        "en": "Marek's Disease (alphaherpesvirus) causes unilateral lymphomatous enlargement of...",
        "ar": "مرض الماريك (فيروس هربس) يسبب تضخماً لمفاوياً في أعصاب الضفيرة العضدية والورك مس..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.52,
        0.35
      ],
      "target": [
        0.12,
        0.45,
        0.3
      ]
    },
    "color": "#facc15",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_Ren",
    "meshId": "Mesh_Avian_Ren",
    "systemId": "urogenital",
    "speciesId": "avian",
    "latinTaxonomyName": "Renes (Aves)",
    "name": {
      "en": "Avian Tri-Lobed Kidneys",
      "ar": "كلى الطيور ثلاثية الفصوص"
    },
    "description": {
      "en": "Elongated, brown kidneys divided into cranial, middle, and caudal divisions nestled deeply within the ventral depressions of the synsacrum.",
      "ar": "كليتان بنيتان مستطيلتان مقسمتان لثلاثة أجزاء (قحفي، متوسط، ذيلي) مستقرتان بعمق في حفر العجز المتحد."
    },
    "bloodSupply": {
      "en": "Cranial, middle, and caudal renal arteries; drained by renal portal system and renal veins into caudal vena cava.",
      "ar": "شرايين كلوية قحفية ومتوسطة وذيلية؛ مع نظام الباب الكلوي وتصريف في الأجوف الذيلي."
    },
    "innervation": {
      "en": "Renal autonomic plexus.",
      "ar": "الضفيرة الكلوية الذاتية."
    },
    "clinicalPearls": {
      "en": "Avian kidneys possess both reptilian-type (cortical, no loops of Henle) and mammalian-type nephrons; excrete nitrogen as semi-solid uric acid paste.",
      "ar": "تضم كلى الطيور نوعين من النيفرونات: زواحفية (بدون عرى هنلي) وثديية؛ وتفرز الفضلات النيتروجينية كحمض بول أبيض شبه صلب."
    },
    "commonPathologies": [
      {
        "en": "Avian kidneys possess both reptilian-type (cortical, no loops of Henle) and mamm...",
        "ar": "تضم كلى الطيور نوعين من النيفرونات: زواحفية (بدون عرى هنلي) وثديية؛ وتفرز الفضلا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.45,
        0.05
      ],
      "target": [
        0,
        0.38,
        0.02
      ]
    },
    "color": "#7f1d1d",
    "emissiveColor": "#0284c7",
    "proceduralType": "kidney"
  },
  {
    "id": "Mesh_Avian_OvariumSinistrum",
    "meshId": "Mesh_Avian_OvariumSinistrum",
    "systemId": "urogenital",
    "speciesId": "avian",
    "latinTaxonomyName": "Ovarium sinistrum et oviductus",
    "name": {
      "en": "Avian Left Ovary & Oviduct",
      "ar": "المبيض وقناة البيض اليسرى في الطيور"
    },
    "description": {
      "en": "In most female birds, only the LEFT ovary and oviduct develop fully; resembles a bunch of grapes with developing yolky follicles.",
      "ar": "في معظم إناث الطيور يتطور المبيض وقناة البيض في الجانب الأيسر فقط؛ ويشبه عنقود العنب بجريباته الصفراء النامية."
    },
    "bloodSupply": {
      "en": "Ovarian and oviductal arteries (cranial, middle, caudal from aorta/iliacs).",
      "ar": "الشرايين المبيضية والبيضية (القحفية والمتوسطة والذيلية من الأبهر والحرقفي)."
    },
    "innervation": {
      "en": "Ovarian and pelvic autonomic nerve networks.",
      "ar": "الشبكات العصبية الذاتية المبيضية والحوضية."
    },
    "clinicalPearls": {
      "en": "The oviduct has five distinct zones: infundibulum (fertilization), magnum (albumen), isthmus (shell membranes), uterus (shell gland), and vagina; site of egg binding.",
      "ar": "تتكون قناة البيض من 5 مناطق: القمع (التلقيح)، المعظم (الزلال)، البرزخ (الغشائين)، الرحم (غدة القشرة)، والمهبل؛ وموقع احتباس البيض."
    },
    "commonPathologies": [
      {
        "en": "The oviduct has five distinct zones: infundibulum (fertilization), magnum (album...",
        "ar": "تتكون قناة البيض من 5 مناطق: القمع (التلقيح)، المعظم (الزلال)، البرزخ (الغشائين)..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.45,
        0.08
      ],
      "target": [
        -0.05,
        0.38,
        0.05
      ]
    },
    "color": "#fbcfe8",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_Testis",
    "meshId": "Mesh_Avian_Testis",
    "systemId": "urogenital",
    "speciesId": "avian",
    "latinTaxonomyName": "Testes (Aves)",
    "name": {
      "en": "Avian Paired Intra-Abdominal Testes",
      "ar": "الخصيتان البطنيتان في ذكور الطيور"
    },
    "description": {
      "en": "Paired oval bean-like testes located entirely within the abdominal cavity at the cranial pole of each kidney; no scrotum.",
      "ar": "خصيتان بيضاويتان متناظرتان تقعان بالكامل داخل تجويف البطن عند القطب القحفي للكليتين بدون وجود كيس صفن."
    },
    "bloodSupply": {
      "en": "Testicular arteries from cranial renal or aorta.",
      "ar": "الشرايين الخصوية من الشريان الكلوي القحفي أو الأبهر."
    },
    "innervation": {
      "en": "Testicular autonomic plexus.",
      "ar": "الضفيرة الخصوية الذاتية."
    },
    "clinicalPearls": {
      "en": "Avian testes remain intra-abdominal at core body temperature (40-42°C); during breeding season, testicular volume expands over 300-fold.",
      "ar": "تستقر الخصيتان داخل البطن بحرارة الجسم (40-42°م)؛ ويزداد حجمهما بمقدار 300 ضعف في موسم التناسل."
    },
    "commonPathologies": [
      {
        "en": "Avian testes remain intra-abdominal at core body temperature (40-42°C); during b...",
        "ar": "تستقر الخصيتان داخل البطن بحرارة الجسم (40-42°م)؛ ويزداد حجمهما بمقدار 300 ضعف ف..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.45,
        0.12
      ],
      "target": [
        0.04,
        0.4,
        0.1
      ]
    },
    "color": "#fef08a",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_Ureter",
    "meshId": "Mesh_Avian_Ureter",
    "systemId": "urogenital",
    "speciesId": "avian",
    "latinTaxonomyName": "Ureter et ostium ureteris",
    "name": {
      "en": "Avian Ureters & Urodeum Entry",
      "ar": "الحالبان ومصب الردهة البولية في الطيور"
    },
    "description": {
      "en": "Straight ducts conveying uric acid crystals from the renal lobes directly to the urodeum; birds have NO urinary bladder.",
      "ar": "قناتان مستقيمتان تنقلان بلورات حمض البول من فصوص الكلى مباشرة إلى الردهة البولية؛ والطيور خالية من المثانة البولية."
    },
    "bloodSupply": {
      "en": "Ureteral branches of renal and internal iliac arteries.",
      "ar": "فروع حالبية من الشرايين الكلوية والحرقفية."
    },
    "innervation": {
      "en": "Pelvic autonomic plexus.",
      "ar": "الضفيرة الذاتية الحوضية."
    },
    "clinicalPearls": {
      "en": "Birds have NO urinary bladder (adaptation to reduce flight weight); urine flows directly into the urodeum and undergoes retroperistalsis into the coprodeum/rectum for water resorption.",
      "ar": "تفتقر الطيور للمثانة البولية تماماً (لتخفيف وزن الطيران)؛ وينساب البول للردهة البولية ثم ينعكس للأمعاء لامتصاص الماء."
    },
    "commonPathologies": [
      {
        "en": "Birds have NO urinary bladder (adaptation to reduce flight weight); urine flows ...",
        "ar": "تفتقر الطيور للمثانة البولية تماماً (لتخفيف وزن الطيران)؛ وينساب البول للردهة ال..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.38,
        -0.15
      ],
      "target": [
        0,
        0.32,
        -0.12
      ]
    },
    "color": "#f59e0b",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_SternumKeel",
    "meshId": "Mesh_Avian_SternumKeel",
    "systemId": "skeletal",
    "speciesId": "avian",
    "latinTaxonomyName": "Sternum et carina sterni (Aves)",
    "name": {
      "en": "Sternum & Keel (Carina Sterni)",
      "ar": "عظم القص والجؤجؤ (العارضة القصية)"
    },
    "description": {
      "en": "Massive ventral breastbone with a deep blade-like ventral keel (carina) providing extensive anchor surfaces for flight muscles.",
      "ar": "عظم صدر بطني هائل مزود بعارضة جؤجؤية شبيهة بنصل السيف توفر مساحة ارتكاز كبرى لعضلات الطيران."
    },
    "bloodSupply": {
      "en": "Pectoral and internal thoracic arteries.",
      "ar": "الشرايين الصدرية والداخلية."
    },
    "innervation": {
      "en": "Thoracic cutaneous nerves.",
      "ar": "الأعصاب الجلدية الصدرية."
    },
    "clinicalPearls": {
      "en": "Body Condition Scoring in birds is performed by palpating muscle mass on either side of the keel; sharp prominent keel indicates severe emaciation/wasting.",
      "ar": "تقييم اللياقة والكتلة الجسمية للطيور يتم بجس اللحم حول الجؤجؤ؛ والجؤجؤ الحاد كالسيف يشير إلى الهزال الشديد."
    },
    "commonPathologies": [
      {
        "en": "Body Condition Scoring in birds is performed by palpating muscle mass on either ...",
        "ar": "تقييم اللياقة والكتلة الجسمية للطيور يتم بجس اللحم حول الجؤجؤ؛ والجؤجؤ الحاد كال..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.45,
        0.3
      ],
      "target": [
        0,
        0.32,
        0.28
      ]
    },
    "color": "#f3f4f6",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_Furcula",
    "meshId": "Mesh_Avian_Furcula",
    "systemId": "skeletal",
    "speciesId": "avian",
    "latinTaxonomyName": "Furcula et canalis triosseus",
    "name": {
      "en": "Wishbone (Furcula) & Triosseal Canal",
      "ar": "عظم الترقوة المندمج (الشوكة/عظم التمني) والقناة الثلاثية"
    },
    "description": {
      "en": "V-shaped bone formed by the midline fusion of clavicles, functioning as an elastic flight spring during the wing stroke cycle.",
      "ar": "عظم على شكل V ناتج عن التحام عظمي الترقوة، يعمل كزنبرك مرن يختزن الطاقة أثناء خفق الأجنحة."
    },
    "bloodSupply": {
      "en": "Superficial cervical and clavicular branches.",
      "ar": "فروع عنقية سطحية وترقوية."
    },
    "innervation": {
      "en": "Pectoral nerve branches.",
      "ar": "فروع الأعصاب الصدرية."
    },
    "clinicalPearls": {
      "en": "The triosseal canal (formed by scapula, coracoid, and clavicle) acts as an anatomical pulley through which the supracoracoideus tendon passes to lift the wing.",
      "ar": "القناة ثلاثية العظام (لوح الكتف، الغرابي، والترقوة) تعمل كبكرة حيوية يمر منها وتر رفع الجناح للأعلى."
    },
    "commonPathologies": [
      {
        "en": "The triosseal canal (formed by scapula, coracoid, and clavicle) acts as an anato...",
        "ar": "القناة ثلاثية العظام (لوح الكتف، الغرابي، والترقوة) تعمل كبكرة حيوية يمر منها وت..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.55,
        0.38
      ],
      "target": [
        0,
        0.46,
        0.35
      ]
    },
    "color": "#e5e7eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_Synsacrum",
    "meshId": "Mesh_Avian_Synsacrum",
    "systemId": "skeletal",
    "speciesId": "avian",
    "latinTaxonomyName": "Synsacrum (Aves)",
    "name": {
      "en": "Avian Synsacrum & Fused Pelvis",
      "ar": "العجز المتحد وحزام الحوض الملتحم"
    },
    "description": {
      "en": "Rigid composite bone formed by fusion of caudal thoracic, all lumbar, all sacral, and cranial caudal vertebrae with the ilia.",
      "ar": "هيكل عظمي مركب صلب ناتج عن التحام الفقرات الصدرية الخلفية والقطنية والعجزية والذيلية مع عظام الحرقفة."
    },
    "bloodSupply": {
      "en": "Internal iliac and median sacral arteries.",
      "ar": "الشرايين الحرقفية الداخلية والشريان العجزي المتوسط."
    },
    "innervation": {
      "en": "Lumbosacral plexus.",
      "ar": "الضفيرة القطنية العجزية."
    },
    "clinicalPearls": {
      "en": "Fused rigidity eliminates trunk spinal motion, providing an unyielding framework to absorb bipedal landing and takeoff forces.",
      "ar": "صلابة الالتحام تلغي حركة الجذع لتوفر منصة دعم ثابتة وقوية لامتصاص صدمات الهبوط والإقلاع."
    },
    "commonPathologies": [
      {
        "en": "Fused rigidity eliminates trunk spinal motion, providing an unyielding framework...",
        "ar": "صلابة الالتحام تلغي حركة الجذع لتوفر منصة دعم ثابتة وقوية لامتصاص صدمات الهبوط و..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.45,
        -0.05
      ],
      "target": [
        0,
        0.4,
        -0.05
      ]
    },
    "color": "#f5f5f4",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_Tibiotarsus",
    "meshId": "Mesh_Avian_Tibiotarsus",
    "systemId": "skeletal",
    "speciesId": "avian",
    "latinTaxonomyName": "Tibiotarsus et tarsometatarsus",
    "name": {
      "en": "Avian Tibiotarsus & Tarsometatarsus",
      "ar": "عظم الظنبوب الرصغي ومشت القدم في الطيور"
    },
    "description": {
      "en": "The avian drumstick bone: fusion of tibia with proximal tarsals (tibiotarsus), articulating with the fused tarsometatarsus at an intratarsal joint.",
      "ar": "عظم ساق الطائر: التحام القصبة مع عظام الرصغ الدانية (الظنبوب الرصغي) متمفصلاً مع مشط القدم في مفصل بين رصغي."
    },
    "bloodSupply": {
      "en": "Cranial tibial artery and superficial lateral vessels.",
      "ar": "الشريان الظنبوبي القحفي والأوعية الوحشية السطحية."
    },
    "innervation": {
      "en": "Tibial and common fibular nerves.",
      "ar": "العصبان الظنبوبي والشظوي المشترك."
    },
    "clinicalPearls": {
      "en": "Tibial dyschondroplasia in fast-growing broilers causes abnormal cartilage plug retention, bowing of the tibiotarsus, and severe lameness.",
      "ar": "خلل التغضرف الظنبوبي في دجاج التسمين يسبب بقاء كتل غضروفية غير متعظمة وانحناء الساق وعرجاً شديداً."
    },
    "commonPathologies": [
      {
        "en": "Tibial dyschondroplasia in fast-growing broilers causes abnormal cartilage plug ...",
        "ar": "خلل التغضرف الظنبوبي في دجاج التسمين يسبب بقاء كتل غضروفية غير متعظمة وانحناء ال..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.22,
        -0.15
      ],
      "target": [
        0.12,
        0.12,
        -0.12
      ]
    },
    "color": "#e5e7eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Avian_PectoralisMajor",
    "meshId": "Mesh_Avian_PectoralisMajor",
    "systemId": "muscular",
    "speciesId": "avian",
    "latinTaxonomyName": "Musculus pectoralis (Aves)",
    "name": {
      "en": "Pectoralis Major (Downstroke Muscle)",
      "ar": "العضلة الصدرية الكبرى (عضلة الخفق الهابط)"
    },
    "description": {
      "en": "Massive superficial breast muscle accounting for 15-25% of total body weight; contracts to drive the powerful flight downstroke.",
      "ar": "عضلة الصدر السطحية الهائلة وتشكل 15-25% من وزن الطائر؛ تتقلص لتوفر القوة لخفقة الجناح الهابطة الدافعة للطيران."
    },
    "bloodSupply": {
      "en": "Pectoral artery (branch of subclavian).",
      "ar": "الشريان الصدري (فرع من تحت الترقوة)."
    },
    "innervation": {
      "en": "Pectoral nerves from brachial plexus.",
      "ar": "الأعصاب الصدرية من الضفيرة العضدية."
    },
    "clinicalPearls": {
      "en": "Commercial \"chicken breast\"; prime location for intramuscular injections in birds; deep pectoral myopathy (Green Muscle Disease) occurs from ischemia after vigorous flapping.",
      "ar": "صدر الدجاج التجاري؛ والموقع المفضل للحقن العضلي في الطيور؛ ويحدث به مرض العضلة الخضراء التنخري إثر نقص التروية بعد الرفرفة العنيفة."
    },
    "commonPathologies": [
      {
        "en": "Commercial \"chicken breast\"; prime location for intramuscular injections in bird...",
        "ar": "صدر الدجاج التجاري؛ والموقع المفضل للحقن العضلي في الطيور؛ ويحدث به مرض العضلة ا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.45,
        0.3
      ],
      "target": [
        0.08,
        0.38,
        0.28
      ]
    },
    "color": "#be123c",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Avian_Supracoracoideus",
    "meshId": "Mesh_Avian_Supracoracoideus",
    "systemId": "muscular",
    "speciesId": "avian",
    "latinTaxonomyName": "Musculus supracoracoideus",
    "name": {
      "en": "Supracoracoideus (Elevator Muscle)",
      "ar": "العضلة فوق الغرابية (عضلة رفع الجناح)"
    },
    "description": {
      "en": "Deep breast muscle lying directly against the keel beneath pectoralis major, lifting the wing via its tendon running through the triosseal canal.",
      "ar": "عضلة صدرية عميقة ملاصقة لنصل الجؤجؤ، ترفع الجناح للأعلى عبر وتر يمر خلال القناة ثلاثية العظام كبكرة."
    },
    "bloodSupply": {
      "en": "Deep pectoral artery.",
      "ar": "الشريان الصدري العميق."
    },
    "innervation": {
      "en": "Supracoracoideus nerve from brachial plexus.",
      "ar": "العصب فوق الغرابي من الضفيرة العضدية."
    },
    "clinicalPearls": {
      "en": "Its tendon acts as a natural pulley over the dorsal shoulder, enabling ventral breast musculature to lift the wing dorsal without adding top-heavy weight.",
      "ar": "يعمل وترها كبكرة فوق الكتف، مما يسمح لعضلات الصدر السفلية برفع الجناح للأعلى دون زيادة وزن ظهر الطائر."
    },
    "commonPathologies": [
      {
        "en": "Its tendon acts as a natural pulley over the dorsal shoulder, enabling ventral b...",
        "ar": "يعمل وترها كبكرة فوق الكتف، مما يسمح لعضلات الصدر السفلية برفع الجناح للأعلى دون..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.42,
        0.28
      ],
      "target": [
        0.05,
        0.36,
        0.26
      ]
    },
    "color": "#9f1239",
    "emissiveColor": "#0284c7",
    "proceduralType": "heart"
  },
  {
    "id": "Mesh_Avian_Gastrocnemius",
    "meshId": "Mesh_Avian_Gastrocnemius",
    "systemId": "muscular",
    "speciesId": "avian",
    "latinTaxonomyName": "Musculus gastrocnemius (Aves)",
    "name": {
      "en": "Avian Gastrocnemius Complex",
      "ar": "مركب العضلة التوأمية الساقية في الطيور"
    },
    "description": {
      "en": "Large multi-headed (lateral, intermediate, medial heads) muscle covering the tibiotarsus, extending the intertarsal hock joint.",
      "ar": "عضلة ضخمة متعددة الرؤوس (وحشي، أوسط، إنسي) تغطي الظنبوب الرصغي وتبسط مفصل العرقوب."
    },
    "bloodSupply": {
      "en": "Popliteal and tibial arteries.",
      "ar": "الشرايين المأبضية والظنبوبية."
    },
    "innervation": {
      "en": "Tibial nerve.",
      "ar": "العصب الظنبوبي."
    },
    "clinicalPearls": {
      "en": "Slipped Tendon (Perosis) in chicks caused by manganese or choline deficiency causes the gastrocnemius tendon to luxate off the intercondylar groove.",
      "ar": "مرض انزلاق الوتر (Perosis) الناتج عن نقص المنجنيز يسبب خلع وتر العضلة التوأمية الساقية خارج أخدود اللقمتين وعجز الساق."
    },
    "commonPathologies": [
      {
        "en": "Slipped Tendon (Perosis) in chicks caused by manganese or choline deficiency cau...",
        "ar": "مرض انزلاق الوتر (Perosis) الناتج عن نقص المنجنيز يسبب خلع وتر العضلة التوأمية ا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.25,
        -0.15
      ],
      "target": [
        0.12,
        0.16,
        -0.12
      ]
    },
    "color": "#b91c1c",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Avian_AmbientMuscle",
    "meshId": "Mesh_Avian_AmbientMuscle",
    "systemId": "muscular",
    "speciesId": "avian",
    "latinTaxonomyName": "Musculus ambiens et apparatus flexorius",
    "name": {
      "en": "Ambiens & Perching Tendon Mechanism",
      "ar": "عضلة الجاثم والآلية الميكانيكية لثني الأصابع"
    },
    "description": {
      "en": "Originates on pubis; its tendon traverses the cranial stifle and joins digital flexors, passively locking toes around branches when resting.",
      "ar": "تنشأ من العانة؛ ويمر وترها أمام الركبة ليلتحم بأوتار الأصابع القابضة، مما يقفل الأصابع آلياً حول الغصن عند النوم."
    },
    "bloodSupply": {
      "en": "Femoral and cranial crural arteries.",
      "ar": "الشرايين الفخذية والساقية القحفية."
    },
    "innervation": {
      "en": "Femoral nerve (CN L2-L3 equivalent).",
      "ar": "العصب الفخذي."
    },
    "clinicalPearls": {
      "en": "Automatic perching mechanism: when the bird settles its weight on a perch, bending of the knee and hock mechanically tensions tendons, locking toes without muscular energy.",
      "ar": "آلية الجثوم التلقائية: انثناء الركبة والعرقوب تحت ثقل جسم الطائر يشد الأوتار فيقفل الأصابع حول الغصن دون أي جهد عضلي."
    },
    "commonPathologies": [
      {
        "en": "Automatic perching mechanism: when the bird settles its weight on a perch, bendi...",
        "ar": "آلية الجثوم التلقائية: انثناء الركبة والعرقوب تحت ثقل جسم الطائر يشد الأوتار فيق..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.65,
        0.32,
        -0.1
      ],
      "target": [
        0.1,
        0.22,
        -0.08
      ]
    },
    "color": "#881337",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Camelid_Cor",
    "meshId": "Mesh_Camelid_Cor",
    "systemId": "cardiovascular",
    "speciesId": "camelid",
    "latinTaxonomyName": "Cor (Camelus dromedarius / Lama glama)",
    "name": {
      "en": "Camelid Conical Heart",
      "ar": "قلب الإبليات المخروطي"
    },
    "description": {
      "en": "Large conical heart with a thick left ventricular wall and heavy fibrous skeleton, capable of pumping viscous concentrated blood during severe dehydration.",
      "ar": "قلب مخروطي ضخم بجدار بطيني أيسر سميك وهيكل ليفي قوي قادر على ضخ الدم اللزج أثناء فترات الجفاف الصحراوي الطويلة."
    },
    "bloodSupply": {
      "en": "Left and right coronary arteries with high myocardial capillary density.",
      "ar": "شرايين تاجية يمنى ويسرى بكثافة شعيرات عضلية عالية."
    },
    "innervation": {
      "en": "Autonomic cardiac plexus from vagus and sympathetic trunk.",
      "ar": "الضفيرة القلبية الذاتية من المبهم والجذع الودي."
    },
    "clinicalPearls": {
      "en": "Camelids can lose over 30% of their body weight in water during arid drought without hypovolemic shock; the heart continues pumping effectively due to fluid retention in erythrocytes.",
      "ar": "تتحمل الإبل فقدان أكثر من 30% من ماء الجسد دون صدمة نقص حجم؛ حيث يستمر القلب في العمل بفضل حماية خلايا الدم الحمراء."
    },
    "commonPathologies": [
      {
        "en": "Camelids can lose over 30% of their body weight in water during arid drought wit...",
        "ar": "تتحمل الإبل فقدان أكثر من 30% من ماء الجسد دون صدمة نقص حجم؛ حيث يستمر القلب في ..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.7,
        0.4
      ],
      "target": [
        0,
        0.52,
        0.38
      ]
    },
    "color": "#dc2626",
    "emissiveColor": "#0284c7",
    "proceduralType": "heart"
  },
  {
    "id": "Mesh_Camelid_Aorta",
    "meshId": "Mesh_Camelid_Aorta",
    "systemId": "cardiovascular",
    "speciesId": "camelid",
    "latinTaxonomyName": "Aorta (Camelus dromedarius)",
    "name": {
      "en": "Camelid Aorta & Osmotic Resistance",
      "ar": "أبهر الإبل ومقاومة الضغط الإسموزي"
    },
    "description": {
      "en": "Elastic descending aorta accommodating sudden high-volume rehydration; camelid RBCs can expand up to 240% volume without hemolysing.",
      "ar": "أبهر مطاطي واسع يتحمل التروية الفجائية بكميات مياه هائلة؛ حيث تتمدد كريات دم الإبل إلى 240% دون أن تنفجر."
    },
    "bloodSupply": {
      "en": "Direct systemic arterial pipeline from left ventricle.",
      "ar": "القناة الشريانية الجهازية المباشرة من البطين الأيسر."
    },
    "innervation": {
      "en": "Aortic baroreceptor nerve and thoracic sympathetic chain.",
      "ar": "عصب المستقبلات الضغطية الأبهرية والسلسلة الودية الصدرية."
    },
    "clinicalPearls": {
      "en": "A dehydrated camel can drink over 100 liters of water in 10 minutes without hemolysis because its oval RBC membranes expand without rupturing.",
      "ar": "يستطيع الجمل الظمآن شرب أكثر من 100 لتر ماء في 10 دقائق دون انحلال دموي لأن غشاء كرياته البيضاوية يتمدد بمرونة خارقة."
    },
    "commonPathologies": [
      {
        "en": "A dehydrated camel can drink over 100 liters of water in 10 minutes without hemo...",
        "ar": "يستطيع الجمل الظمآن شرب أكثر من 100 لتر ماء في 10 دقائق دون انحلال دموي لأن غشاء..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.75,
        0.2
      ],
      "target": [
        0,
        0.58,
        0.15
      ]
    },
    "color": "#ef4444",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_VenaJugularis",
    "meshId": "Mesh_Camelid_VenaJugularis",
    "systemId": "cardiovascular",
    "speciesId": "camelid",
    "latinTaxonomyName": "Vena jugularis externa (Camelus dromedarius)",
    "name": {
      "en": "Camelid Jugular Vein & Cervical Protection",
      "ar": "الوريد الوداجي وحماية النواتئ العنقية في الإبل"
    },
    "description": {
      "en": "Deeply situated jugular vein protected along the mid-neck by the ventral bony processes of the cervical vertebrae and thick skin.",
      "ar": "وريد وداجي عميق محمي في منتصف العنق بواسطة النواتئ العظمية البطنية للفقرات العنقية والجلد السميك."
    },
    "bloodSupply": {
      "en": "Drains the head and neck into the cranial vena cava.",
      "ar": "يصرف دم الرأس والرقبة إلى الوريد الأجوف القحفي."
    },
    "innervation": {
      "en": "Sympathetic vasomotor fibers.",
      "ar": "ألياف حركية وعائية ودية."
    },
    "clinicalPearls": {
      "en": "Venipuncture is challenging; mid-neck is obscured by transverse processes; best accessed at cranial 1/3 (mandible angle) or caudal 1/3 (cranial to 6th vertebra).",
      "ar": "بزل الوريد صعب؛ يحجبه الناتئ العظمي بمنتصف الرقبة؛ وأفضل موقعين هما الثلث العلوي (خلف زاوية الفك) أو الثلث السفلي أمام الفقرة السادسة."
    },
    "commonPathologies": [
      {
        "en": "Venipuncture is challenging; mid-neck is obscured by transverse processes; best ...",
        "ar": "بزل الوريد صعب؛ يحجبه الناتئ العظمي بمنتصف الرقبة؛ وأفضل موقعين هما الثلث العلوي..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.85,
        0.5
      ],
      "target": [
        0.08,
        0.72,
        0.45
      ]
    },
    "color": "#2563eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_VenaCava",
    "meshId": "Mesh_Camelid_VenaCava",
    "systemId": "cardiovascular",
    "speciesId": "camelid",
    "latinTaxonomyName": "Vena cava caudalis",
    "name": {
      "en": "Caudal Vena Cava",
      "ar": "الوريد الأجوف الذيلي في الإبل"
    },
    "description": {
      "en": "Major abdominal venous channel conveying return blood from kidneys, viscera, and hindquarters to the right atrium through the liver groove.",
      "ar": "القناة الوريدية البطنية الرئيسية الناقلة لدم الكلى والأحشاء والقوائم الخلفية للأذين الأيمن عبر ثلم الكبد."
    },
    "bloodSupply": {
      "en": "Systemic venous return conduit.",
      "ar": "قناة عودة الدم الوريدي الجهازي."
    },
    "innervation": {
      "en": "Perivascular autonomic sympathetic plexus.",
      "ar": "الضفيرة الذاتية الودية حول الوعاء."
    },
    "clinicalPearls": {
      "en": "Traverses the dorsal caval groove of the deeply scalloped camelid liver; evaluated during abdominal ultrasound in colic.",
      "ar": "يمر في الأخدود الظهري لكبد الإبل المفصص بعمق؛ ويفحص بالموجات فوق الصوتية في حالات المغص الحاد."
    },
    "commonPathologies": [
      {
        "en": "Traverses the dorsal caval groove of the deeply scalloped camelid liver; evaluat...",
        "ar": "يمر في الأخدود الظهري لكبد الإبل المفصص بعمق؛ ويفحص بالموجات فوق الصوتية في حالا..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.65,
        0.1
      ],
      "target": [
        0.04,
        0.52,
        0.08
      ]
    },
    "color": "#2563eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_C1",
    "meshId": "Mesh_Camelid_C1",
    "systemId": "digestive",
    "speciesId": "camelid",
    "latinTaxonomyName": "Ventriculus primus (C1) cum sacculi glandulares",
    "name": {
      "en": "Compartment 1 (C1) & Glandular Saccules",
      "ar": "المعدة الأولى (C1) والجيوب الغدية (خلايا الماء)"
    },
    "description": {
      "en": "Massive first fermentative chamber occupying 80% of stomach volume; lacks papillae and features ventral glandular saccules (\"water cells\").",
      "ar": "حجرة تخمير أولى عملاقة تشكل 80% من حجم المعدة؛ خالية من الحليمات وتتميز بجيوب غدية بطنية تفرز البيكربونات (خلايا الماء)."
    },
    "bloodSupply": {
      "en": "Left and right ruminal/C1 arteries from celiac artery.",
      "ar": "شرايين الحجرة الأولى اليمنى واليسرى من الشريان الزلاقي."
    },
    "innervation": {
      "en": "Vagus nerve (dorsal and ventral vagal trunks).",
      "ar": "العصب المبهم (الجذعان الظهري والبطني)."
    },
    "clinicalPearls": {
      "en": "The glandular saccules do NOT store pure water as ancient myth held, but secrete bicarbonate, buffers, and mucus to optimize microbial fermentation.",
      "ar": "لا تخزن الجيوب الغدية ماءً عذباً كما زعمت الأساطير، بل تفرز البيكربونات والمخاط لضبط حموضة التخمير الميكروبي."
    },
    "commonPathologies": [
      {
        "en": "The glandular saccules do NOT store pure water as ancient myth held, but secrete...",
        "ar": "لا تخزن الجيوب الغدية ماءً عذباً كما زعمت الأساطير، بل تفرز البيكربونات والمخاط ..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.3,
        0.7,
        0.1
      ],
      "target": [
        -0.15,
        0.5,
        0.05
      ]
    },
    "color": "#78350f",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_C2",
    "meshId": "Mesh_Camelid_C2",
    "systemId": "digestive",
    "speciesId": "camelid",
    "latinTaxonomyName": "Ventriculus secundus (C2)",
    "name": {
      "en": "Compartment 2 (C2)",
      "ar": "المعدة الثانية (C2) في الإبليات"
    },
    "description": {
      "en": "Small bean-shaped compartment partially lined by retiform mucosal folds and glandular saccules, continuously mixing with C1.",
      "ar": "حجرة صغيرة تشبه حبة الفاصولياء مبطنة جزئياً بطيات شبكية وجيوب غدية، تتواصل وتخلط محتوياتها باستمرار مع C1."
    },
    "bloodSupply": {
      "en": "Branches of celiac artery.",
      "ar": "فروع من الشريان الزلاقي."
    },
    "innervation": {
      "en": "Vagus nerve branches.",
      "ar": "فروع العصب المبهم."
    },
    "clinicalPearls": {
      "en": "Unlike the completely separate bovine reticulum, camelid C2 is incompletely separated from C1, participating directly in cyclical motility contractions.",
      "ar": "بخلاف قلنسوة الأبقار المنفصلة، لا تنفصل C2 في الإبل تماماً عن C1 بل تشاركها دورات التقلص والخلط المستمر."
    },
    "commonPathologies": [
      {
        "en": "Unlike the completely separate bovine reticulum, camelid C2 is incompletely sepa...",
        "ar": "بخلاف قلنسوة الأبقار المنفصلة، لا تنفصل C2 في الإبل تماماً عن C1 بل تشاركها دورا..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.6,
        0.22
      ],
      "target": [
        0.05,
        0.48,
        0.2
      ]
    },
    "color": "#a16207",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_C3",
    "meshId": "Mesh_Camelid_C3",
    "systemId": "digestive",
    "speciesId": "camelid",
    "latinTaxonomyName": "Ventriculus tertius (C3)",
    "name": {
      "en": "Compartment 3 (C3) & Peptic Region",
      "ar": "المعدة الثالثة (C3) والمنطقة الهضمية الحامضية"
    },
    "description": {
      "en": "Elongated, tube-like organ situated along the right ventral abdomen; proximal 4/5 is mucus-glandular while the terminal 1/5 is true acidic peptic mucosa.",
      "ar": "عضو أنبوبي مستطيل على أرضية البطن اليمنى؛ أربعة أخماسه الأولى مفرزة للمخاط، والخمس الأخير هو المعدة الحامضية الحقيقية."
    },
    "bloodSupply": {
      "en": "Right gastric and gastroepiploic arteries from celiac/mesenteric branches.",
      "ar": "الشرايين المعدية اليمنى والمعدية الثربية."
    },
    "innervation": {
      "en": "Vagus nerve (dorsal and ventral trunks).",
      "ar": "العصب المبهم (الجذعان الظهري والبطني)."
    },
    "clinicalPearls": {
      "en": "The terminal acid-producing region of C3 is highly vulnerable to stress-induced ulceration and perforation in sick or hospitalized camelids.",
      "ar": "منطقة إفراز الحمض في نهاية C3 شديدة الحساسية للقرح الناتجة عن الإجهاد والتوتر والانثقاب في الإبل المريضة."
    },
    "commonPathologies": [
      {
        "en": "The terminal acid-producing region of C3 is highly vulnerable to stress-induced ...",
        "ar": "منطقة إفراز الحمض في نهاية C3 شديدة الحساسية للقرح الناتجة عن الإجهاد والتوتر وا..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.5,
        0.15
      ],
      "target": [
        0.1,
        0.38,
        0.12
      ]
    },
    "color": "#ef4444",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_Hepar",
    "meshId": "Mesh_Camelid_Hepar",
    "systemId": "digestive",
    "speciesId": "camelid",
    "latinTaxonomyName": "Hepar (Camelus dromedarius)",
    "name": {
      "en": "Camelid Liver & Absent Gallbladder",
      "ar": "كبد الإبل المفصص وانعدام الحويصل الصفراوي"
    },
    "description": {
      "en": "Deeply fissured, multi-lobed liver with distinctive scalloped margins and characteristic ABSENCE of a gallbladder (vesica fellea).",
      "ar": "كبد متعدد الفصوص بشقوق عميقة وحواف مسننة فريدة يتميز بـ انعدام وجود الحويصل الصفراوي (المرارة) تماماً."
    },
    "bloodSupply": {
      "en": "Portal vein and hepatic artery; bile drains directly into duodenum via common hepatic duct.",
      "ar": "وريد الباب والشريان الكبدي؛ وتصب الصفراء مباشرة في الاثناعشر عبر القناة الكبدية المشتركة."
    },
    "innervation": {
      "en": "Hepatic plexus from celiac ganglion and vagal fibers.",
      "ar": "الضفيرة الكبدية من العقدة الزلاقية وألياف المبهم."
    },
    "clinicalPearls": {
      "en": "Camelids completely lack a gallbladder (similar to equids and cervids); bile is continuously secreted through the common bile duct directly into the duodenum.",
      "ar": "تفتقر الإبل إلى المرارة تماماً (كالخيول والغزلان)؛ وتفرز الصفراء باستمرار من الكبد للاثناعشر مباشرة."
    },
    "commonPathologies": [
      {
        "en": "Camelids completely lack a gallbladder (similar to equids and cervids); bile is ...",
        "ar": "تفتقر الإبل إلى المرارة تماماً (كالخيول والغزلان)؛ وتفرز الصفراء باستمرار من الك..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.6,
        0.2
      ],
      "target": [
        0.02,
        0.48,
        0.18
      ]
    },
    "color": "#991b1b",
    "emissiveColor": "#0284c7",
    "proceduralType": "liver"
  },
  {
    "id": "Mesh_Camelid_Trachea",
    "meshId": "Mesh_Camelid_Trachea",
    "systemId": "respiratory",
    "speciesId": "camelid",
    "latinTaxonomyName": "Trachea (Camelus dromedarius)",
    "name": {
      "en": "Camelid Long Trachea",
      "ar": "الرغامي الطويلة في الإبل"
    },
    "description": {
      "en": "Very long, flexible cartilaginous airway conduit with 115-120 overlapping cartilage rings, accommodating the long graceful S-curve neck.",
      "ar": "قناة هوائية غضروفية طويلة ومرنة تضم 115-120 حلقة غضروفية متداخلة لتلائم انحناء الرقبة على شكل حرف S."
    },
    "bloodSupply": {
      "en": "Bronchoesophageal and thyroid arteries.",
      "ar": "الشرايين القصبي المريئي والدرقية."
    },
    "innervation": {
      "en": "Recurrent laryngeal nerve and vagal branches.",
      "ar": "العصب الحنجري الراجع وفروع المبهم."
    },
    "clinicalPearls": {
      "en": "Endotracheal intubation requires extra-long tubes (up to 100-120 cm in adult dromedaries); caution needed to avoid blind pharyngeal pouch entry.",
      "ar": "يتطلب التنبيب الرغامي في الإبل أنابيب طويلة للغاية (تصل 100-120 سم)؛ مع الحذر من الانحشار في الرتج البلعومي الأعمى."
    },
    "commonPathologies": [
      {
        "en": "Endotracheal intubation requires extra-long tubes (up to 100-120 cm in adult dro...",
        "ar": "يتطلب التنبيب الرغامي في الإبل أنابيب طويلة للغاية (تصل 100-120 سم)؛ مع الحذر من..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.9,
        0.55
      ],
      "target": [
        0,
        0.75,
        0.48
      ]
    },
    "color": "#bae6fd",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_Pulmo_Sinister",
    "meshId": "Mesh_Camelid_Pulmo_Sinister",
    "systemId": "respiratory",
    "speciesId": "camelid",
    "latinTaxonomyName": "Pulmo sinister (Camelus dromedarius)",
    "name": {
      "en": "Camelid Left Lung",
      "ar": "الرئة اليسرى في الإبل"
    },
    "description": {
      "en": "Divided into cranial and caudal lobes; lacks extensive interlobular connective tissue septa, giving it high elastic compliance.",
      "ar": "تنقسم إلى فصين قحفي والذيلي؛ وتفتقر إلى الحواجز الضامة بين الفصيصات مما يمنحها مرونة ومطاوعة تنفسية عالية."
    },
    "bloodSupply": {
      "en": "Left pulmonary artery and bronchoesophageal system.",
      "ar": "الشريان الرئوي الأيسر والجهاز القصبي المريئي."
    },
    "innervation": {
      "en": "Vagal and sympathetic pulmonary innervation.",
      "ar": "التعصيب الرئوي الودي والمبهمي."
    },
    "clinicalPearls": {
      "en": "The absence of thick interlobular septation prevents destructive interstitial emphysema, allowing rapid heat loss by panting without lung injury.",
      "ar": "غياب الحواجز بين الفصيصات يحمي رئة الإبل من التمزق النفاخي أثناء اللهاث الشديد لتبريد الجسم في حرارة الصحراء."
    },
    "commonPathologies": [
      {
        "en": "The absence of thick interlobular septation prevents destructive interstitial em...",
        "ar": "غياب الحواجز بين الفصيصات يحمي رئة الإبل من التمزق النفاخي أثناء اللهاث الشديد ل..."
      }
    ],
    "cameraFocus": {
      "position": [
        -0.95,
        0.65,
        0.35
      ],
      "target": [
        -0.15,
        0.55,
        0.32
      ]
    },
    "color": "#fda4af",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Camelid_Pulmo_Dexter",
    "meshId": "Mesh_Camelid_Pulmo_Dexter",
    "systemId": "respiratory",
    "speciesId": "camelid",
    "latinTaxonomyName": "Pulmo dexter et bronchus trachealis (Camelus)",
    "name": {
      "en": "Camelid Right Lung & Tracheal Bronchus",
      "ar": "الرئة اليمنى والقصبة الرغامية الخاصة في الإبل"
    },
    "description": {
      "en": "Large right lung (cranial, middle, caudal, and accessory lobes) with a bronchus trachealis ventilating the right cranial lobe.",
      "ar": "رئة يمنى كبرى (فصوص قحفي، متوسط، ذيلي، وإضافي) مع وجود قصبة رغامية مستقلة تهوي الفص القحفي الأيمن."
    },
    "bloodSupply": {
      "en": "Right branches of pulmonary artery and bronchoesophageal system.",
      "ar": "الفروع اليمنى للشريان الرئوي والجهاز القصبي المريئي."
    },
    "innervation": {
      "en": "Vagal and sympathetic pulmonary innervation.",
      "ar": "التعصيب الرئوي الودي والمبهمي."
    },
    "clinicalPearls": {
      "en": "Possesses an independent bronchus trachealis (similar to ruminants and pigs) arising from the right tracheal wall before the bifurcation.",
      "ar": "تمتلك قصبة رغامية مستقلة تنشأ مباشرة من الرغامي لتهوية فص الرئة الأيمن القحفي كالمجترات."
    },
    "commonPathologies": [
      {
        "en": "Possesses an independent bronchus trachealis (similar to ruminants and pigs) ari...",
        "ar": "تمتلك قصبة رغامية مستقلة تنشأ مباشرة من الرغامي لتهوية فص الرئة الأيمن القحفي كا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.95,
        0.65,
        0.35
      ],
      "target": [
        0.15,
        0.55,
        0.32
      ]
    },
    "color": "#f43f5e",
    "emissiveColor": "#0284c7",
    "proceduralType": "lungs"
  },
  {
    "id": "Mesh_Camelid_Diaphragma",
    "meshId": "Mesh_Camelid_Diaphragma",
    "systemId": "respiratory",
    "speciesId": "camelid",
    "latinTaxonomyName": "Diaphragma (Camelus dromedarius)",
    "name": {
      "en": "Camelid Diaphragm",
      "ar": "الحجاب الحاجز في الإبل"
    },
    "description": {
      "en": "Broad, robust muscular partition with an expansive central tendon directly resisting the hydrostatic thrust of the massive C1 stomach.",
      "ar": "حاجز عضلي متين بمركز وتري واسع يقاوم الدفع الهيدروستاتيكي لكتلة المعدة C1 العملاقة."
    },
    "bloodSupply": {
      "en": "Phrenic and musculophrenic vessels.",
      "ar": "الأوعية الحجابية والحجابية العضلية."
    },
    "innervation": {
      "en": "Phrenic nerves (C5-C7 spinal origin).",
      "ar": "الأعصاب الحجابية (من الجذور العنقية C5-C7)."
    },
    "clinicalPearls": {
      "en": "When camels kush (sternal recumbency), body weight rests on the sternal pedestal (callosity), relieving abdominal pressure on the diaphragm.",
      "ar": "عند إناخة الجمل وبروكه، يستقر وزنه على الخف والوسادة الصدرية القرنية، مما يخفف ضغط الكرش على الحجاب الحاجز."
    },
    "commonPathologies": [
      {
        "en": "When camels kush (sternal recumbency), body weight rests on the sternal pedestal...",
        "ar": "عند إناخة الجمل وبروكه، يستقر وزنه على الخف والوسادة الصدرية القرنية، مما يخفف ض..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.65,
        0.15
      ],
      "target": [
        0,
        0.52,
        0.15
      ]
    },
    "color": "#e11d48",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_Cerebrum",
    "meshId": "Mesh_Camelid_Cerebrum",
    "systemId": "nervous",
    "speciesId": "camelid",
    "latinTaxonomyName": "Cerebrum (Camelus dromedarius)",
    "name": {
      "en": "Camelid Gyrencephalic Cerebrum",
      "ar": "المخ التلافي في الإبل"
    },
    "description": {
      "en": "Large, highly gyrencephalic brain with complex frontal lobes, prominent olfactory structures, and specialized thermoregulatory hypothalamic nuclei.",
      "ar": "دماغ ضخم ذو تلافيف متطورة وفصوص جبهية ومراكز شمية بارزة ونوى تحت مهاد متخصصة في تنظيم الحرارة والتكيف الصحراوي."
    },
    "bloodSupply": {
      "en": "Rete mirabile epidurale rostrale and cerebral arterial circle (circle of Willis).",
      "ar": "الشبكة العجيبة المنقارية فوق الجافية ودائرة ويليس الشريانية."
    },
    "innervation": {
      "en": "Cranial nerves I-XII.",
      "ar": "الأعصاب القحفية من 1 إلى 12."
    },
    "clinicalPearls": {
      "en": "The rostral epidural rete mirabile enables selective brain cooling, keeping the cerebral tissue up to 3°C cooler than the core body during midday heat.",
      "ar": "تتيح الشبكة العجيبة فوق الجافية تبريداً انتقائياً للدماغ، فتبقيه أبرد بـ 3 درجات مئوية من حرارة باقي الجسم في الظهيرة."
    },
    "commonPathologies": [
      {
        "en": "The rostral epidural rete mirabile enables selective brain cooling, keeping the ...",
        "ar": "تتيح الشبكة العجيبة فوق الجافية تبريداً انتقائياً للدماغ، فتبقيه أبرد بـ 3 درجات..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.85,
        0.95,
        0.8
      ],
      "target": [
        0,
        0.85,
        0.72
      ]
    },
    "color": "#fbcfe8",
    "emissiveColor": "#0284c7",
    "proceduralType": "brain"
  },
  {
    "id": "Mesh_Camelid_Cerebellum",
    "meshId": "Mesh_Camelid_Cerebellum",
    "systemId": "nervous",
    "speciesId": "camelid",
    "latinTaxonomyName": "Cerebellum (Camelus dromedarius)",
    "name": {
      "en": "Camelid Cerebellum",
      "ar": "المخيخ في الإبل"
    },
    "description": {
      "en": "Robust hindbrain coordinator featuring a globular vermis and developed cerebellar hemispheres, regulating camelid pacing locomotion.",
      "ar": "منسق عصبي خلفي يضم دودة مخيخية كروية ونصفا كرة مخيخيان لتنظيم مشية الخبب (Pacing gait) الفريدة للإبل."
    },
    "bloodSupply": {
      "en": "Rostral and caudal cerebellar arteries.",
      "ar": "الشرايين المخيخية المنقارية والذيلية."
    },
    "innervation": {
      "en": "Cerebellar peduncles.",
      "ar": "السويقات المخيخية."
    },
    "clinicalPearls": {
      "en": "Coordinates the unique lateral pacing gait of camelids, where ipsilateral limbs swing synchronously forward.",
      "ar": "ينسق مشية الخبب الخاصة بالإبل، حيث تتحرك القائمتان في نفس الجانب (الأمامية والخلفية معاً) للأمام بتناغم متزامن."
    },
    "commonPathologies": [
      {
        "en": "Coordinates the unique lateral pacing gait of camelids, where ipsilateral limbs ...",
        "ar": "ينسق مشية الخبب الخاصة بالإبل، حيث تتحرك القائمتان في نفس الجانب (الأمامية والخل..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.85,
        0.95,
        0.65
      ],
      "target": [
        0,
        0.86,
        0.62
      ]
    },
    "color": "#f472b6",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_MedullaSpinalis",
    "meshId": "Mesh_Camelid_MedullaSpinalis",
    "systemId": "nervous",
    "speciesId": "camelid",
    "latinTaxonomyName": "Medulla spinalis (Camelus)",
    "name": {
      "en": "Camelid Spinal Cord & Meningeal Worm",
      "ar": "النخاع الشوكي في الإبل والدودة السحائية"
    },
    "description": {
      "en": "Elongated spinal cord spanning through the massive cervical and lumbar vertebral canals, ending in a conus medullaris at the sacrum.",
      "ar": "حبل شوكي طويل يمتد عبر القنوات الفقرية العنقية والقطنية الضخمة، وينتهي بمخروط نخاعي عند العجز."
    },
    "bloodSupply": {
      "en": "Ventral and dorsal spinal arteries.",
      "ar": "الشرايين الشوكية البطنية والظهرية."
    },
    "innervation": {
      "en": "Afferent sensory and efferent motor spinal roots.",
      "ar": "الجذور الشوكية الواردة الحسية والصادرة الحركية."
    },
    "clinicalPearls": {
      "en": "Parelaphostrongylus tenuis (meningeal worm of white-tailed deer) larva migrates into camelid spinal cords, causing severe ascending paralysis and death.",
      "ar": "يرقات دودة السحايا (P. tenuis) تهاجر في النخاع الشوكي للإبل مسببة شللاً صاعداً مدمراً ونفوقاً سادساً."
    },
    "commonPathologies": [
      {
        "en": "Parelaphostrongylus tenuis (meningeal worm of white-tailed deer) larva migrates ...",
        "ar": "يرقات دودة السحايا (P. tenuis) تهاجر في النخاع الشوكي للإبل مسببة شللاً صاعداً م..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.85,
        0.15
      ],
      "target": [
        0,
        0.72,
        0.1
      ]
    },
    "color": "#fef08a",
    "emissiveColor": "#0284c7",
    "proceduralType": "spine"
  },
  {
    "id": "Mesh_Camelid_NervusFacialis",
    "meshId": "Mesh_Camelid_NervusFacialis",
    "systemId": "nervous",
    "speciesId": "camelid",
    "latinTaxonomyName": "Nervus facialis (CN VII)",
    "name": {
      "en": "Facial Nerve & Prehensile Cleft Lip",
      "ar": "العصب الوجهي والشفة المشقوقة القابضة"
    },
    "description": {
      "en": "Robust facial nerve branching extensively to innervate the deeply cleft, mobile, prehensile halves of the upper lip (labium superius).",
      "ar": "عصب وجهي قوي يتفرع بكثافة ليعصب نصفي الشفة العليا المشقوقة ذات الحركة المستقلة الفائقة لالتقاط النباتات الشوكية."
    },
    "bloodSupply": {
      "en": "Facial and transverse facial arteries.",
      "ar": "الشرايين الوجهي والوجهي المستعرض."
    },
    "innervation": {
      "en": "Buccal and marginal mandibular branches of CN VII.",
      "ar": "الفروع الشدقية والفكية الهامشية للعصب السابع."
    },
    "clinicalPearls": {
      "en": "The split upper lip can manipulate thorny desert acacia branches with high dexterity; facial paralysis impairs food gathering and causes lip droop.",
      "ar": "تتحرك الشفة العليا المشقوقة كأصابع مستقلة لالتقاط أشواك الأكاسيا؛ وشلل العصب الوجهي يفقد الجمل القدرة على الرعي."
    },
    "commonPathologies": [
      {
        "en": "The split upper lip can manipulate thorny desert acacia branches with high dexte...",
        "ar": "تتحرك الشفة العليا المشقوقة كأصابع مستقلة لالتقاط أشواك الأكاسيا؛ وشلل العصب الو..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.85,
        0.8
      ],
      "target": [
        0.08,
        0.78,
        0.75
      ]
    },
    "color": "#facc15",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_Ren",
    "meshId": "Mesh_Camelid_Ren",
    "systemId": "urogenital",
    "speciesId": "camelid",
    "latinTaxonomyName": "Ren (Camelus dromedarius)",
    "name": {
      "en": "Camelid Kidney with Long Henle Loops",
      "ar": "كلية الإبل ذات عرى هنلي الطويلة"
    },
    "description": {
      "en": "Smooth, bean-shaped unipyramidal kidney with an extraordinarily thick medulla and long loops of Henle yielding 3000 mOsm/kg urine.",
      "ar": "كلية ملساء أحادية الهرم تشبه حبة الفاصولياء بنخاع بالغ السمك وعرى هنلي طويلة لتركيز البول حتى 3000 ملي أسمول/كغ."
    },
    "bloodSupply": {
      "en": "Renal artery (from abdominal aorta) and renal vein.",
      "ar": "الشريان الكلوي (من الأبهر البطني) والوريد الكلوي."
    },
    "innervation": {
      "en": "Renal sympathetic plexus.",
      "ar": "الضفيرة الكلوية الودية."
    },
    "clinicalPearls": {
      "en": "The medulla-to-cortex ratio is 4:1 (highest among domestic ungulates), enabling camels to produce syrup-thick concentrated urine to save water.",
      "ar": "نسبة النخاع للقشرة 4:1 (الأعلى بين كل الثدييات المستأنسة)، مما يتيح للإبل إفراز بول شديد التركيز والدكانة لحفظ الماء."
    },
    "commonPathologies": [
      {
        "en": "The medulla-to-cortex ratio is 4:1 (highest among domestic ungulates), enabling ...",
        "ar": "نسبة النخاع للقشرة 4:1 (الأعلى بين كل الثدييات المستأنسة)، مما يتيح للإبل إفراز ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.95,
        0.65,
        0.08
      ],
      "target": [
        -0.08,
        0.55,
        0.05
      ]
    },
    "color": "#7f1d1d",
    "emissiveColor": "#0284c7",
    "proceduralType": "kidney"
  },
  {
    "id": "Mesh_Camelid_VesicaUrinaria",
    "meshId": "Mesh_Camelid_VesicaUrinaria",
    "systemId": "urogenital",
    "speciesId": "camelid",
    "latinTaxonomyName": "Vesica urinaria (Camelus)",
    "name": {
      "en": "Camelid Urinary Bladder",
      "ar": "المثانة البولية في الإبل"
    },
    "description": {
      "en": "Thick muscular vesicle resting on pelvic brim; ureters insert with an oblique intramural valve preventing backflow under high abdominal pressure.",
      "ar": "كيس عضلي سميك يستقر على حافة الحوض؛ يدخل الحالبان بزاوية مائلة داخل الجدار مانعين الارتجاع تحت ضغط البطن العالي."
    },
    "bloodSupply": {
      "en": "Cranial and caudal vesical arteries.",
      "ar": "الشرايين المثانية القحفية والذيلية."
    },
    "innervation": {
      "en": "Hypogastric (sympathetic) and pelvic (parasympathetic) nerves.",
      "ar": "العصبان الخثلي (الودي) والحوضي (نظير الودي)."
    },
    "clinicalPearls": {
      "en": "Urolithiasis can occur in feedlot male camelids fed high phosphorus grain rations, causing urethral blockage and bladder rupture.",
      "ar": "تحدث الحصوات البولية في ذكور الإبل المعلوفة حبوباً عالية الفوسفور مسببة انسداد الإحليل وتمزق المثانة."
    },
    "commonPathologies": [
      {
        "en": "Urolithiasis can occur in feedlot male camelids fed high phosphorus grain ration...",
        "ar": "تحدث الحصوات البولية في ذكور الإبل المعلوفة حبوباً عالية الفوسفور مسببة انسداد ا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.85,
        0.55,
        -0.15
      ],
      "target": [
        0,
        0.45,
        -0.12
      ]
    },
    "color": "#f59e0b",
    "emissiveColor": "#0284c7",
    "proceduralType": "bladder"
  },
  {
    "id": "Mesh_Camelid_Uterus",
    "meshId": "Mesh_Camelid_Uterus",
    "systemId": "urogenital",
    "speciesId": "camelid",
    "latinTaxonomyName": "Uterus bicornis (Camelus dromedarius)",
    "name": {
      "en": "Camelid Uterus & Left Horn Dominance",
      "ar": "رحم الإبل وسيادة القرن الأيسر في الحمل"
    },
    "description": {
      "en": "Bicornuate uterus with a marked anatomical phenomenon: over 98% of pregnancies implant and develop in the LEFT uterine horn.",
      "ar": "رحم ذو قرنين يتميز بظاهرة تشريحية فريدة: أكثر من 98% من حالات الحمل تنغرس وتكتمل في القرن الرحمي الأيسر."
    },
    "bloodSupply": {
      "en": "Uterine artery and ovarian artery.",
      "ar": "الشريان الرحمي والشريان المبيضي."
    },
    "innervation": {
      "en": "Uterovaginal plexus and hypogastric nerves.",
      "ar": "الضفيرة الرحمية المهبلية والأعصاب الخثلية."
    },
    "clinicalPearls": {
      "en": "Even when ovulation occurs in the RIGHT ovary, the embryo migrates through the uterine body to implant in the LEFT uterine horn in 98-99% of cases.",
      "ar": "حتى لو حدثت الإباضة في المبيض الأيمن، يهاجر الجنين عبر جسم الرحم ليستقر وينغرس في القرن الأيسر بنسبة 99%."
    },
    "commonPathologies": [
      {
        "en": "Even when ovulation occurs in the RIGHT ovary, the embryo migrates through the u...",
        "ar": "حتى لو حدثت الإباضة في المبيض الأيمن، يهاجر الجنين عبر جسم الرحم ليستقر وينغرس ف..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.85,
        0.58,
        -0.05
      ],
      "target": [
        0,
        0.48,
        -0.05
      ]
    },
    "color": "#ec4899",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_Penis",
    "meshId": "Mesh_Camelid_Penis",
    "systemId": "urogenital",
    "speciesId": "camelid",
    "latinTaxonomyName": "Penis et processus cartilagineus (Camelus)",
    "name": {
      "en": "Camelid Penis & Cartilaginous Hook",
      "ar": "قضيب الإبل والخطاف الغضروفي للغدة"
    },
    "description": {
      "en": "Fibroelastic penis featuring a prescrotal sigmoid flexure and a unique rigid cartilaginous hook/process at the tip of the glans penis.",
      "ar": "قضيب ليفي مرن يتميز بانحناء سيني أمام الصفن وبروز خطافي غضروفي صلب في ذروة الحشفة لاختراق عنق الرحم."
    },
    "bloodSupply": {
      "en": "Internal pudendal artery and dorsal artery of penis.",
      "ar": "الشريان الحياء الداخلي والشريان الظهري للقضيب."
    },
    "innervation": {
      "en": "Dorsal nerve of penis (from pudendal nerve).",
      "ar": "العصب الظهري للقضيب (من عصب الحياء)."
    },
    "clinicalPearls": {
      "en": "During mating in sternal recumbency (which lasts 15-45 minutes), the cartilaginous hook physically penetrates and dilates the tight rings of the cervix.",
      "ar": "أثناء التزاوج في وضع البروك (الذي يستمر 15-45 دقيقة)، يخترق الخطاف الغضروفي حلقات عنق الرحم الصلبة ويوسعها لقذف المني بالداخل."
    },
    "commonPathologies": [
      {
        "en": "During mating in sternal recumbency (which lasts 15-45 minutes), the cartilagino...",
        "ar": "أثناء التزاوج في وضع البروك (الذي يستمر 15-45 دقيقة)، يخترق الخطاف الغضروفي حلقا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.45,
        -0.2
      ],
      "target": [
        0,
        0.38,
        -0.18
      ]
    },
    "color": "#f43f5e",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_Cervicales",
    "meshId": "Mesh_Camelid_Cervicales",
    "systemId": "skeletal",
    "speciesId": "camelid",
    "latinTaxonomyName": "Vertebrae cervicales (C1-C7) (Camelus)",
    "name": {
      "en": "Elongated Cervical Vertebrae (S-Curve)",
      "ar": "الفقرات العنقية الطويلة والانحناء السيني"
    },
    "description": {
      "en": "Seven massive elongated cervical vertebrae forming the characteristic S-curve; lack transverse foramina (artery passes through spinal canal).",
      "ar": "سبع فقرات عنقية عملاقة مستطيلة تشكل انحناءة الرقبة المميزة S؛ وتفتقر للثقوب المستعرضة (يمر الشريان بالفقرات ذاتها)."
    },
    "bloodSupply": {
      "en": "Vertebral artery and deep cervical artery.",
      "ar": "الشريان الفقري والشريان العنقي العميق."
    },
    "innervation": {
      "en": "Cervical spinal nerves C1-C8.",
      "ar": "الأعصاب الشوكية العنقية من C1 إلى C8."
    },
    "clinicalPearls": {
      "en": "The vertebrate vertebral artery enters the spinal canal itself between C3-C5 rather than traversing transverse foramina, an important distinction in cervical surgery.",
      "ar": "يدخل الشريان الفقري القناة الشوكية العظمية ذاتها بين C3 وC5 بدلاً من المرور في ثقوب مستعرضة، وهو فارق حيوي بجراحة العنق."
    },
    "commonPathologies": [
      {
        "en": "The vertebrate vertebral artery enters the spinal canal itself between C3-C5 rat...",
        "ar": "يدخل الشريان الفقري القناة الشوكية العظمية ذاتها بين C3 وC5 بدلاً من المرور في ث..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.2,
        0.95,
        0.6
      ],
      "target": [
        0,
        0.82,
        0.52
      ]
    },
    "color": "#f3f4f6",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_Cranium",
    "meshId": "Mesh_Camelid_Cranium",
    "systemId": "skeletal",
    "speciesId": "camelid",
    "latinTaxonomyName": "Cranium (Camelus dromedarius)",
    "name": {
      "en": "Camelid Cranium & Fighting Teeth",
      "ar": "جمجمة الإبل وأسنان المعارك الدفاعية"
    },
    "description": {
      "en": "Elongated skull with a complete bony orbit, prominent sagittal crest, and modified dentition including upper incisor 3 and fighting canines.",
      "ar": "جمجمة مستطيلة بحجاج عظمي مغلق تماماً وعرف سهمي بارز، وأسنان معدلة تشمل القاطع العلوي الثالث وأنياب المعارك القوية."
    },
    "bloodSupply": {
      "en": "Maxillary and facial arteries.",
      "ar": "الشرايين الفكي والوجهي."
    },
    "innervation": {
      "en": "Trigeminal nerve (ophthalmic, maxillary, mandibular).",
      "ar": "العصب ثلاثي التوائم (العيني والفك العلوي والفك السفلي)."
    },
    "clinicalPearls": {
      "en": "Male camelids develop sharp fighting teeth (upper I3 and upper/lower canines); routinely trimmed/blunted to prevent lethal bites during rut.",
      "ar": "تمتلك ذكور الإبل أنياب معارك حادة (القاطع الثالث والأنياب العلوية والسفلية)؛ تُبرد وتُقلم لمنع عضات الهياج القاتلة في موسم الهدير."
    },
    "commonPathologies": [
      {
        "en": "Male camelids develop sharp fighting teeth (upper I3 and upper/lower canines); r...",
        "ar": "تمتلك ذكور الإبل أنياب معارك حادة (القاطع الثالث والأنياب العلوية والسفلية)؛ تُب..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.85,
        0.95,
        0.85
      ],
      "target": [
        0,
        0.82,
        0.75
      ]
    },
    "color": "#f3f4f6",
    "emissiveColor": "#0284c7",
    "proceduralType": "skull"
  },
  {
    "id": "Mesh_Camelid_OssaDigitorum",
    "meshId": "Mesh_Camelid_OssaDigitorum",
    "systemId": "skeletal",
    "speciesId": "camelid",
    "latinTaxonomyName": "Ossa digitorum et pulvinus digitalis (Tylopoda)",
    "name": {
      "en": "Tylopoda Digits & Elastic Digital Cushion",
      "ar": "أصابع خف الجمل والوسادة الرقمية المرنة (التيلوبودا)"
    },
    "description": {
      "en": "Broad, spreading phalanges of digits 3 & 4 lacking true hooves; supported by a massive fibroelastic digital pad and non-weight-bearing nails.",
      "ar": "سلاميات عريضة منبسطة للإصبعين 3 و4 تفتقر للحوافر الصلبة؛ مدعومة بوسادة خف ليفية مرنة وأظفار لا تلامس الأرض مباشرة."
    },
    "bloodSupply": {
      "en": "Common and proper digital arteries.",
      "ar": "الشرايين الإصبعية المشتركة والخاصة."
    },
    "innervation": {
      "en": "Plantar and digital nerves.",
      "ar": "الأعصاب الأخمصية والإصبعية."
    },
    "clinicalPearls": {
      "en": "The suborder Tylopoda (\"pad-footed\") derives from this adipose/collagen digital cushion that flattens under weight, preventing sinking into soft desert sand.",
      "ar": "اشتقت رتيبة التيلوبودا (مفلطحات الخف) من وسادة الخف الدهنية الليفية التي تنبسط تحت الوزن لتمنع الغوص في رمال الصحراء الناعمة."
    },
    "commonPathologies": [
      {
        "en": "The suborder Tylopoda (\"pad-footed\") derives from this adipose/collagen digital ...",
        "ar": "اشتقت رتيبة التيلوبودا (مفلطحات الخف) من وسادة الخف الدهنية الليفية التي تنبسط ت..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.25,
        -0.3
      ],
      "target": [
        0.18,
        0.1,
        -0.28
      ]
    },
    "color": "#fef3c7",
    "emissiveColor": "#0284c7",
    "proceduralType": "limb"
  },
  {
    "id": "Mesh_Camelid_Metacarpus",
    "meshId": "Mesh_Camelid_Metacarpus",
    "systemId": "skeletal",
    "speciesId": "camelid",
    "latinTaxonomyName": "Os metacarpale III et IV (Camelus)",
    "name": {
      "en": "Camelid Cannon Bone & Splayed Condyles",
      "ar": "عظم المدفع واللقم المنفرجة في الإبل"
    },
    "description": {
      "en": "Metacarpals III and IV are fused proximally into a single cannon bone, but splay widely apart at their distal articular condyles.",
      "ar": "يلتحم عظما السنع الثالث والرابع في عظم مدفع واحد، لكنهما ينفرجان بتباعد واسع عند لقمتيهما القاصيتين."
    },
    "bloodSupply": {
      "en": "Median artery and dorsal metacarpal vessels.",
      "ar": "الشريان المتوسط والأوعية السنعية الظهرية."
    },
    "innervation": {
      "en": "Palmar nerves derived from median and ulnar trunks.",
      "ar": "الأعصاب الراحية المشتقة من المتوسط والزند."
    },
    "clinicalPearls": {
      "en": "The wide distal splaying of the articular condyles provides a broad base of support for the splayed digits of the camelid footpad.",
      "ar": "الانفراج المتباعد لللقمتين القاصيتين يوفر قاعدة ارتكاز عريضة لدعم انفرام أصابع خف الجمل على الرمال."
    },
    "commonPathologies": [
      {
        "en": "The wide distal splaying of the articular condyles provides a broad base of supp...",
        "ar": "الانفراج المتباعد لللقمتين القاصيتين يوفر قاعدة ارتكاز عريضة لدعم انفرام أصابع خ..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.75,
        0.35,
        0.35
      ],
      "target": [
        0.15,
        0.2,
        0.32
      ]
    },
    "color": "#e5e7eb",
    "emissiveColor": "#0284c7",
    "proceduralType": "stomach"
  },
  {
    "id": "Mesh_Camelid_Brachiocephalicus",
    "meshId": "Mesh_Camelid_Brachiocephalicus",
    "systemId": "muscular",
    "speciesId": "camelid",
    "latinTaxonomyName": "Musculus brachiocephalicus (Camelus)",
    "name": {
      "en": "Camelid Brachiocephalicus",
      "ar": "العضلة العضدية الرأسية في الإبل"
    },
    "description": {
      "en": "Elongated, powerful muscular band extending from the skull base along the entire cervical spine to the humerus, raising the head and neck.",
      "ar": "حزام عضلي مستطيل قوي يمتد من قاعدة الجمجمة على طول الرقبة حتى العضد، مسؤول عن رفع الرأس ومد الرقبة."
    },
    "bloodSupply": {
      "en": "Superficial cervical and vertebral arteries.",
      "ar": "الشرايين العنقي السطحي والفقري."
    },
    "innervation": {
      "en": "Accessory nerve (CN XI) and cervical ventral motor branches.",
      "ar": "العصب الإضافي (الحادي عشر) وفروع الأعصاب العنقية الحركية."
    },
    "clinicalPearls": {
      "en": "Its massive tone keeps the heavy head elevated high above desert heat radiation; spasms occur in tetanus causing extreme star-gazing opistotonus.",
      "ar": "توترها القوي يبقي رأس الجمل مرتفعاً فوق حرارة رمال الصحراء؛ وتتشنج في الكزاز مسببة رجوع الرأس التشنجي للخلف."
    },
    "commonPathologies": [
      {
        "en": "Its massive tone keeps the heavy head elevated high above desert heat radiation;...",
        "ar": "توترها القوي يبقي رأس الجمل مرتفعاً فوق حرارة رمال الصحراء؛ وتتشنج في الكزاز مسب..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.85,
        0.55
      ],
      "target": [
        0.1,
        0.72,
        0.48
      ]
    },
    "color": "#be123c",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Camelid_TricepsBrachii",
    "meshId": "Mesh_Camelid_TricepsBrachii",
    "systemId": "muscular",
    "speciesId": "camelid",
    "latinTaxonomyName": "Musculus triceps brachii (Camelus)",
    "name": {
      "en": "Camelid Triceps Brachii",
      "ar": "عضلة العضد ثلاثية الرؤوس في الإبل"
    },
    "description": {
      "en": "Massive triangular muscular engine filling the space between scapula, humerus, and olecranon, extending the elbow to maintain standing posture.",
      "ar": "محرك عضلي مثلث هائل يشغل الفراغ بين لوح الكتف والعضد والنتوء الزجي، يبسط المرفق لتثبيت وقفة الجمل الشامخة."
    },
    "bloodSupply": {
      "en": "Subscapular and deep brachial arteries.",
      "ar": "الشرايين تحت الكتف والعضدي العميق."
    },
    "innervation": {
      "en": "Radial nerve (from brachial plexus).",
      "ar": "العصب الكعبري (من الضفيرة العضدية)."
    },
    "clinicalPearls": {
      "en": "Essential for rising from kush (sternal recumbency); radial nerve paralysis causes dropped elbow, inability to bear weight, and knuckling.",
      "ar": "عضلة جوهرية لنهوض الجمل من البروك؛ وشلل العصب الكعبري يسبب هبوط المرفق وعجز القائمة عن حمل الوزن وانثنائها."
    },
    "commonPathologies": [
      {
        "en": "Essential for rising from kush (sternal recumbency); radial nerve paralysis caus...",
        "ar": "عضلة جوهرية لنهوض الجمل من البروك؛ وشلل العصب الكعبري يسبب هبوط المرفق وعجز القا..."
      }
    ],
    "cameraFocus": {
      "position": [
        0.95,
        0.6,
        0.4
      ],
      "target": [
        0.15,
        0.48,
        0.38
      ]
    },
    "color": "#9f1239",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Camelid_Gluteobiceps",
    "meshId": "Mesh_Camelid_Gluteobiceps",
    "systemId": "muscular",
    "speciesId": "camelid",
    "latinTaxonomyName": "Musculus gluteobiceps (Camelus)",
    "name": {
      "en": "Camelid Gluteobiceps Muscle",
      "ar": "العضلة الإليوية ذات الرأسين في الإبل"
    },
    "description": {
      "en": "Immense muscular complex dominating the lateral pelvic limb, driving powerful desert propulsion across expansive sands.",
      "ar": "مركب عضلي جبار يهيمن على السطح الوحشي للطرف الخلفي، يولد قوة الدفع الهائلة للركض والمسير عبر رمال الصحراء."
    },
    "bloodSupply": {
      "en": "Caudal gluteal and lateral circumflex femoral arteries.",
      "ar": "الشرايين الإليوية الذيلية والمنعطفة الفخذية الوحشية."
    },
    "innervation": {
      "en": "Sciatic nerve and caudal gluteal nerve.",
      "ar": "العصب الوركي والعصب الإليوي الذيلي."
    },
    "clinicalPearls": {
      "en": "Forms the major muscle mass of the camelid haunch; provides explosive torque when rising from sternal recumbency.",
      "ar": "تشكل الكتلة العضلية الكبرى لورك وفخذ الجمل؛ وتولد عزم الدفع الصاعد أثناء نهوض الجمل من وضع البروك."
    },
    "commonPathologies": [
      {
        "en": "Forms the major muscle mass of the camelid haunch; provides explosive torque whe...",
        "ar": "تشكل الكتلة العضلية الكبرى لورك وفخذ الجمل؛ وتولد عزم الدفع الصاعد أثناء نهوض ال..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.6,
        -0.22
      ],
      "target": [
        0.18,
        0.5,
        -0.2
      ]
    },
    "color": "#881337",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  },
  {
    "id": "Mesh_Camelid_QuadricepsFemoris",
    "meshId": "Mesh_Camelid_QuadricepsFemoris",
    "systemId": "muscular",
    "speciesId": "camelid",
    "latinTaxonomyName": "Musculus quadriceps femoris (Camelus)",
    "name": {
      "en": "Quadriceps Femoris & Patella",
      "ar": "عضلة الفخذ رباعية الرؤوس والرضفة في الإبل"
    },
    "description": {
      "en": "The great extensor of the stifle joint consisting of rectus femoris, vastus lateralis, vastus intermedius, and vastus medialis inserting on patella.",
      "ar": "الباسط الأكبر لمفصل الركبة (الخنق) يتكون من المستقيمة الفخذية والمتسعات الثلاث وترتكز جميعها على عظم الرضفة."
    },
    "bloodSupply": {
      "en": "Lateral circumflex femoral and femoral arteries.",
      "ar": "الشرايين الفخذية والمنعطفة الفخذية الوحشية."
    },
    "innervation": {
      "en": "Femoral nerve (nervus femoralis).",
      "ar": "العصب الفخذي (Nervus femoralis)."
    },
    "clinicalPearls": {
      "en": "Upward fixation of the patella can occur in working camels, locking the hindlimb in rigid extension and preventing flexion.",
      "ar": "قد يحدث التثبت الصاعد لعظم الرضفة في الإبل العاملة، مما يقفل مفصل الركبة في بسط صلب عاجز عن الانثناء."
    },
    "commonPathologies": [
      {
        "en": "Upward fixation of the patella can occur in working camels, locking the hindlimb...",
        "ar": "قد يحدث التثبت الصاعد لعظم الرضفة في الإبل العاملة، مما يقفل مفصل الركبة في بسط ..."
      }
    ],
    "cameraFocus": {
      "position": [
        1.1,
        0.45,
        -0.15
      ],
      "target": [
        0.15,
        0.35,
        -0.12
      ]
    },
    "color": "#b91c1c",
    "emissiveColor": "#0284c7",
    "proceduralType": "muscle"
  }
];

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
