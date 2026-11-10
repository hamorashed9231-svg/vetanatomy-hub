// scripts/generate-data-file.ts
import * as fs from 'fs';
import * as path from 'path';

interface OrganDef {
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
  geometry: {
    shape: 'sphere' | 'capsule' | 'cylinder' | 'box' | 'cone' | 'torus';
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
    color: string;
    roughness: number;
    metalness: number;
  };
  quizQuestions: {
    questionEn: string;
    questionAr: string;
    options: { en: string; ar: string }[];
    correctAnswer: string;
    explanationEn: string;
    explanationAr: string;
  }[];
}

type SystemOrgans = Record<string, OrganDef[]>;
type SpeciesData = Record<string, SystemOrgans>;

// Comprehensive data map
export const data: SpeciesData = {
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
            questionEn: 'Which physiological cardiac arrhythmia is commonly heard in fit athletic horses at rest?',
            questionAr: 'ما هو اضطراب نظم القلب الفسيولوجي الشائع سماعه في خيول السباق الرياضية وقت الراحة؟',
            options: [
              { en: 'Second-degree AV block (Mobitz Type I)', ar: 'إحصار أذيني بطيني من الدرجة الثانية' },
              { en: 'Ventricular fibrillation', ar: 'الرجفان البطيني' },
              { en: 'Third-degree complete heart block', ar: 'إحصار القلب التام من الدرجة الثالثة' },
              { en: 'Atrial standstill', ar: 'توقف الأذينين التام' }
            ],
            correctAnswer: 'Second-degree AV block (Mobitz Type I)',
            explanationEn: 'High resting vagal tone in fit athletic horses frequently causes physiological, benign 2nd-degree AV block that abolishes with exercise.',
            explanationAr: 'ارتفاع توتر العصب المبهم وقت الراحة يسبب إحصاراً فسيولوجياً حميداً يختفي فوراً مع المجهود البدني.'
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
            explanationEn: 'Resting cardiac output is 35-45 L/min and can increase nearly eightfold to 300 L/min during maximal exercise.',
            explanationAr: 'يبلغ النتاج القلبي وقت الراحة 35-45 لتر/دقيقة ويرتفع إلى نحو 300 لتر/دقيقة عند العدو الأقصى.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_Aorta',
        nameEn: 'Equine Thoracic Aorta',
        nameAr: 'الأبهر الصدري للحصان',
        latinName: 'Aorta thoracica',
        descriptionEn: 'The primary high-pressure elastic conduit emerging from the left ventricle, arching dorsally to distribute oxygenated blood.',
        descriptionAr: 'الوعاء الشرياني المرن عالي الضغط الصادر من البطين الأيسر المنحني ظهرياً لتوزيع الدم المؤكسج.',
        bloodSupplyEn: 'Direct systemic arterial outflow.',
        bloodSupplyAr: 'المجرى الرئيسي الشرياني الجهازي.',
        innervationEn: 'Aortic baroreceptors innervated by the vagus nerve (CN X).',
        innervationAr: 'مستقبلات الضغط الأبهرية عبر العصب المبهم.',
        clinicalPearlsEn: 'Aortocardiac fistula or spontaneous aortic rupture at the root can cause peracute collapse and hemothorax in stallions during breeding.',
        clinicalPearlsAr: 'تمزق جذر الأبهر أو الناسور القلبي الأبهري قد يسبب الانهيار المفاجئ والنزف الصدري في الفحول أثناء التلقيح.',
        focusCoordinates: { position: [1.0, 0.9, 0.3], target: [0, 0.7, 0.2] },
        geometry: { shape: 'torus', position: [0, 0.68, 0.3], rotation: [Math.PI / 2, 0.3, 0], scale: [0.28, 0.28, 0.35], color: '#b91c1c', roughness: 0.35, metalness: 0.2 },
        quizQuestions: [
          {
            questionEn: 'Which nerve carries baroreceptor afferents from the equine aortic arch?',
            questionAr: 'أي عصب ينقل الإشارات الصادرة من مستقبلات الضغط في قوس الأبهر في الخيل؟',
            options: [
              { en: 'Vagus nerve (CN X)', ar: 'العصب المبهم (العصب العاشر)' },
              { en: 'Glossopharyngeal nerve (CN IX)', ar: 'العصب البلعومي اللساني' },
              { en: 'Phrenic nerve', ar: 'العصب الحجابي' },
              { en: 'Accessory nerve (CN XI)', ar: 'العصب الإضافي' }
            ],
            correctAnswer: 'Vagus nerve (CN X)',
            explanationEn: 'Aortic arch baroreceptors transmit via aortic nerve branches of CN X, while carotid sinus baroreceptors travel via CN IX.',
            explanationAr: 'تنتقل إشارات مستقبلات قوس الأبهر عبر فروع العصب المبهم بينما الجيب السباتي عبر العصب التاسع.'
          },
          {
            questionEn: 'Spontaneous rupture of the aortic bulb in breeding stallions typically ruptures into which chamber?',
            questionAr: 'التمزق التلقائي لبصلة الأبهر في فحول الخيل يحدث غالباً نحو أي تجويف؟',
            options: [
              { en: 'Right atrium or pericardial cavity', ar: 'الأذين الأيمن أو كيس التامور' },
              { en: 'Left ventricle', ar: 'البطين الأيسر' },
              { en: 'Esophagus', ar: 'المريء' },
              { en: 'Trachea', ar: 'القصبة الهوائية' }
            ],
            correctAnswer: 'Right atrium or pericardial cavity',
            explanationEn: 'Rupture usually dissects into the right atrium causing an acute aorto-cardiac fistula or into the pericardial sac causing acute cardiac tamponade.',
            explanationAr: 'يتمزق جذر الأبهر عادة إلى الأذين الأيمن محدثاً ناصوراً أو في التامور مسبباً الاندحاس القلبي القاتل.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_VenaCava',
        nameEn: 'Equine Cranial & Caudal Vena Cava',
        nameAr: 'الوريدان الأجوفان العلوي والسفلي للحصان',
        latinName: 'Vena cava cranialis et caudalis',
        descriptionEn: 'Large thin-walled venous return trunks conveying deoxygenated systemic blood back to the right atrium.',
        descriptionAr: 'جذعان وريديان رئيسيان كبيران رقيقا الجدار يعيدان الدم غير المؤكسج للأذين الأيمن.',
        bloodSupplyEn: 'Venous return conduits from cranial and caudal body regions.',
        bloodSupplyAr: 'مجاري العائد الوريدي من المناطق الأمامية والخلفية للجسم.',
        innervationEn: 'Postganglionic sympathetic fibers regulating venous capacitance.',
        innervationAr: 'ألياف ودية بعد عقدية تنظم سعة الأوعية الوريدية.',
        clinicalPearlsEn: 'Central venous pressure (CVP) catheterization via the jugular into the cranial vena cava guides resuscitation in septic colic.',
        clinicalPearlsAr: 'قياس الضغط الوريدي المركزي عبر الوريد الوداجي للأجوف الأمامي يرشد إنعاش السوائل في حالات المغص الإنتاني.',
        focusCoordinates: { position: [-1.0, 0.6, 0.2], target: [0, 0.5, 0.15] },
        geometry: { shape: 'cylinder', position: [-0.08, 0.52, 0.18], rotation: [0.2, 0, 0], scale: [0.12, 0.8, 0.12], color: '#2563eb', roughness: 0.4, metalness: 0.1 },
        quizQuestions: [
          {
            questionEn: 'Where does the caudal vena cava penetrate the diaphragm in the horse?',
            questionAr: 'أين يخترق الوريد الأجوف الخلفي الحجاب الحاجز في الخيل؟',
            options: [
              { en: 'Foramen venae cavae in the central tendon', ar: 'ثقبة الوريد الأجوف في المركز الوتري' },
              { en: 'Hiatus aorticus', ar: 'الفرجة الأبهرية' },
              { en: 'Hiatus esophageus', ar: 'الفرجة المريئية' },
              { en: 'Lumbocostal arch', ar: 'القوس القطني الضلعي' }
            ],
            correctAnswer: 'Foramen venae cavae in the central tendon',
            explanationEn: 'The caudal vena cava passes through the caval foramen in the tendinous center of the diaphragm, preventing venous constriction during respiration.',
            explanationAr: 'يمر الأجوف الخلفي في ثقبة المركز الوتري للحجاب الحاجز لتجنب انضغاط الوريد أثناء التنفس.'
          },
          {
            questionEn: 'What is the diagnostic significance of a jugular venous pulse visible above the lower third of the neck in a horse at rest?',
            questionAr: 'ما هي الدلالة السريرية لنبض الوريد الوداجي المتجاوز للثلث السفلي من الرقبة في الحصان وقت الراحة؟',
            options: [
              { en: 'Tricuspid insufficiency or right heart overload', ar: 'قصور الصمام ثلاثي الشرفات أو فرط حمل القلب الأيمن' },
              { en: 'Normal athletic finding', ar: 'موجود فسيولوجي طبيعي في الخيول الرياضية' },
              { en: 'Dehydration', ar: 'الجفاف الشديد' },
              { en: 'Left ventricular hypertrophy', ar: 'تضخم البطين الأيسر' }
            ],
            correctAnswer: 'Tricuspid insufficiency or right heart overload',
            explanationEn: 'A true venous pulse propagating up the jugular vein indicates elevated right atrial pressure, most commonly due to tricuspid valve regurgitation.',
            explanationAr: 'يدل النبض الوداجي المرتفع على ارتفاع ضغط الأذين الأيمن الناجم عن ارتجاع الصمام ثلاثي الشرفات.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_TruncusPulmonalis',
        nameEn: 'Equine Pulmonary Trunk & Arteries',
        nameAr: 'الجذع والشرايين الرئوية للحصان',
        latinName: 'Truncus pulmonalis',
        descriptionEn: 'Arising from the conus arteriosus of the right ventricle, bifurcating into right and left pulmonary arteries.',
        descriptionAr: 'ينشأ من المخروط الشرياني للبطين الأيمن ويتفرع للشريانين الرئويين الأيمن والأيسر لنقل الدم للرئتين.',
        bloodSupplyEn: 'Venous blood destined for pulmonary oxygenation.',
        bloodSupplyAr: 'دم وريدي متجه للرئة للأكسجة.',
        innervationEn: 'Pulmonary autonomic nerve plexus.',
        innervationAr: 'الضفيرة الرئوية الذاتية.',
        clinicalPearlsEn: 'Severe pulmonary arterial hypertension during racing can precipitate exercise-induced pulmonary hemorrhage (EIPH).',
        clinicalPearlsAr: 'ارتفاع الضغط الشرياني الرئوي الشديد أثناء السباق يؤدي إلى النزف الرئوي الناجم عن المجهود EIPH.',
        focusCoordinates: { position: [1.0, 0.7, 0.5], target: [0.1, 0.55, 0.35] },
        geometry: { shape: 'capsule', position: [0.14, 0.58, 0.42], rotation: [0.4, 0, -0.3], scale: [0.12, 0.4, 0.12], color: '#3b82f6', roughness: 0.35, metalness: 0.15 },
        quizQuestions: [
          {
            questionEn: 'Which embryonic structure connects the pulmonary trunk to the aortic arch in the fetus and closes at birth?',
            questionAr: 'ما هو التركيب الجنيني الذي يربط الجذع الرئوي بقوس الأبهر وينغلق بعد الولادة؟',
            options: [
              { en: 'Ductus arteriosus (Ligamentum arteriosum)', ar: 'القناة الشريانية (الرباط الشرياني)' },
              { en: 'Foramen ovale', ar: 'الثقبة البيضوية' },
              { en: 'Ductus venosus', ar: 'القناة الوريدية' },
              { en: 'Urachus', ar: 'السقاء الجنيني' }
            ],
            correctAnswer: 'Ductus arteriosus (Ligamentum arteriosum)',
            explanationEn: 'The ductus arteriosus shunts blood away from non-functional fetal lungs into the aorta and closes to form the ligamentum arteriosum post-partum.',
            explanationAr: 'تحول القناة الشريانية الدم من الرئتين الجنينيتين إلى الأبهر وتنغلق بعد الولادة لتصبح الرباط الشرياني.'
          },
          {
            questionEn: 'Exercise-Induced Pulmonary Hemorrhage (EIPH) in racehorses is primarily caused by stress failure of which vessels?',
            questionAr: 'النزف الرئوي بالجهد EIPH في خيول السباق ينجم أساساً عن تمزق إجهادي لأي أوعية؟',
            options: [
              { en: 'Pulmonary capillaries under extreme transmural pressure', ar: 'الشعيرات الدموية الرئوية تحت ضغط جداري فائق' },
              { en: 'Bronchial arteries', ar: 'الشرايين الشعبية' },
              { en: 'Cranial vena cava', ar: 'الوريد الأجوف الأمامي' },
              { en: 'Aortic arch', ar: 'قوس الشريان الأبهر' }
            ],
            correctAnswer: 'Pulmonary capillaries under extreme transmural pressure',
            explanationEn: 'High pulmonary artery pressure combined with negative alveolar pressure causes capillary transmural pressure to exceed mechanical breaking limits.',
            explanationAr: 'ارتفاع الضغط الرئوي مع الضغط السلبي السنخي يؤدي لتجاوز ضغط جدار الشعيرات لحدودها الميكانيكية وتمزقها.'
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
            explanationEn: 'The margo plicatus is the visible serrated junction between the pale stratified squamous non-glandular mucosa and the dark glandular mucosa.',
            explanationAr: 'الخط المسنن هو الحد الفاصل المرئي بين الغشاء الحرشفي الشاحب والغشاء الغدي الداكن.'
          },
          {
            questionEn: 'Why can horses virtually never vomit, even when suffering fatal gastric distension?',
            questionAr: 'لماذا يستحيل على الخيول التقيؤ حتى عند حدوث تمدد وانفجار مميت للمعدة؟',
            options: [
              { en: 'Extremely strong lower esophageal cardiac sphincter entering at an oblique angle', ar: 'صمام الفؤاد العضلي فائق القوة ودخوله بزاوية مائلة' },
              { en: 'Absence of abdominal wall muscles', ar: 'غياب عضلات جدار البطن' },
              { en: 'Lack of a vomiting center in the brain', ar: 'عدم وجود مركز قيء في الدماغ' },
              { en: 'Absence of gastric acid', ar: 'عدم وجود حمض المعدة' }
            ],
            correctAnswer: 'Extremely strong lower esophageal cardiac sphincter entering at an oblique angle',
            explanationEn: 'The equine terminal esophagus enters the cardia obliquely, and the circular muscular sphincter acts as a one-way valve, making vomiting impossible.',
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
            explanationEn: 'The equine cecum has 4 longitudinal muscular bands (teniae) and 4 rows of haustra (sacculations) used as key surgical landmarks.',
            explanationAr: 'يحتوي أعور الخيل على 4 أحزمة طولية مع جيوب تبرز كمعالم جراحية أساسية أثناء استكشاف البطن.'
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
            explanationEn: 'The ileum discharges digesta into the base of the cecum through the ileocecal orifice on its medial aspect.',
            explanationAr: 'يصب اللفائفي محتواه في قاعدة الأعور عبر الفتحة اللفائفية الأعورية في الوجه الأنسي.'
          }
        ]
      },
      {
        meshId: 'Mesh_Equine_ColonAscendens',
        nameEn: 'Equine Large Colon & Pelvic Flexure',
        nameAr: 'القولون الكبير والانثناء الحوضي للحصان',
        latinName: 'Colon ascendens et Flexura pelvina',
        descriptionEn: 'A voluminous, four-tiered colon (right/left ventral and dorsal colons) characterized by a narrow 180-degree turn at the pelvic flexure.',
        descriptionAr: 'قولون رباعي المسارات (بطني وظهري أيمن وأيسر) يتميز بدوران حاد بمقدار 180 درجة عند الانثناء الحوضي.',
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
              { en: 'Narrows from ~30 cm (left ventral) to ~8 cm (left dorsal)', ar: 'يتضيق من ~30 سم إلى ~8 سم' },
              { en: 'Widens from 5 cm to 40 cm', ar: 'يتسع من 5 سم إلى 40 سم' },
              { en: 'Remains uniform throughout', ar: 'يبقى منتظماً بنفس القطر' },
              { en: 'Completely obliterates the lumen', ar: 'ينسد التجويف تماماً' }
            ],
            correctAnswer: 'Narrows from ~30 cm (left ventral) to ~8 cm (left dorsal)',
            explanationEn: 'The left ventral colon (sacculated, 4 teniae) narrows down abruptly into the pelvic flexure (smooth, 1 tenia) before turning into the left dorsal colon.',
            explanationAr: 'يتضيق القولون البطني الأيسر الواسع بشكل حاد عند الانثناء الحوضي قبل الصعود للقولون الظهري الأيسر.'
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
            explanationEn: 'The pelvic flexure has only 1 tenia along its mesenteric attachment, making it smooth and distinguishing it palpably from sacculated ventral colon.',
            explanationAr: 'يمتلك الانثناء الحوضي حزاماً عضلياً واحداً عند الاتصال المساريقي مما يجعله ناعماً وأملساً.'
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
        bloodSupplyEn: 'Portal vein (75% functional afferent) and hepatic artery (25% oxygenated nutritional); drained by hepatic veins into caudal vena cava.',
        bloodSupplyAr: 'الوريد البابي (75% من التدفق الوظيفي) والشريان الكبدي (25% دم مغذٍ) والأوردة الكبدية تصب في الأجوف السفلي.',
        innervationEn: 'Hepatic plexus from celiac ganglion and vagal fibers.',
        innervationAr: 'الضفيرة الكبدية من العقدة الجوفية وألياف العصب المبهم.',
        clinicalPearlsEn: 'Horses continuously secrete bile directly into the duodenum through the major duodenal papilla; hyperbilirubinemia develops quickly during anorexia.',
        clinicalPearlsAr: 'تفرز الخيول الصفراء باستمرار إلى الإثني عشر عبر الحليمة الإثناعشرية ويرتفع البيليروبين سريعاً عند الصيام أو فقدان الشهية.',
        focusCoordinates: { position: [0.8, 0.8, 0.4], target: [-0.05, 0.6, 0.2] },
        geometry: { shape: 'sphere', position: [-0.08, 0.62, 0.22], rotation: [0.3, 0.4, 0], scale: [0.45, 0.32, 0.28], color: '#854d0e', roughness: 0.4, metalness: 0.12 },
        quizQuestions: [
          {
            questionEn: 'Which anatomical feature is unique to the equine biliary system compared to ruminants and carnivores?',
            questionAr: 'ما هي الخاصية التشريحية الفريدة للجهاز المراري في الخيل مقارنة بالمجترات واللواحم؟',
            options: [
              { en: 'Complete absence of a gallbladder (Vesica fellea)', ar: 'الغياب التام للمرارة (كيس الصفراء)' },
              { en: 'Presence of two gallbladders', ar: 'وجود كيسي صفراء' },
              { en: 'Direct drainage into the stomach', ar: 'التصريف المباشر في المعدة' },
              { en: 'Absence of bile ducts', ar: 'غياب القنوات المرارية' }
            ],
            correctAnswer: 'Complete absence of a gallbladder (Vesica fellea)',
            explanationEn: 'Equines lack a gallbladder entirely. Bile is continuously produced by hepatocytes and directed straight into the duodenum via the common bile duct.',
            explanationAr: 'تفتقر الخيول للمرارة تماماً وينتقل سائل الصفراء مباشرة من خلايا الكبد إلى الإثني عشر عبر القناة الصفراوية العامة.'
          },
          {
            questionEn: 'Why do healthy horses rapidly develop physiological hyperbilirubinemia (jaundice) after 24-48 hours of feed deprivation?',
            questionAr: 'لماذا تصاب الخيول السليمة بيرقان فسيولوجي سريع بعد 24-48 ساعة من الامتناع عن الأكل؟',
            options: [
              { en: 'Free fatty acids compete with indirect bilirubin for hepatocyte uptake proteins (ligandins)', ar: 'تنافس الأحماض الدهنية الحرة للبيليروبين على بروتينات الالتقاط الكبدية' },
              { en: 'Acute massive hemolysis', ar: 'انحلال دم حاد وشديد' },
              { en: 'Bile duct obstruction by gallstones', ar: 'انسداد القناة الصفراوية بحصوات' },
              { en: 'Destruction of hepatocytes', ar: 'تلف خلايا الكبد' }
            ],
            correctAnswer: 'Free fatty acids compete with indirect bilirubin for hepatocyte uptake proteins (ligandins)',
            explanationEn: 'Fasting mobilizes free fatty acids which competitively inhibit hepatocyte uptake and intracellular transport (ligandin Y and Z) of unconjugated bilirubin.',
            explanationAr: 'يحرر الصيام أحماضاً دهنية حرة تنافس البيليروبين غير المقترن على بروتينات الليغاندين الكبدية مما يرفع مستواه بالدم.'
          }
        ]
      }
    ]
  }
};
