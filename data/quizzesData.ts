import { QuizQuestion, Flashcard } from '../types/i18n';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1_canine_heart',
    type: 'pin_organ',
    species: 'canine',
    system: 'circulatory',
    targetOrganId: 'canine_heart',
    correctOrganId: 'canine_heart',
    question: {
      en: 'Locate and click on the organ primarily affected by Myxomatous Mitral Valve Disease (MMVD) in small canine breeds.',
      ar: 'حدد وانقر في النموذج ثلاثي الأبعاد على العضو الأكثر تأثراً بمرض الصمام التاجي المخاطي في سلالات الكلاب الصغيرة.',
    },
    explanation: {
      en: 'The Heart (Cor) is the central pump. Degenerative changes in the mitral valve leaflets cause systolic regurgitation, leading to left atrial enlargement and pulmonary edema.',
      ar: 'القلب (Cor) هو المضخة المركزية. التغيرات التنكسية في شرفات الصمام التاجي تسبب ارتجاعاً انقباضياً وتضخماً في الأذين الأيسر ووذمة رئوية.',
    },
    clinicalRelevance: {
      en: 'Auscultate at the left 5th intercostal space at the costochondral junction (mitral punctum maximum).',
      ar: 'يتم التسمع عند الفراغ الوربي الخامس الأيسر عند التقاطع الغضروفي الضلعي.',
    },
    difficulty: 'easy',
  },
  {
    id: 'q2_gdv_stomach',
    type: 'pin_organ',
    species: 'canine',
    system: 'digestive',
    targetOrganId: 'canine_stomach',
    correctOrganId: 'canine_stomach',
    question: {
      en: 'Identify the organ that rotates clockwise along its mesenteric axis during GDV in deep-chested dogs.',
      ar: 'حدد في النموذج ثلاثي الأبعاد العضو الذي ينفتل باتجاه عقارب الساعة حول محوره المساريقي أثناء متلازمة GDV في الكلاب ذات الصدر العميق.',
    },
    explanation: {
      en: 'The Stomach (Gaster) rotates clockwise, displacing the pylorus dorsally and to the left, which occludes the esophageal and duodenal openings.',
      ar: 'تنفتل المعدة (Gaster) باتجاه عقارب الساعة، مما يزيح البواب للأعلى وإلى اليسار ويغلق فتحتي المريء والاثني عشر.',
    },
    clinicalRelevance: {
      en: 'Prophylactic incisional gastropexy permanently affixes the antrum to the right abdominal wall.',
      ar: 'تثبيت المعدة الوقائي (Gastropexy) يربط غار البواب بشكل دائم بالجدار البطني الأيمن لمنع الانفتال.',
    },
    difficulty: 'medium',
  },
  {
    id: 'q3_kidney_filtration',
    type: 'pin_organ',
    species: 'canine',
    system: 'urogenital',
    targetOrganId: 'canine_kidneys',
    correctOrganId: 'canine_kidneys',
    question: {
      en: 'Click on the retroperitoneal organ responsible for maintaining erythropoietin production and blood urea nitrogen filtration.',
      ar: 'انقر على العضو خلف الصفاق المسؤول عن إفراز هرمون الإريثروبويتين وترشيح نيتروجين البولينا من الدم.',
    },
    explanation: {
      en: 'The Kidneys (Renes) filter metabolic waste and secrete erythropoietin in response to renal tissue hypoxia.',
      ar: 'تقوم الكليتان (Renes) بترشيح الفضلات الأيضية وإفراز هرمون الإريثروبويتين استجابة لنقص أكسجة الأنسجة الكلوية.',
    },
    clinicalRelevance: {
      en: 'In cats, the left kidney is easily palpated due to its pendulous mesonephric attachment.',
      ar: 'في القطط، يسهل جس الكلية اليسرى يدوياً نظراً لمرونة وتعليق رباطها المساريقي.',
    },
    difficulty: 'easy',
  },
  {
    id: 'q4_bovine_rumen',
    type: 'multiple_choice',
    species: 'bovine',
    system: 'digestive',
    question: {
      en: 'Which anatomical structure occupies almost the entire left side of the bovine abdominal cavity?',
      ar: 'أي بنية تشريحية تشغل الجانب الأيسر بالكامل تقريباً من التجويف البطني للبقرة؟',
    },
    options: [
      { en: 'Abomasum (True glandular stomach)', ar: 'الأنفحة (المعدة الغدية الحقيقية)' },
      { en: 'Rumen (Paunch)', ar: 'الكرش (المخمر الحيوي الأكبر)' },
      { en: 'Cecum and spiral colon', ar: 'الأعور والقولون الحلزوني' },
      { en: 'Omasum (Manyplies)', ar: 'أم التلافيف' },
    ],
    correctOptionIndex: 1,
    explanation: {
      en: 'The Rumen is so voluminous (150-200 L) that it fills the entire left half of the bovine abdomen, from the 8th rib back to the pelvic inlet.',
      ar: 'الكرش هائل السعة (150-200 لتر) بحيث يملأ النصف الأيسر بالكامل من بطن الأبقار من الضلع الثامن حتى مدخل الحوض.',
    },
    clinicalRelevance: {
      en: 'Ruminal contractions are assessed via stethoscope over the left paralumbar fossa (1-3 contractions / 2 minutes).',
      ar: 'يتم تقييم حركات الكرش بالسماعة الطبية على الحفرة القطنية اليسرى (1-3 تقلصات كل دقيقتين).',
    },
    difficulty: 'easy',
  },
  {
    id: 'q5_feline_clavicle',
    type: 'multiple_choice',
    species: 'feline',
    system: 'skeletal',
    question: {
      en: 'What unique morphological feature distinguishes the feline pectoral girdle from canine anatomy?',
      ar: 'ما الميزة المورفولوجية الفريدة التي تميز الحزام الصدري للقطط مقارنة بالكلاب؟',
    },
    options: [
      { en: 'Fused coracoid bone with scapula', ar: 'التحام عظم الغرابي مع لوح الكتف' },
      { en: 'Separate, floating rudimentary clavicle embedded in brachiocephalicus muscle', ar: 'وجود عظم ترقوة بدائي عائم منفصل مغمور داخل العضلة العضدية الرأسية' },
      { en: 'Complete lack of any clavicular structure or intersection', ar: 'غياب تام لأي أثر تشريحي لعظم الترقوة' },
      { en: 'Articulating clavicle with manubrium and acromion', ar: 'تمفصل عظم الترقوة مع عظم القص والأخرم' },
    ],
    correctOptionIndex: 1,
    explanation: {
      en: 'Cats possess a distinct, thin, rod-like rudimentary clavicle that floats within the brachiocephalicus muscle without true bony articulation, visible on lateral thoracic radiographs.',
      ar: 'تمتلك القطط عظم ترقوة بدائياً نحيلاً كالقضيب يعوم داخل العضلة العضدية الرأسية دون تمفصل عظمي، ويظهر بوضوح في صور الأشعة السينية الجانبية.',
    },
    clinicalRelevance: {
      en: 'Must not be mistaken for a radio-opaque linear foreign body on feline thoracic radiographs!',
      ar: 'يجب عدم الخلط بينه وبين جسم غريب خطي ظليل على الأشعة في صور الصدر الشعاعية للقطط!',
    },
    difficulty: 'medium',
  },
];

export const FLASHCARDS_DECK: Flashcard[] = [
  {
    id: 'fc_1',
    system: 'circulatory',
    species: 'canine',
    latinName: 'Valva atrioventricularis sinistra (Mitralis)',
    question: {
      en: 'Where is the optimal point of maximum intensity (punctum maximum) for auscultating the canine mitral valve?',
      ar: 'أين تقع نقطة التسمع العظمى (Punctum maximum) المثالية لفحص الصمام التاجي في الكلاب؟',
    },
    answer: {
      en: 'Left 5th intercostal space at the costochondral junction (low on the left thoracic wall near the cardiac apex).',
      ar: 'الفراغ الوربي الخامس الأيسر عند التقاطع الغضروفي الضلعي (أسفل الجدار الصدري الأيسر قرب قمة القلب).',
    },
    keyPoints: [
      { en: 'PAM rule on Left: Pulmonic (3rd ICS), Aortic (4th ICS), Mitral (5th ICS)', ar: 'قاعدة PAM على الجانب الأيسر: الرئوي (الورب 3)، الأبهري (الورب 4)، التاجي (الورب 5)' },
      { en: 'Tricuspid valve is auscultated on the Right 4th intercostal space', ar: 'الصمام ثلاثي الشرفات يُسمع على الجانب الأيمن في الفراغ الوربي الرابع' },
    ],
    clinicalSignificance: {
      en: 'Key landmark for detecting systolic murmurs indicative of Myxomatous Mitral Valve Disease (MMVD).',
      ar: 'الموقع الرئيسي لاكتشاف النفخات الانقباضية الدالة على مرض الصمام التاجي المخاطي.',
    },
  },
  {
    id: 'fc_2',
    system: 'digestive',
    species: 'equine',
    latinName: 'Flexura pelvina',
    question: {
      en: 'Why is the pelvic flexure (flexura pelvina) in the equine large colon the most frequent site of impaction colic?',
      ar: 'لماذا يعتبر الانثناء الحوضي (Flexura pelvina) في القولون الكبير للحصان الموقع الأكثر عرضة لمغص الانحشار؟',
    },
    answer: {
      en: 'The large colon undergoes an abrupt 180-degree hairpin turn while simultaneously narrowing from a diameter of ~30 cm (left ventral colon) to only ~8-10 cm (left dorsal colon), with upward anti-gravity flow.',
      ar: 'يحدث في هذا الموضع دوران حاد بزاوية 180 درجة مع تضيق فجائي في القطر من 30 سم (القولون البطني الأيسر) إلى 8-10 سم فقط (القولون الظهري الأيسر) مع تدفق عكس الجاذبية.',
    },
    keyPoints: [
      { en: 'Easily palpable per rectum as a smooth, doughy/firm mass in the caudoventral left pelvic canal', ar: 'يُجس بسهولة عبر المستقيم ككتلة عجينيه ملساء في مدخل الحوض الأيسر' },
      { en: 'Initial management involves enteral fluids with electrolytes/laxatives via nasogastric tube', ar: 'يبدأ العلاج بتمرير سوائل وملينات عبر الأنبوب الأنفي المعدي' },
    ],
    clinicalSignificance: {
      en: 'Accounting for over 35% of all equine medical colic admissions worldwide.',
      ar: 'يمثل أكثر من 35% من جميع حالات المغص الطبي في مستشفيات الخيول حول العالم.',
    },
  },
  {
    id: 'fc_3',
    system: 'digestive',
    species: 'bovine',
    latinName: 'Reticulum et Pericardium',
    question: {
      en: 'Explain the anatomical predisposition for Traumatic Reticuloperitonitis (Hardware Disease) in cattle.',
      ar: 'وضح التكيف والتقارب التشريحي المسبب لمرض السلك المعدني والتهاب التامور الرضحي في الأبقار.',
    },
    answer: {
      en: 'The honeycomb reticulum sits directly against the abdominal face of the diaphragm, separated by merely 2-3 cm from the pericardial sac and apex of the heart.',
      ar: 'تقع القلنسوة (الشبكية) مباشرة ملاصقة للسطح البطني للحجاب الحاجز، ولا يفصلها سوى 2-3 سم فقط عن كيس التامور وقمة القلب.',
    },
    keyPoints: [
      { en: 'Cattle do not discriminate metal objects due to non-sensitive prehensile tongues', ar: 'الأبقار تبتلع الأسلاك والمسامير دون تمييز بسبب طبيعة لسانها غير الحساس' },
      { en: 'Ruminal/reticular contractions drive sharp wires through diaphragm into the pericardium', ar: 'تقلصات الشبكية تدفع الأسلاك الحادة عبر الحجاب الحاجز مباشرة إلى غشاء القلب' },
      { en: 'Administration of a prophylactic ruminal magnet traps ferrometallic hardware in the reticulum', ar: 'إعطاء مغناطيس معدي وقائي يمسك الأجسام الحديدية داخل الشبكية ويمنع اختراقها' },
    ],
    clinicalSignificance: {
      en: 'Presents with arched back, abducted elbows, washing-machine splashing heart sounds, and jugular venous pulse.',
      ar: 'تظهر البقرة بظهر مقوس وأكواع متباعدة وأصوات خض كالغسالة في القلب وتورم النبض الوداجي.',
    },
  },
  {
    id: 'fc_4',
    system: 'skeletal',
    species: 'canine',
    latinName: 'Ligamentum cruciatum craniale',
    question: {
      en: 'What physical diagnostic test confirms Cranial Cruciate Ligament (CCL) rupture in the canine stifle?',
      ar: 'ما الفحص التشخيصي اليدوي الذي يؤكد تمزق الرباط الصليبي الأمامي في مفصل ركبة الكلب؟',
    },
    answer: {
      en: 'The Cranial Drawer Test (demonstrating cranial subluxation of the tibial plateau relative to the femoral condyles) and the Tibial Compression Test (tibial thrust).',
      ar: 'اختبار الدرج الأمامي (Cranial Drawer Test) الذي يظهر انزلاق هضبة القصبة للأمام بالنسبة للقمة الفخذ، واختبار ضغط القصبة.',
    },
    keyPoints: [
      { en: 'Normal stifle should have zero cranial translation in an adult canine', ar: 'المفصل السليم لا يسمح بأي حركة انزلاق أمامية في الكلاب البالغة' },
      { en: 'Sedation often required to overcome quadriceps/hamstring muscle guarding', ar: 'غالباً ما يتطلب الفحص مهدئاً للتغلب على مقاومة وتشنج عضلات الفخذ' },
      { en: 'TPLO (Tibial Plateau Leveling Osteotomy) neutralizes cranial tibial thrust biomechanically', ar: 'جراحة TPLO تعيد تسوية زاوية هضبة القصبة لمعادلة قوى الدفع ميكانيكياً' },
    ],
    clinicalSignificance: {
      en: 'Most common orthopedic surgical disease in canine companion practice.',
      ar: 'الحالة الجراحية العظمية الأكثر شيوعاً على الإطلاق في عيادات الكلاب.',
    },
  },
];
