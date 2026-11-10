// scripts/generate-all-anatomy.js
const fs = require('fs');
const path = require('path');

// We will construct the data structure and write scripts/anatomy-data.ts
const blueprint = [
  // 1. EQUINE
  {
    species: 'equine',
    system: 'cardiovascular',
    organs: [
      {
        meshId: 'Mesh_Equine_Cor',
        nameEn: 'Equine Heart',
        nameAr: 'قلب الحصان',
        latinName: 'Cor (Equus caballus)',
        descEn: 'Massive muscular pump weighing 4-5 kg (roughly 1% of body weight), producing resting cardiac output of 35-45 L/min and up to 300 L/min during peak gallop.',
        descAr: 'مضخة عضلية هائلة تزن 4-5 كجم (1% من وزن الجسم)، تضخ 35-45 لتر/دقيقة وقت الراحة وتصل لـ 300 لتر/دقيقة أثناء العدو الأقصى.',
        bloodEn: 'Left and right coronary arteries arising directly from aortic sinuses.',
        bloodAr: 'الشريانان التاجيان الأيمن والأيسر من الجيب الأبهري.',
        innervEn: 'Vagus nerve (CN X, parasympathetic) and sympathetic fibers from cervicothoracic ganglion.',
        innervAr: 'العصب المبهم (العصب العاشر) والألياف الودية من العقدة الرقبية الصدرية.',
        pearlsEn: 'Physiological 2nd-degree AV block is common and benign in athletic horses, disappearing with exercise or excitement.',
        pearlsAr: 'إحصار القلب الأذيني البطيني من الدرجة الثانية شائع وحميد في خيول السباق ويزول مع الحركة.',
        focus: { pos: [1.2, 0.6, 0.4], target: [0, 0.3, 0.1] },
        geom: { shape: 'cone', pos: [0.1, 0.4, 0.4], rot: [Math.PI, 0, 0.2], scale: [0.35, 0.5, 0.35], color: '#dc2626', rough: 0.3, metal: 0.1 },
        q1: { qEn: 'Which physiological cardiac arrhythmia is benign in resting athletic horses?', qAr: 'أي اضطراب نظم قلبي يعتبر حميداً في خيول السباق المستريحة؟', optEn: 'Second-degree AV block', optAr: 'إحصار أذيني بطيني من الدرجة الثانية', expEn: 'High resting vagal tone in athletic horses commonly causes physiological 2nd-degree AV block.', expAr: 'ارتفاع توتر العصب المبهم يسبب إحصاراً فسيولوجياً حميداً يزول مع الحركة.' },
        q2: { qEn: 'What is the resting cardiac output in an adult horse?', qAr: 'ما هو النتاج القلبي وقت الراحة في الحصان البالغ؟', optEn: '35 - 45 L/min', optAr: '35 - 45 لتر/دقيقة', expEn: 'Equine cardiac output is 35-45 L/min at rest and up to 300 L/min during racing.', expAr: 'يبلغ النتاج القلبي 35-45 لتر/دقيقة ويصل إلى 300 لتر/دقيقة أثناء السباق.' }
      },
      {
        meshId: 'Mesh_Equine_Aorta',
        nameEn: 'Equine Thoracic Aorta',
        nameAr: 'الأبهر الصدري للحصان',
        latinName: 'Aorta thoracica',
        descEn: 'The primary high-pressure elastic conduit emerging from the left ventricle, distributing systemic oxygenated blood.',
        descAr: 'المجرى الشرياني المرن عالي الضغط الصادر من البطين الأيسر المنحني ظهرياً لتوزيع الدم المؤكسج.',
        bloodEn: 'Direct systemic arterial outflow.',
        bloodAr: 'المجرى الرئيسي الشرياني الجهازي.',
        innervEn: 'Aortic baroreceptors innervated by the vagus nerve (CN X).',
        innervAr: 'مستقبلات الضغط الأبهرية عبر العصب المبهم.',
        pearlsEn: 'Spontaneous aortic rupture at the bulb can cause peracute collapse and hemothorax in stallions during breeding.',
        pearlsAr: 'تمزق جذر الأبهر قد يسبب الانهيار المفاجئ والنزف الصدري في الفحول أثناء التلقيح.',
        focus: { pos: [1.0, 0.9, 0.3], target: [0, 0.7, 0.2] },
        geom: { shape: 'torus', pos: [0, 0.68, 0.3], rot: [Math.PI / 2, 0.3, 0], scale: [0.28, 0.28, 0.35], color: '#b91c1c', rough: 0.35, metal: 0.2 },
        q1: { qEn: 'Aortic arch baroreceptors transmit afferent signals via which nerve?', qAr: 'تنقل مستقبلات قوس الأبهر إشاراتها عبر أي عصب؟', optEn: 'Vagus nerve (CN X)', optAr: 'العصب المبهم (العصب العاشر)', expEn: 'Aortic arch baroreceptors travel via CN X, whereas carotid sinus travels via CN IX.', expAr: 'تنتقل إشارات مستقبلات الأبهر عبر العصب العاشر بينما الجيب السباتي عبر التاسع.' },
        q2: { qEn: 'Aortic rupture in breeding stallions typically creates a fistula into which chamber?', qAr: 'تمزق الأبهر في الفحول يفتح عادة إلى أي تجويف؟', optEn: 'Right atrium', optAr: 'الأذين الأيمن', expEn: 'Rupture typically forms an aorto-cardiac fistula into the right atrium.', expAr: 'يتمزق الأبهر عادة إلى الأذين الأيمن مسبباً ناصوراً قلبياً أبهرياً.' }
      },
      {
        meshId: 'Mesh_Equine_VenaCava',
        nameEn: 'Equine Vena Cava',
        nameAr: 'الوريد الأجوف للحصان',
        latinName: 'Vena cava',
        descEn: 'Major systemic venous drainage vessels returning deoxygenated blood to the right atrium.',
        descAr: 'الأوردة الجهازية الكبرى التي تعيد الدم غير المؤكسج إلى الأذين الأيمن.',
        bloodEn: 'Systemic venous return.',
        bloodAr: 'العائد الوريدي الجهازي.',
        innervEn: 'Sympathetic vasomotor fibers.',
        innervAr: 'ألياف حركية وعائية ودية.',
        pearlsEn: 'CVP catheterization via the jugular vein into cranial vena cava guides volume resuscitation in colic.',
        pearlsAr: 'قسطرة قياس الضغط الوريدي المركزي ترشد الإنعاش بالسوائل في حالات المغص الحاد.',
        focus: { pos: [-1.0, 0.6, 0.2], target: [0, 0.5, 0.15] },
        geom: { shape: 'cylinder', pos: [-0.08, 0.52, 0.18], rot: [0.2, 0, 0], scale: [0.12, 0.8, 0.12], color: '#2563eb', rough: 0.4, metal: 0.1 },
        q1: { qEn: 'Where does the caudal vena cava pass through the equine diaphragm?', qAr: 'أين يعبر الوريد الأجوف الخلفي من خلال الحجاب الحاجز في الخيل؟', optEn: 'Foramen venae cavae', optAr: 'ثقبة الوريد الأجوف في المركز الوتري', expEn: 'It passes through the foramen venae cavae in the tendinous center of the diaphragm.', expAr: 'يعبر من خلال ثقبة الوريد الأجوف في المركز الوتري للحجاب الحاجز.' },
        q2: { qEn: 'A prominent jugular pulse rising high in the equine neck suggests what abnormality?', qAr: 'ماذا يشير نبض الوريد الوداجي المرتفع في رقبة الحصان؟', optEn: 'Tricuspid insufficiency', optAr: 'قصور الصمام ثلاثي الشرفات', expEn: 'Elevated right atrial pressure causes systolic retrograde pulsation up the jugular.', expAr: 'ارتفاع ضغط الأذين الأيمن يؤدي لارتجاع النبض في الوريد الوداجي.' }
      },
      {
        meshId: 'Mesh_Equine_TruncusPulmonalis',
        nameEn: 'Equine Pulmonary Trunk',
        nameAr: 'الجذع الرئوي للحصان',
        latinName: 'Truncus pulmonalis',
        descEn: 'Arterial trunk carrying deoxygenated blood from the right ventricle into the pulmonary circulation.',
        descAr: 'الجذع الشرياني الناقل للدم غير المؤكسج من البطين الأيمن للدورة الرئوية.',
        bloodEn: 'Pulmonary afferent perfusion.',
        bloodAr: 'التروية الرئوية الواردة.',
        innervEn: 'Pulmonary plexus.',
        innervAr: 'الضفيرة الرئوية.',
        pearlsEn: 'Extreme pulmonary hypertension during maximal sprint contributes to capillary stress failure and EIPH.',
        pearlsAr: 'ارتفاع الضغط الرئوي الشديد أثناء السباق يؤدي إلى النزف الرئوي الإجهادي EIPH.',
        focus: { pos: [1.0, 0.7, 0.5], target: [0.1, 0.55, 0.35] },
        geom: { shape: 'capsule', pos: [0.14, 0.58, 0.42], rot: [0.4, 0, -0.3], scale: [0.12, 0.4, 0.12], color: '#3b82f6', rough: 0.35, metal: 0.15 },
        q1: { qEn: 'The ductus arteriosus connects the pulmonary trunk to which fetal vessel?', qAr: 'القناة الشريانية الجنينية تصل الجذع الرئوي بأي وعاء؟', optEn: 'Aortic arch', optAr: 'قوس الشريان الأبهر', expEn: 'The ductus arteriosus shunts blood from the pulmonary trunk to the aorta.', expAr: 'تحول القناة الشريانية الدم من الجذع الرئوي إلى الأبهر.' },
        q2: { qEn: 'Exercise-Induced Pulmonary Hemorrhage (EIPH) involves rupture of which vessels?', qAr: 'النزف الرئوي بالجهد EIPH ينجم عن تمزق أي أوعية؟', optEn: 'Pulmonary capillaries', optAr: 'الشعيرات الدموية الرئوية', expEn: 'Stress failure of pulmonary capillaries causes blood leakage into airways.', expAr: 'الفشل الميكانيكي للشعيرات الرئوية يسبب تسرب الدم للمجاري الهوائية.' }
      }
    ]
  }
];

console.log('Blueprint created with template.');
