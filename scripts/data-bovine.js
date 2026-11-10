// scripts/data-bovine.js
module.exports = [
  // Cardiovascular
  {
    speciesSlug: 'bovine',
    systemSlug: 'cardiovascular',
    meshId: 'Mesh_Bovine_Cor',
    nameEn: 'Bovine Conical Heart',
    nameAr: 'قلب الأبقار المخروطي',
    latinName: 'Cor (Bos taurus)',
    descriptionEn: 'Conical four-chambered heart weighing 2.5-3.5 kg, encased in a fibrous pericardium anchored directly to the sternum by two sternopericardiac ligaments.',
    descriptionAr: 'قلب مخروطي رباعي التجاويف يزن 2.5-3.5 كجم داخل غشاء تامور ليفي مثبت بعظم القص برباطين قصيين تأموريين.',
    bloodSupplyEn: 'Left and right coronary arteries arising from aortic sinuses; left coronary dominance.',
    bloodSupplyAr: 'الشريانان التاجيان الأيمن والأيسر مع سيادة الشريان التاجي الأيسر.',
    innervationEn: 'Cardiac autonomic plexus (vagal and sympathetic thoracic branches).',
    innervationAr: 'الضفيرة القلبية الذاتية (المبهمية والودية الصدرية).',
    clinicalPearlsEn: 'Traumatic Pericarditis ("Hardware Disease"): Foreign bodies piercing the reticulum enter the ventral pericardium, producing muffled splashing heart sounds.',
    clinicalPearlsAr: 'التهاب التامور الرضحي (مرض السلك المعدني): الأجسام المعدنية تخترق الشبكية لكيس القلب مسببة أصوات خض مضطربة مكتومة.',
    focusCoordinates: { position: [1.1, 0.6, 0.35], target: [0.1, 0.45, 0.35] },
    geometry: { shape: 'cone', position: [0.1, 0.45, 0.35], rotation: [Math.PI, 0, 0.15], scale: [0.38, 0.52, 0.38], color: '#dc2626', roughness: 0.32, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'How is the bovine pericardial sac mechanically anchored to the thoracic floor?',
        questionAr: 'كيف يثبت كيس التامور ميكانيكياً في قاع الصدر في الأبقار؟',
        options: [
          { en: 'By two strong sternopericardiac ligaments (Ligamenta sternopericardiaca)', ar: 'برباطين قصيين تأموريين قويين' },
          { en: 'By a single phrenicopericardiac ligament to diaphragm', ar: 'برباط حجابي تأموري مفرد' },
          { en: 'It floats freely with no ligamentous attachment', ar: 'يسبح حراً دون روابط' },
          { en: 'Anchored directly to the ribs by costal cartilage', ar: 'مثبت بالأضلاع مباشرة' }
        ],
        correctAnswer: 'By two strong sternopericardiac ligaments (Ligamenta sternopericardiaca)',
        explanationEn: 'Ruminants have two distinct sternopericardiac ligaments attaching the pericardium to the dorsal surface of the sternum.',
        explanationAr: 'تمتلك المجترات رباطين قصيين تأموريين يثبتان غشاء التامور بقوة على الوجه الظهري لعظم القص.'
      },
      {
        questionEn: 'In bovine traumatic reticulopericarditis, auscultation typically reveals what characteristic sound?',
        questionAr: 'في التهاب التامور والشبكية الرضحي بالأبقار، يكشف التسمع عن أي صوت مميز؟',
        options: [
          { en: 'Splashing fluid / "washing machine" murmur with muffled heart tones', ar: 'صوت خض السوائل كالغسالة مع كتم لأصوات القلب' },
          { en: 'High-pitched musical systolic click', ar: 'طقطقة انقباضية موسيقية' },
          { en: 'Gallop rhythm with physiological S3', ar: 'نظم خبب فسيولوجي' },
          { en: 'Continuous machinery murmur of PDA', ar: 'نفخة الآلة المستمرة' }
        ],
        correctAnswer: 'Splashing fluid / "washing machine" murmur with muffled heart tones',
        explanationEn: 'Gas-producing bacteria and fibrinous exudate in the pericardial sac create a churning, splashing sound as the heart beats.',
        explanationAr: 'تنتج البكتيريا غازات وسوائل قيحية في كيس التامور تحدث صوت خضيش كالغسالة مع خفقان القلب.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'cardiovascular',
    meshId: 'Mesh_Bovine_OssaCordis',
    nameEn: 'Bovine Heart Bones (Ossa Cordis)',
    nameAr: 'عظمتا القلب في الأبقار (Ossa Cordis)',
    latinName: 'Ossa cordis (Os cordis dextrum et sinistrum)',
    descriptionEn: 'Two true splanchnic heterotopic bones (right larger, left smaller) embedded in the fibrous cardiac ring (anulus fibrosus) supporting the aortic valve.',
    descriptionAr: 'عظمتان حشويتان حقيقيتان (اليمنى أكبر واليسرى أصغر) مستقرتان في الحلقة الليفية القلبية لدعم الصمام الأبهري.',
    bloodSupplyEn: 'Microvascular capillaries from aortic root coronary base.',
    bloodSupplyAr: 'شعيرات دموية دقيقة من قاعدة الشرايين التاجية في جذر الأبهر.',
    innervationEn: 'None (structural skeletal support of fibrous cardiac skeleton).',
    innervationAr: 'لا يوجد (دعامة ميكانيكية هيكلية للهيكل الليفي للقلب).',
    clinicalPearlsEn: 'The os cordis serves as a rigid skeletal foundation preventing aortic orifice distortion during the massive systolic pressure surges of large ruminants.',
    clinicalPearlsAr: 'تعمل عظمتا القلب كقاعدة هيكلية صلبة تمنع تشوه الفوهة الأبهرية أثناء طفرات الضغط الانقباضي الهائلة للأبقار.',
    focusCoordinates: { position: [0.8, 0.7, 0.4], target: [0.08, 0.55, 0.35] },
    geometry: { shape: 'box', position: [0.08, 0.55, 0.35], rotation: [0.2, 0.4, 0], scale: [0.08, 0.12, 0.06], color: '#f8fafc', roughness: 0.6, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Where are the ossa cordis situated in the bovine cardiovascular system?',
        questionAr: 'أين تستقر عظمتا القلب (Ossa cordis) في جهاز الدوران بالأبقار؟',
        options: [
          { en: 'In the fibrous base (anulus fibrosus) surrounding the aortic valve', ar: 'في القاعدة الليفية (الحلقة الليفية) المحيطة بالصمام الأبهري' },
          { en: 'Inside the apex of the right ventricle', ar: 'داخل قمة البطين الأيمن' },
          { en: 'Within the interatrial septum', ar: 'داخل الحاجز بين الأذينين' },
          { en: 'In the wall of the pulmonary trunk', ar: 'في جدار الجذع الرئوي' }
        ],
        correctAnswer: 'In the fibrous base (anulus fibrosus) surrounding the aortic valve',
        explanationEn: 'The ossa cordis develop in the fibrous trigones adjacent to the aortic valve ring to give mechanical rigidity to the cardiac skeleton.',
        explanationAr: 'تتكون عظمتا القلب في المثلثين الليفيين الملاصقين لحلقة الصمام الأبهري لتوفير الصلابة الميكانيكية للهيكل القلبي.'
      },
      {
        questionEn: 'Which of the two ossa cordis in cattle is larger and forms earlier in development?',
        questionAr: 'أي من عظمتا القلب في الأبقار هي الأكبر وتتشكل أولاً أثناء النمو؟',
        options: [
          { en: 'Right os cordis (Os cordis dextrum)', ar: 'عظمة القلب اليمنى (Os cordis dextrum)' },
          { en: 'Left os cordis', ar: 'عظمة القلب اليسرى' },
          { en: 'Both are completely equal in size', ar: 'كلاهما متطابقتان تماماً في الحجم' },
          { en: 'Neither exists before old age', ar: 'لا تتكون أي منهما إلا في الشيخوخة' }
        ],
        correctAnswer: 'Right os cordis (Os cordis dextrum)',
        explanationEn: 'The right os cordis is significantly larger (up to 4-5 cm) and ossifies earlier, while the left is smaller and may remain cartilaginous.',
        explanationAr: 'عظمة القلب اليمنى أكبر حجماً (تصل لـ 4-5 سم) وتتعظم مبكراً بينما اليسرى أصغر وقد تبقى غضروفية.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'cardiovascular',
    meshId: 'Mesh_Bovine_Aorta',
    nameEn: 'Bovine Aorta & Brachiocephalic Trunk',
    nameAr: 'أبهر الأبقار والجذع العضدي الرأسي',
    latinName: 'Aorta et Truncus brachiocephalicus',
    descriptionEn: 'Heavy elastic arterial conduit; the brachiocephalic trunk is the single massive arterial branch leaving the aortic arch in cattle.',
    descriptionAr: 'قناة شريانية مرنة سميكة؛ ويعد الجذع العضدي الرأسي الفرع الشرياني الهائل الوحيد المتفرع من قوس الأبهر في الأبقار.',
    bloodSupplyEn: 'High-pressure systemic outflow delivering 60-80 L/min of blood.',
    bloodSupplyAr: 'المجرى الجهازي عالي الضغط يضخ 60-80 لتر/دقيقة من الدم.',
    innervationEn: 'Aortic baroreceptor plexus via vagus nerve (CN X).',
    innervationAr: 'ضفيرة مستقبلات الضغط الأبهرية عبر العصب المبهم.',
    clinicalPearlsEn: 'Cattle have only one branch arising from the aortic arch (Truncus brachiocephalicus), from which both subclavian and bicarotid trunks arise.',
    clinicalPearlsAr: 'تتميز الأبقار بوجود فرع شرياني وحيد من قوس الأبهر (الجذع العضدي الرأسي) تتفرع منه الشرايين تحت الترقوية والسباتية.',
    focusCoordinates: { position: [1.0, 0.9, 0.3], target: [0, 0.75, 0.25] },
    geometry: { shape: 'torus', position: [0, 0.72, 0.28], rotation: [Math.PI / 2, 0.25, 0], scale: [0.32, 0.32, 0.35], color: '#b91c1c', roughness: 0.35, metalness: 0.15 },
    quizQuestions: [
      {
        questionEn: 'How many major arterial trunks branch directly from the aortic arch in ruminants?',
        questionAr: 'كم عدد الجذوع الشريانية الرئيسية المتفرعة مباشرة من قوس الأبهر في المجترات؟',
        options: [
          { en: 'Only one: the Brachiocephalic trunk (Truncus brachiocephalicus)', ar: 'فرع واحد فقط: الجذع العضدي الرأسي' },
          { en: 'Two: Brachiocephalic and Left subclavian', ar: 'فرعان: العضدي الرأسي وتحت الترقوي الأيسر' },
          { en: 'Three: Brachiocephalic, Left carotid, Left subclavian', ar: 'ثلاثة فروع كالإنسان' },
          { en: 'Four separate branches', ar: 'أربعة فروع منفصلة' }
        ],
        correctAnswer: 'Only one: the Brachiocephalic trunk (Truncus brachiocephalicus)',
        explanationEn: 'In ruminants and horses, the aortic arch gives off solely the brachiocephalic trunk; carnivores have two branches.',
        explanationAr: 'في المجترات والخيول يتفرع من قوس الأبهر الجذع العضدي الرأسي فقط، بينما اللواحم كالإنسان تعطي فرعين أو أكثر.'
      },
      {
        questionEn: 'Which artery is commonly palpated on the ventral surface of the tail in adult dairy cattle to assess pulse rate and quality?',
        questionAr: 'أي شريان يُجس روتينياً على الوجه البطني لذيل أبقار الحليب لتقييم معدل وقوة النبض؟',
        options: [
          { en: 'Middle caudal artery (Arteria caudalis mediana)', ar: 'الشريان الذيلي المتوسط (Arteria caudalis mediana)' },
          { en: 'Facial artery', ar: 'الشريان الوجهي' },
          { en: 'Femoral artery', ar: 'الشريان الفخذي' },
          { en: 'Radial artery', ar: 'الشريان الكعبري' }
        ],
        correctAnswer: 'Middle caudal artery (Arteria caudalis mediana)',
        explanationEn: 'The middle caudal (coccygeal) artery on the underside of the tail base is the primary site for pulse palpation in adult cattle.',
        explanationAr: 'الشريان الذيلي المتوسط أسفل قاعدة الذيل هو الموقع الميداني القياسي لجس نبض الأبقار البالغة.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'cardiovascular',
    meshId: 'Mesh_Bovine_VenaAzygosSinistra',
    nameEn: 'Bovine Left Azygos Vein',
    nameAr: 'الوريد الفرد الأيسر في الأبقار',
    latinName: 'Vena azygos sinistra (Vena hemiazygos)',
    descriptionEn: 'Bovine characteristic vein: Unlike horses and dogs, the left azygos vein develops fully in cattle and drains directly into the coronary sinus.',
    descriptionAr: 'وريد مميز للأبقار: بخلاف الخيل والكلاب يتطور الوريد الفرد الأيسر بالكامل في البقر ويصب مباشرة في الجيب التاجي للقلب.',
    bloodSupplyEn: 'Venous drainage from thoracic body wall and dorsal intercostal spaces.',
    bloodSupplyAr: 'التصريف الوريدي لجدار الصدر والأوردة الوربية الظهرية.',
    innervationEn: 'Sympathetic vasomotor autonomic innervation.',
    innervationAr: 'التعصيب الودي الحركي الوعائي.',
    clinicalPearlsEn: 'The left azygos vein terminates directly into the coronary sinus of the right atrium; a right azygos vein is small or missing in ruminants.',
    clinicalPearlsAr: 'يصب الوريد الفرد الأيسر مباشرة في الجيب التاجي للأذين الأيمن، ويكون الفرد الأيمن ضامراً أو غائباً في المجترات.',
    focusCoordinates: { position: [-1.0, 0.7, 0.3], target: [-0.12, 0.6, 0.2] },
    geometry: { shape: 'cylinder', position: [-0.12, 0.6, 0.2], rotation: [0.15, 0, 0], scale: [0.08, 0.65, 0.08], color: '#1e40af', roughness: 0.4, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Into which structure does the prominent left azygos vein terminate in cattle?',
        questionAr: 'في أي بنية يصب الوريد الفرد الأيسر البارز في الأبقار؟',
        options: [
          { en: 'Coronary sinus of the right atrium', ar: 'الجيب التاجي للأذين الأيمن' },
          { en: 'Cranial vena cava', ar: 'الوريد الأجوف الأمامي' },
          { en: 'Left atrium directly', ar: 'الأذين الأيسر مباشرة' },
          { en: 'Portal vein', ar: 'الوريد البابي' }
        ],
        correctAnswer: 'Coronary sinus of the right atrium',
        explanationEn: 'In ruminants and swine, the left azygos vein persists as the dominant vessel and empties into the coronary sinus.',
        explanationAr: 'في المجترات والخنازير يستمر الفرد الأيسر كوعاء رئيسي ويصب في الجيب التاجي للأذين الأيمن.'
      },
      {
        questionEn: 'How does the azygos venous system of cattle differ fundamentally from that of the horse and dog?',
        questionAr: 'كيف يختلف نظام الوريد الفرد في الأبقار جوهرياً عن نظام الخيول والكلاب؟',
        options: [
          { en: 'Cattle possess a dominant Left azygos vein; horses and dogs have a Right azygos vein', ar: 'تمتلك الأبقار وريداً فرداً أيسر سائداً؛ بينما الخيل والكلاب تمتلك فرداً أيمن' },
          { en: 'Cattle have no azygos vein at all', ar: 'الأبقار لا تمتلك أي وريد فرد' },
          { en: 'Horses drain into the portal vein', ar: 'خيول تصرف في الوريد البابي' },
          { en: 'Dogs have three symmetrical azygos veins', ar: 'الكلاب تمتلك 3 أوردة فرد' }
        ],
        correctAnswer: 'Cattle possess a dominant Left azygos vein; horses and dogs have a Right azygos vein',
        explanationEn: 'Embryological persistence of the left cardinal system results in a left azygos in ruminants, whereas the right persists in equids and carnivores.',
        explanationAr: 'استمرار الوريد الأصلي الأيسر جنينياً يعطي الفرد الأيسر في المجترات، بينما يستمر الأيمن في الخيل واللواحم.'
      }
    ]
  },
  // Digestive
  {
    speciesSlug: 'bovine',
    systemSlug: 'digestive',
    meshId: 'Mesh_Bovine_Rumen',
    nameEn: 'Bovine Rumen (Paunch)',
    nameAr: 'كرش الأبقار',
    latinName: 'Rumen (Bos taurus)',
    descriptionEn: 'Massive microbial anaerobic fermentation vat (150-200 L) occupying the entire left abdominal cavity, lined with keratinized papillae.',
    descriptionAr: 'خزان تخمير ميكروبي لاهوائي هائل (150-200 لتر) يشغل الجانب الأيسر بالكامل من البطن، مبطن بحليمات قرنية لامتصاص الأحماض الدهنية.',
    bloodSupplyEn: 'Right and left ruminal arteries from celiac artery; ruminal veins draining into hepatic portal vein.',
    bloodSupplyAr: 'الشريانان الكرشيان الأيمن والأيسر من الشريان الجوفي؛ والأوردة الكرشية تصب في الوريد البابي.',
    innervationEn: 'Dorsal and ventral vagal nerve trunks (CN X).',
    innervationAr: 'الجذعان المبهمان الظهري والبطني (العصب العاشر).',
    clinicalPearlsEn: 'Auscultated in the left paralumbar fossa: 1 to 3 primary mixing contractions per 2 minutes. Absence indicates ruminal atony/stasis.',
    clinicalPearlsAr: 'يُسمع في الخاصرة اليسرى: 1 إلى 3 حركات خلط كل دقيقتين، واختفاؤها يدل على خمول وشلل الكرش.',
    focusCoordinates: { position: [-1.6, 0.7, -0.3], target: [-0.4, 0.4, -0.2] },
    geometry: { shape: 'sphere', position: [-0.35, 0.45, -0.2], rotation: [0, 0, 0.1], scale: [0.65, 0.55, 0.75], color: '#ca8a04', roughness: 0.55, metalness: 0.08 },
    quizQuestions: [
      {
        questionEn: 'What is the normal contraction frequency of the bovine rumen in the left paralumbar fossa?',
        questionAr: 'ما هو التردد الطبيعي لتقلصات الكرش في الخاصرة القطنية اليسرى للبقر؟',
        options: [
          { en: '1 to 3 primary mixing cycles per 2 minutes', ar: '1 إلى 3 دورات خلط كل دقيقتين' },
          { en: '10 to 15 contractions per minute', ar: '10 إلى 15 تقلصاً بالدقيقة' },
          { en: '1 contraction every 10 minutes', ar: 'تقلص واحد كل 10 دقائق' },
          { en: 'Continuous non-pulsatile hum', ar: 'طنين مستمر غير متقطع' }
        ],
        correctAnswer: '1 to 3 primary mixing cycles per 2 minutes',
        explanationEn: 'Normal ruminal motility consists of rhythmic primary (mixing) and secondary (eructation) contractions occurring roughly once a minute.',
        explanationAr: 'تتكون حركات الكرش من دورات أولية للخلط وثانوية للتجشؤ تحدث بمعدل 1-3 تقلصات كل دقيقتين.'
      },
      {
        questionEn: 'Which volatile fatty acids (VFAs) produced by ruminal microbes provide up to 70-80% of the cow\'s energy demands?',
        questionAr: 'ما هي الأحماض الدهنية الطيارة (VFAs) التي تنتجها ميكروبات الكرش وتوفر 70-80% من طاقة البقرة؟',
        options: [
          { en: 'Acetate, Propionate, and Butyrate', ar: 'الأسيتات، البروبيونات، والبيوتيرات' },
          { en: 'Lactic acid and citric acid only', ar: 'حمض اللاكتيك والستريك فقط' },
          { en: 'Oleic acid and palmitic acid', ar: 'حمض الأوليك والبالتيميك' },
          { en: 'Formic acid and uric acid', ar: 'حمض الفورميك واليوريك' }
        ],
        correctAnswer: 'Acetate, Propionate, and Butyrate',
        explanationEn: 'Microbial fermentation breaks down cellulose into acetate, propionate (gluconeogenic), and butyrate absorbed through ruminal papillae.',
        explanationAr: 'يحول التخمر السليلوز إلى أسيتات وبروبيونات (مولد للجلوكوز) وبيوتيرات تمتص عبر حليمات الكرش.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'digestive',
    meshId: 'Mesh_Bovine_Reticulum',
    nameEn: 'Bovine Reticulum (Honeycomb)',
    nameAr: 'قلنسوة الأبقار (الشبكية)',
    latinName: 'Reticulum et Pericardium',
    descriptionEn: 'Second forestomach with honeycomb mucosal ridges, located directly against the diaphragm and pericardial sac.',
    descriptionAr: 'الحجرة الثانية ذات حواف تشبه قرص العسل تقع ملاصقة للحجاب الحاجز وغشاء التامور القلبي.',
    bloodSupplyEn: 'Reticular artery from left ruminal artery; reticular vein to portal vein.',
    bloodSupplyAr: 'الشريان الشبكي من الشريان الكرشي الأيسر والوريد الشبكي.',
    innervationEn: 'Ventral vagal trunk (CN X).',
    innervationAr: 'الجذع البطني للعصب المبهم.',
    clinicalPearlsEn: 'Traumatic Reticuloperitonitis (Hardware Disease): swallowed wire penetrates reticulum into the pericardium causing septic pericarditis.',
    clinicalPearlsAr: 'مرض السلك المعدني (TRP): ابتلاع الأسلاك يخترق الشبكية للحجاب الحاجز وغشاء القلب مسبباً التهاب التامور الصديدي.',
    focusCoordinates: { position: [-0.8, 0.5, 0.3], target: [-0.2, 0.3, 0.1] },
    geometry: { shape: 'sphere', position: [-0.15, 0.4, 0.25], rotation: [0.2, 0, 0], scale: [0.32, 0.35, 0.28], color: '#eab308', roughness: 0.5, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Why do swallowed dense metallic foreign bodies (nails, wire) settle preferentially in the bovine reticulum?',
        questionAr: 'لماذا تستقر الأجسام المعدنية الثقيلة المبتلعة (المسامير، الأسلاك) تفضيلياً في شبكية الأبقار؟',
        options: [
          { en: 'Low anatomical position immediately ventral to the cardia and heavy gravity settling', ar: 'الموقع البطني المنخفض أسفل فوهة الفؤاد مباشرة والترسيب بفعل الجاذبية' },
          { en: 'Magnetic secretions of the honeycomb ridges', ar: 'إفرازات مغناطيسية لحواف قرص العسل' },
          { en: 'Absence of an exit sphincter', ar: 'عدم وجود عاصرة خروج' },
          { en: 'Higher acid concentration', ar: 'ارتفاع حموضة الشبكية' }
        ],
        correctAnswer: 'Low anatomical position immediately ventral to the cardia and heavy gravity settling',
        explanationEn: 'Heavier foreign materials drop directly down from the terminating esophagus into the low ventral cranial sac of the reticulum.',
        explanationAr: 'تسقط المعادن الثقيلة من المريء مباشرة بفعل الجاذبية لتستقر في قاع قلنسوة الشبكية.'
      },
      {
        questionEn: 'What prophylactic management tool is routinely administered orally to dairy heifers to prevent hardware disease?',
        questionAr: 'ما هي الأداة الوقائية التي تُعطى عبر الفم روتينياً لبكور الأبقار لمنع مرض السلك المعدني؟',
        options: [
          { en: 'A permanent reticular magnet (ferrite or alnico magnet)', ar: 'مغناطيس الشبكية الدائم (Reticular magnet)' },
          { en: 'Oral antibiotic drenches daily', ar: 'تجرعات مضادات حيوية يومية' },
          { en: 'Lead sinkers', ar: 'أثقال رصاصية' },
          { en: 'Activated charcoal capsules', ar: 'كبسولات الفحم المنشط' }
        ],
        correctAnswer: 'A permanent reticular magnet (ferrite or alnico magnet)',
        explanationEn: 'The magnet falls into the reticulum and traps ferromagnetic wires and nails, preventing them from penetrating the wall.',
        explanationAr: 'يستقر المغناطيس في قاع الشبكية ويجذب الأسلاك والمسامير الحديدية مانعاً إياها من اختراق الجدار نحو القلب.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'digestive',
    meshId: 'Mesh_Bovine_Omasum',
    nameEn: 'Bovine Omasum (Manyplies / Bible)',
    nameAr: 'أم التلافيف في الأبقار (المعدة الورقية)',
    latinName: 'Omasum (Psalterium)',
    descriptionEn: 'Spherical third forestomach packed with over 100 thin longitudinal mucosal laminas resembling book leaves, absorbing 60-70% of water and electrolytes.',
    descriptionAr: 'الحجرة الثالثة الكروية المليئة بأكثر من 100 صفيحة مخاطية طولية تشبه صفحات الكتاب، تمتص 60-70% من الماء والأملاح.',
    bloodSupplyEn: 'Omaso-abomasal artery and left gastric branches of celiac artery.',
    bloodSupplyAr: 'الشريان الورقي الأنفحي والشريان المعدي الأيسر من الشريان الجوفي.',
    innervationEn: 'Dorsal and ventral vagal trunks (CN X).',
    innervationAr: 'الجذعان المبهمان الظهري والبطني.',
    clinicalPearlsEn: 'Omasal impaction ("dry Bible") occurs during severe dehydration or ingestion of high-fiber, finely ground forage, presenting with progressive stasis.',
    clinicalPearlsAr: 'انحشار أم التلافيف (المعدة الجافة) يحدث في الجفاف أو عند تناول أعلاف مطحونة عالية الألياف مسبباً خمولاً هضمياً مستمراً.',
    focusCoordinates: { position: [1.0, 0.6, 0.25], target: [0.2, 0.42, 0.15] },
    geometry: { shape: 'sphere', position: [0.2, 0.42, 0.15], rotation: [0, 0, 0], scale: [0.35, 0.35, 0.35], color: '#d97706', roughness: 0.5, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'What is the primary physiological function of the extensive laminae (leaves) within the bovine omasum?',
        questionAr: 'ما هي الوظيفة الفسيولوجية الأساسية للصفائح (الأوراق) الشاسعة داخل أم التلافيف في البقر؟',
        options: [
          { en: 'Massive reabsorption of water, electrolytes, and residual volatile fatty acids', ar: 'إعادة الامتصاص المكثف للماء والأملاح والأحماض الدهنية الطيارة المتبقية' },
          { en: 'Secretion of hydrochloric acid and pepsin', ar: 'إفراز حمض الهيدروكلوريك والبيبسين' },
          { en: 'Mechanical regurgitation for rumination', ar: 'الاجترار الميكانيكي' },
          { en: 'Emulsification of fats by bile', ar: 'استحلاب الدهون بالصفراء' }
        ],
        correctAnswer: 'Massive reabsorption of water, electrolytes, and residual volatile fatty acids',
        explanationEn: 'The omasal leaves provide an enormous surface area that squeezes fluid out of ingesta and reabsorbs up to 70% of water entering from the reticulum.',
        explanationAr: 'توفر أوراق أم التلافيف مساحة سطحية هائلة تعصر السوائل من الغذاء وتمتص حتى 70% من الماء الوارد من الشبكية.'
      },
      {
        questionEn: 'Which structure directly links the reticular groove to the omasal canal, bypassing fermentation in nursing calves?',
        questionAr: 'ما هو التركيب الذي ينقل الحليب مباشرة من المريء لقناة أم التلافيف والأنفحة متجاوزاً الكرش في العجول الرضيعة؟',
        options: [
          { en: 'Esophageal (reticular) groove (Sulcus reticuli)', ar: 'الميزاب المريئي الشبكي (Sulcus reticuli)' },
          { en: 'Ductus choledochus', ar: 'القناة الصفراوية العامة' },
          { en: 'Ligamentum arteriosum', ar: 'الرباط الشرياني' },
          { en: 'Pyloric canal', ar: 'القناة البوابية' }
        ],
        correctAnswer: 'Esophageal (reticular) groove (Sulcus reticuli)',
        explanationEn: 'Vagal stimulation during suckling reflexively closes muscular lips of the reticular groove into a tube, directing milk directly to omasum and abomasum.',
        explanationAr: 'يؤدي منعكس الرضاعة لانطباق شفتي الميزاب الشبكي مشكلاً أنبوباً ينقل الحليب مباشرة للأنفحة دون تخمره في الكرش.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'digestive',
    meshId: 'Mesh_Bovine_Abomasum',
    nameEn: 'Bovine Abomasum (True Stomach)',
    nameAr: 'أنفحة الأبقار (المعدة الحقيقية الغدية)',
    latinName: 'Abomasum (Ventriculus glandularis)',
    descriptionEn: 'True glandular stomach (15-25 L) lined with red secretory mucosa containing fundic and pyloric glands producing HCl, pepsin, and chymosin (rennin).',
    descriptionAr: 'المعدة الغدية الحقيقية (15-25 لتر) المبطنة بغشاء إفرازي أحمر يحتوي على غدد تفرز حمض الهيدروكلوريك والبيبسين والرينين لتخثير الحليب.',
    bloodSupplyEn: 'Left and right gastric arteries (lesser curvature) and left/right gastroepiploic arteries (greater curvature).',
    bloodSupplyAr: 'الشرايين المعدية اليمنى واليسرى والشرايين المعدية الثربية.',
    innervationEn: 'Ventral and dorsal vagal trunks (parasympathetic secretomotor) and celiac sympathetic plexus.',
    innervationAr: 'الجذعان المبهمان البطني والظهري والضفيرة الجوفية الودية.',
    clinicalPearlsEn: 'Left Displaced Abomasum (LDA) is classic in post-partum dairy cows; auscultation/percussion of the left 9th-12th ribs yields a resonant metallic "ping".',
    clinicalPearlsAr: 'انزياح الأنفحة لليسار LDA شائع في أبقار الحليب بعد الولادة؛ والقرع التسمعي بين الأضلاع 9-12 يظهر رنة معدنية شبيهة بضرب طنجرة Ping.',
    focusCoordinates: { position: [1.1, 0.4, 0.1], target: [0.15, 0.25, 0.0] },
    geometry: { shape: 'torus', position: [0.15, 0.25, 0.0], rotation: [0.4, 0.6, 0], scale: [0.38, 0.22, 0.22], color: '#f43f5e', roughness: 0.4, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Left Displaced Abomasum (LDA) in high-producing dairy cows is diagnosed by simultaneous auscultation and percussion revealing what sound?',
        questionAr: 'يُشخص انزياح الأنفحة لليسار LDA في أبقار الحليب عالية الإنتاج بالتسمع والقرع المتزامن الذي يكشف عن أي صوت؟',
        options: [
          { en: 'High-pitched resonant metallic "ping" between the 9th and 13th ribs', ar: 'رنة معدنية عالية النغمة (Ping) بين الضلع 9 والضلع 13' },
          { en: 'Dull fluid thud', ar: 'صوت أصم مكتوم' },
          { en: 'Crepitant crackling', ar: 'فرقعة هوائية تحت الجلد' },
          { en: 'Complete silence without resonance', ar: 'صمت تام دون رنين' }
        ],
        correctAnswer: 'High-pitched resonant metallic "ping" between the 9th and 13th ribs',
        explanationEn: 'Gas trapped in the dorsally displaced abomasum between the rumen and left abdominal wall resonates like a steel drum when flicked/percussed.',
        explanationAr: 'الغاز المحبوس في الأنفحة المنزاحة للأعلى بين الكرش وجدار البطن يتردد كالطبل المعدني عند النقر عليه.'
      },
      {
        questionEn: 'What is the primary digestive enzyme secreted by abomasal chief cells in young calves to clot milk protein (casein)?',
        questionAr: 'ما هو الإنزيم الهاضم الرئيسي الذي تفرزه خلايا الأنفحة في العجول الرضيعة لتخثير بروتين الحليب (الكازين)؟',
        options: [
          { en: 'Chymosin (Rennin)', ar: 'الكيموسين (الرينين أو المنفحة)' },
          { en: 'Trypsin', ar: 'التربسين' },
          { en: 'Amylase', ar: 'الأميلاز' },
          { en: 'Lipase', ar: 'اللايباز' }
        ],
        correctAnswer: 'Chymosin (Rennin)',
        explanationEn: 'Chymosin cleaves kappa-casein, causing milk to form a firm clot in the abomasum for slow enzymatic protein digestion.',
        explanationAr: 'يشطر الكيموسين كابا كازين الحليب محولاً إياه إلى خثرة متماسكة في الأنفحة للهضم البطيء.'
      }
    ]
  },
  // Respiratory
  {
    speciesSlug: 'bovine',
    systemSlug: 'respiratory',
    meshId: 'Mesh_Bovine_Trachea_BronchusTrachealis',
    nameEn: 'Bovine Trachea & Tracheal Bronchus',
    nameAr: 'قصبة الأبقار والشعبة الرغامية الإضافية',
    latinName: 'Trachea et Bronchus trachealis',
    descriptionEn: 'Wide cartilaginous trachea featuring an accessory tracheal bronchus branching off independently to aerate the right cranial lung lobe before the carina.',
    descriptionAr: 'قصبة هوائية غضروفية واسعة تتميز بوجود شعبة هوائية رغامية إضافية تتفرع بمفردها لتهوية الفص القحفي الأيمن للرئة قبل مفرق الرغامي.',
    bloodSupplyEn: 'Common carotid arteries in cervical tract; bronchoesophageal artery in thorax.',
    bloodSupplyAr: 'الشرايين السباتية الأصلية والشريان القصبي المريئي.',
    innervationEn: 'Vagus nerve (bronchoconstrictor) and sympathetic thoracic ganglia (bronchodilator).',
    innervationAr: 'العصب المبهم والجذع الودي الصدري.',
    clinicalPearlsEn: 'The tracheal bronchus (Bronchus trachealis) predisposes the right cranial lung lobe to severe early consolidation in Mannheimia haemolytica shipping fever.',
    clinicalPearlsAr: 'الشعبة الرغامية الإضافية تجعل الفص الرئوي القحفي الأيمن الأكثر عرضة للتصلب والالتهاب المبكر في حمى النقل Mannheimia haemolytica.',
    focusCoordinates: { position: [0.8, 0.9, 0.6], target: [0, 0.75, 0.5] },
    geometry: { shape: 'cylinder', position: [0, 0.75, 0.5], rotation: [0.22, 0, 0], scale: [0.14, 0.72, 0.14], color: '#94a3b8', roughness: 0.5, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Which specific lung lobe is independently supplied by the bovine tracheal bronchus (Bronchus trachealis)?',
        questionAr: 'أي فص رئوي يتم تزويده بالهواء بشكل مستقل عبر الشعبة الرغامية الإضافية في الأبقار؟',
        options: [
          { en: 'Right cranial lung lobe (Lobus cranialis dexter)', ar: 'الفص القحفي للرئة اليمنى (Lobus cranialis dexter)' },
          { en: 'Left caudal lung lobe', ar: 'الفص الذيلي للرئة اليسرى' },
          { en: 'Accessory lobe', ar: 'الفص الإضافي' },
          { en: 'Left cranial lobe', ar: 'الفص القحفي للرئة اليسرى' }
        ],
        correctAnswer: 'Right cranial lung lobe (Lobus cranialis dexter)',
        explanationEn: 'In ruminants and swine, a tracheal bronchus arises cranial to the bifurcation to aerate the right cranial lobe directly.',
        explanationAr: 'في المجترات والخنازير تتفرع شعبة رغامية أمام تفرع الرغامي لتغذي الفص القحفي الأيمن مباشرة.'
      },
      {
        questionEn: 'Why are cross-sections of the bovine trachea shaped like an inverted teardrop or roof crest?',
        questionAr: 'لماذا يبدو المقطع العرضي لقصبة البقر الهوائية على شكل قطرة مقلوبة أو سنام جمل؟',
        options: [
          { en: 'The dorsal cartilaginous ends meet at an acute dorsal ridge/crest', ar: 'النهايتان الظهريتان للغضاريف تلتقيان في قمة أو عرف ظهري حاد' },
          { en: 'It is flattened dorsoventrally like birds', ar: 'مسطحة ظهرياً وبطنياً كالطيور' },
          { en: 'Due to complete circular ring fusion', ar: 'لالتحام الحلقات الدائرية تماماً' },
          { en: 'Because of surrounding thyroid muscle hypertrophy', ar: 'لتضخم العضلات الدرقية المحيطة' }
        ],
        correctAnswer: 'The dorsal cartilaginous ends meet at an acute dorsal ridge/crest',
        explanationEn: 'The tracheal rings in cattle have dorsal ends that curve together to form a pointed dorsal keel, unlike the circular equine trachea.',
        explanationAr: 'تنحني نهايتا الغضاريف الرغامية في البقر للأعلى لتشكلا عرفاً ظهرياً بارزاً يميزها عن قصبة الخيل الدائرية.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'respiratory',
    meshId: 'Mesh_Bovine_PulmoDexter',
    nameEn: 'Bovine Right Lung (4 Lobes)',
    nameAr: 'رئة الأبقار اليمنى (رباعية الفصوص)',
    latinName: 'Pulmo dexter (Cranialis, Medius, Caudalis, Accessorius)',
    descriptionEn: 'Deeply fissured right lung divided into 4 distinct anatomical lobes: cranial (bipartite), middle, caudal, and accessory, with prominent interlobular connective septa.',
    descriptionAr: 'رئة يمنى عميقة الشقوق تنقسم لـ 4 فصوص مميزة: قحفي (مزدوج)، أوسط، ذيلي، وإضافي، بحواجز ضامة سميكة بين الفصيصات.',
    bloodSupplyEn: 'Right pulmonary artery (functional) and bronchoesophageal branches (nutritional).',
    bloodSupplyAr: 'الشريان الرئوي الأيمن (وظيفي) وتفرعات القصبي المريئي (مغذٍ).',
    innervationEn: 'Cranial and caudal pulmonary plexuses.',
    innervationAr: 'الضفائر الرئوية الأمامية والخلفية.',
    clinicalPearlsEn: 'Contagious Bovine Pleuropneumonia (CBPP / Mycoplasma mycoides) produces massive fibrinous pleurisy and wide marbled interlobular septa.',
    clinicalPearlsAr: 'التهاب الرئة والجنبة الساري في الأبقار CBPP يسبب التهاب جنبة ليفيني شاسع مع مظهر رخامي مميز للحواجز الفصيصية.',
    focusCoordinates: { position: [1.2, 0.7, 0.2], target: [0.28, 0.52, 0.15] },
    geometry: { shape: 'capsule', position: [0.28, 0.52, 0.15], rotation: [0.1, 0, -0.2], scale: [0.35, 0.58, 0.3], color: '#f43f5e', roughness: 0.6, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'How many lobes comprise the right lung in cattle?',
        questionAr: 'كم عدد الفصوص التي تتكون منها الرئة اليمنى في الأبقار؟',
        options: [
          { en: 'Four: Cranial (divided into cranial/caudal parts), Middle, Caudal, Accessory', ar: 'أربعة: قحفي (مقسم لجزأين)، أوسط، ذيلي، وإضافي' },
          { en: 'Two undivided lobes', ar: 'فصان غير مقسمين' },
          { en: 'Six identical lobes', ar: 'ستة فصوص متطابقة' },
          { en: 'Only one continuous lobe', ar: 'فص واحد متصل كالحصان' }
        ],
        correctAnswer: 'Four: Cranial (divided into cranial/caudal parts), Middle, Caudal, Accessory',
        explanationEn: 'The bovine right lung is deeply lobated with four major lobes, and its cranial lobe is further subdivided into two parts.',
        explanationAr: 'تتميز رئة البقر اليمنى بتفصصها العميق لأربعة فصوص رئيسية مع انقسام الفص القحفي لجزأين.'
      },
      {
        questionEn: 'The pathognomonic "marbled" appearance of the bovine lung in acute pleuropneumonia is caused by what histological feature?',
        questionAr: 'المظهر الرخامي الوصفي لرئة البقر في التهاب الرئة والجنبة الحاد ينتج عن أي خاصية نسيجية؟',
        options: [
          { en: 'Wide interlobular connective tissue septa distended with fibrin and edema', ar: 'الحواجز الضامة العريضة بين الفصيصات المتمددة بالفبرين والوذمة' },
          { en: 'Extensive cartilage rings in parenchyma', ar: 'حلقات غضروفية شاسعة في النسيج' },
          { en: 'Deposition of calcium carbonate', ar: 'ترسبات كربونات الكالسيوم' },
          { en: 'Absence of pulmonary alveoli', ar: 'غياب الحويصلات الهوائية' }
        ],
        correctAnswer: 'Wide interlobular connective tissue septa distended with fibrin and edema',
        explanationEn: 'Cattle have the thickest interlobular septa of all domestic species; when filled with inflammatory exudate, they delineate the lobules in a marble tile pattern.',
        explanationAr: 'تمتلك الأبقار أسمك حواجز ضامة بين الفصيصات؛ وعند امتلائها بالفبرين والرشح ترسم نسيجاً شبيهاً ببلاط الرخام.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'respiratory',
    meshId: 'Mesh_Bovine_PulmoSinister',
    nameEn: 'Bovine Left Lung',
    nameAr: 'رئة الأبقار اليسرى',
    latinName: 'Pulmo sinister (Cranialis et Caudalis)',
    descriptionEn: 'Left lung distinctly divided by a deep fissure into a cranial lobe (with cranial and caudal parts) and an extensive caudal lobe.',
    descriptionAr: 'رئة يسرى مقسمة بشق عميق لفص قحفي (ذو جزءين أمامي وخلفي) وفص ذيلي واسع يمتد نحو الحجاب الحاجز.',
    bloodSupplyEn: 'Left pulmonary artery and bronchoesophageal branches.',
    bloodSupplyAr: 'الشريان الرئوي الأيسر وتفرعات الشريان القصبي المريئي.',
    innervationEn: 'Pulmonary autonomic nerve plexus.',
    innervationAr: 'الضفيرة الرئوية الذاتية.',
    clinicalPearlsEn: 'Bovine Respiratory Disease Complex (BRD / "Shipping Fever"): Environmental stress and viral infection (BRSV, IBR) allow secondary Mannheimia invasion.',
    clinicalPearlsAr: 'معقد أمراض الجهاز التنفسي البقري BRD (حمى النقل): الإجهاد والعدوى الفيروسية يمهدان للغزو البكتيري بالمانهيميا هيموليتيكا.',
    focusCoordinates: { position: [-1.2, 0.7, 0.2], target: [-0.28, 0.52, 0.15] },
    geometry: { shape: 'capsule', position: [-0.28, 0.52, 0.15], rotation: [0.1, 0, 0.2], scale: [0.32, 0.55, 0.28], color: '#fb7185', roughness: 0.6, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'How is the bovine left cranial lung lobe subdivided?',
        questionAr: 'كيف ينقسم الفص القحفي للرئة اليسرى في الأبقار؟',
        options: [
          { en: 'Divided into cranial part and caudal part by a deep cardiac fissure', ar: 'ينقسم لجزء قحفي وجزء ذيلي بشق قلبي عميق' },
          { en: 'It is completely undivided', ar: 'غير مقسم تماماً' },
          { en: 'Divided into four sublobes', ar: 'ينقسم لأربعة فصيصات' },
          { en: 'Replaced by an air sac', ar: 'يتحول لكيس هوائي' }
        ],
        correctAnswer: 'Divided into cranial part and caudal part by a deep cardiac fissure',
        explanationEn: 'The left cranial lobe in cattle is divided into pars cranialis and pars caudalis by a deep incisura cardiaca.',
        explanationAr: 'ينقسم الفص القحفي الأيسر في البقر لجزء أمامي وآخر خلفي عبر ثلمة قلبية عميقة.'
      },
      {
        questionEn: 'Which viral pathogen is a key primary inciter of the Bovine Respiratory Disease (BRD) complex?',
        questionAr: 'أي مسبب فيروسي هو المحرض الأولي الرئيسي لمعقد أمراض الجهاز التنفسي البقري (BRD)؟',
        options: [
          { en: 'Bovine Respiratory Syncytial Virus (BRSV) / IBR', ar: 'الفيروس المخلوي التنفسي البقري BRSV / فيروس التهاب الأنف والحنجرة IBR' },
          { en: 'Canine distemper virus', ar: 'فيروس ديستمبر الكلاب' },
          { en: 'African horse sickness virus', ar: 'طاعون الخيل الأفريقي' },
          { en: 'Newcastle disease virus', ar: 'فيروس النيوكاسل' }
        ],
        correctAnswer: 'Bovine Respiratory Syncytial Virus (BRSV) / IBR',
        explanationEn: 'BRSV and BoHV-1 destroy ciliated airway epithelium, predisposing the lung to fatal bacterial bronchopneumonia.',
        explanationAr: 'يدمر فيروس BRSV الخلايا الهدبية للجهاز التنفسي، مما يمهد للغزو البكتيري القاتل بالمانهيميا.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'respiratory',
    meshId: 'Mesh_Bovine_PleuraParietalis',
    nameEn: 'Bovine Parietal Pleura & Intercostal Space',
    nameAr: 'الجنبة الجدارية للأبقار والفراغ الوربي',
    latinName: 'Pleura parietalis (Costalis, Diaphragmatica, Mediastinalis)',
    descriptionEn: 'Robust serous membrane lining the thoracic cavity, divided into costal, diaphragmatic, and mediastinal pleura with a completely imperforate mediastinum.',
    descriptionAr: 'غشاء مصلي متين يبطن التجويف الصدري، مقسم لجنبة ضلعية وحجابية ومنصفية مع منصف صدري صلب وغير نافذ تماماً.',
    bloodSupplyEn: 'Internal thoracic and intercostal arteries.',
    bloodSupplyAr: 'الشرايين الصدرية الغائرة والشرايين الوربية.',
    innervationEn: 'Phrenic nerve (diaphragmatic pleura) and intercostal nerves (costal pleura).',
    innervationAr: 'العصب الحجابي والأعصاب الوربية الحسية للألم.',
    clinicalPearlsEn: 'Unlike dogs and horses, the bovine mediastinum is complete and imperforate; unilateral pneumothorax or pleuritis does not spread to the contralateral side.',
    clinicalPearlsAr: 'بخلاف الخيول والكلاب، منصف الصدر في الأبقار سميك ومصمت تماماً؛ لذا لا ينتقل الاسترواح الصدري أحادي الجانب للجانب الآخر.',
    focusCoordinates: { position: [1.3, 0.7, 0.2], target: [0, 0.5, 0.15] },
    geometry: { shape: 'torus', position: [0, 0.5, 0.15], rotation: [Math.PI / 2, 0, 0], scale: [0.48, 0.48, 0.42], color: '#cbd5e1', roughness: 0.4, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Why does unilateral traumatic pneumothorax or hemothorax rarely become bilateral in cattle?',
        questionAr: 'لماذا نادراً ما يتحول الاسترواح الهوائي أو النزف الصدري أحادي الجانب إلى ثنائي الجانب في الأبقار؟',
        options: [
          { en: 'The bovine mediastinum is thick, robust, and completely imperforate', ar: 'المنصف الصدري في الأبقار سميك ومتين وغير مثقوب تماماً' },
          { en: 'Cattle have no pleural cavities', ar: 'الأبقار لا تمتلك تجاويف جنبية' },
          { en: 'The lungs are permanently fused to the ribs', ar: 'التصاق الرئتين الدائم بالأضلاع' },
          { en: 'Air cannot enter the bovine chest wall', ar: 'استحالة دخول الهواء لجدار الصدر' }
        ],
        correctAnswer: 'The bovine mediastinum is thick, robust, and completely imperforate',
        explanationEn: 'The mediastinal septum in cattle has no fenestrations, maintaining independent pressure compartments on left and right sides.',
        explanationAr: 'لا يحتوي الحاجز المنصفي في البقر على أي نوافذ، مما يحافظ على استقلالية الضغط بين التجويفين الصدريين.'
      },
      {
        questionEn: 'Which intercostal space is the standard site for performing ultrasound examination of the bovine reticulum and heart?',
        questionAr: 'أي فراغ وربي هو الموقع القياسي لإجراء الفحص بالموجات فوق الصوتية لشبكية وقلب الأبقار؟',
        options: [
          { en: '5th and 6th intercostal spaces ventrally', ar: 'الفراغان الوربيان الخامس والسادس في الأسفل بطنياً' },
          { en: '12th intercostal space dorsally', ar: 'الفراغ الوربي الثاني عشر ظهرياً' },
          { en: '1st intercostal space', ar: 'الفراغ الوربي الأول' },
          { en: 'Behind the last rib', ar: 'خلف الضلع الأخير' }
        ],
        correctAnswer: '5th and 6th intercostal spaces ventrally',
        explanationEn: 'The reticulum contacts the diaphragm directly adjacent to the pericardium in the ventral 5th to 6th intercostal space.',
        explanationAr: 'تلاصق الشبكية الحجاب الحاجز مباشرة أمام غشاء التامور عند الفراغين الوربيين الخامس والسادس بطنياً.'
      }
    ]
  },
  // Nervous
  {
    speciesSlug: 'bovine',
    systemSlug: 'nervous',
    meshId: 'Mesh_Bovine_Cerebrum',
    nameEn: 'Bovine Cerebrum',
    nameAr: 'مخ الأبقار',
    latinName: 'Cerebrum (Bos taurus)',
    descriptionEn: 'Voluminous cerebral hemispheres weighing 450-500 g with prominent olfactory bulbs and well-developed gyri governing herd social hierarchy and ruminant sensory processing.',
    descriptionAr: 'نصفا كرة مخيان يزنان 450-500 جم يتميزان ببصلتين شميتين بارزتين وتلافيف متطورة تتحكم بسلوك القطيع والتكامل الحسي للمجترات.',
    bloodSupplyEn: 'Rostral epidural rete mirabile (Rete mirabile epidurale rostrale) fed by maxillary and vertebral arteries.',
    bloodSupplyAr: 'الشبكة العجيبة الشريانية فوق الجافية المغذاة بالشريانين الفكي والفقري.',
    innervationEn: 'Trigeminal meningeal sensory nerve twigs.',
    innervationAr: 'فروع سحائية حسية من العصب ثلاثي التوائم.',
    clinicalPearlsEn: 'Polioencephalomalacia (PEM / "Cerebrocortical Necrosis / CCN"): Thiamine deficiency or sulfur toxicity causes autofluorescent cortical necrosis under UV Wood\'s lamp.',
    clinicalPearlsAr: 'تلين قشرة الدماغ PEM (نخر قشرة المخ): نقص الثيامين أو سمية الكبريت تسبب تنخراً قشرياً يتألق تحت أشعة وود فوق البنفسجية UV.',
    focusCoordinates: { position: [0.8, 1.2, 1.0], target: [0, 1.0, 0.85] },
    geometry: { shape: 'sphere', position: [0, 1.0, 0.85], rotation: [0, 0, 0], scale: [0.38, 0.3, 0.38], color: '#facc15', roughness: 0.45, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'What vascular specialization at the base of the bovine brain cools arterial blood destined for the cerebral cortex?',
        questionAr: 'ما هو التكيف الوعائي المتخصص عند قاعدة دماغ البقر الذي يبرد الدم الشرياني المتجه لقشرة المخ؟',
        options: [
          { en: 'Rete mirabile epidurale rostrale (Carotid rete)', ar: 'الشبكة العجيبة فوق الجافية الأمامية (Carotid rete)' },
          { en: 'Circle of Willis with no network', ar: 'دائرة ويليس دون أي شبكة' },
          { en: 'Aortic baroreceptor sinus', ar: 'جيب مستقبلات الأبهر' },
          { en: 'Basilar aneurysm', ar: 'تمدد الشريان القاعدي' }
        ],
        correctAnswer: 'Rete mirabile epidurale rostrale (Carotid rete)',
        explanationEn: 'Arterial blood enters an intracranial capillary network bathed in cooler venous blood returning from the nasal cavity, protecting the brain from heat stress.',
        explanationAr: 'يمر الدم الشرياني في شبكة دقيقة مغمورة بدم وريدي بارد عائد من الأنف لتبريد الدماغ وحمايته من الإجهاد الحراري.'
      },
      {
        questionEn: 'Polioencephalomalacia (PEM / Cerebrocortical Necrosis) in cattle is classically caused by a deficiency of which vitamin?',
        questionAr: 'مرض تلين قشرة المخ (PEM) في الماشية ينجم كلاسيكياً عن نقص أي فيتامين؟',
        options: [
          { en: 'Thiamine (Vitamin B1)', ar: 'الثيامين (فيتامين ب1)' },
          { en: 'Cyanocobalamin (Vitamin B12)', ar: 'فيتامين ب12' },
          { en: 'Ascorbic acid (Vitamin C)', ar: 'فيتامين ج' },
          { en: 'Vitamin D3', ar: 'فيتامين د3' }
        ],
        correctAnswer: 'Thiamine (Vitamin B1)',
        explanationEn: 'Thiamine deficiency (often from ruminal thiaminase-producing bacteria or high sulfur diet) halts cerebral ATP synthesis, causing cortical necrosis.',
        explanationAr: 'نقص فيتامين ب1 يعطل إنتاج الطاقة ATP في خلايا المخ، مما يؤدي لنخر وتورم قشرة الدماغ والعمى.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'nervous',
    meshId: 'Mesh_Bovine_Cerebellum',
    nameEn: 'Bovine Cerebellum',
    nameAr: 'مخيخ الأبقار',
    latinName: 'Cerebellum (Bos taurus)',
    descriptionEn: 'Globular hindbrain structure with median vermis and lateral hemispheres regulating rumination balance and postural muscle tone.',
    descriptionAr: 'بنية دماغية خلفية كروية ذات دودة وسطية ونصفين جانبيين تنظم توازن وضعية الجسم أثناء الاجترار والوقوف.',
    bloodSupplyEn: 'Rostral and caudal cerebellar arteries off basilar artery.',
    bloodSupplyAr: 'الشرايين المخيخية من الشريان القاعدي.',
    innervationEn: 'Cerebellar cortical Purkinje neuron circuits.',
    innervationAr: 'دوائر عصبونات بيركنجي القشرية المخيخية.',
    clinicalPearlsEn: 'Bovine Spongiform Encephalopathy (BSE / "Mad Cow Disease") and Bovine Viral Diarrhea (BVDV) in utero induce cerebellar hypoplasia and severe ataxia.',
    clinicalPearlsAr: 'جنون البقر BSE وعدوى BVD الرحمية تسببان ضمور المخيخ وترنحاً حركياً عنيفاً في العجول حديثة الولادة.',
    focusCoordinates: { position: [0.7, 1.1, 0.8], target: [0, 0.94, 0.72] },
    geometry: { shape: 'sphere', position: [0, 0.94, 0.72], rotation: [0, 0, 0], scale: [0.25, 0.22, 0.22], color: '#eab308', roughness: 0.45, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'In utero infection of pregnant cows with Bovine Viral Diarrhea Virus (BVDV) at 100-150 days gestation produces what cerebellar malformation?',
        questionAr: 'إصابة الأبقار الحوامل بفيروس الإسهال البقري الفيروسي (BVDV) في عمر 100-150 يوماً من الحمل تسبب أي تشوه في المخيخ؟',
        options: [
          { en: 'Cerebellar hypoplasia', ar: 'ضمور ونقص تنسج المخيخ (Cerebellar hypoplasia)' },
          { en: 'Hydrocephalus only', ar: 'استسقاء الدماغ فقط' },
          { en: 'Spina bifida occulta', ar: 'انشقاق العمود الفقري' },
          { en: 'Absence of optic chiasm', ar: 'غياب التصالب البصري' }
        ],
        correctAnswer: 'Cerebellar hypoplasia',
        explanationEn: 'BVDV targets rapidly dividing neuroblasts in the external germinal layer of the fetal cerebellum, resulting in a stunted, hypoplastic cerebellum.',
        explanationAr: 'يهاجم فيروس BVD خلايا المخيخ الجنينية سريعة الانقسام مما يمنع نموه الطبيعي ويسبب ولادة عجل برنح شديد.'
      },
      {
        questionEn: 'Bovine Spongiform Encephalopathy (BSE) is caused by which class of infectious pathogen?',
        questionAr: 'اعتلال الدماغ الإسفنجي البقري (جنون البقر BSE) ينجم عن أي فئة من المسببات المعدية؟',
        options: [
          { en: 'Prions (misfolded proteinaceous infectious particles PrPSc)', ar: 'البريونات (بروتينات مُعدية مشوهة الطي PrPSc)' },
          { en: 'Retroviruses', ar: 'الفيروسات القهقرية' },
          { en: 'Gram-negative spirochetes', ar: 'الملتويات سالبة الغرام' },
          { en: 'Mycoplasmas', ar: 'الميكوبلازما' }
        ],
        correctAnswer: 'Prions (misfolded proteinaceous infectious particles PrPSc)',
        explanationEn: 'BSE is a transmissible spongiform encephalopathy caused by prions that induce vacuolation and spongiform lesions in the brainstem.',
        explanationAr: 'جنون البقر مرض بريوني يُحدث تحولاً إسفنجياً وتنكسياً وفجوات في جذع المخ والدماغ.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'nervous',
    meshId: 'Mesh_Bovine_NervusCornualis',
    nameEn: 'Bovine Cornual Nerve',
    nameAr: 'العصب القَرني للأبقار',
    latinName: 'Nervus cornualis (Ramus zygomaticotemporalis CN V2)',
    descriptionEn: 'Sensory branch of the zygomaticotemporal nerve (mandibular/maxillary trigeminal division) supplying the horn corium and skin around the horn base.',
    descriptionAr: 'فرع حسي من العصب الوجني الصدغي (من العصب الخامس) يغذي نسيج القرن والجلد المحيط بقاعدة القرن.',
    bloodSupplyEn: 'Cornual artery off superficial temporal artery.',
    bloodSupplyAr: 'الشريان القرني من الشريان الصدغي السطحي.',
    innervationEn: 'Sensory somatic innervation to horn matrix and horn core.',
    innervationAr: 'التعصيب الحسي الجسدي لنسيج وقاعدة القرن.',
    clinicalPearlsEn: 'Cornual Nerve Block: Essential regional anesthesia for humane dehorning/disbudding; local anesthetic is deposited midway between the lateral canthus and horn base beneath the frontal crest.',
    clinicalPearlsAr: 'إحصار العصب القرني: تخدير موضعي أساسي لإزالة القرون دون ألم؛ يُحقن المخدر في منتصف المسافة بين زاوية العين الوحشية وقاعدة القرن أسفل العرف الجبهي.',
    focusCoordinates: { position: [0.8, 1.2, 0.9], target: [0.22, 1.08, 0.78] },
    geometry: { shape: 'capsule', position: [0.22, 1.08, 0.78], rotation: [0.3, 0.2, 0], scale: [0.05, 0.35, 0.05], color: '#facc15', roughness: 0.3, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Where is local anesthetic injected to successfully block the cornual nerve for dehorning in cattle?',
        questionAr: 'أين يُحقن المخدر الموضعي لإحصار العصب القرني بنجاح لإزالة قرون الأبقار؟',
        options: [
          { en: 'Midway between the lateral canthus of the eye and the base of the horn, under the temporal ridge', ar: 'في منتصف المسافة بين زاوية العين الوحشية وقاعدة القرن، أسفل الحافة الصدغية' },
          { en: 'Directly into the frontal sinus cavity', ar: 'داخل تجويف الجيب الجبهي مباشرة' },
          { en: 'At the medial canthus of the eye', ar: 'عند زاوية العين الإنسية' },
          { en: 'Over the infraorbital foramen on the snout', ar: 'فوق الثقبة تحت الحجاجية' }
        ],
        correctAnswer: 'Midway between the lateral canthus of the eye and the base of the horn, under the temporal ridge',
        explanationEn: 'The cornual nerve runs along the temporal crest and is covered only by skin and a thin layer of frontalis muscle, making it easily accessible.',
        explanationAr: 'يسير العصب القرني على طول العرف الصدغي تحت الجلد وطبقة رقيقة من العضلات مما يجعله سهل التخدير بدقة.'
      },
      {
        questionEn: 'In older cattle with large horns, which additional nerve branches occasionally contribute sensation to the caudomedial horn base, requiring supplemental anesthesia?',
        questionAr: 'في الأبقار الكبيرة ذات القرون الضخمة، أي أعصاب إضافية قد تساهم في تغذية قاعدة القرن الخلفية وتتطلب تخديراً إضافياً؟',
        options: [
          { en: 'Branches of the second cervical spinal nerve and infratrochlear nerve', ar: 'فروع من العصب الشوكي الرقبي الثاني والعصب تحت البكري' },
          { en: 'Hypoglossal nerve', ar: 'العصب تحت اللساني' },
          { en: 'Optic nerve', ar: 'العصب البصري' },
          { en: 'Vagus nerve', ar: 'العصب المبهم' }
        ],
        correctAnswer: 'Branches of the second cervical spinal nerve and infratrochlear nerve',
        explanationEn: 'In older cattle or goats, collateral fibers from C2 and infratrochlear nerve innervate the caudal and medial horn base.',
        explanationAr: 'في الحيوانات الأكبر سناً أو الماعز تساهم ألياف من العصب الرقبي الثاني C2 وتحت البكري في تعصيب قاعدة القرن.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'nervous',
    meshId: 'Mesh_Bovine_MedullaSpinalis',
    nameEn: 'Bovine Spinal Cord & Lumbosacral Plexus',
    nameAr: 'النخاع الشوكي والضفيرة القطنية العجزية للأبقار',
    latinName: 'Medulla spinalis et Plexus lumbosacralis',
    descriptionEn: 'Spinal cord terminating as the conus medullaris at the second sacral vertebra, giving origin to the major sciatic and obturator nerves.',
    descriptionAr: 'النخاع الشوكي الذي ينتهي بالمخروط النخاعي عند الفقرة العجزية الثانية وتنبثق منه الأعصاب الوركية والسدادية الكبرى.',
    bloodSupplyEn: 'Ventral spinal artery, vertebral and intervertebral arteries.',
    bloodSupplyAr: 'الشريان الشوكي البطني والشرايين بين الفقرية.',
    innervationEn: 'Motor and sensory somatic and autonomic conduction.',
    innervationAr: 'التوصيل الحسي والحركي والذاتي.',
    clinicalPearlsEn: 'Maternal Obstetric Paralysis: Dystocia with oversized calves crushes the obturator and sciatic nerves against the pelvic brim, causing downer cow syndrome.',
    clinicalPearlsAr: 'شلل الولادة في الأمهات: تعسر الولادة يضغط العصبين السدادي والوركي على حافة الحوض العظمية مسبباً متلازمة البقرة الراقدة Downer Cow.',
    focusCoordinates: { position: [0.7, 0.9, 0.3], target: [0, 0.85, 0.15] },
    geometry: { shape: 'cylinder', position: [0, 0.85, 0.15], rotation: [0.08, 0, 0], scale: [0.09, 1.25, 0.09], color: '#fef08a', roughness: 0.35, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Bilateral injury to which nerve during dystocia results in inability to adduct the hindlegs, causing the cow to "do the splits"?',
        questionAr: 'إصابة أي عصب في الجانبين أثناء تعسر الولادة تمنع ضم القائمتين الخلفيتين وتجعل البقرة "تفترش الأرض كلياً"؟',
        options: [
          { en: 'Obturator nerve (Nervus obturatorius)', ar: 'العصب السدادي (Nervus obturatorius)' },
          { en: 'Femoral nerve', ar: 'العصب الفخذي' },
          { en: 'Radial nerve', ar: 'العصب الكعبري' },
          { en: 'Suprascapular nerve', ar: 'العصب فوق الكتفي' }
        ],
        correctAnswer: 'Obturator nerve (Nervus obturatorius)',
        explanationEn: 'The obturator nerve innervates the adductor muscles; bilateral paralysis allows the hind legs to splay out uncontrollably, risking luxation.',
        explanationAr: 'يغذي العصب السدادي عضلات الضم؛ وشلله الثنائي يجعل القائمتين تفترشان وتتباعدان بشكل لا إرادي مسبباً خلع الورك.'
      },
      {
        questionEn: 'Where is caudal epidural anesthesia administered in dairy cattle for obstetrical manipulation or rectal prolapse repair?',
        questionAr: 'أين يُحقن التخدير فوق الجافية الذيلي (Epidural) في الأبقار لتسهيل الولادة أو علاج هبوط المستقيم؟',
        options: [
          { en: 'First intercoccygeal space (Co1 - Co2) or Sacrococcygeal space (S5 - Co1)', ar: 'بين الفقرتين الذيليتين الأولى والثانية (Co1-Co2) أو العجزية والذيلية (S5-Co1)' },
          { en: 'Lumbosacral space (L6 - S1)', ar: 'الفراغ القطني العجزي L6-S1' },
          { en: 'Between C1 and C2', ar: 'بين الفقرتين الرقبيتين الأولى والثانية' },
          { en: 'Over the dorsal sacral foramina', ar: 'فوق الثقب العجزية الظهرية' }
        ],
        correctAnswer: 'First intercoccygeal space (Co1 - Co2) or Sacrococcygeal space (S5 - Co1)',
        explanationEn: 'Pumping the tail up and down identifies the first mobile joint behind the sacrum, where lidocaine safely anesthetizes the perineum without leg collapse.',
        explanationAr: 'تحريك الذيل للأعلى والأسفل يحدد أول مفصل متحرك خلف العجز لحقن الليدوكائين لتخدير الحوض دون سقوط البقرة.'
      }
    ]
  },
  // Urogenital
  {
    speciesSlug: 'bovine',
    systemSlug: 'urogenital',
    meshId: 'Mesh_Bovine_RenDexter',
    nameEn: 'Bovine Right Kidney (Multilobulated)',
    nameAr: 'كلية الأبقار اليمنى (المفصصة)',
    latinName: 'Ren dexter (Multilobulatus)',
    descriptionEn: 'Elongated kidney completely divided externally into 15 to 25 distinct superficial lobes, completely lacking a renal pelvis; calices drain directly.',
    descriptionAr: 'كلية ممتدة تنقسم خارجياً بالكامل إلى 15-25 فصاً سطحياً منفصلاً وتفتقر تماماً لحوض الكلية؛ وتصب الكؤوس مباشرة في الحالب.',
    bloodSupplyEn: 'Right renal artery from abdominal aorta; right renal vein.',
    bloodSupplyAr: 'الشريان الكلوي الأيمن والوريد الكلوي الأيمن.',
    innervationEn: 'Renal plexus from celiac and cranial mesenteric ganglia.',
    innervationAr: 'الضفيرة الكلوية الذاتية.',
    clinicalPearlsEn: 'Unlike equids and carnivores, ruminants have lobulated kidneys with no renal pelvis; pyelonephritis (Corynebacterium renale) causes necrotic debris in the calices.',
    clinicalPearlsAr: 'تتميز المجترات بكلى مفصصة تفتقر لحوض الكلية؛ والتهاب الكلى والكلية الصديدي يسبب تجمعات قيحية نخريّة في الكؤوس الكلوية.',
    focusCoordinates: { position: [1.1, 0.8, 0.1], target: [0.28, 0.65, 0.0] },
    geometry: { shape: 'box', position: [0.28, 0.65, 0.0], rotation: [0.1, 0.2, 0], scale: [0.26, 0.22, 0.42], color: '#701a75', roughness: 0.45, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Which anatomical feature is unique to the external appearance of the bovine kidney compared to horse, dog, and sheep?',
        questionAr: 'ما هي الخاصية التشريحية الفريدة للمظهر الخارجي لكلية الأبقار مقارنة بالخيل والكلاب والضأن؟',
        options: [
          { en: 'Distinct superficial lobulation into 15 - 25 external lobes', ar: 'تفصص سطحي خارجي واضح لـ 15 إلى 25 فصاً منفصلاً' },
          { en: 'Heart-shaped contour', ar: 'شكل قلب' },
          { en: 'Completely unipyramidal smooth cortex', ar: 'قشرة ملساء وحيدة الهرم' },
          { en: 'Floating position within the pelvic canal', ar: 'موقع عائم داخل تجويف الحوض' }
        ],
        correctAnswer: 'Distinct superficial lobulation into 15 - 25 external lobes',
        explanationEn: 'Cattle possess multipyramidal, multilobated kidneys where deep grooves retain fetal lobation on the outer surface.',
        explanationAr: 'تمتلك الأبقار كلى متعددة الأهرامات ومفصصة يحتفظ سطحها الخارجي بالشقوق الجنينية الفاصلة بين الفصوص.'
      },
      {
        questionEn: 'Do bovine kidneys have a single shared central renal pelvis (Pelvis renalis)?',
        questionAr: 'هل تحتوي كلية الأبقار على حوض كلية مركزي موحد (Pelvis renalis)؟',
        options: [
          { en: 'No, they completely lack a true renal pelvis; calices unite directly into two ureteral branches', ar: 'لا، تفتقر تماماً لحوض كلية حقيقي؛ وتتحد الكؤوس في فرعين للحالب' },
          { en: 'Yes, an enormous single pelvis holding 200 ml', ar: 'نعم، حوض مفرد هائل يتسع لـ 200 مل' },
          { en: 'Only the right kidney has a pelvis', ar: 'الكلية اليمنى فقط تمتلك حوضاً' },
          { en: 'Present only during lactation', ar: 'يوجد أثناء إدرار الحليب فقط' }
        ],
        correctAnswer: 'No, they completely lack a true renal pelvis; calices unite directly into two ureteral branches',
        explanationEn: 'Ruminants lack an expanded renal pelvis. Minor calices collect from each renal papilla, uniting into major calices that join the ureter directly.',
        explanationAr: 'تفتقر الأبقار لحوض الكلية المتسع، وتصب الكؤوس الصغيرة من الحليمات الكلوية في فرعين رئيسيين يتصلان بالحالب مباشرة.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'urogenital',
    meshId: 'Mesh_Bovine_RenSinister',
    nameEn: 'Bovine Left Kidney (Displaced to Right)',
    nameAr: 'كلية الأبقار اليسرى (المنزاحة يميناً)',
    latinName: 'Ren sinister (Ren mobile)',
    descriptionEn: 'Mobile left kidney pushed completely across the median plane to the right side of the abdomen by the voluminous developing rumen.',
    descriptionAr: 'كلية يسرى متحركة مدفوعة بالكامل عبر خط الوسط للجانب الأيمن من تجويف البطن بفعل الكرش الهائل.',
    bloodSupplyEn: 'Left renal artery originating caudal to the mesenteric vessels; left renal vein.',
    bloodSupplyAr: 'الشريان الكلوي الأيسر والوريد الكلوي الأيسر.',
    innervationEn: 'Renal autonomic plexus.',
    innervationAr: 'الضفيرة الكلوية الذاتية.',
    clinicalPearlsEn: 'On rectal palpation, the left kidney is readily found hanging freely on the right side ventral to L2-L5, while the right kidney cannot be reached.',
    clinicalPearlsAr: 'بالجس عبر المستقيم، تُجس الكلية اليسرى متدلية بحرية في الجانب الأيمن أسفل L2-L5، بينما يستحيل الوصول للكلية اليمنى.',
    focusCoordinates: { position: [0.9, 0.7, -0.1], target: [0.12, 0.55, -0.2] },
    geometry: { shape: 'box', position: [0.12, 0.55, -0.2], rotation: [0.2, -0.3, 0], scale: [0.24, 0.22, 0.38], color: '#86198f', roughness: 0.45, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Why is the bovine left kidney anatomically displaced to the right side of the abdominal cavity?',
        questionAr: 'لماذا تنزاح كلية الأبقار اليسرى تشريحياً نحو الجانب الأيمن من تجويف البطن؟',
        options: [
          { en: 'Pushed across the median plane by the massive expansion of the dorsal rumen', ar: 'مدفوعة عبر خط الوسط بالتوسع الهائل لكيس الكرش الظهري' },
          { en: 'Attached to the liver by the round ligament', ar: 'ملتصقة بالكبد بالرباط المدور' },
          { en: 'Congenital fusion with the right ovary', ar: 'التحام وراثي مع المبيض الأيمن' },
          { en: 'Pulled caudally by the gravid uterus', ar: 'مسحوبة بالرحم العشاري' }
        ],
        correctAnswer: 'Pushed across the median plane by the massive expansion of the dorsal rumen',
        explanationEn: 'As the rumen expands to fill the entire left hemi-abdomen, it suspends the left kidney on a long mesentery and displaces it across to the right.',
        explanationAr: 'عند نمو الكرش ليشغل النصف الأيسر للبطن، يدفع الكلية اليسرى ذات المساريق الطويلة لتستقر يمين خط الوسط.'
      },
      {
        questionEn: 'When performing a routine rectal exam in a cow, which kidney is palpable beneath the hand?',
        questionAr: 'عند إجراء فحص المستقيم الروتيني للبقرة، أي كلية تكون قابلة للجس تحت اليد؟',
        options: [
          { en: 'Only the left kidney (hanging on a loose mesentery below L2 - L5)', ar: 'الكلية اليسرى فقط (المتدلية بمساريق رخوة أسفل L2-L5)' },
          { en: 'Only the right kidney', ar: 'الكلية اليمنى فقط' },
          { en: 'Both kidneys equally', ar: 'كلا الكليتين بنفس السهولة' },
          { en: 'Neither kidney can ever be reached', ar: 'يستحيل الوصول لأي كلية' }
        ],
        correctAnswer: 'Only the left kidney (hanging on a loose mesentery below L2 - L5)',
        explanationEn: 'The left kidney hangs freely and is easily cupped in the hand; the right kidney is locked far cranially under the 13th rib out of reach.',
        explanationAr: 'تتدلى الكلية اليسرى بحرية وتُجس باليد بسهولة؛ بينما الكلية اليمنى مستقرة في أقصى الأمام تحت الضلع 13 ويصعب الوصول إليها.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'urogenital',
    meshId: 'Mesh_Bovine_Uterus_Carunculae',
    nameEn: 'Bovine Uterus & Caruncles',
    nameAr: 'رحم الأبقار والفلقات الرحمية (الكارنكلات)',
    latinName: 'Uterus bicornis et Carunculae uterinae',
    descriptionEn: 'Bicornuate uterus featuring 80-120 oval convex endometrial caruncles that interlock with fetal cotyledons to form placentomes.',
    descriptionAr: 'رحم ثنائي القرنين يتميز بـ 80-120 فلجة بطانية رحمية محدبة بيضاوية تتعاشق مع الفلقات الجنينية لتكوين المشيمة الفلقية.',
    bloodSupplyEn: 'Uterine artery (from umbilical artery), ovarian artery, and vaginal artery.',
    bloodSupplyAr: 'الشريان الرحمي (من الشريان السري) والشريان المبيضي والشريان المهبلي.',
    innervationEn: 'Pelvic and hypogastric nerves (sympathetic and parasympathetic).',
    innervationAr: 'الأعصاب الحوضية وتحت المعدة الذاتية.',
    clinicalPearlsEn: 'Rectal palpation of pregnancy: Palpating the middle uterine artery "fremitus" (buzzing thrill) and slipping of fetal membranes confirms advanced pregnancy.',
    clinicalPearlsAr: 'تشخيص الحمل عبر المستقيم: جس هدير الشريان الرحمي الأوسط (Fremitus) وانزلاق الأغشية الجنينية يؤكدان الحمل المتقدم.',
    focusCoordinates: { position: [0.9, 0.45, -0.6], target: [0, 0.35, -0.55] },
    geometry: { shape: 'torus', position: [0, 0.35, -0.55], rotation: [Math.PI / 4, 0, 0], scale: [0.22, 0.22, 0.28], color: '#f43f5e', roughness: 0.45, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'What is the structural functional unit formed by the interdigitation of maternal caruncles and fetal cotyledons in bovine placentation?',
        questionAr: 'ما هي الوحدة التركيبية الوظيفية المتكونة من تداخل الفلقات الأمومية (الكارنكلات) مع الفلقات الجنينية في مشيمة الأبقار؟',
        options: [
          { en: 'Placentome', ar: 'الفلجة المشيمية (Placentome)' },
          { en: 'Zonary belt', ar: 'الحزام المشيمي النطاقي' },
          { en: 'Discoid plate', ar: 'القرص المشيمي' },
          { en: 'Diffuse microcotyledons', ar: 'الفلقات المجهرية المنتشرة' }
        ],
        correctAnswer: 'Placentome',
        explanationEn: 'In ruminants, the maternal caruncle and fetal cotyledon interlock intimately to form a placentome.',
        explanationAr: 'في المجترات، تتعاشق الفلجة الأمومية الرحمية مع الفلجة الجنينية لتشكل الفلجة المشيمية الكاملة Placentome.'
      },
      {
        questionEn: 'Which vascular tactile sensation felt during transrectal palpation confirms viable advanced pregnancy in a dairy cow?',
        questionAr: 'ما هو الإحساس الوعائي الملموس عبر الجس المستقيمي الذي يؤكد وجود حمل حي متقدم في أبقار الحليب؟',
        options: [
          { en: 'Uterine artery fremitus (buzzing thrill) on the gravid horn side', ar: 'هدير (Fremitus) الشريان الرحمي الأوسط على جانب القرن الحامل' },
          { en: 'Aortic pulse cessation', ar: 'توقف نبض الأبهر' },
          { en: 'Jugular venous thrill', ar: 'هدير الوريد الوداجي' },
          { en: 'Femoral artery thrill', ar: 'هدير الشريان الفخذي' }
        ],
        correctAnswer: 'Uterine artery fremitus (buzzing thrill) on the gravid horn side',
        explanationEn: 'Hypertrophy of the middle uterine artery causes high-velocity turbulent blood flow palpable as a buzzing thrill (fremitus) from ~120 days gestation.',
        explanationAr: 'تضخم الشريان الرحمي الأوسط وسرعة تدفق الدم يحدثان هديراً اهتزازياً مميزاً (Fremitus) يُجس ابتداءً من اليوم 120 تقريباً.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'urogenital',
    meshId: 'Mesh_Bovine_VesicaUrinaria',
    nameEn: 'Bovine Urinary Bladder',
    nameAr: 'مثانة الأبقار',
    latinName: 'Vesica urinaria (Bos taurus)',
    descriptionEn: 'Large thin-walled muscular reservoir situated on the pelvic floor when empty, extending cranioventrally into the abdominal cavity when distended.',
    descriptionAr: 'خزان عضلي رقيق الجدار واسع يستقر في قاع الحوض عند الفراغ ويمتد للأمام والأسفل في تجويف البطن عند امتلائه.',
    bloodSupplyEn: 'Cranial and caudal vesical arteries off internal iliac system.',
    bloodSupplyAr: 'الشرايين المثانية الأمامية والخلفية من الحرقفي الباطن.',
    innervationEn: 'Pelvic nerve (parasympathetic motor to detrusor) and hypogastric nerve (sympathetic).',
    innervationAr: 'العصب الحوضي (حركي للمثانة) وعصب تحت المعدة (ودي).',
    clinicalPearlsEn: 'Enzootic Hematuria: Chronic ingestion of bracken fern (Pteridium aquilinum) causes bovine papillomavirus type 2 synergy, leading to bladder hemangiocarcinomas.',
    clinicalPearlsAr: 'البيلة الدموية المتوطنة: تناول نبات السرخس يسبب تحفيز فيروس الورم الحليمي BPV-2 محدثاً سرطانات وعائية نازفة في جدار المثانة.',
    focusCoordinates: { position: [0.7, 0.5, -0.7], target: [0, 0.35, -0.65] },
    geometry: { shape: 'sphere', position: [0, 0.35, -0.65], rotation: [0, 0, 0], scale: [0.28, 0.3, 0.28], color: '#a21caf', roughness: 0.35, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Chronic grazing on bracken fern (Pteridium aquilinum) in pastures causes what neoplastic condition in the bovine bladder?',
        questionAr: 'الرعي المزمن على نبات السرخس في المراعي يسبب أي حالة ورمية في مثانة الأبقار؟',
        options: [
          { en: 'Enzootic hematuria (bladder hemangiomas and transitional cell carcinomas)', ar: 'البيلة الدموية المتوطنة (أورام دموية وسرطان الخلايا الانتقالية بالمثانة)' },
          { en: 'Polycystic kidney disease', ar: 'داء الكلى المتعدد الكيسات' },
          { en: 'Complete bladder agenesis', ar: 'غياب خلقي للمثانة' },
          { en: 'Acute urethral prolapse', ar: 'تدلي الإحليل الحاد' }
        ],
        correctAnswer: 'Enzootic hematuria (bladder hemangiomas and transitional cell carcinomas)',
        explanationEn: 'Ptaquiloside toxin from bracken fern interacts with BPV-2 to cause chronic bleeding tumors of the urinary bladder mucosa.',
        explanationAr: 'سم البتاكيلوسيد في السرخس يتآزر مع فيروس البابيلوما مسبباً أوراماً دموية خبيثة نازفة في بطانة المثانة.'
      },
      {
        questionEn: 'Why is catheterization of the urinary bladder in male cattle (bulls and steers) anatomically impossible via the urethra?',
        questionAr: 'لماذا يستحيل قسطرة مثانة ذكور الأبقار (الثيران والثيران المخصية) عبر مجرى البول؟',
        options: [
          { en: 'Presence of the sigmoid flexure and the urethral diverticulum (dorsal blind sac)', ar: 'وجود الانثناء السيني والردب الإحليلي الظهري (الجيب الأعمى)' },
          { en: 'The urethra has no external orifice', ar: 'عدم وجود فتحة خارجية للإحليل' },
          { en: 'The penis has an os penis blocking the lumen', ar: 'وجود عظم قضيب يغلق المجرى' },
          { en: 'The bladder is situated cranial to the diaphragm', ar: 'وجود المثانة أمام الحجاب الحاجز' }
        ],
        correctAnswer: 'Presence of the sigmoid flexure and the urethral diverticulum (dorsal blind sac)',
        explanationEn: 'The S-shaped sigmoid flexure cannot be straightened in conscious animals, and catheters snag in the dorsal urethral diverticulum at the ischial arch.',
        explanationAr: 'الانثناء السيني الملتف والردب الإحليلي الأعمى عند القوس الإسكي يمنعان مرور القسطرة نحو المثانة.'
      }
    ]
  },
  // Skeletal
  {
    speciesSlug: 'bovine',
    systemSlug: 'skeletal',
    meshId: 'Mesh_Bovine_Cranium_Cornua',
    nameEn: 'Bovine Skull & Horn Processes',
    nameAr: 'جمجمة الأبقار والبروزات القرنية',
    latinName: 'Cranium et Processus cornuales',
    descriptionEn: 'Massive skull dominated by extensive frontal bones reaching the occipital crest, bearing bilateral cornual processes that hollow out to communicate directly with the frontal sinus.',
    descriptionAr: 'جمجمة ضخمة يهيمن عليها العظم الجبهي المتسع حتى العرف القذالي، ويحمل البروزين القرنيين المتصلين مباشرة بالجيب الجبهي.',
    bloodSupplyEn: 'Cornual artery from superficial temporal; maxillary artery branches.',
    bloodSupplyAr: 'الشريان القرني وفروع الشريان الفكي.',
    innervationEn: 'Cornual nerve from zygomaticotemporal (CN V).',
    innervationAr: 'العصب القرني من العصب الوجني الصدغي.',
    clinicalPearlsEn: 'Dehorning adult cattle exposes the diverticulum of the caudal frontal sinus directly to the atmosphere, posing a high risk of septic sinusitis.',
    clinicalPearlsAr: 'إزالة قرون الأبقار البالغة يفتح رتج الجيب الجبهي الخلفي مباشرة للهواء الخارجي مما يعرض الحيوان لخطر التهاب الجيوب القيحي.',
    focusCoordinates: { position: [0.9, 1.2, 1.0], target: [0, 1.05, 0.9] },
    geometry: { shape: 'box', position: [0, 1.05, 0.9], rotation: [-0.25, 0, 0], scale: [0.42, 0.38, 0.65], color: '#f8fafc', roughness: 0.6, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Which paranasal sinus extends directly into the cornual process (horn core) of mature horned cattle?',
        questionAr: 'أي جيب أنفي يمتد مباشرة إلى داخل النتوء القرني (قلب القرن العظمي) في الماشية البالغة؟',
        options: [
          { en: 'Caudal frontal sinus', ar: 'الجيب الجبهي الخلفي (Caudal frontal sinus)' },
          { en: 'Maxillary sinus', ar: 'الجيب الفكي العلوي' },
          { en: 'Sphenoidal sinus', ar: 'الجيب الوتدي' },
          { en: 'Palatine sinus', ar: 'الجيب الحنكي' }
        ],
        correctAnswer: 'Caudal frontal sinus',
        explanationEn: 'The cornual diverticulum of the frontal sinus pneumatizes the horn core starting around 6 months of age, communicating directly with the skull sinus.',
        explanationAr: 'يمتد رتج الجيب الجبهي داخل قلب القرن بعد عمر 6 أشهر متصلاً مباشرة بتجاويف الجيوب الجبهية بالجمجمة.'
      },
      {
        questionEn: 'What dental feature characterizes the rostral upper jaw of all cattle and small ruminants?',
        questionAr: 'ما هي الخاصية المميزة للفك العلوي الأمامي في الأبقار والمجترات الصغيرة؟',
        options: [
          { en: 'Absence of upper incisors and canines, replaced by a tough fibrocartilaginous dental pad (Pulvinus dentalis)', ar: 'غياب القواطع والأنياب العلوية واستبدالها بالوسادة السنية القرنية الصلبة' },
          { en: 'Massive razor-sharp carnassial teeth', ar: 'أضراس قاطعة حادة كاللواحم' },
          { en: 'Continuously growing upper tusks', ar: 'أنياب علوية تنمو باستمرار' },
          { en: 'Six incisors and two canines like horses', ar: 'ستة قواطع ونابان كالخيل' }
        ],
        correctAnswer: 'Absence of upper incisors and canines, replaced by a tough fibrocartilaginous dental pad (Pulvinus dentalis)',
        explanationEn: 'Ruminants lack upper front teeth; the lower incisors press against the keratinized dental pad to crop grass.',
        explanationAr: 'تفتقر المجترات للقواطع والأنياب العلوية؛ وتضغط القواطع السفلية ضد الوسادة السنية الصلبة لقطع الأعشاب.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'skeletal',
    meshId: 'Mesh_Bovine_Vertebrae',
    nameEn: 'Bovine Vertebral Column',
    nameAr: 'العمود الفقري للأبقار',
    latinName: 'Columna vertebralis (C7 T13 L6 S5 Ca18-20)',
    descriptionEn: 'Axial framework with prominent dorsal spinous processes at withers (T1-T4) supporting the massive head via the lamellar and funicular ligamentum nuchae.',
    descriptionAr: 'الدعامة المحورية ذات نواتئ شوكية ظهرية بارزة عند الغارب لدعم الرأس الثقيل بواسطة الحبل القفوي الليفي المرن.',
    bloodSupplyEn: 'Vertebral, intercostal, and lumbar segmental spinal arteries.',
    bloodSupplyAr: 'الشرايين الشوكية الفقرية والوربية والقطنية.',
    innervationEn: 'Spinal nerves (dorsal and ventral rami).',
    innervationAr: 'الأعصاب الشوكية القطعية.',
    clinicalPearlsEn: 'The tall thoracic spinous processes form the withers; the ligamentum nuchae has a funicular part attaching to the external occipital protuberance.',
    clinicalPearlsAr: 'النواتئ الشوكية الصدرية العالية تشكل الغارب؛ ويتصل الحبل القفوي بالبروز القذالي الخارجي لحمل الرأس.',
    focusCoordinates: { position: [1.2, 1.1, 0.2], target: [0, 0.92, 0.15] },
    geometry: { shape: 'cylinder', position: [0, 0.92, 0.15], rotation: [0.08, 0, 0], scale: [0.11, 1.35, 0.11], color: '#f1f5f9', roughness: 0.55, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'What is the standard vertebral formula for domestic cattle (Bos taurus)?',
        questionAr: 'ما هي الصيغة الفقرية القياسية للماشية المستأنسة (Bos taurus)؟',
        options: [
          { en: 'C7 T13 L6 S5 Ca18-20', ar: 'C7 T13 L6 S5 Ca18-20' },
          { en: 'C7 T18 L6 S5 Ca15-21', ar: 'C7 T18 L6 S5 Ca15-21' },
          { en: 'C7 T13 L7 S3 Ca20-23', ar: 'C7 T13 L7 S3 Ca20-23' },
          { en: 'C7 T14 L6 S4 Ca16-18', ar: 'C7 T14 L6 S4 Ca16-18' }
        ],
        correctAnswer: 'C7 T13 L6 S5 Ca18-20',
        explanationEn: 'Cattle have 7 cervical, 13 thoracic (and 13 pairs of ribs), 6 lumbar, 5 fused sacral, and 18-20 caudal vertebrae.',
        explanationAr: 'تمتلك الماشية 7 فقرات رقبية، 13 صدرية (و13 زوج أضلاع)، 6 قطنية، 5 عجزية، و18-20 ذيلية.'
      },
      {
        questionEn: 'How does the funicular part of the bovine ligamentum nuchae attach cranially compared to the dog?',
        questionAr: 'كيف يرتكز الجزء الحبلي للرباط القفوي في البقر قحفياً مقارنة بالكلاب؟',
        options: [
          { en: 'Extends directly to the external occipital protuberance of the skull', ar: 'يمتد مباشرة إلى البروز القذالي الخارجي للجمجمة' },
          { en: 'Attaches only to the axis (C2) spine', ar: 'يرتكز على الفقرة الثانية المحور C2 فقط' },
          { en: 'It is completely absent in ruminants', ar: 'غائب تماماً في المجترات' },
          { en: 'Attaches to the mandibles', ar: 'يرتكز على الفكين السفليين' }
        ],
        correctAnswer: 'Extends directly to the external occipital protuberance of the skull',
        explanationEn: 'In large ungulates, the powerful paired funicular bands insert on the occipital bone to mechanically counterbalance head weight.',
        explanationAr: 'في الحوافر الكبيرة يمتد الرباط القفوي حتى عظم القذال بالجمجمة لدعم الوزن الهائل للرأس والقرون.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'skeletal',
    meshId: 'Mesh_Bovine_OssaMetacarpi_Digiti',
    nameEn: 'Bovine Cannon Bone & Cloven Digits',
    nameAr: 'عظم الساق والأصابع المشقوقة للأبقار',
    latinName: 'Os metacarpale III+IV et Digiti III et IV',
    descriptionEn: 'Fused cannon bone (large metacarpal III and IV) bearing two fully developed weight-bearing cloven digits (digits III and IV) with paired hooves (claws).',
    descriptionAr: 'عظم الساق الملتحم (المشط الثالث والرابع) الذي يحمل إصبعين مشقوقين كاملي النمو حاملين للوزن (الإصبعان 3 و 4) بظلفين مزدوجين.',
    bloodSupplyEn: 'Dorsal and palmar common digital arteries.',
    bloodSupplyAr: 'الشرايين الإصبعية الظهرية والراحية المشتركة.',
    innervationEn: 'Axial and abaxial digital nerves.',
    innervationAr: 'الأعصاب الإصبعية المحورية والمحاذية.',
    clinicalPearlsEn: 'Footrot (Interdigital Phlegmon) and Sole Ulcers (Rusterholz ulcers): In dairy cows, >80% of lameness affects the lateral claw of the hindlimb.',
    clinicalPearlsAr: 'تعفن القدم وقرحة باطن الظلف: في أبقار الحليب تصيب أكثر من 80% من حالات العرج الظلف الوحشي (الخارجي) للقائمة الخلفية.',
    focusCoordinates: { position: [0.9, 0.4, 0.4], target: [0.32, 0.08, 0.3] },
    geometry: { shape: 'cylinder', position: [0.32, 0.08, 0.3], rotation: [0, 0, 0], scale: [0.1, 0.65, 0.1], color: '#e2e8f0', roughness: 0.5, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Which claw of the bovine pelvic limb bears the majority of weight and is most frequently affected by lameness and ulcers?',
        questionAr: 'أي ظلف في القائمة الخلفية للأبقار يحمل النسبة الأكبر من الوزن ويكون الأكثر عرضة للعرج والقروح؟',
        options: [
          { en: 'Lateral claw of the hindlimb', ar: 'الظلف الوحشي (الخارجي) للقائمة الخلفية' },
          { en: 'Medial claw of the hindlimb', ar: 'الظلف الإنسي (الداخلي) للقائمة الخلفية' },
          { en: 'Both claws carry exactly 50% identically', ar: 'كلا الظلفين يحملان 50% بالتساوي' },
          { en: 'Dewclaws (digits II and V)', ar: 'الأظلاف الإضافية الأثرية' }
        ],
        correctAnswer: 'Lateral claw of the hindlimb',
        explanationEn: 'Biomechanically, the lateral claw of the rear limb takes the primary impact during stride, making it the site of >80% of hindlimb lameness.',
        explanationAr: 'ميكانيكياً يتلقى الظلف الخارجي للقدم الخلفية الصدمة الكبرى للخطوة، مما يجعله موقعاً لـ 80% من قروح العرج.'
      },
      {
        questionEn: 'The bovine cannon bone represents the developmental fusion of which two metacarpal bones?',
        questionAr: 'يمثل عظم الساق (Cannon bone) في الأبقار التحام أي عظمين من عظام مشط اليد؟',
        options: [
          { en: 'Metacarpals III and IV', ar: 'عظما مشط اليد الثالث والرابع (III + IV)' },
          { en: 'Metacarpals I and II', ar: 'الأول والثاني' },
          { en: 'Metacarpals II and V', ar: 'الثاني والخامس' },
          { en: 'Single Metacarpal III like the horse', ar: 'المشط الثالث المفرد كالحصان' }
        ],
        correctAnswer: 'Metacarpals III and IV',
        explanationEn: 'In ruminants, metacarpals III and IV fuse into a single large bone separated internally by a vertical septum.',
        explanationAr: 'في المجترات يلتحم المشطان الثالث والرابع في عظم واحد يفصل بينهما حاجز طولي داخلي.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'skeletal',
    meshId: 'Mesh_Bovine_Pelvis',
    nameEn: 'Bovine Pelvis & Pelvic Landmarks',
    nameAr: 'حوض الأبقار والمعالم الحوضية',
    latinName: 'Pelvis (Os coxae: Ilium, Ischium, Pubis)',
    descriptionEn: 'Broad, spacious pelvic girdle with prominent tuber coxae (hook bone), tuber ischiadicum (pin bone), and wide birth canal for unhindered delivery.',
    descriptionAr: 'حزام حوضي متسع ذو حدبة حرقفية بارزة (عظم الورك/الخطاف) وحدبة إسركية (عظم الدبوس) وقناة ولادة واسعة للولادة الطبيعية.',
    bloodSupplyEn: 'Internal and external iliac arteries.',
    bloodSupplyAr: 'الشرايين الحرقفية الباطنة والظاهرة.',
    innervationEn: 'Lumbosacral plexus (obturator, sciatic, femoral, pudendal nerves).',
    innervationAr: 'الضفيرة القطنية العجزية (الأعصاب السدادية والورك والفخذية والاستحيائية).',
    clinicalPearlsEn: 'Calving ease and pelvimetry: Measuring the pelvic height and width between tuber coxae (hooks) and tuber ischiadicum (pins) assesses dystocia risk.',
    clinicalPearlsAr: 'قياس أبعاد الحوض: قياس المسافة بين عظم الورك (Hooks) وعظم الدبوس (Pins) يحدد ملاءمة البقرة للولادة الطبيعية وخطر التعسر.',
    focusCoordinates: { position: [1.2, 0.9, -0.4], target: [0, 0.65, -0.5] },
    geometry: { shape: 'torus', position: [0, 0.65, -0.5], rotation: [0.5, 0, 0], scale: [0.45, 0.35, 0.28], color: '#f1f5f9', roughness: 0.55, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'In dairy cattle conformation, what anatomical terms correspond to the colloquial "hook bones" and "pin bones"?',
        questionAr: 'في تقييم قوام أبقار الحليب، ما هي المصطلحات التشريحية المطابقة لـ "عظم الورك/الخطاف" و "عظم الدبوس"؟',
        options: [
          { en: 'Hook = Tuber coxae; Pin = Tuber ischiadicum', ar: 'عظم الخطاف = الحدبة الحرقفية؛ عظم الدبوس = الحدبة الإسكية' },
          { en: 'Hook = Tuber sacrale; Pin = Greater trochanter', ar: 'الحدبة العجزية والمدور الكبير' },
          { en: 'Hook = Patella; Pin = Calcaneus', ar: 'الرضفة وكعب القدم' },
          { en: 'Hook = Xiphoid; Pin = Pubis', ar: 'الخنجري والعانة' }
        ],
        correctAnswer: 'Hook = Tuber coxae; Pin = Tuber ischiadicum',
        explanationEn: 'The tuber coxae (iliac wing) forms the prominent hook bone, while the caudal tuber ischiadicum forms the pin bone beside the tail base.',
        explanationAr: 'تشكل الحدبة الحرقفية عظم الخطاف الجانبي البارز، بينما تشكل الحدبة الإسكية الخلفية عظم الدبوس بجانب قاعدة الذيل.'
      },
      {
        questionEn: 'What happens to the sacrosciatic (sacrotuberous) ligament in pregnant cattle immediately prior to parturition?',
        questionAr: 'ماذا يحدث للرباط العجزي الإسكي في الأبقار الحوامل قبل الولادة مباشرة؟',
        options: [
          { en: 'Marked relaxation and softening under the influence of estrogen and relaxin ("dropping of the pin bones")', ar: 'ارتخاء وليونة شديدة بتأثير الإستروجين والريلاكسين ("هبوط عظام الحوض")' },
          { en: 'Complete calcification and hardening', ar: 'تكلس وتصلب تام' },
          { en: 'Acute rupture causing pelvic collapse', ar: 'تمزق حاد' },
          { en: 'Shortens by 50%', ar: 'ينكمش بنسبة 50%' }
        ],
        correctAnswer: 'Marked relaxation and softening under the influence of estrogen and relaxin ("dropping of the pin bones")',
        explanationEn: 'Rising relaxin and estrogen relax the broad pelvic ligaments, creating noticeable hollows around the tail head 24-48 hours pre-calving.',
        explanationAr: 'يؤدي هرمونا الريلاكسين والإستروجين لارتخاء أربطة الحوض مشكلين غؤوراً ملحوظاً حول قاعدة الذيل إيذاناً باقتراب الولادة.'
      }
    ]
  },
  // Muscular
  {
    speciesSlug: 'bovine',
    systemSlug: 'muscular',
    meshId: 'Mesh_Bovine_MusculusTricepsBrachii',
    nameEn: 'Bovine Triceps Brachii Muscle',
    nameAr: 'العضلة ثلاثية الرؤوس العضدية للأبقار',
    latinName: 'Musculus triceps brachii (Caput longum, laterale, mediale)',
    descriptionEn: 'Massive triangular muscular engine on caudal arm extending the elbow (cubital) joint to support the cow\'s substantial 600-800 kg cranial body weight.',
    descriptionAr: 'كتلة عضلية مثلثة هائلة خلف العضد تبسط مفصل الكوع لتحمل وزن مقدمة جسم البقرة الضخم البالغ 600-800 كجم.',
    bloodSupplyEn: 'Subscapular and deep brachial arteries.',
    bloodSupplyAr: 'الشريانان تحت الكتفي والعضدي العميق.',
    innervationEn: 'Radial nerve (Nervus radialis C7-T1).',
    innervationAr: 'العصب الكعبري (C7-T1).',
    clinicalPearlsEn: 'Radial nerve paralysis ("dropped elbow") prevents elbow extension; the cow is unable to bear weight on the affected forelimb, dragging the claw.',
    clinicalPearlsAr: 'شلل العصب الكعبري (سقوط الكوع): يمنع بسط مفصل الكوع فتعجز البقرة عن حمل وزنها على القائمة وتسحب ظلفها على الأرض.',
    focusCoordinates: { position: [1.1, 0.6, 0.4], target: [0.32, 0.42, 0.32] },
    geometry: { shape: 'box', position: [0.32, 0.42, 0.32], rotation: [0.2, 0, 0.1], scale: [0.22, 0.42, 0.32], color: '#991b1b', roughness: 0.5, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Which nerve innervates all heads of the musculus triceps brachii in cattle?',
        questionAr: 'أي عصب يغذي جميع رؤوس العضلة ثلاثية الرؤوس العضدية في الأبقار؟',
        options: [
          { en: 'Radial nerve (Nervus radialis)', ar: 'العصب الكعبري (Nervus radialis)' },
          { en: 'Suprascapular nerve', ar: 'العصب فوق الكتفي' },
          { en: 'Ulnar nerve', ar: 'العصب الزندي' },
          { en: 'Musculocutaneous nerve', ar: 'العصب العضلي الجلدي' }
        ],
        correctAnswer: 'Radial nerve (Nervus radialis)',
        explanationEn: 'The radial nerve innervates all elbow extensor muscles; damage produces characteristic dropped elbow and inability to lock the limb in extension.',
        explanationAr: 'يغذي العصب الكعبري باسطات مفصل الكوع؛ ويؤدي شلله لسقوط الكوع وعجز الحيوان عن تثبيت القائمة لحمل وزنه.'
      },
      {
        questionEn: 'How many heads of the triceps brachii are present in domestic ruminants?',
        questionAr: 'كم عددا رؤوس العضلة ثلاثية الرؤوس العضدية الموجودة في المجترات المستأنسة؟',
        options: [
          { en: 'Three heads (long, lateral, medial; accessory head is absent)', ar: 'ثلاثة رؤوس (طويل، وحشي، وأنسي؛ والرأس الإضافي غائب)' },
          { en: 'Four heads like carnivores', ar: 'أربعة رؤوس كالكلاب' },
          { en: 'Two heads only', ar: 'رأسان فقط' },
          { en: 'Five heads', ar: 'خمسة رؤوس' }
        ],
        correctAnswer: 'Three heads (long, lateral, medial; accessory head is absent)',
        explanationEn: 'In ruminants and horses, only three heads are present (caput longum, laterale, and mediale); the accessory head occurs only in carnivores.',
        explanationAr: 'في المجترات والخيول توجد 3 رؤوس فقط، بينما الرأس الإضافي الرابع (Caput accessorium) يوجد فقط في اللواحم كالكلاب.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'muscular',
    meshId: 'Mesh_Bovine_MusculusBicepsFemoris',
    nameEn: 'Bovine Gluteobiceps Muscle',
    nameAr: 'العضلة الألوية ذات الرأسين في الأبقار',
    latinName: 'Musculus gluteobiceps',
    descriptionEn: 'Massive fused muscular slab covering the entire lateral pelvic and thigh region, formed by the phylogenetic union of the gluteus superficialis and biceps femoris.',
    descriptionAr: 'صفيحة عضلية ضخمة ملتحمة تغطي كامل الجانب الوحشي للحوض والفخذ ناتجة عن اتحاد الألوية السطحية مع ذات الرأسين الفخذية.',
    bloodSupplyEn: 'Caudal gluteal and lateral circumflex femoral arteries.',
    bloodSupplyAr: 'الشريانان الألوي الخلفي والمنعطف الفخذي الوحشي.',
    innervationEn: 'Caudal gluteal and sciatic nerves.',
    innervationAr: 'العصبان الألوي الخلفي والوركي.',
    clinicalPearlsEn: 'Site for intramuscular injection in meat breeds, but avoided in high-value animals due to risk of sciatic nerve damage and carcass injection site blemishes.',
    clinicalPearlsAr: 'موقع للحقن العضلي في سلالات التسمين، ولكن يُتجنب في حيوانات التربية لتفادي إصابة العصب الوركي أو خراجات اللحم.',
    focusCoordinates: { position: [1.2, 0.6, -0.4], target: [0.18, 0.5, -0.35] },
    geometry: { shape: 'capsule', position: [0.18, 0.5, -0.35], rotation: [0.3, 0.1, 0], scale: [0.16, 0.65, 0.16], color: '#991b1b', roughness: 0.5, metalness: 0.08 },
    quizQuestions: [
      {
        questionEn: 'Which two muscles are phylogenetically fused in ruminants to form the large muscular mass known as the gluteobiceps?',
        questionAr: 'ما هما العضلتان اللتان تندمجان تطورياً في المجترات لتشكيل الكتلة العضلية الضخمة المعروفة بالعضلة الألوية ذات الرأسين (Gluteobiceps)؟',
        options: [
          { en: 'Gluteus superficialis and biceps femoris', ar: 'الألوية السطحية والعضلة الفخذية ذات الرأسين' },
          { en: 'Gluteus medius and semitendinosus', ar: 'الألوية الوسطى ونصف الوترية' },
          { en: 'Tensor fasciae latae and gracilis', ar: 'موترة اللفافة العريضة والرشيقة' },
          { en: 'Rectus femoris and pectineus', ar: 'المستقيمة الفخذية والمشطية' }
        ],
        correctAnswer: 'Gluteus superficialis and biceps femoris',
        explanationEn: 'In cattle, the gluteus superficialis fuses with the biceps femoris to form the massive gluteobiceps muscle, leaving no independent superficial gluteal muscle.',
        explanationAr: 'في الأبقار تندمج الألوية السطحية مع الفخذية ذات الرأسين لتشكل عضلة الألوية الفخذية Gluteobiceps.'
      },
      {
        questionEn: 'Deep intramuscular injection into the caudal border of the bovine gluteobiceps carries severe risk of damaging which nerve?',
        questionAr: 'أي عصب يتعرض لخطر الإصابة والشلل عند الحقن العضلي العميق في الحافة الخلفية لعضلة Gluteobiceps في الأبقار؟',
        options: [
          { en: 'Sciatic nerve (Nervus ischiadicus)', ar: 'العصب الوركي (Nervus ischiadicus)' },
          { en: 'Femoral nerve', ar: 'العصب الفخذي' },
          { en: 'Saphenous nerve', ar: 'العصب الصافن' },
          { en: 'Obturator nerve', ar: 'العصب السدادي' }
        ],
        correctAnswer: 'Sciatic nerve (Nervus ischiadicus)',
        explanationEn: 'The sciatic nerve runs deep to the gluteobiceps; inaccurate caudal injections cause temporary or permanent sciatic neuropraxia and hindlimb paresis.',
        explanationAr: 'يمر العصب الوركي عميقاً تحت هذه العضلة؛ والحقن الخاطئ يسبب شلل العصب الوركي وعرج القائمة الخلفية.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'muscular',
    meshId: 'Mesh_Bovine_MusculusMasseter',
    nameEn: 'Bovine Masseter Muscle (Rumination Grinding Engine)',
    nameAr: 'العضلة الماضغة للأبقار (محرك طحن الاجترار)',
    latinName: 'Musculus masseter',
    descriptionEn: 'Broad, powerfully pennate jaw muscle spanning the facial tuber and zygomatic arch to the wide mandible angle, driving 8-10 hours of daily rumination chewing.',
    descriptionAr: 'عضلة فكية ريشية عريضة وقوية تمتد من حدبة الوجه والقوس الوجني لزاوية الفك السفلي العريضة، لتدوير طحن الاجترار 8-10 ساعات يومياً.',
    bloodSupplyEn: 'Facial and transverse facial arteries.',
    bloodSupplyAr: 'الشريانان الوجهي والوجهي المستعرض.',
    innervationEn: 'Masseteric nerve off mandibular branch of trigeminal nerve (CN V3).',
    innervationAr: 'العصب الماضغي من الشعبة الفكية السفلية للعصب الخامس CN V3.',
    clinicalPearlsEn: 'Actinomycosis ("Lumpy Jaw"): Chronic granulomatous infection of the mandible by Actinomyces bovis penetrates adjacent masseter muscle, forming draining sinuses.',
    clinicalPearlsAr: 'الفطار الشعاعي (الفك المتكتل): التهاب حبيبي مزمن في عظم الفك بكتيريا Actinomyces bovis يخترق العضلة الماضغة مشكلاً نواسير قيحية.',
    focusCoordinates: { position: [0.8, 1.1, 0.9], target: [0.18, 0.95, 0.85] },
    geometry: { shape: 'box', position: [0.18, 0.95, 0.85], rotation: [0.2, 0.3, 0], scale: [0.14, 0.32, 0.28], color: '#991b1b', roughness: 0.5, metalness: 0.08 },
    quizQuestions: [
      {
        questionEn: 'Which nerve provides motor innervation to the powerful bovine masseter muscle?',
        questionAr: 'أي عصب يوفر التعصيب الحركي للعضلة الماضغة القوية في الأبقار؟',
        options: [
          { en: 'Mandibular nerve (branch of Trigeminal nerve, CN V3)', ar: 'العصب الفكي السفلي (شعبة العصب ثلاثي التوائم CN V3)' },
          { en: 'Facial nerve (CN VII)', ar: 'العصب الوجهي (العصب السابع)' },
          { en: 'Hypoglossal nerve (CN XII)', ar: 'العصب تحت اللساني' },
          { en: 'Glossopharyngeal nerve (CN IX)', ar: 'العصب البلعومي اللساني' }
        ],
        correctAnswer: 'Mandibular nerve (branch of Trigeminal nerve, CN V3)',
        explanationEn: 'The masseteric nerve originates from CN V3 (mandibular division) to motorize all masticatory muscles.',
        explanationAr: 'ينبثق العصب الماضغي من الشعبة الفكية السفلية للعصب الخامس لتغذية عضلات المضغ حركياً.'
      },
      {
        questionEn: 'How does the lateral grinding chewing action of cattle during rumination differ mechanically from carnivores?',
        questionAr: 'كيف تختلف حركة المضغ الطاحنة الجانبية في الأبقار أثناء الاجترار ميكانيكياً عن اللواحم؟',
        options: [
          { en: 'Cattle have anisognathism with wide lateral mandibular excursion (grinding); carnivores only hinge vertically (shearing)', ar: 'الأبقار تمتلك تفاوتاً في عرض الفكين مع انزياح جانبي واسع (طحن)؛ بينما اللواحم تطبق رأسياً فقط (قص)' },
          { en: 'Cattle only chew vertically with zero lateral motion', ar: 'الأبقار تمضغ رأسياً دون أي حركة جانبية' },
          { en: 'Cattle use their tongue instead of jaw muscles', ar: 'الأبقار تستخدم اللسان بدلاً من عضلات الفك' },
          { en: 'Mandibles are permanently fused at the temporomandibular joint', ar: 'التحام الفكين في المفصل الصدغي الفكي' }
        ],
        correctAnswer: 'Cattle have anisognathism with wide lateral mandibular excursion (grinding); carnivores only hinge vertically (shearing)',
        explanationEn: 'The bovine maxilla is wider than the mandible (anisognathism), requiring wide sideways circular strokes driven by the masseter and pterygoid muscles to grind fiber.',
        explanationAr: 'الفك العلوي في البقر أعرض من السفلي، مما يتطلب حركة دائرية جانبية واسعة تديرها الماضغة لطحن الألياف السليولوزية.'
      }
    ]
  },
  {
    speciesSlug: 'bovine',
    systemSlug: 'muscular',
    meshId: 'Mesh_Bovine_TunicaFlavaAbdominis',
    nameEn: 'Bovine Yellow Abdominal Tunic',
    nameAr: 'الصفاق البطني الأصفر للأبقار (السترة المرنة)',
    latinName: 'Tunica flava abdominis',
    descriptionEn: 'Dense, highly elastic yellow fibro-elastic sheet covering the external abdominal oblique, acting as a living suspension girdle holding the massive 200 L visceral weight.',
    descriptionAr: 'صفيحة ليفية مرنة صفراء كثيفة تغطي العضلة المائلة الخارجية للبطن، تعمل كحزام شد حيوي يحمل وزن أحشاء الكرش الهائلة البالغة 200 لتر.',
    bloodSupplyEn: 'Deep and superficial circumflex iliac arteries.',
    bloodSupplyAr: 'الشرايين الحرقفية المنعطفة السطحية والعميقة.',
    innervationEn: 'Ventral branches of lumbar spinal nerves (L1-L4).',
    innervationAr: 'الفروع البطنية للأعصاب الشوكية القطنية.',
    clinicalPearlsEn: 'Surgical laparotomy closures in cattle must securely anchor suture bites into the tunica flava abdominis to prevent postoperative abdominal dehiscence and herniation.',
    clinicalPearlsAr: 'خياطة شق فتح البطن في الأبقار يجب أن تشمل الصفاق الأصفر بإحكام لمنع انفتاق أو تباعد جرح العملية تحت ثقل الكرش.',
    focusCoordinates: { position: [1.2, 0.4, -0.1], target: [0, 0.32, -0.1] },
    geometry: { shape: 'cylinder', position: [0, 0.32, -0.1], rotation: [0, 0, Math.PI / 2], scale: [0.38, 0.55, 0.38], color: '#fef08a', roughness: 0.4, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Why is the tunica flava abdominis visibly yellow and remarkably resilient in ruminants?',
        questionAr: 'لماذا يتميز الصفاق البطني (Tunica flava) بلونه الأصفر البارز ومرونته الفائقة في المجترات؟',
        options: [
          { en: 'Abundant dense elastic connective tissue fibers that store energy and support visceral weight', ar: 'وفرة ألياف النسيج الضام المرن الكثيفة التي تخزن الطاقة وتدعم وزن الأحشاء' },
          { en: 'High concentration of bilirubin dye', ar: 'تركز صبغة البيليروبين' },
          { en: 'Fatty adipose degeneration', ar: 'تنكس شحمي دهني' },
          { en: 'Presence of sulfur crystals', ar: 'وجود بلورات الكبريت' }
        ],
        correctAnswer: 'Abundant dense elastic connective tissue fibers that store energy and support visceral weight',
        explanationEn: 'The tunica flava is rich in elastin fibers, functioning as a non-fatiguing elastic hammock to suspend heavy abdominal viscera.',
        explanationAr: 'يمتلئ الصفاق الأصفر بألياف الإيلاستين المرنة التي تعمل كأرجوحة حيوية تدعم أوزان الأحشاء دون إجهاد عضلي.'
      },
      {
        questionEn: 'During a standing paralumbar fossa laparotomy (e.g. for C-section or abomasopexy), which muscle layer is intimately fused with the tunica flava?',
        questionAr: 'أثناء عملية فتح البطن في الخاصرة (كالقيسارية أو تثبيت الأنفحة)، أي طبقة عضلية تلتحم وثيقاً بالصفاق الأصفر؟',
        options: [
          { en: 'Aponeurosis of the external abdominal oblique muscle', ar: 'صفاق العضلة المائلة الخارجية للبطن' },
          { en: 'Transversus abdominis', ar: 'العضلة المستعرضة البطنية' },
          { en: 'Rectus abdominis', ar: 'المستقيمة البطنية' },
          { en: 'Peritoneum', ar: 'غشاء البريتون' }
        ],
        correctAnswer: 'Aponeurosis of the external abdominal oblique muscle',
        explanationEn: 'The tunica flava covers and fuses intimately with the aponeurosis of the external abdominal oblique on the ventral abdominal wall.',
        explanationAr: 'يلتحم الصفاق الأصفر وثيقاً مع صفاق العضلة المائلة الخارجية للبطن في جدار البطن السفلي.'
      }
    ]
  }
];
