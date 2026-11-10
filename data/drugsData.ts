import { VeterinaryDrug } from '../types/pharmacology';

export const VETERINARY_DRUGS: VeterinaryDrug[] = [
  {
    id: 'amoxicillin_clavulanate',
    genericName: 'Amoxicillin / Clavulanic Acid',
    brandNames: ['Clavamox', 'Synulox', 'Augmentin'],
    arabicName: 'أموكسيسيلين + حمض الكلافولانيك',
    category: 'antimicrobial',
    mechanismOfAction: {
      en: 'Potentiated aminopenicillin. Amoxicillin inhibits bacterial cell wall peptidoglycan synthesis, while clavulanate irreversibly binds and inactivates beta-lactamases produced by resistant pathogens.',
      ar: 'بنسلين معزز. يثبط الأموكسيسيلين تخليق ببتيدوجليكان جدار الخلية البكتيرية، بينما يرتبط الكلافولانات بشكل غير عكوس بإنزيمات البيتالاكتاماز ويعطلها.',
    },
    dosages: [
      {
        species: 'canine',
        doseMgPerKgMin: 12.5,
        doseMgPerKgMax: 25.0,
        routes: ['PO', 'SC'],
        frequency: { en: 'q12h (twice daily)', ar: 'كل 12 ساعة (مرتين يومياً)' },
        notes: { en: 'Administer with food to reduce gastrointestinal upset.', ar: 'يُعطى مع الطعام لتقليل الاضطرابات المعدية والمعوية.' },
      },
      {
        species: 'feline',
        doseMgPerKgMin: 12.5,
        doseMgPerKgMax: 20.0,
        routes: ['PO', 'SC'],
        frequency: { en: 'q12h (twice daily)', ar: 'كل 12 ساعة (مرتين يومياً)' },
      },
      {
        species: 'bovine',
        doseMgPerKgMin: 7.0,
        doseMgPerKgMax: 10.0,
        routes: ['IM'],
        frequency: { en: 'q24h for 3-5 days', ar: 'كل 24 ساعة لمدة 3-5 أيام' },
      },
      {
        species: 'equine',
        doseMgPerKgMin: 0,
        doseMgPerKgMax: 0,
        routes: ['PO'],
        frequency: { en: 'Contraindicated', ar: 'ممنوع الاستخدام' },
        isContraindicated: true,
        contraindicationReason: {
          en: 'Oral penicillins cause severe, often fatal dysbiosis, typhlocolitis, and clostridial enterotoxemia in horses!',
          ar: 'تسبب البنسلينات الفموية خللاً ميكروبياً فتاكاً والتهاب أعور وقولون ناتج عن سموم الكلوستريديوم في الخيول!',
        },
      },
    ],
    indications: [
      { en: 'Pyoderma, bite wounds, and soft tissue infections', ar: 'التهاب الجلد القيحي، وجروح العض، وعدوى الأنسجة الرخوة' },
      { en: 'Bacterial urinary tract infections (UTI)', ar: 'عدوى المسالك البولية الجرثومية' },
      { en: 'Periodontal infections and feline upper respiratory tract disease', ar: 'التهابات دواعم السن وأمراض الجهاز التنفسي العلوي للقطط' },
    ],
    contraindications: [
      { en: 'Known hypersensitivity to penicillins or cephalosporins', ar: 'التحسس المسبق للبنسلينات أو السيفالوسبورينات' },
      { en: 'Strictly avoid oral administration in hindgut fermenters (horses, rabbits, guinea pigs)', ar: 'يمنع منعاً باتاً فموياً في الحيوانات ذات التخمر المعوي الخلفي كالأرانب والخيول' },
    ],
    adverseEffects: [
      { en: 'Vomiting, diarrhea, anorexia (dose-dependent)', ar: 'قيء، إسهال، وفقدان شهية عابر' },
      { en: 'Allergic cutaneous reactions or urticaria', ar: 'تفاعلات حساسية جلدية أو شرى' },
    ],
    clinicalPearls: {
      en: 'First-line antimicrobial for cat bite abscesses (Pasteurella multocida coverage) and superficial canine pyoderma.',
      ar: 'المضاد الحيوي الأول لعلاج خراريج عضات القطط (لتغطية بكتيريا الباستيريلا) والتهابات الجلد السطحية في الكلاب.',
    },
  },
  {
    id: 'meloxicam',
    genericName: 'Meloxicam',
    brandNames: ['Metacam', 'Loxicom', 'Meloxidyl'],
    arabicName: 'ميلوكسيكام',
    category: 'nsaid',
    mechanismOfAction: {
      en: 'Oxicam-class non-steroidal anti-inflammatory drug (NSAID) with preferential inhibition of Cyclooxygenase-2 (COX-2) over COX-1, attenuating prostaglandin synthesis in inflamed tissues while sparing gastric mucosal prostacyclins.',
      ar: 'مضاد التهاب غير ستيرويدي من فئة الأوكسيكام، يثبط تفضيلياً إنزيم الأكسدة الحلقية الثاني (COX-2) مما يقلل تخليق البروستاجلاندينات الالتهابية مع حماية بطانة المعدة.',
    },
    dosages: [
      {
        species: 'canine',
        doseMgPerKgMin: 0.2, // Day 1 loading
        doseMgPerKgMax: 0.1, // Maintenance q24h
        routes: ['PO', 'SC', 'IV'],
        frequency: { en: 'q24h (Loading 0.2 mg/kg, then 0.1 mg/kg)', ar: 'كل 24 ساعة (جرعة تحميل 0.2 مجم/كجم ثم 0.1 مجم/كجم)' },
        notes: { en: 'Always administer with food. Ensure patient is euvolemic.', ar: 'يُعطى دائماً مع الطعام، وتأكد من ترطيب الكلى الجيد للمريض.' },
      },
      {
        species: 'feline',
        doseMgPerKgMin: 0.05,
        doseMgPerKgMax: 0.05,
        routes: ['PO', 'SC'],
        frequency: { en: 'Single dose or ultra-low micro-dosing (0.01-0.03 mg/kg) under strict renal monitoring', ar: 'جرعة واحدة أو جرعات بالغة الدقة تحت مراقبة كلوية صارمة' },
        notes: { en: 'FDA black-box warning in US against repeated oral dosing in cats due to acute renal failure risks.', ar: 'تحذير طبي مشدد ضد تكرار الجرعات الفموية العشوائية في القطط لتجنب الفشل الكلوي الحاد.' },
      },
      {
        species: 'bovine',
        doseMgPerKgMin: 0.5,
        doseMgPerKgMax: 0.5,
        routes: ['SC', 'IV'],
        frequency: { en: 'Single dose (duration 48-72h)', ar: 'جرعة واحدة (يمتد مفعولها 48-72 ساعة)' },
        notes: { en: 'Highly efficacious for pain management during calf dehorning and mastitis.', ar: 'فعال للغاية لتخفيف ألم إزالة القرون والتهاب الضرع في الأبقار.' },
      },
      {
        species: 'equine',
        doseMgPerKgMin: 0.6,
        doseMgPerKgMax: 0.6,
        routes: ['PO', 'IV'],
        frequency: { en: 'q24h', ar: 'كل 24 ساعة' },
      },
    ],
    indications: [
      { en: 'Post-operative orthopedic and soft-tissue surgical analgesia', ar: 'تسكين آلام ما بعد جراحات العظام والأنسجة الرخوة' },
      { en: 'Management of osteoarthritis and chronic musculoskeletal pain', ar: 'علاج خشونة والتهاب المفاصل المزمن وآلام الحركة' },
      { en: 'Supportive therapy in acute bovine mastitis and respiratory disease', ar: 'علاج داعم في التهاب الضرع الحاد ومتلازمة الجهاز التنفسي في الأبقار' },
    ],
    contraindications: [
      { en: 'Pre-existing renal or hepatic insufficiency', ar: 'القصور الكلوي أو الكبدي المسبق' },
      { en: 'Gastrointestinal ulceration or bleeding disorders', ar: 'قرحة المعدة أو اضطرابات النزيف وتخثر الدم' },
      { en: 'Concurrent administration with corticosteroids or other NSAIDs (washout period required)', ar: 'التزامن مع الكورتيزون أو أي مضاد التهاب آخر (يتطلب فترة تصفية)' },
    ],
    adverseEffects: [
      { en: 'GI ulceration, melena, vomiting, renal papillary necrosis if dehydrated', ar: 'تقرح هضمي، براز أسود مدمم، قيء، ونخر حليمي كلوي في حالات الجفاف' },
    ],
    clinicalPearls: {
      en: 'Never combine with glucocorticoids (e.g. Prednisolone) without a mandatory 5-7 day washout period to avoid catastrophic gastrointestinal perforation.',
      ar: 'إياك والجمع بين الميلوكسيكام والكورتيزونات دون فترة توقف وغسيل لمدة 5-7 أيام لتجنب حدوث ثقب معوي كارثي.',
    },
  },
  {
    id: 'propofol',
    genericName: 'Propofol',
    brandNames: ['Diprivan', 'PropoFlo', 'Rapinovet'],
    arabicName: 'بروبوفول',
    category: 'anesthetic',
    mechanismOfAction: {
      en: 'Alkylphenol derivative that modulates central GABA-A receptor complex, increasing chloride conductance and causing rapid, smooth neuronal hyperpolarization and hypnosis.',
      ar: 'مشتق ألكيل فينيل يعزز مستقبلات GABA-A المركزية، مما يزيد نفاذية الكلوريد ويؤدي لفرط استقطاب عصبي وتنويم فوري وسلس.',
    },
    dosages: [
      {
        species: 'canine',
        doseMgPerKgMin: 4.0,
        doseMgPerKgMax: 6.0,
        routes: ['IV'],
        frequency: { en: 'Slow IV titration to effect (over 60-90 seconds)', ar: 'حقن وريدي بطيء بالتدريج حتى زوال منعكسات الحنجرة' },
        notes: { en: 'Reduce dose by 50% if patient is pre-medicated with opioids and alpha-2 agonists.', ar: 'تُخفض الجرعة إلى النصف إذا تم إعطاء مهدئات أفيونية مسبقة.' },
      },
      {
        species: 'feline',
        doseMgPerKgMin: 4.0,
        doseMgPerKgMax: 8.0,
        routes: ['IV'],
        frequency: { en: 'Slow IV titration to effect', ar: 'حقن وريدي بطيء بالتدريج حتى التأثير المطلوب' },
        notes: { en: 'Repeated dosing on consecutive days causes Heinz body hemolytic anemia in cats.', ar: 'تكرار الجرعات لأيام متتالية في القطط يسبب فقر دم انحلالي بأجسام هاينز.' },
      },
      {
        species: 'equine',
        doseMgPerKgMin: 2.0,
        doseMgPerKgMax: 2.5,
        routes: ['IV'],
        frequency: { en: 'Induction following xylazine/ketamine', ar: 'حث التخدير عقب الزيلازين والكيتامين' },
      },
    ],
    indications: [
      { en: 'Induction of general anesthesia prior to endotracheal intubation', ar: 'حث التخدير العام قبل تركيب الأنبوب الحنجري' },
      { en: 'Total Intravenous Anesthesia (TIVA) for short non-invasive procedures', ar: 'تخدير وريدي كلي (TIVA) للإجراءات القصيرة' },
    ],
    contraindications: [
      { en: 'Hypovolemic shock or severe myocardial depression', ar: 'صدمة نقص حجم الدم أو هبوط عضلة القلب الحاد' },
      { en: 'Hypersensitivity to egg or soy emulsion vehicle', ar: 'التحسس من مستحلب ليسيثين البيض وزيت الصويا' },
    ],
    adverseEffects: [
      { en: 'Dose-dependent transient apnea (especially if bolused rapidly)', ar: 'توقف مؤقت للتنفس (خاصة عند الحقن السريع غير المتأني)' },
      { en: 'Peripheral vasodilation and arterial hypotension', ar: 'توسع الأوعية المحيطية وهبوط ضغط الدم الشرياني' },
    ],
    clinicalPearls: {
      en: 'Always pre-oxygenate the patient for 3-5 minutes prior to induction and be prepared to intubate immediately upon loss of jaw tone.',
      ar: 'قم دائماً بتشبيع المريض بالأكسجين لمدة 3-5 دقائق قبل حث التخدير، وكن مستعداً لإدخال الأنبوب الحنجري فور ارتخاء الفك.',
    },
  },
  {
    id: 'pimobendan',
    genericName: 'Pimobendan',
    brandNames: ['Vetmedin'],
    arabicName: 'بيموبندان',
    category: 'cardiovascular',
    mechanismOfAction: {
      en: 'Inodilator: exerts positive inotropy via calcium sensitization of cardiac contractile myofilaments without increasing myocardial oxygen demand, coupled with peripheral and coronary vasodilation via Phosphodiesterase III (PDE III) inhibition.',
      ar: 'موسع وعائي ومقوٍ لعضلة القلب: يزيد حساسية خيوط العضلات للكالسيوم دون زيادة استهلاك الأكسجين، مع توسيع الأوعية الدموية الطرفية والتاجية عبر تثبيط إنزيم PDE III.',
    },
    dosages: [
      {
        species: 'canine',
        doseMgPerKgMin: 0.25,
        doseMgPerKgMax: 0.3,
        routes: ['PO'],
        frequency: { en: 'q12h (1 hour before meals)', ar: 'كل 12 ساعة (قبل الأكل بساعة على معدة فارغة)' },
        notes: { en: 'Food significantly blunts oral bioavailability; strictly dose on empty stomach.', ar: 'الطعام يقلل امتصاص الدواء بشكل ملحوظ؛ يجب إعطاؤه على معدة فارغة تماماً.' },
      },
      {
        species: 'feline',
        doseMgPerKgMin: 0.15,
        doseMgPerKgMax: 0.3,
        routes: ['PO'],
        frequency: { en: 'q12h (in congestive heart failure secondary to DCM or HCM without outflow obstruction)', ar: 'كل 12 ساعة (في قصور القلب الاحتقاني غير المصحوب بانسداد مجرى البطين)' },
      },
    ],
    indications: [
      { en: 'Canine Stage B2 preclinical and Stage C congestive Myxomatous Mitral Valve Disease (MMVD)', ar: 'علاج قصور الصمام التاجي المخاطي في الكلاب للمرحلتين B2 و C' },
      { en: 'Dilated Cardiomyopathy (DCM) in dogs and select feline cases', ar: 'اعتلال عضلة القلب التوسعي (DCM)' },
    ],
    contraindications: [
      { en: 'Hypertrophic cardiomyopathy with dynamic Left Ventricular Outflow Tract (LVOT) obstruction (SAM)', ar: 'اعتلال القلب التضخمي المصحوب بانسداد مجرى تدفق البطين الأيسر الديناميكي' },
      { en: 'Aortic or pulmonic stenosis', ar: 'تضيق الصمام الأبهري أو الرئوي البنيوي' },
    ],
    adverseEffects: [
      { en: 'Mild inotropic tachycardia, rare lethargy, decreased appetite', ar: 'تسارع طفيف بالنبض، خمول نادر، وفقدان شهية عابر' },
    ],
    clinicalPearls: {
      en: 'The landmark EPIC trial proved Pimobendan delays the onset of heart failure or cardiac death by 15 months (approx. 60%) in asymptomatic Stage B2 dogs!',
      ar: 'أثبتت دراسة EPIC السريرية العالمية أن البيموبندان يؤخر حدوث فشل القلب أو الوفاة القلبية بمقدار 15 شهراً (حوالي 60%) في الكلاب غير المصحوبة بأعراض (المرحلة B2)!',
    },
  },
  {
    id: 'atropine_sulfate',
    genericName: 'Atropine Sulfate',
    brandNames: ['AtroJect'],
    arabicName: 'سلفات الأتروبين',
    category: 'emergency',
    mechanismOfAction: {
      en: 'Competitive muscarinic acetylcholine receptor antagonist. Blocks parasympathetic vagal tone at the SA and AV nodes, increasing heart rate and resolving vagally-mediated bradyarrhythmias. Also dries respiratory secretions.',
      ar: 'مضاد تنافسي لمستقبلات الأسيتيل كولين المسكارينية. يلغي تأثير العصب الحائر (المبهم) على العقدة الجيبية الأذينية، مما يرفع معدل ضربات القلب ويجفف الإفرازات التنفسية.',
    },
    dosages: [
      {
        species: 'canine',
        doseMgPerKgMin: 0.02,
        doseMgPerKgMax: 0.04,
        routes: ['IV', 'IM', 'SC', 'Intratracheal'],
        frequency: { en: 'Single emergency bolus; repeat in 5-10 min if indicated', ar: 'جرعة وريدية طارئة؛ تكرر بعد 5-10 دقائق عند الضرورة' },
      },
      {
        species: 'feline',
        doseMgPerKgMin: 0.02,
        doseMgPerKgMax: 0.04,
        routes: ['IV', 'IM', 'SC'],
        frequency: { en: 'Emergency bolus as indicated', ar: 'جرعة طوارئ عند الحاجة' },
      },
      {
        species: 'equine',
        doseMgPerKgMin: 0.01,
        doseMgPerKgMax: 0.02,
        routes: ['IV'],
        frequency: { en: 'Caution: risks severe intestinal ileus and colic in horses', ar: 'تحذير: يسبب شللاً معوياً ومغصاً شديداً في الخيول' },
        notes: { en: 'Only used for CPR or severe organophosphate toxicity; high colic risk.', ar: 'يستخدم فقط لإنعاش القلب أو التسمم بالمبيدات الحشرية نظراً لخطورة المغص المعوي.' },
      },
    ],
    indications: [
      { en: 'Severe sinus bradycardia, sinoatrial arrest, and high-grade AV block', ar: 'بطء القلب الجيبي الشديد، وتوقف العقدة الجيبية، وإحصار القلب الأذيني البطيني' },
      { en: 'Cardiopulmonary Cerebral Resuscitation (CPCR)', ar: 'إنعاش القلب والرئتين والدماغ (CPR)' },
      { en: 'Specific antidote for Organophosphate / Carbamate insecticide intoxication', ar: 'الترياق النوعي للتسمم بمبيدات الفوسفور العضوي والكاربامات' },
    ],
    contraindications: [
      { en: 'Tachyarrhythmias or congestive heart failure with existing sinus tachycardia', ar: 'تسارع ضربات القلب غير المنتظم أو قصور القلب المصحوب بتسارع مسبق' },
      { en: 'Closed-angle glaucoma (induces severe mydriasis and IOP elevation)', ar: 'المياه الزرقاء (الجلوكوما) ضيقة الزاوية نظراً لتوسيعه لحدقة العين ورفع ضغط العين' },
    ],
    adverseEffects: [
      { en: 'Sinus tachycardia, dry mouth, mydriasis, decreased gastrointestinal motility', ar: 'تسارع النبض الجيبي، جفاف الفم، توسع الحدقة، وخمول حركية الأمعاء' },
    ],
    clinicalPearls: {
      en: 'In Organophosphate toxicity, titrate atropine to clinical endpoints: dry bronchial secretions and normalization of pupil diameter and heart rate.',
      ar: 'في حالات التسمم بالمبيدات الحشرية الفوسفورية، يُعطى الأتروبين بالتدريج حتى جفاف الإفرازات القصبية وتطبيع قطر الحدقة وسرعة القلب.',
    },
  },
];
