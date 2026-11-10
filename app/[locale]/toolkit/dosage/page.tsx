'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { 
  Pill, 
  Calculator, 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  Info, 
  Copy, 
  Printer, 
  RotateCcw, 
  ChevronRight, 
  Sparkles, 
  ArrowLeft,
  Search,
  Activity,
  Heart,
  Syringe,
  Clock,
  FileText
} from 'lucide-react';
import { useAnatomyStore } from '../../../../store/useAnatomyStore';
import { SpeciesId, Locale } from '../../../../types/anatomy';
import { SPECIES_REGISTRY } from '../../../../data/anatomyRegistry';

// Comprehensive Veterinary Drug Specification
interface DrugDosageSpec {
  species: SpeciesId;
  doseMgPerKgMin: number;
  doseMgPerKgMax: number;
  routes: string[];
  frequency: { en: string; ar: string };
  isContraindicated?: boolean;
  contraindicationReason?: { en: string; ar: string };
  warningNotes?: { en: string; ar: string };
}

interface ClinicalMedication {
  id: string;
  genericName: string;
  brandNames: string[];
  arabicName: string;
  category: 'antimicrobial' | 'nsaid' | 'anesthetic' | 'sedative' | 'emergency' | 'cardiovascular' | 'antiparasitic';
  categoryLabel: { en: string; ar: string };
  concentrationsAvailable: Array<{ mgPerMl: number; label: string }>;
  dosages: DrugDosageSpec[];
  mechanismOfAction: { en: string; ar: string };
  withdrawalTimes?: { meatDays?: number; milkDays?: number };
  clinicalPearls: { en: string; ar: string };
}

// Deep Veterinary Pharmacology Dataset
const VET_MEDICATIONS: ClinicalMedication[] = [
  {
    id: 'amoxicillin_clavulanate',
    genericName: 'Amoxicillin / Clavulanic Acid',
    brandNames: ['Synulox', 'Clavamox', 'Augmentin'],
    arabicName: 'أموكسيسيلين + حمض الكلافولانيك',
    category: 'antimicrobial',
    categoryLabel: { en: 'Potentiated Beta-Lactam', ar: 'مضاد حيوي معزز' },
    concentrationsAvailable: [
      { mgPerMl: 50, label: '50 mg/mL (Oral Suspension)' },
      { mgPerMl: 140, label: '140 mg/mL (Injectable)' },
      { mgPerMl: 175, label: '175 mg/mL (Large Animal Susp)' },
    ],
    mechanismOfAction: {
      en: 'Inhibits bacterial cell wall peptidoglycan cross-linking while clavulanic acid irreversibly inactivates beta-lactamases produced by resistant bacteria.',
      ar: 'يثبط بناء جدار الخلية البكتيرية بينما يقوم حمض الكلافولانيك بتعطيل إنزيمات البيتالاكتاماز المقاومة بشكل نهائي.',
    },
    clinicalPearls: {
      en: 'First-line antimicrobial for dog/cat bite abscesses (Pasteurella multocida) and superficial bacterial folliculitis.',
      ar: 'المضاد الحيوي الأساسي لعلاج خراريج عضات الحيوانات وعدوى الباستيريلا والتهابات الجلد البكتيرية.',
    },
    dosages: [
      {
        species: 'canine',
        doseMgPerKgMin: 12.5,
        doseMgPerKgMax: 25.0,
        routes: ['PO', 'SC'],
        frequency: { en: 'q12h (twice daily) with food', ar: 'كل 12 ساعة مع الطعام' },
      },
      {
        species: 'feline',
        doseMgPerKgMin: 12.5,
        doseMgPerKgMax: 20.0,
        routes: ['PO', 'SC'],
        frequency: { en: 'q12h (twice daily)', ar: 'كل 12 ساعة' },
      },
      {
        species: 'bovine',
        doseMgPerKgMin: 7.0,
        doseMgPerKgMax: 10.0,
        routes: ['IM'],
        frequency: { en: 'q24h for 3-5 days', ar: 'كل 24 ساعة لمدة 3-5 أيام' },
        warningNotes: {
          en: 'Milk withdrawal: 60 hours. Meat withdrawal: 14 days.',
          ar: 'فترة سحب الحليب: 60 ساعة، واللحم: 14 يوماً.',
        },
      },
      {
        species: 'ovine_caprine',
        doseMgPerKgMin: 7.0,
        doseMgPerKgMax: 10.0,
        routes: ['IM'],
        frequency: { en: 'q24h', ar: 'كل 24 ساعة' },
      },
      {
        species: 'equine',
        doseMgPerKgMin: 0,
        doseMgPerKgMax: 0,
        routes: ['PO'],
        frequency: { en: 'STRICTLY CONTRAINDICATED ORALLY', ar: 'ممنوع منعاً باتاً عبر الفم' },
        isContraindicated: true,
        contraindicationReason: {
          en: 'Fatal Cecal Dysbiosis & Typhlocolitis! Oral penicillins destroy normal hindgut microflora, causing lethal Clostridium perfringens enterotoxemia and acute shock in horses.',
          ar: 'شلل أعوري مميت والتهاب قولون ناتج عن سموم الكلوستريديوم! تدمر البنسلينات الفموية ميكروبيوم الأمعاء الخلفية مسببة صدمة تسممية قاتلة في الخيول.',
        },
      },
      {
        species: 'camelid',
        doseMgPerKgMin: 10.0,
        doseMgPerKgMax: 15.0,
        routes: ['SC', 'IM'],
        frequency: { en: 'q12-24h', ar: 'كل 12-24 ساعة' },
      },
      {
        species: 'avian',
        doseMgPerKgMin: 100.0,
        doseMgPerKgMax: 150.0,
        routes: ['PO'],
        frequency: { en: 'q12h (High avian metabolic rate)', ar: 'كل 12 ساعة (معدل أيض طيري سريع)' },
      },
    ],
  },
  {
    id: 'meloxicam',
    genericName: 'Meloxicam',
    brandNames: ['Metacam', 'Loxicom', 'Meloxidyl'],
    arabicName: 'ميلوكسيكام',
    category: 'nsaid',
    categoryLabel: { en: 'COX-2 Preferential NSAID', ar: 'مضاد التهاب غير ستيرويدي' },
    concentrationsAvailable: [
      { mgPerMl: 0.5, label: '0.5 mg/mL (Cat Oral Drops)' },
      { mgPerMl: 1.5, label: '1.5 mg/mL (Dog Oral Susp)' },
      { mgPerMl: 5.0, label: '5 mg/mL (Small Animal Injectable)' },
      { mgPerMl: 20.0, label: '20 mg/mL (Large Animal 2%)' },
    ],
    mechanismOfAction: {
      en: 'Preferentially inhibits Cyclooxygenase-2 (COX-2) over COX-1, blunting inflammatory prostaglandin synthesis while sparing protective gastrointestinal prostacyclins.',
      ar: 'يثبط تفضيلياً إنزيم COX-2 مقارنة بـ COX-1، مما يخفض البروستاجلاندينات الالتهابية مع حماية بطانة المعدة.',
    },
    clinicalPearls: {
      en: 'Never combine with systemic corticosteroids or another NSAID without a mandatory 5-7 day washout period to avoid catastrophic gastrointestinal ulceration.',
      ar: 'إياك والجمع مع الكورتيزونات دون فترة غسيل وتوقف 5-7 أيام لتجنب حدوث ثقب بالمعدة.',
    },
    dosages: [
      {
        species: 'canine',
        doseMgPerKgMin: 0.1,
        doseMgPerKgMax: 0.2, // Loading 0.2, maintenance 0.1
        routes: ['PO', 'SC', 'IV'],
        frequency: { en: 'Day 1: 0.2 mg/kg, then 0.1 mg/kg q24h with food', ar: 'اليوم الأول: 0.2 مجم/كجم، ثم 0.1 مجم/كجم كل 24 ساعة' },
      },
      {
        species: 'feline',
        doseMgPerKgMin: 0.05,
        doseMgPerKgMax: 0.05,
        routes: ['SC', 'PO'],
        frequency: { en: 'Single dose 0.05 mg/kg SC or micro-dosing', ar: 'جرعة واحدة فقط 0.05 مجم/كجم تحت الجلد' },
        warningNotes: {
          en: 'FDA Black-Box Warning: Repeated oral dosing in cats poses severe risk of acute renal papillary necrosis. Use with extreme caution only in euvolemic cats.',
          ar: 'تحذير طبي مشدد: تكرار الجرعات الفموية العشوائية في القطط يهدد بفشل كلوي حاد ونخر حليمي.',
        },
      },
      {
        species: 'bovine',
        doseMgPerKgMin: 0.5,
        doseMgPerKgMax: 0.5,
        routes: ['IV', 'SC'],
        frequency: { en: 'Single dose (duration 48-72h)', ar: 'جرعة واحدة يمتد مفعولها 48-72 ساعة' },
        warningNotes: {
          en: 'Milk withdrawal: 5 days. Meat withdrawal: 15 days.',
          ar: 'فترة سحب الحليب: 5 أيام، واللحم: 15 يوماً.',
        },
      },
      {
        species: 'equine',
        doseMgPerKgMin: 0.6,
        doseMgPerKgMax: 0.6,
        routes: ['IV', 'PO'],
        frequency: { en: 'q24h for up to 14 days', ar: 'كل 24 ساعة حتى 14 يوماً' },
      },
      {
        species: 'ovine_caprine',
        doseMgPerKgMin: 0.5,
        doseMgPerKgMax: 1.0,
        routes: ['SC', 'PO'],
        frequency: { en: 'Single dose or q24-48h', ar: 'جرعة واحدة كل 24-48 ساعة' },
      },
      {
        species: 'camelid',
        doseMgPerKgMin: 0.5,
        doseMgPerKgMax: 1.0,
        routes: ['SC', 'PO'],
        frequency: { en: 'q24h', ar: 'كل 24 ساعة' },
      },
      {
        species: 'avian',
        doseMgPerKgMin: 1.0,
        doseMgPerKgMax: 2.0,
        routes: ['PO', 'IM'],
        frequency: { en: 'q12h (Birds metabolize meloxicam extremely rapidly)', ar: 'كل 12 ساعة (أيض طيري فائق السرعة)' },
      },
    ],
  },
  {
    id: 'flunixin_meglumine',
    genericName: 'Flunixin Meglumine',
    brandNames: ['Banamine', 'Finadyne', 'Cronyxin'],
    arabicName: 'فلونكسين ميغلومين',
    category: 'nsaid',
    categoryLabel: { en: 'Potent Visceral Analgesic NSAID', ar: 'مسكن آلام حشوية قوي' },
    concentrationsAvailable: [
      { mgPerMl: 50, label: '50 mg/mL (Injectable Solution)' },
    ],
    mechanismOfAction: {
      en: 'Non-selective COX-1/COX-2 inhibitor with outstanding visceral anti-inflammatory, analgesic, and anti-endotoxic efficacy.',
      ar: 'مثبط غير انتقائي للـ COX يتميز بفاعلية استثنائية ضد الآلام الحشوية والسموم الداخلية.',
    },
    clinicalPearls: {
      en: 'Gold-standard analgesic for equine visceral colic pain. NEVER administer intramuscularly in horses due to risk of fatal Clostridial myonecrosis!',
      ar: 'المسكن القياسي الذهبي لآلام المغص الحشوي في الخيول. إياك والحقن العضلي في الخيول لتجنب النخر العضلي الغازي المميت!',
    },
    dosages: [
      {
        species: 'equine',
        doseMgPerKgMin: 1.1,
        doseMgPerKgMax: 1.1,
        routes: ['IV'],
        frequency: { en: 'q12-24h STRICTLY INTRAVENOUSLY', ar: 'كل 12-24 ساعة حقناً وريدياً حصراً' },
        warningNotes: {
          en: 'Avoid IM injections in horses (severe Clostridial myositis risk). Never inject intra-arterially (causes immediate collapse & seizures).',
          ar: 'تجنب الحقن العضلي بالخيول (خطر الغرغرينا العضلية)، وإياك والحقن داخل الشريان السباتي.',
        },
      },
      {
        species: 'bovine',
        doseMgPerKgMin: 1.1,
        doseMgPerKgMax: 2.2,
        routes: ['IV'],
        frequency: { en: 'q24h for up to 3 days', ar: 'كل 24 ساعة لمدة تصل لـ 3 أيام' },
        warningNotes: {
          en: 'Milk withdrawal: 36 hours. Meat withdrawal: 4 days.',
          ar: 'فترة سحب الحليب: 36 ساعة، واللحم: 4 أيام.',
        },
      },
      {
        species: 'canine',
        doseMgPerKgMin: 0.5,
        doseMgPerKgMax: 1.0,
        routes: ['IV'],
        frequency: { en: 'Single dose only (Extreme ulcerogenic risk in dogs)', ar: 'جرعة واحدة فقط (خطر تقرح معوي شديد)' },
      },
      {
        species: 'feline',
        doseMgPerKgMin: 0,
        doseMgPerKgMax: 0,
        routes: ['IV'],
        frequency: { en: 'CONTRAINDICATED IN CATS', ar: 'ممنوع في القطط' },
        isContraindicated: true,
        contraindicationReason: {
          en: 'Severe acute renal toxicity! Cats lack glucuronidation capacity, leading to rapid renal medullary necrosis.',
          ar: 'سمية كلوية حادة! تفتقر القطط لإنزيمات الاقتران الجلوكوروني مما يؤدي لنخر لبي كلوي سريع.',
        },
      },
      {
        species: 'camelid',
        doseMgPerKgMin: 1.1,
        doseMgPerKgMax: 1.1,
        routes: ['IV'],
        frequency: { en: 'q24h for 1-3 days', ar: 'كل 24 ساعة' },
      },
    ],
  },
  {
    id: 'xylazine',
    genericName: 'Xylazine HCl',
    brandNames: ['Rompun', 'Xylasol', 'Sedazine'],
    arabicName: 'زيلازين',
    category: 'sedative',
    categoryLabel: { en: 'Alpha-2 Adrenergic Agonist', ar: 'مهدئ ومرخٍ عضلي' },
    concentrationsAvailable: [
      { mgPerMl: 20, label: '20 mg/mL (2% Small Animal)' },
      { mgPerMl: 100, label: '100 mg/mL (10% Large Animal)' },
    ],
    mechanismOfAction: {
      en: 'Central alpha-2 adrenergic receptor agonist stimulating presynaptic autoreceptors to suppress norepinephrine outflow, producing profound sedation, visceral analgesia, and central muscle relaxation.',
      ar: 'منبه لمستقبلات ألفا-2 الأدرينالية المركزية يثبط إفراز النورأدرينالين مسبباً تهدئة عميقة وتسكين آلام وارتخاء عضلي.',
    },
    clinicalPearls: {
      en: 'CATTLE ARE 10 TIMES MORE SENSITIVE THAN HORSES! Always use 1/10th of the equine dose in ruminants to avoid fatal respiratory and cardiovascular depression.',
      ar: 'الأبقار أكثر حساسية للزيلازين بعشرة أضعاف مقارنة بالخيول! استخدم دائماً عُشر جرعة الخيول لتجنب توقف القلب والتنفس.',
    },
    dosages: [
      {
        species: 'bovine',
        doseMgPerKgMin: 0.05,
        doseMgPerKgMax: 0.1,
        routes: ['IM', 'IV'],
        frequency: { en: 'Titrate to effect (Dose is 1/10th of horse dose!)', ar: 'عُشر جرعة الخيول تماماً!' },
        warningNotes: {
          en: 'STRICTLY CONTRAINDICATED in the 3rd trimester of pregnancy in cattle (induces premature uterine contractions and abortion via oxytocin-like action on myometrial alpha-2D receptors!).',
          ar: 'ممنوع منعاً باتاً في الثلث الأخير من حمل الأبقار (يحفز تقلصات الرحم والإجهاض الفوري!).',
        },
      },
      {
        species: 'equine',
        doseMgPerKgMin: 0.5,
        doseMgPerKgMax: 1.1,
        routes: ['IV'],
        frequency: { en: 'Slow IV bolus; onset in 3-5 min', ar: 'حقن وريدي بطيء، يبدأ التأثير خلال 3-5 دقائق' },
      },
      {
        species: 'canine',
        doseMgPerKgMin: 0.5,
        doseMgPerKgMax: 1.0,
        routes: ['IV', 'IM'],
        frequency: { en: 'Premedication prior to general anesthesia', ar: 'تهدئة ما قبل التخدير العام' },
      },
      {
        species: 'feline',
        doseMgPerKgMin: 0.5,
        doseMgPerKgMax: 1.0,
        routes: ['SC', 'IM'],
        frequency: { en: 'Emetic of choice in cats (stimulates CRTZ)', ar: 'المقيء الاختياري في القطط لتحفيز القيء' },
      },
      {
        species: 'camelid',
        doseMgPerKgMin: 0.2,
        doseMgPerKgMax: 0.4,
        routes: ['IV', 'IM'],
        frequency: { en: 'Causes recumbency (cush posture)', ar: 'يسبب بروك الجمل وارتخاءه' },
      },
    ],
  },
  {
    id: 'propofol',
    genericName: 'Propofol',
    brandNames: ['PropoFlo', 'Diprivan', 'Rapinovet'],
    arabicName: 'بروبوفول',
    category: 'anesthetic',
    categoryLabel: { en: 'Injectable Anesthetic Induction', ar: 'مخدر وريدي عام' },
    concentrationsAvailable: [
      { mgPerMl: 10, label: '10 mg/mL (1% Emulsion)' },
    ],
    mechanismOfAction: {
      en: 'Modulates central GABA-A receptors, increasing chloride conductance, hyperpolarizing neurons, and producing rapid, smooth, stage-less hypnotic induction.',
      ar: 'ينشط مستقبلات GABA-A المركزية مسبباً فرط استقطاب عصبي وتنويم سلس فوري قبل التنبيب الحنجري.',
    },
    clinicalPearls: {
      en: 'Always inject slowly over 60-90 seconds ("titrate to effect"). Rapid bolusing induces transient respiratory apnea.',
      ar: 'احقن دائماً ببطء شديد على مدار 60-90 ثانية. الحقن السريع يسبب توقفاً مؤقتاً للتنفس.',
    },
    dosages: [
      {
        species: 'canine',
        doseMgPerKgMin: 4.0,
        doseMgPerKgMax: 6.0,
        routes: ['IV'],
        frequency: { en: 'Slow IV titration until loss of jaw tone', ar: 'حقن وريدي تدريجي حتى ارتخاء الفك' },
      },
      {
        species: 'feline',
        doseMgPerKgMin: 4.0,
        doseMgPerKgMax: 8.0,
        routes: ['IV'],
        frequency: { en: 'Single induction bolus', ar: 'جرعة حث تخدير واحدة' },
        warningNotes: {
          en: 'Repeated dosing on consecutive days causes Heinz body hemolytic anemia in cats due to oxidant injury to feline feline hemoglobin.',
          ar: 'تكرار الجرعات لأيام متتالية يسبب فقر دم انحلالي بأجسام هاينز نتيجة أكسدة هيموجلوبين القطط.',
        },
      },
      {
        species: 'equine',
        doseMgPerKgMin: 2.0,
        doseMgPerKgMax: 2.5,
        routes: ['IV'],
        frequency: { en: 'Induction following alpha-2/ketamine', ar: 'حث التخدير عقب المهدئات' },
      },
    ],
  },
  {
    id: 'atropine_sulfate',
    genericName: 'Atropine Sulfate',
    brandNames: ['AtroJect'],
    arabicName: 'سلفات الأتروبين',
    category: 'emergency',
    categoryLabel: { en: 'Anticholinergic / Parasympatholytic', ar: 'مضاد الكولين وموسع للقصبات' },
    concentrationsAvailable: [
      { mgPerMl: 0.54, label: '0.54 mg/mL (Small Animal)' },
      { mgPerMl: 1.0, label: '1.0 mg/mL (Standard)' },
      { mgPerMl: 15.0, label: '15 mg/mL (Large Animal Equine/Bovine)' },
    ],
    mechanismOfAction: {
      en: 'Competitive muscarinic acetylcholine receptor antagonist. Abolishes vagal tone at the SA and AV nodes, accelerating heart rate and resolving bradycardia.',
      ar: 'مضاد تنافسي لمستقبلات الأسيتيل كولين المسكارينية يلغي تأثير العصب المبهم لرفع معدل ضربات القلب وتجفيف الإفرازات.',
    },
    clinicalPearls: {
      en: 'Specific antidote for Organophosphate / Carbamate insecticide intoxication. Titrate until bronchial secretions dry.',
      ar: 'الترياق النوعي للتسمم بالمبيدات الحشرية الفوسفورية. يُعطى حتى جفاف الإفرازات القصبية.',
    },
    dosages: [
      {
        species: 'canine',
        doseMgPerKgMin: 0.02,
        doseMgPerKgMax: 0.04,
        routes: ['IV', 'IM', 'SC'],
        frequency: { en: 'Emergency bolus for severe bradycardia / CPR', ar: 'جرعة طوارئ لبطء القلب الحاد أو الإنعاش' },
      },
      {
        species: 'feline',
        doseMgPerKgMin: 0.02,
        doseMgPerKgMax: 0.04,
        routes: ['IV', 'IM'],
        frequency: { en: 'Emergency CPCR bolus', ar: 'جرعة إنعاش طارئة' },
      },
      {
        species: 'bovine',
        doseMgPerKgMin: 0.02,
        doseMgPerKgMax: 0.05,
        routes: ['IV', 'IM'],
        frequency: { en: 'Organophosphate intoxication antidote', ar: 'ترياق التسمم بالمبيدات الحشرية' },
      },
      {
        species: 'equine',
        doseMgPerKgMin: 0.01,
        doseMgPerKgMax: 0.02,
        routes: ['IV'],
        frequency: { en: 'Emergency only: high risk of intestinal ileus and fatal colic!', ar: 'للطوارئ فقط: خطر شلل الأمعاء والمغص المميت!' },
        warningNotes: {
          en: 'Causes severe gastrointestinal stasis, adynamic ileus, and secondary impaction colic in horses.',
          ar: 'يسبب شللاً حركياً للأمعاء ومغص انحشار شديد في الخيول.',
        },
      },
    ],
  },
  {
    id: 'ivermectin',
    genericName: 'Ivermectin',
    brandNames: ['Ivomec', 'Heartgard', 'Noromectin'],
    arabicName: 'إيفرمكتين',
    category: 'antiparasitic',
    categoryLabel: { en: 'Macrocyclic Lactone Antiparasitic', ar: 'مضاد طفيليات واسع المدى' },
    concentrationsAvailable: [
      { mgPerMl: 10, label: '10 mg/mL (1% Injectable)' },
      { mgPerMl: 0.8, label: '0.8 mg/mL (Drench Solution)' },
    ],
    mechanismOfAction: {
      en: 'Binds glutamate-gated chloride ion channels in nematode and arthropod nerve and muscle cells, increasing chloride influx, hyperpolarizing membranes, and causing flaccid paralysis and death.',
      ar: 'يرتبط بقنوات الكلوريد المعتمدة على الجلوتامات في الخلايا العصبية للطفيليات مسبباً شللاً رخواً وموتها.',
    },
    clinicalPearls: {
      en: 'MDR1 / ABCB1 Gene Mutation: Collies, Australian Shepherds, and Whippets lack functional blood-brain barrier P-glycoprotein, causing fatal neurotoxicity at antiparasitic doses!',
      ar: 'طفرة جين MDR1: تفتقر سلالات الكولي والرعاة إلى مضخة P-glycoprotein بحاجز الدماغ، مما يسبب تسمماً عصبياً مميتاً عند الجرعات العالية!',
    },
    dosages: [
      {
        species: 'bovine',
        doseMgPerKgMin: 0.2,
        doseMgPerKgMax: 0.2,
        routes: ['SC'],
        frequency: { en: 'Single subcutaneous dose (1 mL per 50 kg)', ar: 'جرعة واحدة تحت الجلد (1 مل لكل 50 كجم)' },
        warningNotes: {
          en: 'Meat withdrawal: 35 days. Do NOT use in female dairy cattle of breeding age.',
          ar: 'فترة سحب اللحم: 35 يوماً. يمنع في أبقار الحليب الحلابة.',
        },
      },
      {
        species: 'equine',
        doseMgPerKgMin: 0.2,
        doseMgPerKgMax: 0.2,
        routes: ['PO'],
        frequency: { en: 'Oral paste every 6-8 weeks', ar: 'معجون فموي كل 6-8 أسابيع' },
      },
      {
        species: 'ovine_caprine',
        doseMgPerKgMin: 0.2,
        doseMgPerKgMax: 0.2,
        routes: ['SC', 'PO'],
        frequency: { en: 'Subcutaneous injection or drench', ar: 'حقن تحت الجلد أو تجريع' },
      },
      {
        species: 'camelid',
        doseMgPerKgMin: 0.2,
        doseMgPerKgMax: 0.4,
        routes: ['SC'],
        frequency: { en: 'SC injection for mange (Sarcoptes)', ar: 'حقن لعلاج الجرب في الإبل' },
      },
      {
        species: 'canine',
        doseMgPerKgMin: 0.006,
        doseMgPerKgMax: 0.012,
        routes: ['PO'],
        frequency: { en: 'Monthly heartworm preventative micro-dose only', ar: 'جرعة ميكرو شهرية للوقاية من الديدان القلبية' },
        warningNotes: {
          en: 'Strictly screen for MDR1 mutation in Collies, Shepherds, and related breeds before administering higher therapeutic doses (mange).',
          ar: 'تحذير مشدد: افحص طفرة MDR1 في كلاب الكولي والشيبارد قبل إعطاء جرعات الجرب العلاجية العالية.',
        },
      },
    ],
  },
];

// Species typical weights reference
const SPECIES_WEIGHT_PROFILES: Record<
  SpeciesId,
  { defaultKg: number; minKg: number; maxKg: number; presets: number[] }
> = {
  canine: { defaultKg: 20, minKg: 1, maxKg: 90, presets: [5, 12, 25, 40] },
  feline: { defaultKg: 4.5, minKg: 0.5, maxKg: 12, presets: [2.5, 4.0, 5.5, 7.0] },
  equine: { defaultKg: 500, minKg: 100, maxKg: 1000, presets: [350, 450, 500, 600] },
  bovine: { defaultKg: 550, minKg: 40, maxKg: 1200, presets: [200, 450, 550, 700] },
  ovine_caprine: { defaultKg: 50, minKg: 5, maxKg: 150, presets: [25, 45, 60, 80] },
  ovine: { defaultKg: 50, minKg: 5, maxKg: 150, presets: [25, 45, 60, 80] },
  camelid: { defaultKg: 450, minKg: 80, maxKg: 800, presets: [300, 450, 550, 650] },
  avian: { defaultKg: 1.5, minKg: 0.05, maxKg: 15, presets: [0.1, 0.5, 1.5, 3.0] },
};

export default function VeterinaryDosageCalculatorPage() {
  const router = useRouter();
  const params = useParams();
  const rawLocale = (params?.locale as string) || 'en';
  const validLocale: Locale = rawLocale === 'ar' ? 'ar' : 'en';

  const locale = useAnatomyStore((state) => state.locale);
  const setLocale = useAnatomyStore((state) => state.setLocale);
  const storeSpecies = useAnatomyStore((state) => state.activeSpecies);
  const setActiveSpecies = useAnatomyStore((state) => state.setActiveSpecies);

  const isRtl = validLocale === 'ar';

  // Calculator State
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesId>(storeSpecies || 'canine');
  const [weightKg, setWeightKg] = useState<number>(20);
  const [selectedDrugId, setSelectedDrugId] = useState<string>('amoxicillin_clavulanate');
  const [selectedConcentrationIdx, setSelectedConcentrationIdx] = useState<number>(0);
  const [selectedRoute, setSelectedRoute] = useState<string>('IV');
  const [searchFilter, setSearchFilter] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Sync route locale
  useEffect(() => {
    if (locale !== validLocale) {
      setLocale(validLocale);
    }
  }, [validLocale, locale, setLocale]);

  // Update default weight when species changes
  const handleSpeciesChange = (spec: SpeciesId) => {
    setSelectedSpecies(spec);
    setActiveSpecies(spec);
    const prof = SPECIES_WEIGHT_PROFILES[spec] || SPECIES_WEIGHT_PROFILES.canine;
    setWeightKg(prof.defaultKg);
  };

  // Selected drug record
  const currentDrug = useMemo(() => {
    return VET_MEDICATIONS.find((d) => d.id === selectedDrugId) || VET_MEDICATIONS[0];
  }, [selectedDrugId]);

  // Species dosage specification for the selected drug
  const currentSpeciesDosage = useMemo(() => {
    const normalizedSpecies =
      selectedSpecies === 'ovine' ? 'ovine_caprine' : selectedSpecies;
    return currentDrug.dosages.find((d) => d.species === normalizedSpecies) || null;
  }, [currentDrug, selectedSpecies]);

  // Update selected route when dosage spec changes
  useEffect(() => {
    if (currentSpeciesDosage && currentSpeciesDosage.routes.length > 0) {
      if (!currentSpeciesDosage.routes.includes(selectedRoute)) {
        setSelectedRoute(currentSpeciesDosage.routes[0]);
      }
    }
  }, [currentSpeciesDosage, selectedRoute]);

  // Available concentration for selected drug
  const selectedConcentration = useMemo(() => {
    const list = currentDrug.concentrationsAvailable;
    return list[selectedConcentrationIdx] || list[0];
  }, [currentDrug, selectedConcentrationIdx]);

  // Calculation Math: Dose (mg) & Volume (mL)
  const calculationResults = useMemo(() => {
    if (!currentSpeciesDosage || currentSpeciesDosage.isContraindicated || weightKg <= 0) {
      return null;
    }

    const minDoseMg = weightKg * currentSpeciesDosage.doseMgPerKgMin;
    const maxDoseMg = weightKg * currentSpeciesDosage.doseMgPerKgMax;
    const targetDoseMg = (minDoseMg + maxDoseMg) / 2;

    const conc = selectedConcentration.mgPerMl;
    const minVolumeMl = conc > 0 ? minDoseMg / conc : 0;
    const maxVolumeMl = conc > 0 ? maxDoseMg / conc : 0;
    const targetVolumeMl = conc > 0 ? targetDoseMg / conc : 0;

    return {
      minDoseMg: Math.round(minDoseMg * 100) / 100,
      maxDoseMg: Math.round(maxDoseMg * 100) / 100,
      targetDoseMg: Math.round(targetDoseMg * 100) / 100,
      minVolumeMl: Math.round(minVolumeMl * 100) / 100,
      maxVolumeMl: Math.round(maxVolumeMl * 100) / 100,
      targetVolumeMl: Math.round(targetVolumeMl * 100) / 100,
    };
  }, [currentSpeciesDosage, weightKg, selectedConcentration]);

  // Filtered medication list
  const filteredDrugs = useMemo(() => {
    if (!searchFilter.trim()) return VET_MEDICATIONS;
    const q = searchFilter.toLowerCase();
    return VET_MEDICATIONS.filter(
      (d) =>
        d.genericName.toLowerCase().includes(q) ||
        d.arabicName.includes(q) ||
        d.brandNames.some((b) => b.toLowerCase().includes(q))
    );
  }, [searchFilter]);

  // Copy clinical prescription summary to clipboard
  const handleCopyPrescription = () => {
    if (!calculationResults || !currentSpeciesDosage) return;
    const summary = `
[VetAnatomy Hub Clinical Dosage Calculation]
Patient: ${SPECIES_REGISTRY[selectedSpecies]?.name.en || selectedSpecies} (${weightKg} kg)
Medication: ${currentDrug.genericName} (${currentDrug.brandNames.join('/')}) - ${currentDrug.arabicName}
Concentration: ${selectedConcentration.label}
Route: ${selectedRoute} | Frequency: ${currentSpeciesDosage.frequency.en}
Calculated Target Dose: ${calculationResults.targetDoseMg} mg (${currentSpeciesDosage.doseMgPerKgMin}-${currentSpeciesDosage.doseMgPerKgMax} mg/kg)
Administer Volume: ${calculationResults.targetVolumeMl} mL
Clinical Pearl: ${currentDrug.clinicalPearls.en}
    `.trim();

    navigator.clipboard.writeText(summary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full gap-6"
    >
      {/* 1. Header Navigation & Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link
              href={`/${validLocale}/explorer`}
              className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <ArrowLeft size={13} className={isRtl ? 'rotate-180' : ''} />
              <span>{isRtl ? 'العودة لمستكشف التشريح 3D' : 'Back to 3D Anatomy Explorer'}</span>
            </Link>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-emerald-400">
                <Calculator size={22} />
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>{isRtl ? 'حاسبة الجرعات والأدوية البيطرية' : 'Veterinary Clinical Dosage Calculator'}</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  CLINICAL PHARMACOLOGY
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                {isRtl
                  ? 'حساب دقيق لجرعات الأدوية وحجم الحقن وموانع الاستخدام النوعية للأنواع الحيوانية'
                  : 'Precision mg/kg & injection volume (mL) calculations with species-specific contraindications'}
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {calculationResults && (
            <button
              onClick={handleCopyPrescription}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-slate-200 transition-all shadow-sm"
              title="Copy dosage calculation sheet"
            >
              {isCopied ? <CheckCircle2 size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{isCopied ? (isRtl ? 'تم النسخ!' : 'Copied!') : isRtl ? 'نسخ التقرير' : 'Copy Summary'}</span>
            </button>
          )}

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-slate-200 transition-all shadow-sm"
            title="Print dosage report"
          >
            <Printer size={14} />
            <span className="hidden sm:inline">{isRtl ? 'طباعة' : 'Print'}</span>
          </button>
        </div>
      </div>

      {/* 2. Top Species Selector Ribbon with Weight Ranges */}
      <div className="flex flex-col gap-2 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 backdrop-blur-md shadow-xl">
        <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
          <span>{isRtl ? '1. اختر نوع الحيوان المريض:' : '1. Select Target Animal Species:'}</span>
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {Object.entries(SPECIES_REGISTRY).map(([key, spec]) => {
            const isSelected = selectedSpecies === key;
            const weightMeta = SPECIES_WEIGHT_PROFILES[key as SpeciesId];

            return (
              <button
                key={key}
                onClick={() => handleSpeciesChange(key as SpeciesId)}
                className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                  isSelected
                    ? 'bg-gradient-to-b from-emerald-500/20 to-teal-500/10 border-emerald-500/60 text-emerald-200 shadow-lg shadow-emerald-500/10 scale-[1.02]'
                    : 'bg-slate-900/60 hover:bg-slate-800/80 border-slate-800 text-slate-300'
                }`}
              >
                <span className="text-xl mb-1">{spec.icon}</span>
                <span className="text-xs font-bold leading-tight truncate w-full">
                  {isRtl ? spec.name.ar : spec.name.en}
                </span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                  ~{weightMeta?.defaultKg} kg
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Calculator Workstation: 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Drug & Patient Inputs (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Patient Weight Card */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <span>{isRtl ? '2. وزن المريض (كجم):' : '2. Patient Body Weight (kg):'}</span>
              </label>
              <span className="text-[11px] font-mono text-cyan-400">
                Range: {SPECIES_WEIGHT_PROFILES[selectedSpecies]?.minKg}-
                {SPECIES_WEIGHT_PROFILES[selectedSpecies]?.maxKg} kg
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <input
                  type="number"
                  min="0.1"
                  max="2000"
                  step="0.5"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-lg font-bold font-mono text-white focus:outline-none focus:border-emerald-500"
                />
                <span className="absolute right-3 rtl:right-auto rtl:left-3 top-3 text-xs font-bold font-mono text-slate-400">
                  kg
                </span>
              </div>

              {/* Step Adjustment Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setWeightKg((prev) => Math.max(0.1, Math.round((prev - 1) * 10) / 10))}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold flex items-center justify-center transition-colors"
                >
                  -1
                </button>
                <button
                  onClick={() => setWeightKg((prev) => Math.round((prev + 1) * 10) / 10)}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold flex items-center justify-center transition-colors"
                >
                  +1
                </button>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="flex items-center gap-1.5 pt-1">
              <span className="text-[10px] text-slate-400 font-mono">
                {isRtl ? 'أوزان شائعة:' : 'Quick Presets:'}
              </span>
              {SPECIES_WEIGHT_PROFILES[selectedSpecies]?.presets.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setWeightKg(preset)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all ${
                    weightKg === preset
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {preset}kg
                </button>
              ))}
            </div>
          </div>

          {/* Medication Selector Card */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <Pill size={15} className="text-cyan-400" />
                <span>{isRtl ? '3. اختر الدواء البيطري:' : '3. Select Veterinary Medication:'}</span>
              </label>

              <span className="text-[10px] font-mono text-slate-400">
                {filteredDrugs.length} Drugs Available
              </span>
            </div>

            {/* Drug Search Filter */}
            <div className="relative">
              <Search size={14} className="absolute left-3 rtl:left-auto rtl:right-3 top-3 text-slate-400" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder={isRtl ? 'تصفية باسم الدواء أو الاسم التجاري...' : 'Filter by drug name or brand...'}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Drug List Selector */}
            <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
              {filteredDrugs.map((drug) => {
                const isSelected = selectedDrugId === drug.id;
                const specDosage = drug.dosages.find(
                  (d) =>
                    d.species === (selectedSpecies === 'ovine' ? 'ovine_caprine' : selectedSpecies)
                );
                const isContra = specDosage?.isContraindicated;

                return (
                  <button
                    key={drug.id}
                    onClick={() => {
                      setSelectedDrugId(drug.id);
                      setSelectedConcentrationIdx(0);
                    }}
                    className={`w-full text-left rtl:text-right p-2.5 rounded-xl border flex items-center justify-between transition-all text-xs ${
                      isSelected
                        ? 'bg-cyan-500/15 border-cyan-400 text-cyan-200 shadow-md'
                        : isContra
                        ? 'bg-rose-950/20 border-rose-900/50 text-rose-300 hover:bg-rose-950/40'
                        : 'bg-slate-950/50 hover:bg-slate-800/60 border-slate-800/80 text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-bold flex items-center gap-1.5">
                        <span>{isRtl ? drug.arabicName : drug.genericName}</span>
                        {isContra && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] bg-rose-500 text-white font-mono font-bold">
                            CONTRAINDICATED
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {isRtl ? drug.genericName : drug.brandNames.join(', ')}
                      </div>
                    </div>

                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 shrink-0">
                      {isRtl ? drug.categoryLabel.ar : drug.categoryLabel.en}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Concentration & Route Selector */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <label className="text-[11px] font-semibold text-slate-300 block">
                {isRtl ? 'التركيز المتاح (مجم / مل):' : 'Available Concentration (mg/mL):'}
              </label>

              <select
                value={selectedConcentrationIdx}
                onChange={(e) => setSelectedConcentrationIdx(parseInt(e.target.value) || 0)}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
              >
                {currentDrug.concentrationsAvailable.map((conc, idx) => (
                  <option key={idx} value={idx}>
                    {conc.label} ({conc.mgPerMl} mg/mL)
                  </option>
                ))}
              </select>

              {/* Route Picker */}
              {currentSpeciesDosage && currentSpeciesDosage.routes.length > 0 && (
                <div className="pt-2">
                  <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                    {isRtl ? 'طريق الإعطاء:' : 'Administration Route:'}
                  </label>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {currentSpeciesDosage.routes.map((rt) => (
                      <button
                        key={rt}
                        onClick={() => setSelectedRoute(rt)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                          selectedRoute === rt
                            ? 'bg-cyan-500 text-slate-950'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {rt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Calculations & Clinical Contraindications (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* A. If Contraindicated: Display Red High-Alert Banner */}
          {currentSpeciesDosage?.isContraindicated ? (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-950/90 to-slate-900 border-2 border-rose-500 shadow-2xl text-rose-200 space-y-4 animate-shake">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/30">
                  <ShieldAlert size={28} />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-rose-100 uppercase tracking-wide">
                    {isRtl ? 'تحذير طبي حرج: ممنوع الاستخدام تماماً' : 'CRITICAL SPECIES CONTRAINDICATION'}
                  </h2>
                  <p className="text-xs text-rose-300 font-semibold">
                    {currentDrug.genericName} is strictly contraindicated in{' '}
                    {SPECIES_REGISTRY[selectedSpecies]?.name.en || selectedSpecies}!
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-500/40 space-y-2">
                <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle size={15} />
                  <span>{isRtl ? 'السبب العلمي والفسيولوجي:' : 'Physiological & Clinical Rationale:'}</span>
                </div>
                <p className="text-sm font-medium leading-relaxed text-rose-100">
                  {isRtl
                    ? currentSpeciesDosage.contraindicationReason?.ar
                    : currentSpeciesDosage.contraindicationReason?.en}
                </p>
                <p className="text-xs text-slate-300">
                  {isRtl
                    ? currentSpeciesDosage.contraindicationReason?.en
                    : currentSpeciesDosage.contraindicationReason?.ar}
                </p>
              </div>

              <div className="text-xs text-rose-300 font-mono bg-rose-950/60 p-2.5 rounded-lg border border-rose-800/80 text-center font-bold">
                ⛔ DO NOT ADMINISTER • DOSAGE CALCULATIONS HAVE BEEN SAFELY LOCKED
              </div>
            </div>
          ) : !currentSpeciesDosage ? (
            /* B. No dosage guideline found for this species */
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 text-center space-y-2">
              <Info size={28} className="mx-auto text-slate-500" />
              <h3 className="text-base font-bold text-white">
                {isRtl ? 'لا توجد جرعات معتمدة لهذا النوع' : 'No Standard Guideline for This Species'}
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                {isRtl
                  ? 'يرجى الرجوع إلى دليل الأدوية البيطرية الإكلينيكية أو اختيار نوع حيواني آخر.'
                  : 'Please consult the Plumb’s Veterinary Drug Handbook or select a supported species.'}
              </p>
            </div>
          ) : (
            /* C. Valid Dosage Calculation Display */
            <div className="flex flex-col gap-4">
              
              {/* Primary Calculated Cards */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-emerald-500/40 shadow-2xl space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                      Calculated Clinical Dosage
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {isRtl ? currentDrug.arabicName : currentDrug.genericName}
                    </h3>
                  </div>

                  <div className="text-right rtl:text-left font-mono">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Route: {selectedRoute}
                    </span>
                  </div>
                </div>

                {/* Quantitative Metric Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Dose (mg) */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="font-semibold">{isRtl ? 'الجرعة بالمليجرام (mg):' : 'Calculated Dose (mg):'}</span>
                      <span className="font-mono text-[10px] text-cyan-400">
                        {currentSpeciesDosage.doseMgPerKgMin}-{currentSpeciesDosage.doseMgPerKgMax} mg/kg
                      </span>
                    </div>

                    <div className="text-3xl font-black text-cyan-400 font-mono tracking-tight">
                      {calculationResults?.targetDoseMg} <span className="text-sm text-cyan-300">mg</span>
                    </div>

                    <div className="text-[11px] text-slate-400 font-mono mt-1">
                      Range: {calculationResults?.minDoseMg} - {calculationResults?.maxDoseMg} mg
                    </div>
                  </div>

                  {/* Volume (mL) */}
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 flex flex-col justify-between shadow-lg shadow-emerald-500/5">
                    <div className="flex items-center justify-between text-xs text-emerald-300 mb-2">
                      <span className="font-semibold flex items-center gap-1">
                        <Syringe size={14} className="text-emerald-400" />
                        <span>{isRtl ? 'حجم الحقن / السائل (mL):' : 'Administer Volume (mL):'}</span>
                      </span>
                      <span className="font-mono text-[10px] text-emerald-400">
                        @{selectedConcentration.mgPerMl} mg/mL
                      </span>
                    </div>

                    <div className="text-3xl font-black text-emerald-400 font-mono tracking-tight">
                      {calculationResults?.targetVolumeMl} <span className="text-sm text-emerald-300">mL</span>
                    </div>

                    <div className="text-[11px] text-slate-300 font-mono mt-1">
                      Range: {calculationResults?.minVolumeMl} - {calculationResults?.maxVolumeMl} mL
                    </div>
                  </div>
                </div>

                {/* Syringe Volume Visualizer */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Syringe size={13} className="text-cyan-400" />
                      <span>{isRtl ? 'مقياس سرنجة الحقن الافتراضية:' : 'Syringe Graduation Visualizer:'}</span>
                    </span>
                    <span className="text-emerald-400 font-bold">
                      {calculationResults?.targetVolumeMl} mL
                    </span>
                  </div>

                  <div className="relative w-full h-5 bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-300"
                      style={{
                        width: `${Math.min(100, Math.max(5, ((calculationResults?.targetVolumeMl || 0) / 10) * 100))}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Administration Frequency & Timing */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                  <Clock size={16} className="text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-200">
                      {isRtl ? 'تكرار الجرعة والمدة: ' : 'Frequency & Timing: '}
                    </span>
                    <span className="text-slate-300 font-medium">
                      {isRtl ? currentSpeciesDosage.frequency.ar : currentSpeciesDosage.frequency.en}
                    </span>
                  </div>
                </div>

                {/* Specific Warning Note if applicable */}
                {currentSpeciesDosage.warningNotes && (
                  <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/40 text-xs text-amber-200 flex items-start gap-2.5">
                    <AlertTriangle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">{isRtl ? 'تنبيه سريري خاص:' : 'Clinical Safety Note:'}</div>
                      <p className="text-amber-100 leading-relaxed">
                        {isRtl ? currentSpeciesDosage.warningNotes.ar : currentSpeciesDosage.warningNotes.en}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Mechanism of Action & Pharmacology Highlights */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                  <Activity size={15} />
                  <span>{isRtl ? 'آلية التأثير الدوائي (Mechanism of Action):' : 'Mechanism of Action:'}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isRtl ? currentDrug.mechanismOfAction.ar : currentDrug.mechanismOfAction.en}
                </p>

                {/* Clinical Pearl */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-xs text-emerald-300 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-cyan-400">
                    <Sparkles size={13} />
                    <span>Clinical Pearl:</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    {isRtl ? currentDrug.clinicalPearls.ar : currentDrug.clinicalPearls.en}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
