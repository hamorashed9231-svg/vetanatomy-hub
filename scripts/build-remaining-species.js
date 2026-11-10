// scripts/build-remaining-species.js
const fs = require('fs');
const path = require('path');

// 1. FELINE
const felineOrgans = [
  // Cardiovascular
  {
    speciesSlug: 'feline', systemSlug: 'cardiovascular', meshId: 'Mesh_Feline_Cor',
    nameEn: 'Feline Heart', nameAr: 'قلب القطط', latinName: 'Cor (Felis catus)',
    descriptionEn: 'Compact feline heart lying horizontally between ribs 4-7, resting directly on the sternum with a lower angle than in dogs.',
    descriptionAr: 'قلب قطي مدمج يستلقي بميل أفقي شبه ملتصق بالقص بين الأضلاع 4-7.',
    bloodSupplyEn: 'Left and right coronary arteries; myocardial perfusion critical in hypertrophic cardiomyopathy.',
    bloodSupplyAr: 'الشرايين التاجية اليمنى واليسرى؛ التروية العضلية حرجة في اعتلال عضلة القلب الضخامي.',
    innervationEn: 'Sympathetic postganglionic branches from cervicothoracic ganglion and vagal parasympathetic depressor fibers.',
    innervationAr: 'فروع ودية بعد عقدية من العقدة العنقية الصدرية وألياف مبهمية نظيرة الودية.',
    clinicalPearlsEn: 'Hypertrophic Cardiomyopathy (HCM) is the most common cardiac disease in cats; predisposes to aortic thromboembolism (saddle thrombus).',
    clinicalPearlsAr: 'اعتلال عضلة القلب الضخامي (HCM) هو الأكثر شيوعاً في القطط ويؤدي للخثار الساد في تفرع الأبهر.',
    focusCoordinates: { position: [0.9, 0.4, 0.25], target: [0, 0.3, 0.25] },
    geometry: { shape: 'cone', position: [0.05, 0.3, 0.25], rotation: [Math.PI, 0, 0.35], scale: [0.18, 0.24, 0.18], color: '#dc2626', roughness: 0.3, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Which cardiac disease is most frequently diagnosed in domestic felines and can lead to aortic thromboembolism?',
        questionAr: 'ما هو مرض القلب الأكثر تشخيصاً في القطط الأليفة والذي قد يسبب خثاراً ساداً في الأبهر؟',
        options: [
          { en: 'Hypertrophic Cardiomyopathy (HCM)', ar: 'اعتلال عضلة القلب الضخامي (HCM)' },
          { en: 'Dilated Cardiomyopathy (DCM)', ar: 'اعتلال عضلة القلب التوسعي (DCM)' },
          { en: 'Patent Ductus Arteriosus (PDA)', ar: 'القناة الشريانية السالكة (PDA)' },
          { en: 'Pulmonic Stenosis', ar: 'تضيق الصمام الرئوي' }
        ],
        correctAnswer: 'Hypertrophic Cardiomyopathy (HCM)',
        explanationEn: 'HCM causes left ventricular concentric hypertrophy and left atrial dilation, promoting thrombus formation that lodges at the aortic trifurcation.',
        explanationAr: 'يسبب HCM تضخماً متراكزاً في البطين الأيسر وتوسع الأذين الأيسر مما يشكل خثرات تستقر عند تفرع الشريان الأبهر.'
      },
      {
        questionEn: 'How does the feline cardiac axis differ anatomically from the canine heart on a lateral thoracic radiograph?',
        questionAr: 'كيف يختلف المحور القلبي للقطط تشريحياً عن الكلاب في الصورة الشعاعية الجانبية للصدر؟',
        options: [
          { en: 'More horizontal axis with greater sternal contact (spanning ribs 4-7)', ar: 'محور أكثر أفقية مع تلامس قصي أوسع (يمتد بين الأضلاع 4-7)' },
          { en: 'Strictly vertical axis spanning ribs 1-3', ar: 'محور عمودي تماماً يمتد بين الأضلاع 1-3' },
          { en: 'Shifted completely into the dorsal caudal thorax', ar: 'منزاح كلياً نحو الجزء الظهري الذيلي من الصدر' },
          { en: 'Suspended without touching the sternum', ar: 'معلق دون ملامسة عظم القص' }
        ],
        correctAnswer: 'More horizontal axis with greater sternal contact (spanning ribs 4-7)',
        explanationEn: 'Feline hearts are more angulated horizontally, typically contacting two or more sternebrae.',
        explanationAr: 'يتميز قلب القطط بميلان أكثر أفقية وملامسة أكبر لقطع عظم القص.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'cardiovascular', meshId: 'Mesh_Feline_Aorta',
    nameEn: 'Aorta & Saddle Bifurcation', nameAr: 'الأبهر والتفرع الحرقفي الذيلي', latinName: 'Aorta descendens et trifurcatio',
    descriptionEn: 'The descending aorta tapering through the feline retroperitoneal space into the terminal external and internal iliacs.',
    descriptionAr: 'الأبهر النازل يمتد عبر الحيز خلف الصفاق ويتفرع إلى الشرايين الحرقفية الخارجية والداخلية.',
    bloodSupplyEn: 'Direct systemic arterial conduit from left ventricle delivering high pressure oxygenated blood.',
    bloodSupplyAr: 'القناة الشريانية الجهازية المباشرة من البطين الأيسر التي تنقل الدم عالي الضغط المؤكسج.',
    innervationEn: 'Aortic baroreceptor nerve (cranial nerve X) and sympathetic lumbar splanchnic fibers.',
    innervationAr: 'عصب المستقبلات الضغطية الأبهرية (العصب القحفي العاشر) وألياف قطنية حشوية ودية.',
    clinicalPearlsEn: 'Site of saddle thrombus lodging, causing acute hindlimb paralysis, absent femoral pulses, and cold footpads.',
    clinicalPearlsAr: 'موقع استقرار الخثرة السرجية، مما يسبب شللاً مفاجئاً في القوائم الخلفية، غياب النبض الفخذي، وبرودة الكفوف.',
    focusCoordinates: { position: [0.9, 0.55, 0], target: [0, 0.42, 0] },
    geometry: { shape: 'cylinder', position: [0, 0.42, 0], rotation: [0, 0, Math.PI / 2], scale: [0.03, 0.55, 0.03], color: '#ef4444', roughness: 0.25, metalness: 0.15 },
    quizQuestions: [
      {
        questionEn: 'Which classic clinical sign triad indicates a saddle thrombus lodged at the feline aortic trifurcation?',
        questionAr: 'ما هو الثالوث السريري الكلاسيكي الذي يشير إلى انحشار خثرة سرجية عند تفرع الأبهر القطي؟',
        options: [
          { en: 'Paresis/paralysis, pulseless femoral arteries, and cold cyanotic pads (painful)', ar: 'شلل/ضعف، غياب نبض الشريان الفخذي، وبرودة وازرار الوسائد (مع ألم شديد)' },
          { en: 'Cough, polyuria, and fever', ar: 'سعال، بوال، وحمى' },
          { en: 'Hyperthermia, hyperactivity, and polydipsia', ar: 'ارتفاع الحرارة، فرط نشاط، وعطاش' },
          { en: 'Head tilt, nystagmus, and jaundice', ar: 'ميلان الرأس، رأرأة، ويرقان' }
        ],
        correctAnswer: 'Paresis/paralysis, pulseless femoral arteries, and cold cyanotic pads (painful)',
        explanationEn: 'The 5 Ps of aortic thromboembolism: Pain, Paresis, Pulselessness, Pallor/cyanosis, and Poikilothermia (cold limb).',
        explanationAr: 'علامات الخثار الساد الخمس: الألم، الشلل، غياب النبض، الشحوب، وبرودة الطرف.'
      },
      {
        questionEn: 'At what anatomical landmark does the descending aorta divide into external iliac arteries in the cat?',
        questionAr: 'عند أي معلم تشريحي يتفرع الأبهر النازل إلى الشرايين الحرقفية الخارجية في القط؟',
        options: [
          { en: 'Ventral to the L6-L7 vertebrae', ar: 'بطنياً بالنسبة للفقرات القطنية 6-7' },
          { en: 'At the level of the diaphragm (T13)', ar: 'عند مستوى الحجاب الحاجز (T13)' },
          { en: 'Cranial to the kidneys (L1)', ar: 'قحفياً بالنسبة للكليتين (L1)' },
          { en: 'Within the thoracic inlet', ar: 'داخل المدخل الصدري' }
        ],
        correctAnswer: 'Ventral to the L6-L7 vertebrae',
        explanationEn: 'The feline aortic trifurcation occurs ventrally to the caudal lumbar spine (L6-L7).',
        explanationAr: 'يحدث تفرع الأبهر القطي بطنياً للفقرات القطنية الذيلية (L6-L7).'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'cardiovascular', meshId: 'Mesh_Feline_VenaCava',
    nameEn: 'Caudal Vena Cava', nameAr: 'الوريد الأجوف الذيلي', latinName: 'Vena cava caudalis',
    descriptionEn: 'Large venous return channel receiving renal, hepatic, and pelvic venous blood flowing to the right atrium.',
    descriptionAr: 'قناة وريدية رئيسية لعودة الدم تستقبل أوردة الكلى والكبد والحوض متجهة إلى الأذين الأيمن.',
    bloodSupplyEn: 'Major systemic venous conduit returning deoxygenated blood to the right heart.',
    bloodSupplyAr: 'القناة الوريدية الجهازية الكبرى لنقل الدم غير المؤكسج إلى الجانب الأيمن للقلب.',
    innervationEn: 'Vascular sympathetic perivascular plexus mediating venoconstriction.',
    innervationAr: 'ضفيرة وعائية ودية حول الأوعية تنظم تقلص الأوردة والتوتر الوريدي.',
    clinicalPearlsEn: 'Visualized on ultrasound (caudal vena cava collapsibility index) to monitor feline circulating intravascular volume and fluid responsiveness.',
    clinicalPearlsAr: 'يُفحص بالموجات فوق الصوتية لتقييم مؤشر انخماص الأجوف لمراقبة الحجم داخل الوعائي لدى القطط.',
    focusCoordinates: { position: [0.9, 0.45, 0.05], target: [0, 0.38, 0.05] },
    geometry: { shape: 'cylinder', position: [0.03, 0.38, 0.05], rotation: [0, 0, Math.PI / 2], scale: [0.035, 0.52, 0.035], color: '#2563eb', roughness: 0.4, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Which diaphragmatic hiatus does the caudal vena cava pass through in felines?',
        questionAr: 'عبر أي فتحة حجابية يمر الوريد الأجوف الذيلي في القطط؟',
        options: [
          { en: 'Foramen venae cavae (caval foramen in the central tendon)', ar: 'ثقبة الوريد الأجوف (في المركز الوتري للحجاب الحاجز)' },
          { en: 'Hiatus aorticus', ar: 'الفتحة الأبهرية' },
          { en: 'Hiatus esophageus', ar: 'فتحة المريء' },
          { en: 'Lumbocostal arch', ar: 'القوس القطني الضلعي' }
        ],
        correctAnswer: 'Foramen venae cavae (caval foramen in the central tendon)',
        explanationEn: 'The caudal vena cava traverses the central tendon of the diaphragm through the foramen venae cavae.',
        explanationAr: 'يمر الوريد الأجوف الذيلي عبر المركز الوتري للحجاب الحاجز من خلال ثقبة الوريد الأجوف.'
      },
      {
        questionEn: 'Elevated central venous pressure causing caudal vena cava distension in cats is commonly secondary to which pathology?',
        questionAr: 'ارتفاع الضغط الوريدي المركزي المسبب لتمدد الأجوف الذيلي في القطط ينجم غالباً عن أي مرض؟',
        options: [
          { en: 'Right-sided congestive heart failure or pericardial effusion', ar: 'قصور القلب الاحتقاني الأيمن أو الانصباب التأموري' },
          { en: 'Hypovolemic dehydration', ar: 'التجفاف ونقص حجم الدم' },
          { en: 'Feline leukemia virus', ar: 'فيروس ابيضاض الدم السنوري' },
          { en: 'Hypoglycemia', ar: 'هبوط سكر الدم' }
        ],
        correctAnswer: 'Right-sided congestive heart failure or pericardial effusion',
        explanationEn: 'Impaired right ventricular diastolic filling leads to upstream venous congestion and caval dilation.',
        explanationAr: 'إعاقة الامتلاء الانبساطي للبطين الأيمن يؤدي إلى احتقان وريدي رجعي وتوسع الأجوفين.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'cardiovascular', meshId: 'Mesh_Feline_PulmonaryTrunk',
    nameEn: 'Pulmonary Trunk & Arteries', nameAr: 'الجذع الرئوي والشرايين الرئوية', latinName: 'Truncus pulmonalis',
    descriptionEn: 'Originates from right ventricular conus arteriosus, bifurcating into left and right pulmonary arteries beneath aortic arch.',
    descriptionAr: 'ينشأ من المخروط الشرياني للبطين الأيمن ويتفرع إلى شريانين رئويين تحت قوس الأبهر.',
    bloodSupplyEn: 'Conveys deoxygenated venous blood under low resistance into the pulmonary capillary bed.',
    bloodSupplyAr: 'ينقل الدم غير المؤكسج تحت مقاومة منخفضة إلى الشبكة الشعرية الرئوية.',
    innervationEn: 'Pulmonary autonomic plexus from cardiac nerves and sympathetic chain.',
    innervationAr: 'الضفيرة الذاتية الرئوية المتفرعة من الأعصاب القلبية والسلسلة الودية.',
    clinicalPearlsEn: 'Feline heartworm disease (Dirofilaria immitis) can cause HARD (Heartworm Associated Respiratory Disease) even with single-worm infestation.',
    clinicalPearlsAr: 'داء الديدان القلبية في القطط يسبب متلازمة الجهاز التنفسي المرتبطة بالديدان القلبية HARD حتى بيرقة واحدة.',
    focusCoordinates: { position: [0.8, 0.48, 0.35], target: [0, 0.42, 0.32] },
    geometry: { shape: 'cylinder', position: [0.06, 0.42, 0.32], rotation: [0.3, 0.2, 0], scale: [0.03, 0.16, 0.03], color: '#3b82f6', roughness: 0.35, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'What is HARD in feline cardiology and pulmonology?',
        questionAr: 'ما هي متلازمة HARD في طب قلب وتنفس القطط؟',
        options: [
          { en: 'Heartworm Associated Respiratory Disease caused by immature Dirofilaria immitis larvae', ar: 'مرض تنفسي ناجم عن يرقات ديدان القلب غير البالغة في الشرايين الرئوية' },
          { en: 'High Altitude Respiratory Distress', ar: 'ضائقة تنفسية في الارتفاعات الشاهقة' },
          { en: 'Hepatic Arterial Renal Dysplasia', ar: 'خلل تنسج شرياني كبدي كلوي' },
          { en: 'Hypertrophic Aortic Rupture Defect', ar: 'تمزق الأبهر الضخامي' }
        ],
        correctAnswer: 'Heartworm Associated Respiratory Disease caused by immature Dirofilaria immitis larvae',
        explanationEn: 'Cats develop severe inflammatory pulmonary endothelial responses to immature heartworms, termed HARD.',
        explanationAr: 'تطور القطط استجابة التهابية بطانية حادة في الشرايين الرئوية تجاه اليرقات غير البالغة وتسمى HARD.'
      },
      {
        questionEn: 'From which chamber of the feline heart does the pulmonary trunk arise?',
        questionAr: 'من أي حجرة قلبية في القط ينشأ الجذع الرئوي؟',
        options: [
          { en: 'Right ventricle (via the conus arteriosus)', ar: 'البطين الأيمن (عبر المخروط الشرياني)' },
          { en: 'Left ventricle', ar: 'البطين الأيسر' },
          { en: 'Right atrium', ar: 'الأذين الأيمن' },
          { en: 'Left atrium', ar: 'الأذين الأيسر' }
        ],
        correctAnswer: 'Right ventricle (via the conus arteriosus)',
        explanationEn: 'The pulmonary trunk arises cranioventrally from the right ventricular conus arteriosus.',
        explanationAr: 'ينبثق الجذع الرئوي قحفياً بطنياً من المخروط الشرياني للبطين الأيمن.'
      }
    ]
  },

  // Digestive
  {
    speciesSlug: 'feline', systemSlug: 'digestive', meshId: 'Mesh_Feline_Gaster',
    nameEn: 'Feline Simple Stomach', nameAr: 'المعدة البسيطة في القطط', latinName: 'Gaster (Felis catus)',
    descriptionEn: 'J-shaped simple glandular stomach located in left cranial abdomen, tailored for obligate carnivore protein and fat digestion.',
    descriptionAr: 'معدة غدية بسيطة تأخذ شكل الحرف J تقع في الجزء القحفي الأيسر، مخصصة لحيوان لاحم إجباري.',
    bloodSupplyEn: 'Celiac artery via left gastric, right gastric, and gastroepiploic arteries.',
    bloodSupplyAr: 'الشريان الزلاقي عبر الشريان المعدي الأيسر والمعدي الأيمن والمعدي الثربي.',
    innervationEn: 'Vagus nerve (dorsal and ventral vagal trunks) and sympathetic celiac plexus.',
    innervationAr: 'العصب المبهم (الجذعان المبهميان الظهري والبطني) والضفيرة الزلاقية الودية.',
    clinicalPearlsEn: 'Cats lack salivary amylase and have constant active hepatic gluconeogenesis and low gastric pH for rapid meat digestion.',
    clinicalPearlsAr: 'تفتقر القطط إلى أميلاز اللعاب وتعتمد على تصنيع الجلوكوز المستمر وحموضة معدية عالية لهضم اللحوم.',
    focusCoordinates: { position: [0.8, 0.45, 0.15], target: [-0.08, 0.35, 0.12] },
    geometry: { shape: 'sphere', position: [-0.08, 0.35, 0.12], rotation: [0.2, 0.4, 0], scale: [0.18, 0.14, 0.22], color: '#f87171', roughness: 0.5, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Which enzyme is notably absent in feline saliva, reflecting their strict carnivorous evolution?',
        questionAr: 'ما هو الإنزيم الغائب عن لعاب القطط مما يعكس تطورها كحيوان لاحم حصري؟',
        options: [
          { en: 'Salivary amylase (ptyalin)', ar: 'أميلاز اللعاب (البتيالين)' },
          { en: 'Pepsin', ar: 'الببسين' },
          { en: 'Gastric lipase', ar: 'الليباز المعدي' },
          { en: 'Trypsin', ar: 'التربسين' }
        ],
        correctAnswer: 'Salivary amylase (ptyalin)',
        explanationEn: 'Cats lack salivary alpha-amylase and have very low carbohydrate digestive capacity compared to omnivores.',
        explanationAr: 'تفتقر القطط إلى ألفا أميلاز اللعابي وقدرتها محدودة للغاية على معالجة الكربوهيدرات مقارنة بالقارتات.'
      },
      {
        questionEn: 'What is the anatomical orientation of the feline stomach axis on a ventrodorsal radiograph?',
        questionAr: 'ما هو اتجاه محور المعدة في الصورة الشعاعية البطنية الظهرية للقط؟',
        options: [
          { en: 'Strictly transverse across the cranial abdomen perpendicular to the spine', ar: 'عرضاني تماماً عبر الجزء القحفي من البطن ومتعامد مع العمود الفقري' },
          { en: 'Vertical along the entire right flank', ar: 'شاقولي على طول الخاصرة اليمنى' },
          { en: 'Pelvic disposition', ar: 'موقع حوضي' },
          { en: 'Retroperitoneal dorsal orientation', ar: 'موقع خلف الصفاق ظهرياً' }
        ],
        correctAnswer: 'Strictly transverse across the cranial abdomen perpendicular to the spine',
        explanationEn: 'In felines, the stomach sits cleanly perpendicular to the long axis across the left cranial abdomen.',
        explanationAr: 'تستقر معدة القطط بشكل عرضي مستعرض في البطن القحفي الأيسر متعامدة مع المحور الطولي.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'digestive', meshId: 'Mesh_Feline_Hepar',
    nameEn: 'Feline Lobated Liver', nameAr: 'الكبد الفصصي القطي', latinName: 'Hepar (Felis catus)',
    descriptionEn: 'Deeply fissured into six primary lobes (left lateral/medial, quadrate, right medial/lateral, caudate) hugging the diaphragm.',
    descriptionAr: 'مقسم بشقوق عميقة إلى ستة فصوص أساسية ملاصقة لتقعر الحجاب الحاجز.',
    bloodSupplyEn: 'Dual supply: Portal vein (75% flow, nutrient rich) and hepatic artery proper (25% flow, oxygenated).',
    bloodSupplyAr: 'تروية مزدوجة: وريد الباب (75% من التدفق، غني بالمغذيات) والشريان الكبدي الخاص (25% أكسجين).',
    innervationEn: 'Hepatic plexus from celiac ganglion and vagal fibers.',
    innervationAr: 'الضفيرة الكبدية من العقدة الزلاقية والألياف المبهمية.',
    clinicalPearlsEn: 'Feline Hepatic Lipidosis develops rapidly during anorexia due to high protein demands and mobilization of peripheral lipids to the liver.',
    clinicalPearlsAr: 'داء الكبد الدهني (Hepatic Lipidosis) يتطور سريعاً عند انقطاع الشهية بسبب تعبئة الدهون المحيطية للكبد.',
    focusCoordinates: { position: [0.9, 0.48, 0.2], target: [0, 0.38, 0.18] },
    geometry: { shape: 'sphere', position: [0, 0.38, 0.18], rotation: [0, 0, 0], scale: [0.24, 0.16, 0.18], color: '#991b1b', roughness: 0.45, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Why are cats uniquely susceptible to Hepatic Lipidosis during prolonged anorexia?',
        questionAr: 'لماذا تعد القطط معرضة بشكل فريد لداء الكبد الدهني أثناء فقدان الشهية المطول؟',
        options: [
          { en: 'Obligate carnivore metabolism rapidly mobilizes peripheral adipose fatty acids exceeding hepatic beta-oxidation capacity', ar: 'الأيض اللاحم الحصري يعبئ الأحماض الدهنية المحيطية بسرعة تفوق قدرة الكبد على الأكسدة' },
          { en: 'Cats cannot synthesize any bile salts', ar: 'عجز تام عن تصنيع الأملاح الصفراوية' },
          { en: 'They lack a gallbladder entirely', ar: 'انعدام وجود المرارة' },
          { en: 'Portal vein hypertension is present in all cats', ar: 'فرط ضغط وريد الباب موجود خلقياً في كل القطط' }
        ],
        correctAnswer: 'Obligate carnivore metabolism rapidly mobilizes peripheral adipose fatty acids exceeding hepatic beta-oxidation capacity',
        explanationEn: 'Anorectic cats mobilize vast amounts of peripheral triglycerides into hepatocytes, overwhelming apolipoprotein B packaging.',
        explanationAr: 'تحرك القطط الصائمة كميات هائلة من الدهون المحيطية فتتراكم في خلايا الكبد متجاوزة تصنيع البروتينات الشحمية الناقلة.'
      },
      {
        questionEn: 'Which nutrient is essential in feline diets because cats have very low activity of cysteine dioxygenase?',
        questionAr: 'ما هو العنصر الغذائي الضروري في غذاء القطط لأن نشاط إنزيم سيستيين ديوكسيجيناز منخفض جداً لديها؟',
        options: [
          { en: 'Taurine (essential beta-amino acid for bile acid conjugation)', ar: 'التورين (حمض أميني بيتا أساسي لاقتران أحماض الصفراء)' },
          { en: 'Cellulose', ar: 'السيليلوز' },
          { en: 'Starch', ar: 'النشا' },
          { en: 'Ascorbic acid', ar: 'حمض الأسكوربيك (فيتامين سي)' }
        ],
        correctAnswer: 'Taurine (essential beta-amino acid for bile acid conjugation)',
        explanationEn: 'Cats conjugate bile acids exclusively with taurine, requiring high dietary levels to prevent cardiomyopathy and retinal degeneration.',
        explanationAr: 'تقرن القطط أملاح الصفراء حصرياً مع التورين وتفتقر لتصنيعه الكافي مما يجعله عنصراً غذائياً أساسياً لا غنى عنه.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'digestive', meshId: 'Mesh_Feline_Pancreas',
    nameEn: 'Pancreas & Major Duodenal Papilla', nameAr: 'البنكرياس والحليمة الاثناعشرية', latinName: 'Pancreas (Felis catus)',
    descriptionEn: 'V-shaped gland with right lobe alongside duodenum and left lobe behind stomach; pancreatic duct joins bile duct in ~80% of cats.',
    descriptionAr: 'غدة على شكل V يمتد فصها الأيمن مع الاثناعشر وفصها الأيسر خلف المعدة، وتلتحم قناتها مع القناة الصفراوية في 80% من القطط.',
    bloodSupplyEn: 'Pancreaticoduodenal arteries (cranial from celiac, caudal from cranial mesenteric).',
    bloodSupplyAr: 'الشرايين البنكرياسية الاثناعشرية (القحفية من الزلاقي والذيلية من المساريقي القحفي).',
    innervationEn: 'Autonomic nervous plexus from celiac and cranial mesenteric plexuses.',
    innervationAr: 'الضفيرة العصبية الذاتية المتفرعة من الضفيرتين الزلاقية والمساريقية القحفية.',
    clinicalPearlsEn: 'The common entry of pancreatic and common bile ducts into the duodenum predisposes felines to "Triaditis" (cholangitis, pancreatitis, IBD).',
    clinicalPearlsAr: 'الاتحاد المشترك لقناة البنكرياس وقناة الصفراء يمهد لمرض الثالوث الالتهابي القطي (Triaditis).',
    focusCoordinates: { position: [0.75, 0.45, 0.08], target: [0.05, 0.36, 0.06] },
    geometry: { shape: 'box', position: [0.05, 0.36, 0.06], rotation: [0, 0.3, 0], scale: [0.18, 0.04, 0.12], color: '#fbbf24', roughness: 0.6, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'What anatomical condition in cats predisposes them to concurrent Pancreatitis, Cholangiohepatitis, and Inflammatory Bowel Disease (Triaditis)?',
        questionAr: 'ما هي الخاصية التشريحية في القطط التي تجعلها عرضة للإصابة المتزامنة بالتهاب البنكرياس والقنوات الصفراوية والأمعاء (الثالوث الالتهابي)؟',
        options: [
          { en: 'The pancreatic duct and common bile duct merge before opening into the major duodenal papilla', ar: 'اتحاد القناة البنكرياسية مع القناة الصفراوية المشتركة قبل فتحها بالحليمة الاثناعشرية' },
          { en: 'Absence of the pancreatic duct', ar: 'غياب القناة البنكرياسية' },
          { en: 'Duodenal hypoplasia', ar: 'نقص تنسج الاثناعشر' },
          { en: 'Complete separation of digestive vascular networks', ar: 'انفصال تام بين شبكات الأوعية الهضمية' }
        ],
        correctAnswer: 'The pancreatic duct and common bile duct merge before opening into the major duodenal papilla',
        explanationEn: 'In ~80% of cats, the major pancreatic duct joins the common bile duct, allowing ascending bacterial migration into both systems.',
        explanationAr: 'في قرابة 80% من القطط تلتحم القناة البنكرياسية بالقناة الصفراوية المشتركة مما يسمح بانتقال البكتيريا لكلا العضوين معاً.'
      },
      {
        questionEn: 'Which laboratory diagnostic test is most sensitive and specific for detecting feline pancreatitis?',
        questionAr: 'ما هو الفحص المخبري الأكثر حساسية ونوعية لتشخيص التهاب البنكرياس في القطط؟',
        options: [
          { en: 'Feline Pancreatic Lipase Immunoreactivity (fPLI / Spec fPL)', ar: 'اختبار المناعة النوعية لليباز البنكرياس القطي (fPLI)' },
          { en: 'Serum amylase activity', ar: 'نشاط إنزيم الأميلاز في المصل' },
          { en: 'Blood urea nitrogen', ar: 'نيتروجين يوريا الدم' },
          { en: 'Total bilirubin only', ar: 'البيليروبين الكلي فقط' }
        ],
        correctAnswer: 'Feline Pancreatic Lipase Immunoreactivity (fPLI / Spec fPL)',
        explanationEn: 'Serum amylase and routine lipase are non-diagnostic in cats; spec fPL is required.',
        explanationAr: 'إنزيمات الأميلاز والليباز العامة غير موثوقة في القطط، ويعتبر اختبار fPLI النوعي هو المعيار الذهبي.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'digestive', meshId: 'Mesh_Feline_Intestinum',
    nameEn: 'Feline Intestinal Tract', nameAr: 'القناة المعوية للقطط', latinName: 'Intestinum tenue et crassum',
    descriptionEn: 'Relatively short intestinal tract (ratio ~4:1 to body length) optimized for animal protein absorption; small cecum and short colon.',
    descriptionAr: 'قناة معوية قصيرة نسبياً (بنسبة 4:1 مقارنة بطول الجسم) متكيفة لهضم البروتين؛ أعور صغير وقولون قصير.',
    bloodSupplyEn: 'Cranial mesenteric artery (small intestine and ascending colon) and caudal mesenteric artery (descending colon).',
    bloodSupplyAr: 'الشريان المساريقي القحفي (الأمعاء الدقيقة والقولون الصاعد) والمساريقي الذيلي (القولون النازل).',
    innervationEn: 'Enteric nervous system with sympathetic inhibition via mesenteric plexuses and vagal/pelvic parasympathetic excitation.',
    innervationAr: 'الجهاز العصبي المعوي مع تثبيط ودي عبر الضفائر المساريقية وتنبيه نظير ودي مبهمي وحوضي.',
    clinicalPearlsEn: 'Common site of linear foreign body obstruction (e.g., string anchored under the tongue or in pylorus) causing plication.',
    clinicalPearlsAr: 'موقع شائع لانحشار الأجسام الغريبة الخطية (كالخيوط المثبتة تحت اللسان أو في البواب) مسببة تلافيف وتعرج الأمعاء.',
    focusCoordinates: { position: [0.8, 0.4, -0.05], target: [0, 0.32, -0.05] },
    geometry: { shape: 'cylinder', position: [0, 0.32, -0.05], rotation: [Math.PI / 4, 0, 0], scale: [0.14, 0.3, 0.14], color: '#d97706', roughness: 0.55, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Where is a linear foreign body most commonly anchored when causing intestinal plication in a cat?',
        questionAr: 'أين ينحشر طرف الجسم الغريب الخطي غالباً مسبباً تجعد وتلافيف الأمعاء في القطط؟',
        options: [
          { en: 'Under the tongue (lingual frenulum) or at the gastric pylorus', ar: 'تحت اللسان (لجام اللسان) أو عند بواب المعدة' },
          { en: 'Inside the anal sacs', ar: 'داخل الأكياس الشرجية' },
          { en: 'In the middle of the cecum', ar: 'في منتصف الأعور' },
          { en: 'Attached to the urinary bladder', ar: 'ملتصق بالمثانة البولية' }
        ],
        correctAnswer: 'Under the tongue (lingual frenulum) or at the gastric pylorus',
        explanationEn: 'String foreign bodies typically anchor sublingually or at the pylorus, while peristalsis pleats the downstream intestines.',
        explanationAr: 'تنحشر الخيوط نموذجياً تحت لسان القط أو في البواب بينما تطوي الحركات الدودية عرى الأمعاء حولها.'
      },
      {
        questionEn: 'What radiographic finding is pathognomonic for a linear foreign body in cats?',
        questionAr: 'ما هي العلامة الشعاعية المشخصة بامتياز للجسم الغريب الخطي في القطط؟',
        options: [
          { en: 'Accordion-like plication and eccentric crescentic gas bubbles in small intestine', ar: 'تلافيف معوية شبيهة بالأكورديون وفقاعات غازية هلالية غير منتظمة' },
          { en: 'Huge round radio-opaque mineral opacity in urinary bladder', ar: 'كثافة عتامة معدنية مستديرة ضخمة في المثانة' },
          { en: 'Complete absence of intestinal gas with pneumothorax', ar: 'غياب تام لغازات الأمعاء مع استرواح الصدر' },
          { en: 'Splenic torsion with C-shaped displacement', ar: 'انفتال الطحال مع انزياح على شكل حرف C' }
        ],
        correctAnswer: 'Accordion-like plication and eccentric crescentic gas bubbles in small intestine',
        explanationEn: 'Peristalsis pulling against the fixed string bunches the small intestine into an accordion shape with tapered gas pockets.',
        explanationAr: 'سحب التمعج المعوي ضد الخيط المشدود يطوي الأمعاء كالأكورديون مع جيوب غازية هلالية مميزة.'
      }
    ]
  },

  // Respiratory
  {
    speciesSlug: 'feline', systemSlug: 'respiratory', meshId: 'Mesh_Feline_Trachea',
    nameEn: 'Feline Trachea & Larynx', nameAr: 'الرغامي والحنجرة في القطط', latinName: 'Trachea et larynx (Felis catus)',
    descriptionEn: 'Flexible airway conduit with 38-43 C-shaped cartilaginous rings, closed dorsally by trachealis muscle situated externally.',
    descriptionAr: 'قصبة هوائية مرنة مكونة من 38-43 حلقة غضروفية غير مكتملة تغلقها العضلة الرغامية ظهرياً.',
    bloodSupplyEn: 'Cranial and caudal thyroid arteries, bronchoesophageal artery.',
    bloodSupplyAr: 'الشرايين الدرقية القحفية والذيلية والشريان القصبي المريئي.',
    innervationEn: 'Recurrent laryngeal nerve and cranial laryngeal nerve (branches of CN X).',
    innervationAr: 'العصب الحنجري الراجع والعصب الحنجري القحفي (فروع العصب المبهم العاشر).',
    clinicalPearlsEn: 'Feline larynx is highly prone to laryngospasm during endotracheal intubation; topical lidocaine spray on vocal cords is mandatory.',
    clinicalPearlsAr: 'حنجرة القطط شديدة الحساسية للتشنج الحنجري أثناء التنبيب الرغامي؛ رش الليدوكائين الموضعي إلزامي لمنع الانسداد.',
    focusCoordinates: { position: [0.75, 0.55, 0.45], target: [0, 0.48, 0.42] },
    geometry: { shape: 'cylinder', position: [0, 0.48, 0.42], rotation: [0.35, 0, 0], scale: [0.03, 0.35, 0.03], color: '#bae6fd', roughness: 0.3, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Why is topical lidocaine routinely applied to feline arytenoid cartilages prior to endotracheal intubation?',
        questionAr: 'لماذا يوضع الليدوكائين الموضعي روتينياً على الغضاريف الطرجهالية للقطط قبل التنبيب الرغامي؟',
        options: [
          { en: 'To prevent acute reflex laryngospasm and airway trauma', ar: 'لمنع تشنج الحنجرة الانعكاسي الحاد ورضوض مجرى الهواء' },
          { en: 'To stimulate coughing and secretion clearance', ar: 'لتحفيز السعال وتطهير الإفرازات' },
          { en: 'To cause permanent dilation of vocal folds', ar: 'لإحداث توسيع دائم للحبال الصوتية' },
          { en: 'To induce systemic analgesia', ar: 'لإحداث تسكين ألم جهازي شامل' }
        ],
        correctAnswer: 'To prevent acute reflex laryngospasm and airway trauma',
        explanationEn: 'Felines have sensitive vagally-mediated laryngeal reflexes; mechanical touch triggers intense adduction/laryngospasm.',
        explanationAr: 'تمتلك القطط منعكسات حنجرية مبهمية فائقة الحساسية؛ اللمس الميكانيكي يسبب انطباقاً وتشنجاً حاداً للحبال الصوتية.'
      },
      {
        questionEn: 'How does the feline trachealis muscle attach to the tracheal rings compared to canines?',
        questionAr: 'كيف ترتبط العضلة الرغامية بالحلقات الغضروفية في القطط مقارنة بالكلاب؟',
        options: [
          { en: 'Attaches to the external surface of the cartilage ends', ar: 'ترتبط بالسطح الخارجي لنهايات الغضاريف الرغامية' },
          { en: 'Attaches internally inside the luminal perichondrium', ar: 'ترتبط داخلياً داخل سمحاق لمعة الرغامي' },
          { en: 'Forms a complete circular muscular ring with no cartilage', ar: 'تشكل حلقة عضلية دائرية متصلة خالية من الغضاريف' },
          { en: 'Is entirely absent in domestic felines', ar: 'غائبة كلياً في القطط الأليفة' }
        ],
        correctAnswer: 'Attaches to the external surface of the cartilage ends',
        explanationEn: 'In felines, the trachealis muscle attaches externally across the open dorsal ends of the cartilage rings.',
        explanationAr: 'في السنوريات ترتبط العضلة الرغامية بالسطح الخارجي للنهايات الظهرية المفتوحة للحلقات الغضروفية.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'respiratory', meshId: 'Mesh_Feline_Pulmo_Sinister',
    nameEn: 'Left Lung', nameAr: 'الرئة اليسرى', latinName: 'Pulmo sinister (Felis catus)',
    descriptionEn: 'Divided into two distinct lobes: cranial lobe (subdivided into cranial and caudal parts) and caudal lobe.',
    descriptionAr: 'تنقسم إلى فصين رئيسيين: فص قحفي (مقسم لجزء قحفي وجزء ذيلي) وفص ذيلي كبير.',
    bloodSupplyEn: 'Pulmonary artery (functional deoxygenated flow) and bronchoesophageal artery (nutritional oxygenated supply).',
    bloodSupplyAr: 'الشريان الرئوي (تروية وظيفية) والشريان القصبي المريئي (تروية نسيجية مغذية).',
    innervationEn: 'Pulmonary plexus (vagal bronchoconstriction and sympathetic bronchodilation).',
    innervationAr: 'الضفيرة الرئوية (العصب المبهم يسبب تقبض القصبات والودي يسبب توسعها).',
    clinicalPearlsEn: 'Feline asthma (allergic bronchitis) involves marked smooth muscle hypertrophy around lower airways causing expiratory dyspnea.',
    clinicalPearlsAr: 'الربو القطي يتميز بفرط تضخم العضلات الملساء حول القصبات مما يسبب ضيق تنفس زفيري مميز ونوبات سعال.',
    focusCoordinates: { position: [-0.65, 0.45, 0.28], target: [-0.1, 0.4, 0.28] },
    geometry: { shape: 'sphere', position: [-0.1, 0.4, 0.28], rotation: [0.1, 0, 0.2], scale: [0.12, 0.2, 0.16], color: '#fda4af', roughness: 0.6, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which hallmark respiratory symptom and radiographic sign characterize feline bronchial disease (asthma)?',
        questionAr: 'ما هي الأعراض التنفسية والعلامات الشعاعية النموذجية لمرض القصبات السنوري (الربو القطي)؟',
        options: [
          { en: 'Expiratory wheeze/dyspnea with "donuts and tramlines" bronchial pattern on thoracic x-ray', ar: 'أزيز وضيق تنفس زفيري مع خطوط وحلقات قصبية (Donuts & Tramlines) في الأشعة' },
          { en: 'Stridor with cranial mediastinal calcification', ar: 'صرير استنشاقي مع تكلس في المنصف القحفي' },
          { en: 'Epistaxis with alveolar consolidation of caudal lobes only', ar: 'رعاف مع تصلب سنخي في الفصوص الذيلية فقط' },
          { en: 'Pure inspiratory click with normal radiographs', ar: 'طقطقة استنشاقية مع صورة شعاعية طبيعية تماماً' }
        ],
        correctAnswer: 'Expiratory wheeze/dyspnea with "donuts and tramlines" bronchial pattern on thoracic x-ray',
        explanationEn: 'Thickened bronchial walls visible end-on (donuts) and longitudinally (tramlines) along with air trapping are classic for feline asthma.',
        explanationAr: 'سماكة الجدران القصبية تظهر كحلقات وخطوط متوازية في الأشعة مع حبس الهواء بسبب تضيق الشعب الهوائية.'
      },
      {
        questionEn: 'Into how many parts is the feline left cranial lung lobe subdivided?',
        questionAr: 'إلى كم جزء ينقسم الفص الرئوي القحفي الأيسر في القطط؟',
        options: [
          { en: 'Two parts: pars cranialis and pars caudalis', ar: 'جزأين: جزء قحفي وجزء ذيلي' },
          { en: 'It is a single undivided lobe', ar: 'فص واحد غير منقسم' },
          { en: 'Three distinct sub-segments', ar: 'ثلاث قطع منفصلة' },
          { en: 'Four separate lobules', ar: 'أربعة فصيصات مستقلة' }
        ],
        correctAnswer: 'Two parts: pars cranialis and pars caudalis',
        explanationEn: 'Like the dog, the feline left cranial lung lobe is divided into cranial and caudal segments.',
        explanationAr: 'كما في الكلاب، ينقسم الفص القحفي الأيسر في القطط إلى جزء قحفي وجزء ذيلي.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'respiratory', meshId: 'Mesh_Feline_Pulmo_Dexter',
    nameEn: 'Right Lung (4 Lobes)', nameAr: 'الرئة اليمنى (4 فصوص)', latinName: 'Pulmo dexter (Felis catus)',
    descriptionEn: 'Comprises four anatomical lobes: cranial, middle, caudal, and the accessory lobe which wraps around the caudal vena cava.',
    descriptionAr: 'تتكون من أربعة فصوص تشريحية: قحفي، متوسط، ذيلي، والفص الإضافي الذي يلتف حول الوريد الأجوف الذيلي.',
    bloodSupplyEn: 'Right branches of pulmonary artery and bronchoesophageal system.',
    bloodSupplyAr: 'الفروع اليمنى للشريان الرئوي والجهاز القصبي المريئي.',
    innervationEn: 'Vagal and sympathetic pulmonary innervation.',
    innervationAr: 'التعصيب الرئوي الودي والمبهمي.',
    clinicalPearlsEn: 'Right middle lung lobe is the most prone to lung lobe torsion and aspiration consolidation in small animals.',
    clinicalPearlsAr: 'الفص الرئوي الأوسط الأيمن هو الأكثر عرضة للانفتال الرئوي والتصلب الناجم عن الاستنشاق.',
    focusCoordinates: { position: [0.65, 0.45, 0.28], target: [0.1, 0.4, 0.28] },
    geometry: { shape: 'sphere', position: [0.1, 0.4, 0.28], rotation: [-0.1, 0, -0.2], scale: [0.14, 0.22, 0.18], color: '#f43f5e', roughness: 0.6, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which pulmonary lobe in small animals has the narrowest pedicle, making it most vulnerable to lung lobe torsion?',
        questionAr: 'أي فص رئوي في الحيوانات الصغيرة يمتلك سويقة ضيقة مما يجعله الأكثر عرضة للالتواء والانفتال الرئوي؟',
        options: [
          { en: 'Right middle lung lobe', ar: 'الفص الرئوي الأوسط الأيمن' },
          { en: 'Accessory lobe', ar: 'الفص الإضافي' },
          { en: 'Left caudal lobe', ar: 'الفص الذيلي الأيسر' },
          { en: 'Right caudal lobe', ar: 'الفص الذيلي الأيمن' }
        ],
        correctAnswer: 'Right middle lung lobe',
        explanationEn: 'The right middle lobe has a long, narrow pedicle and high mobility, predisposing it to torsion.',
        explanationAr: 'يمتلك الفص الأوسط الأيمن قاعدة وسويقة طويلة ضيقة وحركية واسعة تجعله عرضة للانفتال.'
      },
      {
        questionEn: 'Which structure sits in the plica venae cavae alongside the accessory lobe of the right lung?',
        questionAr: 'ما هو التركيب التشريحي الذي يقع في ثنية الوريد الأجوف بجوار الفص الإضافي للرئة اليمنى؟',
        options: [
          { en: 'Caudal vena cava and right phrenic nerve', ar: 'الوريد الأجوف الذيلي والعصب الحجابي الأيمن' },
          { en: 'Left vagus nerve and esophagus', ar: 'العصب المبهم الأيسر والمريء' },
          { en: 'Azygos vein and thoracic duct', ar: 'الوريد الفرد والقناة الصدرية' },
          { en: 'Internal thoracic artery', ar: 'الشريان الصدري الداخلي' }
        ],
        correctAnswer: 'Caudal vena cava and right phrenic nerve',
        explanationEn: 'The accessory lobe occupies the mediastinal recess, separated by the caval fold containing the caudal vena cava and right phrenic nerve.',
        explanationAr: 'يستقر الفص الإضافي في الردب المنصفي محاطاً بطية الوريد الأجوف الذيلي ومسار العصب الحجابي الأيمن.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'respiratory', meshId: 'Mesh_Feline_Diaphragma',
    nameEn: 'Feline Diaphragm', nameAr: 'الحجاب الحاجز القطي', latinName: 'Diaphragma (Felis catus)',
    descriptionEn: 'Dome-shaped musculotendinous septum separating thoracic and peritoneal cavities, convex toward thorax.',
    descriptionAr: 'حاجز عضلي وتري مقبب يفصل التجويف الصدري عن البريتوني ويكون محدباً باتجاه الصدر.',
    bloodSupplyEn: 'Musculophrenic and cranial phrenic arteries, phrenic veins.',
    bloodSupplyAr: 'الشرايين العضلية الحجابية والشرايين الحجابية القحفية والأوردة الحجابية.',
    innervationEn: 'Phrenic nerves (paired bilateral cervical spinal nerves C5-C7).',
    innervationAr: 'الأعصاب الحجابية (الأعصاب الشوكية العنقية 5-7 الثنائية).',
    clinicalPearlsEn: 'Traumatic diaphragmatic rupture is very common after motor vehicular accidents; stomach or liver herniation impairs thoracic expansion.',
    clinicalPearlsAr: 'فتق الحجاب الحاجز الرضي شائع جداً إثر حوادث السيارات؛ يسبب فتق المعدة أو الكبد داخل الصدر ضائقة تنفسية حادة.',
    focusCoordinates: { position: [0.8, 0.45, 0.1], target: [0, 0.38, 0.1] },
    geometry: { shape: 'sphere', position: [0, 0.38, 0.1], rotation: [Math.PI / 4, 0, 0], scale: [0.26, 0.04, 0.24], color: '#e11d48', roughness: 0.5, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which three anatomical openings (hiatuses) penetrate the feline diaphragm?',
        questionAr: 'ما هي الفتحات التشريحية الثلاث الرئيسية التي تخترق الحجاب الحاجز في القط؟',
        options: [
          { en: 'Aortic hiatus, esophageal hiatus, and caval foramen', ar: 'الفتحة الأبهرية، الفتحة المريئية، وثقبة الوريد الأجوف' },
          { en: 'Tracheal opening, carotid canal, and portal canal', ar: 'الفتحة الرغامية، القناة السباتية، والقناة البابية' },
          { en: 'Bile duct canal, thoracic canal, and lumbar hiatus', ar: 'قناة الصفراء، القناة الصدرية، والفتحة القطنية' },
          { en: 'Obturator foramen, femoral ring, and inguinal canal', ar: 'الثقبة السدادية، الحلقة الفخذية، والقناة الإربية' }
        ],
        correctAnswer: 'Aortic hiatus, esophageal hiatus, and caval foramen',
        explanationEn: 'The aorta/azygos vein pass through aortic hiatus, esophagus/vagal trunks through esophageal hiatus, and caudal vena cava through caval foramen.',
        explanationAr: 'يمر الأبهر عبر الفتحة الأبهرية، والمريء عبر الفتحة المريئية، والأجوف الذيلي عبر ثقبة الوريد الأجوف.'
      },
      {
        questionEn: 'During acute traumatic diaphragmatic hernia in a cat, which clinical sign requires emergency gastric decompression?',
        questionAr: 'أثناء الفتق الحجابي الرضي الحاد في القط، ما هي الحالة الطارئة التي تستدعي تخفيف ضغط المعدة الفوري؟',
        options: [
          { en: 'Herniation and acute tympanic distension of the stomach inside the thoracic cavity', ar: 'انفتاق المعدة داخل التجويف الصدري وتمددها الحاد بالغازات' },
          { en: 'Herniation of the urinary bladder into scrotum', ar: 'انفتاق المثانة في كيس الصفن' },
          { en: 'Rupture of the splenic artery alone', ar: 'تمزق الشريان الطحالي منفرداً' },
          { en: 'Fracture of the caudal coccygeal vertebrae', ar: 'كسر في الفقرات العصعصية الذيلية' }
        ],
        correctAnswer: 'Herniation and acute tympanic distension of the stomach inside the thoracic cavity',
        explanationEn: 'An intrathoracic distending stomach acts as a tension mass, compressing the lungs and caudal vena cava causing cardiovascular collapse.',
        explanationAr: 'المعدة المنفتقة داخل الصدر عند انتفاخها بالغاز تضغط على الرئتين والوريد الأجوف مسببة صدمة وانهياراً دورياً سريعاً.'
      }
    ]
  },

  // Nervous
  {
    speciesSlug: 'feline', systemSlug: 'nervous', meshId: 'Mesh_Feline_Encephalon',
    nameEn: 'Feline Cerebrum & Brainstem', nameAr: 'المخ وجذع الدماغ القطي', latinName: 'Encephalon (Felis catus)',
    descriptionEn: 'Highly gyrencephalic brain with complex cerebral sulci and large visual/vestibular processing centers.',
    descriptionAr: 'دماغ تلافي في غاية التطور بجيوب وأخاديد معقدة ومراكز بصرية ودهليزية كبيرة.',
    bloodSupplyEn: 'Rete mirabile caroticum (extraordinary network derived from maxillary artery supplying the circle of Willis).',
    bloodSupplyAr: 'الشبكة العجيبة السباتية (Rete Mirabile مشتقة من الشريان الفكي وتغذي دائرة ويليس).',
    innervationEn: '12 cranial nerves emerging from encephalon and brainstem.',
    innervationAr: '12 زوجاً من الأعصاب القحفية تنشأ من الدماغ وجذعه.',
    clinicalPearlsEn: 'Unlike dogs, cats rely primarily on the maxillary artery and rete mirabile to supply intracranial blood; prolonged mouth gagging during dental work can cause blindness or brain ischemia.',
    clinicalPearlsAr: 'تعتمد القطط على الشريان الفكي والشبكة العجيبة؛ فتح الفم المفرط بفتّاحات الأسنان يضغط الفكي ويسبب عمى وسكتة دماغية.',
    focusCoordinates: { position: [0.55, 0.65, 0.6], target: [0, 0.58, 0.55] },
    geometry: { shape: 'sphere', position: [0, 0.58, 0.55], rotation: [0, 0, 0], scale: [0.12, 0.1, 0.14], color: '#fbcfe8', roughness: 0.5, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Why can the use of spring-loaded dental mouth gags cause post-procedure cortical blindness in cats?',
        questionAr: 'لماذا قد يؤدي استخدام فاتحات الفم النوابضية أثناء علاج أسنان القطط إلى العمى القشري بعد العملية؟',
        options: [
          { en: 'Maxillary artery compression occludes blood supply to the maxillary rete mirabile and cerebral arterial circle', ar: 'انضغاط الشريان الفكي يقطع التروية عن الشبكة العجيبة الفكية ودائرة ويليس الدماغية' },
          { en: 'Direct mechanical severance of optic nerves', ar: 'القطع الميكانيكي المباشر للأعصاب البصرية' },
          { en: 'Rupture of tympanic bulla', ar: 'تمزق الفقاعة الطبلية' },
          { en: 'Hyperstimulation of vagal nerve nuclei', ar: 'فرط تنبيه نوى العصب المبهم' }
        ],
        correctAnswer: 'Maxillary artery compression occludes blood supply to the maxillary rete mirabile and cerebral arterial circle',
        explanationEn: 'Maxillary artery runs near the angular process of mandible; hyperextension collapses the vessel supplying the feline rete mirabile.',
        explanationAr: 'يمر الشريان الفكي بالقرب من الزاوية الفكية؛ فرط الفتح يضغط الشريان المغذي للشبكة العجيبة مما يحرم الدماغ من الدم.'
      },
      {
        questionEn: 'Which anatomical structure is present in feline cerebral arterial supply that is absent in dogs?',
        questionAr: 'ما هو التركيب الوعائي الموجود في تروية دماغ القطط والمفقود في الكلاب؟',
        options: [
          { en: 'External carotid rete mirabile (maxillary rete)', ar: 'الشبكة العجيبة للشريان السباتي الخارجي (الشبكة الفكية)' },
          { en: 'Circle of Willis', ar: 'دائرة ويليس' },
          { en: 'Basilar artery', ar: 'الشريان القاعدي' },
          { en: 'Middle cerebral artery', ar: 'الشريان المخي الأوسط' }
        ],
        correctAnswer: 'External carotid rete mirabile (maxillary rete)',
        explanationEn: 'Cats utilize a prominent maxillary rete mirabile, through which internal carotid blood flow is rerouted.',
        explanationAr: 'تتميز القطط بوجود شبكة عجيبة متفرعة من الشريان الفكي يتدفق عبرها الدم الدماغي الرئيسي.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'nervous', meshId: 'Mesh_Feline_Cerebellum',
    nameEn: 'Feline Cerebellum', nameAr: 'المخيخ القطي', latinName: 'Cerebellum (Felis catus)',
    descriptionEn: 'Folded dorsal hindbrain structure consisting of central vermis and lateral hemispheres, crucial for feline balance and agility.',
    descriptionAr: 'بنية مخية خلفية مطوية تتكون من الدودة المركزية ونصفا كرة مخيخيان، مسؤولة عن التوازن والرشاقة الفائقة.',
    bloodSupplyEn: 'Rostral and caudal cerebellar arteries.',
    bloodSupplyAr: 'الشرايين المخيخية المنقارية والذيلية.',
    innervationEn: 'Cerebellar peduncles connecting with vestibular nuclei, pons, and midbrain.',
    innervationAr: 'السويقات المخيخية المتصلة بالنوى الدهليزية والجسر والدماغ المتوسط.',
    clinicalPearlsEn: 'In utero or perinatal Feline Panleukopenia Virus infection causes cerebellar hypoplasia, presenting with lifelong non-progressive intention tremors.',
    clinicalPearlsAr: 'إصابة الجنين بفيروس طاعون القطط Panleukopenia تسبب نقص تنسج المخيخ ورعاشاً قصدياً مستديماً غير مترقٍ.',
    focusCoordinates: { position: [0.55, 0.65, 0.48], target: [0, 0.59, 0.46] },
    geometry: { shape: 'sphere', position: [0, 0.59, 0.46], rotation: [0, 0, 0], scale: [0.08, 0.08, 0.08], color: '#f472b6', roughness: 0.45, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Feline panleukopenia virus infection in a pregnant queen typically results in which neurological lesion in kittens?',
        questionAr: 'إصابة أنثى القط الحامل بفيروس طاعون القطط تؤدي إلى أي آفة عصبية لدى الصغار؟',
        options: [
          { en: 'Cerebellar hypoplasia (destruction of the external germinal layer)', ar: 'نقص تنسج المخيخ (تدمير الطبقة الجرثومية الخارجية للمخيخ)' },
          { en: 'Hydrocephalus internus only', ar: 'استسقاء الدماغ الداخلي فقط' },
          { en: 'Radial nerve avulsion', ar: 'قلع العصب الكعبري' },
          { en: 'Spina bifida with syringomyelia', ar: 'الصلب المشقوق مع تكهف النخاع' }
        ],
        correctAnswer: 'Cerebellar hypoplasia (destruction of the external germinal layer)',
        explanationEn: 'The virus targets rapidly dividing cells in the neonate cerebellar external granular layer, preventing proper development.',
        explanationAr: 'يستهدف الفيروس الخلايا سريعة الانقسام في الطبقة الحبيبية الخارجية للمخيخ مما يوقف نموه ويكتم تطوره.'
      },
      {
        questionEn: 'What is the characteristic clinical presentation of feline cerebellar ataxia?',
        questionAr: 'ما هو المظهر السريري المميز للترنح المخيخي في القطط؟',
        options: [
          { en: 'Hypermetria, broad-based stance, and intention tremors with preserved strength', ar: 'فرط قياس الخطوة، وقفة متباعدة، ورعاش قصدي مع بقاء القوة العضلية سليمة' },
          { en: 'Flaccid tetraparesis with absent reflexes', ar: 'شلل رباعي رخو مع انعدام المنعكسات' },
          { en: 'Loss of deep pain in all four limbs', ar: 'فقدان الإحساس بالألم العميق في القوائم الأربع' },
          { en: 'Horner syndrome with facial paralysis', ar: 'متلازمة هورنر مع شلل العصب الوجهي' }
        ],
        correctAnswer: 'Hypermetria, broad-based stance, and intention tremors with preserved strength',
        explanationEn: 'Cerebellar disease causes dysfunction in rate and range of motion (hypermetria, tremor) without causing paresis.',
        explanationAr: 'تسبب أمراض المخيخ خللاً في تنظيم مدى وسرعة الحركة دون إحداث شلل أو ضعف عضلي حقيقي.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'nervous', meshId: 'Mesh_Feline_MedullaSpinalis',
    nameEn: 'Feline Spinal Cord & Cauda Equina', nameAr: 'النخاع الشوكي وذيل الفرس', latinName: 'Medulla spinalis (Felis catus)',
    descriptionEn: 'Elongated neural cylinder ending near the sacrum; the feline conus medullaris terminates farther caudally than in dogs (L7-S1).',
    descriptionAr: 'أسطوانة عصبية ممتدة تنتهي بالقرب من العجز؛ ينتهي المخروط النخاعي في القطط أكثر ذيلياً عند L7-S1.',
    bloodSupplyEn: 'Ventral spinal artery, dorsal spinal arteries, and segmental spinal branches.',
    bloodSupplyAr: 'الشريان الشوكي البطني والشرايين الشوكية الظهرية والفروع الشوكية القطعية.',
    innervationEn: 'Afferent sensory dorsal roots and efferent motor ventral roots.',
    innervationAr: 'الجذور الظهرية الحسية الواردة والجذور البطنية الحركية الصادرة.',
    clinicalPearlsEn: 'Sacrococcygeal separation ("tail-pull injury") damages pelvic and pudendal nerves leading to urinary/fecal incontinence and flaccid tail.',
    clinicalPearlsAr: 'إصابة شد الذيل (Tail-pull injury) تسبب تمزق أعصاب الحوض والحياء مما يؤدي إلى سلس بولي وتبرزي وذيل رخو.',
    focusCoordinates: { position: [0.75, 0.65, 0.05], target: [0, 0.52, 0] },
    geometry: { shape: 'cylinder', position: [0, 0.52, 0], rotation: [0, 0, Math.PI / 2], scale: [0.02, 0.75, 0.02], color: '#fef08a', roughness: 0.35, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Where does the feline spinal cord (conus medullaris) typically terminate compared to dogs?',
        questionAr: 'أين ينتهي النخاع الشوكي (المخروط النخاعي) نموذجياً في القطط مقارنة بالكلاب؟',
        options: [
          { en: 'More caudally, at the level of L7 or S1 (dogs terminate at L6)', ar: 'أكثر ذيلياً، عند مستوى الفقرة L7 أو S1 (بينما ينتهي في الكلاب عند L6)' },
          { en: 'Much more cranially, at T12', ar: 'أكثر قحفياً عند مستوى T12' },
          { en: 'Exactly at L2 in both species', ar: 'عند L2 تماماً في كلا النوعين' },
          { en: 'Within the mid-thoracic vertebral canal', ar: 'داخل القناة الصدرية المتوسطة' }
        ],
        correctAnswer: 'More caudally, at the level of L7 or S1 (dogs terminate at L6)',
        explanationEn: 'The feline conus medullaris extends further caudally, making L7-S1 epidural injection require caution against intrathecal penetration.',
        explanationAr: 'يمتد المخروط النخاعي في القطط حتى الفقرة القطنية السابعة أو الأولى العجزية، مما يستوجب الحذر عند التخدير فوق الجافية.'
      },
      {
        questionEn: 'Traumatic traction on the feline tail ("tail-pull" injury) most frequently damages which autonomic nerve supplying bladder contraction?',
        questionAr: 'شد الذيل الرضي في القطط يلحق الضرر غالباً بأي عصب ذاتي مسؤول عن تقلص المثانة البولية؟',
        options: [
          { en: 'Pelvic nerve (parasympathetic from S1-S3)', ar: 'العصب الحوضي (نظير الودي من الفقرات العجزية 1-3)' },
          { en: 'Femoral nerve', ar: 'العصب الفخذي' },
          { en: 'Sciatic nerve', ar: 'العصب الوركي' },
          { en: 'Radial nerve', ar: 'العصب الكعبري' }
        ],
        correctAnswer: 'Pelvic nerve (parasympathetic from S1-S3)',
        explanationEn: 'Avulsion of sacral nerve roots severs parasympathetic innervation to the detrusor muscle, causing urinary retention and overflow incontinence.',
        explanationAr: 'قلع الجذور العصبية العجزية يقطع التنبيه نظير الودي لعضلة المثانة الدافعة مسبباً احتباس البول وسلس الفيض.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'nervous', meshId: 'Mesh_Feline_NervusIschiadicus',
    nameEn: 'Sciatic Nerve (Nervus Ischiadicus)', nameAr: 'العصب الوركي في القطط', latinName: 'Nervus ischiadicus',
    descriptionEn: 'Major nerve of hindlimb originating from L6-S2 spinal roots, traveling deep to gluteal muscles and caudal to the femur.',
    descriptionAr: 'العصب الرئيسي للطرف الخلفي ينشأ من الجذور الشوكية L6-S2 ويمر عميقاً تحت عضلات الإلية خلف عظم الفخذ.',
    bloodSupplyEn: 'Arteria comitans nervi ischiadici.',
    bloodSupplyAr: 'الشريان المرافق للعصب الوركي.',
    innervationEn: 'Sensory to distal hindlimb/paw and motor to hamstrings, gastrocnemius, and paw muscles.',
    innervationAr: 'حسي للطرف الخلفي والكف وحركي لعضلات المأبض والعضلة التوأمية الساقية.',
    clinicalPearlsEn: 'Iatrogenic damage can occur from caudal thigh intramuscular injections; injection should be made into cranial or epaxial muscles instead.',
    clinicalPearlsAr: 'قد يتضرر علاجياً إثر الحقن العضلي في الفخذ الخلفي؛ يجب الحقن في العضلات المحورية فوق الظهرية تجنباً لقطعه.',
    focusCoordinates: { position: [0.65, 0.35, -0.25], target: [0.12, 0.28, -0.22] },
    geometry: { shape: 'cylinder', position: [0.12, 0.28, -0.22], rotation: [0.2, 0, 0.4], scale: [0.015, 0.28, 0.015], color: '#facc15', roughness: 0.3, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which intramuscular injection site in cats poses the greatest hazard of iatrogenic sciatic nerve trauma?',
        questionAr: 'أي موقع حقن عضلي في القطط يشكل الخطر الأكبر لإصابة العصب الوركي علاجياً؟',
        options: [
          { en: 'Caudal aspect of the thigh (semimembranosus/semitendinosus muscle belly)', ar: 'الجهة الخلفية للفخذ (العضلة نصف الغشائية ونصف الوترية)' },
          { en: 'Lumbar epaxial muscles', ar: 'العضلات القطنية فوق المحورية' },
          { en: 'Quadriceps femoris (cranial thigh)', ar: 'عضلة الفخذ رباعية الرؤوس (مقدمة الفخذ)' },
          { en: 'Triceps brachii', ar: 'عضلة العضد ثلاثية الرؤوس' }
        ],
        correctAnswer: 'Caudal aspect of the thigh (semimembranosus/semitendinosus muscle belly)',
        explanationEn: 'The sciatic nerve runs directly in the caudal thigh groove between biceps femoris and semimembranosus.',
        explanationAr: 'يمر العصب الوركي في الأخدود الخلفي للفخذ؛ الحقن فيه يهدد بشلل العصب وإسقاط الرسغ.'
      },
      {
        questionEn: 'Complete transection of the sciatic nerve produces which posture in the feline hindlimb?',
        questionAr: 'ما هي الوضعية الناتجة عن القطع التام للعصب الوركي في الطرف الخلفي للقط؟',
        options: [
          { en: 'Plantigrade stance with knuckling of digits and absent withdrawal reflex', ar: 'وقفة كفية منخفضة (Plantigrade) مع انثناء الأصابع وغياب منعكس السحب' },
          { en: 'Rigid spastic hyperextension of all joints', ar: 'فرط بسط تشنجي صلب لجميع المفاصل' },
          { en: 'Normal walking without any sensory deficit', ar: 'مشية طبيعية دون أي عجز حسي' },
          { en: 'Inability to flex the hip joint', ar: 'عجز عن ثني مفصل الورك' }
        ],
        correctAnswer: 'Plantigrade stance with knuckling of digits and absent withdrawal reflex',
        explanationEn: 'Sciatic paralysis causes flaccid loss of stifle flexors and hock extensors/flexors, producing a dropped hock and digit dragging.',
        explanationAr: 'يؤدي شلل الوركي إلى فقدان وظيفة عضلات العرقوب والأصابع مما يسبب هبوط مفصل العرقوب وسحل الكف.'
      }
    ]
  },

  // Urogenital
  {
    speciesSlug: 'feline', systemSlug: 'urogenital', meshId: 'Mesh_Feline_Ren',
    nameEn: 'Feline Kidney with Capsular Veins', nameAr: 'كلية القط ذات الأوردة المحفظية', latinName: 'Ren (Felis catus)',
    descriptionEn: 'Bean-shaped unipyramidal kidneys with prominent superficial subcapsular veins (venae capsulares) converging at renal hilus.',
    descriptionAr: 'كلية أحادية الهرم تشبه حبة الفاصولياء تتميز بأوردة تحت محفظية بارزة تجتمع عند سرة الكلية.',
    bloodSupplyEn: 'Renal artery (single on each side) and renal vein draining into caudal vena cava.',
    bloodSupplyAr: 'الشريان الكلوي (مفرد لكل جانب) والوريد الكلوي الذي يصب في الوريد الأجوف الذيلي.',
    innervationEn: 'Renal plexus from celiacomesenteric ganglion and sympathetic splanchnic fibers.',
    innervationAr: 'الضفيرة الكلوية من العقدة الزلاقية المساريقية والألياف الحشوية الودية.',
    clinicalPearlsEn: 'Capsular veins are anatomically unique to felines; both kidneys are palpable in normal healthy cats, right kidney slightly cranial to left.',
    clinicalPearlsAr: 'الأوردة المحفظية السطحية فريدة تشريحياً بالقطط؛ يمكن جَس الكليتين باليد في القطط السليمة بسهولة.',
    focusCoordinates: { position: [0.65, 0.45, 0.05], target: [-0.08, 0.42, 0.02] },
    geometry: { shape: 'sphere', position: [-0.08, 0.42, 0.02], rotation: [0.2, 0.2, 0], scale: [0.08, 0.12, 0.08], color: '#7f1d1d', roughness: 0.35, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Which anatomical feature on the surface of the feline kidney distinguishes it macroscopically from the canine kidney?',
        questionAr: 'ما هي الميزة التشريحية على سطح كلية القطط التي تميزها عيانياً عن كلية الكلاب؟',
        options: [
          { en: 'Prominent stellate subcapsular veins (venae capsulares) radiating on the surface', ar: 'أوردة تحت محفظية نجمية بارزة (Venae Capsulares) تشع على السطح' },
          { en: 'Multilobular surface grooves like cattle', ar: 'فصوص سطحية متعددة كالأبقار' },
          { en: 'Heart-shaped right kidney', ar: 'كلية يمنى قلبية الشكل' },
          { en: 'Complete absence of renal cortex', ar: 'غياب تام لقشرة الكلية' }
        ],
        correctAnswer: 'Prominent stellate subcapsular veins (venae capsulares) radiating on the surface',
        explanationEn: 'Cats have distinct subcapsular veins traversing the cortical surface that converge at the renal hilum.',
        explanationAr: 'تتميز كلى القطط بشبكة أوردة سطحية تحت المحفظة بارزة جداً تلتقي عند سرة الكلية.'
      },
      {
        questionEn: 'Chronic kidney disease (CKD) in cats is most commonly associated with which underlying histopathological change?',
        questionAr: 'مرض الكلى المزمن (CKD) في القطط يرتبط غالباً بأي تغير نسجي مرضي كامن؟',
        options: [
          { en: 'Chronic tubulointerstitial nephritis and fibrosis', ar: 'التهاب الأنابيب والخلال الكلوي المزمن والتليف' },
          { en: 'Acute amyloidosis of medulla only', ar: 'داء نشواني حاد بالنخاع فقط' },
          { en: 'Renal cell carcinoma', ar: 'سرطان الخلايا الكلوية' },
          { en: 'Pure bacterial pyelonephritis without fibrosis', ar: 'التهاب حويضة وكلية بكتيري نقي دون تليف' }
        ],
        correctAnswer: 'Chronic tubulointerstitial nephritis and fibrosis',
        explanationEn: 'Chronic interstitial nephritis is the prevailing pathological finding in feline geriatric renal insufficiency.',
        explanationAr: 'التهاب الأنابيب والخلال المزمن هو الآفة النسيجية الأكثر شيوعاً في قصور الكلى لدى كبار سن القطط.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'urogenital', meshId: 'Mesh_Feline_VesicaUrinaria',
    nameEn: 'Urinary Bladder & Urethra', nameAr: 'المثانة البولية ومجرى البول', latinName: 'Vesica urinaria et urethra (Felis catus)',
    descriptionEn: 'Distensible piriform vesicle in pelvic inlet; male feline urethra tapers into a very narrow penile urethra.',
    descriptionAr: 'كيس كمثري قابل للامتلاء عند مدخل الحوض؛ يتميز إحليل ذكر القط بتضيق شديد في الجزء القضيبي.',
    bloodSupplyEn: 'Cranial vesical artery (from umbilical) and caudal vesical artery (from internal pudendal).',
    bloodSupplyAr: 'الشريان المثاني القحفي (من السري) والشريان المثاني الذيلِي (من الحياء الداخلي).',
    innervationEn: 'Hypogastric nerve (sympathetic storage), pelvic nerve (parasympathetic voiding), and pudendal nerve (somatic sphincter).',
    innervationAr: 'العصب الخثلي (تخزين ودي)، العصب الحوضي (إفراغ نظير ودي)، وعصب الحياء (عاصرة جسدية).',
    clinicalPearlsEn: 'Feline Lower Urinary Tract Disease (FLUTD) causes urethral obstruction in tomcats by struvite matrix plugs, leading to hyperkalemia and emergency.',
    clinicalPearlsAr: 'متلازمة FLUTD تسبب انسداد مجرى البول في ذكور القطط بسدادات ستروفيتية مما يسبب فرط بوتاسيوم الدم المميت.',
    focusCoordinates: { position: [0.65, 0.38, -0.15], target: [0, 0.32, -0.12] },
    geometry: { shape: 'sphere', position: [0, 0.32, -0.12], rotation: [0, 0, 0], scale: [0.1, 0.12, 0.1], color: '#f59e0b', roughness: 0.4, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'What is the most lethal electrolyte abnormality resulting from acute urethral obstruction in a blocked tomcat?',
        questionAr: 'ما هو الاضطراب الشاردي الأكثر فتكاً الناجم عن الانسداد الحاد لمجرى البول في ذكر القط؟',
        options: [
          { en: 'Severe hyperkalemia causing life-threatening bradyarrhythmias', ar: 'فرط بوتاسيوم الدم الشديد المسبب لبطء واضطراب نظم القلب القاتل' },
          { en: 'Mild hypokalemia', ar: 'نقص بسيط في البوتاسيوم' },
          { en: 'Hyperglycemia alone', ar: 'ارتفاع سكر الدم فقط' },
          { en: 'Hypophosphatemia', ar: 'نقص الفوسفات في الدم' }
        ],
        correctAnswer: 'Severe hyperkalemia causing life-threatening bradyarrhythmias',
        explanationEn: 'Impaired excretion elevates serum potassium, lowering resting membrane potential and leading to tented T waves, sinus arrest, and death.',
        explanationAr: 'تراكم البوتاسيوم في الدم يثبط التوصيل القلبي مسبباً تباطؤ القلب وتوقف الجيب الأذيني إن لم يعالج فوراً.'
      },
      {
        questionEn: 'Which surgical salvage procedure creates a permanent stoma to prevent recurrent urethral obstruction in male cats?',
        questionAr: 'ما هو الإجراء الجراحي الإنقاذي الذي يصنع فغرة بولية دائمة لمنع تكرار انسداد الإحليل في ذكور القطط؟',
        options: [
          { en: 'Perineal urethrostomy (PU)', ar: 'فغر الإحليل العجاني (Perineal Urethrostomy)' },
          { en: 'Total cystectomy', ar: 'استئصال المثانة الكلي' },
          { en: 'Nephrectomy', ar: 'استئصال الكلية' },
          { en: 'Prostatectomy', ar: 'استئصال البروستات' }
        ],
        correctAnswer: 'Perineal urethrostomy (PU)',
        explanationEn: 'Perineal urethrostomy amputates the narrow penile urethra and sutures the wider pelvic urethra directly to the perineal skin.',
        explanationAr: 'يستأصل فغر الإحليل العجاني الإحليل القضيبي الضيق ويوصل الإحليل الحوضي الأوسع بجلد العجان مباشرة.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'urogenital', meshId: 'Mesh_Feline_Uterus',
    nameEn: 'Bicornuate Uterus & Ovaries', nameAr: 'الرحم ذو القرنين والمبيضان', latinName: 'Uterus bicornis et ovaria (Felis catus)',
    descriptionEn: 'Bicornuate reproductive tract with slender uterine horns and small oval ovaries suspended by the ovarian suspensory ligament.',
    descriptionAr: 'جهاز تناسلي أنثوي ذو قرنين نحيفين ومبيضين بيضاويين معلقين بالرباط المعلق للمبيض.',
    bloodSupplyEn: 'Ovarian artery (from abdominal aorta) and uterine artery (from internal iliac/pudendal branches).',
    bloodSupplyAr: 'الشريان المبيضي (من الأبهر البطني) والشريان الرحمي (من فروع الحياء الداخلي).',
    innervationEn: 'Uterovaginal plexus and hypogastric nerves.',
    innervationAr: 'الضفيرة الرحمية المهبلية والأعصاب الخثلية.',
    clinicalPearlsEn: 'Queens are seasonally polyestrous and induced (reflex) ovulators; coitus triggers LH surge required for ovulation.',
    clinicalPearlsAr: 'إناث القطط متعددة دورات الشياق موسمياً وذوات إباضة محفزة (Induced ovulators) حيث يستلزم الجماع لإطلاق هرمون LH.',
    focusCoordinates: { position: [0.65, 0.42, -0.08], target: [0, 0.35, -0.08] },
    geometry: { shape: 'torus', position: [0, 0.35, -0.08], rotation: [Math.PI / 2, 0, 0], scale: [0.1, 0.08, 0.02], color: '#ec4899', roughness: 0.5, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'What reproductive characteristic defines ovulation in the domestic cat (queen)?',
        questionAr: 'ما هي السمة التناسلية التي تميز الإباضة في أنثى القطط الأليفة؟',
        options: [
          { en: 'Induced (reflex) ovulator: coital stimulation triggers LH release and ovulation', ar: 'إباضة محفزة (انعكاسية): التحفيز الجنسي يحفز إطلاق هرمون LH وحدوث الإباضة' },
          { en: 'Spontaneous monthly ovulation independent of mating', ar: 'إباضة تلقائية شهرية دورية مستقلة تماماً عن التزاوج' },
          { en: 'Ovulation driven entirely by photoperiod without hormonal changes', ar: 'إباضة تعتمد على الفترة الضوئية فقط دون تغيرات هرمونية' },
          { en: 'Absence of ovarian follicles', ar: 'عدم وجود جريبات مبيضية' }
        ],
        correctAnswer: 'Induced (reflex) ovulator: coital stimulation triggers LH release and ovulation',
        explanationEn: 'Vaginal-cervical mechanical stimulation by penile spines stimulates neuroendocrine release of GnRH and an LH surge.',
        explanationAr: 'تنبيه أشواك قضيب الذكر لعنق المهبل يحفز إفراز GnRH ودفقة من LH الضرورية لتحرير البويضة.'
      },
      {
        questionEn: 'Which surgical ligament must be stretched or broken during feline ovariohysterectomy to exteriorize the ovary?',
        questionAr: 'أي رباط جراحي يجب شده أو كسره بلطف أثناء استئصال الرحم والمبيضين في القطط لإبراز المبيض؟',
        options: [
          { en: 'Suspensory ligament of the ovary', ar: 'الرباط المعلق للمبيض' },
          { en: 'Round ligament of the liver', ar: 'الرباط المستدير للكبد' },
          { en: 'Falciform ligament', ar: 'الرباط المنجلي' },
          { en: 'Broad ligament of pelvis only', ar: 'الرباط العريض للحوض فقط' }
        ],
        correctAnswer: 'Suspensory ligament of the ovary',
        explanationEn: 'The suspensory ligament anchors the ovary to the last ribs; transection allows safe visualization of the ovarian pedicle.',
        explanationAr: 'يثبت الرباط المعلق المبيض بجدار البطن قرب الأضلاع الأخيرة؛ وإرخاؤه يسمح بربط الأوعية المبيضية بأمان.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'urogenital', meshId: 'Mesh_Feline_Penis',
    nameEn: 'Feline Spined Penis', nameAr: 'قضيب القط ذو الأشواك المتقرنة', latinName: 'Penis (Felis catus)',
    descriptionEn: 'Caudally-directed penis equipped with 120-150 androgen-dependent cornified papillae (spines) along the glans.',
    descriptionAr: 'قضيب موجه ذيلياً مزود بنحو 120-150 شوكة متقرنة تعتمد على الأندروجين على طول الحشفة.',
    bloodSupplyEn: 'Internal pudendal artery continuing as dorsal artery of penis and deep artery of penis.',
    bloodSupplyAr: 'الشريان الحياء الداخلي ممتداً كالشريان الظهري للقضيب والشريان العميق للقضيب.',
    innervationEn: 'Pudendal nerve (giving rise to dorsal nerve of penis) and pelvic autonomic plexus.',
    innervationAr: 'عصب الحياء (الذي يعطي العصب الظهري للقضيب) والضفيرة الحوضية الذاتية.',
    clinicalPearlsEn: 'Penile spines atrophy within 6-8 weeks after castration; their presence on physical exam confirms intact status or cryptorchidism.',
    clinicalPearlsAr: 'تضمر أشواك القضيب خلال 6-8 أسابيع بعد الإخصاء؛ وجودها في الفحص يؤكد وجود خصية هاجرة نشطة هرمونياً.',
    focusCoordinates: { position: [0.55, 0.32, -0.22], target: [0, 0.28, -0.2] },
    geometry: { shape: 'cone', position: [0, 0.28, -0.2], rotation: [-Math.PI / 2, 0, 0], scale: [0.03, 0.08, 0.03], color: '#f43f5e', roughness: 0.4, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'What happens to the cornified penile spines of an adult male cat following surgical castration?',
        questionAr: 'ماذا يحدث للأشواك المتقرنة في قضيب ذكر القط البالغ بعد إجراء الخصي الجراحي؟',
        options: [
          { en: 'They atrophy and disappear within 6-8 weeks due to testosterone loss', ar: 'تضمر وتختفي في غضون 6-8 أسابيع نتيجة زوال هرمون التستوستيرون' },
          { en: 'They multiply and calcify permanently', ar: 'تتكاثر وتتكلس بصورة دائمة' },
          { en: 'They remain unchanged regardless of testosterone levels', ar: 'تبقى دون أي تغيير بصرف النظر عن التستوستيرون' },
          { en: 'They turn into active sebaceous glands', ar: 'تتحول إلى غدد دهنية نشطة' }
        ],
        correctAnswer: 'They atrophy and disappear within 6-8 weeks due to testosterone loss',
        explanationEn: 'The development and maintenance of feline penile spines is directly testosterone-dependent; regression confirms castration.',
        explanationAr: 'نمو وبقاء أشواك حشفة القضيب يعتمد كلياً على التستوستيرون، وضمورها دليل قطعي على نجاح الإخصاء.'
      },
      {
        questionEn: 'In which direction does the non-erect feline penis naturally point?',
        questionAr: 'في أي اتجاه يشير قضيب القط غير المنتصب في الحالة الطبيعية؟',
        options: [
          { en: 'Caudoventrally (pointing backwards towards the perineum)', ar: 'ذيلياً بطنياً (متجهاً إلى الخلف نحو العجان)' },
          { en: 'Cranioventrally along the abdominal wall like the dog', ar: 'قحفياً بطنياً بمحاذاة جدار البطن كالكلب' },
          { en: 'Dorsally into the pelvic canal', ar: 'ظهرياً داخل القناة الحوضية' },
          { en: 'Laterally towards the right hip', ar: 'جانبياً باتجاه الورك الأيمن' }
        ],
        correctAnswer: 'Caudoventrally (pointing backwards towards the perineum)',
        explanationEn: 'The feline penis is directed caudally; during erection and mating, it swings cranioventrally.',
        explanationAr: 'يوجه قضيب القط طبيعياً نحو الخلف ذيلياً، وينعطف إلى الأمام أثناء الانتصاب والتزاوج.'
      }
    ]
  },

  // Skeletal
  {
    speciesSlug: 'feline', systemSlug: 'skeletal', meshId: 'Mesh_Feline_Cranium',
    nameEn: 'Feline Skull with Large Orbits', nameAr: 'جمجمة القط ذات الأحداق الكبيرة', latinName: 'Cranium (Felis catus)',
    descriptionEn: 'Short, rounded skull with huge forward-facing orbits, prominent zygomatic arches, and specialized carnassial teeth.',
    descriptionAr: 'جمجمة قصيرة ومستديرة بمحاجر عينية ضخمة متجهة للأمام، وأقواس وجنية بارزة، وأضراس قاطعة للحوم.',
    bloodSupplyEn: 'Maxillary, external ophthalmic, and facial arteries.',
    bloodSupplyAr: 'الشرايين الفكية والعينية الخارجية والوجهية.',
    innervationEn: 'Trigeminal nerve (CN V: ophthalmic, maxillary, mandibular branches).',
    innervationAr: 'العصب ثلاثي التوائم (القحفي الخامس: الفروع العيني، الفكي، والفك السفلي).',
    clinicalPearlsEn: 'Felines have a cartilaginous/ligamentous orbital ligament rather than a complete bony orbit, allowing wide jaw opening for predation.',
    clinicalPearlsAr: 'يمتلك القط رباطاً حجاجياً ليفياً بدلاً من حجاج عظمي مغلق، مما يمنحه اتساعاً لحركة الفك أثناء الصيد.',
    focusCoordinates: { position: [0.65, 0.65, 0.65], target: [0, 0.55, 0.58] },
    geometry: { shape: 'sphere', position: [0, 0.55, 0.58], rotation: [0.2, 0, 0], scale: [0.14, 0.12, 0.16], color: '#f3f4f6', roughness: 0.2, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Which teeth constitute the feline carnassial (shearing) pair?',
        questionAr: 'أي أسنان تشكل زوج الأضراس القاطعة (Carnassial teeth) في فم القطط؟',
        options: [
          { en: 'Upper 4th premolar (PM4) and lower 1st molar (M1)', ar: 'الضاحك العلوي الرابع (PM4) والطاحن السفلي الأول (M1)' },
          { en: 'Upper canine and lower canine', ar: 'الناب العلوي والناب السفلي' },
          { en: 'Upper 1st incisor and lower 1st incisor', ar: 'القاطع العلوي الأول والقاطع السفلي الأول' },
          { en: 'Upper 1st molar and lower 3rd molar', ar: 'الطاحن العلوي الأول والطاحن السفلي الثالث' }
        ],
        correctAnswer: 'Upper 4th premolar (PM4) and lower 1st molar (M1)',
        explanationEn: 'In carnivores, the upper fourth premolar and lower first molar oppose each other to shear flesh like scissors.',
        explanationAr: 'يعمل الضاحك العلوي الرابع مع الطاحن السفلي الأول كالمقص المتطابق لتقطيع اللحوم والأنسجة.'
      },
      {
        questionEn: 'What is the complete adult dental formula of the domestic cat?',
        questionAr: 'ما هي المعادلة السنية الدائمة الكاملة للقط الأليف البالغ؟',
        options: [
          { en: '2 x (I 3/3, C 1/1, P 3/2, M 1/1) = 30 teeth', ar: '2 × (ق 3/3، ن 1/1، ض 3/2، ط 1/1) = 30 سناً' },
          { en: '2 x (I 3/3, C 1/1, P 4/4, M 2/3) = 42 teeth', ar: '2 × (ق 3/3، ن 1/1، ض 4/4، ط 2/3) = 42 سناً' },
          { en: '2 x (I 0/4, C 0/0, P 3/3, M 3/3) = 32 teeth', ar: '2 × (ق 0/4، ن 0/0، ض 3/3، ط 3/3) = 32 سناً' },
          { en: '2 x (I 3/3, C 1/1, P 3/3, M 3/3) = 40 teeth', ar: '2 × (ق 3/3، ن 1/1، ض 3/3، ط 3/3) = 40 سناً' },
        ],
        correctAnswer: '2 x (I 3/3, C 1/1, P 3/2, M 1/1) = 30 teeth',
        explanationEn: 'Cats have 30 permanent teeth, missing the upper first premolar and lower first and second premolars.',
        explanationAr: 'يمتلك القط البالغ 30 سناً دائماً، حيث تغيب الضواحك العلوية الأولى والسفلية الأولى والثانية.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'skeletal', meshId: 'Mesh_Feline_Clavicula',
    nameEn: 'Feline Clavicle (Vestigial)', nameAr: 'ترقوة القط (الضامرة السائبة)', latinName: 'Clavicula (Felis catus)',
    descriptionEn: 'Small, curved rudimentary bone embedded freely in the brachiocephalicus muscle without articulating with skeleton.',
    descriptionAr: 'عظم ضامر صغير مقوس يستقر حراً داخل عضلة العضد الرأسية دون أي مفصل عظمي مع الهيكل.',
    bloodSupplyEn: 'Branches of superficial cervical artery.',
    bloodSupplyAr: 'فروع الشريان العنقي السطحي.',
    innervationEn: 'Cervical spinal nerve cutaneous branches.',
    innervationAr: 'الفروع الجلدية للأعصاب الشوكية العنقية.',
    clinicalPearlsEn: 'Readily seen as a floating thin bone cranial to shoulder on lateral radiographs; must not be mistaken for a foreign body or fracture fragment.',
    clinicalPearlsAr: 'تظهر كعظم رفيع طافٍ أمام الكتف في الأشعة السينية ويجب عدم الخلط بينها وبين جسم غريب أو شظية كسر.',
    focusCoordinates: { position: [0.55, 0.52, 0.38], target: [0.1, 0.45, 0.35] },
    geometry: { shape: 'cylinder', position: [0.1, 0.45, 0.35], rotation: [0.5, 0.5, 0], scale: [0.008, 0.08, 0.008], color: '#e5e7eb', roughness: 0.3, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'How does the feline clavicle articulate with the axial or appendicular skeleton?',
        questionAr: 'كيف تتمفصل ترقوة القط مع الهيكل المحوري أو الطرفي؟',
        options: [
          { en: 'It does not articulate with any bone; it floats freely suspended inside the brachiocephalicus muscle', ar: 'لا تتمفصل مع أي عظم؛ بل تطفو حرة معلقة داخل عضلة العضد الرأسية' },
          { en: 'Forms a rigid synovial joint with the acromion and manubrium', ar: 'تشكل مفصلاً زلالياً صلباً مع الأخرم وقبضة القص' },
          { en: 'Fuses solidly with the 1st rib', ar: 'تلتحم عظمياً مع الضلع الأول' },
          { en: 'Forms a suture joint with the scapular spine', ar: 'تشكل درزاً مع شوكة لوح الكتف' }
        ],
        correctAnswer: 'It does not articulate with any bone; it floats freely suspended inside the brachiocephalicus muscle',
        explanationEn: 'The feline clavicle is a vestigial clavicular intersection embedded within myofibers, permitting high shoulder elasticity.',
        explanationAr: 'ترقوة القط أثرية وتطفو ضمن النسيج العضلي مما يمنح حزام الكتف مرونة حركية هائلة أثناء القفز والركض.'
      },
      {
        questionEn: 'What radiographic artifact can the feline clavicle cause on a lateral view of the thoracic inlet?',
        questionAr: 'ما هو التفسير الخاطئ الذي قد تسببه ترقوة القط في الصورة الجانبية لمدخل الصدر؟',
        options: [
          { en: 'Misinterpreted as an ingested linear or metallic radiopaque foreign body', ar: 'تفسيرها خطأً كجسم غريب عتيم مبتلع أو عظمة شوكية في المريء' },
          { en: 'Misinterpreted as pneumothorax', ar: 'تفسيرها خطأً كاسترواح صدري' },
          { en: 'Misinterpreted as cardiomegaly', ar: 'تفسيرها خطأً كتضخم في عضلة القلب' },
          { en: 'Misinterpreted as hip dysplasia', ar: 'تفسيرها خطأً كخلل تنسج الورك' }
        ],
        correctAnswer: 'Misinterpreted as an ingested linear or metallic radiopaque foreign body',
        explanationEn: 'Its thin curved radiopacity cranial to the scapulohumeral joint is frequently mistaken by novices for an esophageal foreign body.',
        explanationAr: 'عتامتها العظمية المنحنية قحفياً لمفصل الكتف تجعل قليلي الخبرة يظنونها جسماً غريباً مستقراً في المريء.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'skeletal', meshId: 'Mesh_Feline_ColumnaVertebralis',
    nameEn: 'Vertebral Column & Tail', nameAr: 'العمود الفقري والذيل المرن', latinName: 'Columna vertebralis (Felis catus)',
    descriptionEn: 'Extremely flexible spinal column: C7, T13, L7, S3, Cd20-24, enabling supreme agility and the aerial righting reflex.',
    descriptionAr: 'عمود فقري شديد المرونة: 7 عنقية، 13 صدرية، 7 قطنية، 3 عجزية، و20-24 عصعصية تدعم رد الفعل الانعكاسي للتعديل أثناء السقوط.',
    bloodSupplyEn: 'Intercostal, lumbar, and median caudal (coccygeal) arteries.',
    bloodSupplyAr: 'الشرايين الوربية والقطنية والشريان الذيلي (العصعصي) المتوسط.',
    innervationEn: 'Spinal dorsal branches and caudal nerves.',
    innervationAr: 'الفروع الظهرية للأعصاب الشوكية والأعصاب الذيلية.',
    clinicalPearlsEn: 'Large flexible intervertebral discs allow cats to rotate their spine up to 180 degrees during falls to land on their paws ("righting reflex").',
    clinicalPearlsAr: 'الأقراص بين الفقرية المرنة تمكن القط من لف عموده الفقري 180 درجة في الهواء للهبوط على قوائمه الأربع.',
    focusCoordinates: { position: [0.85, 0.65, 0], target: [0, 0.52, 0] },
    geometry: { shape: 'cylinder', position: [0, 0.52, 0], rotation: [0, 0, Math.PI / 2], scale: [0.03, 0.85, 0.03], color: '#f5f5f4', roughness: 0.25, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'What is the standard feline vertebral formula?',
        questionAr: 'ما هي الصيغة الفقرية القياسية للقطط الأليفة؟',
        options: [
          { en: 'C7, T13, L7, S3, Cd20-24', ar: '7 عنقية، 13 صدرية، 7 قطنية، 3 عجزية، 20-24 ذيلية' },
          { en: 'C7, T18, L6, S5, Cd15-20', ar: '7 عنقية، 18 صدرية، 6 قطنية، 5 عجزية، 15-20 ذيلية' },
          { en: 'C7, T13, L6, S5, Cd18-20', ar: '7 عنقية، 13 صدرية، 6 قطنية، 5 عجزية، 18-20 ذيلية' },
          { en: 'C14, T7, L7, S4, Cd10', ar: '14 عنقية، 7 صدرية، 7 قطنية، 4 عجزية، 10 ذيلية' }
        ],
        correctAnswer: 'C7, T13, L7, S3, Cd20-24',
        explanationEn: 'Domestic felines have 7 cervical, 13 thoracic, 7 lumbar, 3 fused sacral, and 20 to 24 caudal (coccygeal) vertebrae.',
        explanationAr: 'تمتلك القطط 7 عنقية، 13 صدرية، 7 قطنية، 3 عجزية ملتحمة، ونحو 20-24 فقرة ذيلية تعطي الذيل حركيته.'
      },
      {
        questionEn: 'Which neurological and biomechanical reflex enables a falling cat to land feet first?',
        questionAr: 'ما هو المنعكس العصبي والميكانيكي الحيوي الذي يمكن القط الساقط من الهبوط على أقدامه؟',
        options: [
          { en: 'Vestibular righting reflex mediated by flexible spine and vestibular system', ar: 'منعكس التعديل الدهليزي (Righting reflex) المدعوم بمرونة العمود الفقري والجهاز الدهليزي' },
          { en: 'Panniculus reflex', ar: 'المنعكس الجلدي (الهدبي)' },
          { en: 'Patellar tendon reflex', ar: 'منعكس وتر الرضفة' },
          { en: 'Crossed extensor reflex', ar: 'منعكس البسط المتصالب' }
        ],
        correctAnswer: 'Vestibular righting reflex mediated by flexible spine and vestibular system',
        explanationEn: 'The vestibular system detects orientation and initiates rotational realignment of the head, forequarters, and hindquarters sequentially.',
        explanationAr: 'يدرك الجهاز الدهليزي اتجاه السقوط ويدير الرأس ثم الصدر فالطرف الخلفي بفضل ليونة العمود الفقري الاستثنائية.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'skeletal', meshId: 'Mesh_Feline_PhalanxDistalis',
    nameEn: 'Retractile Distal Phalanges & Claws', nameAr: 'السلاميات القاصية والمخالب القابلة للسحب', latinName: 'Phalanx distalis et falcula',
    descriptionEn: 'Ungual process supporting sharp keratinous claws, maintained in retracted position by dorsal elastic ligaments.',
    descriptionAr: 'الناتئ الظفري الحامل للمخالب الكيراتينية الحادة، المثبتة في وضع السحب بواسطة الأربطة المرنة الظهرية.',
    bloodSupplyEn: 'Common digital arteries and dorsal/palmar digital branches.',
    bloodSupplyAr: 'الشرايين الإصبعية المشتركة والفروع الإصبعية الظهرية والراحية.',
    innervationEn: 'Palmar/plantar digital nerves derived from median, ulnar, and tibial nerves.',
    innervationAr: 'الأعصاب الإصبعية الراحية والأخمصية المشتقة من الأعصاب المتوسط والزندي والظنبوبي.',
    clinicalPearlsEn: 'Declawing (onychectomy) requires amputating the entire distal phalanx (P3); retaining the ungual crest causes claw regrowth and abscessation.',
    clinicalPearlsAr: 'استئصال المخالب (Onychectomy) يتطلب بتر كامل السلامية الثالثة P3؛ ترك العرف الظفري يسبب نمو المخلب مجدداً وتشكل خراجات.',
    focusCoordinates: { position: [0.45, 0.15, 0.35], target: [0.15, 0.05, 0.32] },
    geometry: { shape: 'cone', position: [0.15, 0.05, 0.32], rotation: [-Math.PI / 4, 0, 0], scale: [0.02, 0.06, 0.02], color: '#fef3c7', roughness: 0.3, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which anatomical structure keeps the feline claw passively retracted in its dorsal sheath during normal locomotion?',
        questionAr: 'ما هو التركيب التشريحي الذي يبقي مخلب القط مسحوباً سلبياً داخل غمده الظهري أثناء المشي العادي؟',
        options: [
          { en: 'Dorsal elastic ligaments (ligamenta elastica dorsalia)', ar: 'الأربطة المرنة الظهرية (Ligamenta elastica dorsalia)' },
          { en: 'Deep digital flexor tendon', ar: 'وتر العضلة القابضة العميقة للأصابع' },
          { en: 'Superficial digital flexor tendon', ar: 'وتر العضلة القابضة السطحية للأصابع' },
          { en: 'Interosseous muscle', ar: 'العضلة بين العظام' }
        ],
        correctAnswer: 'Dorsal elastic ligaments (ligamenta elastica dorsalia)',
        explanationEn: 'The claws are held passively retracted by dorsal elastic ligaments; active protrusion requires deep digital flexor contraction.',
        explanationAr: 'تثبت المخالب مسحوبة طبيعياً بفعل الأربطة المرنة الظهرية، وبروزها يحتاج تقلصاً إرادياً للعضلة القابضة العميقة.'
      },
      {
        questionEn: 'What anatomical bone is removed during an onychectomy (declaw procedure)?',
        questionAr: 'أي عظم تشريحي يتم بتره بالكامل أثناء جراحة استئصال المخالب (Onychectomy) في القطط؟',
        options: [
          { en: 'The entire distal phalanx (P3 / third phalanx)', ar: 'كامل السلامية القاصية الثالثة (P3)' },
          { en: 'Only the distal 1 millimeter of the claw horn', ar: 'المليمتر الخارجي فقط من قرن المخلب' },
          { en: 'The proximal phalanx (P1)', ar: 'السلامية الدانية الأولى (P1)' },
          { en: 'The metacarpal bone head', ar: 'رأس عظم سنع اليد' }
        ],
        correctAnswer: 'The entire distal phalanx (P3 / third phalanx)',
        explanationEn: 'Declawing is a surgical amputation of the third phalanx at the distal interphalangeal joint.',
        explanationAr: 'استئصال المخالب هو بتر جراحي عظمي كامل للسلامية الثالثة P3 عند المفصل بين السلاميات القاصي.'
      }
    ]
  },

  // Muscular
  {
    speciesSlug: 'feline', systemSlug: 'muscular', meshId: 'Mesh_Feline_Brachiocephalicus',
    nameEn: 'Brachiocephalicus Muscle', nameAr: 'العضلة العضدية الرأسية', latinName: 'Musculus brachiocephalicus (Felis catus)',
    descriptionEn: 'Prominent superficial strap muscle extending from head/neck to humerus, divided into cleidobrachialis and cleidocephalicus.',
    descriptionAr: 'عضلة شريطية سطحية بارزة تمتد من الرأس والعنق إلى العضد، مقسومة بالترقوة الأثرية إلى جزأين.',
    bloodSupplyEn: 'Superficial cervical artery and collateral branches.',
    bloodSupplyAr: 'الشريان العنقي السطحي وفروعه الجانبية.',
    innervationEn: 'Accessory nerve (CN XI) and cervical spinal nerves.',
    innervationAr: 'العصب القحفي الإضافي الحادي عشر والأعصاب الشوكية العنقية.',
    clinicalPearlsEn: 'Advances the feline forelimb and pulls head down or sideways; contains the embedded floating clavicle.',
    clinicalPearlsAr: 'تسحب الطرف الأمامي للقط للأمام وتثني الرأس جانبياً، وتضم في طياتها الترقوة العائمة.',
    focusCoordinates: { position: [0.65, 0.55, 0.45], target: [0.08, 0.48, 0.4] },
    geometry: { shape: 'cylinder', position: [0.08, 0.48, 0.4], rotation: [0.6, 0, 0.2], scale: [0.04, 0.35, 0.04], color: '#be123c', roughness: 0.6, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which structure divides the brachiocephalicus muscle into cleidobrachialis and cleidocephalicus portions?',
        questionAr: 'ما هو التركيب الذي يقسم العضلة العضدية الرأسية إلى جزأين (عضدي ترقوي ورأسي ترقوي)؟',
        options: [
          { en: 'The vestigial clavicle (clavicular intersection)', ar: 'الترقوة الأثرية (التقاطع الترقوي)' },
          { en: 'The scapular spine', ar: 'شوكة لوح الكتف' },
          { en: 'The hyoid apparatus', ar: 'الجهاز اللامي' },
          { en: 'The thyroid cartilage', ar: 'غضروف الدرقية' }
        ],
        correctAnswer: 'The vestigial clavicle (clavicular intersection)',
        explanationEn: 'The rudimentary clavicle and its fibrous intersection separate the cleidobrachialis from the cranial cleidocephalicus.',
        explanationAr: 'تقسم الترقوة الأثرية الضامرة وأليافها العضلة إلى جزء قحفي رأسي وجزء ذيلي عضدي.'
      },
      {
        questionEn: 'What is the primary action of the brachiocephalicus muscle when the feline limb is free of ground contact?',
        questionAr: 'ما هو الفعل الأساسي للعضلة العضدية الرأسية عندما يكون طرف القط الأمامي حراً في الهواء؟',
        options: [
          { en: 'Protraction (advancement) and extension of the shoulder and forelimb', ar: 'تقديم وبسط مفصل الكتف والطرف الأمامي إلى الأمام' },
          { en: 'Retraction of the forelimb backwards', ar: 'سحب الطرف الأمامي إلى الخلف' },
          { en: 'Pronation of the manus only', ar: 'كب بطن اليد فقط' },
          { en: 'Depression of the scapular spine', ar: 'خفض شوكة الكتف' }
        ],
        correctAnswer: 'Protraction (advancement) and extension of the shoulder and forelimb',
        explanationEn: 'Contraction pulls the humerus forward, swinging the forelimb into the next stride cycle.',
        explanationAr: 'يؤدي تقلصها إلى سحب عظم العضد نحو الأمام ممداً القائمة إلى الأمام للخطوة التالية.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'muscular', meshId: 'Mesh_Feline_LatissimusDorsi',
    nameEn: 'Latissimus Dorsi', nameAr: 'العضلة العريضة الظهرية', latinName: 'Musculus latissimus dorsi',
    descriptionEn: 'Broad triangular muscle sheet spanning from thoracolumbar fascia to medial teres major tuberosity of humerus.',
    descriptionAr: 'صفيحة عضلية مثلثة عريضة تمتد من اللفافة الصدرية القطنية إلى حديبة العضد الإنسية.',
    bloodSupplyEn: 'Thoracodorsal artery (branch of subscapular artery).',
    bloodSupplyAr: 'الشريان الصدري الظهري (فرع من الشريان تحت الكتف).',
    innervationEn: 'Thoracodorsal nerve (from brachial plexus, C7-C8).',
    innervationAr: 'العصب الصدري الظهري (من الضفيرة العضدية، C7-C8).',
    clinicalPearlsEn: 'Powerful limb retractor driving explosive sprinting; surgical flap used for reconstructive thoracic wall surgery.',
    clinicalPearlsAr: 'عضلة قوية لسحب القائمة للخلف في الركض الانفجاري؛ تستخدم كسديلة عضلية لترميم جدار الصدر جراحياً.',
    focusCoordinates: { position: [0.75, 0.55, 0.15], target: [0.05, 0.45, 0.15] },
    geometry: { shape: 'box', position: [0.05, 0.45, 0.15], rotation: [0, 0, 0.1], scale: [0.22, 0.05, 0.28], color: '#9f1239', roughness: 0.65, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which artery and nerve bundle specifically supply the latissimus dorsi muscle?',
        questionAr: 'أي حزمة شريانية وعصبية تغذي تحديداً العضلة العريضة الظهرية؟',
        options: [
          { en: 'Thoracodorsal artery and thoracodorsal nerve', ar: 'الشريان الصدري الظهري والعصب الصدري الظهري' },
          { en: 'Internal thoracic artery and phrenic nerve', ar: 'الشريان الصدري الداخلي والعصب الحجابي' },
          { en: 'Cranial gluteal vessels and nerve', ar: 'الأوعية والأعصاب الإليوية القحفية' },
          { en: 'Radial nerve and brachial artery', ar: 'العصب الكعبري والشريان العضدي' }
        ],
        correctAnswer: 'Thoracodorsal artery and thoracodorsal nerve',
        explanationEn: 'The thoracodorsal neurovascular bundle enters the deep surface of the latissimus dorsi muscle.',
        explanationAr: 'تدخل الحزمة الصدرية الظهرية العصبية الوعائية إلى السطح العميق للعضلة العريضة الظهرية.'
      },
      {
        questionEn: 'What is the mechanical action of the latissimus dorsi during feline climbing or jumping?',
        questionAr: 'ما هو العمل الميكانيكي للعضلة العريضة الظهرية أثناء تسلق أو قفز القطط؟',
        options: [
          { en: 'Pulls the limb caudally and flexes the shoulder joint, pulling the body forward when the foot is planted', ar: 'تسحب القائمة ذيلياً وتثني مفصل الكتف مما يرفع ويدفع الجسم للأمام عند ثبات اليد' },
          { en: 'Extends the carpal digits only', ar: 'تبسط أصابع الرسغ فقط' },
          { en: 'Rotates the neck upward', ar: 'تدير الرقبة للأعلى' },
          { en: 'Compresses the abdominal viscera', ar: 'تضغط الأحشاء البطنية' }
        ],
        correctAnswer: 'Pulls the limb caudally and flexes the shoulder joint, pulling the body forward when the foot is planted',
        explanationEn: 'When the forepaw is bearing weight or grasping a surface, latissimus dorsi contracts to pull the entire feline trunk forward.',
        explanationAr: 'عندما تكون اليد ممسكة بسطح ما، يولد تقلص العضلة العريضة قوة سحب جبارة تدفع جذع القط للأمام وللأعلى.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'muscular', meshId: 'Mesh_Feline_GluteusMedius',
    nameEn: 'Middle Gluteal Muscle', nameAr: 'العضلة الإليوية المتوسطة', latinName: 'Musculus gluteus medius',
    descriptionEn: 'Massive hip extensor muscle occupying the gluteal surface of the feline ilium and inserting on greater trochanter.',
    descriptionAr: 'عضلة ضخمة باسطة للورك تشغل سطح الإلية في عظم الحرقفة وتنغرز في المدور الكبير لعظم الفخذ.',
    bloodSupplyEn: 'Cranial gluteal artery (from internal iliac).',
    bloodSupplyAr: 'الشريان الإليوي القحفي (من الحرقفي الداخلي).',
    innervationEn: 'Cranial gluteal nerve (sacral plexus, L6-S1).',
    innervationAr: 'العصب الإليوي القحفي (من الضفيرة العجزية L6-S1).',
    clinicalPearlsEn: 'Generates the massive propulsive thrust needed for feline vertical jumping up to six times body length.',
    clinicalPearlsAr: 'تولد قوة الدفع الهائلة اللازمة للقفز العمودي في القطط لما يصل إلى ستة أضعاف طول جسدها.',
    focusCoordinates: { position: [0.65, 0.48, -0.18], target: [0.1, 0.42, -0.15] },
    geometry: { shape: 'sphere', position: [0.1, 0.42, -0.15], rotation: [0.2, 0, 0], scale: [0.12, 0.1, 0.16], color: '#881337', roughness: 0.6, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Where does the feline middle gluteal muscle insert?',
        questionAr: 'أين تنغرز العضلة الإليوية المتوسطة في القط؟',
        options: [
          { en: 'Greater trochanter of the femur', ar: 'المدور الكبير لعظم الفخذ' },
          { en: 'Tibial tuberosity', ar: 'حديبة قصبة الساق (الظنبوب)' },
          { en: 'Tuber calcanei', ar: 'حديبة عظم العقب' },
          { en: 'Patellar ligament', ar: 'رباط الرضفة' }
        ],
        correctAnswer: 'Greater trochanter of the femur',
        explanationEn: 'The middle gluteal muscle inserts onto the greater trochanter of the femur, providing powerful hip extension.',
        explanationAr: 'ترتكز العضلة الإليوية المتوسطة على المدور الكبير للفخذ لتوفر عزماً قوياً لبسط مفصل الفخذ.'
      },
      {
        questionEn: 'Which nerve innervates both the middle gluteal and deep gluteal muscles?',
        questionAr: 'أي عصب يغذي كلاً من العضلة الإليوية المتوسطة والعضلة الإليوية العميقة؟',
        options: [
          { en: 'Cranial gluteal nerve', ar: 'العصب الإليوي القحفي' },
          { en: 'Caudal gluteal nerve', ar: 'العصب الإليوي الذيلي' },
          { en: 'Femoral nerve', ar: 'العصب الفخذي' },
          { en: 'Obturator nerve', ar: 'العصب السدادي' }
        ],
        correctAnswer: 'Cranial gluteal nerve',
        explanationEn: 'The cranial gluteal nerve innervates middle gluteal, deep gluteal, and tensor fasciae latae muscles.',
        explanationAr: 'يغذي العصب الإليوي القحفي العضلات الإليوية المتوسطة والعميقة وموترة اللفافة العريضة.'
      }
    ]
  },
  {
    speciesSlug: 'feline', systemSlug: 'muscular', meshId: 'Mesh_Feline_Gastrocnemius',
    nameEn: 'Gastrocnemius & Common Calcaneal Tendon', nameAr: 'العضلة التوأمية الساقية ووتر العرقوب المشترك', latinName: 'Musculus gastrocnemius et tendo calcaneus',
    descriptionEn: 'Two-headed muscular powerhouse (lateral and medial heads) attaching to calcaneus via Achilles tendon.',
    descriptionAr: 'عضلة قوية ذات رأسين (وحشي وإنسي) ترتكز على عظم العقب عبر وتر أخيل المشترك.',
    bloodSupplyEn: 'Distal caudal femoral artery and popliteal artery.',
    bloodSupplyAr: 'الشريان الفخذي الذيلي القاصي والشريان المأبضي.',
    innervationEn: 'Tibial nerve (continuation of sciatic nerve).',
    innervationAr: 'العصب الظنبوبي (امتداد العصب الوركي).',
    clinicalPearlsEn: 'Rupture of common calcaneal tendon causes dropped hock with intact flexed digits (plantigrade stance).',
    clinicalPearlsAr: 'تمزق وتر العرقوب المشترك يسبب هبوط مفصل العرقوب ومشي كفي منخفض مع بقاء الأصابع منحنية.',
    focusCoordinates: { position: [0.55, 0.28, -0.28], target: [0.12, 0.18, -0.25] },
    geometry: { shape: 'cylinder', position: [0.12, 0.18, -0.25], rotation: [0.3, 0, 0], scale: [0.035, 0.22, 0.035], color: '#b91c1c', roughness: 0.55, metalness: 0 },
    quizQuestions: [
      {
        questionEn: 'Which posture is observed in a cat with complete rupture of the common calcaneal (Achilles) tendon?',
        questionAr: 'ما هي الوضعية المشاهدة في قط يعاني من تمزق كامل في وتر العرقوب المشترك (وتر أخيل)؟',
        options: [
          { en: 'Dropped hock (plantigrade posture) with the hock touching or close to the ground', ar: 'هبوط مفصل العرقوب (مشية كفية ملامسة للأرض) مع انخفاض زاوية المفصل' },
          { en: 'Hyperextended stifle with inability to bend the knee', ar: 'فرط بسط صلب للركبة مع عجز عن ثني المفصل' },
          { en: 'Permanent knuckling of forepaws', ar: 'انثناء دائم لكفوف الأطراف الأمامية' },
          { en: 'Complete paralysis of the tail only', ar: 'شلل كامل في الذيل فقط' }
        ],
        correctAnswer: 'Dropped hock (plantigrade posture) with the hock touching or close to the ground',
        explanationEn: 'Loss of tensile calcaneal connection prevents hock extension during weight bearing, dropping the hock to the ground.',
        explanationAr: 'فقدان شد وتر العرقوب يمنع تثبيت المفصل مبسوطاً أثناء حمل الوزن مما يسقطه أرضاً في وقفة كفية.'
      },
      {
        questionEn: 'Which nerve innervates the gastrocnemius muscle in the feline pelvic limb?',
        questionAr: 'أي عصب يغذي العضلة التوأمية الساقية (Gastrocnemius) في الطرف الخلفي للقط؟',
        options: [
          { en: 'Tibial nerve', ar: 'العصب الظنبوبي (Tibial nerve)' },
          { en: 'Common fibular (peroneal) nerve', ar: 'العصب الشظوي المشترك' },
          { en: 'Femoral nerve', ar: 'العصب الفخذي' },
          { en: 'Obturator nerve', ar: 'العصب السدادي' }
        ],
        correctAnswer: 'Tibial nerve',
        explanationEn: 'The tibial nerve supplies all caudal crural muscles that extend the hock and flex the digits.',
        explanationAr: 'يغذي العصب الظنبوبي العضلات الساقية الخلفية الباسطة للعرقوب والقابضة للأصابع.'
      }
    ]
  }
];

fs.writeFileSync(path.join(__dirname, 'data-feline.js'), 'module.exports = ' + JSON.stringify(felineOrgans, null, 2) + ';\n');
console.log('Successfully generated scripts/data-feline.js with 28 organs and 56 quiz questions!');
