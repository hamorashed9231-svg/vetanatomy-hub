import { OrganDetail } from '../types/anatomy';

export const ORGANS_DATA: OrganDetail[] = [
  // --- CIRCULATORY SYSTEM ---
  {
    id: 'canine_heart',
    name: {
      en: 'Heart (Four-Chambered Pump)',
      ar: 'القلب (المضخة رباعية التجاويف)',
    },
    latinName: 'Cor',
    species: ['canine', 'feline', 'equine', 'bovine', 'ovine'],
    system: 'circulatory',
    layer: 'organs',
    color: '#e11d48',
    emissiveColor: '#be123c',
    position: [0, 0.4, 0.2],
    scale: [0.75, 0.9, 0.75],
    meshType: 'heart',
    explodedOffset: [0, 0.5, 0.8],
    function: {
      en: 'Muscular central pump driving systemic and pulmonary circulation. Maintains arterial perfusion pressure and regulates systemic vascular resistance in response to autonomic stimuli.',
      ar: 'مضخة عضلية مركزية تدفع الدورة الدموية الكبرى (الجهازية) والصغرى (الرئوية). تحافظ على ضغط التروية الشرياني وتنظم المقاومة الوعائية وفقاً للمنبهات العصبية اللاإرادية.',
    },
    histology: {
      en: 'Composed of branched, striated cardiomyocytes linked by intercalated discs (gap junctions and desmosomes). Specialized Purkinje fibers in the subendocardium conduct electrical impulses rapidly.',
      ar: 'يتكون من خلايا عضلية قلبية متفرعة ومخططة ترتبط بأقراص بينية (موصلات فجوية وجسيمات رابطة). تقوم ألياف بوركيني المتخصصة في الطبقة تحت الشغاف بتوصيل النبضات الكهربائية بسرعة فائقة.',
    },
    clinicalSignificance: {
      en: 'Auscultation of the puncta maxima: Left 3rd-5th intercostal space (pulmonic, aortic, mitral valves); Right 4th intercostal space (tricuspid valve). Apex beat palpated on left thoracic wall.',
      ar: 'تحديد نقاط التسمع القلبي العظمى: الفراغات الوربية اليسرى 3 إلى 5 (الصمام الرئوي، الأبهري، والتاجي)؛ والفراغ الوربي الأيمن 4 (الصمام ثلاثي الشرفات). تُجس صدمة القمة على الجدار الصدري الأيسر.',
    },
    commonPathologies: [
      {
        en: 'Myxomatous Mitral Valve Disease (MMVD) - highly prevalent in Cavalier King Charles Spaniels and small breeds',
        ar: 'مرض الصمام التاجي المخاطي (MMVD) - شائع جداً في كلاب كافالير والسلالات الصغيرة',
      },
      {
        en: 'Dilated Cardiomyopathy (DCM) in large canines (Dobermans, Great Danes)',
        ar: 'اعتلال عضلة القلب التوسعي (DCM) في السلالات الكبيرة (الدوبرمان والجريد دان)',
      },
      {
        en: 'Hypertrophic Cardiomyopathy (HCM) with left ventricular concentric hypertrophy in felines',
        ar: 'اعتلال عضلة القلب التضخمي (HCM) مع تضخم متراكز للبطين الأيسر في القطط',
      },
      {
        en: 'Hardware disease induced Traumatic Septic Pericarditis in cattle',
        ar: 'التهاب التامور القيحي الرضحي الناجم عن مرض السلك المعدني في الأبقار',
      },
    ],
    clinicalCases: [
      {
        id: 'case_cardio_01',
        title: {
          en: 'Grade IV/VI Holosystolic Murmur in a 9-year-old Spaniel',
          ar: 'نفخة قلبية انقباضية شاملة من الدرجة 4/6 في كلب سبانيول عمره 9 سنوات',
        },
        description: {
          en: 'Patient presented with nocturnal coughing, exercise intolerance, and tachypnea. Echocardiography revealed mitral regurgitation jet with left atrial enlargement (LA:Ao > 1.6).',
          ar: 'حضر المريض يعاني من سعال ليلي، وعدم تحمل للمجهود، وسرعة تنفس. أظهر فحص الإيكو ارتجاعاً عبر الصمام التاجي وتضخماً في الأذين الأيسر (نسبة LA:Ao أكبر من 1.6).',
        },
        severity: 'critical',
        urgency: {
          en: 'Urgent: Requires pimobendan inodilator, ACE inhibitor, and loop diuretics',
          ar: 'عاجل: يتطلب بيموبندان ومثبطات ACE ومدرات البول البولية مثل فيوروسيميد',
        },
      },
    ],
    triviaOrClinicalPearl: {
      en: 'In horses, the heart weighs roughly 1% of body weight (4 to 5 kg in a 500kg horse), capable of pumping up to 300 liters of blood per minute during maximum athletic exertion!',
      ar: 'في الخيول، يزن القلب حوالي 1% من وزن الجسم (4 إلى 5 كغم في حصان وزنه 500 كغم)، وهو قادر على ضخ ما يصل إلى 300 لتر من الدم في الدقيقة أثناء الجري بأقصى طاقة!',
    },
  },

  // --- RESPIRATORY SYSTEM ---
  {
    id: 'canine_lungs',
    name: {
      en: 'Lungs & Tracheobronchial Tree',
      ar: 'الرئتان والشجرة الرغامية القصبية',
    },
    latinName: 'Pulmones',
    species: ['canine', 'feline', 'equine', 'bovine', 'ovine'],
    system: 'respiratory',
    layer: 'organs',
    color: '#38bdf8',
    emissiveColor: '#0284c7',
    position: [0, 0.55, 0.15],
    scale: [1.1, 0.8, 0.9],
    meshType: 'lungs',
    explodedOffset: [0, 0.7, 0.4],
    function: {
      en: 'Gas exchange between alveolar air and capillary blood. Also plays an indispensable thermoregulatory role via polypnea (panting) in carnivores lacking sweat glands.',
      ar: 'تبادل الغازات بين الهواء السنخي والدم الشعري. كما تلعب دوراً لا غنى عنه في التنظيم الحراري عبر اللهث السريع لدى آكلات اللحوم التي تفتقر للغدد العرقية على الجلد.',
    },
    histology: {
      en: 'Alveoli lined by Type I pneumocytes (thin squamous diffusion barrier) and Type II pneumocytes (surfactant secretion). Supported by an elastic fiber meshwork and pulmonary capillaries.',
      ar: 'تبطن الأسناخ بخلايا سنخية من النوع الأول (حاجز حرشفي رقيق لانتشار الغازات) والنوع الثاني (لإفراز مادة السورفاكتانت المخفضة للتوتر السطحي). وتدعمها شبكة ألياف مرنة وشعيرات دموية.',
    },
    clinicalSignificance: {
      en: 'In dogs, the left lung has 2 lobes (cranial and caudal), whereas the right lung has 4 distinct lobes (cranial, middle, caudal, and accessory). The right middle lobe is most prone to aspiration pneumonia.',
      ar: 'في الكلاب، تتكون الرئة اليسرى من فصين (أمامي وخلفي)، بينما تتكون الرئة اليمنى من 4 فصوص (أمامي، أوسط، خلفي، وإضافي). الفص الأوسط الأيمن هو الأكثر عرضة للإصابة بذات الرئة الاستنشاقية.',
    },
    commonPathologies: [
      {
        en: 'Aspiration Pneumonia following esophageal dysmotility or anesthesia',
        ar: 'التهاب الرئة الاستنشاقي نتيجة خلل حركية المريء أو عقب التخدير العام',
      },
      {
        en: 'Canine Infectious Respiratory Disease Complex (Kennel Cough - Bordetella bronchiseptica)',
        ar: 'مجمع أمراض الجهاز التنفسي المعدي في الكلاب (سعال بيوت الكلاب - بورديتيلا برونكيسيبتيكا)',
      },
      {
        en: 'Feline Asthma / Bronchial Disease featuring bronchial eosinophilic infiltration',
        ar: 'ربو القطط / التهاب الشعب الهوائية الحساس المصحوب بارتشاح الحمضات',
      },
      {
        en: 'Bovine Respiratory Disease Complex (BRDC / Shipping Fever)',
        ar: 'مجمع أمراض الجهاز التنفسي البقري (حمى الشحن / BRDC)',
      },
    ],
    clinicalCases: [
      {
        id: 'case_resp_01',
        title: {
          en: 'Acute Dyspnea and Open-Mouth Breathing in a 4-year-old Siamese Cat',
          ar: 'ضيق تنفس حاد وتنفس عبر الفم المفتوح في قط سيامي عمره 4 سنوات',
        },
        description: {
          en: 'Thoracic radiographs showed marked bronchial pattern (doughnuts and train tracks) and aerophagia. Arterial blood gas revealed respiratory acidosis with arterial hypoxemia.',
          ar: 'أظهرت الصور الشعاعية للصدر نمطاً قصبياً واضحاً (علامة الدونات وسكك القطار) وابتلاع هواء. وأظهر غاز الدم الشرياني حماضاً تنفسياً مع نقص أكسجة حاد.',
        },
        severity: 'critical',
        urgency: {
          en: 'Immediate emergency oxygen cage stabilization and parenteral dexamethasone/terbutaline',
          ar: 'تثبيت فوري في قفص الأكسجين وإعطاء ديكساميثازون وتيربوتالين حقناً',
        },
      },
    ],
  },

  // --- DIGESTIVE SYSTEM (MONOGASTRIC & RUMINANT) ---
  {
    id: 'canine_liver',
    name: {
      en: 'Liver (Hepatic Lobes & Gallbladder)',
      ar: 'الكبد (الفصوص الكبدية والمرارة)',
    },
    latinName: 'Hepar',
    species: ['canine', 'feline', 'equine', 'bovine', 'ovine'],
    system: 'digestive',
    layer: 'organs',
    color: '#854d0e',
    emissiveColor: '#a16207',
    position: [0, 0.45, -0.2],
    scale: [1.2, 0.75, 0.85],
    meshType: 'liver',
    explodedOffset: [0, 0.4, -0.6],
    function: {
      en: 'Major metabolic factory: synthesis of albumin and coagulation factors, glycogen storage, bile synthesis for lipid emulsification, and hepatic cytochrome P450 biotransformation/detoxification.',
      ar: 'المصنع الأيضي الأكبر: تصنيع الألبومين وعوامل التخثر، وتخزين الجليكوجين، وتصنيع الصفراء لاستحلاب الدهون، وإزالة السمية عبر إنزيمات السيتوكروم P450 الكبدية.',
    },
    histology: {
      en: 'Classic hexagonal hepatic lobules centered around a central vein. Portal triads at the periphery contain branches of the hepatic portal vein, hepatic artery, and interlobular bile duct.',
      ar: 'فصيصات كبدية سداسية كلاسيكية تلتف حول وريد مركزي. وتحتوي الثالوثيات البابية على فروع من الوريد البابي الكبدي، والشريان الكبدي، والقناة الصفراوية بين الفصيصية.',
    },
    clinicalSignificance: {
      en: 'Equines lack a gallbladder (*vesica fellea*)—bile trickles continuously into the duodenum. In cats, the pancreatic duct joins the common bile duct before entering the duodenum, causing concurrent "triaditis".',
      ar: 'تفتقر الخيول تماماً إلى المرارة (كيس الصفراء)، وتفرز الصفراء باستمرار في الاثني عشر. وفي القطط، تلتقي القناة البنكرياسية بالقناة الصفراوية العامة مما يهيئ لمرض "التهاب الثالوث" (كبد وبنكرياس وأمعاء).',
    },
    commonPathologies: [
      {
        en: 'Portosystemic Shunt (PSS) - congenital anomalous vessel bypassing hepatic parenchyma',
        ar: 'التحويلة البابية الجهازية (PSS) - وعاء دموي شاذ جنيني يتجاوز نسيج الكبد مسبباً اعتلالاً دماغياً كبدياً',
      },
      {
        en: 'Feline Hepatic Lipidosis (Fatty Liver Syndrome) secondary to prolonged anorexia',
        ar: 'التشحم الكبدي القططي (متلازمة الكبد الدهني) عقب انقطاع الأكل لفترة طويلة',
      },
      {
        en: 'Toxic Hepatopathy from Acetaminophen in cats (due to glucuronyl transferase deficiency)',
        ar: 'اعتلال كبدي سمي بالباراسيتامول في القطط (بسبب نقص إنزيم الجلوكورونيل ترانسفيراز)',
      },
    ],
    clinicalCases: [
      {
        id: 'case_liver_01',
        title: {
          en: 'Hepatic Encephalopathy in a 7-month-old Yorkshire Terrier',
          ar: 'اعتلال دماغي كبدي في جرو يوركشاير عمره 7 أشهر',
        },
        description: {
          en: 'Postprandial head pressing, circling, and ataxia. Serum bile acids pre-prandial 28 umol/L, post-prandial 142 umol/L. Contrast CT angiography confirmed single extrahepatic shunt.',
          ar: 'ضغط الرأس على الحائط بعد تناول الوجبات، ودوار وترنح حركي. ارتفعت أحماض الصفراء المصلية بعد الأكل إلى 142 ميكرومول/لتر. وأكد التصوير المقطعي وجود تحويلة مفردة خارج الكبد.',
        },
        severity: 'critical',
        urgency: {
          en: 'Surgical attenuation via Ameroid constrictor ring placement',
          ar: 'تضيق جراحي عبر وضع حلقة أميرويد قابلة للتمدد التدريجي',
        },
      },
    ],
  },
  {
    id: 'canine_stomach',
    name: {
      en: 'Stomach (Monogastric Simple Stomach)',
      ar: 'المعدة (المعدة البسيطة أحادية التجاويف)',
    },
    latinName: 'Gaster / Ventriculus',
    species: ['canine', 'feline', 'equine'],
    system: 'digestive',
    layer: 'organs',
    color: '#ea580c',
    emissiveColor: '#c2410c',
    position: [0.1, 0.25, -0.5],
    scale: [0.95, 0.7, 0.8],
    meshType: 'stomach',
    explodedOffset: [0.3, 0.3, -0.9],
    function: {
      en: 'Mechanical maceration of ingested feed, acid-peptic chemical breakdown of proteins via HCl and pepsinogen, and regulation of chyme release into the duodenum.',
      ar: 'الهرس الميكانيكي للأغذية المبتلعة، والتفكيك الكيميائي الحمضي الببتيدي للبروتينات بواسطة حمض الهيدروكلوريك وإنزيم الببسين، وتنظيم تدفق الكيموس إلى الاثني عشر.',
    },
    histology: {
      en: 'Gastric mucosa with deep gastric pits: Parietal cells secrete hydrochloric acid and intrinsic factor; Chief cells secrete pepsinogen; Enterochromaffin-like (ECL) cells release histamine.',
      ar: 'مخاطية المعدة ذات النقر المعدية العميقة: تفرز الخلايا الجدارية حمض الهيدروكلوريك والعامل الداخلي؛ وتفرز الخلايا الرئيسية الببسينوجين؛ وتفرز خلايا ECL الهستامين المنشط.',
    },
    clinicalSignificance: {
      en: 'In large deep-chested dogs, stomach rotation clockwise around the mesenteric axis produces Gastric Dilatation-Volvulus (GDV), a hyperacute surgical emergency occluding caudal vena cava.',
      ar: 'في الكلاب كبيرة الحجم وذات الصدر العميق، يؤدي دوران المعدة باتجاه عقارب الساعة حول محورها إلى التواء وتوسع المعدة الحاد (GDV)، وهي حالة جراحية فائقة الخطورة تسد الوريد الأجوف الخلفي.',
    },
    commonPathologies: [
      {
        en: 'Gastric Dilatation-Volvulus (GDV) in deep-chested breeds (Great Dane, German Shepherd)',
        ar: 'التواء وتوسع المعدة القاتل (GDV) في السلالات ذات الصدر العميق',
      },
      {
        en: 'Equine Gastric Ulcer Syndrome (EGUS) particularly at the margo plicatus',
        ar: 'متلازمة القرحة المعدية الخيلية (EGUS) خاصة عند الحافة المنسية (margo plicatus)',
      },
      {
        en: 'Foreign Body Obstruction (linear foreign bodies in felines, balls/stones in canines)',
        ar: 'انسداد الأجسام الغريبة (الأجسام الخطية كخيوط الصوف في القطط، والحجارة والكرات في الكلاب)',
      },
    ],
    clinicalCases: [
      {
        id: 'case_gdv_01',
        title: {
          en: 'Acute Gastric Torsion in a 5-year-old German Shepherd',
          ar: 'انفتال معدي حاد في كلب شيبرد ألماني عمره 5 سنوات',
        },
        description: {
          en: 'Non-productive retching, massive tympanic cranial abdominal distension, and hypovolemic shock. Right lateral radiograph demonstrated "double bubble" / Popeye arm sign.',
          ar: 'محاولات تقيؤ عقيمة، وانتفاخ بطني طبلي هائل، وصدمة نقص حجم الدم. أظهرت الأشعة الجانبية اليمنى علامة "الفقاعة المزدوجة" المميزة لانفتال المعدة.',
        },
        severity: 'critical',
        urgency: {
          en: 'Immediate emergency trocarization/orogastric decompression followed by emergency celiotomy and gastropexy',
          ar: 'تفريغ فوري طارئ للمعدة بأنبوب معدي أو إبرة بازلة يليها شق بطن طارئ وتثبيت دائم للمعدة (Gastropexy)',
        },
      },
    ],
  },
  {
    id: 'bovine_rumen',
    name: {
      en: 'Rumen (Paunch - Fermentation Vat)',
      ar: 'الكرش (المخمر الحيوي الميكروبي)',
    },
    latinName: 'Rumen',
    species: ['bovine', 'ovine'],
    system: 'digestive',
    layer: 'organs',
    color: '#ca8a04',
    emissiveColor: '#a16207',
    position: [-0.15, 0.3, -0.4],
    scale: [1.3, 1.1, 1.1],
    meshType: 'rumen',
    explodedOffset: [-0.6, 0.4, -0.6],
    function: {
      en: 'Giant anaerobic microbial fermentation chamber harboring billions of bacteria, protozoa, and fungi. Converts dietary cellulose into volatile fatty acids (Acetate, Propionate, Butyrate) as primary energy source.',
      ar: 'غرفة تخمير ميكروبية لاهوائية عملاقة تؤوي مليارات البكتيريا والأوليات والفطريات. تحول سيليلوز الأعشاب إلى أحماض دهنية طيارة (أسيتات، بروبيونات، وبيوتيرات) كمصدر طاقة رئيسي للحيوان.',
    },
    histology: {
      en: 'Non-glandular stratified squamous keratinized epithelium featuring tongue-like or leaf-like ruminal papillae that maximize surface area for volatile fatty acid absorption.',
      ar: 'ظهارة حرشفية مطبقة متقرنة غير غدية تبرز منها حليمات كرشية شبيهة بالأوراق تزيد مساحة السطح لامتصاص الأحماض الدهنية الطيارة بكفاءة عالية.',
    },
    clinicalSignificance: {
      en: 'Auscultation and percussion in the left paralumbar fossa normally demonstrates 1 to 3 primary ruminal contraction cycles per 2 minutes. Disappearance indicates ruminal stasis.',
      ar: 'التسمع والقرع في الحفرة الجانبية القطنية اليسرى يظهر في الحالة الطبيعية من 1 إلى 3 دورات تقلص كرشي كل دقيقتين. واختفاؤها علامة فارقة على شلل وخمول الكرش.',
    },
    commonPathologies: [
      {
        en: 'Ruminal Tympany (Bloat) - Frothy or free-gas distension risking asphyxiation',
        ar: 'نفاخ الكرش (الانتفاخ الغازي أو الرغوي) الذي يضغط الحجاب الحاجز مهدداً بالاختناق',
      },
      {
        en: 'Lactic Acidosis (Grain Overload) lowering ruminal pH < 5.0 and destroying protozoa',
        ar: 'الحماض اللاكتيكي بالكرش (التخمة بالحبوب) مما يخفض درجة الحموضة pH لأقل من 5 ويدمر الفلورا الطبيعية',
      },
    ],
    clinicalCases: [],
  },

  // --- NERVOUS SYSTEM ---
  {
    id: 'canine_brain',
    name: {
      en: 'Brain (Encephalon - Cerebrum, Cerebellum & Brainstem)',
      ar: 'الدماغ (المخ والمخيخ وجذع المخ)',
    },
    latinName: 'Encephalon',
    species: ['canine', 'feline', 'equine', 'bovine', 'ovine', 'avian'],
    system: 'nervous',
    layer: 'organs',
    color: '#eab308',
    emissiveColor: '#ca8a04',
    position: [0, 0.95, 1.3],
    scale: [0.65, 0.55, 0.75],
    meshType: 'brain',
    explodedOffset: [0, 0.8, 1.8],
    function: {
      en: 'Central nervous system master coordinator: motor planning, sensory integration, autonomic autonomic homeostasis, and behavioral control.',
      ar: 'المنسق المركزي للجهاز العصبي: التخطيط الحركي، والتكامل الحسي، والاتزان الداخلي اللاإرادي، والتحكم في السلوك وردود الفعل.',
    },
    histology: {
      en: 'Cerebral cortex composed of six pyramidal/granular cell layers; Cerebellar cortex features distinct Molecular, Purkinje cell, and Granular layers protected by the Blood-Brain Barrier (BBB).',
      ar: 'قشرة المخ تتكون من ست طبقات خلوية هرمية وحبيبية؛ وقشرة المخيخ تضم طبقات جزيئية وطبقة خلايا بوركيني وحبيبية مميزة، ومحمية بالحاجز الدموي الدماغي (BBB).',
    },
    clinicalSignificance: {
      en: 'Neurolocalization utilizes cranial nerve assessments (CN I through XII), menace response, pupillary light reflex (PLR), and vestibular nystagmus evaluation.',
      ar: 'يعتمد تحديد موقع الآفة العصبية على فحص الأعصاب القحفية الـ 12، واستجابة التهديد البصرية، ورد الفعل الحدقي للضوء (PLR)، وفحص الرأرأة الدهليزية.',
    },
    commonPathologies: [
      {
        en: 'Idiopathic Epilepsy in young canines (recurrent generalized tonic-clonic seizures)',
        ar: 'الصرع مجهول السبب في الكلاب اليافعة (نوبات تشنجية ارتجاجية متكررة)',
      },
      {
        en: 'Hydrocephalus in brachycephalic and toy breeds (ventricular dilatation)',
        ar: 'استسقاء الرأس في السلالات صغيرة الحجم وقصيرة الفك (توسع البطينات الدماغية)',
      },
      {
        en: 'Rabies Virus encephalomyelitis (zoonotic neurotropic rhabdovirus)',
        ar: 'داء الكلب (داء السعار) - التهاب دماغي نخاعي فيروسي فتاك مشترك بين الحيوان والإنسان',
      },
    ],
    clinicalCases: [],
  },

  // --- UROGENITAL SYSTEM ---
  {
    id: 'canine_kidneys',
    name: {
      en: 'Kidneys (Renal Cortex & Medulla)',
      ar: 'الكليتان (القشرة والنخاع الكلوي)',
    },
    latinName: 'Renes',
    species: ['canine', 'feline', 'equine', 'bovine', 'ovine'],
    system: 'urogenital',
    layer: 'organs',
    color: '#7c3aed',
    emissiveColor: '#6d28d9',
    position: [0.3, 0.5, -0.7],
    scale: [0.55, 0.7, 0.55],
    meshType: 'kidney',
    explodedOffset: [0.7, 0.6, -1.0],
    function: {
      en: 'Regulation of plasma osmolality, electrolyte concentration, acid-base equilibrium, nitrogenous waste excretion (urea, creatinine), renin secretion for blood pressure control, and erythropoietin secretion.',
      ar: 'تنظيم أسمولية البلازما، وتركيز الشوارد الكهربائية، والتوازن الحمضي القاعدي، وإفراز الفضلات النيتروجينية، وإفراز الرينين لضبط ضغط الدم، والإريثروبويتين لتكوين الدم.',
    },
    histology: {
      en: 'Functional unit is the nephron: Glomerulus surrounded by Bowman\'s capsule with podocyte filtration slits, Proximal Convoluted Tubule (brush border), Loop of Henle, and Distal Tubules.',
      ar: 'الوحدة الوظيفية هي النيفرون: يضم الكبيبة محاطة بمحفظة بومان وشقوق ترشيح الخلايا الرجلاء، والنبيب الملتف القريب ذو الحافة الفرشاتية، والتواء هنلي، والأنابيب المجمعة.',
    },
    clinicalSignificance: {
      en: 'Right kidney lies more cranial than the left kidney in canines and fits into the renal fossa of the caudate liver lobe. In cattle, the kidneys are uniquely multipyramidal and lobulated externally.',
      ar: 'تقع الكلية اليمنى في موقع أمامي مقارنة باليسرى في الكلاب وتستقر في الحفرة الكلوية للفص الكبدي الذيلي. وتتميز كلى الأبقار بأنها متعددة الفصوص ومقسمة خارجياً بشكل فريد.',
    },
    commonPathologies: [
      {
        en: 'Chronic Kidney Disease (CKD) - leading cause of mortality in geriatric cats',
        ar: 'مرض الكلى المزمن (CKD) - السبب الرئيسي للوفاة في القطط المسنة مصحوباً بفقر الدم واعتلال البروتين',
      },
      {
        en: 'Acute Kidney Injury (AKI) from ethylene glycol antifreeze or lily ingestion in cats',
        ar: 'القصور الكلوي الحاد الناجم عن التسمم بمضاد تجمد السيارات أو أزهار الزنبق في القطط',
      },
    ],
    clinicalCases: [],
  },
  {
    id: 'canine_bladder',
    name: {
      en: 'Urinary Bladder & Urethra',
      ar: 'المثانة البولية ومجرى البول',
    },
    latinName: 'Vesica urinaria',
    species: ['canine', 'feline', 'equine', 'bovine', 'ovine'],
    system: 'urogenital',
    layer: 'organs',
    color: '#a855f7',
    emissiveColor: '#9333ea',
    position: [0, 0.15, -1.1],
    scale: [0.6, 0.6, 0.7],
    meshType: 'bladder',
    explodedOffset: [0, -0.4, -1.5],
    function: {
      en: 'Compliant reservoir for urine storage and controlled voiding (micturition) mediated by the detrusor smooth muscle and internal/external urethral sphincters.',
      ar: 'خزان مرن لتخزين البول والتبول الإرادي المتحكم به عبر العضلة الدافعة للمثانة والمعصرات الإحليلية الباطنة والظاهرة.',
    },
    histology: {
      en: 'Lined with transitional epithelium (urothelium) with umbrella cells capable of extensive stretching without losing permeability barrier.',
      ar: 'تبطن بظهارة بولية انتقالية (Urothelium) ذات خلايا مظلية قادرة على التمدد الفائق مع الحفاظ على عزل السوائل الشديد.',
    },
    clinicalSignificance: {
      en: 'Male cats have a pre-scrotal conical narrowing of the urethra that makes them exceptionally susceptible to plug formation and acute lethal post-renal azotemia.',
      ar: 'يمتلك ذكور القطط تضيقاً مخروطياً قبل كيس الصفن في الإحليل، مما يجعلهم عرضة بشكل مأساوي لانسداد مجرى البول بحبيبات الستروفايت والقصور الكلوي البعدي الفتاك.',
    },
    commonPathologies: [
      {
        en: 'Feline Lower Urinary Tract Disease (FLUTD / Blocked Tom) urolithiasis',
        ar: 'متلازمة المسالك البولية السفلية في القطط (FLUTD / انسداد مجرى بول القطط)',
      },
      {
        en: 'Bacterial Cystitis and struvite/calcium oxalate calculi in dogs',
        ar: 'التهاب المثانة الجرثومي وحصوات الستروفايت وأوكسالات الكالسيوم في الكلاب',
      },
    ],
    clinicalCases: [],
  },

  // --- SKELETAL SYSTEM ---
  {
    id: 'canine_skull',
    name: {
      en: 'Skull (Cranium & Mandible)',
      ar: 'الجمجمة (القحف والفك السفلي)',
    },
    latinName: 'Cranium et Mandibula',
    species: ['canine', 'feline', 'equine', 'bovine', 'ovine', 'avian'],
    system: 'skeletal',
    layer: 'skeleton',
    color: '#f8fafc',
    emissiveColor: '#cbd5e1',
    position: [0, 0.9, 1.4],
    scale: [0.8, 0.7, 1.1],
    meshType: 'skull',
    explodedOffset: [0, 0.9, 2.0],
    function: {
      en: 'Protects the encephalon, houses primary sensory organs (olfactory, visual, auditory, gustatory), and supports the masticatory dental apparatus.',
      ar: 'يحمي الدماغ، ويضم الأعضاء الحسية الرئيسية (الشم، الرؤية، السمع، والتذوق)، ويدعم الجهاز الفكي الماضغ والأسنان.',
    },
    histology: {
      en: 'Dense cortical bone with Haversian systems (osteons) enclosing osteocytes in lacunae, connected by canaliculi, surrounding vascular Haversian canals.',
      ar: 'عظم قشري مدمج يضم أجهزة هافرس (العظمونات) التي تحوي الخلايا العظمية داخل فجوات تتصل بقنيات دقيقة حول القنوات الوعائية المركزية.',
    },
    clinicalSignificance: {
      en: 'Skull conformation types in dogs: Dolichocephalic (long snout, e.g. Greyhound), Mesocephalic (moderate, e.g. Beagle), and Brachycephalic (flattened muzzle, e.g. Pug/Bulldog, leading to Brachycephalic Airway Syndrome).',
      ar: 'أنماط جماجم الكلاب: طويلة الرأس (كالسلوقي)، متوسطة الرأس (كالبيجل)، وقصيرة الرأس (كالبولدوج والباج) التي تعاني تشريحياً من متلازمة مجرى الهواء للكلاب قصيرة الفك (BOAS).',
    },
    commonPathologies: [
      {
        en: 'Brachycephalic Obstructive Airway Syndrome (BOAS) - elongated soft palate and stenotic nares',
        ar: 'متلازمة انسداد مجرى الهواء في الكلاب قصيرة الجمجمة (استطالة الحنك الرخو وتضيق فتحتي الأنف)',
      },
      {
        en: 'Craniomandibular Osteopathy (Lion Jaw) in West Highland White Terriers',
        ar: 'اعتلال عظام الجمجمة والفك السفلي (فك الأسد) في كلاب تيريير الغربية البيضاء',
      },
    ],
    clinicalCases: [],
  },
  {
    id: 'canine_spine',
    name: {
      en: 'Vertebral Column & Rib Cage',
      ar: 'العمود الفقري والقفص الصدري',
    },
    latinName: 'Columna vertebralis et Costae',
    species: ['canine', 'feline', 'equine', 'bovine', 'ovine', 'avian'],
    system: 'skeletal',
    layer: 'skeleton',
    color: '#e2e8f0',
    emissiveColor: '#94a3b8',
    position: [0, 0.8, 0.1],
    scale: [0.85, 0.85, 2.2],
    meshType: 'spine',
    explodedOffset: [0, 1.2, 0.1],
    function: {
      en: 'Axial structural support, protection of spinal cord, suspension of visceral organs, and respiratory mechanics via costal articulation with thoracic vertebrae.',
      ar: 'الدعامة المحورية للهيكل العظمي، وحماية النخاع الشوكي، وتعليق الأعضاء الحشوية، وحركات التنفس عبر تمفصل الأضلاع مع الفقرات الصدرية.',
    },
    histology: {
      en: 'Intervertebral discs consist of an outer fibrous ring (annulus fibrosus) of type I collagen and a central gelatinous core (nucleus pulposus) rich in proteoglycans.',
      ar: 'تتكون الأقراص بين الفقرية من حلقة ليفية خارجية من كولاجين النمط I ونواة لبية جيلاتينية مركزية غنية بالبروتيوغليكان لامتصاص الصدمات.',
    },
    clinicalSignificance: {
      en: 'Vertebral formula in canines: C7, T13, L7, S3, Cd20-23. The thoracolumbar junction (T12-L2) is the most frequent site of Intervertebral Disc Extrusion (IVDD) in chondrodystrophic breeds.',
      ar: 'الصيغة الفقرية في الكلاب: 7 عنقية، 13 صدرية، 7 قطنية، 3 عجزية، و20-23 ذيلية. وتعد نقطة الاتصال الصدري القطني (T12-L2) الموقع الأكثر شيوعاً لانزلاق الغضروف وانضغاط النخاع الشوكي.',
    },
    commonPathologies: [
      {
        en: 'Intervertebral Disc Disease (IVDD) Hansen Type I (extrusion) & Type II (protrusion)',
        ar: 'انزلاق الغضروف الفقري (IVDD) من نمط هانسن الأول (انبثاق) ونمط هانسن الثاني (نتوء)',
      },
      {
        en: 'Lumbosacral Stenosis (Cauda Equina Syndrome) causing hindlimb weakness and pain',
        ar: 'تضيق المنطقة القطنية العجزية (متلازمة ذيل الفرس) المسببة لألم وعجز القوائم الخلفية',
      },
    ],
    clinicalCases: [],
  },
  {
    id: 'canine_limbs',
    name: {
      en: 'Appendicular Skeleton (Pelvis & Limbs)',
      ar: 'الهيكل العظمي الطرفي (الحوض والقوائم)',
    },
    latinName: 'Skeleton appendiculare',
    species: ['canine', 'feline', 'equine', 'bovine', 'ovine'],
    system: 'skeletal',
    layer: 'skeleton',
    color: '#cbd5e1',
    emissiveColor: '#94a3b8',
    position: [0, -0.4, 0.1],
    scale: [1.1, 1.2, 1.8],
    meshType: 'limb',
    explodedOffset: [0, -1.0, 0.1],
    function: {
      en: 'Weight-bearing locomotion, shock absorption during running, and propulsion generated through the coxofemoral (hip) and femorotibial (stifle) joints.',
      ar: 'تحمل الوزن الحركي، وامتصاص الصدمات أثناء الركض والقفز، ودفع الجسم للأمام عبر مفصل الورك ومفصل الخنقة (الركبة).',
    },
    histology: {
      en: 'Hyaline articular cartilage covering joint surfaces with lubricated synovial membrane lining joint capsules; growth plates (physis) demonstrate endochondral ossification zones.',
      ar: 'غضروف زجاجي مفصلي يغطي أسطح المفاصل مع غشاء زليلي مزلق يفرز حمض الهيالورونيك؛ وتظهر صفائح النمو مناطق التعظم الغضروفي الداخلي.',
    },
    clinicalSignificance: {
      en: 'The stifle joint features cranial and caudal cruciate ligaments. Cranial Cruciate Ligament (CCL) rupture is the leading cause of hindlimb lameness in canines, diagnosed via positive Cranial Drawer sign.',
      ar: 'يحتوي مفصل الركبة على رباطين صليبيين أمامي وخلفي. ويعد تمزق الرباط الصليبي الأمامي (CCL) السبب الأول للعرج في القوائم الخلفية للكلاب ويشخص بعلامة الدرج الإيجابية.',
    },
    commonPathologies: [
      {
        en: 'Cranial Cruciate Ligament Rupture (CCL / ACL equivalent) requiring TPLO or TTA surgery',
        ar: 'تمزق الرباط الصليبي الأمامي للكلاب والذي يتطلب جراحة TPLO أو TTA التصحيحية',
      },
      {
        en: 'Canine Hip Dysplasia (coxofemoral subluxation and secondary osteoarthritis)',
        ar: 'خلل تنسج مفصل الفخذ (تشوه مفصل الورك) الشائع في السلالات الكبيرة',
      },
      {
        en: 'Medial Patellar Luxation (MPL) in toy breeds (Chihuahuas, Pomeranians, Yorkshire Terriers)',
        ar: 'انخلاع صابونة الركبة الأنسي (MPL) في السلالات القزمة',
      },
    ],
    clinicalCases: [],
  },

  // --- MUSCULAR SYSTEM ---
  {
    id: 'canine_musculature',
    name: {
      en: 'Somatic Musculature (Locomotor Muscle Groups)',
      ar: 'الجهاز العضلي الهيكلي (المجموعات الحركية)',
    },
    latinName: 'Systema musculare',
    species: ['canine', 'feline', 'equine', 'bovine', 'ovine', 'avian'],
    system: 'muscular',
    layer: 'muscle',
    color: '#dc2626',
    emissiveColor: '#b91c1c',
    position: [0, 0.4, 0.1],
    scale: [1.2, 1.1, 2.0],
    meshType: 'muscle',
    explodedOffset: [0.8, 0, 0],
    function: {
      en: 'Forces generation for locomotion, postural stabilization, respiratory chest expansion, and shivering thermogenesis.',
      ar: 'توليد القوى الدافعة للحركة، وتثبيت القوام، وتوسيع الصدر أثناء الشهيق، وتوليد الحرارة الحيوية عبر الارتعاش العضلي.',
    },
    histology: {
      en: 'Multinucleated striated myofibers containing sarcomeric actin-myosin filaments organized by epimysium, perimysium, and endomysium fascial envelopes.',
      ar: 'ألياف عضلية مخططة متعددة النوى تحوي خيوط الأكتين والميوسين مقسمة إلى قطع عضلية ومحاطة بأغماد ليفية ضامة (Epimysium و Perimysium).',
    },
    clinicalSignificance: {
      en: 'Intramuscular injection sites: Lumbar epaxial muscles (longissimus system) cranial to L6, and semi-membranosus/semi-tendinosus muscles (with extreme care to avoid the sciatic nerve).',
      ar: 'مواقع الحقن العضلي البيطري: عضلات الظهر فوق المحورية (Epaxial) أمام الفقرة القطنية السادسة، وعضلات الفخذ الخلفية مع الحذر الشديد من إصابة العصب الوركي.',
    },
    commonPathologies: [
      {
        en: 'Masticatory Muscle Myositis (MMM) targeting 2M muscle fibers in canines',
        ar: 'التهاب عضلات المضغ المناعي (MMM) الذي يهاجم ألياف الميوسين 2M مسبباً صعوبة فتح الفم',
      },
      {
        en: 'Nutritional Myodegeneration (White Muscle Disease) in ruminants from Selenium/Vit E deficiency',
        ar: 'مرض العضلات البيضاء في المجترات نتيجة عوز السيلينيوم وفيتامين هـ',
      },
    ],
    clinicalCases: [],
  },
];
