// scripts/build-anatomy-data.js
const fs = require('fs');
const path = require('path');

const SPECIES_LIST = [
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

const SYSTEMS_LIST = [
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

const speciesSystemsData = {
  // EQUINE
  equine: {
    cardiovascular: [
      {
        meshId: 'Mesh_Equine_Cor',
        nameEn: 'Equine Heart',
        nameAr: 'قلب الحصان',
        latinName: 'Cor (Equus caballus)',
        descriptionEn: 'Massive muscular pump weighing 4-5 kg (roughly 1% of body weight), producing resting cardiac output of 35-45 L/min and up to 300 L/min during peak gallop.',
        descriptionAr: 'مضخة عضلية هائلة تزن 4-5 كجم (1% من وزن الجسم)، تضخ 35-45 لتر/دقيقة وقت الراحة وتصل لـ 300 لتر/دقيقة أثناء العدو الأقصى.',
        bloodSupplyEn: 'Left and right coronary arteries arising directly from aortic sinuses.',
        bloodSupplyAr: 'الشريانان التاجيان الأيمن والأيسر من الجيب الأبهري.',
        innervationEn: 'Vagus nerve (CN X, parasympathetic) and sympathetic fibers from cervicothoracic ganglion.',
        innervationAr: 'العصب المبهم (العصب العاشر) والألياف الودية من العقدة الرقبية الصدرية.',
        clinicalPearlsEn: 'Physiological 2nd-degree AV block is common and benign in athletic horses, disappearing with exercise or excitement.',
        clinicalPearlsAr: 'إحصار القلب الأذيني البطيني من الدرجة الثانية شائع وحميد في خيول السباق ويزول مع الحركة.',
        focusCoordinates: { position: [1.2, 0.6, 0.4], target: [0, 0.3, 0.1] },
        geometry: { shape: 'cone', position: [0.1, 0.4, 0.4], rotation: [Math.PI, 0, 0.2], scale: [0.35, 0.5, 0.35], color: '#dc2626', roughness: 0.3, metalness: 0.1 },
        quizQuestions: [
          {
            questionEn: 'Which physiological cardiac arrhythmia is benign in resting athletic horses?',
            questionAr: 'أي اضطراب نظم قلبي يعتبر حميداً في خيول السباق المستريحة؟',
            options: [
              { en: 'Second-degree AV block (Mobitz Type I)', ar: 'إحصار أذيني بطيني من الدرجة الثانية' },
              { en: 'Ventricular fibrillation', ar: 'الرجفان البطيني' },
              { en: 'Third-degree complete heart block', ar: 'إحصار القلب التام من الدرجة الثالثة' },
              { en: 'Atrial standstill', ar: 'توقف الأذينين التام' }
            ],
            correctAnswer: 'Second-degree AV block (Mobitz Type I)',
            explanationEn: 'High resting vagal tone in athletic horses commonly causes physiological 2nd-degree AV block that disappears with sympathetic stimulation.',
            explanationAr: 'ارتفاع توتر العصب المبهم وقت الراحة يسبب إحصاراً فسيولوجياً حميداً يزول فوراً مع النشاط البدني.'
          },
          {
            questionEn: 'What is the normal resting cardiac output in an adult thoroughbred horse?',
            questionAr: 'ما هو النتاج القلبي الطبيعي وقت الراحة في الحصان البالغ؟',
            options: [
              { en: '35 - 45 L/min', ar: '35 - 45 لتر/دقيقة' },
              { en: '5 - 10 L/min', ar: '5 - 10 لتر/دقيقة' },
              { en: '80 - 100 L/min', ar: '80 - 100 لتر/دقيقة' },
              { en: '150 - 200 L/min', ar: '150 - 200 لتر/دقيقة' }
            ],
            correctAnswer: '35 - 45 L/min',
            explanationEn: 'Resting cardiac output is 35-45 L/min and can increase up to 300 L/min during maximal exercise.',
            explanationAr: 'يبلغ النتاج القلبي 35-45 لتر/دقيقة وقت الراحة ويرتفع إلى 300 لتر/دقيقة عند العدو الأقصى.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_Aorta',
        nameEn: 'Equine Thoracic Aorta',
        nameAr: 'الأبهر الصدري للحصان',
        latinName: 'Aorta thoracica',
        descriptionEn: 'The primary high-pressure elastic conduit emerging from the left ventricle, distributing systemic oxygenated blood.',
        descriptionAr: 'المجرى الشرياني المرن عالي الضغط الصادر من البطين الأيسر المنحني ظهرياً لتوزيع الدم المؤكسج.',
        bloodSupplyEn: 'Direct systemic arterial outflow.',
        bloodSupplyAr: 'المجرى الرئيسي الشرياني الجهازي.',
        innervationEn: 'Aortic baroreceptors innervated by the vagus nerve (CN X).',
        innervationAr: 'مستقبلات الضغط الأبهرية عبر العصب المبهم.',
        clinicalPearlsEn: 'Spontaneous aortic rupture at the bulb can cause peracute collapse and hemothorax in stallions during breeding.',
        clinicalPearlsAr: 'تمزق جذر الأبهر قد يسبب الانهيار المفاجئ والنزف الصدري في الفحول أثناء التلقيح.',
        focusCoordinates: { position: [1.0, 0.9, 0.3], target: [0, 0.7, 0.2] },
        geometry: { shape: 'torus', position: [0, 0.68, 0.3], rotation: [Math.PI / 2, 0.3, 0], scale: [0.28, 0.28, 0.35], color: '#b91c1c', roughness: 0.35, metalness: 0.2 },
        quizQuestions: [
          {
            questionEn: 'Aortic arch baroreceptors transmit afferent signals via which nerve?',
            questionAr: 'تنقل مستقبلات قوس الأبهر إشاراتها عبر أي عصب؟',
            options: [
              { en: 'Vagus nerve (CN X)', ar: 'العصب المبهم (العصب العاشر)' },
              { en: 'Glossopharyngeal nerve (CN IX)', ar: 'العصب البلعومي اللساني' },
              { en: 'Phrenic nerve', ar: 'العصب الحجابي' },
              { en: 'Accessory nerve (CN XI)', ar: 'العصب الإضافي' }
            ],
            correctAnswer: 'Vagus nerve (CN X)',
            explanationEn: 'Aortic arch baroreceptors travel via CN X, whereas carotid sinus travels via CN IX.',
            explanationAr: 'تنتقل إشارات مستقبلات الأبهر عبر العصب العاشر بينما الجيب السباتي عبر التاسع.'
          },
          {
            questionEn: 'Aortic rupture in breeding stallions typically creates a fistula into which chamber?',
            questionAr: 'تمزق الأبهر في الفحول يفتح عادة إلى أي تجويف؟',
            options: [
              { en: 'Right atrium', ar: 'الأذين الأيمن' },
              { en: 'Left ventricle', ar: 'البطين الأيسر' },
              { en: 'Esophagus', ar: 'المريء' },
              { en: 'Trachea', ar: 'القصبة الهوائية' }
            ],
            correctAnswer: 'Right atrium',
            explanationEn: 'Rupture typically forms an aorto-cardiac fistula into the right atrium.',
            explanationAr: 'يتمزق الأبهر عادة إلى الأذين الأيمن مسبباً ناصوراً قلبياً أبهرياً.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_VenaCava',
        nameEn: 'Equine Vena Cava',
        nameAr: 'الوريد الأجوف للحصان',
        latinName: 'Vena cava',
        descriptionEn: 'Major systemic venous drainage vessels returning deoxygenated blood to the right atrium.',
        descriptionAr: 'الأوردة الجهازية الكبرى التي تعيد الدم غير المؤكسج إلى الأذين الأيمن.',
        bloodSupplyEn: 'Systemic venous return.',
        bloodSupplyAr: 'العائد الوريدي الجهازي.',
        innervationEn: 'Sympathetic vasomotor fibers.',
        innervationAr: 'ألياف حركية وعائية ودية.',
        clinicalPearlsEn: 'CVP catheterization via the jugular vein into cranial vena cava guides volume resuscitation in colic.',
        clinicalPearlsAr: 'قسطرة قياس الضغط الوريدي المركزي ترشد الإنعاش بالسوائل في حالات المغص الحاد.',
        focusCoordinates: { position: [-1.0, 0.6, 0.2], target: [0, 0.5, 0.15] },
        geometry: { shape: 'cylinder', position: [-0.08, 0.52, 0.18], rotation: [0.2, 0, 0], scale: [0.12, 0.8, 0.12], color: '#2563eb', roughness: 0.4, metalness: 0.1 },
        quizQuestions: [
          {
            questionEn: 'Where does the caudal vena cava pass through the equine diaphragm?',
            questionAr: 'أين يعبر الوريد الأجوف الخلفي من خلال الحجاب الحاجز في الخيل؟',
            options: [
              { en: 'Foramen venae cavae', ar: 'ثقبة الوريد الأجوف في المركز الوتري' },
              { en: 'Hiatus aorticus', ar: 'الفرجة الأبهرية' },
              { en: 'Hiatus esophageus', ar: 'الفرجة المريئية' },
              { en: 'Lumbocostal arch', ar: 'القوس القطني الضلعي' }
            ],
            correctAnswer: 'Foramen venae cavae',
            explanationEn: 'It passes through the foramen venae cavae in the tendinous center of the diaphragm.',
            explanationAr: 'يعبر من خلال ثقبة الوريد الأجوف في المركز الوتري للحجاب الحاجز.'
          },
          {
            questionEn: 'A prominent jugular pulse rising high in the equine neck suggests what abnormality?',
            questionAr: 'ماذا يشير نبض الوريد الوداجي المرتفع في رقبة الحصان؟',
            options: [
              { en: 'Tricuspid insufficiency', ar: 'قصور الصمام ثلاثي الشرفات' },
              { en: 'Normal athletic finding', ar: 'موجود فسيولوجي طبيعي' },
              { en: 'Dehydration', ar: 'الجفاف الشديد' },
              { en: 'Left ventricular hypertrophy', ar: 'تضخم البطين الأيسر' }
            ],
            correctAnswer: 'Tricuspid insufficiency',
            explanationEn: 'Elevated right atrial pressure causes systolic retrograde pulsation up the jugular.',
            explanationAr: 'ارتفاع ضغط الأذين الأيمن يؤدي لارتجاع النبض في الوريد الوداجي.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_TruncusPulmonalis',
        nameEn: 'Equine Pulmonary Trunk',
        nameAr: 'الجذع الرئوي للحصان',
        latinName: 'Truncus pulmonalis',
        descriptionEn: 'Arterial trunk carrying deoxygenated blood from the right ventricle into the pulmonary circulation.',
        descriptionAr: 'الجذع الشرياني الناقل للدم غير المؤكسج من البطين الأيمن للدورة الرئوية.',
        bloodSupplyEn: 'Pulmonary afferent perfusion.',
        bloodSupplyAr: 'التروية الرئوية الواردة.',
        innervationEn: 'Pulmonary plexus.',
        innervationAr: 'الضفيرة الرئوية.',
        clinicalPearlsEn: 'Extreme pulmonary hypertension during maximal sprint contributes to capillary stress failure and EIPH.',
        clinicalPearlsAr: 'ارتفاع الضغط الرئوي الشديد أثناء السباق يؤدي إلى النزف الرئوي الإجهادي EIPH.',
        focusCoordinates: { position: [1.0, 0.7, 0.5], target: [0.1, 0.55, 0.35] },
        geometry: { shape: 'capsule', position: [0.14, 0.58, 0.42], rotation: [0.4, 0, -0.3], scale: [0.12, 0.4, 0.12], color: '#3b82f6', roughness: 0.35, metalness: 0.15 },
        quizQuestions: [
          {
            questionEn: 'The ductus arteriosus connects the pulmonary trunk to which fetal vessel?',
            questionAr: 'القناة الشريانية الجنينية تصل الجذع الرئوي بأي وعاء؟',
            options: [
              { en: 'Aortic arch', ar: 'قوس الشريان الأبهر' },
              { en: 'Internal carotid', ar: 'الشريان السباتي الباطن' },
              { en: 'Caudal vena cava', ar: 'الوريد الأجوف الخلفي' },
              { en: 'Umbilical vein', ar: 'الوريد السري' }
            ],
            correctAnswer: 'Aortic arch',
            explanationEn: 'The ductus arteriosus shunts blood from the pulmonary trunk to the aorta.',
            explanationAr: 'تحول القناة الشريانية الدم من الجذع الرئوي إلى الأبهر.'
          },
          {
            questionEn: 'Exercise-Induced Pulmonary Hemorrhage (EIPH) involves rupture of which vessels?',
            questionAr: 'النزف الرئوي بالجهد EIPH ينجم عن تمزق أي أوعية؟',
            options: [
              { en: 'Pulmonary capillaries', ar: 'الشعيرات الدموية الرئوية' },
              { en: 'Bronchial arteries', ar: 'الشرايين الشعبية' },
              { en: 'Aortic arch', ar: 'قوس الشريان الأبهر' },
              { en: 'Cranial vena cava', ar: 'الوريد الأجوف الأمامي' }
            ],
            correctAnswer: 'Pulmonary capillaries',
            explanationEn: 'Stress failure of pulmonary capillaries causes blood leakage into airways.',
            explanationAr: 'الفشل الميكانيكي للشعيرات الرئوية يسبب تسرب الدم للمجاري الهوائية.'
          }
        ]
      }
    ],
    digestive: [
      {
        meshId: 'Mesh_Equine_Gaster',
        nameEn: 'Equine Stomach & Margo Plicatus',
        nameAr: 'معدة الحصان والخط المسنن',
        latinName: 'Gaster et Margo plicatus',
        descriptionEn: 'Relatively small stomach (8-15 L) divided sharply by the margo plicatus into a non-glandular squamous fundus and a glandular secretory body.',
        descriptionAr: 'معدة صغيرة نسبياً (8-15 لتر) يقسمها الخط المسنن إلى قسم حرشفي غير غدي وقسم غدي إفرازي.',
        bloodSupplyEn: 'Celiac artery branches: Left gastric, right gastric, and short gastric arteries.',
        bloodSupplyAr: 'فروع الشريان الجوفي: المعدي الأيسر والمعدي الأيمن والشرايين القصيرة.',
        innervationEn: 'Vagus nerve (CN X, motor and secretomotor) and celiac sympathetic plexus.',
        innervationAr: 'العصب المبهم (حركي وإفرازي) والضفيرة الجوفية الودية.',
        clinicalPearlsEn: 'Equine Gastric Ulcer Syndrome (EGUS) occurs predominantly on the squamous mucosa immediately adjacent to the margo plicatus due to acid splashing.',
        clinicalPearlsAr: 'تحدث قرحة معدة الخيل EGUS بشكل رئيسي في الجزء الحرشفي الملاصق للخط المسنن نتيجة ترشاش الأحماض.',
        focusCoordinates: { position: [1.2, 0.7, 0.2], target: [0.1, 0.5, 0.1] },
        geometry: { shape: 'torus', position: [0.12, 0.52, 0.1], rotation: [0.5, 0.8, 0], scale: [0.32, 0.22, 0.26], color: '#d97706', roughness: 0.45, metalness: 0.1 },
        quizQuestions: [
          {
            questionEn: 'Which anatomical landmark divides the non-glandular squamous mucosa from the glandular mucosa in the equine stomach?',
            questionAr: 'ما هو المعلم التشريحي الذي يفصل الغشاء المخاطي الحرشفي عن الغشاء الغدي في معدة الحصان؟',
            options: [
              { en: 'Margo plicatus', ar: 'الخط المسنن (Margo plicatus)' },
              { en: 'Pyloric sphincter', ar: 'عاصرة البواب' },
              { en: 'Incisura angularis', ar: 'الثلمة الزاوية' },
              { en: 'Cardia valvula', ar: 'صمام الفؤاد' }
            ],
            correctAnswer: 'Margo plicatus',
            explanationEn: 'The margo plicatus is the visible serrated junction between the pale squamous non-glandular mucosa and the dark glandular mucosa.',
            explanationAr: 'الخط المسنن هو الحد الفاصل المرئي بين الغشاء الحرشفي الشاحب والغشاء الغدي الداكن.'
          },
          {
            questionEn: 'Why can horses virtually never vomit, even when suffering fatal gastric distension?',
            questionAr: 'لماذا يستحيل على الخيول التقيؤ حتى عند حدوث تمدد وانفجار مميت للمعدة؟',
            options: [
              { en: 'Strong oblique cardiac sphincter', ar: 'صمام الفؤاد العضلي فائق القوة ودخوله بزاوية مائلة' },
              { en: 'Absence of abdominal wall muscles', ar: 'غياب عضلات جدار البطن' },
              { en: 'Lack of a vomiting center', ar: 'عدم وجود مركز قيء في الدماغ' },
              { en: 'Absence of gastric acid', ar: 'عدم وجود حمض المعدة' }
            ],
            correctAnswer: 'Strong oblique cardiac sphincter',
            explanationEn: 'The equine lower esophageal sphincter enters the cardia obliquely and acts as a one-way valve, making vomiting impossible.',
            explanationAr: 'يدخل المريء إلى الفؤاد بزاوية مائلة مع عاصرة عضلية حلقية متطورة تمنع الارتجاع والتقيؤ تماماً.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_Caecum',
        nameEn: 'Equine Cecum',
        nameAr: 'أعور الحصان',
        latinName: 'Caecum (Equus caballus)',
        descriptionEn: 'Immense comma-shaped microbial fermentation vat holding 30-35 liters, occupying the right flank from the tuber coxae to the xiphoid.',
        descriptionAr: 'خزان تخمير ميكروبي هائل على شكل فاصلة يتسع لـ 30-35 لتراً ويشغل الخاصرة اليمنى للحصان.',
        bloodSupplyEn: 'Medial and lateral cecal arteries off the ileocolic artery.',
        bloodSupplyAr: 'الشريانان الأعوريان الأنسي والوحشي من الشريان اللفائفي القولوني.',
        innervationEn: 'Cranial mesenteric plexus and autonomic mesenteric nerves.',
        innervationAr: 'الضفيرة المساريقية الأمامية والأعصاب الذاتية.',
        clinicalPearlsEn: 'Cecal impactions can present insidiously with mild intermittent colic and are prone to sudden fatal perforation without prior violent pain.',
        clinicalPearlsAr: 'انحشار الأعور يظهر بمغص خفيف متقطع ولكنه خطير ومعرض للتمزق والانفجار المفاجئ القاتل.',
        focusCoordinates: { position: [-1.4, 0.4, -0.6], target: [-0.2, 0.2, -0.4] },
        geometry: { shape: 'cone', position: [-0.22, 0.38, -0.28], rotation: [-0.6, 0.4, 0.8], scale: [0.38, 0.65, 0.38], color: '#ca8a04', roughness: 0.5, metalness: 0.1 },
        quizQuestions: [
          {
            questionEn: 'How many longitudinal muscular bands (teniae) are present on the body of the equine cecum?',
            questionAr: 'كم عدد الأحزمة العضلية الطولية (Teniae) الموجودة على جسم أعور الحصان؟',
            options: [
              { en: '4 teniae (dorsal, ventral, medial, lateral)', ar: '4 أحزمة (ظهري، بطني، أنسي، وحشي)' },
              { en: '2 teniae', ar: 'حزامان عضليان' },
              { en: '1 tenia', ar: 'حزام واحد' },
              { en: 'No teniae', ar: 'لا توجد أحزمة عضلية' }
            ],
            correctAnswer: '4 teniae (dorsal, ventral, medial, lateral)',
            explanationEn: 'The equine cecum has 4 longitudinal muscular bands (teniae) and 4 rows of haustra.',
            explanationAr: 'يحتوي أعور الخيل على 4 أحزمة طولية مع جيوب تبرز كمعالم جراحية أساسية.'
          },
          {
            questionEn: 'Which opening connects the terminal ileum directly into the medial aspect of the equine cecum?',
            questionAr: 'ما هي الفتحة التي تربط نهاية اللفائفي بالجانب الأنسي لأعور الحصان؟',
            options: [
              { en: 'Ostium ileale (Ileocecal orifice)', ar: 'الفتحة اللفائفية الأعورية' },
              { en: 'Ostium cecocolicum', ar: 'الفتحة الأعورية القولونية' },
              { en: 'Pylorus', ar: 'فتحة البواب' },
              { en: 'Ostium cardiacum', ar: 'فتحة الفؤاد' }
            ],
            correctAnswer: 'Ostium ileale (Ileocecal orifice)',
            explanationEn: 'The ileum discharges digesta into the base of the cecum through the ileocecal orifice.',
            explanationAr: 'يصب اللفائفي محتواه في قاعدة الأعور عبر الفتحة اللفائفية الأعورية.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_ColonAscendens',
        nameEn: 'Equine Large Colon & Pelvic Flexure',
        nameAr: 'القولون الكبير والانثناء الحوضي للحصان',
        latinName: 'Colon ascendens et Flexura pelvina',
        descriptionEn: 'A voluminous, four-tiered colon characterized by a narrow 180-degree turn at the pelvic flexure.',
        descriptionAr: 'قولون رباعي المسارات يتميز بدوران حاد بمقدار 180 درجة عند الانثناء الحوضي.',
        bloodSupplyEn: 'Colic branch of ileocolic artery and right colic artery.',
        bloodSupplyAr: 'الفرع القولوني من اللفائفي القولوني والشريان القولوني الأيمن.',
        innervationEn: 'Cranial and caudal mesenteric autonomic plexuses.',
        innervationAr: 'الضفائر المساريقية الأمامية والخلفية اللاإرادية.',
        clinicalPearlsEn: 'The pelvic flexure narrows abruptly from 30 cm to 8 cm; it is the most common site of impaction colic and is readily palpable per rectum.',
        clinicalPearlsAr: 'يتضيق الانثناء الحوضي فجأة من 30 سم إلى 8 سم وهو الموقع الأكثر عرضة لمغص الانحشار ويمكن جسه عبر المستقيم.',
        focusCoordinates: { position: [0.2, 0.4, -0.6], target: [0, 0.25, -0.4] },
        geometry: { shape: 'torus', position: [0.02, 0.28, -0.38], rotation: [Math.PI / 2, 0.2, 0], scale: [0.42, 0.35, 0.2], color: '#d97706', roughness: 0.55, metalness: 0.08 },
        quizQuestions: [
          {
            questionEn: 'What is the characteristic change in caliber at the equine pelvic flexure?',
            questionAr: 'ما هو التغير المميز في القطر الداخلي عند الانثناء الحوضي في قولون الخيل؟',
            options: [
              { en: 'Narrows from ~30 cm to ~8 cm', ar: 'يتضيق من ~30 سم إلى ~8 سم' },
              { en: 'Widens from 5 cm to 40 cm', ar: 'يتسع من 5 سم إلى 40 سم' },
              { en: 'Remains uniform throughout', ar: 'يبقى منتظماً بنفس القطر' },
              { en: 'Completely obliterates the lumen', ar: 'ينسد التجويف تماماً' }
            ],
            correctAnswer: 'Narrows from ~30 cm to ~8 cm',
            explanationEn: 'The left ventral colon narrows down abruptly into the pelvic flexure before turning into the left dorsal colon.',
            explanationAr: 'يتضيق القولون البطني الأيسر بشكل حاد عند الانثناء الحوضي قبل الصعود للقولون الظهري الأيسر.'
          },
          {
            questionEn: 'How many teniae does the equine pelvic flexure have?',
            questionAr: 'كم عدد الأحزمة العضلية في الانثناء الحوضي لقولون الخيل؟',
            options: [
              { en: '1 tenia (mesocolic)', ar: 'حزام واحد مساريقي' },
              { en: '4 teniae', ar: '4 أحزمة' },
              { en: '3 teniae', ar: '3 أحزمة' },
              { en: 'None', ar: 'لا يوجد' }
            ],
            correctAnswer: '1 tenia (mesocolic)',
            explanationEn: 'The pelvic flexure has only 1 tenia along its mesenteric attachment, making it smooth on rectal palpation.',
            explanationAr: 'يمتلك الانثناء الحوضي حزاماً واحداً عند الاتصال المساريقي مما يجعله ناعماً أثناء الجس.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_Hepar',
        nameEn: 'Equine Liver (Gallbladder Absent)',
        nameAr: 'كبد الحصان (بدون مرارة)',
        latinName: 'Hepar (Vesica fellea deest)',
        descriptionEn: 'Multilobed metabolic organ positioned almost entirely to the right of the median plane; completely lacks a gallbladder.',
        descriptionAr: 'عضو أيضي متعدد الفصوص يقع معظمه في الجانب الأيمن من التجويف البطني ويفتقر تماماً للمرارة (كيس الصفراء).',
        bloodSupplyEn: 'Portal vein (75%) and hepatic artery (25%); drained by hepatic veins into caudal vena cava.',
        bloodSupplyAr: 'الوريد البابي (75%) والشريان الكبدي (25%) والأوردة الكبدية تصب في الأجوف السفلي.',
        innervationEn: 'Hepatic plexus from celiac ganglion and vagal fibers.',
        innervationAr: 'الضفيرة الكبدية من العقدة الجوفية وألياف العصب المبهم.',
        clinicalPearlsEn: 'Horses continuously secrete bile directly into the duodenum; hyperbilirubinemia develops quickly during anorexia.',
        clinicalPearlsAr: 'تفرز الخيول الصفراء باستمرار إلى الإثني عشر ويرتفع البيليروبين سريعاً عند فقدان الشهية.',
        focusCoordinates: { position: [0.8, 0.8, 0.4], target: [-0.05, 0.6, 0.2] },
        geometry: { shape: 'sphere', position: [-0.08, 0.62, 0.22], rotation: [0.3, 0.4, 0], scale: [0.45, 0.32, 0.28], color: '#854d0e', roughness: 0.4, metalness: 0.12 },
        quizQuestions: [
          {
            questionEn: 'Which anatomical feature is unique to the equine biliary system compared to ruminants?',
            questionAr: 'ما هي الخاصية التشريحية الفريدة للجهاز المراري في الخيل مقارنة بالمجترات؟',
            options: [
              { en: 'Complete absence of a gallbladder', ar: 'الغياب التام للمرارة (كيس الصفراء)' },
              { en: 'Presence of two gallbladders', ar: 'وجود كيسي صفراء' },
              { en: 'Direct drainage into the stomach', ar: 'التصريف المباشر في المعدة' },
              { en: 'Absence of bile ducts', ar: 'غياب القنوات المرارية' }
            ],
            correctAnswer: 'Complete absence of a gallbladder',
            explanationEn: 'Equines lack a gallbladder entirely. Bile is continuously directed into the duodenum.',
            explanationAr: 'تفتقر الخيول للمرارة تماماً وينتقل سائل الصفراء مباشرة من الكبد إلى الإثني عشر.'
          },
          {
            questionEn: 'Why do healthy horses rapidly develop physiological jaundice after 24-48 hours of fasting?',
            questionAr: 'لماذا تصاب الخيول السليمة بيرقان فسيولوجي سريع بعد 24-48 ساعة من الصيام؟',
            options: [
              { en: 'Free fatty acids compete with bilirubin for ligandin uptake', ar: 'تنافس الأحماض الدهنية الحرة للبيليروبين على بروتينات الالتقاط الكبدية' },
              { en: 'Acute massive hemolysis', ar: 'انحلال دم حاد وشديد' },
              { en: 'Bile duct obstruction by gallstones', ar: 'انسداد القناة الصفراوية بحصوات' },
              { en: 'Destruction of hepatocytes', ar: 'تلف خلايا الكبد' }
            ],
            correctAnswer: 'Free fatty acids compete with bilirubin for ligandin uptake',
            explanationEn: 'Fasting mobilizes free fatty acids which competitively inhibit hepatocyte uptake of unconjugated bilirubin.',
            explanationAr: 'يحرر الصيام أحماضاً دهنية حرة تنافس البيليروبين على بروتينات الليغاندين الكبدية.'
          }
        ]
      }
    ],
    respiratory: [
      {
        meshId: 'Mesh_Equine_Larynx',
        nameEn: 'Equine Larynx & Vocal Apparatus',
        nameAr: 'حنجرة الحصان والجهاز الصوتي',
        latinName: 'Larynx (Equus caballus)',
        descriptionEn: 'Cartilaginous valve regulating airflow between pharynx and trachea, containing arytenoid, thyroid, and cricoid cartilages.',
        descriptionAr: 'صمام غضروفي ينظم تدفق الهواء بين البلعوم والقصبة الهوائية، ويتكون من الغضاريف الطرجهارية والدرقية والحلقية.',
        bloodSupplyEn: 'Cranial laryngeal artery from external carotid artery; cranial laryngeal vein.',
        bloodSupplyAr: 'الشريان الحنجري الأمامي من السباتي الظاهر؛ والوريد الحنجري الأمامي.',
        innervationEn: 'Cranial laryngeal nerve (sensory and cricothyroid muscle) and Recurrent laryngeal nerve (all intrinsic muscles except cricothyroid).',
        innervationAr: 'العصب الحنجري الأمامي (حسي) والعصب الحنجري الراجع (حركي لجميع عضلات الحنجرة ما عدا الحلقية الدرقية).',
        clinicalPearlsEn: 'Recurrent laryngeal neuropathy (RLN / "Roaring") causes left-sided hemiplegia due to denervation of the cricoarytenoideus dorsalis muscle.',
        clinicalPearlsAr: 'اعتلال العصب الحنجري الراجع RLN (الخناق أو الصفير) يسبب شللاً نصفياً للجانب الأيسر لضمور العضلة الحلقية الطرجهارية الظهرية.',
        focusCoordinates: { position: [0.8, 1.1, 0.9], target: [0, 0.85, 0.75] },
        geometry: { shape: 'cylinder', position: [0, 0.86, 0.78], rotation: [0.3, 0, 0], scale: [0.18, 0.28, 0.18], color: '#cbd5e1', roughness: 0.4, metalness: 0.05 },
        quizQuestions: [
          {
            questionEn: 'Which muscle is the sole abductor (dilator) of the equine glottis?',
            questionAr: 'ما هي العضلة الوحيدة المبعدة (الموسعة) لمزمار الحنجرة في الخيل؟',
            options: [
              { en: 'Musculus cricoarytenoideus dorsalis (CAD)', ar: 'العضلة الحلقية الطرجهارية الظهرية' },
              { en: 'Musculus cricoarytenoideus lateralis', ar: 'العضلة الحلقية الطرجهارية الوحشية' },
              { en: 'Musculus vocalis', ar: 'العضلة الصوتية' },
              { en: 'Musculus cricothyroideus', ar: 'العضلة الحلقية الدرقية' }
            ],
            correctAnswer: 'Musculus cricoarytenoideus dorsalis (CAD)',
            explanationEn: 'The CAD is the only intrinsic muscle that abducts the arytenoid cartilage to dilate the glottic cleft during inspiration.',
            explanationAr: 'العضلة الحلقية الطرجهارية الظهرية هي العضلة الوحيدة التي تباعد الغضروفين لفتح شق المزمار أثناء الشهيق.'
          },
          {
            questionEn: 'Why is equine laryngeal hemiplegia ("roaring") almost exclusively left-sided (>95%)?',
            questionAr: 'لماذا يحدث شلل الحنجرة في الخيول بشكل شبه حصري في الجانب الأيسر (>95%)؟',
            options: [
              { en: 'Left recurrent laryngeal nerve courses around the aortic arch, making it much longer and vulnerable to stretch/ischemia', ar: 'طول مسار العصب الحنجري الراجع الأيسر ودورانه حول قوس الأبهر يجعله عرضة للإجهاد' },
              { en: 'Right arytenoid cartilage is genetically absent', ar: 'غياب الغضروف الأيمن وراثياً' },
              { en: 'Left guttural pouch has no blood vessels', ar: 'عدم وجود أوعية دموية في الكيس الهوائي الأيسر' },
              { en: 'Right vocal cord is locked in abduction', ar: 'ثبات الحبل الصوتي الأيمن في وضع التوسع' }
            ],
            correctAnswer: 'Left recurrent laryngeal nerve courses around the aortic arch, making it much longer and vulnerable to stretch/ischemia',
            explanationEn: 'The left recurrent nerve loops under the ligamentum arteriosum/aorta, giving it the longest axonal pathway in mammalian anatomy.',
            explanationAr: 'يلتف العصب الراجع الأيسر حول قوس الأبهر مما يجعل مساره المحوري فائق الطول ومعرضاً للإصابة بالاعتلال العصبي.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_Trachea',
        nameEn: 'Equine Trachea',
        nameAr: 'القصبة الهوائية للحصان',
        latinName: 'Trachea (Equus caballus)',
        descriptionEn: 'Cartilaginous airway consisting of 50-60 incomplete hyaline rings extending from cricoid cartilage to thoracic bifurcation at T5.',
        descriptionAr: 'أنبوب هوائي غضروفي يتكون من 50-60 حلقة زجاجية غير مكتملة يمتد من الحنجرة حتى التفرع الصدري عند الفقرة T5.',
        bloodSupplyEn: 'Common carotid arteries in neck; bronchoesophageal artery in thorax.',
        bloodSupplyAr: 'الشريان السباتي الأصلي في العنق؛ والشريان القصبي المريئي في الصدر.',
        innervationEn: 'Autonomic branches of vagus (parasympathetic bronchoconstriction) and sympathetic trunk.',
        innervationAr: 'فروع العصب المبهم (نظير ودي مقبض) والجذع الودي (موسع).',
        clinicalPearlsEn: 'Emergency tracheostomy is safely performed at the junction of the upper and middle thirds of the neck between cartilaginous rings 4-6.',
        clinicalPearlsAr: 'فغر الرغامي الإسعافي يجرى بأمان عند تقاطع الثلث العلوي بالأوسط من الرقبة بين الحلقات الغضروفية 4 إلى 6.',
        focusCoordinates: { position: [0.7, 0.9, 0.6], target: [0, 0.72, 0.45] },
        geometry: { shape: 'cylinder', position: [0, 0.72, 0.48], rotation: [0.25, 0, 0], scale: [0.12, 0.65, 0.12], color: '#94a3b8', roughness: 0.5, metalness: 0.1 },
        quizQuestions: [
          {
            questionEn: 'Where is the optimal anatomical site for performing an emergency tracheostomy in the horse?',
            questionAr: 'أين هو الموقع التشريحي الأمثل لإجراء فغر القصبة الهوائية الإسعافي في الحصان؟',
            options: [
              { en: 'Ventral midline at junction of upper and middle third of neck', ar: 'خط الوسط البطني عند تقاطع الثلث العلوي مع الأوسط من العنق' },
              { en: 'Immediately cranial to the thoracic inlet', ar: 'أمام المدخل الصدري مباشرة' },
              { en: 'Directly through the thyroid cartilage', ar: 'عبر الغضروف الدرقي مباشرة' },
              { en: 'Behind the scapula', ar: 'خلف عظم لوح الكتف' }
            ],
            correctAnswer: 'Ventral midline at junction of upper and middle third of neck',
            explanationEn: 'The trachea is superficial and easily palpated here with minimal overlying muscle and away from major neurovascular structures.',
            explanationAr: 'تكون القصبة الهوائية سطحية وسهلة الجس هنا مع قلة التغطية العضلية والبعد عن الأوعية الحيوية.'
          },
          {
            questionEn: 'The equine trachealis muscle is located on which surface of the cartilaginous rings?',
            questionAr: 'أين تقع العضلة الرغامية (Trachealis) بالنسبة للحلقات الغضروفية في الخيل؟',
            options: [
              { en: 'Internally (internal surface of dorsal ring gap)', ar: 'في الداخل (على الوجه الداخلي للشق الظهري للحلقات)' },
              { en: 'Externally (bridging outer ring surface)', ar: 'في الخارج فوق السطح الخارجي للحلقات' },
              { en: 'Along the ventral surface', ar: 'على السطح البطني للقصبة' },
              { en: 'Between each adjacent ring horizontally', ar: 'بين الحلقات أفقياً' }
            ],
            correctAnswer: 'Internally (internal surface of dorsal ring gap)',
            explanationEn: 'In horses, the trachealis muscle attaches internally across the dorsal free ends of the tracheal cartilages.',
            explanationAr: 'في الخيل ترتبط العضلة الرغامية داخلياً عبر النهايتين الظهريتين الحرتين لغضاريف القصبة.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_PulmoSinister',
        nameEn: 'Equine Left Lung',
        nameAr: 'رئة الحصان اليسرى',
        latinName: 'Pulmo sinister (Equus caballus)',
        descriptionEn: 'Elongated, undivided left lung parenchyma lacking deep interlobar fissures, with prominent cardiac notch between 3rd and 6th ribs.',
        descriptionAr: 'نسيج رئة يسري ممتد غير مقسم إلى فصوص عميقة، يتميز بثلمة قلبية واسعة بين الضلعين 3 و 6.',
        bloodSupplyEn: 'Pulmonary trunk (functional deoxygenated) and bronchoesophageal artery (nutritional oxygenated).',
        bloodSupplyAr: 'الجذع الرئوي (وظيفي غير مؤكسج) والشريان القصبي المريئي (مغذٍ مؤكسج).',
        innervationEn: 'Pulmonary plexus from vagus and sympathetic trunk.',
        innervationAr: 'الضفيرة الرئوية من العصب المبهم والجذع الودي.',
        clinicalPearlsEn: 'Equine Asthma (Severe Asthma / "Heaves") causes characteristic expiratory abdominal push and "heave line" due to external abdominal oblique hypertrophy.',
        clinicalPearlsAr: 'ربو الخيل الشديد (النهيج) يسبب دفعاً زفيرياً بطنياً وظهور خط النهيج لتضخم العضلة المائلة الظاهرة للبطن.',
        focusCoordinates: { position: [-1.2, 0.7, 0.2], target: [-0.2, 0.5, 0.15] },
        geometry: { shape: 'capsule', position: [-0.22, 0.52, 0.15], rotation: [0.1, 0, 0.2], scale: [0.28, 0.55, 0.26], color: '#f43f5e', roughness: 0.6, metalness: 0.05 },
        quizQuestions: [
          {
            questionEn: 'Which anatomical feature characterizes the lobation of the equine lungs compared to bovine lungs?',
            questionAr: 'ما هي الميزة التشريحية التي تميز تفصص رئة الخيل مقارنة برئة الأبقار؟',
            options: [
              { en: 'Absence of deep interlobar fissures (smooth, undivided surface)', ar: 'غياب الشقوق العميقة بين الفصوص (سطح أملس غير مفصص)' },
              { en: 'Extreme external lobulation with thick connective septa', ar: 'تفصص خارجي شديد بحواجز ضامة سميكة' },
              { en: 'Presence of a tracheal bronchus', ar: 'وجود قصبة هوائية رغامية إضافية' },
              { en: 'Five distinct lobes on the left', ar: 'خمسة فصوص منفصلة في الرئة اليسرى' }
            ],
            correctAnswer: 'Absence of deep interlobar fissures (smooth, undivided surface)',
            explanationEn: 'Equine lungs lack deep interlobar fissures, giving them a smooth non-lobated appearance externally.',
            explanationAr: 'تفتقر رئة الخيل للشقوق العميقة بين الفصوص مما يمنحها مظهراً خارجياً أملساً وموحداً.'
          },
          {
            questionEn: 'The hypertrophied muscular "heave line" in horses with chronic equine asthma is formed by which muscle?',
            questionAr: 'ما هي العضلة التي تشكل "خط النهيج" المتضخم في الخيول المصابة بربو الخيل المزمن؟',
            options: [
              { en: 'External abdominal oblique muscle', ar: 'العضلة المائلة الخارجية للبطن' },
              { en: 'Rectus abdominis muscle', ar: 'العضلة المستقيمة البطنية' },
              { en: 'Transversus abdominis', ar: 'العضلة المستعرضة البطنية' },
              { en: 'Diaphragm', ar: 'الحجاب الحاجز' }
            ],
            correctAnswer: 'External abdominal oblique muscle',
            explanationEn: 'Chronic active expiratory effort hypertrophies the external abdominal oblique at the musculo-aponeurotic junction.',
            explanationAr: 'المجهود الزفيري المزمن يسبب تضخماً مرئياً للعضلة المائلة الخارجية عند اتصالها الصفاقي.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_PulmoDexter',
        nameEn: 'Equine Right Lung & Accessory Lobe',
        nameAr: 'رئة الحصان اليمنى والفص الإضافي',
        latinName: 'Pulmo dexter et Lobus accessorius',
        descriptionEn: 'Larger than the left lung; includes a cranial lobe, caudal lobe, and an accessory lobe wrapping around the caudal vena cava.',
        descriptionAr: 'أكبر من الرئة اليسرى وتتضمن فصاً أمامياً وفصاً خلفياً وفصاً إضافياً يلتف حول الوريد الأجوف السفلي.',
        bloodSupplyEn: 'Right pulmonary artery and branches of bronchoesophageal artery.',
        bloodSupplyAr: 'الشريان الرئوي الأيمن وتفرعات الشريان القصبي المريئي.',
        innervationEn: 'Pulmonary plexus (vagal and sympathetic).',
        innervationAr: 'الضفيرة الرئوية الذاتية.',
        clinicalPearlsEn: 'Aspiration pneumonia from choke or dysphagia preferentially affects the cranioventral dependent regions of the right lung.',
        clinicalPearlsAr: 'ذات الرئة الاستنشاقية الناجمة عن انسداد المريء تصيب بشكل تفضيلي الأجزاء الأمامية البطنية من الرئة اليمنى.',
        focusCoordinates: { position: [1.2, 0.7, 0.2], target: [0.2, 0.5, 0.15] },
        geometry: { shape: 'capsule', position: [0.22, 0.52, 0.15], rotation: [0.1, 0, -0.2], scale: [0.32, 0.58, 0.28], color: '#fb7185', roughness: 0.6, metalness: 0.05 },
        quizQuestions: [
          {
            questionEn: 'The accessory lobe of the equine right lung sits in which anatomical recess?',
            questionAr: 'أين يستقر الفص الإضافي للرئة اليمنى للحصان في التجويف الصدري؟',
            options: [
              { en: 'Mediastinal recess between caudal vena cava and plica venae cavae', ar: 'الجيب المنصفي بين الوريد الأجوف الخلفي وطية الأجوف' },
              { en: 'Costodiaphragmatic recess', ar: 'الجيب الضلعي الحجابي' },
              { en: 'Cervical pleural dome', ar: 'القبة الجنبية الرقبية' },
              { en: 'Subcardiac fossa', ar: 'الحفرة تحت القلبية' }
            ],
            correctAnswer: 'Mediastinal recess between caudal vena cava and plica venae cavae',
            explanationEn: 'The accessory lobe occupies its own mediastinal recess on the midline, straddling the caudal vena cava.',
            explanationAr: 'يحتل الفص الإضافي جيباً منصفيّاً خاصاً به على خط الوسط محتضناً الوريد الأجوف الخلفي.'
          },
          {
            questionEn: 'Which lung lobe in horses is most frequently consolidated in recumbent foals or secondary to dysphagic aspiration?',
            questionAr: 'أي فص رئوي في الخيل هو الأكثر عرضة للالتهاب والتصلب في المهور الراقدة أو عند الاستنشاق؟',
            options: [
              { en: 'Right cranioventral lung region', ar: 'المنطقة القحفية البطنية للرئة اليمنى' },
              { en: 'Left caudodorsal tip', ar: 'القمة الذيلية الظهرية اليسرى' },
              { en: 'Accessory lobe tip only', ar: 'قمة الفص الإضافي فقط' },
              { en: 'Tracheal carina', ar: 'مهماز الرغامي' }
            ],
            correctAnswer: 'Right cranioventral lung region',
            explanationEn: 'Gravitational dependent drainage and airway branching angles direct aspirated material preferentially cranioventrally.',
            explanationAr: 'التصريف المعتمد على الجاذبية وزوايا تفرع الشعب يوجه المواد المستنشقة نحو المنطقة الأمامية البطنية.'
          }
        ]
      }
    ],
    nervous: [
      {
        meshId: 'Mesh_Equine_Cerebrum',
        nameEn: 'Equine Cerebrum',
        nameAr: 'مخ الحصان',
        latinName: 'Cerebrum (Equus caballus)',
        descriptionEn: 'Highly gyrencephalic cerebral hemispheres weighing 500-600 g with complex sulcal patterns mediating voluntary motor and sensory integration.',
        descriptionAr: 'نصفا كرة مخيان متطورا التلافيف يزنان 500-600 جم مع نمط شقوق معقد ينسق التكامل الحسي والحركي الإرادي.',
        bloodSupplyEn: 'Cerebral arterial circle (Circle of Willis) supplied primarily by internal carotid artery and basilar artery.',
        bloodSupplyAr: 'الدائرة الشريانية الدماغية (دائرة ويليس) المزودة أساساً بالشريان السباتي الباطن والشريان القاعدي.',
        innervationEn: 'Meningeal sensory branches of the trigeminal nerve (CN V).',
        innervationAr: 'الفروع السحائية الحسية للعصب ثلاثي التوائم (العصب الخامس).',
        clinicalPearlsEn: 'Equine Protozoal Myeloencephalitis (EPM) and West Nile Encephalitis can cause asymmetric cerebral signs, seizures, and cranial nerve deficits.',
        clinicalPearlsAr: 'التهاب الدماغ والنخاع الأوالي EPM وفيروس غرب النيل يسببان أعراضاً دماغية غير متناظرة ونوبات واعتلال الأعصاب القحفية.',
        focusCoordinates: { position: [0.8, 1.2, 1.0], target: [0, 0.98, 0.88] },
        geometry: { shape: 'sphere', position: [0, 0.98, 0.9], rotation: [0, 0, 0], scale: [0.36, 0.28, 0.38], color: '#facc15', roughness: 0.45, metalness: 0.05 },
        quizQuestions: [
          {
            questionEn: 'Which infectious protozoan is the leading cause of Equine Protozoal Myeloencephalitis (EPM)?',
            questionAr: 'ما هو الطفيلي الأوالي الذي يعتبر المسبب الرئيسي لمرض التهاب الدماغ والنخاع الأوالي EPM في الخيل؟',
            options: [
              { en: 'Sarcocystis neurona', ar: 'ساركوسيستيس نيورونا' },
              { en: 'Toxoplasma gondii', ar: 'المقوسة الغوندية' },
              { en: 'Babesia caballi', ar: 'بابيزيا كابالي' },
              { en: 'Trypanosoma evansi', ar: 'تريبانوسوما إيفانسي' }
            ],
            correctAnswer: 'Sarcocystis neurona',
            explanationEn: 'Sarcocystis neurona (carried by opossums) is responsible for over 95% of EPM cases causing asymmetric neurological deficits.',
            explanationAr: 'طفيلي ساركوسيستيس نيورونا يسبب أكثر من 95% من حالات EPM مؤدياً لاختلالات عصبية غير متناظرة.'
          },
          {
            questionEn: 'Which structure connects the two cerebral hemispheres at the floor of the longitudinal cerebral fissure?',
            questionAr: 'ما هو التركيب العصبي الأبيض الذي يربط نصفي الكرة المخية في قاع الشق الطولي؟',
            options: [
              { en: 'Corpus callosum', ar: 'الجسم الثفني (Corpus callosum)' },
              { en: 'Fornix', ar: 'القبو' },
              { en: 'Septum pellucidum', ar: 'الحاجز الشفاف' },
              { en: 'Optic chiasm', ar: 'التصالب البصري' }
            ],
            correctAnswer: 'Corpus callosum',
            explanationEn: 'The corpus callosum contains millions of commissural axons interconnecting the cerebral cortices.',
            explanationAr: 'يحتوي الجسم الثفني على ألياف موصلة شاسعة تربط قشرتي المخ اليمنى واليسرى.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_Cerebellum',
        nameEn: 'Equine Cerebellum',
        nameAr: 'مخيخ الحصان',
        latinName: 'Cerebellum (Equus caballus)',
        descriptionEn: 'Posterior brain structure with folia and deep nuclei coordinating muscular synergy, rate, range, and force of athletic movements.',
        descriptionAr: 'بنية دماغية خلفية ذات تلافيف ورقية ونوى عميقة تنسق التآزر العضلي ومعدل ومدى وقوة حركات الحصان.',
        bloodSupplyEn: 'Rostral and caudal cerebellar arteries off the basilar artery.',
        bloodSupplyAr: 'الشرايان المخيخيان الأمامي والخلفي من الشريان القاعدي.',
        innervationEn: 'Intrinsic Purkinje and granule cell networks; connected via cerebellar peduncles.',
        innervationAr: 'شبكات خلايا بيركنجي والحبيبية الذاتية؛ متصل بالسويقات المخيخية.',
        clinicalPearlsEn: 'Cerebellar Abiotrophy in Arabian horses manifests at 1-6 months of age with intentional tremors, dysmetria, and absence of menace response.',
        clinicalPearlsAr: 'الضمور المخيخي في الخيول العربية يظهر في عمر 1-6 أشهر برعاش قصدي وعدم تناسق حركة الأطراف وغياب استجابة التهديد.',
        focusCoordinates: { position: [0.7, 1.1, 0.8], target: [0, 0.92, 0.76] },
        geometry: { shape: 'sphere', position: [0, 0.92, 0.76], rotation: [0, 0, 0], scale: [0.24, 0.22, 0.22], color: '#eab308', roughness: 0.45, metalness: 0.05 },
        quizQuestions: [
          {
            questionEn: 'Cerebellar Abiotrophy is a well-recognized genetic neurodegenerative condition primarily seen in which breed?',
            questionAr: 'الضمور المخيخي الوراثي هو اعتلال تنكسي عصبي معروف يظهر بشكل رئيسي في أي سلالة خيل؟',
            options: [
              { en: 'Arabian horses', ar: 'الخيول العربية الأصيلة' },
              { en: 'Thoroughbreds', ar: 'خيول الثوروبريد' },
              { en: 'Standardbreds', ar: 'الخيول القياسية' },
              { en: 'Friesians', ar: 'خيول الفريزيان' }
            ],
            correctAnswer: 'Arabian horses',
            explanationEn: 'Cerebellar Abiotrophy is an autosomal recessive disorder causing premature death of Purkinje cells in Arabians.',
            explanationAr: 'مرض وراثي متنحٍ يسبب موتاً مبكراً لخلايا بيركنجي المخيخية في الخيول العربية.'
          },
          {
            questionEn: 'What hallmark clinical sign distinguishes cerebellar ataxia from sensory vestibular ataxia?',
            questionAr: 'ما هي العلامة السريرية البارزة التي تميز الرنح المخيخي عن الرنح الدهليزي الحسي؟',
            options: [
              { en: 'Dysmetria (hypermetria / high-stepping) with normal mental status and preserved strength', ar: 'فرط قياس الحركة (خطوات عالية) مع سلامة الوعي والقوة العضلية' },
              { en: 'Severe head tilt and circling to one side', ar: 'ميلان شديد في الرأس والدوران باتجاه واحد' },
              { en: 'Complete flaccid paralysis of all limbs', ar: 'شلل رخو تام في جميع الأطراف' },
              { en: 'Loss of deep pain sensation', ar: 'فقدان الإحساس بالألم العميق' }
            ],
            correctAnswer: 'Dysmetria (hypermetria / high-stepping) with normal mental status and preserved strength',
            explanationEn: 'Cerebellar lesions produce hypermetria (goose-stepping) and intention tremor without weakness or loss of consciousness.',
            explanationAr: 'تسبب آفات المخيخ فرط قياس الخطوات ورعاشاً قصدياً دون ضعف عضلي حقيقي أو غياب للوعي.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_MedullaSpinalis',
        nameEn: 'Equine Spinal Cord',
        nameAr: 'النخاع الشوكي للحصان',
        latinName: 'Medulla spinalis (Equus caballus)',
        descriptionEn: 'Elongated neural cylinder inside vertebral canal extending from foramen magnum to second sacral vertebra, giving off 42 pairs of spinal nerves.',
        descriptionAr: 'أسطوانة عصبية ممتدة داخل القناة الفقرية من الثقبة العظمى حتى الفقرة العجزية الثانية وتتفرع لـ 42 زوجاً من الأعصاب الشوكية.',
        bloodSupplyEn: 'Ventral spinal artery and spinal branches of vertebral and intercostal arteries.',
        bloodSupplyAr: 'الشريان الشوكي البطني والفروع الشوكية من الشرايين الفقرية والوربية.',
        innervationEn: 'Somatic and autonomic spinal tract conduction.',
        innervationAr: 'توصيل المسالك الشوكية الجسدية والذاتية.',
        clinicalPearlsEn: 'Cervical Vertebral Stenotic Myelopathy (CVSM / "Wobbler Syndrome") compresses the cord at C3-C5, causing progressive symmetric hindlimb ataxia.',
        clinicalPearlsAr: 'اعتلال النخاع الرقبي التضيقي CVSM (متلازمة الترنح أو الووبلر) يضغط النخاع عند C3-C5 مسبباً ترنحاً متناظراً في القوائم الخلفية.',
        focusCoordinates: { position: [0.6, 1.0, 0.4], target: [0, 0.88, 0.2] },
        geometry: { shape: 'cylinder', position: [0, 0.88, 0.2], rotation: [0.1, 0, 0], scale: [0.08, 1.2, 0.08], color: '#fef08a', roughness: 0.35, metalness: 0.1 },
        quizQuestions: [
          {
            questionEn: 'Cervical Vertebral Stenotic Myelopathy ("Wobbler Syndrome") in young thoroughbreds most commonly causes which clinical sign?',
            questionAr: 'ما هي العلامة السريرية الأكثر شيوعاً لاعتلال النخاع الرقبي التضيقي (متلازمة الووبلر) في مهور السباق؟',
            options: [
              { en: 'Symmetric proprioceptive ataxia worse in pelvic limbs than thoracic limbs', ar: 'ترنح متناظر في الإحساس العميق يكون أشد في القوائم الخلفية من الأمامية' },
              { en: 'Unilateral facial paralysis', ar: 'شلل وجهي أحادي الجانب' },
              { en: 'Blindness and nystagmus', ar: 'عمى ورأرأة في العين' },
              { en: 'Flaccid tail and anal paralysis', ar: 'شلل رخو في الذيل والشرج' }
            ],
            correctAnswer: 'Symmetric proprioceptive ataxia worse in pelvic limbs than thoracic limbs',
            explanationEn: 'Cervical cord compression affects superficial ascending proprioceptive tracts to hindlimbs first and most severely.',
            explanationAr: 'يصيب انضغاط النخاع الرقبي المسالك الصاعدة السطحية المغذية للأطراف الخلفية أولاً وبشكل أشد.'
          },
          {
            questionEn: 'At which anatomical landmark is cerebrospinal fluid (CSF) routinely collected in an adult horse in the standing position?',
            questionAr: 'أين هو المعلم التشريحي لجمع السائل الدماغي الشوكي CSF روتينياً في الحصان البالغ وهو واقف؟',
            options: [
              { en: 'Lumbosacral interspace (L6 - S1)', ar: 'الفراغ القطني العجزي بين L6 و S1' },
              { en: 'Atlanto-occipital space', ar: 'المفصل القذالي الفهقي' },
              { en: 'C1 - C2 interspace', ar: 'بين الفهق والمحور C1-C2' },
              { en: 'Thoracolumbar junction (T18 - L1)', ar: 'التقاطع الصدري القطني' }
            ],
            correctAnswer: 'Lumbosacral interspace (L6 - S1)',
            explanationEn: 'The lumbosacral site allows safe CSF aspiration under sedation and local anesthesia without general anesthesia.',
            explanationAr: 'يتيح الموقع القطني العجزي بزل السائل بأمان تحت التهدئة الموضعية دون الحاجة لتخدير عام.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_NervusVagus',
        nameEn: 'Equine Vagus & Recurrent Laryngeal Nerve',
        nameAr: 'العصب المبهم والحنجري الراجع للحصان',
        latinName: 'Nervus vagus et Nervus laryngeus recurrens',
        descriptionEn: 'The tenth cranial nerve traveling within the vagosympathetic trunk in the carotid sheath, looping around the aortic arch to ascend to the larynx.',
        descriptionAr: 'العصب القحفي العاشر الذي يمر ضمن الجذع المبهمي الودي في غمد السباتي، ويلتف حول قوس الأبهر صاعداً للحنجرة.',
        bloodSupplyEn: 'Vasa nervorum off common carotid and bronchoesophageal arteries.',
        bloodSupplyAr: 'الأوعية العصبية المغذية من السباتي الأصلي والشريان القصبي المريئي.',
        innervationEn: 'Parasympathetic visceral innervation to thoracic and abdominal organs.',
        innervationAr: 'أعصاب لاإرادية نظيرة ودية للأحشاء الصدرية والبطنية.',
        clinicalPearlsEn: 'Guttural pouch mycosis (Aspergillus) erodes the adjacent vagus and glossopharyngeal nerves, causing acute dysphagia and Horner\'s syndrome.',
        clinicalPearlsAr: 'فطار الأكياس الهوائية (الرشاشيات) يؤدي لتآكل العصبين المبهم والبلعومي اللساني مسبباً عسر بلع حاد ومتلازمة هورنر.',
        focusCoordinates: { position: [-0.6, 0.8, 0.4], target: [-0.1, 0.6, 0.35] },
        geometry: { shape: 'capsule', position: [-0.12, 0.6, 0.35], rotation: [0.3, 0.2, 0], scale: [0.06, 0.8, 0.06], color: '#fef9c3', roughness: 0.3, metalness: 0.15 },
        quizQuestions: [
          {
            questionEn: 'Guttural pouch mycosis frequently damages which cranial nerves passing directly across its caudal compartment?',
            questionAr: 'فطار الأكياس الهوائية يتلف بشكل متكرر أي أعصاب قحفية تمر مباشرة عبر حجيرته الخلفية؟',
            options: [
              { en: 'CN IX, X, XI, XII and the sympathetic trunk', ar: 'الأعصاب التاسع والعاشر والحادي عشر والثاني عشر والجذع الودي' },
              { en: 'CN I and II', ar: 'العصبان الشمي والبصري' },
              { en: 'CN III and IV', ar: 'العصبان محرك العين والبكري' },
              { en: 'CN VII and VIII only', ar: 'العصبان الوجهي والدهليزي القوقعي فقط' }
            ],
            correctAnswer: 'CN IX, X, XI, XII and the sympathetic trunk',
            explanationEn: 'These nerves course across the thin mucous lining of the guttural pouch and are vulnerable to mycotic plaque erosion.',
            explanationAr: 'تمر هذه الأعصاب الحيوية تحت الغشاء المخاطي الرقيق للكيس الهوائي وتكون عرضة للتآكل بالصفائح الفطرية.'
          },
          {
            questionEn: 'Bilateral vagal nerve damage in horses causes what life-threatening gastrointestinal complication?',
            questionAr: 'ما هو الاختلاط الهضمي المهدد للحياة الناجم عن تلف العصب المبهم في الجانبين؟',
            options: [
              { en: 'Complete gastric and intestinal paralysis (ileus and impaction)', ar: 'شلل تام للمعدة والأمعاء (خزل معوي وانحشار)' },
              { en: 'Acute hypermotility diarrhea', ar: 'إسهال حاد مفرط الحركة' },
              { en: 'Esophageal spasm only', ar: 'تشنج مريئي منعزل' },
              { en: 'Loss of cecal fermentation without colic', ar: 'توقف تخمر الأعور دون مغص' }
            ],
            correctAnswer: 'Complete gastric and intestinal paralysis (ileus and impaction)',
            explanationEn: 'Loss of vagal motor input halts coordinated gastrointestinal peristalsis, causing fatal gastric dilation and cecocolic ileus.',
            explanationAr: 'فقدان الإشارات الحركية للمبهم يشل الحركات الدودية للجهاز الهضمي محدثاً خمولاً وتمدداً قاتلاً.'
          }
        ]
      }
    ],
    urogenital: [
      {
        meshId: 'Mesh_Equine_RenDexter',
        nameEn: 'Equine Right Kidney (Heart-Shaped)',
        nameAr: 'كلية الحصان اليمنى (قلبية الشكل)',
        latinName: 'Ren dexter (Forma cordis)',
        descriptionEn: 'Distinctive heart-shaped or trefoil kidney positioned more cranially than the left (under ribs 16-18), embedded in sublumbar fat.',
        descriptionAr: 'كلية مميزة على شكل قلب أو ورقة نفل تستقر أمام الكلية اليسرى (تحت الأضلاع 16-18) مغمورة في الشحم القطني.',
        bloodSupplyEn: 'Right renal artery off abdominal aorta; right renal vein to caudal vena cava.',
        bloodSupplyAr: 'الشريان الكلوي الأيمن من الأبهر؛ والوريد الكلوي الأيمن يصب في الأجوف الخلفي.',
        innervationEn: 'Renal autonomic plexus from celiacomesenteric ganglion.',
        innervationAr: 'الضفيرة الكلوية الذاتية من العقدة الجوفية المساريقية.',
        clinicalPearlsEn: 'The right kidney is wedged cranially against the liver and is typically not palpable per rectum, unlike the left kidney.',
        clinicalPearlsAr: 'تستقر الكلية اليمنى ملاصقة للكبد ولا يمكن جسها عبر المستقيم، بخلاف الكلية اليسرى السهلة الجس.',
        focusCoordinates: { position: [1.1, 0.8, 0.2], target: [0.22, 0.68, 0.05] },
        geometry: { shape: 'cone', position: [0.24, 0.68, 0.05], rotation: [0, 0, Math.PI / 4], scale: [0.25, 0.28, 0.25], color: '#701a75', roughness: 0.4, metalness: 0.1 },
        quizQuestions: [
          {
            questionEn: 'What distinctive morphological shape does the equine right kidney exhibit?',
            questionAr: 'ما هو الشكل المورفولوجي المميز لكلية الحصان اليمنى؟',
            options: [
              { en: 'Heart-shaped or triangular', ar: 'قلبية الشكل أو مثلثة (شبه ورقة النفل)' },
              { en: 'Bean-shaped', ar: 'حبة الفاصولياء' },
              { en: 'Multilobulated like cattle', ar: 'مفصصة خارجياً كالبقر' },
              { en: 'Long ribbon-like', ar: 'شريطية طويلة' }
            ],
            correctAnswer: 'Heart-shaped or triangular',
            explanationEn: 'The equine right kidney is uniquely flattened and heart-shaped (cordiform), whereas the left is bean-shaped.',
            explanationAr: 'تتميز كلية الحصان اليمنى بشكلها القلبي المسطح، بينما الكلية اليسرى كلوية تقليدية كحبة الفاصولياء.'
          },
          {
            questionEn: 'Equine urine is normally cloudy and turbid due to the secretion of which physiological components?',
            questionAr: 'بول الخيل الطبيعي عكر وضبابي نتيجة إفراز أي مكونات فسيولوجية؟',
            options: [
              { en: 'Calcium carbonate crystals and mucous glands of renal pelvis and ureters', ar: 'بلورات كربونات الكالسيوم والمخاط من غدد حوض الكلية والحالب' },
              { en: 'Bacterial pus cells', ar: 'خلايا صديدية بكتيرية' },
              { en: 'Bilirubin casts', ar: 'أسطوانات البيليروبين' },
              { en: 'Hemoglobin precipitates', ar: 'رواسب الهيموغلوبين' }
            ],
            correctAnswer: 'Calcium carbonate crystals and mucous glands of renal pelvis and ureters',
            explanationEn: 'Horses excrete dietary excess calcium as calcium carbonate crystals in copious mucus secreted by renal pelvic glands.',
            explanationAr: 'تتخلص الخيول من الكالسيوم الزائد على شكل بلورات كربونات الكالسيوم مع مخاط غدد حوض الكلية.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_RenSinister',
        nameEn: 'Equine Left Kidney (Bean-Shaped)',
        nameAr: 'كلية الحصان اليسرى (كلوية الشكل)',
        latinName: 'Ren sinister',
        descriptionEn: 'Elongated bean-shaped kidney located more caudally (under L1-L3), directly adjacent to the spleen and left adrenal gland.',
        descriptionAr: 'كلية ممتدة تشبه حبة الفاصولياء تستقر في موقع خلفي (تحت الفقرات L1-L3) ملاصقة للطحال والغدة الكظرية اليسرى.',
        bloodSupplyEn: 'Left renal artery and left renal vein.',
        bloodSupplyAr: 'الشريان الكلوي الأيسر والوريد الكلوي الأيسر.',
        innervationEn: 'Renal autonomic plexus.',
        innervationAr: 'الضفيرة الكلوية الذاتية.',
        clinicalPearlsEn: 'Readily palpable per rectum: smooth, firm, non-painful; its caudal pole is routinely evaluated during colic examination.',
        clinicalPearlsAr: 'تُجس بسهولة عبر المستقيم: ملساء متماسكة وغير مؤلمة؛ ويُفحص قطبها الخلفي روتينياً في حالات المغص.',
        focusCoordinates: { position: [-1.1, 0.8, -0.1], target: [-0.22, 0.65, -0.15] },
        geometry: { shape: 'capsule', position: [-0.24, 0.65, -0.15], rotation: [0.2, 0.3, 0], scale: [0.22, 0.38, 0.22], color: '#86198f', roughness: 0.4, metalness: 0.1 },
        quizQuestions: [
          {
            questionEn: 'Which ligament suspends the left kidney from the dorsal body wall and forms the nephrosplenic space?',
            questionAr: 'ما هو الرباط الذي يثبت الكلية اليسرى ويشكل مع الطحال الفراغ الكلوي الطحالي؟',
            options: [
              { en: 'Renosplenic (nephrosplenic) ligament', ar: 'الرباط الكلوي الطحالي (Nephrosplenic ligament)' },
              { en: 'Gastrosplenic ligament', ar: 'الرباط المعدي الطحالي' },
              { en: 'Hepatoduodenal ligament', ar: 'الرباط الكبدي الإثناعشري' },
              { en: 'Broad ligament', ar: 'الرباط العريض' }
            ],
            correctAnswer: 'Renosplenic (nephrosplenic) ligament',
            explanationEn: 'The renosplenic ligament spans between the left kidney and spleen; the left colon can displace dorsally over it (nephrosplenic entrapment).',
            explanationAr: 'يمتد الرباط بين الكلية اليسرى والطحال وقد ينحشر القولون الأيسر فوقه مسبباً انحشار الفراغ الكلوي الطحالي.'
          },
          {
            questionEn: 'What conservative medical therapy can resolve left dorsal colon displacement over the nephrosplenic ligament?',
            questionAr: 'ما هو العلاج الدوائي التحفظي الذي يساعد على فك انحصار القولون فوق الرباط الكلوي الطحالي؟',
            options: [
              { en: 'Phenylephrine infusion (to contract spleen) combined with light exercise or rolling', ar: 'حقن الفينيل إفرين (لقبض الطحال) مع الهرولة أو دحرجة الحصان' },
              { en: 'High dose atropine', ar: 'جرعات عالية من الأتروبين' },
              { en: 'Intravenous barium sulfate', ar: 'كبريتات الباريوم وريدياً' },
              { en: 'Reticular magnet administration', ar: 'إعطاء مغناطيس المعدة' }
            ],
            correctAnswer: 'Phenylephrine infusion (to contract spleen) combined with light exercise or rolling',
            explanationEn: 'Phenylephrine induces marked splenic contraction, widening the nephrosplenic space and allowing the colon to slide off.',
            explanationAr: 'يحدث الفينيل إفرين انكماشاً شديداً للطحال مما يوسع الفراغ الكلوي الطحالي ويحرر القولون المنحشر.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_VesicaUrinaria',
        nameEn: 'Equine Urinary Bladder',
        nameAr: 'مثانة الحصان',
        latinName: 'Vesica urinaria (Equus caballus)',
        descriptionEn: 'Distensible piriform musculo-membranous sac lying on the pubic bones when empty and extending into the caudal abdominal cavity when filled.',
        descriptionAr: 'كيس عضلي غشائي كمثري قابل للتمدد يستقر على عظام العانة عند الفراغ ويمتد لتجويف البطن عند امتلائه.',
        bloodSupplyEn: 'Cranial and caudal vesical arteries (internal iliac system).',
        bloodSupplyAr: 'الشرايين المثانية الأمامية والخلفية (من الحرقفي الباطن).',
        innervationEn: 'Pelvic nerve (parasympathetic detrusor), hypogastric nerve (sympathetic sphincter), and pudendal nerve.',
        innervationAr: 'العصب الحوضي (لاإرادي لمفرغة البول) وعصب تحت المعدة والعصب الاستحيائي.',
        clinicalPearlsEn: 'Urolithiasis (cystic calculi / sabulous cystitis) in horses produces calcium carbonate stones that are palpable per rectum.',
        clinicalPearlsAr: 'حصوات المثانة في الخيل تتكون غالباً من كربونات الكالسيوم الخشنة وتُجس بسهولة عبر المستقيم.',
        focusCoordinates: { position: [0.6, 0.5, -0.7], target: [0, 0.38, -0.6] },
        geometry: { shape: 'sphere', position: [0, 0.38, -0.6], rotation: [0, 0, 0], scale: [0.26, 0.28, 0.26], color: '#a21caf', roughness: 0.35, metalness: 0.1 },
        quizQuestions: [
          {
            questionEn: 'What is the predominant mineral composition of equine bladder calculi (uroliths)?',
            questionAr: 'ما هو التركيب المعدني السائد لحصوات المثانة البولية في الخيل؟',
            options: [
              { en: 'Calcium carbonate', ar: 'كربونات الكالسيوم (Calcium carbonate)' },
              { en: 'Struvite (magnesium ammonium phosphate)', ar: 'الستروفايت' },
              { en: 'Calcium oxalate monohydrate', ar: 'أوكسالات الكالسيوم' },
              { en: 'Uric acid', ar: 'حمض اليوريك' }
            ],
            correctAnswer: 'Calcium carbonate',
            explanationEn: 'Over 90% of equine bladder stones are composed of calcium carbonate crystals cemented in a proteinaceous matrix.',
            explanationAr: 'أكثر من 90% من حصوات مثانة الخيل تتكون من كربونات الكالسيوم المتجمعة في قالب بروتيني.'
          },
          {
            questionEn: 'Which autonomic nerve supplies parasympathetic motor fibers causing detrusor muscle contraction and urination?',
            questionAr: 'أي عصب ذاتي يوفر الألياف الحركية نظيرة الودية التي تسبب انقباض العضلة المفرغة للمثانة والتبول؟',
            options: [
              { en: 'Pelvic nerve (Nervus pelvicus)', ar: 'العصب الحوضي (Nervus pelvicus)' },
              { en: 'Hypogastric nerve', ar: 'عصب تحت المعدة' },
              { en: 'Pudendal nerve', ar: 'العصب الاستحيائي' },
              { en: 'Genitofemoral nerve', ar: 'العصب التناسلي الفخذي' }
            ],
            correctAnswer: 'Pelvic nerve (Nervus pelvicus)',
            explanationEn: 'The pelvic nerve originates from sacral spinal cord segments (S2-S4) and mediates detrusor contraction.',
            explanationAr: 'ينشأ العصب الحوضي من الفقرات العجزية (S2-S4) ويحفز انقباض عضلة المثانة وتفريغ البول.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_UterusBicornis',
        nameEn: 'Equine Bicornuate Uterus',
        nameAr: 'رحم الفرس ثنائي القرنين',
        latinName: 'Uterus bicornis (Equus caballus)',
        descriptionEn: 'T-shaped uterus with substantial uterine body (~18-20 cm) and two divergent horns suspended by the broad ligament.',
        descriptionAr: 'رحم على شكل حرف T ذو جسم رحمي واضح (~18-20 سم) وقرنين متباعدين معلق بالرباط العريض.',
        bloodSupplyEn: 'Uterine artery (from external iliac), ovarian artery, and vaginal artery.',
        bloodSupplyAr: 'الشريان الرحمي (من الحرقفي الظاهر) والشريان المبيضي والشريان المهبلي.',
        innervationEn: 'Uterovaginal plexus from pelvic and hypogastric nerves.',
        innervationAr: 'الضفيرة الرحمية المهبلية من الأعصاب الحوضية وتحت المعدة.',
        clinicalPearlsEn: 'Fetal mobility phase: The equine embryo migrates through both horns and body up to 12-14 times per day before fixation on Day 16.',
        clinicalPearlsAr: 'مرحلة حركة الجنين: يهاجر جنين الخيل بين القرنين وجسم الرحم 12-14 مرة يومياً قبل ثبوته في اليوم 16.',
        focusCoordinates: { position: [0.6, 0.6, -0.6], target: [0, 0.45, -0.5] },
        geometry: { shape: 'torus', position: [0, 0.45, -0.5], rotation: [0.3, 0, 0], scale: [0.32, 0.22, 0.18], color: '#f43f5e', roughness: 0.4, metalness: 0.08 },
        quizQuestions: [
          {
            questionEn: 'On what gestational day does the mobile equine conceptus typically fixate in one of the uterine horns?',
            questionAr: 'في أي يوم من الحمل يثبت الجنين المتحرك في أحد قرني رحم الفرس؟',
            options: [
              { en: 'Day 16 of gestation', ar: 'اليوم 16 من الحمل' },
              { en: 'Day 5 of gestation', ar: 'اليوم 5 من الحمل' },
              { en: 'Day 35 of gestation', ar: 'اليوم 35 من الحمل' },
              { en: 'Day 60 of gestation', ar: 'اليوم 60 من الحمل' }
            ],
            correctAnswer: 'Day 16 of gestation',
            explanationEn: 'The equine vesicle migrates continuously until day 16, when uterine tone increases and fixes it at the caudal horn base.',
            explanationAr: 'يهاجر الجنين باستمرار في الرحم حتى اليوم 16 حيث يزداد توتر الرحم ويثبته في قاعدة أحد القرنين.'
          },
          {
            questionEn: 'The uterine artery in the mare originates from which major arterial trunk?',
            questionAr: 'ينشأ الشريان الرحمي في الفرس من أي جذع شرياني رئيسي؟',
            options: [
              { en: 'External iliac artery', ar: 'الشريان الحرقفي الظاهر' },
              { en: 'Internal iliac artery', ar: 'الشريان الحرقفي الباطن' },
              { en: 'Celiac artery', ar: 'الشريان الجوفي' },
              { en: 'Renal artery', ar: 'الشريان الكلوي' }
            ],
            correctAnswer: 'External iliac artery',
            explanationEn: 'In mares, the main uterine artery branches off the external iliac artery (unlike carnivores and ruminants where it arises from internal iliac/umbilical).',
            explanationAr: 'في الأفراس ينشأ الشريان الرحمي من الحرقفي الظاهر بخلاف الأبقار والكلاب التي ينشأ فيها من الحرقفي الباطن.'
          }
        ]
      }
    ],
    skeletal: [
      {
        meshId: 'Mesh_Equine_Cranium',
        nameEn: 'Equine Skull',
        nameAr: 'جمجمة الحصان',
        latinName: 'Cranium (Equus caballus)',
        descriptionEn: 'Elongated facial skull with complete osseous orbit, extensive paranasal sinuses (frontal, maxillary), and hypsodont dentition.',
        descriptionAr: 'جمجمة وجهية متطاولة ذات حجاج عيني عظمي مغلق وجيوب أنفية متسعة وأسنان نامية باستمرار.',
        bloodSupplyEn: 'Maxillary artery, facial artery, and external carotid branches.',
        bloodSupplyAr: 'الشريان الفكي والشريان الوجهي وفروع السباتي الظاهر.',
        innervationEn: 'Trigeminal nerve (CN V, sensory) and facial nerve (CN VII, motor to muscles of facial expression).',
        innervationAr: 'العصب ثلاثي التوائم (حسي) والعصب الوجهي (حركي لعضلات الوجه التعبيرية).',
        clinicalPearlsEn: 'Maxillary sinusitis commonly arises as a complication of dental root abscesses of the 4th premolar or molars (108-111 / 208-211).',
        clinicalPearlsAr: 'التهاب الجيب الفكي العلوي ينجم غالباً عن خراجات جذور الضواحك والأضراس العليا الخلفية الممتدة للجيب.',
        focusCoordinates: { position: [0.9, 1.2, 1.1], target: [0, 0.95, 0.95] },
        geometry: { shape: 'box', position: [0, 0.95, 0.95], rotation: [-0.2, 0, 0], scale: [0.38, 0.35, 0.72], color: '#f8fafc', roughness: 0.6, metalness: 0.05 },
        quizQuestions: [
          {
            questionEn: 'Which cheek teeth roots project directly into the equine maxillary sinus in adult horses?',
            questionAr: 'أي جذور أسنان تمتد مباشرة إلى داخل الجيب الفكي العلوي في خيول السباق البالغة؟',
            options: [
              { en: 'Last premolar (Triadan 08) and three molars (Triadan 09, 10, 11)', ar: 'الضاحك الأخير (08) والأضراس الثلاثة (09، 10، 11)' },
              { en: 'Incisor teeth only', ar: 'القواطع الأمامية فقط' },
              { en: 'Canine teeth only', ar: 'الأنياب فقط' },
              { en: 'First two premolars (Triadan 06 and 07)', ar: 'الضاحكان الأول والثاني' }
            ],
            correctAnswer: 'Last premolar (Triadan 08) and three molars (Triadan 09, 10, 11)',
            explanationEn: 'Roots of the caudal 4 upper cheek teeth reside within the rostral and caudal maxillary sinuses, so periapical infections cause unilateral foul nasal discharge.',
            explanationAr: 'تمتد جذور الأضراس الأربعة الخلفية داخل الجيوب الفكية، لذا يسبب التهابها إفرازات أنفية صديدية كريهة.'
          },
          {
            questionEn: 'Is the equine bony orbit closed or open laterally?',
            questionAr: 'هل محجر العين العظمي في الحصان مغلق أم مفتوح من الجانب؟',
            options: [
              { en: 'Completely closed by a solid bony orbital ring', ar: 'مغلق تماماً بحلقة عظمية صلبة متصلة' },
              { en: 'Open laterally, completed only by an orbital ligament', ar: 'مفتوح جانبياً ويكتمله رباط ليفي' },
              { en: 'Completely absent', ar: 'غير موجود' },
              { en: 'Fused to the mandible', ar: 'ملتحم بالفك السفلي' }
            ],
            correctAnswer: 'Completely closed by a solid bony orbital ring',
            explanationEn: 'In ungulates (horses and ruminants), the zygomatic process of frontal bone fuses with frontal process of zygomatic bone to form a complete bony ring.',
            explanationAr: 'في الحوافر يلتحم النتوء الوجني للعظم الجبهي مع النتوء الجبهي للوجني مشكلاً حلقة عظمية كاملة تحمي العين.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_ColumnaVertebralis',
        nameEn: 'Equine Vertebral Column',
        nameAr: 'العمود الفقري للحصان',
        latinName: 'Columna vertebralis (C7 T18 L6 S5 Ca15-21)',
        descriptionEn: 'Axial skeletal pillar characterized by 7 cervical, 18 thoracic, 6 lumbar, 5 fused sacral, and 15-21 caudal vertebrae.',
        descriptionAr: 'الدعامة الهيكلية المحورية وتتميز بـ 7 فقرات رقبية، 18 صدرية، 6 قطنية، 5 عجزية ملتحمة، و15-21 ذيلية.',
        bloodSupplyEn: 'Intercostal, lumbar, and vertebral spinal arteries.',
        bloodSupplyAr: 'الشرايين الوربية والقطنية والفقرية الشوكية.',
        innervationEn: 'Dorsal and ventral rami of segmental spinal nerves.',
        innervationAr: 'الفروع الظهرية والبطنية للأعصاب الشوكية القطعية.',
        clinicalPearlsEn: 'Kissing Spines (Overriding Dorsal Spinous Processes) in thoracic vertebrae T13-T18 causes back soreness, poor performance, and reluctance to canter.',
        clinicalPearlsAr: 'مرض احتكاك النواتئ الفقرية (Kissing Spines) في الفقرات T13-T18 يسبب ألماً ظهرياً وتراجعاً في الأداء ورفض العدو.',
        focusCoordinates: { position: [1.2, 1.1, 0.2], target: [0, 0.85, 0.1] },
        geometry: { shape: 'cylinder', position: [0, 0.85, 0.1], rotation: [0.08, 0, 0], scale: [0.1, 1.4, 0.1], color: '#f1f5f9', roughness: 0.55, metalness: 0.05 },
        quizQuestions: [
          {
            questionEn: 'What is the standard equine vertebral formula?',
            questionAr: 'ما هي الصيغة الفقرية القياسية للحصان؟',
            options: [
              { en: 'C7 T18 L6 S5 Ca15-21', ar: 'C7 T18 L6 S5 Ca15-21' },
              { en: 'C7 T13 L7 S3 Ca20-23', ar: 'C7 T13 L7 S3 Ca20-23' },
              { en: 'C7 T13 L6 S4 Ca16-18', ar: 'C7 T13 L6 S4 Ca16-18' },
              { en: 'C7 T14 L6 S5 Ca15-20', ar: 'C7 T14 L6 S5 Ca15-20' }
            ],
            correctAnswer: 'C7 T18 L6 S5 Ca15-21',
            explanationEn: 'The horse has 7 cervical, 18 thoracic (with 18 pairs of ribs), 6 lumbar (5 in Arabs), 5 sacral, and 15-21 caudal vertebrae.',
            explanationAr: 'يمتلك الحصان 7 رقبية، 18 صدرية (18 زوج أضلاع)، 6 قطنية (5 في الخيول العربية)، 5 عجزية، و15-21 ذيلية.'
          },
          {
            questionEn: 'Overriding dorsal spinous processes ("kissing spines") in horses occur most frequently between which vertebrae?',
            questionAr: 'احتكاك النواتئ الشوكية الظهرية (Kissing Spines) يحدث بشكل أكثر تكراراً بين أي فقرات؟',
            options: [
              { en: 'T13 to T18 under the saddle seat', ar: 'T13 إلى T18 في منطقة وضع السرج' },
              { en: 'C1 to C3 in the neck', ar: 'C1 إلى C3 في العنق' },
              { en: 'L5 to S1', ar: 'L5 إلى S1' },
              { en: 'Ca1 to Ca5 in the tail', ar: 'Ca1 إلى Ca5 في الذيل' }
            ],
            correctAnswer: 'T13 to T18 under the saddle seat',
            explanationEn: 'The tall dorsal spines in the caudal thoracic region can impinge upon one another during hyperextension under the rider.',
            explanationAr: 'تتقارب النواتئ الشوكية الصدرية الخلفية وتحتك ببعضها عند امتطاء الفارس للحصان مسببة ألماً شديداً.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_OssaDigiti',
        nameEn: 'Equine Distal Limb & Hoof Bones',
        nameAr: 'عظام القائمة البعيدة والحافر للحصان',
        latinName: 'Metacarpus III, Phalanx proximalis, media, distalis et Os naviculare',
        descriptionEn: 'Single weight-bearing third digit: Cannon bone (McIII), long pastern (P1), short pastern (P2), coffin bone (P3), and navicular bone.',
        descriptionAr: 'الإصبع الثالث الحامل للوزن بالكامل: عظم الساق الثالث، السلامى الأولى والثانية وعظم الحافر (السلامى الثالثة) والعظم الزورقي.',
        bloodSupplyEn: 'Medial and lateral palmar digital arteries off median artery.',
        bloodSupplyAr: 'الشريانان الإصبعيان الراحيان الأنسي والوحشي من الشريان الأوسط.',
        innervationEn: 'Medial and lateral palmar digital nerves.',
        innervationAr: 'العصبان الإصبعيان الراحيان الأنسي والوحشي.',
        clinicalPearlsEn: 'Laminitis (Founder) causes degradation of the digital laminae, leading to downward rotation or sinking of the coffin bone (P3) through the sole.',
        clinicalPearlsAr: 'التهاب الصفائح الحساسة (الحمر أو الفاوندر) يفكك صفائح الحافر مؤدياً لدوران أو هبوط عظم الحافر P3 نحو باطن الحافر.',
        focusCoordinates: { position: [0.8, 0.4, 0.5], target: [0.28, 0.05, 0.35] },
        geometry: { shape: 'cylinder', position: [0.28, 0.05, 0.35], rotation: [0, 0, 0], scale: [0.08, 0.7, 0.08], color: '#e2e8f0', roughness: 0.5, metalness: 0.05 },
        quizQuestions: [
          {
            questionEn: 'In severe equine laminitis, what mechanical force primarily drives downward rotation of the coffin bone (P3)?',
            questionAr: 'في حالات التهاب صفائح الحافر الحاد (Laminitis)، ما هي القوة الميكانيكية التي تسحب عظم الحافر P3 للدوران للأسفل؟',
            options: [
              { en: 'Traction of the deep digital flexor tendon (DDFT)', ar: 'شد وتر العضلة الثنية العميقة للإصبع (DDFT)' },
              { en: 'Contraction of superficial digital flexor', ar: 'انقباض الوتر السطحي' },
              { en: 'Pressure from the extensor carpi radialis', ar: 'ضغط العضلة الباسطة للرسغ' },
              { en: 'Relaxation of the suspensory ligament', ar: 'ارتخاء الرباط المعلق' }
            ],
            correctAnswer: 'Traction of the deep digital flexor tendon (DDFT)',
            explanationEn: 'The DDFT inserts on the solar surface of P3; when the laminar bond fails, its continuous tension pulls the toe of P3 downward.',
            explanationAr: 'يرتكز وتر الثنية العميقة على باطن P3؛ وعند فشل الصفائح الرابطة يسحب توتر الوتر قمة العظم للأسفل نحو باطن القدم.'
          },
          {
            questionEn: 'Which diagnostic local nerve block desensitizes the entire navicular apparatus, sole, and digital cushion?',
            questionAr: 'أي إحصار عصبي تشخيصي يخدر كامل جهاز العظم الزورقي وباطن الحافر والوسادة الإصبعية؟',
            options: [
              { en: 'Palmar digital nerve block (PDNB / Low digital block)', ar: 'إحصار العصب الإصبعي الراحي (PDNB أو الإحصار المنخفض)' },
              { en: 'Abaxial sesamoid nerve block', ar: 'إحصار العظم السمسماني البعيد' },
              { en: 'High four-point block', ar: 'إحصار النقاط الأربع المرتفع' },
              { en: 'Median nerve block', ar: 'إحصار العصب الأوسط' }
            ],
            correctAnswer: 'Palmar digital nerve block (PDNB / Low digital block)',
            explanationEn: 'The PDNB placed at the level of the collateral cartilages desensitizes the caudal third of the foot and sole.',
            explanationAr: 'يخدر إحصار العصب الإصبعي الراحي عند مستوى الغضاريف الجانبية الثلث الخلفي للحافر وباطن القدم.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_Costae',
        nameEn: 'Equine Rib Cage (18 Pairs)',
        nameAr: 'القفص الضلعي للحصان (18 زوجاً)',
        latinName: 'Costae (18 paria)',
        descriptionEn: 'Eighteen pairs of ribs (8 true sternal and 10 false asternal), creating a deep, laterally compressed thoracic cage.',
        descriptionAr: 'ثمانية عشر زوجاً من الأضلاع (8 حقيقية قصية و10 كاذبة لاقصية) تشكل قفصاً صدرياً عميقاً ومضغوطاً جانبياً.',
        bloodSupplyEn: 'Intercostal arteries originating directly from thoracic aorta.',
        bloodSupplyAr: 'الشرايين الوربية المتفرعة مباشرة من الأبهر الصدري.',
        innervationEn: 'Intercostal nerves running along the caudal border of each rib.',
        innervationAr: 'الأعصاب الوربية التي تسير عند الحافة الخلفية لكل ضلع.',
        clinicalPearlsEn: 'Thoracocentesis (pleural tap) is performed in the 7th or 8th intercostal space immediately dorsal to the lateral thoracic vein to avoid puncture of intercostal vessels.',
        clinicalPearlsAr: 'بزل الصدر يجرى في الفراغ الوربي السابع أو الثامن أعلى الوريد الصدري الوحشي مباشرة لتفادي إصابة الأوعية الوربية.',
        focusCoordinates: { position: [1.3, 0.7, 0.2], target: [0, 0.55, 0.25] },
        geometry: { shape: 'torus', position: [0, 0.55, 0.25], rotation: [Math.PI / 2, 0, 0], scale: [0.45, 0.45, 0.4], color: '#e2e8f0', roughness: 0.5, metalness: 0.05 },
        quizQuestions: [
          {
            questionEn: 'How many pairs of ribs does a normal horse possess?',
            questionAr: 'كم زوجاً من الأضلاع يمتلك الحصان السليم؟',
            options: [
              { en: '18 pairs (8 sternal, 10 asternal)', ar: '18 زوجاً (8 قصية و10 لاقصية)' },
              { en: '13 pairs', ar: '13 زوجاً' },
              { en: '12 pairs', ar: '12 زوجاً' },
              { en: '14 pairs', ar: '14 زوجاً' }
            ],
            correctAnswer: '18 pairs (8 sternal, 10 asternal)',
            explanationEn: 'The horse has 18 ribs on each side, providing expansive protection for heart and cranial abdominal organs.',
            explanationAr: 'يمتلك الحصان 18 ضلعاً في كل جانب توفر حماية شاسعة للقلب وأعضاء مقدمة البطن كالمعدة والكبد.'
          },
          {
            questionEn: 'When performing a thoracocentesis, where are the intercostal vessels and nerve located relative to each rib?',
            questionAr: 'عند إجراء بزل الصدر، أين تقع الأوعية والعصب الوربي بالنسبة لكل ضلع؟',
            options: [
              { en: 'Along the caudal border of the rib in the costal groove', ar: 'على طول الحافة الخلفية للضلع في الميزاب الضلعي' },
              { en: 'Along the cranial border', ar: 'على الحافة الأمامية للضلع' },
              { en: 'In the center of the intercostal space', ar: 'في منتصف الفراغ الوربي تماماً' },
              { en: 'Deep to the visceral pleura', ar: 'تحت غشاء الجنب الحشوي' }
            ],
            correctAnswer: 'Along the caudal border of the rib in the costal groove',
            explanationEn: 'The neurovascular bundle runs on the caudal aspect of each rib; needles are placed at the cranial border of the adjacent rib.',
            explanationAr: 'تسير الحزمة الوعائية العصبية عند الحافة الخلفية لكل ضلع، لذا يُدخل المبزل عند الحافة الأمامية للضلع لتجنبها.'
          }
        ]
      }
    ],
    muscular: [
      {
        meshId: 'Mesh_Equine_MusculusSerratusVentralis',
        nameEn: 'Equine Serratus Ventralis Muscle',
        nameAr: 'العضلة المسننة البطنية للحصان',
        latinName: 'Musculus serratus ventralis',
        descriptionEn: 'Massive fan-shaped thoracic and cervical muscle forming the primary muscular sling that suspends the horse\'s torso between the forelimbs with no clavicle.',
        descriptionAr: 'عضلة مروحية هائلة تشكل الحمالة العضلية الرئيسية التي تعلق جذع الحصان بين القائمتين الأماميتين بدون ترقوة.',
        bloodSupplyEn: 'Lateral thoracic and deep cervical arteries.',
        bloodSupplyAr: 'الشريانان الصدري الوحشي والرقبي العميق.',
        innervationEn: 'Long thoracic nerve (Nervus thoracicus longus).',
        innervationAr: 'العصب الصدري الطويل.',
        clinicalPearlsEn: 'Traumatic rupture of the serratus ventralis causes dramatic dropping of the thorax and dorsal elevation of the scapula above the withers.',
        clinicalPearlsAr: 'تمزق العضلة المسننة البطنية الرضحي يسبب هبوطاً عنيفاً للصدر وبروز عظم لوح الكتف للأعلى فوق الغارب.',
        focusCoordinates: { position: [1.1, 0.8, 0.4], target: [0.2, 0.6, 0.3] },
        geometry: { shape: 'box', position: [0.2, 0.6, 0.3], rotation: [0.2, 0.2, 0], scale: [0.2, 0.45, 0.42], color: '#991b1b', roughness: 0.5, metalness: 0.1 },
        quizQuestions: [
          {
            questionEn: 'Which nerve innervates the thoracic portion of the musculus serratus ventralis?',
            questionAr: 'أي عصب يغذي الجزء الصدري للعضلة المسننة البطنية في الخيل؟',
            options: [
              { en: 'Long thoracic nerve (Nervus thoracicus longus)', ar: 'العصب الصدري الطويل' },
              { en: 'Suprascapular nerve', ar: 'العصب فوق الكتف' },
              { en: 'Radial nerve', ar: 'العصب الكعبري' },
              { en: 'Axillary nerve', ar: 'العصب الإبطي' }
            ],
            correctAnswer: 'Long thoracic nerve (Nervus thoracicus longus)',
            explanationEn: 'The long thoracic nerve from C7-C8 runs across the lateral surface of the muscle to supply its thoracic sling portion.',
            explanationAr: 'يسير العصب الصدري الطويل المنبثق من C7-C8 فوق السطح الوحشي للعضلة ليغذي أليافها الحاملة للجذع.'
          },
          {
            questionEn: 'Because horses completely lack a clavicle, how is the weight of the cranial trunk transferred to the forelimbs?',
            questionAr: 'نظراً لأن الخيول تفتقر تماماً لعظم الترقوة، كيف ينتقل وزن مقدمة الجذع إلى القائمتين الأماميتين؟',
            options: [
              { en: 'Synsarcosis (muscular sling of serratus ventralis and pectorals)', ar: 'الاتصال العضلي (Synsarcosis) عبر الحمالة العضلية للمسننة البطنية والصدرية' },
              { en: 'Rigid synovial joint at the sternum', ar: 'مفصل زلالي صلب عند عظم القص' },
              { en: 'Fibrocartilaginous pelvic ring', ar: 'حلقة حوضية ليفية' },
              { en: 'Ligamentum nuchae directly to the hoof', ar: 'الرباط القفوي مباشرة للحافر' }
            ],
            correctAnswer: 'Synsarcosis (muscular sling of serratus ventralis and pectorals)',
            explanationEn: 'The forelimb connects to the trunk purely by muscle and fascia (synsarcosis), which acts as a shock absorber during locomotion.',
            explanationAr: 'يرتبط الطرف الأمامي بالجذع بواسطة العضلات واللفافات فقط (Synsarcosis)، مما يمتص الصدمات الهائلة أثناء العدو.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_ApparatusStatocinetica',
        nameEn: 'Equine Stay Apparatus (Suspensory Ligament & Tendons)',
        nameAr: 'جهاز الثبات الميكانيكي (الرباط المعلق والأوتار)',
        latinName: 'Apparatus statocinetica (M. interosseus III et Tendines)',
        descriptionEn: 'Anatomical biomechanical system of non-fatiguing fibrous ligaments and tendons that locks the horse\'s joints, permitting sleep while standing.',
        descriptionAr: 'نظام ميكانيكي حيوي من أربطة وأوتار ليفية لا تتعب يقفل مفاصل الحصان، مما يتيح له النوم والوقوف دون جهد عضلي.',
        bloodSupplyEn: 'Median and digital arterial arches.',
        bloodSupplyAr: 'الأقواس الشريانية المتوسطة والإصبعية.',
        innervationEn: 'Palmar nerves.',
        innervationAr: 'الأعصاب الراحية.',
        clinicalPearlsEn: 'Suspensory desmitis is a major lameness entity in performance horses; desmotomy of the check ligaments is used to treat flexural limb deformities in foals.',
        clinicalPearlsAr: 'التهاب الرباط المعلق سبب رئيسي لعرج خيول القفز؛ وقطع الأربطة المساعدة يُجرى لعلاج التشوهات الانثناءية في القوائم لدى المهور.',
        focusCoordinates: { position: [0.9, 0.4, 0.4], target: [0.28, 0.25, 0.3] },
        geometry: { shape: 'cylinder', position: [0.28, 0.25, 0.3], rotation: [0, 0, 0], scale: [0.06, 0.65, 0.06], color: '#e0e7ff', roughness: 0.35, metalness: 0.05 },
        quizQuestions: [
          {
            questionEn: 'What is the primary evolutionary function of the equine passive stay apparatus?',
            questionAr: 'ما هي الوظيفة التطورية الأساسية لجهاز الثبات الساكن (Stay Apparatus) في الخيل؟',
            options: [
              { en: 'Allows horses to stand and sleep with minimal muscular energy expenditure', ar: 'يتيح للحصان الوقوف والنوم بأقل استهلاك للطاقة العضلية' },
              { en: 'Increases sprinting speed beyond 80 km/h', ar: 'زيادة سرعة العدو فوق 80 كم/ساعة' },
              { en: 'Prevents bone growth in mature animals', ar: 'منع نمو العظام' },
              { en: 'Pumps blood back to the lungs', ar: 'ضخ الدم إلى الرئتين' }
            ],
            correctAnswer: 'Allows horses to stand and sleep with minimal muscular energy expenditure',
            explanationEn: 'The stay apparatus consists of tendons and check ligaments that lock the carpal, fetlock, and stifle joints mechanically.',
            explanationAr: 'يتكون جهاز الثبات من أوتار وأربطة مساعدة تقفل مفاصل القائمة ميكانيكياً بدون تعب عضلي.'
          },
          {
            questionEn: 'Which tendon is connected to the biceps brachii via the fibrous lacertus fibrosus in the forelimb stay apparatus?',
            questionAr: 'ما هو الوتر الذي يتصل بالعضلة ذات الرأسين العضدية عبر الرباط الليفي (Lacertus fibrosus) في القائمة الأمامية؟',
            options: [
              { en: 'Extensor carpi radialis tendon', ar: 'وتر العضلة الباسطة للرسغ الكعبرية' },
              { en: 'Deep digital flexor tendon', ar: 'وتر الثنية العميقة للإصبع' },
              { en: 'Common digital extensor tendon', ar: 'وتر الباسطة المشتركة' },
              { en: 'Lateral digital flexor', ar: 'الثنية الوحشية' }
            ],
            correctAnswer: 'Extensor carpi radialis tendon',
            explanationEn: 'The lacertus fibrosus transmits tension from the biceps brachii to the extensor carpi radialis, mechanically preventing carpal flexion.',
            explanationAr: 'ينقل الرباط الليفي التوتر من ذات الرأسين العضدية إلى باسطة الرسغ الكعبرية مانعاً انثناء مفصل الرسغ ميكانيكياً.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_MusculusGluteusMedius',
        nameEn: 'Equine Gluteus Medius Muscle',
        nameAr: 'العضلة الألوية الوسطى للحصان',
        latinName: 'Musculus gluteus medius',
        descriptionEn: 'Enormously developed pelvic muscle extending onto the aponeurosis of the longissimus dorsi, providing the primary engine for gallop propulsion.',
        descriptionAr: 'عضلة حوضية هائلة النمو تمتد فوق صفاق العضلة الظهرية الطولى، وتمثل المحرك العضلي الرئيسي لقوة الدفع أثناء العدو.',
        bloodSupplyEn: 'Cranial and caudal gluteal arteries.',
        bloodSupplyAr: 'الشريانان الألويان الأمامي والخلفي.',
        innervationEn: 'Cranial gluteal nerve (L6-S1).',
        innervationAr: 'العصب الألوي الأمامي (L6-S1).',
        clinicalPearlsEn: 'Gluteal muscle atrophy is a key sign of chronic sacroiliac joint disease or equine motor neuron disease (EMND).',
        clinicalPearlsAr: 'ضمور العضلة الألوية علامة تشخيصية رئيسية لمرض المفصل العجزي الحرقفي المزمن أو مرض العصبون الحركي EMND.',
        focusCoordinates: { position: [1.1, 0.9, -0.2], target: [0.22, 0.72, -0.38] },
        geometry: { shape: 'capsule', position: [0.22, 0.72, -0.38], rotation: [0.4, 0, 0.2], scale: [0.28, 0.45, 0.28], color: '#b91c1c', roughness: 0.45, metalness: 0.1 },
        quizQuestions: [
          {
            questionEn: 'What is the primary mechanical action of the equine gluteus medius during athletic locomotion?',
            questionAr: 'ما هو العمل الميكانيكي الرئيسي للعضلة الألوية الوسطى أثناء حركة الخيل الرياضية؟',
            options: [
              { en: 'Powerful extension of the hip (coxofemoral) joint to propel the horse forward', ar: 'بسط قوي لمفصل الورك الفخذي لدفع الحصان للأمام' },
              { en: 'Flexion of the hock joint', ar: 'ثني مفصل العرقوب' },
              { en: 'Adduction of the digits', ar: 'تقريب الأصابع' },
              { en: 'Pronation of the stifle', ar: 'كب مفصل الركبة' }
            ],
            correctAnswer: 'Powerful extension of the hip (coxofemoral) joint to propel the horse forward',
            explanationEn: 'The gluteus medius inserts on the major trochanter of the femur, providing maximal torque to extend the hip joint.',
            explanationAr: 'ترتكز الألوية الوسطى على المدور الكبير لعظم الفخذ موفرة عزماً فائقاً لبسط مفصل الورك وقذف الجسم للأمام.'
          },
          {
            questionEn: 'Which nerve innervates the gluteus medius muscle in the horse?',
            questionAr: 'أي عصب يغذي العضلة الألوية الوسطى في الحصان؟',
            options: [
              { en: 'Cranial gluteal nerve', ar: 'العصب الألوي الأمامي' },
              { en: 'Caudal gluteal nerve', ar: 'العصب الألوي الخلفي' },
              { en: 'Femoral nerve', ar: 'العصب الفخذي' },
              { en: 'Obturator nerve', ar: 'العصب السدادي' }
            ],
            correctAnswer: 'Cranial gluteal nerve',
            explanationEn: 'The cranial gluteal nerve arises from the lumbosacral plexus to innervate the gluteus medius and piriformis.',
            explanationAr: 'ينبثق العصب الألوي الأمامي من الضفيرة القطنية العجزية لتعصيب الألوية الوسطى والكمثرية.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_MusculusBrachiocephalicus',
        nameEn: 'Equine Brachiocephalicus Muscle',
        nameAr: 'العضلة العضدية الرأسية للحصان',
        latinName: 'Musculus brachiocephalicus',
        descriptionEn: 'Elongated compound muscle running along the dorsolateral neck from mastoid and occipital bones to the humeral crest, drawing the limb forward.',
        descriptionAr: 'عضلة ممتدة على طول الجانب الظهري الوحشي للعنق من العظمين الخشائي والقذالي لعظم العضد لسحب القائمة للأمام.',
        bloodSupplyEn: 'Carotid and superficial cervical arteries.',
        bloodSupplyAr: 'الشريانان السباتي والرقبي السطحي.',
        innervationEn: 'Accessory nerve (CN XI) and cervical spinal nerves.',
        innervationAr: 'العصب الإضافي (العصب الحادي عشر) والأعصاب الشوكية الرقبية.',
        clinicalPearlsEn: 'Forms the dorsal boundary of the jugular groove (Sulcus jugularis); crucial surgical landmark for venipuncture and catheter placement.',
        clinicalPearlsAr: 'تشكل الحد الظهري للميزاب الوداجي؛ وهي معلم جراحي حاسم لسحب الدم وتركيب القسطرة الوريدية.',
        focusCoordinates: { position: [0.8, 0.9, 0.8], target: [0.12, 0.75, 0.6] },
        geometry: { shape: 'capsule', position: [0.12, 0.75, 0.6], rotation: [0.5, 0.1, 0], scale: [0.14, 0.65, 0.14], color: '#991b1b', roughness: 0.5, metalness: 0.08 },
        quizQuestions: [
          {
            questionEn: 'Which anatomical groove is bounded dorsally by the brachiocephalicus and ventrally by the sternocephalicus in the horse?',
            questionAr: 'ما هو الميزاب التشريحي الذي تحده العضلة العضدية الرأسية ظهرياً والقصية الرأسية بطنياً؟',
            options: [
              { en: 'Jugular groove (Sulcus jugularis)', ar: 'الميزاب الوداجي (Sulcus jugularis)' },
              { en: 'Tracheal groove', ar: 'الميزاب الرغامي' },
              { en: 'Parotid notch', ar: 'الثلمة النكفية' },
              { en: 'Spinal groove', ar: 'الميزاب الشوكي' }
            ],
            correctAnswer: 'Jugular groove (Sulcus jugularis)',
            explanationEn: 'The jugular groove accommodates the external jugular vein, making this muscular boundary essential for safe intravenous access.',
            explanationAr: 'يحتضن الميزاب الوداجي الوريد الوداجي الظاهر، وتعتبر هذه الحدود العضلية أساسية للحقن الوريدي الآمن.'
          },
          {
            questionEn: 'What is the primary action of the brachiocephalicus muscle when the limb is bearing weight on the ground?',
            questionAr: 'ما هو العمل الرئيسي للعضلة العضدية الرأسية عندما تكون القائمة الأمامية مثبتة على الأرض وحاملة للوزن؟',
            options: [
              { en: 'Draws the neck and head ventrally and laterally to that side', ar: 'سحب الرأس والعنق إلى الأسفل وإلى الجانب المقابل' },
              { en: 'Extends the carpus', ar: 'بسط مفصل الرسغ' },
              { en: 'Rotates the thorax dorsally', ar: 'تدوير الصدر ظهرياً' },
              { en: 'Elevates the tail', ar: 'رفع الذيل' }
            ],
            correctAnswer: 'Draws the neck and head ventrally and laterally to that side',
            explanationEn: 'When the limb is stationary, contraction bends the head and neck laterally toward the ipsilateral side.',
            explanationAr: 'عند ثبات القائمة على الأرض يؤدي انقباض العضلة لثني الرأس والعنق نحو نفس الجانب.'
          }
        ]
      }
    ]
  }
};

console.log('Writing comprehensive anatomy definitions builder...');
fs.writeFileSync(path.join(__dirname, 'anatomy-data-checkpoint.json'), JSON.stringify(speciesSystemsData, null, 2));
console.log('Checkpoint saved successfully.');
