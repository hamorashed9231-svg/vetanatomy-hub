import { ClinicalCase } from '../types/clinical';

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: 'case_gdv_dog',
    title: {
      en: 'Acute Gastric Dilatation-Volvulus (GDV) in an 8-year-old Great Dane',
      ar: 'التواء وتوسع المعدة الحاد (GDV) في كلب جريت دان يبلغ 8 سنوات',
    },
    species: 'canine',
    breed: { en: 'Great Dane (Grand Danois)', ar: 'جريت دان (كلب دنماركي ضخم)' },
    age: '8 years',
    weightKg: 62,
    sex: { en: 'Male Castrated', ar: 'ذكر مخصي' },
    affectedSystem: 'digestive',
    presentingComplaint: {
      en: 'Unproductive retching, restlessness, hypersalivation, and rapidly expanding drum-like abdominal distension following an evening dry meal.',
      ar: 'محاولات تقيؤ عقيمة، وقلق شديد، وسيلان لعاب، وانتفاخ سريع للبطن كأنه طبلة عقب تناول وجبة طعام جافة.',
    },
    history: {
      en: 'Fed 4 cups of large-kibble dry food followed immediately by vigorous outdoor exercise. Began pacing and retching 90 minutes post-prandial.',
      ar: 'تناول 4 أكواب من العلف الجاف متبوعة مباشرة بلعب وركض شاق في الحديقة. بدأ بالقلق ومحاولة التقيؤ دون إخراج شيء بعد 90 دقيقة.',
    },
    vitals: [
      {
        name: { en: 'Rectal Temperature', ar: 'درجة حرارة الشرج' },
        value: '37.4',
        unit: '°C',
        referenceRange: '38.0 - 39.2 °C',
        status: 'decreased',
      },
      {
        name: { en: 'Heart Rate', ar: 'معدل نبضات القلب' },
        value: '172',
        unit: 'bpm',
        referenceRange: '60 - 100 bpm',
        status: 'critical',
      },
      {
        name: { en: 'Respiratory Rate', ar: 'معدل التنفس' },
        value: '52',
        unit: 'breaths/min',
        referenceRange: '15 - 30 breaths/min',
        status: 'elevated',
      },
      {
        name: { en: 'Capillary Refill Time (CRT)', ar: 'زمن إعادة امتلاء الشعيرات' },
        value: '> 3.0',
        unit: 'seconds',
        referenceRange: '< 2.0 sec',
        status: 'critical',
      },
      {
        name: { en: 'Mean Arterial Pressure (MAP)', ar: 'متوسط الضغط الشرياني' },
        value: '58',
        unit: 'mmHg',
        referenceRange: '75 - 100 mmHg',
        status: 'critical',
      },
    ],
    physicalExamFindings: [
      {
        en: 'Severe cranial abdominal tympany on simultaneous percussion and auscultation (ping sound)',
        ar: 'صوت رنين طبلي شديد عند القرع والتسمع المتزامن للبطن العلوي',
      },
      {
        en: 'Pale, muddy, dry mucous membranes with weak femoral pulses (hypovolemic/obstructive shock)',
        ar: 'أغشية مخاطية شاحبة مائلة للرمادي ونبض فخذي ضعيف وخيطي (صدمة انسدادية)',
      },
      {
        en: 'Intermittent ventricular premature complexes (VPCs) detected on cardiac rhythm strip',
        ar: 'انقباضات بطينية مبكرة متقطعة (VPCs) ظهرت على شاشة مراقبة تخطيط القلب',
      },
    ],
    labTests: [
      {
        parameter: 'Blood Lactate',
        arabicParameter: 'لاكتات الدم',
        measured: 7.4,
        unit: 'mmol/L',
        reference: '< 2.5 mmol/L',
        abnormal: true,
        significance: {
          en: 'Marked hyperlactatemia reflecting severe splanchnic hypoperfusion and gastric wall ischemia; levels > 6.0 mmol/L warrant guarded prognosis and suspicion of gastric necrosis.',
          ar: 'ارتفاع حاد في اللاكتات يعكس نقص تروية الأحشاء ونقص تروية جدار المعدة؛ المستويات فوق 6 مليمول/لتر تشير لاحتمال تنخر جدار المعدة.',
        },
      },
      {
        parameter: 'Packed Cell Volume (PCV)',
        arabicParameter: 'حجم كريات الدم المكدسة',
        measured: 56,
        unit: '%',
        reference: '37 - 55 %',
        abnormal: true,
        significance: {
          en: 'Hemoconcentration secondary to acute fluid sequestration in the stomach and third spacing.',
          ar: 'تركيز دموي ناتج عن حبس السوائل الحاد داخل تجويف المعدة والأنسجة الحشوية.',
        },
      },
      {
        parameter: 'Blood Urea Nitrogen (BUN)',
        arabicParameter: 'نيتروجين يوريا الدم',
        measured: 38,
        unit: 'mg/dL',
        reference: '7 - 27 mg/dL',
        abnormal: true,
        significance: {
          en: 'Prerenal azotemia due to profound hypotension and reduced renal glomerular filtration.',
          ar: 'ارتفاع نيتروجين البولينا قبل الكلوي بسبب الهبوط الشديد في ضغط الدم وانخفاض ترشيح الكبيبات.',
        },
      },
      {
        parameter: 'Potassium (K+)',
        arabicParameter: 'البوتاسيوم',
        measured: 3.2,
        unit: 'mEq/L',
        reference: '3.5 - 5.1 mEq/L',
        abnormal: true,
        significance: {
          en: 'Hypokalemia predisposing myocardium to life-threatening ventricular arrhythmias.',
          ar: 'نقص بوتاسيوم الدم مما يفاقم اضطرابات نظم القلب البطينية الخطرة.',
        },
      },
    ],
    diagnostics: [
      {
        modality: 'radiology',
        title: { en: 'Right Lateral Abdominal Radiograph', ar: 'صورة شعاعية للبطن في الوضعية الجانبية اليمنى' },
        description: {
          en: 'Gold-standard diagnostic view. Demonstrates dorsal gas compartmentalization within the displaced pylorus, creating the pathognomonic "double bubble" or "reverse C / Popeye\'s arm" appearance.',
          ar: 'الفحص التشخيصي المعتمد. يظهر تجمع الغاز في البواب المنفتل نحو الأعلى مسبباً علامة "الفقاعة المزدوجة" أو "ذراع باباي" المميزة لانفتال المعدة.',
        },
        keyAbnormalities: [
          { en: 'Compartmentalizing soft-tissue band separating fundus and gas-distended pylorus', ar: 'شريط نسيجي رخو يفصل بين قاع المعدة والبواب المتسع بالغاز' },
          { en: 'Splenic displacement and splenomegaly (secondary to splenic vessel torsion)', ar: 'انزياح الطحال وتضخمه نتيجة التواء الأوعية الطحالية المرافقة' },
        ],
      },
    ],
    differentialDiagnoses: [
      { en: 'Simple gastric dilatation without volvulus (food bloat)', ar: 'تمدد المعدة البسيط بالغازات أو الطعام دون التواء' },
      { en: 'Foreign body gastric or proximal duodenal obstruction', ar: 'انسداد المعدة أو بداية الاثني عشر بجسم غريب' },
      { en: 'Mesenteric volvulus / intestinal strangulation', ar: 'التواء المساريق المعوية أو اختناق الأمعاء' },
    ],
    definitiveDiagnosis: {
      en: 'Gastric Dilatation-Volvulus (GDV) with Clockwise 220° Torsion and Splanchnic Shock',
      ar: 'التواء وتوسع المعدة الحاد (GDV) مع دوران باتجاه عقارب الساعة بمقدار 220 درجة وصدمة حشوية',
    },
    pathophysiology: {
      en: 'Clockwise rotation of the stomach causes occlusion of the esophagus (preventing eructation) and duodenum (preventing emptying). The ballooning stomach compresses the caudal vena cava and portal vein, decreasing cardiac venous return by up to 60%, provoking severe cardiogenic/hypovolemic shock.',
      ar: 'يؤدي دوران المعدة لانسداد المريء (مانعاً التجشؤ) والاثني عشر (مانعاً التفريغ). وتضغط المعدة المتضخمة على الوريد الأجوف الخلفي والوريد البابي، مما يقلل العائد الوريدي للقلب بنسبة 60% ويسبب صدمة دورانية حادة.',
    },
    treatmentPlan: {
      immediate: [
        { en: 'Two large-bore (14-16 gauge) IV catheters placed in cephalic/jugular veins (avoid saphenous veins due to caval occlusion)', ar: 'تركيب قسطرتين وريديتين عريضتين (14-16) في الأوردة الرأسية أو الوداجية (وتجنب القوائم الخلفية بسبب انسداد الوريد الأجوف)' },
        { en: 'Aggressive shock fluid resuscitation with balanced isotonic crystalloids (60-90 mL/kg shock dose aliquot)', ar: 'إنعاش فوري بالسوائل البلورانية المتوازنة لتعويض الصدمة الدورانية' },
        { en: 'Percutaneous gastrocentesis with 16-gauge catheter to decompress the stomach and restore venous return', ar: 'بزل فوري عبر جدار البطن بإبرة عريضة لتفريغ الغازات واستعادة تدفق الدم' },
      ],
      medical: [
        { en: 'Pure mu-agonist opioid analgesia (Fentanyl or Methadone) - avoid morphine which induces vomiting', ar: 'تسكين أفيوني قوي مثل الفنتانيل أو الميثادون وتجنب المورفين الذي يحث على التقيؤ' },
        { en: 'Lidocaine 2 mg/kg IV slow bolus followed by CRI (50 mcg/kg/min) for ventricular arrhythmias and reperfusion free-radical scavenging', ar: 'ليدوكائين وريدي لعلاج اللانظميات البطينية وتثبيط الجذور الحرة الضارة' },
      ],
      surgical: [
        { en: 'Emergency exploratory celiotomy: derotation of the stomach back to anatomic position', ar: 'شق بطن استكشافي طارئ: إعادة المعدة لوضعها التشريحي السليم' },
        { en: 'Assessment of gastric wall and spleen viability (partial gastrectomy or splenectomy if necrotic)', ar: 'تقييم حيوية جدار المعدة والطحال (استئصال جزئي في حال التنخر)' },
        { en: 'Permanent Incisional Gastropexy fixing pyloric antrum to the right abdominal wall to prevent recurrence', ar: 'تثبيت دائم لجدار المعدة (Gastropexy) في الجدار البطني الأيمن لمنع تكرار الانفتال مدى الحياة' },
      ],
      monitoring: [
        { en: 'Continuous ECG monitoring for 48 hours post-op for ventricular tachycardia', ar: 'مراقبة مستمرة لتخطيط القلب لمدة 48 ساعة لكشف أي تسارع بطيني' },
        { en: 'Serial serum lactate and electrolyte checks every 4-6 hours until normalized', ar: 'فحص دوري للاكتات والشوارد كل 4-6 ساعات حتى استقرارها' },
      ],
    },
    prognosis: {
      en: 'Favorable (85-90% survival) with rapid surgical intervention, pre-op lactate < 6 mmol/L, and absence of gastric necrosis.',
      ar: 'ممتاز ومطمئن (نسبة نجاة 85-90%) عند التدخل الجراحي السريع ومستوى لاكتات أقل من 6 مليمول/لتر وغياب تنخر جدار المعدة.',
    },
    clinicalPearls: {
      en: 'Never place catheter lines in hind legs for GDV patients! The compressed caudal vena cava prevents fluids from reaching the heart until the stomach is decompressed.',
      ar: 'إياك وتركيب قسطرة وريدية في القوائم الخلفية لمريض GDV! فالوريد الأجوف الخلفي منضغط تماماً ولن تصل السوائل للقلب إلا إذا استُخدمت الأوردة الأمامية أو فُرغت المعدة.',
    },
  },
  {
    id: 'case_flutd_cat',
    title: {
      en: 'Obstructive Urolithiasis (Blocked Tom) with Hyperkalemic Arrhythmia in a Cat',
      ar: 'انسداد مجرى البول بالحصوات (متلازمة القط المحتبس) مع اضطراب البوتاسيوم القلبي',
    },
    species: 'feline',
    breed: { en: 'Domestic Shorthair (DSH)', ar: 'قط بلدي قصير الشعر' },
    age: '4 years',
    weightKg: 5.2,
    sex: { en: 'Male Neutered', ar: 'ذكر مخصي' },
    affectedSystem: 'urogenital',
    presentingComplaint: {
      en: 'Stranguria, vocalizing painfully in litterbox, vomiting, lethargy, and unproductive straining for 36 hours.',
      ar: 'عسر تبول شديد، وصراخ متألم في صندوق الفضلات، وخمول وقيء، ومحاولات تبول عقيمة مستمرة منذ 36 ساعة.',
    },
    history: {
      en: 'Strict indoor lifestyle, exclusively dry kibble diet. Owner noticed cat licking penis obsessively and thought he was constipated.',
      ar: 'يعيش داخل المنزل بشكل دائم ويتغذى على دراي فود فقط. لاحظ المربي لعق القضيب باستمرار وظن خطأ أن القط يعاني من إمساك.',
    },
    vitals: [
      {
        name: { en: 'Rectal Temperature', ar: 'درجة حرارة الشرج' },
        value: '36.8',
        unit: '°C',
        referenceRange: '38.1 - 39.2 °C',
        status: 'critical',
      },
      {
        name: { en: 'Heart Rate', ar: 'معدل نبضات القلب' },
        value: '98',
        unit: 'bpm',
        referenceRange: '140 - 220 bpm',
        status: 'critical', // Severe bradycardia in a cat is a red alert for hyperkalemia!
      },
      {
        name: { en: 'Respiratory Rate', ar: 'معدل التنفس' },
        value: '34',
        unit: 'breaths/min',
        referenceRange: '20 - 40 breaths/min',
        status: 'normal',
      },
    ],
    physicalExamFindings: [
      {
        en: 'Tense, basketball-sized, painful, turgid urinary bladder palpated in caudal abdomen (rupture risk if squeezed)',
        ar: 'مثانة بولية شديدة التوتر والامتلاء بحجم كرة التنس ومؤلمة جداً في أسفل البطن (خطر الانفجار عند الضغط المفرط)',
      },
      {
        en: 'Severe hypothermia and bradycardia (HR 98 bpm in a cat signifies life-threatening hyperkalemia)',
        ar: 'هبوط حرارة وبطء قلب شديد (98 نبضة/د في القط علامة حمراء على فرط بوتاسيوم الدم القاتل)',
      },
      {
        en: 'Cyanotic, congested, extrusion-resistant tip of penis with visible crystalline mucous plug',
        ar: 'طرف القضيب محتقن ومزرق مع وجود سدادة مخاطية متبلورة تسد الفوهة الخارجية',
      },
    ],
    labTests: [
      {
        parameter: 'Serum Potassium (K+)',
        arabicParameter: 'بوتاسيوم المصل',
        measured: 8.8,
        unit: 'mEq/L',
        reference: '3.5 - 5.5 mEq/L',
        abnormal: true,
        significance: {
          en: 'Severe life-threatening hyperkalemia causing cardiac conduction arrest, tented T waves, loss of P waves, and sinoventricular rhythm.',
          ar: 'فرط بوتاسيوم دموي فتاك يسبب بطء القلب وغياب موجات P وارتفاع موجة T وخطر توقف القلب المفاجئ.',
        },
      },
      {
        parameter: 'Serum Creatinine',
        arabicParameter: 'كرياتينين المصل',
        measured: 11.2,
        unit: 'mg/dL',
        reference: '0.8 - 2.4 mg/dL',
        abnormal: true,
        significance: {
          en: 'Profound post-renal azotemia from complete urinary outflow tract obstruction.',
          ar: 'قصور كلوي حاد بعد كلوي شديد ناتج عن انسداد مجرى خروج البول.',
        },
      },
    ],
    diagnostics: [],
    differentialDiagnoses: [
      { en: 'Constipation / Megacolon obstipation', ar: 'إمساك أو انحشار القولون المتضخم' },
      { en: 'Non-obstructive idiopathic feline cystitis (FIC)', ar: 'التهاب المثانة القططي مجهول السبب غير الانسدادي' },
    ],
    definitiveDiagnosis: {
      en: 'Obstructive Urolithiasis (Urethral Plug) with Post-Renal Azotemia and Life-Threatening Hyperkalemia',
      ar: 'انسداد مجرى البول بحصوات وسدادة مخاطية مع قصور كلوي حاد وفرط بوتاسيوم فتاك',
    },
    pathophysiology: {
      en: 'Retention of urine leads to retro-filtration pressure halting glomerular filtration. Potassium cannot be excreted in the distal nephron, accumulating in the extracellular space and partially depolarizing myocardial cells, leading to conduction blockade.',
      ar: 'احتباس البول يرفع الضغط الارتجاعي ويوقف ترشيح الكبيبات الكلوية. يعجز النبيب الكلوي عن طرح البوتاسيوم، مما يراكمه بالدم ويزيل استقطاب عضلة القلب مسبباً توقف النبض.',
    },
    treatmentPlan: {
      immediate: [
        { en: 'Immediate 10% Calcium Gluconate (0.5-1.0 mL/kg IV over 10 min with continuous ECG monitoring) to cardioprotect against hyperkalemia (does NOT lower potassium, but restores membrane potential)', ar: 'إعطاء فوري لجلوكونات الكالسيوم 10% بالوريد لحماية عضلة القلب واستعادة جهد الغشاء (لا يخفض البوتاسيوم لكنه يحمي القلب فوراً)' },
        { en: 'Regular insulin (0.25-0.5 U/kg IV) combined with 2 g Dextrose per unit of insulin to drive potassium intracellularly', ar: 'إنسولين سريع المفعول مع محلول جلوكوز لإدخال البوتاسيوم الزائد إلى داخل الخلايا' },
        { en: 'Aseptic urethral de-obstruction (unblocking) using slippery catheter and warm sterile saline hydropulsion', ar: 'تسليك مجرى البول بقسطرة قطط معقمة مع الدفع المائي بمحلول ملحي دافئ' },
      ],
      medical: [
        { en: 'Indwelling urinary catheter closed collection system for 48-72 hours to prevent re-obstruction', ar: 'تركيب قسطرة بولية مع نظام جمع مغلق لمدة 48-72 ساعة' },
        { en: 'Prazosin (alpha-1 antagonist) to relieve urethral smooth muscle spasm', ar: 'برازوسين لإرخاء تشنج عضلات مجرى البول الملساء' },
        { en: 'Buprenorphine sublingual/transmucosal analgesia for severe urethral pain', ar: 'مسكن بيوبرينورفين لتخفيف آلام الإحليل الشديدة' },
      ],
      monitoring: [
        { en: 'Monitor for post-obstructive diuresis (massive urine output requiring aggressive matching fluid therapy)', ar: 'مراقبة إدرار البول الهائل بعد فتح الانسداد لتعويض السوائل والشوارد' },
      ],
    },
    prognosis: {
      en: 'Good if cardiac hyperkalemia is stabilized quickly before irreversible arrest; long-term dietary modification to canned wet food is essential.',
      ar: 'جيد عند تثبيت ضربات القلب سريعاً قبل توقف القلب؛ والتحول الدائم للأكل الرطب المعلب ضروري لمنع تكرار الانسداد.',
    },
    clinicalPearls: {
      en: 'In an obstructed cat, never rush to general anesthesia to unblock him before checking and treating hyperkalemia! Anesthetic induction in a hyperkalemic cat often causes fatal cardiac arrest.',
      ar: 'إياك وتخدير قط محتبس البول تخديراً كاملاً لتسليكه قبل علاج فرط البوتاسيوم! فالتخدير العام في وجود فرط البوتاسيوم غالباً ما يؤدي لتوقف القلب الفوري.',
    },
  },
];
