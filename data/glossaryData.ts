import { GlossaryTerm } from '../types/i18n';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'term_cor',
    latinTerm: 'Cor',
    englishTerm: 'Heart',
    arabicTerm: 'القلب',
    phoneticTranscription: '/kɔːr/',
    category: 'circulatory',
    definition: {
      en: 'Muscular hollow organ situated in the middle mediastinum that pumps blood through the circulatory system by rhythmic contraction.',
      ar: 'عضو عضلي مجوف يقع في المنصف الأوسط الصدري يضخ الدم عبر الدورة الدموية بالانقباض الإيقاعي المنتظم.',
    },
    etymology: 'From Latin "cor" (heart), cognate with Greek "kardia".',
    clinicalNote: {
      en: 'Puncta maxima auscultated over Left 3rd-5th and Right 4th intercostal spaces in carnivores.',
      ar: 'تُسمع نقاط التسمع العظمى للصمامات في الفراغات الوربية اليسرى 3-5 واليمنى 4 في آكلات اللحوم.',
    },
  },
  {
    id: 'term_pulmo',
    latinTerm: 'Pulmo (pl. Pulmones)',
    englishTerm: 'Lung (Lungs)',
    arabicTerm: 'الرئة (الرئتان)',
    phoneticTranscription: '/ˈpʊlmoʊ/',
    category: 'respiratory',
    definition: {
      en: 'Primary paired respiratory organs situated within the pleural cavities of the thorax, specialized for alveolar gas exchange.',
      ar: 'العضوان التنفسيان المزدوجان الرئيسيان داخل تجويفي الجنب بالقفص الصدري، والمخصصان لتبادل الغازات السنخية.',
    },
    etymology: 'Latin "pulmo", related to Greek "pneumon".',
    clinicalNote: {
      en: 'Canine right lung has 4 lobes; feline left lung has 2 lobes.',
      ar: 'للرئة اليمنى في الكلاب 4 فصوص، بينما تتكون الرئة اليسرى في القطط من فصين.',
    },
  },
  {
    id: 'term_hepar',
    latinTerm: 'Hepar',
    englishTerm: 'Liver',
    arabicTerm: 'الكبد',
    phoneticTranscription: '/ˈhiːpɑːr/',
    category: 'digestive',
    definition: {
      en: 'Largest parenchymal abdominal gland executing vital metabolic, synthetic, storage, and xenobiotic detoxification functions.',
      ar: 'أكبر غدة حشوية متنية في تجويف البطن تقوم بوظائف الأيض والتصنيع الحيوي والتخزين وإزالة السمية الدوائية.',
    },
    etymology: 'From Ancient Greek "hepar" (liver).',
    clinicalNote: {
      en: 'Equidae completely lack a gallbladder (vesica fellea); bile continuously enters the duodenum.',
      ar: 'تفتقر الخيليات تماماً لكيس المرارة، وتتدفق الصفراء باستمرار إلى الاثني عشر.',
    },
  },
  {
    id: 'term_ren',
    latinTerm: 'Ren (pl. Renes)',
    englishTerm: 'Kidney (Kidneys)',
    arabicTerm: 'الكلية (الكليتان)',
    phoneticTranscription: '/rɛn/',
    category: 'urogenital',
    definition: {
      en: 'Paired bean-shaped or lobulated retroperitoneal organs that filter blood plasma, generate urine, and regulate blood pressure and erythropoiesis.',
      ar: 'عضوان خلف الصفاق يقومان بترشيح بلازما الدم وتكوين البول وضبط الضغط الشرياني وإفراز هرمون تكوين الدم.',
    },
    etymology: 'Latin "ren", root of renal.',
    clinicalNote: {
      en: 'Bovine kidneys are uniquely multipyramidal with superficial external lobulation.',
      ar: 'تتميز كلى الأبقار بأنها متعددة الأهرامات ومقسمة خارجياً إلى فصوص واضحة.',
    },
  },
  {
    id: 'term_rumen',
    latinTerm: 'Rumen',
    englishTerm: 'Rumen (Paunch)',
    arabicTerm: 'الكرش',
    phoneticTranscription: '/ˈruːmɪn/',
    category: 'digestive',
    definition: {
      en: 'First and largest forestomach compartment in ruminants, acting as an anaerobic fermentation vat with stratified squamous non-glandular papillae.',
      ar: 'الحجرة الأولى والأكبر من المعدة المركبة في المجترات، وتعمل كمخمر لاهوائي مغطى بحليمات متقرنة غير غدية.',
    },
    etymology: 'Latin "rumen" (throat, gullet, paunch).',
    clinicalNote: {
      en: 'Produces 1-3 primary contraction cycles per 2 minutes, monitored in the left paralumbar fossa.',
      ar: 'ينقبض بمعدل 1-3 دورات كل دقيقتين ويتم فحصه في الخاصرة اليسرى.',
    },
  },
  {
    id: 'term_reticulum',
    latinTerm: 'Reticulum',
    englishTerm: 'Reticulum (Honeycomb)',
    arabicTerm: 'القلنسوة (الشبكية)',
    phoneticTranscription: '/rɪˈtɪkjʊləm/',
    category: 'digestive',
    definition: {
      en: 'Second forestomach compartment characterized by mucosal crests arranged in polygonal cells resembling a honeycomb.',
      ar: 'الحجرة الثانية في معدة المجترات، تتميز بوجود حواف مخاطية متقاطعة تشبه خلايا شمع العسل تماماً.',
    },
    etymology: 'Latin "reticulum", diminutive of "rete" (net).',
    clinicalNote: {
      en: 'Lies directly adjacent to the diaphragm and pericardium, predisposing to Traumatic Reticuloperitonitis.',
      ar: 'مجاورة مباشرة للحجاب الحاجز وغشاء التامور، مما يهيئ لمرض التهاب التامور والشبكية الرضحي.',
    },
  },
  {
    id: 'term_caecum',
    latinTerm: 'Caecum / Cecum',
    englishTerm: 'Cecum (Blind Gut)',
    arabicTerm: 'الأعور',
    phoneticTranscription: '/ˈsiːkəm/',
    category: 'digestive',
    definition: {
      en: 'Blind-ended pouch situated at the junction of the ileum and colon; massive in hindgut fermenting equines for microbial cellulose digestion.',
      ar: 'ردب أعور مغلق النهاية يقع عند التقاطع اللفائفي القولوني؛ وضخم جداً في الخيول لهضم السيليلوز ميكروبياً.',
    },
    etymology: 'From Latin "intestinum caecum" (blind intestine).',
    clinicalNote: {
      en: 'In horses, the cecum holds up to 30 liters and occupies the entire right paralumbar fossa.',
      ar: 'في الخيول، يتسع الأعور لحوالي 30 لتراً ويشغل الخاصرة البطنية اليمنى بالكامل.',
    },
  },
  {
    id: 'term_baculum',
    latinTerm: 'Os penis (Baculum)',
    englishTerm: 'Penile Bone',
    arabicTerm: 'عظم القضيب',
    phoneticTranscription: '/ˈbækjʊləm/',
    category: 'urogenital',
    definition: {
      en: 'Heterotopic ossification located within the canine glans penis featuring a ventral groove (*sulcus urethralis*) conveying the penile urethra.',
      ar: 'تعظم نسيجي غير متجانس يقع داخل حشفة قضيب الكلب ويتميز بأخدود بطني يمر عبره مجرى البول الإحليلي.',
    },
    etymology: 'Latin "baculum" (staff, rod, stick).',
    clinicalNote: {
      en: 'Frequent anatomical site for calculi lodgement causing acute obstructive urinary emergency in male dogs.',
      ar: 'موقع تشريحي متكرر لانحشار الحصوات البولية مسبباً انسداداً طارئاً في ذكور الكلاب.',
    },
  },
  {
    id: 'term_margo_plicatus',
    latinTerm: 'Margo plicatus',
    englishTerm: 'Folded Border of Equine Stomach',
    arabicTerm: 'الحافة المنسية (الحد المطوي في معدة الحصان)',
    phoneticTranscription: '/ˈmɑːrɡoʊ plɪˈkeɪtəs/',
    category: 'digestive',
    definition: {
      en: 'Distinct jagged anatomical boundary in the equine stomach separating the non-glandular stratified squamous fundus from the glandular mucosa.',
      ar: 'خط تشريحي متعرج مميز في معدة الحصان يفصل بين المنطقة الحرشفية غير الغدية والمنطقة الغدية المفرزة للعصارة.',
    },
    etymology: 'Latin "margo" (border) + "plicatus" (folded).',
    clinicalNote: {
      en: 'Primary anatomical site of predilection for Equine Gastric Ulcer Syndrome (EGUS).',
      ar: 'الموقع الرئيسي الأكثر عرضة لتشكل قرحة المعدة الخيلية (EGUS).',
    },
  },
  {
    id: 'term_diverticulum_tubae',
    latinTerm: 'Diverticula tubae auditivae',
    englishTerm: 'Guttural Pouches',
    arabicTerm: 'الأكياس الحلقية (الردوب السمعية للخيول)',
    phoneticTranscription: '/ˈɡʌtərəl paʊtʃ/',
    category: 'respiratory',
    definition: {
      en: 'Large, paired air-filled ventral diverticula of the auditory (Eustachian) tubes found uniquely in equids, holding ~300-500 mL of air each.',
      ar: 'ردبان هوائيان مزدوجان ضخمان ينشآن من قناة إستاكيوس السمعية وتنفرد بهما الخيليات، ويتسع كل كيس لحوالي 300-500 مل هواء.',
    },
    etymology: 'Latin "guttur" (throat).',
    clinicalNote: {
      en: 'Bordered by cranial nerves IX, X, XI, XII and internal/external carotid arteries; guttural pouch mycosis risks lethal hemorrhage.',
      ar: 'تلاصقها الأعصاب القحفية 9 و10 و11 و12 والشريان السباتي؛ وفطريات هذه الأكياس تهدد بنزيف مميت.',
    },
  },
];
