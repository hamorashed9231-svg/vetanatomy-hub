// scripts/build-ovine-caprine.js
const fs = require('fs');
const path = require('path');

const ovineOrgans = [
  // Cardiovascular
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'cardiovascular', meshId: 'Mesh_Ovine_Cor',
    nameEn: 'Ovine Four-Chambered Heart', nameAr: 'قلب المجترات الصغيرة رباعي التجاويف', latinName: 'Cor (Ovis aries / Capra hircus)',
    descriptionEn: 'Conical ruminant heart located between 3rd and 6th ribs in middle mediastinum with right-dominant coronary circulation and os cordis.',
    descriptionAr: 'قلب مخروطي يقع بين الضلعين 3 و6 في المنصف الأوسط مع سيادة شريانية تاجية يمنى وعظم قلبي.',
    bloodSupplyEn: 'Right coronary artery (predominant in small ruminants, continuing as subsinuosal branch) and left coronary artery.',
    bloodSupplyAr: 'الشريان التاجي الأيمن (السائد في المجترات الصغيرة ويمتد في الميزاب تحت الجيبي) والشريان التاجي الأيسر.',
    innervationEn: 'Autonomic cardiac plexus from vagus and sympathetic trunk.',
    innervationAr: 'الضفيرة القلبية الذاتية من العصب المبهم والجذع الودي.',
    clinicalPearlsEn: 'White Muscle Disease (nutritional muscular dystrophy from selenium/vitamin E deficiency) causes acute myocardial necrosis and heart failure in lambs/kids.',
    clinicalPearlsAr: 'مرض العضلات البيضاء (نقص السيلينيوم وفيتامين هـ) يسبب تنخراً في عضلة القلب وقصوراً حاداً في الحملان والجداء.',
    focusCoordinates: { position: [1.2, 0.6, 0.35], target: [0, 0.45, 0.35] },
    geometry: { shape: 'cone', position: [0.08, 0.45, 0.35], rotation: [Math.PI, 0, 0.2], scale: [0.26, 0.34, 0.26], color: '#dc2626', roughness: 0.3, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Which deficiency disease causes chalky white necrotic myocardial lesions and acute heart failure in young lambs?',
        questionAr: 'ما هو مرض النقص الغذائي الذي يسبب آفات طباشيرية بيضاء وتنخراً في عضلة القلب وقصوراً حاداً في الحملان؟',
        options: [
          { en: 'Nutritional Myodegeneration (White Muscle Disease) due to Selenium / Vitamin E deficiency', ar: 'تنكس العضلات الغذائي (مرض العضلات البيضاء) الناتج عن نقص السيلينيوم وفيتامين E' },
          { en: 'Rickets due to Vitamin D deficiency', ar: 'الكساح الناتج عن نقص فيتامين D' },
          { en: 'Grass tetany from magnesium deficiency', ar: 'كزاز الحشائش الناتج عن نقص المغنيسيوم' },
          { en: 'Copper toxicity', ar: 'تسمم النحاس' }
        ],
        correctAnswer: 'Nutritional Myodegeneration (White Muscle Disease) due to Selenium / Vitamin E deficiency',
        explanationEn: 'Selenium/Vit E are essential antioxidants; deficiency causes free radical oxidation of cardiac and skeletal muscle fibers.',
        explanationAr: 'يعمل السيلينيوم وفيتامين هـ كمضادات أكسدة؛ ونقصهما يسبب أكسدة وتلف ألياف عضلة القلب والعضلات الهيكلية.'
      },
      {
        questionEn: 'Which coronary circulation pattern predominates in ovine and bovine hearts compared to carnivores?',
        questionAr: 'أي نمط للدورة التاجية يسود في قلوب الأغنام والأبقار مقارنة باللواحم؟',
        options: [
          { en: 'Right coronary dominance (subsinuosal branch supplied by right coronary)', ar: 'سيادة الشريان التاجي الأيمن (الفرع تحت الجيبي مشتق من التاجي الأيمن)' },
          { en: 'Left coronary dominance exclusively', ar: 'سيادة الشريان التاجي الأيسر حصرياً' },
          { en: 'Absence of coronary arteries (nourished directly by luminal blood)', ar: 'غياب الشرايين التاجية تماماً' },
          { en: 'Internal thoracic artery supply', ar: 'التروية من الشريان الصدري الداخلي' }
        ],
        correctAnswer: 'Right coronary dominance (subsinuosal branch supplied by right coronary)',
        explanationEn: 'Ruminants (sheep and cattle) exhibit right-dominant coronary circulation, where the right coronary reaches the subsinuosal groove.',
        explanationAr: 'تتميز المجترات بدورة تاجية ذات سيادة يمنى، حيث يمتد الشريان التاجي الأيمن ليغذي الميزاب تحت الجيبي.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'cardiovascular', meshId: 'Mesh_Ovine_Aorta',
    nameEn: 'Ovine Aorta & Brachiocephalic Trunk', nameAr: 'الأبهر والجذع العضدي الرأسي في الأغنام', latinName: 'Aorta et truncus brachiocephalicus',
    descriptionEn: 'Arises from left ventricle giving off a single massive brachiocephalic trunk that supplies both forelimbs, head, and neck.',
    descriptionAr: 'ينشأ من البطين الأيسر معطياً جذعاً عضدياً رأسياً ضخماً ومفرداً يغذي الطرفين الأماميين والرأس والرقبة.',
    bloodSupplyEn: 'Direct systemic high-pressure output from left ventricle.',
    bloodSupplyAr: 'الناتج الشرياني الجهازي عالي الضغط من البطين الأيسر.',
    innervationEn: 'Aortic plexus and cardiac depressor nerves.',
    innervationAr: 'الضفيرة الأبهرية وأعصاب القلب الخافضة للضغط.',
    clinicalPearlsEn: 'Just like in equines and bovines, small ruminants feature a single common brachiocephalic trunk from the aortic arch.',
    clinicalPearlsAr: 'كما في الخيول والأبقار، تمتلك المجترات الصغيرة جذعاً عضدياً رأسياً مشتركاً ينبثق من قوس الأبهر.',
    focusCoordinates: { position: [1.1, 0.7, 0.2], target: [0, 0.52, 0.15] },
    geometry: { shape: 'cylinder', position: [0, 0.52, 0.15], rotation: [0, 0, Math.PI / 2], scale: [0.04, 0.65, 0.04], color: '#ef4444', roughness: 0.25, metalness: 0.15 },
    quizQuestions: [
      {
        questionEn: 'How many major arterial branches leave the aortic arch in sheep and goats?',
        questionAr: 'كم فرعاً شريانياً رئيسياً ينشأ مباشرة من قوس الأبهر في الأغنام والماعز؟',
        options: [
          { en: 'One single branch: the brachiocephalic trunk (truncus brachiocephalicus)', ar: 'فرع رئيسي واحد فقط: الجذع العضدي الرأسي' },
          { en: 'Two separate branches: brachiocephalic trunk and left subclavian artery', ar: 'فرعان منفصلان: الجذع العضدي الرأسي والشريان تحت الترقوة الأيسر' },
          { en: 'Three branches identical to human anatomy', ar: 'ثلاثة فروع مماثلة لتشريح الإنسان' },
          { en: 'Four independent arterial arches', ar: 'أربعة أقواس شريانية مستقلة' }
        ],
        correctAnswer: 'One single branch: the brachiocephalic trunk (truncus brachiocephalicus)',
        explanationEn: 'Ungulates (ruminants and horses) have only one vessel leaving the aortic arch: the brachiocephalic trunk.',
        explanationAr: 'في الحافريات والمجترات، ينشأ فرع وحيد ضخم من قوس الأبهر هو الجذع العضدي الرأسي المشترك.'
      },
      {
        questionEn: 'What fetal vessel connects the pulmonary artery to the descending aorta in the ovine fetus?',
        questionAr: 'ما هو الوعاء الجنيني الذي يربط الشريان الرئوي بالأبهر النازل في جنين الأغنام؟',
        options: [
          { en: 'Ductus arteriosus (ligamentum arteriosum in adults)', ar: 'القناة الشريانية (Ductus arteriosus وتتحول للرباط الشرياني لدى البالغين)' },
          { en: 'Ductus venosus', ar: 'القناة الوريدية' },
          { en: 'Foramen ovale', ar: 'الثقبة البيضوية' },
          { en: 'Umbilical vein', ar: 'الوريد السري' }
        ],
        correctAnswer: 'Ductus arteriosus (ligamentum arteriosum in adults)',
        explanationEn: 'The ductus arteriosus shunts blood away from unexpanded fetal lungs directly into the aorta.',
        explanationAr: 'تحول القناة الشريانية الدم بعيداً عن الرئتين الجنينيتين غير الفعالتين إلى الشريان الأبهر مباشرة.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'cardiovascular', meshId: 'Mesh_Ovine_VenaCava',
    nameEn: 'Caudal Vena Cava', nameAr: 'الوريد الأجوف الذيلي في المجترات الصغيرة', latinName: 'Vena cava caudalis',
    descriptionEn: 'Conveys systemic venous blood from pelvis, kidneys, and liver through the caval foramen of the diaphragm to right atrium.',
    descriptionAr: 'ينقل الدم الوريدي الجهازي من الحوض والكليتين والكبد عبر ثقبة الأجوف في الحجاب الحاجز إلى الأذين الأيمن.',
    bloodSupplyEn: 'Systemic venous return channel.',
    bloodSupplyAr: 'قناة عودة الدم الوريدي الجهازي.',
    innervationEn: 'Sympathetic vasomotor fibers.',
    innervationAr: 'ألياف حركية وعائية ودية.',
    clinicalPearlsEn: 'Right heart failure causes hepatic venous engorgement, jugular venous distension, and ventral brisket edema ("bottle jaw" / hypoproteinemic edema).',
    clinicalPearlsAr: 'قصور القلب الأيمن يسبب احتقاناً كبدياً وتمدد الوريد الوداجي ووذمة أسفل الفك واللبدة ("فك القارورة").',
    focusCoordinates: { position: [1.1, 0.55, 0.1], target: [0.03, 0.46, 0.08] },
    geometry: { shape: 'cylinder', position: [0.03, 0.46, 0.08], rotation: [0, 0, Math.PI / 2], scale: [0.045, 0.62, 0.045], color: '#2563eb', roughness: 0.4, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Severe hypoproteinemia in sheep caused by Haemonchus or liver fluke leads to dependent submandibular edema clinically termed what?',
        questionAr: 'نقص بروتينات الدم الشديد في الأغنام بسبب طفيلي هيمونكس أو ديدان الكبد يؤدي لوذمة تحت الفك تسمى سريرياً ماذا؟',
        options: [
          { en: '"Bottle Jaw" (edema submandibularis)', ar: '"فك القارورة" (وذمة تحت الفك السفلي Bottle Jaw)' },
          { en: 'Wooden tongue', ar: 'اللسان الخشبي' },
          { en: 'Lumpy jaw', ar: 'الفك العقدي' },
          { en: 'Big head', ar: 'الرأس الضخم' }
        ],
        correctAnswer: '"Bottle Jaw" (edema submandibularis)',
        explanationEn: 'Decreased oncotic pressure from blood-feeding abomasal or hepatic parasites results in fluid accumulation in dependent loose tissue.',
        explanationAr: 'انخفاض الضغط الجرمي الغرواني الناتج عن فقد الدم يسبب رشح السوائل وتجمعها في الأنسجة الرخوة تحت الفك.'
      },
      {
        questionEn: 'Where does the caudal vena cava enter the right atrium in small ruminants?',
        questionAr: 'أين يدخل الوريد الأجوف الذيلي إلى الأذين الأيمن في المجترات الصغيرة؟',
        options: [
          { en: 'Caudal aspect of sinus venarum cavarum of the right atrium', ar: 'الجهة الذيلية لجيب الأوردة الجوفاء في الأذين الأيمن' },
          { en: 'Left auricle', ar: 'صيوان الأذين الأيسر' },
          { en: 'Directly into the right ventricle through the tricuspid valve', ar: 'مباشرة في البطين الأيمن' },
          { en: 'Pulmonary infundibulum', ar: 'قمع الشريان الرئوي' }
        ],
        correctAnswer: 'Caudal aspect of sinus venarum cavarum of the right atrium',
        explanationEn: 'The caudal vena cava enters the right atrium at the sinus venarum cavarum, caudal to the intervening tubercle.',
        explanationAr: 'يصب الأجوف الذيلي في الجزء الخلفي من جيب الأوردة في الأذين الأيمن.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'cardiovascular', meshId: 'Mesh_Ovine_PulmonaryArtery',
    nameEn: 'Pulmonary Trunk & Ductus Ligament', nameAr: 'الجذع الرئوي والرباط الشرياني', latinName: 'Truncus pulmonalis et ligamentum arteriosum',
    descriptionEn: 'Arising from right ventricular cone, bifurcating into left and right branches supplying pulmonary microvasculature.',
    descriptionAr: 'ينشأ من مخروط البطين الأيمن ويتفرع لفرعين رئويين يغذيان الشبكة الشعرية الرئوية.',
    bloodSupplyEn: 'Low-oxygen venous blood transported to alveolar capillary plexuses.',
    bloodSupplyAr: 'دم وريدي منخفض الأكسجين يُنقل لشبكات الشعيرات الدموية السنخية.',
    innervationEn: 'Pulmonary autonomic plexus.',
    innervationAr: 'الضفيرة الذاتية الرئوية.',
    clinicalPearlsEn: 'High altitude triggers pulmonary arterial vasoconstriction and right ventricular hypertrophy (Brisket disease) in ruminants.',
    clinicalPearlsAr: 'نقص الأكسجين في المرتفعات يحفز تقبض الشرايين الرئوية وتضخم البطين الأيمن (مرض المرتفعات/اللبدة) في المجترات.',
    focusCoordinates: { position: [0.95, 0.58, 0.38], target: [0.06, 0.49, 0.35] },
    geometry: { shape: 'cylinder', position: [0.06, 0.49, 0.35], rotation: [0.3, 0.2, 0], scale: [0.035, 0.2, 0.035], color: '#3b82f6', roughness: 0.35, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'What vascular reaction occurs in ruminant pulmonary arterioles when exposed to chronic alveolar hypoxia at high altitudes?',
        questionAr: 'ما هو التفاعل الوعائي الذي يحدث في شرينات الرئة للمجترات عند تعرضها لنقص أكسجين مزمن بالمرتفعات؟',
        options: [
          { en: 'Severe hypoxic pulmonary vasoconstriction leading to pulmonary hypertension and right heart failure', ar: 'تقبض وعائي رئوي شديد يؤدي إلى فرط ضغط دم رئوي وقصور القلب الأيمن' },
          { en: 'Massive vasodilation with systemic hypotension', ar: 'توسع وعائي هائل مع هبوط ضغط عام' },
          { en: 'Aortic aneurysm formation', ar: 'تشكل أم دم أبهرية' },
          { en: 'Complete closure of the jugular vein', ar: 'انغلاق تام للوريد الوداجي' }
        ],
        correctAnswer: 'Severe hypoxic pulmonary vasoconstriction leading to pulmonary hypertension and right heart failure',
        explanationEn: 'Ruminants possess hyper-reactive pulmonary vascular smooth muscle; chronic hypoxia induces pulmonary hypertension and cor pulmonale.',
        explanationAr: 'تمتلك المجترات عضلات ملساء رئوية شديدة التفاعل؛ نقص الأكسجين يحفز تقبضها مسبباً فرط الضغط الرئوي والقلب الرئوي.'
      },
      {
        questionEn: 'What structure represents the fibrous remnant of the embryonic shunt between pulmonary trunk and aorta?',
        questionAr: 'ما هو التركيب الذي يمثل البقايا الليفية للتحويلة الجنينية بين الجذع الرئوي والأبهر؟',
        options: [
          { en: 'Ligamentum arteriosum', ar: 'الرباط الشرياني (Ligamentum arteriosum)' },
          { en: 'Ligamentum teres hepatis', ar: 'الرباط المستدير للكبد' },
          { en: 'Urachus', ar: 'السقاء (Urachus)' },
          { en: 'Fossa ovalis', ar: 'الحفرة البيضوية' }
        ],
        correctAnswer: 'Ligamentum arteriosum',
        explanationEn: 'The ductus arteriosus closes soon after birth and fibroses into the ligamentum arteriosum.',
        explanationAr: 'تنغلق القناة الشريانية بعد الولادة بفترة وجيزة لتتحول إلى الرباط الشرياني الليفي.'
      }
    ]
  },

  // Digestive
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'digestive', meshId: 'Mesh_Ovine_Rumen',
    nameEn: 'Ovine Rumen (Paunch)', nameAr: 'كرش المجترات الصغيرة', latinName: 'Rumen (Ovis aries / Capra hircus)',
    descriptionEn: 'Massive fermentative chamber filling the entire left abdominal cavity from diaphragm to pelvis, covered with leaf-like papillae.',
    descriptionAr: 'حجرة تخمير هائلة تشغل كامل النصف الأيسر لتجويف البطن من الحجاب الحاجز حتى الحوض، مبطنة بحليمات ورقية.',
    bloodSupplyEn: 'Right and left ruminal arteries (branches of celiac artery).',
    bloodSupplyAr: 'الشريانان الكرشيان الأيمن والأيسر (فروع الشريان الزلاقي).',
    innervationEn: 'Dorsal and ventral vagal trunks (CN X); injury causes vagal indigestion.',
    innervationAr: 'الجذعان المبهميان الظهري والبطني (العصب العاشر)؛ وإصابتهما تسبب عسر الهضم المبهمي.',
    clinicalPearlsEn: 'Left paralumbar fossa auscultation assesses ruminal contractions (normally 1-2 per minute); site for emergency trocharization in frothy bloat.',
    clinicalPearlsAr: 'تسمع الحفرة الجوعية اليسرى يقيم حركات الكرش (1-2 في الدقيقة)؛ وهي موقع البزل الإسعافي بالمبزل في النفاخ الرغوي الحاد.',
    focusCoordinates: { position: [1.2, 0.65, 0.1], target: [-0.15, 0.45, 0.05] },
    geometry: { shape: 'box', position: [-0.15, 0.45, 0.05], rotation: [0, 0, 0.1], scale: [0.35, 0.42, 0.45], color: '#78350f', roughness: 0.6, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Where is the anatomical landmark for needle trocharization or rumenotomy in acute bloat in sheep and goats?',
        questionAr: 'أين يقع المعلم التشريحي لبزل الكرش الإبرة أو شق الكرش في حالات النفاخ الحاد بالأغنام؟',
        options: [
          { en: 'Center of the left paralumbar fossa', ar: 'مركز الحفرة الجوعية (المثلثة) اليسرى' },
          { en: 'Right ventral flank adjacent to milk vein', ar: 'الخاصرة اليمنى البطنية بجوار وريد الحليب' },
          { en: 'Left 4th intercostal space', ar: 'الفراغ الوربي الرابع الأيسر' },
          { en: 'Directly on the ventral midline umbilicus', ar: 'على الخط الأبيض السري تماماً' }
        ],
        correctAnswer: 'Center of the left paralumbar fossa',
        explanationEn: 'The dorsal sac of the rumen directly contacts the abdominal wall in the left paralumbar fossa, making it the surgical access point.',
        explanationAr: 'يتصل الكيس الظهري للكرش بجدار البطن في الحفرة الجوعية اليسرى، مما يجعلها نقطة التدخل الجراحي الطارئ.'
      },
      {
        questionEn: 'What is the normal frequency of primary ruminal contractions in a healthy resting small ruminant?',
        questionAr: 'ما هو المعدل الطبيعي لانقباضات الكرش الأولية في المجتر الصغير السليم أثناء الراحة؟',
        options: [
          { en: '1 to 2 contractions every minute', ar: 'انقباضة إلى انقباضتان كل دقيقة' },
          { en: '10 to 12 contractions every minute', ar: '10 إلى 12 انقباضة كل دقيقة' },
          { en: '1 contraction every 15 minutes', ar: 'انقباضة واحدة كل 15 دقيقة' },
          { en: 'Continuous uninhibited peristalsis without cycles', ar: 'حركة دودية مستمرة غير متوقفة' }
        ],
        correctAnswer: '1 to 2 contractions every minute',
        explanationEn: 'Normal ruminal motility features 1 to 2 cycles per minute, mixing ingesta and moving gas toward the cardia for eructation.',
        explanationAr: 'تحدث دورة انقباض للكرش بمعدل 1-2 في الدقيقة لخلط الكتلة الهضمية ونقل الغازات للأعلى للتجشؤ.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'digestive', meshId: 'Mesh_Ovine_ReticuloOmasum',
    nameEn: 'Reticulum & Omasum', nameAr: 'القلنسوة (الشبكية) وأم التلافيف', latinName: 'Reticulum et omasum (Ovis aries / Capra hircus)',
    descriptionEn: 'Reticulum possesses honeycomb mucosal crests; omasum features spherical shape and muscular laminae for water reabsorption.',
    descriptionAr: 'القلنسوة ذات مخاطية شبيهة بقرص عسل النحل؛ وأم التلافيف كروية ذات ورقات عضلية لإعادة امتصاص الماء.',
    bloodSupplyEn: 'Reticular artery and left gastric artery (from celiac).',
    bloodSupplyAr: 'الشريان الشبكي والشريان المعدي الأيسر (من الزلاقي).',
    innervationEn: 'Ventral and dorsal vagal trunks.',
    innervationAr: 'الجذعان المبهميان البطني والظهري.',
    clinicalPearlsEn: 'Hardware disease (traumatic reticuloperitonitis) is less common in sheep than cattle due to selective grazing lips, but reticular groove closure is vital for oral lamb medications.',
    clinicalPearlsAr: 'مرض الوخز الرضي أقل حدوثاً في الأغنام بفضل شفتيها الحساسة؛ وتفعيل الميزاب المريئي مهم لتوصيل أدوية الحملان للأمعاء مباشرة.',
    focusCoordinates: { position: [1.1, 0.55, 0.25], target: [0.05, 0.42, 0.22] },
    geometry: { shape: 'sphere', position: [0.05, 0.42, 0.22], rotation: [0.2, 0, 0], scale: [0.22, 0.22, 0.24], color: '#a16207', roughness: 0.5, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which mucosal pattern characterizes the internal luminal surface of the ovine reticulum?',
        questionAr: 'أي مظهر مخاطي يميز السطح الداخلي للقلنسوة (الشبكية) في الأغنام؟',
        options: [
          { en: 'Polygonal honeycomb-like ridges (cresta reticuli)', ar: 'أعراف مضلعة تشبه أقراص شمع عسل النحل (Cresta reticuli)' },
          { en: 'Parallel longitudinal leaf-like folds only', ar: 'ورقات موازية تشبه صفحات الكتاب فقط' },
          { en: 'Smooth pink glandular pits', ar: 'حفر غدية ملساء وردية' },
          { en: 'Thick abrasive keratinized conical papillae', ar: 'حليمات قرنية كيراتينية خشنة' }
        ],
        correctAnswer: 'Polygonal honeycomb-like ridges (cresta reticuli)',
        explanationEn: 'The reticulum mucosal crests form a honeycomb lattice that sorts dense feed particles and collects heavy foreign objects.',
        explanationAr: 'تشكل أعراف القلنسوة شبكة سداسية كقرص العسل لفرز الجسيمات الهضمية واحتجاز الأجسام المعدنية الثقيلة.'
      },
      {
        questionEn: 'What physiological mechanism directs milk directly from the esophagus into the abomasum in nursing lambs, bypassing the rumen?',
        questionAr: 'ما هي الآلية الفسيولوجية التي توجه الحليب مباشرة من المريء للمنفحة متجاوزة الكرش في الحملان الرضيعة؟',
        options: [
          { en: 'Reticular (esophageal) groove reflex closure', ar: 'منعكس انغلاق الميزاب المريئي (الميزاب الشبكي Reticular groove)' },
          { en: 'Pyloric sphincter hypercontraction', ar: 'فرط انقباض عاصرة البواب' },
          { en: 'Ileocecal valve antiperistalsis', ar: 'التمعج العكسي للصمام اللفائفي الأعوري' },
          { en: 'Duodenal spasm', ar: 'تشنج الاثناعشر' }
        ],
        correctAnswer: 'Reticular (esophageal) groove reflex closure',
        explanationEn: 'Suckling triggers vagal reflex contraction of the muscular lips of the reticular groove, channeling milk past the rumen into the abomasum.',
        explanationAr: 'الرضاعة تنبه انطباق شفتي الميزاب الشبكي ليمر الحليب مباشرة للمنفحة منعاً لتخمره العفن في الكرش.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'digestive', meshId: 'Mesh_Ovine_Abomasum',
    nameEn: 'Ovine Abomasum (True Stomach)', nameAr: 'المنفحة (المعدة الحقيقية في الأغنام)', latinName: 'Abomasum (Ovis aries / Capra hircus)',
    descriptionEn: 'Elongated glandular stomach on the right abdominal floor secreting hydrochloric acid and pepsin; site of protein digestion.',
    descriptionAr: 'معدة غدية مستطيلة على أرضية البطن اليمنى تفرز حمض الهيدروكلوريك والببسين لهضم البروتينات والميكروبات.',
    bloodSupplyEn: 'Right and left gastroepiploic and gastric arteries.',
    bloodSupplyAr: 'الشرايين المعدية الثربية والمعدية اليمنى واليسرى.',
    innervationEn: 'Ventral vagal trunk (supplies visceral surface) and dorsal vagal trunk (parietal surface).',
    innervationAr: 'الجذع المبهمي البطني (للسطح الحشوي) والجذع المبهمي الظهري (للسطح الجداري).',
    clinicalPearlsEn: 'Haemonchus contortus ("barber pole worm") blood-feeding in the abomasum causes severe hypoproteinemia, anemia, and sudden death in sheep.',
    clinicalPearlsAr: 'دودة هيمونكس الملتوية (دودة قطب الحلاق) تتغذى على الدم في المنفحة مسببة فقر دم حاد ونقص بروتين ونفوق مفاجئ.',
    focusCoordinates: { position: [1.1, 0.45, 0.15], target: [0.1, 0.32, 0.12] },
    geometry: { shape: 'sphere', position: [0.1, 0.32, 0.12], rotation: [0.3, 0.4, 0], scale: [0.24, 0.16, 0.28], color: '#ef4444', roughness: 0.5, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Which pathogenic parasite resides in the ovine abomasum, piercing mucosal capillaries and causing severe anemia and "bottle jaw"?',
        questionAr: 'أي طفيلي ممرض يستوطن منفحة الأغنام وخارقاً لشعيراتها الدموية مسبباً فقر دم حاد و"فك القارورة"؟',
        options: [
          { en: 'Haemonchus contortus', ar: 'هيمونكس كونتورتوس (Haemonchus contortus)' },
          { en: 'Fasciola hepatica', ar: 'فاشيولا هيباتيكا (المتدفقة الكبدية)' },
          { en: 'Dictyocaulus filaria', ar: 'ديكتيوكاولوس فيلاريا' },
          { en: 'Eimeria ovinoidalis', ar: 'إيميريا أوڤينويداليس' }
        ],
        correctAnswer: 'Haemonchus contortus',
        explanationEn: 'Haemonchus contortus feeds on blood in the abomasal mucosa, producing hemorrhagic abomasitis, pallor, and hypoproteinemic edema.',
        explanationAr: 'تتغذى دودة الهيمونكس على دم بطانة المنفحة مسببة التهاباً نزفياً وفقر دم انحلالي واستسقاء تحت الفك.'
      },
      {
        questionEn: 'What type of mucosa lines the internal surface of the abomasum in contrast to the forestomachs?',
        questionAr: 'ما هو نوع الغشاء المخاطي المبطن للمنفحة مقارنة بالمعدات المتقدمة الثلاث الأخرى؟',
        options: [
          { en: 'Glandular mucosa with hydrochloric acid and pepsinogen secreting pits', ar: 'غشاء مخاطي غدي يحتوي على خلايا تفرز حمض الهيدروكلوريك والببسينوجين' },
          { en: 'Non-glandular stratified squamous keratinized epithelium', ar: 'نسيج طلائي حرشفي طبقي متقرن غير غدي' },
          { en: 'Ciliated pseudostratified columnar epithelium', ar: 'نسيج طلائي عمادي مهذب مهدب مهدب كاذب' },
          { en: 'Urothelium (transitional epithelium)', ar: 'نسيج انتقالي بولي' }
        ],
        correctAnswer: 'Glandular mucosa with hydrochloric acid and pepsinogen secreting pits',
        explanationEn: 'The abomasum is the true anatomical stomach, lined with secretory gastric mucosa containing fundic and pyloric glands.',
        explanationAr: 'المنفحة هي المعدة الكيميائية الحقيقية المبطنة بخلايا غدية مفرزة للإنزيمات الهاضمة والحمض المعدي.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'digestive', meshId: 'Mesh_Ovine_Intestinum',
    nameEn: 'Ovine Spiral Colon & Cecum', nameAr: 'القولون الحلزوني والأعور في الأغنام', latinName: 'Colon spirale et caecum (Ovis aries / Capra hircus)',
    descriptionEn: 'Features a flat planar spiral loop (ansa spiralis coli) with centripetal and centrifugal gyri that compacts fecal pellets.',
    descriptionAr: 'يتميز بعرى لولبية حلزونية مسطحة (Ansa spiralis coli) تلف مركزياً ومحيطياً لتجفيف وتشكيل بعر الأغنام.',
    bloodSupplyEn: 'Cranial mesenteric artery (colic branches) and caudal mesenteric artery.',
    bloodSupplyAr: 'الشريان المساريقي القحفي (الفروع القولونية) والشريان المساريقي الذيلي.',
    innervationEn: 'Enteric nervous system and mesenteric plexuses.',
    innervationAr: 'الجهاز العصبي المعوي والضفائر المساريقية.',
    clinicalPearlsEn: 'Clostridium perfringens type D overgrowth in the intestine produces epsilon toxin under high-concentrate diets, causing fatal "Pulpy Kidney" disease (Enterotoxemia).',
    clinicalPearlsAr: 'فرط نمو كلوستريديوم بيرفرنجنس D في الأمعاء يفرز ذيفان إبسيلون في التغذية المركزة مسبباً التسمم المعوي و"الكلية الرخوة".',
    focusCoordinates: { position: [1.1, 0.55, -0.08], target: [0, 0.38, -0.05] },
    geometry: { shape: 'cylinder', position: [0, 0.38, -0.05], rotation: [Math.PI / 4, 0, 0], scale: [0.18, 0.38, 0.18], color: '#d97706', roughness: 0.55, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which condition is caused by Clostridium perfringens type D epsilon toxin multiplying in the ovine intestines after sudden grain gorging?',
        questionAr: 'ما هي الحالة المرضية الناتجة عن تكاثر بكتيريا كلوستريديوم بيرفرنجنس نوع D وإفراز سم إبسيلون في أمعاء الأغنام إثر التخمة بالحبوب؟',
        options: [
          { en: 'Enterotoxemia ("Pulpy Kidney" disease)', ar: 'التسمم المعوي (مرض الكلية الرخوة Pulpy Kidney)' },
          { en: 'Caseous lymphadenitis', ar: 'التهاب العقد اللمفية الجبني' },
          { en: 'Contagious agalactia', ar: 'انقطاع الحليب الساري' },
          { en: 'Footrot', ar: 'تعفن الحافر' }
        ],
        correctAnswer: 'Enterotoxemia ("Pulpy Kidney" disease)',
        explanationEn: 'Sudden starch overload enables Clostridium perfringens type D to proliferate rapidly, releasing lethal epsilon protoxin activated by trypsin.',
        explanationAr: 'وفرة النشا غير المهضوم تطلق تكاثراً انفجارياً للكلوستريديوم التي تفرز ذيفان إبسيلون المنشط بالتربسين مسببة تنخر الأنسجة.'
      },
      {
        questionEn: 'What anatomical structure arranges the ascending colon of sheep and goats into flat spiral coils?',
        questionAr: 'ما هو التركيب التشريحي الذي يرتب القولون الصاعد للأغنام والماعز في شكل ملف حلزوني مسطح؟',
        options: [
          { en: 'Ansa spiralis coli (centripetal and centrifugal coils)', ar: 'العروة الحلزونية للقولون (الملفات الجاذبة والنابذة Ansa spiralis coli)' },
          { en: 'Cecal haustra and taeniae', ar: 'الجيوب والشُرط القولونية العضلية' },
          { en: 'Pyloric torus', ar: 'النتوء البوابي' },
          { en: 'Transverse colic flexure', ar: 'الانثناء القولوني المستعرض' }
        ],
        correctAnswer: 'Ansa spiralis coli (centripetal and centrifugal coils)',
        explanationEn: 'The ruminant ascending colon forms concentric coils (centripetal gyri inward and centrifugal gyri outward) on a mesentery plane.',
        explanationAr: 'يلتف القولون الصاعد للمجترات في حلقات حلزونية متحدة المركز تتجه للداخل ثم تنعكس للخارج فوق مساريق مسطح.'
      }
    ]
  },

  // Respiratory
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'respiratory', meshId: 'Mesh_Ovine_Trachea',
    nameEn: 'Ovine Trachea & Tracheal Bronchus', nameAr: 'الرغامي والقصبة الرغامية الخاصة في الأغنام', latinName: 'Trachea et bronchus trachealis (Ovis aries)',
    descriptionEn: 'Flexible airway conduit possessing a specialized accessory "bronchus trachealis" that ventilates the right cranial lung lobe directly.',
    descriptionAr: 'قناة هوائية مرنة تمتلك قصبة إضافية فريدة (القصبة الرغامية) تفرع قبل التشعب لتهوية الفص القحفي الأيمن للرئة.',
    bloodSupplyEn: 'Bronchoesophageal and cranial/caudal thyroid arteries.',
    bloodSupplyAr: 'الشرايين القصبي المريئي والدرقية القحفية والذيلية.',
    innervationEn: 'Recurrent laryngeal nerve and vagal pulmonary branches.',
    innervationAr: 'العصب الحنجري الراجع والفروع الرئوية المبهمية.',
    clinicalPearlsEn: 'The bronchus trachealis arises cranial to the carina; intubation tubes pushed too deep can selectively occlude or ventilate only this lobe.',
    clinicalPearlsAr: 'تنشأ القصبة الرغامية قبل تشعب الرغامي؛ ودفع أنبوب التنبيب بعمق زائد قد يغلقها مسبباً انخماص الفص القحفي الأيمن.',
    focusCoordinates: { position: [1.1, 0.75, 0.5], target: [0, 0.62, 0.45] },
    geometry: { shape: 'cylinder', position: [0, 0.62, 0.45], rotation: [0.35, 0, 0], scale: [0.038, 0.42, 0.038], color: '#bae6fd', roughness: 0.3, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which anatomical feature of the ovine and bovine trachea ventilates the right cranial lung lobe prior to the main tracheal bifurcation?',
        questionAr: 'ما هي الخاصية التشريحية في رغامي الأغنام والأبقار التي تهوي الفص الرئوي القحفي الأيمن قبل تشعب الرغامي الرئيسي؟',
        options: [
          { en: 'Bronchus trachealis (tracheal bronchus)', ar: 'القصبة الهوائية الرغامية (Bronchus trachealis)' },
          { en: 'Eparterial duct', ar: 'القناة فوق الشريانية' },
          { en: 'Cricotracheal membrane', ar: 'الغشاء الحلقي الرغامي' },
          { en: 'Lateral tracheal pouch', ar: 'الجيب الرغامي الجانبي' }
        ],
        correctAnswer: 'Bronchus trachealis (tracheal bronchus)',
        explanationEn: 'Ruminants and pigs have a bronchus trachealis that branches off the right side of the trachea cranial to the bifurcation.',
        explanationAr: 'تمتلك المجترات والخنازير قصبة رغامية خاصة تنبثق مباشرة من جدار الرغامي الأيمن لتهوية قمة الرئة اليمنى.'
      },
      {
        questionEn: 'What is the shape of the cartilaginous tracheal rings in small ruminants in cross section?',
        questionAr: 'ما هو شكل الحلقات الغضروفية الرغامية في المجترات الصغيرة عند أخذ مقطع عرضي؟',
        options: [
          { en: 'Dorsally overlapping or touching C-shaped rings forming an upright ridge', ar: 'حلقات غير مكتملة تلتقي نهاياتها الظهرية لتشكل عرفاً بارزاً' },
          { en: 'Completely solid rigid closed circles', ar: 'دوائر مغلقة مصمتة صلبة تماماً' },
          { en: 'Square cross-section', ar: 'مقطع عرضي مربع' },
          { en: 'Flat ribbons with no cartilage', ar: 'أشرطة مسطحة خالية من الغضاريف' }
        ],
        correctAnswer: 'Dorsally overlapping or touching C-shaped rings forming an upright ridge',
        explanationEn: 'Ovine tracheal rings are incomplete dorsally, where the ends meet or overlap to form a dorsal roof/crest.',
        explanationAr: 'حلقات رغامي الأغنام غير مكتملة ظهرياً وتتداخل حوافها الظهرية لتصنع عرفاً سقفياً مرتفعاً.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'respiratory', meshId: 'Mesh_Ovine_Pulmo_Sinister',
    nameEn: 'Ovine Left Lung (2 Lobes)', nameAr: 'الرئة اليسرى في الأغنام (فصان)', latinName: 'Pulmo sinister (Ovis aries)',
    descriptionEn: 'Composed of a cranial lobe (divided into cranial and caudal segments) and a large caudal lobe.',
    descriptionAr: 'تتكون من فص قحفي (ينقسم إلى جزء قحفي وجزء ذيلي) وفص ذيلي واسع.',
    bloodSupplyEn: 'Pulmonary artery and bronchoesophageal artery.',
    bloodSupplyAr: 'الشريان الرئوي والشريان القصبي المريئي.',
    innervationEn: 'Pulmonary plexus from CN X and sympathetic trunk.',
    innervationAr: 'الضفيرة الرئوية من العصب المبهم والجذع الودي.',
    clinicalPearlsEn: 'Ovine Progressive Pneumonia (Maedi-Visna, a lentivirus) causes diffuse interstitial lymphocytic infiltration, doubling lung weight.',
    clinicalPearlsAr: 'مرض مايدي-فيزنا (الالتهاب الرئوي المترقي) يسبب ارتشاحاً لمفاوياً خلالياً يضاعف وزن الرئة ويمنع تبادل الغازات.',
    focusCoordinates: { position: [-0.85, 0.55, 0.32], target: [-0.12, 0.48, 0.3] },
    geometry: { shape: 'sphere', position: [-0.12, 0.48, 0.3], rotation: [0.1, 0, 0.2], scale: [0.14, 0.24, 0.18], color: '#fda4af', roughness: 0.6, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which retroviral disease of sheep causes non-suppurative interstitial pneumonia with rubbery, non-collapsing, heavy lungs?',
        questionAr: 'أي مرض فيروسي قهقري يصيب الأغنام ويسبب التهاباً رئوياً خلالياً مع رئة مطاطية ثقيلة عاجزة عن الانخماص؟',
        options: [
          { en: 'Maedi-Visna (Ovine Progressive Pneumonia lentivirus)', ar: 'مايدي-فيزنا (Maedi-Visna / فيروس الالتهاب الرئوي المترقي)' },
          { en: 'Anthrax', ar: 'الجمرة الخبيثة' },
          { en: 'Blackleg', ar: 'الساق السوداء (تفحم العضلات)' },
          { en: 'Toxoplasmosis', ar: 'داء المقوسات (التوكسوبلازما)' }
        ],
        correctAnswer: 'Maedi-Visna (Ovine Progressive Pneumonia lentivirus)',
        explanationEn: 'Maedi lentivirus causes extensive lymphoproliferative thickening of alveolar septa, leaving firm, heavy, grayish lungs with rib impressions.',
        explanationAr: 'يسبب فيروس مايدي تضخماً لمفاوياً كثيفاً في الحواجز السنخية مما يجعل الرئة رمادية مطاطية تحتفظ بآثار الأضلاع.'
      },
      {
        questionEn: 'How is the left cranial lung lobe divided in small ruminants?',
        questionAr: 'كيف ينقسم الفص القحفي للرئة اليسرى في المجترات الصغيرة؟',
        options: [
          { en: 'Into cranial and caudal parts (pars cranialis and pars caudalis)', ar: 'إلى جزأين: جزء قحفي وجزء ذيلي (Pars cranialis et caudalis)' },
          { en: 'It remains completely undivided without fissures', ar: 'يبقى كتلة واحدة متصلة غير منقسمة' },
          { en: 'Divided into four distinct sub-lobules', ar: 'ينقسم إلى أربعة فصوص ثانوية' },
          { en: 'It is fused completely with the right cranial lobe', ar: 'ملتحم تماماً مع الفص القحفي الأيمن' }
        ],
        correctAnswer: 'Into cranial and caudal parts (pars cranialis and pars caudalis)',
        explanationEn: 'The left cranial lung lobe of small ruminants is clearly bifurcated by a cardiac notch into cranial and caudal segments.',
        explanationAr: 'ينفصل الفص القحفي الأيسر بثلم قلبي عميق إلى جزء قحفي وجزء ذيلي.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'respiratory', meshId: 'Mesh_Ovine_Pulmo_Dexter',
    nameEn: 'Ovine Right Lung (4 Lobes)', nameAr: 'الرئة اليمنى في الأغنام (4 فصوص)', latinName: 'Pulmo dexter (Ovis aries)',
    descriptionEn: 'Divided into cranial (ventilated by tracheal bronchus), middle, caudal, and accessory lobes.',
    descriptionAr: 'تنقسم إلى أربعة فصوص: قحفي (تهويه القصبة الرغامية المستقلة)، متوسط، ذيلي، وفص إضافي.',
    bloodSupplyEn: 'Right branches of pulmonary artery and bronchoesophageal system.',
    bloodSupplyAr: 'الفروع اليمنى للشريان الرئوي والجهاز القصبي المريئي.',
    innervationEn: 'Vagal and sympathetic pulmonary innervation.',
    innervationAr: 'التعصيب الرئوي الودي والمبهمي.',
    clinicalPearlsEn: 'Mannheimia haemolytica and Pasteurella multocida cause acute fibrinous bronchopneumonia predominantly in cranial and middle right lobes.',
    clinicalPearlsAr: 'بكتيريا مانهيميا هيموليتيكا تسبب التهاباً رئوياً فبرينياً نخرياً يبدأ في الفصوص القحفية والمتوسطة للرئة اليمنى.',
    focusCoordinates: { position: [0.85, 0.55, 0.32], target: [0.12, 0.48, 0.3] },
    geometry: { shape: 'sphere', position: [0.12, 0.48, 0.3], rotation: [-0.1, 0, -0.2], scale: [0.16, 0.26, 0.2], color: '#f43f5e', roughness: 0.6, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which pulmonary lobe is uniquely ventilated by the bronchus trachealis in small ruminants?',
        questionAr: 'أي فص رئوي تتم تهويته حصرياً بواسطة القصبة الرغامية (Bronchus trachealis) في المجترات؟',
        options: [
          { en: 'Right cranial lobe (lobus cranialis dexter)', ar: 'الفص القحفي الأيمن (Lobus cranialis dexter)' },
          { en: 'Left caudal lobe', ar: 'الفص الذيلي الأيسر' },
          { en: 'Accessory lobe', ar: 'الفص الإضافي' },
          { en: 'Middle lobe', ar: 'الفص المتوسط' }
        ],
        correctAnswer: 'Right cranial lobe (lobus cranialis dexter)',
        explanationEn: 'The bronchus trachealis supplies exclusively the right cranial lung lobe, branching independently off the trachea.',
        explanationAr: 'تتفرع القصبة الرغامية مباشرة لتغذي الفص القحفي الأيمن للرئة فقط.'
      },
      {
        questionEn: 'What classic pathological pattern is caused by Mannheimia haemolytica infection in sheep?',
        questionAr: 'ما هو النمط المرضي الكلاسيكي الناتج عن عدوى مانهيميا هيموليتيكا في الأغنام؟',
        options: [
          { en: 'Cranioventral fibrinous pleuropneumonia with marbled consolidation', ar: 'التهاب قصبات ورئة وجنب فبريني قحفي بطني مع مظهر مرخم متصلب' },
          { en: 'Diffuse pulmonary emphysema with bullae only', ar: 'انتفاخ رئوي نفاخي فقاعي نقي' },
          { en: 'Pure tracheal mucosal papillomatosis', ar: 'ورم حليمي في مخاطية الرغامي' },
          { en: 'Miliary pulmonary tuberculosis', ar: 'درن رئوي دخني' }
        ],
        correctAnswer: 'Cranioventral fibrinous pleuropneumonia with marbled consolidation',
        explanationEn: 'Leukotoxin produces severe cranioventral fibrinous and necrotizing pleuropneumonia with yellowish fibrin sheets.',
        explanationAr: 'يفرز ذيفان الكريات البيضاء التهاباً فبرينياً نخرياً في الفصوص الأمامية للرئة مع ترسب صفائح الفبرين الصفراء.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'respiratory', meshId: 'Mesh_Ovine_Diaphragma',
    nameEn: 'Ovine Diaphragm', nameAr: 'الحجاب الحاجز في المجترات الصغيرة', latinName: 'Diaphragma (Ovis aries)',
    descriptionEn: 'Broad musculotendinous partition between thoracic and peritoneal spaces, directly abutting the rumen reticulum and spleen.',
    descriptionAr: 'حاجز عضلي وتري عريض بين الصدر والبطن، يتاخم مباشرة قلنسوة الكرش والطحال.',
    bloodSupplyEn: 'Phrenic and musculophrenic vessels.',
    bloodSupplyAr: 'الأوعية الحجابية والحجابية العضلية.',
    innervationEn: 'Phrenic nerves (bilateral C5-C7 spinal origin).',
    innervationAr: 'الأعصاب الحجابية (من الجذور الشوكية C5-C7).',
    clinicalPearlsEn: 'Severe ruminal tympany (bloat) elevates intraluminal pressure, pressing the diaphragm forward into the thorax and causing asphyxiation.',
    clinicalPearlsAr: 'نفاخ الكرش الشديد يدفع الحجاب الحاجز قحفياً داخل القفص الصدري مما يضغط الرئتين ويسبب الموت بالاختناق.',
    focusCoordinates: { position: [1.1, 0.55, 0.12], target: [0, 0.46, 0.12] },
    geometry: { shape: 'sphere', position: [0, 0.46, 0.12], rotation: [Math.PI / 4, 0, 0], scale: [0.32, 0.05, 0.28], color: '#e11d48', roughness: 0.5, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'How does severe ruminal bloat lead to death in sheep and goats?',
        questionAr: 'كيف يؤدي نفاخ الكرش الشديد إلى نفوق الأغنام والماعز؟',
        options: [
          { en: 'Distended rumen pushes the diaphragm forward, severely compromising tidal volume and compressing the caudal vena cava', ar: 'الكرش المتضخم يدفع الحجاب الحاجز للأمام مما يمنع التنفس ويضغط الوريد الأجوف الذيلي' },
          { en: 'Immediate rupture of the gall bladder', ar: 'تمزق فوري للحويصل الصفراوي' },
          { en: 'Loss of dental pad', ar: 'سقوط الوسادة السنية' },
          { en: 'Hypothermia from cold gas', ar: 'انخفاض حرارة الجسم بسبب الغاز' }
        ],
        correctAnswer: 'Distended rumen pushes the diaphragm forward, severely compromising tidal volume and compressing the caudal vena cava',
        explanationEn: 'The massive bloated rumen presses against the diaphragm, preventing inspiration and reducing venous return, causing anoxia and shock.',
        explanationAr: 'يمنع الضغط الهائل للكرش على الحجاب الحاجز تمدد الرئتين ويعيق عودة الدم الوريدي مسبباً الاختناق والصدمة القلبية.'
      },
      {
        questionEn: 'Which structure penetrates through the muscular crus of the ovine diaphragm rather than the central tendon?',
        questionAr: 'ما هو التركيب الذي يخترق السويقة العضلية لحجاب حاجز الأغنام وليس مركزه الوتري؟',
        options: [
          { en: 'Esophagus (hiatus esophageus)', ar: 'المريء (الفتحة المريئية Hiatus esophageus)' },
          { en: 'Caudal vena cava (foramen venae cavae)', ar: 'الوريد الأجوف الذيلي' },
          { en: 'Portal vein', ar: 'وريد الباب' },
          { en: 'Trachea', ar: 'الرغامي' }
        ],
        correctAnswer: 'Esophagus (hiatus esophageus)',
        explanationEn: 'The esophagus and vagal trunks traverse the muscular part of the right crus of the diaphragm.',
        explanationAr: 'يمر المريء والجذعان المبهميان عبر الألياف العضلية للسويقة اليمنى للحجاب الحاجز.'
      }
    ]
  },

  // Nervous
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'nervous', meshId: 'Mesh_Ovine_Cerebrum',
    nameEn: 'Ovine Cerebrum', nameAr: 'المخ في الأغنام', latinName: 'Cerebrum (Ovis aries)',
    descriptionEn: 'Gyrencephalic cerebral hemispheres with well-developed frontal, parietal, and temporal lobes mediating herd social behaviors.',
    descriptionAr: 'نصفا كرة مخيان ذوا تلافيف متطورة وفصوص جبهية وجدارية وصدغية تنظم السلوك الاجتماعي للقطيع.',
    bloodSupplyEn: 'Rete mirabile epidurale rostrale (derived from maxillary and internal carotid arteries) and circle of Willis.',
    bloodSupplyAr: 'الشبكة العجيبة الروسترالية فوق الجافية (المشتقة من الشريان الفكي) ودائرة ويليس.',
    innervationEn: 'Cranial nerves I-XII.',
    innervationAr: 'الأعصاب القحفية من 1 إلى 12.',
    clinicalPearlsEn: 'Thiamine deficiency or excess dietary sulfur causes Polioencephalomalacia (PEM / Cerebrocortical Necrosis), showing cortical autofluorescence under UV light.',
    clinicalPearlsAr: 'نقص فيتامين B1 (الثيامين) يسبب نخر قشرة المخ (PEM)؛ وتظهر القشرة توهجاً مضيئاً مميزاً تحت الأشعة فوق البنفسجية UV.',
    focusCoordinates: { position: [0.75, 0.8, 0.7], target: [0, 0.72, 0.65] },
    geometry: { shape: 'sphere', position: [0, 0.72, 0.65], rotation: [0, 0, 0], scale: [0.15, 0.12, 0.16], color: '#fbcfe8', roughness: 0.5, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which neurological metabolic disease in sheep and goats manifests with "star-gazing", blindness, and cerebral cortical necrosis that autofluoresces under Wood\'s UV lamp?',
        questionAr: 'ما هو المرض الأيضي العصبي في الأغنام والماعز الذي يظهر بأعراض "تحديق النجوم" والعمى وتنكراً قشرياً يتوهج تحت مصباح وود فوق البنفسجي؟',
        options: [
          { en: 'Polioencephalomalacia (PEM) / Cerebrocortical Necrosis due to thiamine deficiency or high sulfur', ar: 'نخر قشرة الدماغ (PEM) الناتج عن نقص الثيامين أو زيادة الكبريت' },
          { en: 'Rabies', ar: 'داء الكلب (السعار)' },
          { en: 'Tetanus', ar: 'الكزاز' },
          { en: 'Scrapie', ar: 'مرض الحك (السكريبي)' }
        ],
        correctAnswer: 'Polioencephalomalacia (PEM) / Cerebrocortical Necrosis due to thiamine deficiency or high sulfur',
        explanationEn: 'PEM results in laminar cortical necrosis of the cerebrum; lipopigment accumulations autofluoresce under 360 nm UV light.',
        explanationAr: 'يؤدي نقص الثيامين لنخر طبقي لقشرة المخ مع تراكم أصباغ دهنية تتوهج ذاتياً تحت الأشعة فوق البنفسجية.'
      },
      {
        questionEn: 'What vascular structure at the base of the ovine skull protects the brain from overheating through counter-current heat exchange?',
        questionAr: 'ما هو التركيب الوعائي في قاعدة جمجمة الأغنام الذي يحمي الدماغ من فرط الحرارة عبر التبادل الحراري المعاكس؟',
        options: [
          { en: 'Rostral epidural rete mirabile (rete mirabile epidurale)', ar: 'الشبكة العجيبة فوق الجافية (Rete mirabile epidurale)' },
          { en: 'Jugular venous sinus', ar: 'الجيب الوريدي الوداجي' },
          { en: 'Carotid body glomus', ar: 'الجسم السباتي' },
          { en: 'Basilar lymphatic duct', ar: 'القناة اللمفية القاعدية' }
        ],
        correctAnswer: 'Rostral epidural rete mirabile (rete mirabile epidurale)',
        explanationEn: 'Cerebral arterial blood passes through the rete mirabile submerged in cooler venous blood of the cavernous sinus, cooling arterial blood.',
        explanationAr: 'يمر الدم الشرياني للدماغ عبر الشبكة العجيبة المحاطة بالدم الوريدي البارد في الجيب الكهفي لتبريد الدم قبل وصوله للدماغ.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'nervous', meshId: 'Mesh_Ovine_Cerebellum',
    nameEn: 'Ovine Cerebellum', nameAr: 'المخيخ في الأغنام', latinName: 'Cerebellum (Ovis aries)',
    descriptionEn: 'Cauliflower-shaped hindbrain coordinator of motor tone and vestibular equilibrium with deep folia and cerebellar nuclei.',
    descriptionAr: 'منسق النغمة العضلية والتوازن الدهليزي يشبه القرنبيط بتلافيف شجرية عميقة ونوى مخيخية.',
    bloodSupplyEn: 'Rostral and caudal cerebellar arteries.',
    bloodSupplyAr: 'الشرايين المخيخية المنقارية والذيلية.',
    innervationEn: 'Cerebellar peduncles.',
    innervationAr: 'السويقات المخيخية.',
    clinicalPearlsEn: 'Scrapie (transmissible spongiform encephalopathy prion) targets the obex, brainstem, and cerebellum, causing persistent pruritus, nibbling reflex, and severe ataxia.',
    clinicalPearlsAr: 'مرض السكريبي (البريون البريوني) يستهدف جذع الدماغ والمخيخ والـ Obex، مسبباً حكة مستمرة ومنعكس القضم والترنح الشديد.',
    focusCoordinates: { position: [0.75, 0.78, 0.55], target: [0, 0.72, 0.52] },
    geometry: { shape: 'sphere', position: [0, 0.72, 0.52], rotation: [0, 0, 0], scale: [0.09, 0.09, 0.09], color: '#f472b6', roughness: 0.45, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which anatomical landmark of the caudal brainstem is mandatory for regulatory sampling and histopathological diagnosis of Scrapie in sheep?',
        questionAr: 'ما هو المعلم التشريحي الإلزامي في جذع الدماغ لأخذ العينات والتشخيص النسيجي لمرض السكريبي في الأغنام؟',
        options: [
          { en: 'The Obex of the medulla oblongata at the level of the 4th ventricle', ar: 'المزلاج (The Obex) في النخاع المستطيل عند مستوى البطين الرابع' },
          { en: 'The olfactory bulb', ar: 'البصلة الشمية' },
          { en: 'The optic chiasm', ar: 'التصالب البصري' },
          { en: 'The cervical dorsal root ganglion', ar: 'عقدة الجذر الظهري العنقية' }
        ],
        correctAnswer: 'The Obex of the medulla oblongata at the level of the 4th ventricle',
        explanationEn: 'The obex region of the medulla oblongata contains the dorsal motor nucleus of the vagus, where PrPSc prion accumulates heavily.',
        explanationAr: 'تضم منطقة المزلاج (Obex) النواة الحركية الظهرية للمبهم حيث يتراكم بروتين البريون غير الطبيعي PrPSc بكثافة.'
      },
      {
        questionEn: 'What is the characteristic behavioral reflex observed in sheep affected by Scrapie when their dorsal lumbar spine is scratched?',
        questionAr: 'ما هو المنعكس السلوكي المميز المشاهد في الأغنام المصابة بالسكريبي عند حك منطقتها القطنية الظهرية؟',
        options: [
          { en: '"Nibbling" reflex with lip smacking and head tossing (pruritus response)', ar: 'منعكس القضم (Nibbling reflex) وتحريك الشفاه وحك الأسنان' },
          { en: 'Instantaneous collapse and coma', ar: 'سقوط فوري وغيبوبة' },
          { en: 'Vomiting of rumen contents', ar: 'تقيؤ محتويات الكرش' },
          { en: 'Urinary retention', ar: 'احتباس البول' }
        ],
        correctAnswer: '"Nibbling" reflex with lip smacking and head tossing (pruritus response)',
        explanationEn: 'The classic scrapie pruritus triggers a positive nibbling reflex with rapid tongue movements and lip smacking.',
        explanationAr: 'الحكة البريونية العصبية تحفز منعكس اللعق والقضم اللاإرادي وتحريك الشفتين واللسان استجابة للمس الجلد.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'nervous', meshId: 'Mesh_Ovine_MedullaSpinalis',
    nameEn: 'Ovine Spinal Cord & Enzootic Ataxia', nameAr: 'النخاع الشوكي والترنح المتوطن', latinName: 'Medulla spinalis (Ovis aries)',
    descriptionEn: 'Continuous neural cable traversing the vertebral canal, giving off 37 pairs of spinal nerves.',
    descriptionAr: 'حبل عصبي مستمر يمر عبر القناة الشوكية ويعطي 37 زوجاً من الأعصاب الشوكية.',
    bloodSupplyEn: 'Ventral spinal artery and spinal ramus of intercostal/lumbar arteries.',
    bloodSupplyAr: 'الشريان الشوكي البطني والفروع الشوكية للشرايين الوربية والقطنية.',
    innervationEn: 'Sensory and motor spinal tract systems.',
    innervationAr: 'المسارات العصبية الحسية والحركية الصاعدة والهابطة.',
    clinicalPearlsEn: 'Enzootic Ataxia ("Swayback") caused by maternal copper deficiency causes chromatolysis of motor neurons and demyelination of spinal white matter tracts in lambs.',
    clinicalPearlsAr: 'الترنح المتوطن (Swayback) الناتج عن نقص النحاس في الأمهات يسبب زوال الميالين في حبال النخاع الشوكي وترنح أطراف الحملان.',
    focusCoordinates: { position: [1.1, 0.75, 0.1], target: [0, 0.62, 0.05] },
    geometry: { shape: 'cylinder', position: [0, 0.62, 0.05], rotation: [0, 0, Math.PI / 2], scale: [0.025, 0.95, 0.025], color: '#fef08a', roughness: 0.35, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Swayback (enzootic ataxia) in newborn lambs is primarily caused by a gestational deficiency of which essential trace element?',
        questionAr: 'مرض السوايباك (الترنح المتوطن) في الحملان الوليدة ينتج أساساً عن نقص أي عنصر أثر أساسي أثناء الحمل؟',
        options: [
          { en: 'Copper (Cu)', ar: 'النحاس (Copper - Cu)' },
          { en: 'Cobalt (Co)', ar: 'الكوبالت (Cobalt - Co)' },
          { en: 'Iodine (I)', ar: 'اليود (Iodine - I)' },
          { en: 'Iron (Fe)', ar: 'الحديد (Iron - Fe)' }
        ],
        correctAnswer: 'Copper (Cu)',
        explanationEn: 'Copper is a required cofactor for cytochrome c oxidase; deficiency causes failure of myelin synthesis and swayback ataxia.',
        explanationAr: 'النحاس ضروري لإنزيم سيتوكروم سي أوكسيداز؛ ونقصه يمنع تكون غمد الميالين العصبي مما يسبب ترنح القوائم الخلفية.'
      },
      {
        questionEn: 'At what level does the spinal cord of the adult sheep end?',
        questionAr: 'عند أي مستوى فقري ينتهي النخاع الشوكي في الأغنام البالغة؟',
        options: [
          { en: 'L6-L7 vertebral junction', ar: 'التقاطع بين الفقرتين القطنيتين السادسة والسابعة (L6-L7)' },
          { en: 'T10', ar: 'الفقرة الصدرية العاشرة' },
          { en: 'At the second coccygeal vertebra', ar: 'عند الفقرة العصعصية الثانية' },
          { en: 'Within the skull', ar: 'داخل الجمجمة' }
        ],
        correctAnswer: 'L6-L7 vertebral junction',
        explanationEn: 'In adult sheep, the conus medullaris tapers at L6-L7, allowing safe lumbosacral epidural injection at L6-S1.',
        explanationAr: 'ينتهي المخروط النخاعي في الأغنام عند L6-L7 مما يجعل الفراغ بين L6 وS1 آمناً للحقن فوق الجافية.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'nervous', meshId: 'Mesh_Ovine_NervusIschiadicus',
    nameEn: 'Ovine Sciatic Nerve', nameAr: 'العصب الوركي في الأغنام', latinName: 'Nervus ischiadicus',
    descriptionEn: 'Largest nerve of the lumbosacral plexus (L6, S1, S2) descending behind the hip joint toward the popliteal fossa.',
    descriptionAr: 'أكبر عصب في الضفيرة القطنية العجزية، ينحدر خلف مفصل الورك نحو الحفرة المأبضية.',
    bloodSupplyEn: 'Arteria comitans nervi ischiadici.',
    bloodSupplyAr: 'الشريان المرافق للعصب الوركي.',
    innervationEn: 'Motor to biceps femoris, semitendinosus, and all muscles of the distal hindlimb.',
    innervationAr: 'حركي للعضلة ذات الرأسين الفخذية ونصف الوترية وجميع عضلات الساق والقدم.',
    clinicalPearlsEn: 'Dystocia with oversized lambs can cause fetal compression of maternal lumbosacral roots/obturator/sciatic nerves, leading to "downer ewe".',
    clinicalPearlsAr: 'عسر الولادة بأجنة ضخمة يضغط الجذور الشوكية والعصب السدادي والوركي مسبباً شلل النعاج بعد الولادة ("النعجة الرابضة").',
    focusCoordinates: { position: [0.85, 0.45, -0.3], target: [0.15, 0.35, -0.28] },
    geometry: { shape: 'cylinder', position: [0.15, 0.35, -0.28], rotation: [0.2, 0, 0.35], scale: [0.02, 0.35, 0.02], color: '#facc15', roughness: 0.3, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Post-parturient recumbency ("downer ewe") following extraction of a large lamb is most commonly caused by trauma to which nerves traversing the pelvic inlet?',
        questionAr: 'ربوض النعجة بعد الولادة وعجزها عن الوقوف إثر سحب حمل ضخم ينتج غالباً عن انضغاط أي أعصاب في حافة الحوض؟',
        options: [
          { en: 'Obturator nerve and L6 nerve trunk of the sciatic plexus', ar: 'العصب السدادي (Obturator nerve) والجذع L6 للضفيرة الوركية' },
          { en: 'Suprascapular nerve', ar: 'العصب فوق لوح الكتف' },
          { en: 'Radial nerve', ar: 'العصب الكعبري' },
          { en: 'Facial nerve', ar: 'العصب الوجهي' }
        ],
        correctAnswer: 'Obturator nerve and L6 nerve trunk of the sciatic plexus',
        explanationEn: 'The obturator nerve and L6 cranial root run along the medial aspect of the pelvic shaft and are compressed by the fetus against bone.',
        explanationAr: 'يمر العصب السدادي وجذور الوركي عبر العظم الحوضي الإنسي؛ وضغط الجنين عليهما أثناء الولادة يشل عضلات تقريب وبسط الفخذ.'
      },
      {
        questionEn: 'The sciatic nerve divides into which two terminal major branches in the distal thigh?',
        questionAr: 'إلى أي فرعين نهائيين رئيسيين ينقسم العصب الوركي في الجزء القاصي من الفخذ؟',
        options: [
          { en: 'Tibial nerve and common fibular (peroneal) nerve', ar: 'العصب الظنبوبي والعصب الشظوي (القصبوي) المشترك' },
          { en: 'Femoral nerve and saphenous nerve', ar: 'العصب الفخذي وعصب الصافن' },
          { en: 'Pudendal and perineal nerves', ar: 'عصب الحياء والأعصاب العجانية' },
          { en: 'Ulnar and radial nerves', ar: 'العصب الزندي والعصب الكعبري' }
        ],
        correctAnswer: 'Tibial nerve and common fibular (peroneal) nerve',
        explanationEn: 'Proximal to the stifle, the sciatic nerve cleanly divides into the tibial and common fibular nerves.',
        explanationAr: 'أعلى مفصل الركبة مباشرة، يتفرع العصب الوركي إلى العصب الظنبوبي الإنسي والشظوي المشترك الوحشي.'
      }
    ]
  },

  // Urogenital
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'urogenital', meshId: 'Mesh_Ovine_Ren',
    nameEn: 'Ovine Unipyramidal Kidney', nameAr: 'كلية المجترات الصغيرة الملساء', latinName: 'Ren (Ovis aries)',
    descriptionEn: 'Bean-shaped smooth unipyramidal kidney with a single unified renal crest (crista renalis), unlike the lobulated bovine kidney.',
    descriptionAr: 'كلية ملساء أحادية الهرم تشبه حبة الفاصولياء ذات عرف كلوي موحد، بخلاف كلية الأبقار المفصصة.',
    bloodSupplyEn: 'Renal artery and renal vein.',
    bloodSupplyAr: 'الشريان الكلوي والوريد الكلوي.',
    innervationEn: 'Renal plexus from sympathetic splanchnic fibers.',
    innervationAr: 'الضفيرة الكلوية من الألياف الودية الحشوية.',
    clinicalPearlsEn: 'Chronic Copper Toxicity in sheep triggers acute massive intravascular hemolysis and "gunmetal black" kidneys filled with hemoglobin casts.',
    clinicalPearlsAr: 'التسمم المزمن بالنحاس يسبب انحلال دم حاد وتصبح الكلى بلون المعدن الرصاصي الغامق (Gunmetal kidney) لتراكم الهيموجلوبين.',
    focusCoordinates: { position: [0.85, 0.55, 0.08], target: [-0.08, 0.48, 0.05] },
    geometry: { shape: 'sphere', position: [-0.08, 0.48, 0.05], rotation: [0.2, 0.2, 0], scale: [0.1, 0.16, 0.1], color: '#7f1d1d', roughness: 0.35, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'What macroscopic post-mortem finding in the kidneys is pathognomonic for chronic copper poisoning in sheep?',
        questionAr: 'ما هي العلامة العيانية التشريحية في الكليتين المشخصة للتسمم المزمن بالنحاس في الأغنام؟',
        options: [
          { en: 'Dark blue-black "gunmetal" colored swollen kidneys with dark port-wine urine', ar: 'كلى متضخمة بلون المعدن الرصاصي المائل للزرقة الداكنة (Gunmetal) مع بول أحمر قانٍ كالنبيذ' },
          { en: 'White chalky calcified cortex without color change', ar: 'قشرة طباشيرية متكلسة بيضاء دون تغير لوني' },
          { en: 'Multilobulated cystic degeneration', ar: 'تنكس كيسي متعدد الفصوص' },
          { en: 'Small shrunken pale kidneys', ar: 'كلى صغيرة ضامرة شاحبة' }
        ],
        correctAnswer: 'Dark blue-black "gunmetal" colored swollen kidneys with dark port-wine urine',
        explanationEn: 'Sudden liver release of stored copper triggers hemolytic crisis; excessive hemoglobin fills and stains the renal tubules dark metallic gunmetal color.',
        explanationAr: 'انطلاق النحاس المفاجئ من الكبد يفجر انحلال الدم؛ وتترسب أسطوانات الهيموجلوبين في الأنابيب الكلوية لتكسبها لون المعدن الداكن المميز.'
      },
      {
        questionEn: 'How does the surface of the ovine kidney differ anatomically from the bovine kidney?',
        questionAr: 'كيف يختلف سطح كلية الأغنام تشريحياً عن كلية الأبقار؟',
        options: [
          { en: 'Smooth bean-shaped unipyramidal surface (no external lobulation)', ar: 'سطح أملس أحادي الهرم يشبه الفاصولياء (بدون أي فصوص خارجية)' },
          { en: 'Distinctly divided into 15 to 25 superficial lobes', ar: 'مقسمة بوضوح إلى 15 إلى 25 فصاً سطحياً' },
          { en: 'Heart-shaped right kidney', ar: 'كلية يمنى قلبية الشكل' },
          { en: 'Flat ribbon morphology', ar: 'شكل شريطي مسطح' }
        ],
        correctAnswer: 'Smooth bean-shaped unipyramidal surface (no external lobulation)',
        explanationEn: 'Sheep and goats have smooth, unipyramidal kidneys with a common renal crest, whereas cattle kidneys are multipyramidal and lobulated.',
        explanationAr: 'تتميز كلى المجترات الصغيرة بسطح خارجي أملس وعرف كلوي واحد، بعكس الأبقار التي تنقسم كليتها لفصوص ظاهرة.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'urogenital', meshId: 'Mesh_Ovine_ProcessusUrethralis',
    nameEn: 'Urethral Process (Vermiform Appendage)', nameAr: 'الزوائد الإحليلية الدودية في الكباش والتيس', latinName: 'Processus urethralis (Ovis aries)',
    descriptionEn: 'Slender, flexible vermiform projection extending 2-4 cm beyond glans penis, rotating during ejaculation.',
    descriptionAr: 'امتداد دودي نحيف مرن يبرز 2-4 سم خارج حشفة القضيب، يدور لولبياً أثناء القذف لنثر السائل المنوي.',
    bloodSupplyEn: 'Terminal dorsal penile artery.',
    bloodSupplyAr: 'الشريان الظهري القضيبي النهائي.',
    innervationEn: 'Dorsal nerve of penis (from pudendal).',
    innervationAr: 'العصب الظهري للقضيب (من عصب الحياء).',
    clinicalPearlsEn: 'Primary lodging site for obstructive calculi (urolithiasis) in wethers; amputation of the urethral process is the first-line surgical decompression.',
    clinicalPearlsAr: 'الموقع الرئيسي لانحشار الحصوات البولية في الخراف المخصية؛ وبتر الزائدة الدودية هو الخطوة الجراحية الأولى لإنقاذ الحيوان.',
    focusCoordinates: { position: [0.65, 0.35, -0.25], target: [0, 0.28, -0.22] },
    geometry: { shape: 'cylinder', position: [0, 0.28, -0.22], rotation: [-Math.PI / 3, 0, 0], scale: [0.008, 0.09, 0.008], color: '#f43f5e', roughness: 0.3, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'What is the most frequent anatomical site of obstructive urolithiasis in rams and wethers fed high-concentrate feedlot rations?',
        questionAr: 'ما هو الموقع التشريحي الأكثر شيوعاً لانحشار الحصى البولية السادة في ذكور الأغنام المعلوفة مركزات غذائية؟',
        options: [
          { en: 'The urethral process (processus urethralis) and the distal sigmoid flexure', ar: 'الزوائد الإحليلية الدودية (Processus urethralis) والانحناء السيني القاصي' },
          { en: 'The renal calyx', ar: 'كؤوس الكلية' },
          { en: 'The ureterovesical junction only', ar: 'تقاطع الحالب بالمثانة فقط' },
          { en: 'The prepuce orifice', ar: 'فتحة القلفة' }
        ],
        correctAnswer: 'The urethral process (processus urethralis) and the distal sigmoid flexure',
        explanationEn: 'The extremely narrow urethral process and sigmoid flexure are classic choke points where struvite and calcium phosphate calculi lodge.',
        explanationAr: 'تضيق الزائدة الإحليلية الدودية والانثناء السيني يشكلان مصيدة شائعة لانحشار حصوات الستروفيت والفوسفات.'
      },
      {
        questionEn: 'What initial conservative surgical intervention is routinely performed at the chute to relieve acute urinary obstruction in a wether?',
        questionAr: 'ما هو الإجراء الجراحي الأولي البسيط الذي يُجرى فوراً لتخفيف انسداد البول الحاد في الخروف المخصي؟',
        options: [
          { en: 'Amputation of the urethral process (vermiform appendage)', ar: 'بتر الزائدة الإحليلية الدودية (Amputation of urethral process)' },
          { en: 'Immediate nephrectomy', ar: 'استئصال الكلية الفوري' },
          { en: 'Total penile amputation', ar: 'بتر كامل القضيب' },
          { en: 'Cystotomy with bladder marsupialization', ar: 'شق وتجييب المثانة فوراً' }
        ],
        correctAnswer: 'Amputation of the urethral process (vermiform appendage)',
        explanationEn: 'Excision of the tip of the urethral process frequently releases the trapped stone and temporarily restores urine flow.',
        explanationAr: 'قص طرف الزائدة الدودية يحرر الحصوة المنحشرة في ذروتها ويسمح بتدفق البول كإجراء إسعافي أولي.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'urogenital', meshId: 'Mesh_Ovine_VesicaUrinaria',
    nameEn: 'Ovine Urinary Bladder', nameAr: 'المثانة البولية في الأغنام', latinName: 'Vesica urinaria (Ovis aries)',
    descriptionEn: 'Muscular pear-shaped reservoir situated on the pelvic floor when empty, extending cranioventrally into abdomen when distended.',
    descriptionAr: 'خزان عضلي كمثري الشكل يستقر على أرضية الحوض عند فراغه ويمتد قحفياً بطنياً داخل البطن عند امتلائه.',
    bloodSupplyEn: 'Cranial and caudal vesical arteries.',
    bloodSupplyAr: 'الشرايين المثانية القحفية والذيلية.',
    innervationEn: 'Pelvic nerve (parasympathetic detrusor contractor) and hypogastric nerve (sympathetic sphincter retainer).',
    innervationAr: 'العصب الحوضي (نظير ودي مقبض للجدار) والعصب الخثلي (ودي مقبض للعاصرة).',
    clinicalPearlsEn: 'Rupture of the urinary bladder secondary to complete obstructive urolithiasis leads to uroperitoneum, severe abdominal distension ("water belly"), and azotemia.',
    clinicalPearlsAr: 'تمزق المثانة البولية بسبب الانسداد البولي يسبب ارتشاح البول في البريتون وانتفاخ البطن المائي ("البطن المائي Water belly").',
    focusCoordinates: { position: [0.75, 0.45, -0.15], target: [0, 0.38, -0.12] },
    geometry: { shape: 'sphere', position: [0, 0.38, -0.12], rotation: [0, 0, 0], scale: [0.12, 0.15, 0.12], color: '#f59e0b', roughness: 0.4, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'What condition develops when complete urethral blockage causes bladder rupture in a sheep or goat?',
        questionAr: 'ما هي الحالة التي تنشأ عندما يؤدي الانسداد الكامل لمجرى البول إلى انفجار المثانة في الأغنام والماعز؟',
        options: [
          { en: 'Uroperitoneum causing abdominal distension termed "water belly" and fatal uremia', ar: 'تجمع البول في التجويف الصفاقي مسبباً انتفاخ البطن المائي ("Water belly") واليوريميا القاتلة' },
          { en: 'Immediate resolution of clinical signs and permanent healing', ar: 'زوال فوري للمرض والشفاء التام' },
          { en: 'Development of acute pulmonary edema alone', ar: 'وذمة رئوية حادة منعزلة' },
          { en: 'Biliary peritonitis', ar: 'التهاب صفاق صفراوي' }
        ],
        correctAnswer: 'Uroperitoneum causing abdominal distension termed "water belly" and fatal uremia',
        explanationEn: 'Bladder rupture releases urine into the peritoneal cavity; progressive fluid accumulation creates bilateral ventral abdominal distension ("water belly").',
        explanationAr: 'تمزق المثانة يفرغ البول في البريتون فينتفخ البطن بسوائل البول وتحدث صدمة يوريمية وتسمم بولي مميت.'
      },
      {
        questionEn: 'Which autonomic nerve supplies motor innervation to the detrusor muscle for emptying the bladder?',
        questionAr: 'أي عصب ذاتي يوفر التعصيب الحركي لعضلة جدار المثانة الدافعة (Detrusor) لإفراغ البول؟',
        options: [
          { en: 'Pelvic nerve (parasympathetic fibers from S1-S3)', ar: 'العصب الحوضي (ألياف نظيرة ودية من العجزية S1-S3)' },
          { en: 'Hypogastric nerve', ar: 'العصب الخثلي' },
          { en: 'Femoral nerve', ar: 'العصب الفخذي' },
          { en: 'Obturator nerve', ar: 'العصب السدادي' }
        ],
        correctAnswer: 'Pelvic nerve (parasympathetic fibers from S1-S3)',
        explanationEn: 'Parasympathetic preganglionic fibers via pelvic nerves stimulate detrusor muscle contraction and bladder evacuation.',
        explanationAr: 'تنتقل التنبيهات اللاودية عبر العصب الحوضي لتقلص عضلة المثانة وتفريغ محتواها من البول.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'urogenital', meshId: 'Mesh_Ovine_Uterus',
    nameEn: 'Ovine Bicornuate Uterus with Caruncles', nameAr: 'رحم النعاج ذو القرنين ذو الفلقات المقعرة', latinName: 'Uterus bicornis (Ovis aries)',
    descriptionEn: 'Bicornuate uterus featuring 80-100 specialized cup-shaped concave endometrial caruncles that form synepitheliochorial placentomes.',
    descriptionAr: 'رحم ذو قرنين يحتوي على 80-100 فلقة رحمية مقعرة مميزة تشكل مشيمة فلقية ظهارية متحدة.',
    bloodSupplyEn: 'Uterine artery (from internal iliac) and ovarian artery.',
    bloodSupplyAr: 'الشريان الرحمي (من الحرقفي الداخلي) والشريان المبيضي.',
    innervationEn: 'Uterovaginal autonomic plexus and hypogastric nerves.',
    innervationAr: 'الضفيرة الرحمية المهبلية الذاتية والأعصاب الخثلية.',
    clinicalPearlsEn: 'Ovine caruncles are distinctively concave (crater-like), contrasting with the convex mushroom-like caruncles of cattle; site of Chlamydia abortus placentitis.',
    clinicalPearlsAr: 'فلقات رحم النعاج مقعرة كالكوب، بخلاف فلقات الأبقار المحدبة الفطرية؛ وهي هدف التهاب المشيمة ببكتيريا الكلاميديا المجهضة.',
    focusCoordinates: { position: [0.75, 0.48, -0.05], target: [0, 0.4, -0.05] },
    geometry: { shape: 'torus', position: [0, 0.4, -0.05], rotation: [Math.PI / 2, 0, 0], scale: [0.14, 0.1, 0.025], color: '#ec4899', roughness: 0.5, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'How does the shape of maternal endometrial caruncles in sheep differ anatomically from those of cows?',
        questionAr: 'كيف يختلف شكل الفلقات الرحمية البطانية (Caruncles) في النعاج تشريحياً عن الأبقار؟',
        options: [
          { en: 'Ovine caruncles have a concave (cratered/cupped) center, while bovine caruncles are convex (knob/mushroom shaped)', ar: 'فلقات النعاج مقعرة ذات مركز شبيه بالفوهة، بينما فلقات الأبقار محدبة فطرية الشكل' },
          { en: 'Ovine caruncles are perfectly spherical spheres', ar: 'فلقات النعاج كروية تماماً' },
          { en: 'Sheep lack caruncles and have a diffuse placenta like horses', ar: 'تفتقر الأغنام للفلقات وتمتلك مشيمة منتشرة كالخيول' },
          { en: 'Cow caruncles are flat stripes with no projection', ar: 'فلقات الأبقار أشرطة مسطحة' }
        ],
        correctAnswer: 'Ovine caruncles have a concave (cratered/cupped) center, while bovine caruncles are convex (knob/mushroom shaped)',
        explanationEn: 'The ovine maternal caruncle has a central depression/concavity into which the fetal cotyledon fits.',
        explanationAr: 'تتميز فلقة رحم النعجة بتجويف مقعر مركزي يستقر فيه فص المشيمة الجنيني (Cotyledon).'
      },
      {
        questionEn: 'What type of estrous cyclicity is exhibited by domestic ewes?',
        questionAr: 'ما هو نمط دورة الشياق في إناث الأغنام (النعاج)؟',
        options: [
          { en: 'Seasonally polyestrous (short-day breeders responding to decreasing daylight in autumn)', ar: 'متعددة الشياق موسمياً (موسم النهار القصير استجابة لتناقص ساعات النهار بالخريف)' },
          { en: 'Long-day breeders ovulating only in midsummer', ar: 'موسم النهار الطويل في الصيف فقط' },
          { en: 'Monoestrous like dogs with one cycle per year', ar: 'وحيدة الشياق كالكلاب دورة واحدة سنوياً' },
          { en: 'Induced ovulators requiring coitus', ar: 'إباضة محفزة بالتماس الجنسي' }
        ],
        correctAnswer: 'Seasonally polyestrous (short-day breeders responding to decreasing daylight in autumn)',
        explanationEn: 'Ewes cycle repetitively during late summer and autumn when melatonin levels rise in response to declining day length.',
        explanationAr: 'تنشط دورات شياق النعاج في الخريف نتيجة زيادة إفراز الميلاتونين مع قصر ساعات النهار.'
      }
    ]
  },

  // Skeletal
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'skeletal', meshId: 'Mesh_Ovine_Cranium',
    nameEn: 'Ovine Skull & Cornual Process', nameAr: 'جمجمة الأغنام والناتئ القرني', latinName: 'Cranium et processus cornalis (Ovis aries)',
    descriptionEn: 'Skull featuring bony orbits, missing upper incisors replaced by a fibrocartilaginous dental pad (pulvinus dentalis).',
    descriptionAr: 'جمجمة ذات حجاج عظمي مغلق وخالية من القواطع العلوية التي تعوضها وسادة سنية ليفية غضروفية صلبة.',
    bloodSupplyEn: 'Maxillary, cornual, and superficial temporal arteries.',
    bloodSupplyAr: 'الشرايين الفكي والقرني والصدغي السطحي.',
    innervationEn: 'Cornual branch of zygomaticotemporal nerve (trigeminal V2/V3).',
    innervationAr: 'الفرع القرني للعصب الوجني الصدغي (من العصب الخامس).',
    clinicalPearlsEn: 'Dehorning kids requires blocking both the cornual branch of the zygomaticotemporal nerve AND the cornual branch of infratrochlear nerve.',
    clinicalPearlsAr: 'إزالة قرون صغار الماعز تتطلب تخدير فرعين عصبيين معاً: الفرع القرني الوجني الصدغي وفرع تحت البكرة.',
    focusCoordinates: { position: [0.85, 0.8, 0.75], target: [0, 0.68, 0.68] },
    geometry: { shape: 'sphere', position: [0, 0.68, 0.68], rotation: [0.25, 0, 0], scale: [0.16, 0.14, 0.2], color: '#f3f4f6', roughness: 0.2, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'How does the nerve block for disbudding/dehorning in goat kids differ from calves?',
        questionAr: 'كيف يختلف التخدير الموضعي لإزالة القرون في صغار الماعز عنه في عجول الأبقار؟',
        options: [
          { en: 'Goats require blocking two nerves: the cornual branch of zygomaticotemporal nerve AND the infratrochlear nerve (calves require only one)', ar: 'الماعز يتطلب تخدير عصبين: فرع العصب الوجني الصدغي القرني بالإضافة لعصب تحت البكرة (بينما العجول تحتاج عصباً واحداً)' },
          { en: 'Goats do not have any nerve supply to their horns', ar: 'قرون الماعز خالية من أي أعصاب' },
          { en: 'Calves require four injections while goats require none', ar: 'العجول تحتاج 4 حقنات والماعز لا تحتاج شيئاً' },
          { en: 'Only general anesthesia can be used because nerves cannot be blocked', ar: 'لا يمكن تخدير أعصاب القرون موضعياً' }
        ],
        correctAnswer: 'Goats require blocking two nerves: the cornual branch of zygomaticotemporal nerve AND the infratrochlear nerve (calves require only one)',
        explanationEn: 'The goat horn receives dual innervation from the cornual nerve (caudolaterally) and infratrochlear nerve (dorsomedially).',
        explanationAr: 'تستقبل قرون الماعز تعصيباً مزدوجاً من عصبين: العصب القرني خلفياً وعصب تحت البكرة أمامياً وإنسياً.'
      },
      {
        questionEn: 'What structure replaces the upper incisor and canine teeth in the maxilla of small ruminants?',
        questionAr: 'ما هو التركيب الذي يعوض القواطع والأنياب العلوية في الفك العلوي للمجترات الصغيرة؟',
        options: [
          { en: 'Dental pad (pulvinus dentalis)', ar: 'الوسادة السنية (Pulvinus dentalis)' },
          { en: 'A row of keratinized tusks', ar: 'صف من الأنياب القرنية' },
          { en: 'A second row of molars', ar: 'صف إضافي من الأضراس' },
          { en: 'A bony beak', ar: 'منقار عظمي' }
        ],
        correctAnswer: 'Dental pad (pulvinus dentalis)',
        explanationEn: 'Ruminants lack upper incisors; a dense layer of fibrous connective tissue covered by stratified keratinized epithelium acts as an anvil.',
        explanationAr: 'تفتقر المجترات للقواطع العلوية وتعوضها وسادة ليفية سميكة متقرنة تقطع ضدها القواطع السفلية الأعشاب.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'skeletal', meshId: 'Mesh_Ovine_ColumnaVertebralis',
    nameEn: 'Ovine Vertebral Column', nameAr: 'العمود الفقري في الأغنام', latinName: 'Columna vertebralis (Ovis aries)',
    descriptionEn: 'Axial skeletal support: C7, T13, L6-7, S4, Cd16-18, with broad lumbar transverse processes.',
    descriptionAr: 'الدعامة العظمية المحورية: 7 عنقية، 13 صدرية، 6-7 قطنية، 4 عجزية، 16-18 ذيلية بنواتئ مستعرضة عريضة.',
    bloodSupplyEn: 'Intercostal, lumbar, and median sacral arteries.',
    bloodSupplyAr: 'الشرايين الوربية والقطنية والشريان العجزي المتوسط.',
    innervationEn: 'Dorsal branches of spinal nerves.',
    innervationAr: 'الفروع الظهرية للأعصاب الشوكية.',
    clinicalPearlsEn: 'The lumbosacral junction (L6-S1 space) is the primary site for epidural anesthesia in small ruminants for abdominal and obstetrical procedures.',
    clinicalPearlsAr: 'المفصل القطني العجزي (الفراغ L6-S1) هو الموقع المثالي للتخدير فوق الجافية في الأغنام للعمليات البطنية والولادية.',
    focusCoordinates: { position: [1.2, 0.75, 0], target: [0, 0.65, 0] },
    geometry: { shape: 'cylinder', position: [0, 0.65, 0], rotation: [0, 0, Math.PI / 2], scale: [0.035, 1.05, 0.035], color: '#f5f5f4', roughness: 0.25, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Where is the anatomical site for administering lumbosacral epidural anesthesia in sheep and goats?',
        questionAr: 'أين يقع الموقع التشريحي لحقن التخدير فوق الجافية القطني العجزي في الأغنام والماعز؟',
        options: [
          { en: 'The intervertebral space between the last lumbar vertebra and the first sacral vertebra (L6-S1)', ar: 'الفراغ بين الفقري بين الفقرة القطنية الأخيرة والأولى العجزية (L6-S1)' },
          { en: 'Between C1 and C2 at the atlantoaxial joint', ar: 'بين الفقرة العنقية الأولى والثانية' },
          { en: 'Between T1 and T2 thoracic vertebrae', ar: 'بين الفقرتين الصدريتين الأولى والثانية' },
          { en: 'Directly into the tail coccygeal tip', ar: 'في طرف الذيل العصعصي' }
        ],
        correctAnswer: 'The intervertebral space between the last lumbar vertebra and the first sacral vertebra (L6-S1)',
        explanationEn: 'The large lumbosacral foramen between L6 and S1 dorsal spines offers wide access to the epidural space caudal to the spinal cord.',
        explanationAr: 'يوفر الفراغ المتسع بين شوكتي L6 وS1 مدخلاً سهلاً وآمناً لحقن المخدر فوق الجافية ذيلياً لنهاية النخاع الشوكي.'
      },
      {
        questionEn: 'What is the standard thoracic vertebral count in sheep?',
        questionAr: 'ما هو عدد الفقرات الصدرية القياسي في الأغنام؟',
        options: [
          { en: '13 thoracic vertebrae', ar: '13 فقرة صدرية' },
          { en: '18 thoracic vertebrae', ar: '18 فقرة صدرية' },
          { en: '7 thoracic vertebrae', ar: '7 فقرات صدرية' },
          { en: '20 thoracic vertebrae', ar: '20 فقرة صدرية' }
        ],
        correctAnswer: '13 thoracic vertebrae',
        explanationEn: 'Small ruminants normally have 13 thoracic vertebrae, each articulating with a rib pair.',
        explanationAr: 'تمتلك الأغنام والماعز عادة 13 فقرة صدرية تتمفصل كل منها مع زوج من الأضلاع.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'skeletal', meshId: 'Mesh_Ovine_RadiusUlna',
    nameEn: 'Ovine Radius & Fused Ulna', nameAr: 'عظما الكعبرة والزند الملتحمان', latinName: 'Radius et ulna (Ovis aries)',
    descriptionEn: 'The radius is the major weight-bearing antebrachial bone; the slender ulna is fused along its shaft, preventing pronation/supination.',
    descriptionAr: 'الكعبرة هي العظم الرئيسي الحامل للوزن؛ والزند النحيف ملتحم بجسم الكعبرة مانعاً حركات الكب والاستلقاء.',
    bloodSupplyEn: 'Median artery and collateral radial branches.',
    bloodSupplyAr: 'الشريان المتوسط وفروع الشريان الكعبري الإضافية.',
    innervationEn: 'Radial and median nerves.',
    innervationAr: 'العصبان الكعبري والمتوسط.',
    clinicalPearlsEn: 'Complete fusion between radius and ulna restricts the limb to simple flexion/extension, preventing cursorial fractures.',
    clinicalPearlsAr: 'الالتحام الكامل بين الكعبرة والزند يحصر حركة القائمة في البسط والثني فقط لحماية الطرف من التواءات الرعي في المنحدرات.',
    focusCoordinates: { position: [0.75, 0.4, 0.35], target: [0.12, 0.28, 0.32] },
    geometry: { shape: 'cylinder', position: [0.12, 0.28, 0.32], rotation: [0.1, 0, 0], scale: [0.03, 0.35, 0.03], color: '#e5e7eb', roughness: 0.3, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'How does the ovine ulna compare functionally and structurally to the radius in the forelimb?',
        questionAr: 'كيف يقارن عظم الزند وظيفياً وهيكلياً مع عظم الكعبرة في الطرف الأمامي للأغنام؟',
        options: [
          { en: 'The ulna is reduced and fused along the radius, bearing minimal weight while forming the olecranon', ar: 'الزند ضامر وملتحم بجسم الكعبرة ويتحمل وزناً طفيفاً مع تشكيله للناتئ الزجي' },
          { en: 'The ulna is twice as thick as the radius and fully mobile', ar: 'الزند أسمك بمرتين من الكعبرة وكامل الحركة' },
          { en: 'The ulna is entirely missing in all ruminants', ar: 'عظم الزند مفقود كلياً في كل المجترات' },
          { en: 'The ulna articulates solely with the carpal bones', ar: 'يتمفصل الزند حصرياً مع عظام الرسغ' }
        ],
        correctAnswer: 'The ulna is reduced and fused along the radius, bearing minimal weight while forming the olecranon',
        explanationEn: 'The radius bears almost all weight; the ulna forms the olecranon process (elbow lever) and synostoses to the radius.',
        explanationAr: 'تحمل الكعبرة جل الوزن؛ بينما يشكل الزند الناتئ المرفقي (الزج) ويلتحم عظمياً بظهر الكعبرة.'
      },
      {
        questionEn: 'Which large muscle inserts onto the olecranon tuber of the ulna to extend the elbow joint?',
        questionAr: 'أي عضلة ضخمة تنغرز في حديبة عظم الزند (الناتئ الزجي) لتبسط مفصل المرفق؟',
        options: [
          { en: 'Triceps brachii muscle', ar: 'عضلة العضد ثلاثية الرؤوس (Triceps brachii)' },
          { en: 'Biceps brachii', ar: 'عضلة العضد ذات الرأسين' },
          { en: 'Brachialis', ar: 'العضلة العضدية' },
          { en: 'Coracobrachialis', ar: 'العضلة الغرابية العضدية' }
        ],
        correctAnswer: 'Triceps brachii muscle',
        explanationEn: 'The massive triceps brachii inserts onto the olecranon tuber, acting as the primary elbow extensor.',
        explanationAr: 'تنغرز رؤوس العضلة ثلاثية الرؤوس في الناتئ الزجي لتبسط مفصل المرفق وتثبت الطرف قائماً.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'skeletal', meshId: 'Mesh_Ovine_Metatarsus',
    nameEn: 'Ovine Cannon Bone (Metatarsal III & IV)', nameAr: 'عظم القصبة والمشط الملتحم في الأغنام', latinName: 'Os metatarsale III et IV (Ovis aries)',
    descriptionEn: 'Single consolidated cannon bone formed by the embryonic fusion of 3rd and 4th metatarsals with two distinct distal condyles.',
    descriptionAr: 'عظم مشط موحد ناتج عن الالتحام الجنيني لعظمي المشط الثالث والرابع وله لقمتان قاصيتان تتمفصلان مع الظلفين.',
    bloodSupplyEn: 'Dorsal metatarsal artery III.',
    bloodSupplyAr: 'الشريان المشطي الظهري الثالث.',
    innervationEn: 'Plantar nerves and deep fibular branches.',
    innervationAr: 'الأعصاب الأخمصية وفروع الشظوي العميق.',
    clinicalPearlsEn: 'Transmits weight symmetrically to the two digits; foot rot (Dichelobacter nodosus) causes interdigital dermatitis and claw under-running.',
    clinicalPearlsAr: 'ينقل الوزن بتماثل إلى الظلفين؛ وتسبب بكتيريا تعفن الحافر (Dichelobacter nodosus) التهاباً بين أصابع القدم وانفصال جدار الظلف.',
    focusCoordinates: { position: [0.75, 0.25, -0.3], target: [0.15, 0.12, -0.28] },
    geometry: { shape: 'cylinder', position: [0.15, 0.12, -0.28], rotation: [0.05, 0, 0], scale: [0.025, 0.28, 0.025], color: '#e5e7eb', roughness: 0.3, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which embryonic bones fuse to form the single functional cannon bone in the hindlimb of small ruminants?',
        questionAr: 'أي عظام جنينية تلتحم لتشكل عظم المشط (المدفع) الوظيفي في الطرف الخلفي للمجترات الصغيرة؟',
        options: [
          { en: 'Third and fourth metatarsals (Metatarsals III and IV)', ar: 'عظما مشط القدم الثالث والرابع (Metatarsal III & IV)' },
          { en: 'First and second metatarsals', ar: 'عظما المشط الأول والثاني' },
          { en: 'Fifth metatarsal only', ar: 'عظم المشط الخامس منفرداً' },
          { en: 'Tarsus and calcaneus', ar: 'الرسغ والعقب' }
        ],
        correctAnswer: 'Third and fourth metatarsals (Metatarsals III and IV)',
        explanationEn: 'In ruminants, metatarsals III and IV fuse into the large cannon bone, bearing a longitudinal groove and dual distal articular condyles.',
        explanationAr: 'في المجترات يلتحم المشطان الثالث والرابع ليصنعا عظم المدفع الحامل للظلفين الرئيسيين.'
      },
      {
        questionEn: 'Which contagious bacterial agent is the primary cause of virulent Footrot (interdigital skin breakdown and horn separation) in sheep?',
        questionAr: 'ما هي البكتيريا السارية التي تعد المسبب الرئيسي لمرض تعفن الحافر الخبيث في الأغنام؟',
        options: [
          { en: 'Dichelobacter nodosus (in synergistic association with Fusobacterium necrophorum)', ar: 'دايكيوباكتر نودوزوس (Dichelobacter nodosus بتعاون مع فوزوباكتيريوم)' },
          { en: 'Bacillus anthracis', ar: 'عصية الجمرة الخبيثة' },
          { en: 'Brucella melitensis', ar: 'بروسيلا ميليتنسيس' },
          { en: 'Mycobacterium bovis', ar: 'عصية الدرن البقري' }
        ],
        correctAnswer: 'Dichelobacter nodosus (in synergistic association with Fusobacterium necrophorum)',
        explanationEn: 'Dichelobacter nodosus produces elastase and proteases that digest claw horn laminae, causing severe lameness.',
        explanationAr: 'تفرز بكتيريا ديكيوباكتر نودوزوس إنزيمات محللة للكيراتين تفصل قرن الظلف عن أنسجته الحساسة مسببة عرجاً حاداً.'
      }
    ]
  },

  // Muscular
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'muscular', meshId: 'Mesh_Ovine_LongissimusDorsi',
    nameEn: 'Longissimus Dorsi (Loin Eye Muscle)', nameAr: 'العضلة العينية الظهرية الأطول في الأغنام', latinName: 'Musculus longissimus dorsi',
    descriptionEn: 'Massive epaxial muscle running alongside thoracic and lumbar spines; determines commercial carcass value and loin eye area.',
    descriptionAr: 'عضلة محورية ضخمة تمتد بمحاذاة الشوكات الصدرية والقطنية؛ تحدد القيمة التسويقية لذبيحة الأغنام ومساحة عين الظهر.',
    bloodSupplyEn: 'Dorsal branches of intercostal and lumbar arteries.',
    bloodSupplyAr: 'الفروع الظهرية للشرايين الوربية والقطنية.',
    innervationEn: 'Dorsal branches of thoracic and lumbar spinal nerves.',
    innervationAr: 'الفروع الظهرية للأعصاب الشوكية الصدرية والقطنية.',
    clinicalPearlsEn: 'Ultrasonic evaluation of the longissimus dorsi depth between the 12th and 13th ribs is the gold standard for live meat grading.',
    clinicalPearlsAr: 'قياس عمق ومساحة العضلة الظهرية بالأمواج فوق الصوتية بين الضلعين 12 و13 هو المعيار لتقييم جودة لحم الذبائح.',
    focusCoordinates: { position: [1.1, 0.75, 0.1], target: [0.08, 0.62, 0.08] },
    geometry: { shape: 'box', position: [0.08, 0.62, 0.08], rotation: [0, 0, 0.05], scale: [0.14, 0.08, 0.65], color: '#9f1239', roughness: 0.65, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which commercial cut of meat corresponds to the longissimus dorsi muscle in sheep carcass fabrication?',
        questionAr: 'أي قطع تجاري من اللحم يمثل العضلة الظهرية الأطول (Longissimus dorsi) في ذبائح الأغنام؟',
        options: [
          { en: 'The loin eye (rack of lamb / loin chops)', ar: 'عين لحم الظهر (الريش / كستليتة الخروف Loin chops)' },
          { en: 'The shank', ar: 'الموزات (ساق الذبيحة)' },
          { en: 'The brisket', ar: 'صدر الذبيحة (اللبدة)' },
          { en: 'The tongue', ar: 'اللسان' }
        ],
        correctAnswer: 'The loin eye (rack of lamb / loin chops)',
        explanationEn: 'The longissimus dorsi comprises the valuable eye of the rib and loin chops along the back.',
        explanationAr: 'تشكل العضلة العينية الظهرية أثمن وأطرى قطع اللحم في ظهر الخروف والمعروفة بالكستليتة والريش.'
      },
      {
        questionEn: 'What is the mechanical action of bilateral contraction of the longissimus muscle system?',
        questionAr: 'ما هو العمل الميكانيكي الحركي الناتج عن التقلص المتزامن للجهتين لعضلة الظهر الأطول؟',
        options: [
          { en: 'Extension and stabilization of the vertebral column', ar: 'بسط وتثبيت وتقويس العمود الفقري ظهرياً' },
          { en: 'Ventral flexion of the abdomen', ar: 'ثني البطن بطنياً للأسفل' },
          { en: 'Flexion of the stifle joint only', ar: 'ثني مفصل الركبة فقط' },
          { en: 'Depression of the lower jaw', ar: 'خفض الفك السفلي' }
        ],
        correctAnswer: 'Extension and stabilization of the vertebral column',
        explanationEn: 'Bilateral contraction extends and fixes the spine, while unilateral contraction bends the trunk laterally.',
        explanationAr: 'يؤدي تقلص العضلتين معاً إلى بسط وتصليد العمود الفقري، بينما تقلص جانب واحد يثني الظهر جانبياً.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'muscular', meshId: 'Mesh_Ovine_Masseter',
    nameEn: 'Ovine Masseter Muscle', nameAr: 'العضلة الماضغة في الأغنام', latinName: 'Musculus masseter (Ovis aries)',
    descriptionEn: 'Powerhouse masticatory muscle originating from facial tuberosity and zygomatic arch, inserting on the lateral mandible.',
    descriptionAr: 'عضلة المضغ الجبارة تنشأ من الحديبة الوجهية والقوس الوجني وتنغرز في السطح الوحشي للفك السفلي.',
    bloodSupplyEn: 'Transverse facial artery and facial branches of maxillary artery.',
    bloodSupplyAr: 'الشريان الوجهي المستعرض وفروع الشريان الفكي الوجهية.',
    innervationEn: 'Masseteric nerve (branch of mandibular division of trigeminal nerve, CN V3).',
    innervationAr: 'العصب الماضغي (فرع عصب الفك السفلي من التوائم الثلاثي الخامس CN V3).',
    clinicalPearlsEn: 'Drives the lateral side-to-side rhythmic grinding movement during rumination (chewing the cud).',
    clinicalPearlsAr: 'تقود حركة الطحن الإيقاعية الجانبية من جهة لأخرى أثناء عملية الاجترار وإعادة مضغ اللقمة الكرشية.',
    focusCoordinates: { position: [0.75, 0.72, 0.65], target: [0.1, 0.64, 0.62] },
    geometry: { shape: 'sphere', position: [0.1, 0.64, 0.62], rotation: [0.2, 0, 0], scale: [0.08, 0.1, 0.08], color: '#be123c', roughness: 0.6, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which nerve innervates the masseter muscle to power ruminant chewing and cud rumination?',
        questionAr: 'أي عصب يغذي العضلة الماضغة لتشغيل عملية مضغ العلف والاجترار في المجترات؟',
        options: [
          { en: 'Mandibular nerve (branch of Trigeminal, CN V3)', ar: 'عصب الفك السفلي (فرع العصب ثلاثي التوائم CN V3)' },
          { en: 'Facial nerve (CN VII)', ar: 'العصب الوجهي (CN VII)' },
          { en: 'Hypoglossal nerve (CN XII)', ar: 'العصب تحت اللسان (CN XII)' },
          { en: 'Glossopharyngeal nerve (CN IX)', ar: 'العصب البلعومي اللساني (CN IX)' }
        ],
        correctAnswer: 'Mandibular nerve (branch of Trigeminal, CN V3)',
        explanationEn: 'Motor innervation to all muscles of mastication (masseter, temporalis, pterygoids) is supplied by the mandibular nerve (CN V3).',
        explanationAr: 'يغذي عصب الفك السفلي (V3) جميع عضلات المضغ الحركية كالماضغة والصدغية والجناحية.'
      },
      {
        questionEn: 'What type of chewing motion is primarily performed by the masseter and pterygoid muscles in sheep during cud chewing?',
        questionAr: 'ما هو نمط حركة المضغ الأساسي الذي تؤديه العضلة الماضغة والجناحية في الأغنام أثناء اجترار اللقمة؟',
        options: [
          { en: 'Side-to-side (lateral translatory) shearing and grinding motion across the cheek teeth', ar: 'حركة طحن وقص جانبية متناوبة (من جانب لآخر) عبر الأضراس' },
          { en: 'Strictly up-and-down scissor-like crushing as seen in cats', ar: 'حركة عمودية مقصية بحتة كاللواحم' },
          { en: 'Suction pumping motion', ar: 'حركة مص مضخية' },
          { en: 'Rotary jaw dislocation', ar: 'خلع دوراني للفك' }
        ],
        correctAnswer: 'Side-to-side (lateral translatory) shearing and grinding motion across the cheek teeth',
        explanationEn: 'Herbivore mastication utilizes unilateral lateral excursion of the mandible against the maxilla to grind fibrous cellulose.',
        explanationAr: 'تتحرك فكوك المجترات بحركة جانبية مستعرضة لطحن ألياف السيليلوز القاسية بين أسطح الأضراس المتعرجة.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'muscular', meshId: 'Mesh_Ovine_Gluteobiceps',
    nameEn: 'Gluteobiceps Muscle', nameAr: 'العضلة الإليوية ذات الرأسين في المجترات', latinName: 'Musculus gluteobiceps (Ovis aries)',
    descriptionEn: 'Fused muscular complex uniting the superficial gluteal and biceps femoris muscles, dominating the lateral hindquarter contour.',
    descriptionAr: 'مركب عضلي متصل يوحد العضلة الإليوية السطحية مع ذات الرأسين الفخذية، ويهيمن على مظهر الفخذ الوحشي.',
    bloodSupplyEn: 'Caudal gluteal and lateral circumflex femoral arteries.',
    bloodSupplyAr: 'الشرايين الإليوية الذيلية والمنعطفة الفخذية الوحشية.',
    innervationEn: 'Caudal gluteal nerve and sciatic nerve.',
    innervationAr: 'العصب الإليوي الذيلي والعصب الوركي.',
    clinicalPearlsEn: 'Forms the broad ham musculature; prime landmark for assessing muscle condition scoring and intramuscular vaccination in market lambs.',
    clinicalPearlsAr: 'تشكل الكتلة العضلية العريضة للفخذ؛ وهي معلم لتقييم الحالة العضلية للجسم وموقع حقن اللقاحات.',
    focusCoordinates: { position: [0.95, 0.52, -0.22], target: [0.14, 0.42, -0.2] },
    geometry: { shape: 'box', position: [0.14, 0.42, -0.2], rotation: [0.1, 0, 0.1], scale: [0.12, 0.35, 0.22], color: '#881337', roughness: 0.65, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which two muscles fuse in ruminants to form the single composite "gluteobiceps" muscle?',
        questionAr: 'أي عضلتين تلتحمان في المجترات لتشكلا عضلة مركبة واحدة تدعى "العضلة الإليوية ذات الرأسين" (Gluteobiceps)؟',
        options: [
          { en: 'Superficial gluteal muscle and biceps femoris muscle', ar: 'العضلة الإليوية السطحية وعضلة الفخذ ذات الرأسين (Biceps femoris)' },
          { en: 'Middle gluteal and rectus femoris', ar: 'العضلة الإليوية المتوسطة والمستقيمة الفخذية' },
          { en: 'Semitendinosus and semimembranosus', ar: 'نصف الوترية ونصف الغشائية' },
          { en: 'Pectineus and gracilis', ar: 'العضلة المشطية والرشيقة' }
        ],
        correctAnswer: 'Superficial gluteal muscle and biceps femoris muscle',
        explanationEn: 'In ruminants, the superficial gluteal muscle completely blends with the biceps femoris into the massive gluteobiceps.',
        explanationAr: 'في المجترات تندمج العضلة الإليوية السطحية تماماً مع العضلة ذات الرأسين الفخذية لتشكلا كتلة واحدة.'
      },
      {
        questionEn: 'What is the action of the cranial part of the gluteobiceps muscle?',
        questionAr: 'ما هو العمل الحركي للجزء القحفي من العضلة الإليوية ذات الرأسين؟',
        options: [
          { en: 'Extension of the hip joint and stifle joint', ar: 'بسط مفصل الورك وبسط مفصل الركبة (الخنق)' },
          { en: 'Flexion of the shoulder joint', ar: 'ثني مفصل الكتف' },
          { en: 'Supination of the digits', ar: 'استلقاء أصابع القدم' },
          { en: 'Adduction of the tail', ar: 'تقريب الذيل' }
        ],
        correctAnswer: 'Extension of the hip joint and stifle joint',
        explanationEn: 'The cranial part extends the hip and stifle joints during weight propulsion, driving the sheep forward.',
        explanationAr: 'يقوم الجزء القحفي ببسط مفصلي الفخذ والركبة ليدفع الحيوان للأمام بقوة أثناء المشي والركض.'
      }
    ]
  },
  {
    speciesSlug: 'ovine_caprine', systemSlug: 'muscular', meshId: 'Mesh_Ovine_Gastrocnemius',
    nameEn: 'Ovine Gastrocnemius & Common Calcaneal Tendon', nameAr: 'العضلة التوأمية الساقية ووتر العرقوب في الأغنام', latinName: 'Musculus gastrocnemius et tendo calcaneus',
    descriptionEn: 'Two-headed muscular flexor of stifle and extensor of hock inserting onto tuber calcanei via the heavy common calcaneal tendon.',
    descriptionAr: 'عضلة ثنائية الرأس تثني الركبة وتبسط العرقوب وتنغرز في حديبة عظم العقب عبر وتر العرقوب القوي.',
    bloodSupplyEn: 'Popliteal artery and caudal tibial artery.',
    bloodSupplyAr: 'الشريان المأبضي والشريان الظنبوبي الذيلي.',
    innervationEn: 'Tibial nerve.',
    innervationAr: 'العصب الظنبوبي.',
    clinicalPearlsEn: 'Critical for the stay apparatus of the hindlimb, allowing standing with minimal muscular fatigue during prolonged grazing on hilly pastures.',
    clinicalPearlsAr: 'جزء أساسي من جهاز التثبيت بالقوائم الخلفية، مما يسمح بالوقوف بأقل جهد عضلي أثناء الرعي الطويل في المنحدرات.',
    focusCoordinates: { position: [0.85, 0.35, -0.32], target: [0.15, 0.22, -0.28] },
    geometry: { shape: 'cylinder', position: [0.15, 0.22, -0.28], rotation: [0.25, 0, 0], scale: [0.04, 0.26, 0.04], color: '#b91c1c', roughness: 0.55, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Onto which bony prominence does the common calcaneal tendon insert?',
        questionAr: 'على أي بروز عظمي يرتكز وتر العرقوب المشترك (Tendo calcaneus)?',
        options: [
          { en: 'Tuber calcanei (calcaneal tuber of the fibular tarsal bone)', ar: 'حديبة عظم العقب (Tuber calcanei)' },
          { en: 'Patella', ar: 'عظم الرضفة' },
          { en: 'Trochanter major of femur', ar: 'المدور الكبير لعظم الفخذ' },
          { en: 'Distal phalanx', ar: 'السلامية الثالثة القاصية' }
        ],
        correctAnswer: 'Tuber calcanei (calcaneal tuber of the fibular tarsal bone)',
        explanationEn: 'The common calcaneal tendon attaches to the summit of the calcaneus, using it as a lever arm to extend the hock.',
        explanationAr: 'يرتكز وتر العرقوب على قمة عظم العقب ليستخدمه كذراع رافعة لبسط مفصل العرقوب وحمل وزن الجسم.'
      },
      {
        questionEn: 'Which nerve provides motor innervation to both the lateral and medial heads of the gastrocnemius muscle in sheep?',
        questionAr: 'أي عصب يوفر التعصيب الحركي لرأسي العضلة التوأمية الساقية الإنسي والوحشي في الأغنام؟',
        options: [
          { en: 'Tibial nerve', ar: 'العصب الظنبوبي (Tibial nerve)' },
          { en: 'Femoral nerve', ar: 'العصب الفخذي' },
          { en: 'Common fibular (peroneal) nerve', ar: 'العصب الشظوي المشترك' },
          { en: 'Pudendal nerve', ar: 'عصب الحياء' }
        ],
        correctAnswer: 'Tibial nerve',
        explanationEn: 'The tibial nerve supplies all caudal muscles of the crus, including the gastrocnemius, superficial digital flexor, and deep digital flexor.',
        explanationAr: 'يغذي العصب الظنبوبي جميع عضلات الساق الخلفية بما فيها العضلة التوأمية والعضلات القابضة للأصابع.'
      }
    ]
  }
];

fs.writeFileSync(path.join(__dirname, 'data-ovine.js'), 'module.exports = ' + JSON.stringify(ovineOrgans, null, 2) + ';\n');
console.log('Successfully generated scripts/data-ovine.js with 28 organs and 56 quiz questions!');
