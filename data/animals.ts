import { AnimalProfile } from '../types/anatomy';

export const ANIMALS_DATA: Record<string, AnimalProfile> = {
  canine: {
    id: 'canine',
    name: {
      en: 'Canine (Dog)',
      ar: 'الكلبيات (الكلب)',
    },
    scientificName: 'Canis lupus familiaris',
    icon: 'Dog',
    description: {
      en: 'Primary model organism in veterinary companion medicine. Features a carnassial dental apparatus, simple monogastric digestive system, and a robust cursorial musculoskeletal frame.',
      ar: 'الكائن النموذجي الأساسي في طب الحيوانات الأليفة. يتميز بأسنان قاطعة ومعدة بسيطة أحادية التجاويف وهيكل عضلي هيكلي مصمم للعدو والجري.',
    },
    systemsAvailable: ['skeletal', 'muscular', 'circulatory', 'nervous', 'digestive', 'respiratory', 'urogenital'],
    anatomicalHighlights: [
      {
        en: 'Carnassial teeth (P4 upper, M1 lower) for shearing flesh',
        ar: 'الأسنان القاطعة (الضاحك الرابع العلوي والضرس الأول السفلي) لتمزيق اللحم',
      },
      {
        en: 'Os penis (Baculum) in male reproductive anatomy',
        ar: 'عظم القضيب (Baculum) في الجهاز التناسلي الذكري',
      },
      {
        en: 'Complete lack of clavicle / vestigial clavicular intersection',
        ar: 'غياب عظم الترقوة الحقيقي ووجود تقاطع ليفي بدائي لزيادة طول الخطوة',
      },
    ],
    gestationPeriod: {
      en: '58 - 68 days (avg. 63 days)',
      ar: '58 - 68 يوماً (المتوسط 63 يوماً)',
    },
    normalVitals: {
      tempC: '38.0 - 39.2 °C (100.4 - 102.5 °F)',
      heartRateBpm: '60 - 140 bpm (size dependent)',
      respiratoryRateBpm: '15 - 30 breaths/min',
    },
  },
  feline: {
    id: 'feline',
    name: {
      en: 'Feline (Cat)',
      ar: 'السنوريات (القط)',
    },
    scientificName: 'Felis catus',
    icon: 'Cat',
    description: {
      en: 'Obligate carnivore with unique metabolic adaptations. Features flexible spine, protractile claws, filiform papillae on tongue, and high dietary protein requirements with inability to synthesize taurine.',
      ar: 'حيوان لاحم إجباري ذو تكيفات أيضية فريدة. يتميز بعمود فقري شديد المرونة ومخالب قابلة للانقباض وحليمات خيطية على اللسان وعدم القدرة على تصنيع التورين.',
    },
    systemsAvailable: ['skeletal', 'muscular', 'circulatory', 'nervous', 'digestive', 'respiratory', 'urogenital'],
    anatomicalHighlights: [
      {
        en: 'Filiform papillae with keratinized spines on the dorsal lingual surface',
        ar: 'حليمات خيطية كيراتينية مسننة على سطح اللسان لتمشيط الفراء وكشط العظام',
      },
      {
        en: 'Floating rudimentary clavicle allowing passage through narrow openings',
        ar: 'عظم ترقوة عائم غير متمفصل يتيح المرور عبر المساحات الضيقة',
      },
      {
        en: 'Narrow urethral lumen in males prone to obstructive urolithiasis (FLUTD)',
        ar: 'مجرى بولي ضيق جداً في الذكور عرضة للانسداد بالحصوات (متلازمة FLUTD)',
      },
    ],
    gestationPeriod: {
      en: '63 - 67 days',
      ar: '63 - 67 يوماً',
    },
    normalVitals: {
      tempC: '38.1 - 39.2 °C',
      heartRateBpm: '140 - 220 bpm',
      respiratoryRateBpm: '20 - 40 breaths/min',
    },
  },
  equine: {
    id: 'equine',
    name: {
      en: 'Equine (Horse)',
      ar: 'الخيليات (الحصان)',
    },
    scientificName: 'Equus caballus',
    icon: 'Compass',
    description: {
      en: 'Perissodactyla (odd-toed ungulate) and specialized hindgut fermenter. Features an expansive cecum and large colon for microbial cellulose breakdown, a stay apparatus for passive standing, and an obligate nasal breathing airway.',
      ar: 'حيوان حافري فردي الأصابع وخمّار للأمعاء الغليظة. يتميز بأعور ضخم وقولون كبير لتخمير السيليلوز، وجهاز ثبات ميكانيكي للوقوف دون إجهاد، وتعتبر الخيول متنفساً أنفياً إجبارياً.',
    },
    systemsAvailable: ['skeletal', 'muscular', 'circulatory', 'nervous', 'digestive', 'respiratory', 'urogenital'],
    anatomicalHighlights: [
      {
        en: 'Guttural pouches (diverticula of Eustachian tubes) bordering internal carotid artery',
        ar: 'الأكياس الحلقية (الردوب السمعية) المجاورة للشريان السباتي الباطني والأعصاب القحفية',
      },
      {
        en: 'Stay apparatus in thoracic and pelvic limbs allowing resting while standing',
        ar: 'جهاز التثبيت الميكانيكي في القوائم الذي يسمح للحصان بالنوم واقفاً باستهلاك عضلي شبه منعدم',
      },
      {
        en: 'Inability to vomit due to acute angle of cardia and powerful cardiac sphincter',
        ar: 'عدم القدرة على التقيؤ بسبب الزاوية الحادة للمريء وعضلة الفؤاد المعصرة القوية جداً',
      },
    ],
    gestationPeriod: {
      en: '330 - 345 days (avg. 11 months)',
      ar: '330 - 345 يوماً (حوالي 11 شهراً)',
    },
    normalVitals: {
      tempC: '37.2 - 38.3 °C',
      heartRateBpm: '28 - 44 bpm',
      respiratoryRateBpm: '8 - 16 breaths/min',
    },
  },
  bovine: {
    id: 'bovine',
    name: {
      en: 'Bovine (Cattle / Cow)',
      ar: 'البقريات (الأبقار)',
    },
    scientificName: 'Bos taurus',
    icon: 'Shield',
    description: {
      en: 'Ruminant artiodactyl with a complex compound stomach consisting of four compartments: Rumen, Reticulum, Omasum, and Abomasum. Adapted for symbiotic microbial fermentation and rumination.',
      ar: 'حيوان مجتر مزدوج الأصابع ذو معدة مركبة تتكون من أربعة حجرات: الكرش، القلنسوة (الشبكية)، أم التلافيف، والأنفحة (المعدة الحقيقية). مهيأ للتخمر الميكروبي والاجترار.',
    },
    systemsAvailable: ['skeletal', 'muscular', 'circulatory', 'nervous', 'digestive', 'respiratory', 'urogenital'],
    anatomicalHighlights: [
      {
        en: 'Compound 4-chamber stomach with massive rumen capacity (150-200 L in adults)',
        ar: 'معدة مركبة رباعية الحجرات ذات سعة كرش تصل إلى 150-200 لتر في الأبقار البالغة',
      },
      {
        en: 'Dental pad (pulvinus dentalis) replacing upper incisors',
        ar: 'الوسادة السنية القرنية العلوية كبديل للقواطع العلوية للقبض على الأعشاب',
      },
      {
        en: 'Proximity of reticulum to pericardial sac (predisposition to Hardware Disease)',
        ar: 'المجاورة التشريحية الوثيقة بين الشبكية وغشاء التامور مما يسبب مرض السلك المعدني',
      },
    ],
    gestationPeriod: {
      en: '279 - 290 days (avg. 283 days)',
      ar: '279 - 290 يوماً (المتوسط 283 يوماً)',
    },
    normalVitals: {
      tempC: '38.0 - 39.3 °C',
      heartRateBpm: '48 - 84 bpm',
      respiratoryRateBpm: '15 - 35 breaths/min',
    },
  },
  ovine: {
    id: 'ovine',
    name: {
      en: 'Ovine (Sheep)',
      ar: 'الضأن (الأغنام)',
    },
    scientificName: 'Ovis aries',
    icon: 'Layers',
    description: {
      en: 'Small ruminant characterized by a split upper lip (philtrum) enabling close grazing, complex spiral colon, and high sensitivity to copper toxicity.',
      ar: 'حيوان مجتر صغير يتميز بشفة علوية مشقوقة تمكنه من الرعي القريب جداً من سطح الأرض، وقولون لولبي معقد، وحساسية دوائية مفرطة لتسمم النحاس.',
    },
    systemsAvailable: ['skeletal', 'muscular', 'circulatory', 'nervous', 'digestive', 'respiratory', 'urogenital'],
    anatomicalHighlights: [
      {
        en: 'Deeply grooved philtrum allowing selective grazing near ground roots',
        ar: 'شق عميق بالشفة العليا يسمح باختيار أوراق الأعشاب الدقيقة بالقرب من الجذور',
      },
      {
        en: 'Vermiform appendage (urethral process) in males prone to calculi lodge',
        ar: 'الزائدة الدودية للإحليل عند الكباش وهي مكان متكرر لانحشار الحصوات البولية',
      },
      {
        en: 'Hepatic copper storage vulnerability leading to acute hemolytic crises',
        ar: 'آلية تخزين كبدية خاصة للنحاس تجعل الأغنام عرضة لأزمات انحلال الدم الحادة',
      },
    ],
    gestationPeriod: {
      en: '144 - 152 days (avg. 147 days)',
      ar: '144 - 152 يوماً (حوالي 5 أشهر)',
    },
    normalVitals: {
      tempC: '38.5 - 39.8 °C',
      heartRateBpm: '70 - 90 bpm',
      respiratoryRateBpm: '16 - 34 breaths/min',
    },
  },
  avian: {
    id: 'avian',
    name: {
      en: 'Avian (Bird / Poultry)',
      ar: 'الطيور (الدواجن والطيور الجارحة)',
    },
    scientificName: 'Gallus gallus domesticus',
    icon: 'Feather',
    description: {
      en: 'Highly specialized dinosaurian lineage adapted for flight. Features pneumatic bones, continuous unidirectional airflow via non-expansile lungs and air sacs, muscular gizzard (ventriculus), and a common cloaca.',
      ar: 'سلالة متخصصة للغاية مهيأة للطيران. تتميز بعظام هوائية مجوفة، وجهاز تنفسي ذي تدفق هوائي مستمر أحادي الاتجاه عبر الرئتين والأكياس الهوائية، وقانصة عضلية، ومجمع بولي تناسلي هضمي مشترك (المذرق).',
    },
    systemsAvailable: ['skeletal', 'muscular', 'circulatory', 'nervous', 'digestive', 'respiratory', 'urogenital'],
    anatomicalHighlights: [
      {
        en: 'Nine respiratory air sacs acting as bellows providing unidirectional oxygen flow',
        ar: 'تسعة أكياس هوائية تعمل كمنفاخ لتوفير تدفق هوائي مستمر أحادي الاتجاه غني بالأكسجين',
      },
      {
        en: 'Pneumatic bones (e.g. humerus, femur) directly communicating with respiratory system',
        ar: 'عظام هوائية مجوفة متصلة مباشرة بالأكياس الهوائية لتخفيف وزن الجسم أثناء الطيران',
      },
      {
        en: 'Single functional left ovary and oviduct in most avian species',
        ar: 'مبيض وقناة فالوب وظيفية واحدة فقط في الجانب الأيسر لتقليل الوزن الهيكلي',
      },
    ],
    gestationPeriod: {
      en: 'Incubation: 21 days (Chicken), 28 days (Turkey/Duck)',
      ar: 'مدة الحضانة: 21 يوماً (الدجاج)، 28 يوماً (البط والرومي)',
    },
    normalVitals: {
      tempC: '40.5 - 42.5 °C',
      heartRateBpm: '250 - 450 bpm',
      respiratoryRateBpm: '25 - 50 breaths/min',
    },
  },
  camelid: {
    id: 'camelid',
    name: {
      en: 'Camelids (Dromedary Camel)',
      ar: 'الإبليات (الجمل وحيد السنام)',
    },
    scientificName: 'Camelus dromedarius',
    icon: 'Award',
    description: {
      en: 'Remarkable desert pseudo-ruminant with three-chambered stomach (C1, C2, C3, lacking an omasum). Features elliptical non-nucleated erythrocytes, glandular saccules in C1, fibrous foot pads, and adipose-storing dorsal hump.',
      ar: 'حيوان صحراوي فائق التكيف من شبيهات المجترات ذو معدة ثلاثية الحجرات (C1 و C2 و C3). يتميز بكريات دم حمراء إهليلجية وأكياس غدية مائية وخف ليفي وسنام شحمي ظهري.',
    },
    systemsAvailable: ['skeletal', 'muscular', 'circulatory', 'nervous', 'digestive', 'respiratory', 'urogenital'],
    anatomicalHighlights: [
      {
        en: 'Three-chambered stomach (C1, C2, C3, completely lacking an omasum)',
        ar: 'معدة ثلاثية التجاويف (C1 و C2 و C3 تفتقر تماماً لأم التلافيف)',
      },
      {
        en: 'Elliptical erythrocytes resisting osmotic lysis during acute rehydration',
        ar: 'كريات دم حمراء بيضاوية الشكل تقاوم الانحلال الأسموزي عند شرب كميات هائلة من الماء',
      },
      {
        en: 'Spiral colon with high mucosal absorptive surface for extreme water retention',
        ar: 'قولون حلزوني ذو قدرة امتصاصية فائقة تحافظ على الماء وتنتج روثاً شديد الجفاف',
      },
    ],
    gestationPeriod: {
      en: '360 - 420 days (~12 - 13 months)',
      ar: '360 - 420 يوماً (~12 - 13 شهراً)',
    },
    normalVitals: {
      tempC: '34.5 - 40.5 °C (Adaptive heterothermy)',
      heartRateBpm: '32 - 52 bpm',
      respiratoryRateBpm: '8 - 18 breaths/min',
    },
  },
};

// Aliases for multi-species compatibility
ANIMALS_DATA['ovine_caprine'] = ANIMALS_DATA['ovine'];

