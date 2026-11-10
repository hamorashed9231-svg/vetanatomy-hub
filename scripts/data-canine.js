// scripts/data-canine.js
module.exports = [
  // Cardiovascular
  {
    speciesSlug: 'canine',
    systemSlug: 'cardiovascular',
    meshId: 'Mesh_Canine_Cor',
    nameEn: 'Canine Conical Heart',
    nameAr: 'قلب الكلبيات المخروطي',
    latinName: 'Cor (Canis lupus familiaris)',
    descriptionEn: 'Conical four-chambered heart positioned obliquely between 3rd and 6th intercostal spaces in the middle mediastinum, apex tilted toward the left sternal floor.',
    descriptionAr: 'قلب مخروطي رباعي التجاويف يستقر بميلان بين الفراغين الوربيين الثالث والسادس في المنصف الأوسط، متجهاً بقمته لليسار.',
    bloodSupplyEn: 'Left coronary artery (dominant in dogs, branching into paraconal and circumflex) and right coronary artery.',
    bloodSupplyAr: 'الشريان التاجي الأيسر (الرئيسي في الكلاب ويتفرع للمخروطي والمنعطف) والشريان التاجي الأيمن.',
    innervationEn: 'Cardiac autonomic plexus (vagal parasympathetic and thoracic sympathetic cardiac nerves).',
    innervationAr: 'الضفيرة القلبية الذاتية (أعصاب مبهمة نظيرة الودية وأعصاب قلبية ودية صدرية).',
    clinicalPearlsEn: 'Mitral punctum maximum: Left 5th intercostal space at costochondral junction; primary listening point for systolic murmurs of MMVD.',
    clinicalPearlsAr: 'نقطة التسمع العظمى للصمام التاجي: الورب الخامس الأيسر؛ لاكتشاف نفخات مرض الصمام التاجي المخاطي MMVD.',
    focusCoordinates: { position: [1.1, 0.5, 0.3], target: [0, 0.38, 0.3] },
    geometry: { shape: 'cone', position: [0.08, 0.38, 0.3], rotation: [Math.PI, 0, 0.25], scale: [0.24, 0.32, 0.24], color: '#dc2626', roughness: 0.3, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Where is the punctum maximum for auscultating the mitral (bicuspid) valve in dogs?',
        questionAr: 'أين تقع نقطة التسمع العظمى للصمام التاجي (المترالي) في الكلاب؟',
        options: [
          { en: 'Left 5th intercostal space at the costochondral junction', ar: 'الورب الخامس الأيسر عند التقاطع الغضروفي الضلعي' },
          { en: 'Right 4th intercostal space', ar: 'الورب الرابع الأيمن' },
          { en: 'Left 2nd intercostal space', ar: 'الورب الثاني الأيسر' },
          { en: 'Dorsal 8th intercostal space', ar: 'الورب الثامن ظهرياً' }
        ],
        correctAnswer: 'Left 5th intercostal space at the costochondral junction',
        explanationEn: 'The mitral valve sound projects loudest to the left apex beat at the 5th intercostal space near the sternal margin.',
        explanationAr: 'ينتقل صوت الصمام التاجي بأعلى وضوح عند قمة القلب في الورب الخامس الأيسر بالقرب من القص.'
      },
      {
        questionEn: 'Which coronary artery provides the dominant myocardial blood supply in dogs?',
        questionAr: 'أي شريان تاجي يوفر التروية الدموية السائدة لعضلة القلب في الكلاب؟',
        options: [
          { en: 'Left coronary artery (ramus circumflexus and ramus interventricularis paraconalis)', ar: 'الشريان التاجي الأيسر (الفرع المنعطف والفرع بين البطينين المخروطي)' },
          { en: 'Right coronary artery', ar: 'الشريان التاجي الأيمن' },
          { en: 'Internal thoracic artery', ar: 'الشريان الصدري الداخلي' },
          { en: 'Pulmonary vein', ar: 'الوريد الرئوي' }
        ],
        correctAnswer: 'Left coronary artery (ramus circumflexus and ramus interventricularis paraconalis)',
        explanationEn: 'Dogs have a left-dominant coronary circulation, supplying both the left ventricle and the subsinuosal interventricular groove.',
        explanationAr: 'تمتلك الكلاب دورة تاجية يسارية السيادة، حيث يغذي التاجي الأيسر البطين الأيسر والميزاب بين البطينين.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'cardiovascular',
    meshId: 'Mesh_Canine_Aorta',
    nameEn: 'Canine Aortic Arch & Major Trunks',
    nameAr: 'قوس الأبهر والجذوع الشريانية للكلب',
    latinName: 'Arcus aortae et Trunci arteriosi',
    descriptionEn: 'Aortic arch delivering two distinct arterial trunks: the brachiocephalic trunk and the left subclavian artery.',
    descriptionAr: 'قوس الأبهر الذي يتفرع منه جذعان شريانيان متميزان: الجذع العضدي الرأسي والشريان تحت الترقوي الأيسر.',
    bloodSupplyEn: 'Systemic oxygenated arterial ejection.',
    bloodSupplyAr: 'الدفع الشرياني المؤكسج الجهازي.',
    innervationEn: 'Aortic depressor nerve (vagal baroreceptor branch).',
    innervationAr: 'العصب الخافض للأبهر (فرع المستقبلات الوعائية للمبهم).',
    clinicalPearlsEn: 'Patent Ductus Arteriosus (PDA): Continuous "machinery" murmur heard best at the left cranial base (3rd ICS); causes left heart volume overload.',
    clinicalPearlsAr: 'القناة الشريانية السالكة PDA: نفخة الآلة الميكانيكية المستمرة تُسمع بوضوح في الورب الثالث الأيسر؛ وتسبب فرط حمل للقلب الأيسر.',
    focusCoordinates: { position: [0.9, 0.7, 0.25], target: [0, 0.55, 0.22] },
    geometry: { shape: 'torus', position: [0, 0.55, 0.22], rotation: [Math.PI / 2, 0.3, 0], scale: [0.18, 0.18, 0.22], color: '#b91c1c', roughness: 0.35, metalness: 0.15 },
    quizQuestions: [
      {
        questionEn: 'How many primary branches arise directly from the aortic arch in dogs and cats?',
        questionAr: 'كم عدد الفروع الرئيسية المتفرعة مباشرة من قوس الأبهر في الكلاب والقطط؟',
        options: [
          { en: 'Two: Brachiocephalic trunk and Left subclavian artery', ar: 'فرعان: الجذع العضدي الرأسي والشريان تحت الترقوي الأيسر' },
          { en: 'One single branch like the horse', ar: 'فرع مفرد كالحصان' },
          { en: 'Three separate branches like humans', ar: 'ثلاثة فروع كالإنسان' },
          { en: 'Four branches', ar: 'أربعة فروع' }
        ],
        correctAnswer: 'Two: Brachiocephalic trunk and Left subclavian artery',
        explanationEn: 'Carnivores characteristically have two branches from the aortic arch: the brachiocephalic trunk and the independent left subclavian artery.',
        explanationAr: 'تتميز اللواحم بفرعين مباشرين من قوس الأبهر: الجذع العضدي الرأسي والشريان تحت الترقوي الأيسر المستقل.'
      },
      {
        questionEn: 'What type of murmur is diagnostic for a Left-to-Right Patent Ductus Arteriosus (PDA) in puppies?',
        questionAr: 'ما هو نمط النفخة القلبية المميز للقناة الشريانية السالكة (PDA) في الجراء الصغيرة؟',
        options: [
          { en: 'Continuous washing-machine murmur loudest at left heart base', ar: 'نفخة الآلة المستمرة خلال الانقباض والانبساط عند قاعدة القلب اليسرى' },
          { en: 'Holosystolic regurgitant murmur at apex only', ar: 'نفخة شمولية الانقباض عند القمة فقط' },
          { en: 'Early diastolic decrescendo murmur', ar: 'نفخة انبساطية متناقصة' },
          { en: 'Soft ejection systolic murmur at right sternal border', ar: 'نفخة قذفية انقباضية خفيفة يميناً' }
        ],
        correctAnswer: 'Continuous washing-machine murmur loudest at left heart base',
        explanationEn: 'Because aortic pressure exceeds pulmonary artery pressure throughout both systole and diastole, turbulent blood flows continuously.',
        explanationAr: 'نظراً لأن ضغط الأبهر أعلى من الشريان الرئوي طوال الانقباض والانبساط، يتدفق الدم بشكل متواصل محدثاً نفخة مستمرة.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'cardiovascular',
    meshId: 'Mesh_Canine_VenaCava',
    nameEn: 'Canine Cranial & Caudal Vena Cava',
    nameAr: 'الوريدان الأجوفان العلوي والسفلي للكلب',
    latinName: 'Vena cava cranialis et caudalis',
    descriptionEn: 'Large thin-walled capacitance vessels delivering systemic deoxygenated venous return into the right atrium.',
    descriptionAr: 'الأوعية الوريدية الكبرى السعوية رقيقة الجدار التي تعيد الدم غير المؤكسج للأذين الأيمن.',
    bloodSupplyEn: 'Venous return conduits from head, neck, forelimbs, and caudal abdomen.',
    bloodSupplyAr: 'مجاري العائد الوريدي من الرأس والعنق والأطراف الأمامية والبطن.',
    innervationEn: 'Postganglionic sympathetic fibers.',
    innervationAr: 'ألياف ودية بعد عقدية.',
    clinicalPearlsEn: 'Caval Syndrome in Heartworm Disease (Dirofilaria immitis): Heavy adult worm burden lodges across the tricuspid valve into the caudal vena cava, causing acute intravascular hemolysis and shock.',
    clinicalPearlsAr: 'متلازمة الأجوف في مرض الديدان القلبية: احتشاد الديدان في الصمام ثلاثي الشرفات والوريد الأجوف يسبب انحلال دم حاد وصدمة مميتة.',
    focusCoordinates: { position: [-0.9, 0.5, 0.2], target: [-0.08, 0.42, 0.15] },
    geometry: { shape: 'cylinder', position: [-0.08, 0.42, 0.15], rotation: [0.15, 0, 0], scale: [0.08, 0.65, 0.08], color: '#2563eb', roughness: 0.4, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'In severe canine heartworm disease, "caval syndrome" develops when adult worms obstruct which junction?',
        questionAr: 'في مرض ديدان القلب الشديد في الكلاب، تحدث "متلازمة الأجوف" عندما تعيق الديدان البالغة أي مدخل؟',
        options: [
          { en: 'Tricuspid valve orifice and caudal vena cava inlet', ar: 'فوهة الصمام ثلاثي الشرفات ومدخل الوريد الأجوف الخلفي' },
          { en: 'Aortic arch', ar: 'قوس الشريان الأبهر' },
          { en: 'Pulmonary vein ostia', ar: 'فتحات الأوردة الرئوية' },
          { en: 'Left subclavian artery', ar: 'الشريان تحت الترقوي الأيسر' }
        ],
        correctAnswer: 'Tricuspid valve orifice and caudal vena cava inlet',
        explanationEn: 'Worms prolapse from the pulmonary artery into the right atrium and caudal vena cava, disrupting tricuspid function and shearing RBCs.',
        explanationAr: 'تتراجع الديدان للأذين الأيمن والأجوف الخلفي معطلة الصمام ثلاثي الشرفات ومفتتة كريات الدم الحمراء ميكانيكياً.'
      },
      {
        questionEn: 'Which vein drains into the cranial vena cava immediately before it empties into the right atrium in dogs?',
        questionAr: 'أي وريد يصب في الوريد الأجوف الأمامي مباشرة قبل دخوله للأذين الأيمن في الكلاب؟',
        options: [
          { en: 'Right azygos vein (Vena azygos dextra)', ar: 'الوريد الفرد الأيمن (Vena azygos dextra)' },
          { en: 'Left azygos vein', ar: 'الوريد الفرد الأيسر' },
          { en: 'Hepatic vein', ar: 'الوريد الكبدي' },
          { en: 'Femoral vein', ar: 'الوريد الفخذي' }
        ],
        correctAnswer: 'Right azygos vein (Vena azygos dextra)',
        explanationEn: 'The dog possesses a right azygos vein that arches over the right main bronchus to join the cranial vena cava or right atrium.',
        explanationAr: 'تمتلك الكلاب وريداً فرداً أيمن يلتف فوق الشعبة الهوائية اليمنى ليصب في الأجوف الأمامي أو الأذين الأيمن.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'cardiovascular',
    meshId: 'Mesh_Canine_VenaAzygosDextra',
    nameEn: 'Canine Right Azygos Vein',
    nameAr: 'الوريد الفرد الأيمن للكلب',
    latinName: 'Vena azygos dextra',
    descriptionEn: 'The dominant azygos vessel in carnivores, arching over the root of the right lung at the 5th thoracic vertebra to enter the cranial vena cava.',
    descriptionAr: 'الوريد الفرد الرئيسي في اللواحم، يلتف فوق جذر الرئة اليمنى عند الفقرة الصدرية الخامسة ليصب في الأجوف الأمامي.',
    bloodSupplyEn: 'Drainage from dorsal intercostal veins 4 to 12.',
    bloodSupplyAr: 'تصريف الأوردة الوربية الظهرية من 4 إلى 12.',
    innervationEn: 'Sympathetic vasomotor autonomic plexuses.',
    innervationAr: 'الضفائر الودية الحركية الوعائية.',
    clinicalPearlsEn: 'Important surgical landmark during right lateral thoracotomy for patent ductus arteriosus (PDA) ligation and persistent right aortic arch (PRAA) correction.',
    clinicalPearlsAr: 'معلم جراحي هام أثناء فتح الصدر الأيمن لربط القناة الشريانية PDA وإصلاح القوس الأبهر الأيمن المستمر PRAA.',
    focusCoordinates: { position: [0.8, 0.6, 0.15], target: [0.1, 0.52, 0.1] },
    geometry: { shape: 'cylinder', position: [0.1, 0.52, 0.1], rotation: [0.1, 0, 0], scale: [0.05, 0.5, 0.05], color: '#1d4ed8', roughness: 0.4, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Which congenital vascular ring anomaly traps the esophagus between the aorta and ligamentum arteriosum in dogs?',
        questionAr: 'أي شذوذ وعائي خلقي يحبس المريء بين الأبهر والرباط الشرياني في الكلاب مسبباً القلس بعد الفطام؟',
        options: [
          { en: 'Persistent Right Aortic Arch (PRAA)', ar: 'استمرار قوس الأبهر الأيمن (PRAA)' },
          { en: 'Portosystemic shunt', ar: 'المجازة البابية الجهازية' },
          { en: 'Tetralogy of Fallot', ar: 'رباعية فالوت' },
          { en: 'Ventricular septal defect', ar: 'عيب الحاجز البطيني' }
        ],
        correctAnswer: 'Persistent Right Aortic Arch (PRAA)',
        explanationEn: 'The right 4th aortic arch persists instead of the left, forming a vascular ring with the ligamentum arteriosum that compresses the esophagus.',
        explanationAr: 'استمرار القوس الأبهري الأيمن الرابع يشكل حلقة وعائية مع الرباط الشرياني تعتصر المريء وتسبب توسع المريء والقلس.'
      },
      {
        questionEn: 'In dogs, the azygos vein is located on which side of the thoracic cavity?',
        questionAr: 'في الكلاب، على أي جانب من التجويف الصدري يقع الوريد الفرد؟',
        options: [
          { en: 'Right side only (Vena azygos dextra)', ar: 'الجانب الأيمن فقط (الوريد الفرد الأيمن)' },
          { en: 'Left side only', ar: 'الجانب الأيسر فقط كالأبقار' },
          { en: 'Bilateral symmetrical veins', ar: 'وريدان متناظران في الجانبين' },
          { en: 'Absent in dogs', ar: 'غائب في الكلاب' }
        ],
        correctAnswer: 'Right side only (Vena azygos dextra)',
        explanationEn: 'Carnivores and horses develop only the right azygos vein, while ruminants and pigs develop the left azygos vein.',
        explanationAr: 'تطور اللواحم والخيول الوريد الفرد الأيمن فقط، بينما تطور المجترات والخنازير الوريد الفرد الأيسر.'
      }
    ]
  },
  // Digestive
  {
    speciesSlug: 'canine',
    systemSlug: 'digestive',
    meshId: 'Mesh_Canine_Gaster',
    nameEn: 'Canine Simple Stomach',
    nameAr: 'معدة الكلب البسيطة',
    latinName: 'Gaster (Canis lupus familiaris)',
    descriptionEn: 'J-shaped monogastric stomach situated in the cranial abdomen, prone to clockwise torsion and distension in large deep-chested breeds.',
    descriptionAr: 'معدة بسيطة أحادية التجويف على شكل حرف J في مقدمة البطن، معرضة للالتواء الميكانيكي في السلالات عميقة الصدر.',
    bloodSupplyEn: 'Celiac artery branches: Left gastric, right gastric, left gastroepiploic, right gastroepiploic, and short gastric arteries.',
    bloodSupplyAr: 'فروع الشريان الجوفي: المعدي الأيسر والأيمن والمعدي الثربي والشرايين القصيرة.',
    innervationEn: 'Vagus nerve (dorsal and ventral gastric branches) and celiac sympathetic plexus.',
    innervationAr: 'العصب المبهم (الفروع المعدية الظهرية والبطنية) والضفيرة الودية الجوفية.',
    clinicalPearlsEn: 'Gastric Dilatation-Volvulus (GDV): Right lateral abdominal radiograph shows pathognomonic "double bubble" or "Popeye arm" compartment sign.',
    clinicalPearlsAr: 'التواء وتمدد المعدة GDV: الأشعة الجانبية اليمنى تظهر علامة "الفقاعة المزدوجة" أو "ذراع باباي" الهوائية المميزة.',
    focusCoordinates: { position: [0.9, 0.4, 0.1], target: [0.05, 0.38, 0.05] },
    geometry: { shape: 'torus', position: [0.05, 0.38, 0.05], rotation: [0.4, 0.6, 0], scale: [0.26, 0.16, 0.18], color: '#ea580c', roughness: 0.4, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Which radiographic projection is gold standard for diagnosing Gastric Dilatation-Volvulus (GDV) in dogs?',
        questionAr: 'أي وضعية تصوير شعاعي تعتبر المعيار الذهبي لتشخيص انفتال وتوسع المعدة (GDV) في الكلاب؟',
        options: [
          { en: 'Right lateral abdominal projection ("double bubble" sign)', ar: 'المسقط البطني الجانبي الأيمن (علامة الفقاعة المزدوجة)' },
          { en: 'Left lateral projection', ar: 'المسقط الجانبي الأيسر' },
          { en: 'Ventrodorsal projection only', ar: 'المسقط البطني الظهري فقط' },
          { en: 'Dorsoventral projection', ar: 'المسقط الظهري البطني' }
        ],
        correctAnswer: 'Right lateral abdominal projection ("double bubble" sign)',
        explanationEn: 'In right lateral recumbency, gas rises into the displaced, compartmentalized pylorus, creating the classic compartmentalization/Popeye arm sign.',
        explanationAr: 'في الوضعية الجانبية اليمنى يعلو الغاز داخل البواب المنزاح للأعلى مكوناً علامة الجيب الهوائي المنفصل (ذراع باباي).'
      },
      {
        questionEn: 'In what direction does the stomach rotate in over 90% of canine GDV cases when viewed from behind the dog?',
        questionAr: 'في أي اتجاه تلتف المعدة في أكثر من 90% من حالات GDV في الكلاب عند النظر من خلف الحيوان؟',
        options: [
          { en: 'Clockwise rotation (pylorus moves ventrally across the floor to the left body wall)', ar: 'دوران باتجاه عقارب الساعة (يتحرك البواب بطنياً نحو الجدار الأيسر)' },
          { en: 'Counter-clockwise rotation', ar: 'عكس اتجاه عقارب الساعة' },
          { en: 'Strictly dorsal flip with no rotation', ar: 'انقلاب ظهري مستقيم دون دوران' },
          { en: 'Lateral rotation around the vertical spine', ar: 'دوران جانبي حول العمود الفقري' }
        ],
        correctAnswer: 'Clockwise rotation (pylorus moves ventrally across the floor to the left body wall)',
        explanationEn: 'The pylorus travels ventrally from the right, crossing the midline to lie dorsolateral to the stomach on the left.',
        explanationAr: 'يتحرك البواب بطنياً من اليمين عابراً قاع البطن ليستقر في أعلى الجانب الأيسر مع عقارب الساعة.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'digestive',
    meshId: 'Mesh_Canine_Hepar',
    nameEn: 'Canine Multilobed Liver & Gallbladder',
    nameAr: 'كبد الكلبيات متعدد الفصوص والمرارة',
    latinName: 'Hepar et Vesica fellea',
    descriptionEn: 'Deeply fissured liver divided into six anatomical lobes (left lateral/medial, right lateral/medial, quadrate, and caudate with papillary process).',
    descriptionAr: 'كبد عميق الشقوق ينقسم إلى ستة فصوص تشريحية وتستقر المرارة بين الفصين المربع والأنسي الأيمن.',
    bloodSupplyEn: 'Hepatic portal vein (70-80% flow) and hepatic artery (20-30% oxygenated); drains via hepatic veins into caudal vena cava.',
    bloodSupplyAr: 'الوريد البابي الكبدي (70-80%) والشريان الكبدي (20-30%) ويصرف عبر الأوردة الكبدية في الأجوف الخلفي.',
    innervationEn: 'Hepatic plexus (vagus and celiac sympathetic).',
    innervationAr: 'الضفيرة الكبدية (المبهم والودي الجوفي).',
    clinicalPearlsEn: 'Congenital Portosystemic Shunt (PSS): Extrahepatic shunts in toy breeds (Yorkies) allow portal blood to bypass the liver, causing microhepatica and ammonium urate stones.',
    clinicalPearlsAr: 'المجازة البابية الجهازية PSS: تحول دم الوريد البابي بعيداً عن الكبد في السلالات الصغيرة مسبباً صغر حجم الكبد وحصوات يورات الأمونيوم.',
    focusCoordinates: { position: [0.8, 0.6, 0.3], target: [0, 0.48, 0.22] },
    geometry: { shape: 'sphere', position: [0, 0.48, 0.22], rotation: [0.2, 0.3, 0], scale: [0.38, 0.28, 0.25], color: '#991b1b', roughness: 0.4, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'In which specific anatomical depression does the canine gallbladder sit?',
        questionAr: 'في أي انخفاض تشريحي تستقر المرارة في كبد الكلب؟',
        options: [
          { en: 'Between the Quadrate lobe and Right Medial lobe (Fossa vesicae felleae)', ar: 'بين الفص المربع والفص الأنسي الأيمن (Fossa vesicae felleae)' },
          { en: 'Inside the Caudate process', ar: 'داخل النتوء المذنب' },
          { en: 'Between Left Lateral and Left Medial lobes', ar: 'بين الفصين الوحشي والأنسي الأيسرين' },
          { en: 'Behind the papillary process', ar: 'خلف النتوء الحلمي' }
        ],
        correctAnswer: 'Between the Quadrate lobe and Right Medial lobe (Fossa vesicae felleae)',
        explanationEn: 'The gallbladder is nestled in the gallbladder fossa between the quadrate lobe medially and right medial lobe laterally.',
        explanationAr: 'تستقر المرارة في حفرة المرارة المحصورة بين الفص المربع إنسياً والفص الأنسي الأيمن وحشياً.'
      },
      {
        questionEn: 'Congenital Extrahepatic Portosystemic Shunts (PSS) are most commonly encountered in which dog breeds?',
        questionAr: 'المجازات البابية الجهازية خارج الكبد (Extrahepatic PSS) تشاهد أكثر شيوعاً في أي سلالات كلاب؟',
        options: [
          { en: 'Small and toy breeds (Yorkshire Terriers, Maltese, Miniature Schnauzers)', ar: 'السلالات الصغيرة والقزمة (يوركشاير، مالتيز، شناوزر قزم)' },
          { en: 'Large and giant breeds (Irish Wolfhounds, Great Danes)', ar: 'السلالات العملاقة والكبيرة' },
          { en: 'Brachycephalic breeds exclusively', ar: 'السلالات عريضة الجمجمة حصراً' },
          { en: 'Sight hounds only', ar: 'كلاب الصيد البصرية فقط' }
        ],
        correctAnswer: 'Small and toy breeds (Yorkshire Terriers, Maltese, Miniature Schnauzers)',
        explanationEn: 'Small/toy breeds typically develop single extrahepatic portosystemic shunts, whereas large breeds develop intrahepatic shunts (persistent ductus venosus).',
        explanationAr: 'تطور السلالات الصغيرة تحويلات بابية خارج نسيج الكبد، بينما السلالات الكبيرة تصاب بتحويلات داخل الكبد.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'digestive',
    meshId: 'Mesh_Canine_IntestinumTenue',
    nameEn: 'Canine Small Intestine (Duodenum, Jejunum, Ileum)',
    nameAr: 'الأمعاء الدقيقة للكلب (الإثناعشر، الصائم، اللفائفي)',
    latinName: 'Intestinum tenue (Duodenum, Jejunum, Ileum)',
    descriptionEn: 'Alimentary tube measuring 3-4 meters with descending duodenum held on the right by the mesoduodenum, extensive mobile jejunal loops, and antimesenteric ileal artery.',
    descriptionAr: 'أنبوب هضمي بطول 3-4 أمتار مع إثناعشر نازل على اليمين وحلقات صائم متحركة وشريان لفائفي مواجه للمساريق.',
    bloodSupplyEn: 'Cranial mesenteric artery; drained by mesenteric veins into the portal vein.',
    bloodSupplyAr: 'الشريان المساريقي الأمامي؛ والأوردة المساريقية تصب في الوريد البابي.',
    innervationEn: 'Cranial mesenteric autonomic plexus (vagal motor and sympathetic splanchnic inhibitory).',
    innervationAr: 'الضفيرة المساريقية الأمامية (المبهم حركي والأحشائي الودي مثبط).',
    clinicalPearlsEn: 'Linear Foreign Body Obstruction: Strings or pantyhose anchor at the pylorus or tongue base, causing mesenteric border pleating/plication and fatal intestinal perforation.',
    clinicalPearlsAr: 'انسداد الأجسام الغريبة الخيطية: تعليق الخيوط في البواب يسبب انكماشاً وتجعداً أفقياً للأمعاء (Plication) وانثقاباً معوياً قاتلاً.',
    focusCoordinates: { position: [0.8, 0.4, 0.0], target: [0, 0.25, -0.2] },
    geometry: { shape: 'torus', position: [0, 0.25, -0.2], rotation: [0.3, 0.2, 0], scale: [0.35, 0.22, 0.28], color: '#f59e0b', roughness: 0.5, metalness: 0.08 },
    quizQuestions: [
      {
        questionEn: 'Linear foreign body obstruction in dogs and cats produces what classical radiographic appearance on plain abdominal films?',
        questionAr: 'انسداد الأجسام الغريبة الخيطية الطولية يظهر بأي شكل شعاعي كلاسيكي في صور الأشعة؟',
        options: [
          { en: 'Plication / accordion-like pleating of small intestine with eccentric crescentic gas bubbles', ar: 'تطوي وتجعد الأمعاء كالأكورديون مع فقاعات غاز هلالية غير مركزية' },
          { en: 'Severe uniform megacolon', ar: 'تضخم شديد منتظم للقولون' },
          { en: 'Complete loss of all abdominal gas', ar: 'غياب تام لجميع الغازات' },
          { en: 'Pneumoperitoneum in every case immediately', ar: 'استرواح صفاقي فوري في كل الحالات' }
        ],
        correctAnswer: 'Plication / accordion-like pleating of small intestine with eccentric crescentic gas bubbles',
        explanationEn: 'Peristalsis pushes the intestine along the taut anchored linear foreign body, causing characteristic accordion-like plication.',
        explanationAr: 'تحاول حركة الأمعاء دفع الخيط المشدود فتنثني الحلقات المعوية فوق بعضها كالأكورديون.'
      },
      {
        questionEn: 'Which anatomical feature on the antimesenteric border of the terminal canine intestine uniquely identifies the ileum during exploratory laparotomy?',
        questionAr: 'ما هي الخاصية التشريحية على الحافة المقابلة للمساريق التي تميز اللفائفي بشكل قاطع أثناء استكشاف البطن جراحياً في الكلاب؟',
        options: [
          { en: 'The antimesenteric ileal artery and ileocecal fold (Plica ileocecalis)', ar: 'الشريان اللفائفي المقابل للمساريق والطية اللفائفية الأعورية' },
          { en: 'Teniae coli bands', ar: 'الأحزمة العضلية للقولون' },
          { en: 'Spiral coil arrangement', ar: 'الترتيب الحلزوني' },
          { en: 'Presence of a crop', ar: 'وجود حوصلة' }
        ],
        correctAnswer: 'The antimesenteric ileal artery and ileocecal fold (Plica ileocecalis)',
        explanationEn: 'The antimesenteric blood vessel running along the free border and the peritoneal fold connecting to the cecum definitively identify the ileum.',
        explanationAr: 'الوعاء الدموي الصغير الساري على الحافة الحرة والطية الواصلة للأعور هما المعلم الحاسم لتأكيد اللفائفي جراحياً.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'digestive',
    meshId: 'Mesh_Canine_Pancreas',
    nameEn: 'Canine V-Shaped Pancreas',
    nameAr: 'بنكرياس الكلب ذو الشعبتين',
    latinName: 'Pancreas (Lobus dexter, Lobus sinister et Corpus)',
    descriptionEn: 'V-shaped lobulated gland consisting of a right lobe nestled in the mesoduodenum and a left lobe extending along the dorsal surface of the stomach to the spleen.',
    descriptionAr: 'غدة مفصصة على شكل حرف V تتكون من فص أيمن يستقر في مساريق الإثناعشر وفص أيسر يمتد على الوجه الظهري للمعدة حتى الطحال.',
    bloodSupplyEn: 'Cranial pancreaticoduodenal (from celiac) and caudal pancreaticoduodenal (from cranial mesenteric) arteries.',
    bloodSupplyAr: 'الشريانان البنكرياسيان الإثناعشريان الأمامي والخلفي.',
    innervationEn: 'Autonomic branches from celiac and mesenteric plexuses.',
    innervationAr: 'الفروع الذاتية من الضفيرتين الجوفية والمساريقية.',
    clinicalPearlsEn: 'Acute Pancreatitis: Premature zymogen activation triggers autodigestion; dogs assume a characteristic "praying position" due to intense cranial abdominal pain.',
    clinicalPearlsAr: 'التهاب البنكرياس الحاد: التفعيل المبكر لإنزيمات الهضم يسبب الهضم الذاتي؛ وتتخذ الكلاب "وضعية الصلاة/السجود" بسبب ألم البطن الأمامي العنيف.',
    focusCoordinates: { position: [0.7, 0.5, 0.1], target: [0.12, 0.35, 0.0] },
    geometry: { shape: 'box', position: [0.12, 0.35, 0.0], rotation: [0.3, 0.4, 0], scale: [0.18, 0.08, 0.28], color: '#fed7aa', roughness: 0.5, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Which two pancreatic ducts typically drain digestive enzymes into the canine duodenum?',
        questionAr: 'ما هما القناتان البنكرياسيتان اللتان تصرفان الإنزيمات الهاضمة إلى إثناعشر الكلب؟',
        options: [
          { en: 'Major pancreatic duct (draining with bile duct) and larger Accessory pancreatic duct', ar: 'القناة البنكرياسية الرئيسية والقناة البنكرياسية الإضافية (وهي الأكبر في الكلاب)' },
          { en: 'Only one solitary duct that enters the ileum', ar: 'قناة واحدة تصب في اللفائفي' },
          { en: 'Four micro-ducts along the jejunum', ar: 'أربع قنوات دقيقة في الصائم' },
          { en: 'Hepatic cyst duct only', ar: 'القناة المرارية فقط' }
        ],
        correctAnswer: 'Major pancreatic duct (draining with bile duct) and larger Accessory pancreatic duct',
        explanationEn: 'In dogs, the accessory pancreatic duct (opening at the minor duodenal papilla) is the larger and main outflow duct, unlike in cats.',
        explanationAr: 'في الكلاب تعد القناة البنكرياسية الإضافية (تصب في الحليمة الإثناعشرية الصغرى) هي القناة الكبرى والأساسية للتصريف.'
      },
      {
        questionEn: 'Why do dogs with severe acute pancreatitis assume the classic "prayer position" (cranial quarters lowered, pelvic limbs standing)?',
        questionAr: 'لماذا تتخذ الكلاب المصابة بالتهاب البنكرياس الحاد "وضعية الصلاة/السجود" (خفض الصدر ورفع القوائم الخلفية)؟',
        options: [
          { en: 'Relieves visceral pressure and tension off the inflamed cranial abdomen and peritoneum', ar: 'لتخفيف الضغط والشد الحشوي عن منطقة مقدمة البطن والصفاق الملتهب' },
          { en: 'Due to femoral nerve paralysis', ar: 'لشلل العصب الفخذي' },
          { en: 'To encourage urinary bladder drainage', ar: 'لتشجيع تصريف البول' },
          { en: 'Neurological seizure behavior', ar: 'نوبة صرع حركية' }
        ],
        correctAnswer: 'Relieves visceral pressure and tension off the inflamed cranial abdomen and peritoneum',
        explanationEn: 'Lowering the cranial abdomen takes the weight of viscera off the pancreas and reduces focal peritonitis stretch pain.',
        explanationAr: 'يؤدي خفض مقدمة الجسم إلى إبعاد ثقل الأحشاء الضاغطة على البنكرياس وتسكين الألم البريتوني الحاد.'
      }
    ]
  },
  // Respiratory
  {
    speciesSlug: 'canine',
    systemSlug: 'respiratory',
    meshId: 'Mesh_Canine_Larynx',
    nameEn: 'Canine Larynx & Vocal Folds',
    nameAr: 'حنجرة الكلب والحبال الصوتية',
    latinName: 'Larynx (Plicae vocales et Cartilagines)',
    descriptionEn: 'Musculocartilaginous valve regulating vocalization and preventing aspiration, consisting of epiglottic, thyroid, cricoid, and paired arytenoid cartilages.',
    descriptionAr: 'صمام عضلي غضروفي ينظم النباح ويمنع استنشاق الطعام، يتكون من لسان المزمار والغضاريف الدرقية والحلقية والطرجهارية.',
    bloodSupplyEn: 'Cranial laryngeal artery from external carotid artery.',
    bloodSupplyAr: 'الشريان الحنجري الأمامي من السباتي الظاهر.',
    innervationEn: 'Cranial laryngeal nerve (sensory and cricothyroid) and Caudal/Recurrent laryngeal nerve (abductor CAD muscle).',
    innervationAr: 'العصب الحنجري الأمامي والعصب الحنجري الراجع (المغذي لعضلة فتح المزمار CAD).',
    clinicalPearlsEn: 'Canine Laryngeal Paralysis (Geriatric Onset Laryngeal Paralysis Polyneuropathy / GOLPP): Degeneration of CAD muscles produces inspiratory stridor and cyanosis in older Labradors.',
    clinicalPearlsAr: 'شلل الحنجرة في الكلاب المسنة GOLPP: تنكس العضلة الحلقية الطرجهارية يسبب صريراً شهيقياً واختناقاً حاداً في كلاب اللابرادور.',
    focusCoordinates: { position: [0.7, 0.8, 0.7], target: [0, 0.65, 0.6] },
    geometry: { shape: 'cylinder', position: [0, 0.65, 0.6], rotation: [0.35, 0, 0], scale: [0.12, 0.22, 0.12], color: '#cbd5e1', roughness: 0.4, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Geriatric Onset Laryngeal Paralysis Polyneuropathy (GOLPP) in Labrador Retrievers is characterized primarily by failure of which respiratory phase?',
        questionAr: 'شلل الحنجرة في كلاب اللابرادور المسنة GOLPP يتميز بفشل في أي مرحلة تنفسية؟',
        options: [
          { en: 'Failure of arytenoid abduction during inspiration, producing severe inspiratory stridor', ar: 'فشل تباعد الغضروفين الطرجهاريين أثناء الشهيق، مسبباً صريراً شهيقياً حاداً' },
          { en: 'Inability to close the glottis during swallowing only', ar: 'العجز عن إغلاق المزمار أثناء البلع فقط' },
          { en: 'Passive expiratory wheezing', ar: 'أزيز زفيري هادئ' },
          { en: 'Loss of coughing reflex with no airway noise', ar: 'فقدان منعكس السعال دون صوت' }
        ],
        correctAnswer: 'Failure of arytenoid abduction during inspiration, producing severe inspiratory stridor',
        explanationEn: 'Denervation of the cricoarytenoideus dorsalis prevents the vocal folds from opening, causing dynamic upper airway obstruction during inspiration.',
        explanationAr: 'يمنع شلل العضلة الحلقية الطرجهارية فتح الحبلين الصوتين، مما يسد مجرى التنفس ديناميكياً أثناء الشهيق.'
      },
      {
        questionEn: 'Which surgical technique is the treatment of choice for bilateral idiopathic laryngeal paralysis in dogs?',
        questionAr: 'ما هي التقنية الجراحية المفضلة لعلاج شلل الحنجرة الثنائي في الكلاب؟',
        options: [
          { en: 'Unilateral arytenoid lateralization ("laryngeal tie-back")', ar: 'المفاضة الحنجرية أحادية الجانب (Laryngeal tie-back)' },
          { en: 'Total permanent tracheostomy only', ar: 'فغر رغامي دائم حصراً' },
          { en: 'Vocal cordectomy alone', ar: 'استئصال الأحبال الصوتية فقط' },
          { en: 'Epiglottic amputation', ar: 'بتر لسان المزمار' }
        ],
        correctAnswer: 'Unilateral arytenoid lateralization ("laryngeal tie-back")',
        explanationEn: 'Suturing one arytenoid permanently in an abducted position restores airway diameter while minimizing bilateral aspiration risk.',
        explanationAr: 'تثبيت أحد الغضروفين الطرجهاريين جراحياً في وضع الانفتاح يضمن مرور الهواء مع تقليل خطر استنشاق الطعام.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'respiratory',
    meshId: 'Mesh_Canine_Trachea',
    nameEn: 'Canine Trachea & Cartilaginous Rings',
    nameAr: 'قصبة الكلب الهوائية والحلقات الغضروفية',
    latinName: 'Trachea (Cartilagines tracheales)',
    descriptionEn: 'Flexible conduit of ~35 C-shaped hyaline rings completed dorsally by the external trachealis muscle; traverses neck into cranial thorax to T4-T5 bifurcation.',
    descriptionAr: 'أنبوب مرن يضم حوالي 35 حلقة غضروفية غير مكتملة تكملها العضلة الرغامية ظهرياً ويمتد في العنق حتى التفرع الصدري عند T4-T5.',
    bloodSupplyEn: 'Common carotid arteries in neck; cranial bronchoesophageal branches in thorax.',
    bloodSupplyAr: 'الشرايين السباتية والشريان القصبي المريئي.',
    innervationEn: 'Recurrent laryngeal nerve and sympathetic trunk.',
    innervationAr: 'العصب الحنجري الراجع والجذع الودي.',
    clinicalPearlsEn: 'Tracheal Collapse: Dorsoventral flattening of rings with lax trachealis muscle in small breeds (Yorkies, Poms); causes characteristic "goose honk" paroxysmal cough.',
    clinicalPearlsAr: 'انهيار وتسطح القصبة الهوائية: ارتخاء العضلة وتسطح الحلقات في الكلاب الصغيرة يسبب سعالاً نوبياً شبيهاً بـ "صياح الإوزة".',
    focusCoordinates: { position: [0.7, 0.7, 0.5], target: [0, 0.55, 0.38] },
    geometry: { shape: 'cylinder', position: [0, 0.55, 0.38], rotation: [0.2, 0, 0], scale: [0.09, 0.55, 0.09], color: '#94a3b8', roughness: 0.5, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Tracheal collapse in miniature and toy dog breeds classically produces what audible clinical cough?',
        questionAr: 'انهيار القصبة الهوائية في السلالات الصغيرة يسبب كلاسيكياً أي نوع من السعال المسموع؟',
        options: [
          { en: 'Harsh, paroxysmal "goose honk" cough triggered by excitement or collar pressure', ar: 'سعال نوبي خشن يشبه "صياح الإوزة" تحفزه الإثارة أو شد الطوق' },
          { en: 'Soft productive moist bubble cough', ar: 'سعال رطب فقاعي خافت' },
          { en: 'Silent wheeze with no sound', ar: 'أزيز صامت' },
          { en: 'Sneeze with no thoracic effort', ar: 'عطاس دون مجهود صدري' }
        ],
        correctAnswer: 'Harsh, paroxysmal "goose honk" cough triggered by excitement or collar pressure',
        explanationEn: 'Dynamic collapse of the dorsal tracheal membrane and ring flaccidity slaps airway walls together, producing the classic goose-honk sound.',
        explanationAr: 'انطباق الغشاء الرغامي المرتخي على جدار القصبة أثناء التنفس السريع يحدث صوتاً رناناً كصياح الإوزة.'
      },
      {
        questionEn: 'How does the attachment of the trachealis muscle differ between dogs and horses?',
        questionAr: 'كيف يختلف ارتكاز العضلة الرغامية (Trachealis) في الكلاب مقارنة بالخيول؟',
        options: [
          { en: 'Attached to the EXTERNAL surface of the cartilage ring ends in dogs; INTERNAL in horses', ar: 'ترتكز على السطح الخارجي لنهايات الحلقات في الكلاب؛ وداخلياً في الخيول' },
          { en: 'Absent in dogs', ar: 'غائبة في الكلاب' },
          { en: 'Attaches only to the ventral sternum', ar: 'ترتكز على عظم القص بطنياً' },
          { en: 'Covers the mucosal surface only in dogs', ar: 'تغطي الغشاء المخاطي فقط في الكلاب' }
        ],
        correctAnswer: 'Attached to the EXTERNAL surface of the cartilage ring ends in dogs; INTERNAL in horses',
        explanationEn: 'In dogs and cats, the trachealis muscle spans the gap externally across the outer perichondrium of the cartilages.',
        explanationAr: 'في الكلاب والقطط ترتكز العضلة الرغامية على السطح الخارجي لسمحاق غضاريف القصبة، بخلاف الخيل.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'respiratory',
    meshId: 'Mesh_Canine_PulmoSinister',
    nameEn: 'Canine Left Lung (Cranial & Caudal Lobes)',
    nameAr: 'رئة الكلب اليسرى (الفصان القحفي والذيلي)',
    latinName: 'Pulmo sinister (Lobus cranialis et Lobus caudalis)',
    descriptionEn: 'Left pulmonary parenchyma divided by a deep interlobar fissure into a cranial lobe (with cranial and caudal parts) and an extensive caudal lobe.',
    descriptionAr: 'نسيج الرئة اليسرى المقسم بشق عميق لفص قحفي (بجزأين أمامي وخلفي) وفص ذيلي واسع يمتد للحجاب الحاجز.',
    bloodSupplyEn: 'Left pulmonary artery carrying deoxygenated blood; left bronchoesophageal branches for tissue nutrition.',
    bloodSupplyAr: 'الشريان الرئوي الأيسر وفروع الشريان القصبي المريئي المغذية.',
    innervationEn: 'Pulmonary autonomic plexus.',
    innervationAr: 'الضفيرة الرئوية الذاتية.',
    clinicalPearlsEn: 'Left-sided congestive heart failure secondary to DCM or MMVD causes perihilar pulmonary venous congestion and severe cardiogenic pulmonary edema.',
    clinicalPearlsAr: 'فشل القلب الاحتقاني الأيسر يسبب احتقاناً وريدياً رئوياً ووذمة رئة قلبية حادة تبدأ حول سرة الرئة في فصوصها اليسرى واليمنى.',
    focusCoordinates: { position: [-1.0, 0.6, 0.2], target: [-0.2, 0.42, 0.12] },
    geometry: { shape: 'capsule', position: [-0.2, 0.42, 0.12], rotation: [0.1, 0, 0.2], scale: [0.24, 0.45, 0.22], color: '#f43f5e', roughness: 0.6, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Cardiogenic pulmonary edema secondary to severe degenerative mitral valve disease in dogs classically manifests radiographically in which distribution first?',
        questionAr: 'وذمة الرئة القلبية الناتجة عن مرض الصمام التاجي في الكلاب تظهر شعاعياً في أي توزيع أولاً؟',
        options: [
          { en: 'Perihilar and caudodorsal lung fields', ar: 'المنطقة حول السرة الرئوية والحقول الذيلية الظهرية' },
          { en: 'Cranioventral dependent lobes only', ar: 'الفصوص الأمامية البطنية فقط' },
          { en: 'Subpleural margins only', ar: 'الحواف تحت الجنبية فقط' },
          { en: 'Exclusively in the accessory lobe', ar: 'في الفص الإضافي حصراً' }
        ],
        correctAnswer: 'Perihilar and caudodorsal lung fields',
        explanationEn: 'Elevated left atrial pressure forces transudate out of pulmonary capillaries into the loose interstitium around the hilus and caudodorsal lung fields.',
        explanationAr: 'ارتفاع ضغط الأذين الأيسر يدفع السوائل خارج الشعيرات نحو النسيج الخلالي حول سرة الرئة والمنطقة الخلفية الظهرية.'
      },
      {
        questionEn: 'How many primary anatomical lobes does the canine left lung possess?',
        questionAr: 'كم عددا الفصوص التشريحية الرئيسية التي تمتلكها رئة الكلب اليسرى؟',
        options: [
          { en: 'Two: Cranial lobe (with cranial and caudal parts) and Caudal lobe', ar: 'فصان: فص قحفي (بجزأين أمامي وخلفي) وفص ذيلي' },
          { en: 'Four separate lobes', ar: 'أربعة فصوص منفصلة' },
          { en: 'Three lobes with an accessory lobe', ar: 'ثلاثة فصوص مع فص إضافي' },
          { en: 'One single lobe with no fissure', ar: 'فص واحد دون شقوق' }
        ],
        correctAnswer: 'Two: Cranial lobe (with cranial and caudal parts) and Caudal lobe',
        explanationEn: 'The canine left lung has only 2 lobes, but the cranial lobe is deeply divided into cranial and caudal parts.',
        explanationAr: 'تمتلك رئة الكلب اليسرى فصين فقط، ولكن الفص القحفي ينقسم بعمق إلى جزأين أمامي وخلفي.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'respiratory',
    meshId: 'Mesh_Canine_PulmoDexter',
    nameEn: 'Canine Right Lung (4 Distinct Lobes)',
    nameAr: 'رئة الكلب اليمنى (رباعية الفصوص)',
    latinName: 'Pulmo dexter (Cranialis, Medius, Caudalis, Accessorius)',
    descriptionEn: 'Voluminous right lung divided by deep interlobar fissures into four independent lobes: cranial, middle, caudal, and accessory, accounting for ~58% of total lung volume.',
    descriptionAr: 'رئة يمنى واسعة تنقسم بشقوق عميقة لأربعة فصوص مستقلة: قحفي، أوسط، ذيلي، وإضافي، وتشكل حوالي 58% من الحجم الرئوي الكلي.',
    bloodSupplyEn: 'Right pulmonary artery and branches of bronchoesophageal artery.',
    bloodSupplyAr: 'الشريان الرئوي الأيمن وتفرعات الشريان القصبي المريئي.',
    innervationEn: 'Pulmonary plexus (vagal and sympathetic).',
    innervationAr: 'الضفيرة الرئوية الذاتية.',
    clinicalPearlsEn: 'Lung Lobe Torsion: Spontaneous twisting of a lung lobe (most frequently right middle or left cranial lobe) occurs in deep-chested breeds (Afghan Hounds), causing pleural effusion.',
    clinicalPearlsAr: 'انفتال الفص الرئوي: التواء الفص الرئوي التلقائي (الأوسط الأيمن غالباً) يحدث في الكلاب عميقة الصدر مسبباً انصباباً صدرياً حاداً.',
    focusCoordinates: { position: [1.0, 0.6, 0.2], target: [0.2, 0.42, 0.12] },
    geometry: { shape: 'capsule', position: [0.2, 0.42, 0.12], rotation: [0.1, 0, -0.2], scale: [0.26, 0.48, 0.24], color: '#fb7185', roughness: 0.6, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Which lung lobe is most frequently predisposed to spontaneous lung lobe torsion in deep-chested large dog breeds?',
        questionAr: 'أي فص رئوي هو الأكثر عرضة للانفتال الرئوي التلقائي في سلالات الكلاب الكبيرة عميقة الصدر؟',
        options: [
          { en: 'Right middle lung lobe (followed by left cranial lobe)', ar: 'الفص الرئوي الأوسط الأيمن (يليه الفص القحفي الأيسر)' },
          { en: 'Right caudal lobe', ar: 'الفص الذيلي الأيمن' },
          { en: 'Accessory lobe', ar: 'الفص الإضافي' },
          { en: 'Both caudal lobes equally', ar: 'كلا الفصين الذيليين بالتساوي' }
        ],
        correctAnswer: 'Right middle lung lobe (followed by left cranial lobe)',
        explanationEn: 'The right middle lobe has a narrow pedicle and great mobility relative to its size, predisposing it to axial rotation and venous infarction.',
        explanationAr: 'يمتلك الفص الأوسط الأيمن عنقاً ضيقاً وحرية حركة كبيرة تجعله عرضة للالتواء واحتشاء أوعيته الوريدية.'
      },
      {
        questionEn: 'When performing a complete lung lobectomy in a dog, what critical structure courses through the pulmonary hilus alongside the lobar bronchus and artery?',
        questionAr: 'عند استئصال فص رئوي جراحياً في الكلب، ما هو التركيب الوعائي الرئيسي الذي يمر في سرة الفص مع الشعبة والشريان؟',
        options: [
          { en: 'Pulmonary vein (draining into left atrium)', ar: 'الوريد الرئوي (المصرف للأذين الأيسر)' },
          { en: 'Cranial vena cava', ar: 'الوريد الأجوف الأمامي' },
          { en: 'Thoracic duct', ar: 'القناة الصدرية الليمفاوية' },
          { en: 'Phrenic nerve', ar: 'العصب الحجابي' }
        ],
        correctAnswer: 'Pulmonary vein (draining into left atrium)',
        explanationEn: 'The triad of lobar pulmonary artery, lobar bronchus, and lobar pulmonary vein must be individually identified and ligated.',
        explanationAr: 'يجب عزل وربط الثلاثي المكون من الشريان الرئوي الفصي والشعبة الهوائية والوريد الرئوي الفصي بشكل منفصل.'
      }
    ]
  },
  // Nervous
  {
    speciesSlug: 'canine',
    systemSlug: 'nervous',
    meshId: 'Mesh_Canine_Cerebrum',
    nameEn: 'Canine Cerebrum & Olfactory Bulbs',
    nameAr: 'مخ الكلبيات والبصلتان الشميتان',
    latinName: 'Cerebrum et Bulbi olfactorii',
    descriptionEn: 'Gyrencephalic brain weighing 70-130 g featuring massive olfactory bulbs (up to 40x human relative size) and specialized sensory integration centers.',
    descriptionAr: 'مخ متطور التلافيف يزن 70-130 جم يتميز ببصلتين شميتين هائلتين (أكبر 40 ضعفاً نسبياً من الإنسان) ومراكز تكامل حسي حركي دقيقة.',
    bloodSupplyEn: 'Cerebral arterial circle (Circle of Willis) supplied by internal carotid and basilar arteries (vertebral system).',
    bloodSupplyAr: 'الدائرة الشريانية الدماغية (دائرة ويليس) المزودة بالشريانين السباتي الباطن والقاعدي.',
    innervationEn: 'Trigeminal meningeal sensory fibers.',
    innervationAr: 'الألياف السحائية الحسية للعصب ثلاثي التوائم.',
    clinicalPearlsEn: 'Idiopathic Epilepsy: Most common neurological condition in dogs (1-5 years old); manifests with generalized tonic-clonic seizures requiring lifelong anticonvulsant therapy.',
    clinicalPearlsAr: 'الصرع مجهول السبب: أكثر الأمراض العصبية شيوعاً في الكلاب (عمر 1-5 سنوات)؛ ويظهر بنوبات صرعية ارتجاجية تتطلب علاجاً مضاداً للتشنج مدى الحياة.',
    focusCoordinates: { position: [0.7, 0.9, 0.8], target: [0, 0.72, 0.7] },
    geometry: { shape: 'sphere', position: [0, 0.72, 0.7], rotation: [0, 0, 0], scale: [0.28, 0.22, 0.28], color: '#facc15', roughness: 0.45, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Idiopathic epilepsy in dogs typically has its clinical onset between what age range?',
        questionAr: 'الصرع الأولي مجهول السبب في الكلاب يبدأ ظهوره سريرياً عادة في أي فئة عمرية؟',
        options: [
          { en: '1 to 5 years of age', ar: 'بين عمر سنة إلى 5 سنوات' },
          { en: 'Less than 6 months of age', ar: 'أقل من 6 أشهر' },
          { en: 'Over 10 years of age', ar: 'أكبر من 10 سنوات' },
          { en: 'At birth immediately', ar: 'عند الولادة مباشرة' }
        ],
        correctAnswer: '1 to 5 years of age',
        explanationEn: 'Onset before 1 year suggests congenital/metabolic anomalies; onset after 5 years strongly suggests intracranial neoplasia or stroke.',
        explanationAr: 'الظهور قبل عمر سنة يرجح تشوهات ولادية أو أيضية؛ بينما ظهوره بعد 5 سنوات يرجح أورام الدماغ.'
      },
      {
        questionEn: 'Which structure separates the cerebral hemispheres from the cerebellum on the dorsal midline in the dog skull?',
        questionAr: 'ما هو التركيب العظمي الليفي الذي يفصل فصوص المخ عن المخيخ في جمجمة الكلب؟',
        options: [
          { en: 'Osseous tentorium cerebelli (Tentorium cerebelli osseum)', ar: 'الخيمة المخيخية العظمية (Tentorium cerebelli osseum)' },
          { en: 'Crista galli', ar: 'عرف الديك' },
          { en: 'Sella turcica', ar: 'السرج التركي' },
          { en: 'Foramen magnum', ar: 'الثقبة العظمى' }
        ],
        correctAnswer: 'Osseous tentorium cerebelli (Tentorium cerebelli osseum)',
        explanationEn: 'Carnivores have an ossified shelf projecting downward from the parietal and occipital bones that separates cerebrum from cerebellum.',
        explanationAr: 'تمتلك اللواحم رفاً عظمياً متعظماً يبرز من عظام الجمجمة يفصل المخ عن المخيخ.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'nervous',
    meshId: 'Mesh_Canine_Cerebellum',
    nameEn: 'Canine Cerebellum',
    nameAr: 'مخيخ الكلبيات',
    latinName: 'Cerebellum (Canis lupus familiaris)',
    descriptionEn: 'Tightly folded structure with median vermis and two lateral hemispheres responsible for coordination, precision, and accurate timing of motor actions.',
    descriptionAr: 'بنية مطوية بإحكام ذات دودة وسطية ونصفين جانبيين مسؤولة عن التنسيق والدقة والتوقيت الزمني للحركات.',
    bloodSupplyEn: 'Rostral and caudal cerebellar arteries off the basilar artery.',
    bloodSupplyAr: 'الشرايين المخيخية من الشريان القاعدي.',
    innervationEn: 'Purkinje cells projecting inhibitory GABAergic signals to deep cerebellar nuclei.',
    innervationAr: 'عصبونات بيركنجي التي ترسل إشارات تثبيطية للنوى المخيخية العميقة.',
    clinicalPearlsEn: 'Canine Distemper Encephalomyelitis: Morbillivirus induces demyelination in cerebellar white matter and peduncles, causing myoclonus and cerebellar ataxia.',
    clinicalPearlsAr: 'التهاب الدماغ بمرض الديستمبر (حمى الكلاب): يسبب الفيروس زوال الميالين في المخيخ مسبباً رمَعاً عضلياً إيقاعياً (Myoclonus) وترنحاً.',
    focusCoordinates: { position: [0.6, 0.8, 0.65], target: [0, 0.68, 0.58] },
    geometry: { shape: 'sphere', position: [0, 0.68, 0.58], rotation: [0, 0, 0], scale: [0.18, 0.16, 0.16], color: '#eab308', roughness: 0.45, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Rhythmic, involuntary twitching of muscle groups (myoclonus / "chewing gum fits") persisting even during sleep is classic for which canine disease?',
        questionAr: 'النفضان العضلي النوبي اللاإرادي (Myoclonus) الذي يستمر حتى أثناء النوم هو علامة كلاسيكية لأي مرض كلبي؟',
        options: [
          { en: 'Canine Distemper Virus (CDV) encephalomyelitis', ar: 'التهاب الدماغ والنخاع بفيروس ديستمبر الكلاب (CDV)' },
          { en: 'Rabies virus furious form', ar: 'داء الكلب الهياجي' },
          { en: 'Tetanus lockjaw', ar: 'الكزاز' },
          { en: 'Botulism flaccid paralysis', ar: 'التسمم السجقي' }
        ],
        correctAnswer: 'Canine Distemper Virus (CDV) encephalomyelitis',
        explanationEn: 'Post-distemper myoclonus represents a permanent pacemaker lesion in cerebellar/brainstem circuits controlling spinal motor neuron pools.',
        explanationAr: 'ينجم الرمع العضلي عن تلف دائم ناجم عن فيروس الديستمبر في دوائر المخيخ وجذع الدماغ المحفزة للنخاع الشوكي.'
      },
      {
        questionEn: 'Which cerebellar test evaluates vision and cerebellar integration by moving a hand toward the eye without causing air turbulence?',
        questionAr: 'أي فحص عصبي يختبر الإبصار وتكامل المخيخ بتحريك اليد نحو العين دون إثارة تيار هوائي؟',
        options: [
          { en: 'Menace response', ar: 'استجابة التهديد (Menace response)' },
          { en: 'Pupillary light reflex', ar: 'المنعكس الحدقي للضوء' },
          { en: 'Palpebral reflex', ar: 'المنعكس الجفني' },
          { en: 'Oculocephalic reflex', ar: 'المنعكس العيني الرأسي' }
        ],
        correctAnswer: 'Menace response',
        explanationEn: 'The menace response is a learned cortical/cerebellar response (afferent CN II, efferent CN VII, mediated via cerebellar cortex), not a simple brainstem reflex.',
        explanationAr: 'استجابة التهديد استجابة قشرية ومخيخية متكاملة وليست منعكساً جذعياً بسيطاً، وتختبر العصبين الثاني والسابع والمخيخ.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'nervous',
    meshId: 'Mesh_Canine_MedullaSpinalis_IVDD',
    nameEn: 'Canine Thoracolumbar Spinal Cord (IVDD Zone)',
    nameAr: 'النخاع الشوكي الصدري القطني للكلب (منطقة IVDD)',
    latinName: 'Medulla spinalis (Regio thoracolumbalis T11 - L2)',
    descriptionEn: 'The segments of spinal cord between T11 and L2 where intervertebral disc disease (Hansen Type I extrusion) occurs most frequently in chondrodystrophic breeds.',
    descriptionAr: 'فقرات النخاع الشوكي بين T11 و L2 حيث يحدث انزلاق الغضروف وانفتاقه (Hansen Type I) بكثرة في السلالات قصيرة القوائم (الداشهند).',
    bloodSupplyEn: 'Ventral spinal artery, dorsal spinal arteries, and spinal branches of lumbar arteries.',
    bloodSupplyAr: 'الشريان الشوكي البطني والشريانان الشوكيان الظهران وفروع الشرايين القطنية.',
    innervationEn: 'Sensory ascending tracts and motor descending upper/lower motor neurons.',
    innervationAr: 'المسالك العصبية الصاعدة للحس والهابطة للحركة.',
    clinicalPearlsEn: 'Hansen Type I Intervertebral Disc Disease (IVDD): Loss of deep pain sensation indicates a grave prognosis (<50% recovery with emergency hemilaminectomy).',
    clinicalPearlsAr: 'انزلاق الغضروف IVDD: فقدان الإحساس بالألم العميق يشير لإنذار حرج (<50% نسبة شفاء بالجراحة الإسعافية لقص صفيحة الفقرة Hemilaminectomy).',
    focusCoordinates: { position: [0.6, 0.7, 0.2], target: [0, 0.62, 0.05] },
    geometry: { shape: 'cylinder', position: [0, 0.62, 0.05], rotation: [0.08, 0, 0], scale: [0.07, 1.1, 0.07], color: '#fef08a', roughness: 0.35, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'In chondrodystrophic breeds like Dachshunds, what pathological event initiates Hansen Type I intervertebral disc disease?',
        questionAr: 'في السلالات قصيرة القوائم كالداشهند، ما هو الحدث المرضي الذي يطلق انزلاق الغضروف من النمط Hansen Type I؟',
        options: [
          { en: 'Chondroid metaplasia and calcification of the nucleus pulposus followed by explosive rupture through the annulus fibrosus', ar: 'التحول الغضروفي وتكلس النواة اللبية يعقبه انفجارها عبر الحلقة الليفية' },
          { en: 'Fibroid degeneration of the vertebral body', ar: 'تنكس ليفي لعظم الفقرة' },
          { en: 'Primary bacterial osteomyelitis', ar: 'التهاب عظمي نقيي بكتيري' },
          { en: 'Tearing of the spinal cord dura mater only', ar: 'تمزق الأم الجافية فقط' }
        ],
        correctAnswer: 'Chondroid metaplasia and calcification of the nucleus pulposus followed by explosive rupture through the annulus fibrosus',
        explanationEn: 'The nucleus pulposus undergoes premature calcification in young chondrodystrophic dogs, predisposing to sudden extrusion into the vertebral canal.',
        explanationAr: 'تتكلس النواة اللبية في عمر مبكر في الكلاب الغضروفية، مما يجعلها تنفجر فجأة في القناة الشوكية ضاغطة النخاع.'
      },
      {
        questionEn: 'What is the most critical prognostic indicator of functional recovery in dogs with acute severe thoracolumbar spinal cord compression?',
        questionAr: 'ما هو المؤشر السريري الحاسم الأهم للتنبؤ بفرص الشفاء الحركي في الكلاب المصابة بانضغاط النخاع الشوكي الحاد؟',
        options: [
          { en: 'Presence or absence of deep pain perception (nociception)', ar: 'وجود أو غياب الإحساس بالألم العميق (Deep pain perception)' },
          { en: 'Body temperature', ar: 'درجة حرارة الجسم' },
          { en: 'Presence of patellar reflex', ar: 'وجود المنعكس الرضفي' },
          { en: 'Pupil diameter', ar: 'قطر بؤبؤ العين' }
        ],
        correctAnswer: 'Presence or absence of deep pain perception (nociception)',
        explanationEn: 'Deep pain fibers are the innermost, unmyelinated axons; loss of deep pain implies severe transmural ischemic necrotizing myelopathy.',
        explanationAr: 'ألياف الألم العميق هي الأعمق في النخاع؛ وفقدان الاستجابة للضغط على الأصابع يدل على نخر نخاعي شديد وإنذار حرج.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'nervous',
    meshId: 'Mesh_Canine_PlexusBrachialis',
    nameEn: 'Canine Brachial Plexus',
    nameAr: 'الضفيرة العضدية للكلب',
    latinName: 'Plexus brachialis (C6 - T2)',
    descriptionEn: 'Network of somatic nerve roots emerging from spinal segments C6, C7, C8, T1, and T2, innervating all thoracic limb muscles, joints, and skin.',
    descriptionAr: 'شبكة الجذور العصبية الشوكية المنبثقة من C6 و C7 و C8 و T1 و T2 لتغذية عضلات ومفاصل وجلد الطرف الصدري بالكامل.',
    bloodSupplyEn: 'Superficial cervical, axillary, and subscapular arteries.',
    bloodSupplyAr: 'الشرايين الرقبية السطحية والإبطية وتحت الكتفية.',
    innervationEn: 'Radial, ulnar, median, musculocutaneous, axillary, and suprascapular nerves.',
    innervationAr: 'الأعصاب الكعبرية والزندية والوسطية والعضلية الجلدية والإبطية وفوق الكتفية.',
    clinicalPearlsEn: 'Brachial Plexus Avulsion: Traction injury from vehicular trauma tears nerve roots, causing total flaccid limb paralysis and Horner\'s syndrome (T1-T2 sympathetic loss).',
    clinicalPearlsAr: 'اقتلاع الضفيرة العضدية: شد القائمة الأمامية بحوادث السيارات يمزق الجذور العصبية مسبباً شللاً رخواً للقائمة ومتلازمة هورنر في العين.',
    focusCoordinates: { position: [0.7, 0.6, 0.4], target: [0.15, 0.48, 0.3] },
    geometry: { shape: 'capsule', position: [0.15, 0.48, 0.3], rotation: [0.3, 0.2, -0.4], scale: [0.08, 0.4, 0.08], color: '#facc15', roughness: 0.3, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Why is ipsilateral Horner\'s syndrome (miosis, ptosis, enophthalmos) frequently observed in canine brachial plexus avulsion injuries?',
        questionAr: 'لماذا تشاهد متلازمة هورنر في نفس جانب الإصابة باقتلاع الضفيرة العضدية في الكلاب؟',
        options: [
          { en: 'Avulsion of the T1 - T2 nerve roots damages the sympathetic preganglionic fibers running to the eye', ar: 'اقتلاع الجذور العصبية T1-T2 يتلف الألياف الودية قبل العقدية الصاعدة للعين' },
          { en: 'Direct trauma to the optic chiasm', ar: 'رض مباشر للتصالب البصري' },
          { en: 'Oculomotor nerve transection', ar: 'قطع العصب محرك العين' },
          { en: 'Excessive release of acetylcholine', ar: 'إفراز مفرط للأستيل كولين' }
        ],
        correctAnswer: 'Avulsion of the T1 - T2 nerve roots damages the sympathetic preganglionic fibers running to the eye',
        explanationEn: 'Sympathetic pathway to the eye exits via T1-T3 spinal roots through the brachial plexus; avulsion interrupts sympathetic innervation to the globe.',
        explanationAr: 'تخرج الألياف الودية للعين عبر الجذور T1-T3 المارة بالضفيرة؛ ويؤدي تمزقها لارتخاء الجفن وتضيق البؤبؤ وغؤور العين.'
      },
      {
        questionEn: 'Which major terminal nerve of the brachial plexus innervates the extensor muscles of the elbow, carpus, and digits, carrying weight-bearing tone?',
        questionAr: 'أي عصب رئيسي منبثق من الضفيرة العضدية يعصب باسطات الكوع والرسغ والأصابع ويثبت القائمة لحمل الوزن؟',
        options: [
          { en: 'Radial nerve (Nervus radialis)', ar: 'العصب الكعبري (Nervus radialis)' },
          { en: 'Median nerve', ar: 'العصب الأوسط' },
          { en: 'Musculocutaneous nerve', ar: 'العصب العضلي الجلدي' },
          { en: 'Ulnar nerve', ar: 'العصب الزندي' }
        ],
        correctAnswer: 'Radial nerve (Nervus radialis)',
        explanationEn: 'The radial nerve is the principal motor nerve of the thoracic limb; its high lesion results in a dropped elbow and inability to bear weight.',
        explanationAr: 'العصب الكعبري هو المحرك الرئيسي للقائمة الأمامية؛ ويؤدي شلله لسقوط الكوع وسحب ظهر القدم على الأرض.'
      }
    ]
  },
  // Urogenital
  {
    speciesSlug: 'canine',
    systemSlug: 'urogenital',
    meshId: 'Mesh_Canine_RenSinister',
    nameEn: 'Canine Left Kidney (Bean-Shaped)',
    nameAr: 'كلية الكلب اليسرى (حبة الفاصولياء)',
    latinName: 'Ren sinister (Canis lupus familiaris)',
    descriptionEn: 'Smooth, unipyramidal bean-shaped kidney located loosely in the retroperitoneal space under L1-L3, notably more mobile and caudal than the right kidney.',
    descriptionAr: 'كلية ملساء أحادية الهرم تشبه حبة الفاصولياء تستقر خلف البريتون أسفل الفقرات L1-L3، وتكون أكثر حركة وموقعاً خلفياً من الكلية اليمنى.',
    bloodSupplyEn: 'Left renal artery originating directly from the abdominal aorta; left renal vein draining into caudal vena cava.',
    bloodSupplyAr: 'الشريان الكلوي الأيسر من الأبهر والوريد الكلوي الأيسر يصب في الأجوف الخلفي.',
    innervationEn: 'Renal autonomic plexus from celiacomesenteric ganglion.',
    innervationAr: 'الضفيرة الكلوية الذاتية.',
    clinicalPearlsEn: 'The canine left kidney is readily palpable in normal lean dogs; the right kidney is cranial, tucked in the caudate liver lobe, and rarely palpable.',
    clinicalPearlsAr: 'كلية الكلب اليسرى سهلة الجس في الكلاب النحيفة؛ بينما اليمنى تستقر في مقدمة البطن داخل فص الكبد المذنب ولا تُجس عادة.',
    focusCoordinates: { position: [-0.8, 0.6, -0.1], target: [-0.18, 0.48, -0.1] },
    geometry: { shape: 'capsule', position: [-0.18, 0.48, -0.1], rotation: [0.2, 0.2, 0], scale: [0.14, 0.24, 0.14], color: '#701a75', roughness: 0.4, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'How does the internal architecture of the canine kidney differ fundamentally from that of cattle and horses?',
        questionAr: 'كيف تختلف البنية الداخلية لكلية الكلب جوهرياً عن كلى الأبقار والخيول؟',
        options: [
          { en: 'Unipyramidal (single fused renal crest) with smooth outer cortex', ar: 'أحادية الهرم (عرف كلوي ملتحم مفرد) مع قشرة خارجية ملساء' },
          { en: 'Multipyramidal with external lobulation', ar: 'متعددة الأهرامات مع فصوص خارجية كالبقر' },
          { en: 'Lacks a renal pelvis completely', ar: 'تفتقر لحوض الكلية تماماً' },
          { en: 'Contains os cordis bones', ar: 'تحتوي على عظام قلبية' }
        ],
        correctAnswer: 'Unipyramidal (single fused renal crest) with smooth outer cortex',
        explanationEn: 'Carnivore kidneys are unipyramidal; all renal medullary pyramids fuse into a single longitudinal ridge called the renal crest that projects into the pelvis.',
        explanationAr: 'كلى اللواحم أحادية الهرم؛ تلتحم أهرامات النخاع في عرف كلوي طولي مفرد يبرز داخل حوض الكلية.'
      },
      {
        questionEn: 'Why is the canine right kidney situated more cranially and firmly fixed compared to the left kidney?',
        questionAr: 'لماذا تستقر كلية الكلب اليمنى في موقع أكثر تقدماً للأمام وتكون أكثر ثباتاً من الكلية اليسرى؟',
        options: [
          { en: 'Its cranial pole sits embedded in the deep renal fossa of the caudate liver lobe', ar: 'قطبها الأمامي يستقر مغموراً في الحفرة الكلوية العميقة لفص الكبد المذنب' },
          { en: 'Attached directly to the diaphragm by bone', ar: 'ملتحمة بالحجاب الحاجز بعظم' },
          { en: 'Suspended inside the stomach cavity', ar: 'معلقة داخل تجويف المعدة' },
          { en: 'Surrounded by the spleen', ar: 'محاطة بالطحال' }
        ],
        correctAnswer: 'Its cranial pole sits embedded in the deep renal fossa of the caudate liver lobe',
        explanationEn: 'The caudate process of the liver envelops the cranial pole of the right kidney, anchoring it firmly in place under the last rib.',
        explanationAr: 'يحتضن النتوء المذنب للكبد القطب الأمامي للكلية اليمنى في الحفرة الكلوية مما يثبتها بقوة تحت الضلع الأخير.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'urogenital',
    meshId: 'Mesh_Canine_RenDexter',
    nameEn: 'Canine Right Kidney',
    nameAr: 'كلية الكلب اليمنى',
    latinName: 'Ren dexter (Canis lupus familiaris)',
    descriptionEn: 'Cranially situated bean-shaped kidney fitting securely into the renal fossa of the caudate liver lobe under ribs 12 and 13.',
    descriptionAr: 'كلية كلوية الشكل تستقر في مقدمة البطن مستقرة بإحكام في الحفرة الكلوية لفص الكبد المذنب تحت الضلعين 12 و 13.',
    bloodSupplyEn: 'Right renal artery and right renal vein.',
    bloodSupplyAr: 'الشريان الكلوي الأيمن والوريد الكلوي الأيمن.',
    innervationEn: 'Renal autonomic nerve plexus.',
    innervationAr: 'الضفيرة العصبية الكلوية الذاتية.',
    clinicalPearlsEn: 'Renal Carcinoma and Nephrolithiasis: Staghorn calculi in the renal pelvis require pyelolithotomy or nephrectomy if unilateral and renal function permits.',
    clinicalPearlsAr: 'أورام الكلى وحصوات حوض الكلية (شاخية الشكل): تتطلب استخراج الحصاة من حوض الكلية أو استئصال الكلية عند سلامة الكلية الأخرى.',
    focusCoordinates: { position: [0.8, 0.6, 0.0], target: [0.18, 0.52, 0.0] },
    geometry: { shape: 'capsule', position: [0.18, 0.52, 0.0], rotation: [0.2, -0.2, 0], scale: [0.14, 0.24, 0.14], color: '#86198f', roughness: 0.4, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Which vessel crosses immediately ventral to the cranial pole of the canine right kidney?',
        questionAr: 'أي وعاء دموي كبير يعبر مباشرة أمام القطب القحفي لكلية الكلب اليمنى بطنياً؟',
        options: [
          { en: 'Caudal vena cava', ar: 'الوريد الأجوف الخلفي (Caudal vena cava)' },
          { en: 'Aortic arch', ar: 'قوس الشريان الأبهر' },
          { en: 'Left subclavian artery', ar: 'الشريان تحت الترقوي الأيسر' },
          { en: 'Jugular vein', ar: 'الوريد الوداجي' }
        ],
        correctAnswer: 'Caudal vena cava',
        explanationEn: 'The caudal vena cava runs along the medial border of the right kidney, receiving the short right renal vein.',
        explanationAr: 'يسير الوريد الأجوف الخلفي بمحاذاة الحافة الإنسية للكلية اليمنى مستقبلاً الوريد الكلوي الأيمن القصير.'
      },
      {
        questionEn: 'Ethylene glycol (antifreeze) toxicity in dogs leads to acute renal failure characterized by the deposition of which crystals in renal tubules?',
        questionAr: 'سمية الإيثيلين جليكول (مانع تجمد الرادياتير) في الكلاب تسبب فشلاً كلوياً حاداً بترسب أي بلورات في الأنابيب الكلوية؟',
        options: [
          { en: 'Calcium oxalate monohydrate crystals (picket-fence / envelope shapes)', ar: 'بلورات أوكسالات الكالسيوم أحادية الهيدرات (أشكال سياج الحديقة أو المظاريف)' },
          { en: 'Uric acid needles', ar: 'إبر حمض اليوريك' },
          { en: 'Struvite prisms', ar: 'مواشير الستروفايت' },
          { en: 'Bilirubin casts', ar: 'أسطوانات البيليروبين' }
        ],
        correctAnswer: 'Calcium oxalate monohydrate crystals (picket-fence / envelope shapes)',
        explanationEn: 'Metabolism of ethylene glycol by alcohol dehydrogenase yields oxalic acid, precipitating toxic calcium oxalate crystals in renal tubular lumens.',
        explanationAr: 'يتحول الإيثيلين جليكول في الكبد لحمض الأوكساليك الذي يتحد مع الكالسيوم مرسباً بلورات سامة تسد وتدمر أنابيب الكلية.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'urogenital',
    meshId: 'Mesh_Canine_VesicaUrinaria',
    nameEn: 'Canine Urinary Bladder',
    nameAr: 'مثانة الكلبيات',
    latinName: 'Vesica urinaria (Canis lupus familiaris)',
    descriptionEn: 'Hollow distensible musculo-membranous organ collecting urine; apex projects into ventral abdominal cavity when full, neck enters the pelvic canal.',
    descriptionAr: 'عضو عضلي غشائي مجوف قابل للتمدد يجمع البول؛ تبرز قمته في تجويف البطن عند الامتلاء ويدخل عنقه لقناة الحوض.',
    bloodSupplyEn: 'Cranial vesical artery (from umbilical remnant) and caudal vesical artery (from prostatic/vaginal artery).',
    bloodSupplyAr: 'الشريانان المثانيان الأمامي والخلفي.',
    innervationEn: 'Pelvic nerve (parasympathetic detrusor), hypogastric nerve (sympathetic internal sphincter), and pudendal nerve (somatic external sphincter).',
    innervationAr: 'العصب الحوضي (لاإرادي للمثانة) وعصب تحت المعدة والعصب الاستحيائي (إرادي للمعصرة الخارجية).',
    clinicalPearlsEn: 'Cystocentesis: Easily performed in dorsal or lateral recumbency using a 22-gauge needle inserted at a 45-degree angle cranial to the pubis on the ventral midline.',
    clinicalPearlsAr: 'بزل المثانة Cystocentesis: يجرى بأمان بإبرة قياس 22 بزاوية 45 درجة أمام عظم العانة على خط الوسط البطني لسحب بول نقي معقم.',
    focusCoordinates: { position: [0.6, 0.4, -0.6], target: [0, 0.28, -0.5] },
    geometry: { shape: 'sphere', position: [0, 0.28, -0.5], rotation: [0, 0, 0], scale: [0.22, 0.24, 0.22], color: '#a21caf', roughness: 0.35, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Which anatomical landmark on the ventral canine abdomen guides blind cystocentesis in a dog in dorsal recumbency?',
        questionAr: 'ما هو المعلم التشريحي على بطن الكلب الذي يرشد عملية بزل المثانة الأعمى في وضعية الاستلقاء الظهري؟',
        options: [
          { en: 'Ventral midline immediately cranial to the pubis and caudal to the umbilicus', ar: 'خط الوسط البطني أمام عظم العانة مباشرة وخلف السرة' },
          { en: 'Directly over the xiphoid cartilage', ar: 'فوق الغضروف الخنجري مباشرة' },
          { en: 'In the right paralumbar fossa', ar: 'في الخاصرة القطنية اليمنى' },
          { en: 'Inside the femoral triangle', ar: 'داخل مثلث الفخذ' }
        ],
        correctAnswer: 'Ventral midline immediately cranial to the pubis and caudal to the umbilicus',
        explanationEn: 'The bladder distends cranioventrally along the caudal abdominal floor just cranial to the pelvic brim.',
        explanationAr: 'تتمدد المثانة للأمام والأسفل على قاع جدار البطن الخلفي أمام حافة الحوض العظمية مباشرة.'
      },
      {
        questionEn: 'What type of urinary calculus is classically associated with chronic urease-producing Staphylococcus urinary tract infections in female dogs?',
        questionAr: 'أي نوع من الحصوات البولية يرتبط كلاسيكياً بالتهابات المسالك البولية ببكتيريا المكورات العنقودية المنتجة لليورياز في إناث الكلاب؟',
        options: [
          { en: 'Struvite calculi (Magnesium ammonium phosphate)', ar: 'حصوات الستروفايت (فوسفات المغنيسيوم والأمونيوم)' },
          { en: 'Calcium oxalate monohydrate', ar: 'أوكسالات الكالسيوم' },
          { en: 'Uric acid stones', ar: 'حصوات حمض اليوريك' },
          { en: 'Cystine crystals', ar: 'بلورات السيستين' }
        ],
        correctAnswer: 'Struvite calculi (Magnesium ammonium phosphate)',
        explanationEn: 'Bacterial urease splits urea into ammonia, raising urinary pH (>7.5) and precipitating magnesium ammonium phosphate (struvite).',
        explanationAr: 'يشطر إنزيم اليورياز البكتيري البولينا إلى أمونيا رافعاً قلوية البول مما يرسب بلورات الستروفايت.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'urogenital',
    meshId: 'Mesh_Canine_Prostata',
    nameEn: 'Canine Prostate Gland',
    nameAr: 'بروستاتا الكلبيات (غدة الموثة)',
    latinName: 'Prostata (Canis lupus familiaris)',
    descriptionEn: 'The sole accessory sex gland in male dogs; globular bilobed gland completely encircling the proximal pelvic urethra at the bladder neck.',
    descriptionAr: 'الغدة الجنسية الملحقة الوحيدة في ذكور الكلاب؛ غدة كروية ثنائية الفص تحيط بالكامل بمجرى الإحليل الحوضي عند عنق المثانة.',
    bloodSupplyEn: 'Prostatic artery (from internal pudendal artery); drains via prostatic venous plexus into internal iliac veins.',
    bloodSupplyAr: 'الشريان البروستاتي (من الاستحيائي الباطن) والأوردة تصب في الحرقفي الباطن.',
    innervationEn: 'Hypogastric (sympathetic emission) and pelvic nerves (parasympathetic secretion).',
    innervationAr: 'العصبان تحت المعدة والحوضي.',
    clinicalPearlsEn: 'Benign Prostatic Hyperplasia (BPH): Symmetrical non-painful enlargement in intact older males caused by DHT; causes tenesmus (ribbon-like feces) and responds to castration.',
    clinicalPearlsAr: 'تضخم البروستاتا الحميد BPH: تضخم متناظر غير مؤلم في الذكور غير المخصية بفعل DHT؛ يسبب تعصراً وتسطحاً للبراز ويستجيب للإخصاء.',
    focusCoordinates: { position: [0.5, 0.4, -0.75], target: [0, 0.25, -0.68] },
    geometry: { shape: 'sphere', position: [0, 0.25, -0.68], rotation: [0, 0, 0], scale: [0.12, 0.12, 0.12], color: '#fbcfe8', roughness: 0.4, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'How many accessory genital glands are present in the male dog?',
        questionAr: 'كم عددا الغدد الجنسية الملحقة الموجودة في ذكر الكلب؟',
        options: [
          { en: 'Only one: the Prostate gland (Seminal vesicles and bulbourethral glands are absent)', ar: 'غدة واحدة فقط: غدة البروستاتا (تغيب الحويصلات المنوية والغدد البصلية)' },
          { en: 'Four: Prostate, Cowper\'s glands, Seminal vesicles, Coagulating glands', ar: 'أربع غدد كاملة كالقوارض' },
          { en: 'Three glands like the horse', ar: 'ثلاث غدد كالخيل' },
          { en: 'None, dogs lack all accessory glands', ar: 'لا توجد أي غدد' }
        ],
        correctAnswer: 'Only one: the Prostate gland (Seminal vesicles and bulbourethral glands are absent)',
        explanationEn: 'The prostate gland is the sole accessory sex gland present in the male dog; it produces the third fraction of ejaculate.',
        explanationAr: 'تعد البروستاتا الغدة الجنسية الملحقة الوحيدة في ذكور الكلاب وتفرز الجزء الثالث من السائل المنوي.'
      },
      {
        questionEn: 'Why do intact male dogs with Benign Prostatic Hyperplasia (BPH) commonly present with tenesmus and flattened "ribbon-like" stool rather than stranguria?',
        questionAr: 'لماذا تشكو الكلاب المصابة بتضخم البروستاتا الحميد من صعوبة تبرز وخروج براز شريطي مسطح بدلاً من صعوبة التبول؟',
        options: [
          { en: 'The enlarging prostate expands dorsally, mechanically compressing the colon/rectum against the sacrum', ar: 'تتضخم البروستاتا ظهرياً فتضغط القولون والمستقيم ميكانيكياً ضد عظم العجز' },
          { en: 'Paralysis of rectal autonomic nerves only', ar: 'شلل أعصاب المستقيم فقط' },
          { en: 'Urethral sphincter spasm', ar: 'تشنج معصرة الإحليل' },
          { en: 'Anal gland rupture', ar: 'انفجار الغدد الشرجية' }
        ],
        correctAnswer: 'The enlarging prostate expands dorsally, mechanically compressing the colon/rectum against the sacrum',
        explanationEn: 'Unlike humans, BPH in dogs expands symmetrically outwards, pinching the soft descending colon beneath the rigid pelvic canal.',
        explanationAr: 'في الكلاب يتجه تضخم البروستاتا للأعلى خارج مجرى البول مما يضغط المستقيم أسفل عظم الحوض مشوهاً شكل البراز.'
      }
    ]
  },
  // Skeletal
  {
    speciesSlug: 'canine',
    systemSlug: 'skeletal',
    meshId: 'Mesh_Canine_Cranium',
    nameEn: 'Canine Skull (Mesaticephalic)',
    nameAr: 'جمجمة الكلبيات (متوسطة الرأس)',
    latinName: 'Cranium (Canis lupus familiaris)',
    descriptionEn: 'Mesaticephalic skull with prominent external sagittal crest, strong zygomatic arches for masseter attachment, and an open orbit completed by the orbital ligament.',
    descriptionAr: 'جمجمة متوسطة الاستطالة ذات عرف سهمي بارز وأقواس وجنية قوية لارتكاز العضلات وحجاج عيني مفتوح جانباً يكتمله رباط حجاجي ليفي.',
    bloodSupplyEn: 'Maxillary, superficial temporal, and external ethmoidal arteries.',
    bloodSupplyAr: 'الشرايين الفكية والصدغية السطحية والغربالية.',
    innervationEn: 'Trigeminal nerve (CN V, sensory) and Facial nerve (CN VII, motor).',
    innervationAr: 'العصب ثلاثي التوائم (حسي) والعصب الوجهي (حركي).',
    clinicalPearlsEn: 'Carnassial Tooth Root Abscess: Periapical infection of the upper 4th premolar (PM4 / 108 or 208) erodes into the maxillary sinus, erupting as a draining fistula below the eye.',
    clinicalPearlsAr: 'خراج ضرس القواطع العلوي (Carnassial tooth): التهاب جذر الضاحك الرابع العلوي PM4 يخترق الجيب الفكي وينفجر كناسور صديدي تحت العين.',
    focusCoordinates: { position: [0.8, 0.9, 0.9], target: [0, 0.75, 0.75] },
    geometry: { shape: 'box', position: [0, 0.75, 0.75], rotation: [-0.2, 0, 0], scale: [0.28, 0.25, 0.45], color: '#f8fafc', roughness: 0.6, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'An open draining cutaneous fistula below the medial canthus of the canine eye is classic for an apical root abscess of which tooth?',
        questionAr: 'ناسور جلدي نازح للصديد أسفل زاوية العين الإنسية في الكلب هو علامة كلاسيكية لخراج جذر أي سن؟',
        options: [
          { en: 'Maxillary fourth premolar (Upper carnassial tooth / PM4 / Triadan 108 or 208)', ar: 'الضاحك الرابع العلوي (ضرس القواطع العلوي PM4)' },
          { en: 'Mandibular canine tooth', ar: 'ناب الفك السفلي' },
          { en: 'Lower first molar', ar: 'الضرس السفلي الأول' },
          { en: 'Maxillary central incisor', ar: 'القاطع العلوي المركزي' }
        ],
        correctAnswer: 'Maxillary fourth premolar (Upper carnassial tooth / PM4 / Triadan 108 or 208)',
        explanationEn: 'The two rostral roots of PM4 sit directly beneath the maxillary facial bone; apical osteomyelitis erodes the thin bone to drain on the cheek.',
        explanationAr: 'تستقر جذور الضاحك العلوي الرابع تحت عظام الوجه الرقيقة؛ ويؤدي التهاب جذورها لانثقاب العظم وتصريف القيح على الخد تحت العين.'
      },
      {
        questionEn: 'How is the lateral border of the canine bony orbit completed, unlike the closed bony ring of horses and ruminants?',
        questionAr: 'كيف تكتمل الحافة الوحشية لمحجر العين في الكلاب، بخلاف الحلقة العظمية المغلقة في الخيل والأبقار؟',
        options: [
          { en: 'Incomplete bony orbit completed by the fibrous orbital ligament (Ligamentum orbitale)', ar: 'حجاج عظمي غير مكتمل يكتمله الرباط الحجاجي الليفي' },
          { en: 'Complete solid bone fusion with the zygomatic arch', ar: 'التحام عظمي صلب كامل مع القوس الوجني' },
          { en: 'The orbit is fully open with no ligament', ar: 'مفتوح كلياً دون أي رباط' },
          { en: 'Enclosed by cartilage', ar: 'محاط بغضروف كامل' }
        ],
        correctAnswer: 'Incomplete bony orbit completed by the fibrous orbital ligament (Ligamentum orbitale)',
        explanationEn: 'Carnivores have an open orbit bridged between the frontal process of the zygomatic bone and the zygomatic process of the frontal bone by a fibrous band.',
        explanationAr: 'تمتلك اللواحم حجاجاً مفتوحاً يصل بين نتوئي العظمين الجبهي والوجني شريط ليفي مرن يسمى الرباط الحجاجي.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'skeletal',
    meshId: 'Mesh_Canine_ColumnaVertebralis',
    nameEn: 'Canine Vertebral Column',
    nameAr: 'العمود الفقري للكلب',
    latinName: 'Columna vertebralis (C7 T13 L7 S3 Ca20-23)',
    descriptionEn: 'Flexible vertebral column comprising 7 cervical, 13 thoracic, 7 lumbar, 3 fused sacral, and 20-23 caudal vertebrae with thick fibrocartilaginous discs.',
    descriptionAr: 'عمود فقري مرن يضم 7 فقرات رقبية، 13 صدرية، 7 قطنية، 3 عجزية ملتحمة، و20-23 ذيلية مع أقراص بين فقرية ليفية غضروفية سميكة.',
    bloodSupplyEn: 'Vertebral, dorsal intercostal, and lumbar segmental spinal arteries.',
    bloodSupplyAr: 'الشرايين الفقرية والوربية والقطنية الشوكية.',
    innervationEn: 'Segmental dorsal and ventral primary spinal nerve rami.',
    innervationAr: 'الفروع الأولية للأعصاب الشوكية.',
    clinicalPearlsEn: 'Spondylospondylitis and Discospondylitis: Hematogenous bacterial infection (Brucella canis / Staph) of the intervertebral disc and adjacent vertebral endplates.',
    clinicalPearlsAr: 'التهاب الأقراص والفقرات Discospondylitis: عدوى بكتيرية دموية المنشأ (بروسيلا أو عنقوديات) للأقراص الفقرية وحواف الفقرات مسببة ألماً شديداً.',
    focusCoordinates: { position: [0.9, 0.8, 0.2], target: [0, 0.65, 0.1] },
    geometry: { shape: 'cylinder', position: [0, 0.65, 0.1], rotation: [0.08, 0, 0], scale: [0.08, 1.2, 0.08], color: '#f1f5f9', roughness: 0.55, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'What is the standard vertebral formula for the domestic dog (Canis lupus familiaris)?',
        questionAr: 'ما هي الصيغة الفقرية القياسية للكلب المستأنس؟',
        options: [
          { en: 'C7 T13 L7 S3 Ca20-23', ar: 'C7 T13 L7 S3 Ca20-23' },
          { en: 'C7 T18 L6 S5 Ca15-21', ar: 'C7 T18 L6 S5 Ca15-21' },
          { en: 'C7 T13 L6 S5 Ca18-20', ar: 'C7 T13 L6 S5 Ca18-20' },
          { en: 'C7 T12 L5 S5 Ca10-15', ar: 'C7 T12 L5 S5 Ca10-15' }
        ],
        correctAnswer: 'C7 T13 L7 S3 Ca20-23',
        explanationEn: 'The dog formula consists of 7 cervical, 13 thoracic, 7 lumbar, 3 fused sacral, and 20-23 caudal vertebrae.',
        explanationAr: 'تتكون الصيغة الفقرية للكلب من 7 رقبية، 13 صدرية، 7 قطنية، 3 عجزية، و20-23 ذيلية.'
      },
      {
        questionEn: 'Which anatomical ligament runs intervertebrally between adjacent rib heads from T2 to T10, protecting the thoracic spinal cord from disc extrusion?',
        questionAr: 'ما هو الرباط التشريحي الذي يمتد بين رؤوس الأضلاع المتقابلة من T2 إلى T10 ويحمي النخاع الصدري من انزلاق الغضاريف؟',
        options: [
          { en: 'Intercapital ligament (Ligamentum intercapitale)', ar: 'الرباط بين رؤوس الأضلاع (Intercapital ligament)' },
          { en: 'Dorsal longitudinal ligament', ar: 'الرباط الطولي الظهري' },
          { en: 'Supraspinous ligament', ar: 'الرباط فوق الشوكي' },
          { en: 'Ligamentum flavum', ar: 'الرباط الأصفر' }
        ],
        correctAnswer: 'Intercapital ligament (Ligamentum intercapitale)',
        explanationEn: 'The intercapital ligament reinforces the dorsal annulus fibrosus from T2 to T10, making disc extrusion rare in cranial thoracic spine.',
        explanationAr: 'يدعم الرباط بين رؤوس الأضلاع الحلقة الليفية الظهرية بين T2 و T10 مما يجعل انزلاق الغضاريف نادراً جداً في الفقرات الصدرية الأولى.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'skeletal',
    meshId: 'Mesh_Canine_Femur',
    nameEn: 'Canine Femur & Stifle Joint Complex',
    nameAr: 'عظم فخذ الكلب ومجمع مفصل الركبة',
    latinName: 'Femur, Patella et Articulatio genus',
    descriptionEn: 'Stout cylindrical thigh bone with hemispherical femoral head, greater trochanter, distal trochlea articulating with the patella, and paired condyles.',
    descriptionAr: 'عظم فخذ أسطواني قوي ذو رأس كروي ومدور كبير وبكرة مفصلية ترتكز عليها الرضفة ولقمتان فخذيتان.',
    bloodSupplyEn: 'Lateral and medial circumflex femoral arteries and nutrient artery of the femur.',
    bloodSupplyAr: 'الشرايين الفخذية المنعطفة الأنسية والوحشية والشريان المغذي لعظم الفخذ.',
    innervationEn: 'Femoral and sciatic nerves.',
    innervationAr: 'العصبان الفخذي والوركي.',
    clinicalPearlsEn: 'Cranial Cruciate Ligament Rupture (CCLR): Most common orthopedic injury in dogs; diagnosed by positive cranial drawer test and tibial thrust; treated by TPLO or TTA surgery.',
    clinicalPearlsAr: 'تمزق الرباط الصليبي الأمامي CCLR: أكثر الإصابات العظمية شيوعاً في الكلاب؛ يُشخص باختبار الجارور الأمامي وعلامة الدفع القصبي ويُعالج بعملية TPLO أو TTA.',
    focusCoordinates: { position: [0.8, 0.5, -0.3], target: [0.22, 0.35, -0.45] },
    geometry: { shape: 'cylinder', position: [0.22, 0.35, -0.45], rotation: [0.25, 0, 0], scale: [0.08, 0.65, 0.08], color: '#e2e8f0', roughness: 0.5, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Which orthopedic physical examination test confirms instability secondary to rupture of the cranial cruciate ligament (CCL) in a dog?',
        questionAr: 'أي فحص سريري عظمي يؤكد عدم استقرار مفصل الركبة الناتج عن تمزق الرباط الصليبي الأمامي (CCL) في الكلب؟',
        options: [
          { en: 'Cranial drawer test and Tibial compression test (tibial thrust)', ar: 'اختبار الجارور الأمامي (Cranial drawer) واختبار انضغاط القصبة (Tibial thrust)' },
          { en: 'Ortolani sign for hip dysplasia', ar: 'علامة أورتولاني لخلل تنسج الورك' },
          { en: 'Biceps tendon stretch test', ar: 'فحص شد وتر ذات الرأسين' },
          { en: 'Patellar tap reflex', ar: 'منعكس النقر الرضفي' }
        ],
        correctAnswer: 'Cranial drawer test and Tibial compression test (tibial thrust)',
        explanationEn: 'The intact CCL prevents cranial translation of the tibia relative to the femur; when ruptured, the tibia slides cranially under drawer pressure.',
        explanationAr: 'يمنع الرباط الصليبي السليم انزياح القصبة للأمام بالنسبة للفخذ؛ وعند تمزقه تنزلق القصبة للأمام كدرج الخزانة.'
      },
      {
        questionEn: 'In small dog breeds (Yorkshire Terriers, Chihuahuas), medial patellar luxation (MPL) is frequently accompanied by what anatomical skeletal deformity?',
        questionAr: 'في سلالات الكلاب الصغيرة، يرتبط خلع الرضفة الإنسي (MPL) بشكل متكرر بأي تشوه هيكلي؟',
        options: [
          { en: 'Shallow femoral trochlear groove and medial displacement of the tibial tuberosity', ar: 'ضحالة بكرة الفخذ وانزياح الحدبة القصبية نحو الداخل إنسياً' },
          { en: 'Complete absence of the femur', ar: 'غياب عظم الفخذ' },
          { en: 'Elongation of the patellar tendon by 10 cm', ar: 'استطالة وتر الرضفة' },
          { en: 'Fusion of the hip joint', ar: 'التحام مفصل الورك' }
        ],
        correctAnswer: 'Shallow femoral trochlear groove and medial displacement of the tibial tuberosity',
        explanationEn: 'A shallow trochlea fails to retain the patella, allowing the quadriceps mechanism to pop medially over the ridge during flexion.',
        explanationAr: 'ضحالة ميزاب بكرة الفخذ تفشل في حجز صابونة الركبة، مما يسمح لوتر العضلة بالقفز للداخل عند المشي.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'skeletal',
    meshId: 'Mesh_Canine_OsPenis',
    nameEn: 'Canine Os Penis (Baculum)',
    nameAr: 'عظم قضيب الكلب (Baculum)',
    latinName: 'Os penis (Baculum)',
    descriptionEn: 'Heterotopic splanchnic bone situated within the glans penis, characterized by a deep ventral urethral groove (Sulcus urethralis) conveying the penile urethra.',
    descriptionAr: 'عظم حشوي يستقر داخل حشفة القضيب، يتميز بميزاب إحليلي بطني عميق يمر عبره مجرى البول.',
    bloodSupplyEn: 'Dorsal artery of the penis and deep artery of the penis.',
    bloodSupplyAr: 'الشريان الظهري للقضيب والشرايين العميقة.',
    innervationEn: 'Dorsal nerve of the penis (terminal branch of pudendal nerve).',
    innervationAr: 'العصب الظهري للقضيب من العصب الاستحيائي.',
    clinicalPearlsEn: 'Urethral Obstruction / Urolithiasis: Uroliths (struvite/calcium oxalate) flushed down from the bladder reliably lodge at the caudal aspect of the os penis where the urethral groove prevents expansion.',
    clinicalPearlsAr: 'انسداد مجرى البول بالحصوات: الحصوات المنحدرة من المثانة تنحشر بشكل شبه حتمي عند الحافة الخلفية لعظم القضيب لضيق الميزاب العظمي.',
    focusCoordinates: { position: [0.6, 0.3, -0.4], target: [0, 0.18, -0.58] },
    geometry: { shape: 'cylinder', position: [0, 0.18, -0.58], rotation: [0, 0, 0], scale: [0.05, 0.38, 0.05], color: '#f8fafc', roughness: 0.5, metalness: 0.05 },
    quizQuestions: [
      {
        questionEn: 'Where do urethral calculi most frequently lodge to cause acute urinary obstruction in male dogs?',
        questionAr: 'أين تنحشر الحصوات البولية بأعلى معدل مسببة انسداد مجرى البول الحاد في ذكور الكلاب؟',
        options: [
          { en: 'At the caudal base of the os penis where the urethra enters the rigid ventral groove', ar: 'عند القاعدة الخلفية لعظم القضيب حيث يدخل الإحليل في الميزاب العظمي الصلب' },
          { en: 'Directly inside the urinary bladder neck', ar: 'داخل عنق المثانة مباشرة' },
          { en: 'Inside the prostatic urethra exclusively', ar: 'داخل إحليل البروستاتا حصراً' },
          { en: 'At the external preputial orifice', ar: 'عند فوهة القلفة الخارجية' }
        ],
        correctAnswer: 'At the caudal base of the os penis where the urethra enters the rigid ventral groove',
        explanationEn: 'The urethra cannot distend where it is bound within the rigid bony sulcus urethralis of the os penis, creating an anatomical bottleneck.',
        explanationAr: 'لا يستطيع الإحليل التمدد عند دخوله الميزاب العظمي الصلب لأسفل عظم القضيب، مشكلاً عنق زجاجة تشريحي تنحشر به الحصوات.'
      },
      {
        questionEn: 'What emergency surgical procedure creates a permanent new urethral stoma in the perineal region to bypass recurrent urethral obstructions in male dogs?',
        questionAr: 'ما هي الجراحة التي تصنع فتحة بولية دائمة جديدة في منطقة العجان لتجاوز انسدادات عظم القضيب المتكررة في ذكور الكلاب؟',
        options: [
          { en: 'Scrotal urethrostomy (or prescrotal urethrostomy)', ar: 'فغر الإحليل الصفني (Scrotal urethrostomy)' },
          { en: 'Total cystectomy', ar: 'استئصال المثانة التام' },
          { en: 'Penile amputation without stoma', ar: 'بتر القضيب دون تصريف' },
          { en: 'Ureteral stent placement', ar: 'دعامة الحالب' }
        ],
        correctAnswer: 'Scrotal urethrostomy (or prescrotal urethrostomy)',
        explanationEn: 'The scrotal region offers the widest, most superficial urethra surrounded by minimal erectile tissue, making scrotal urethrostomy the gold standard.',
        explanationAr: 'تتميز منطقة كيس الصفن بأن الإحليل فيها هو الأوسع والأكثر سطحية مع قلة الأنسجة الناعظة، مما يجعل فغر الإحليل الصفني المعيار الذهبي.'
      }
    ]
  },
  // Muscular
  {
    speciesSlug: 'canine',
    systemSlug: 'muscular',
    meshId: 'Mesh_Canine_MusculusMasseter',
    nameEn: 'Canine Masseter Muscle',
    nameAr: 'العضلة الماضغة للكلب',
    latinName: 'Musculus masseter',
    descriptionEn: 'Powerfully developed masticatory muscle covering the lateral surface of the ramus of the mandible, delivering immense vertical bite force for carnassial shearing.',
    descriptionAr: 'عضلة مضغية قوية التطور تغطي الوجه الوحشي لفك الكلب السفلي، وتوفر قوة عضة رأسية هائلة للقص بالأضراس.',
    bloodSupplyEn: 'Masseteric branch of facial artery and transverse facial artery.',
    bloodSupplyAr: 'الفرع الماضغي للشريان الوجهي والوجهي المستعرض.',
    innervationEn: 'Masseteric nerve off mandibular division of trigeminal nerve (CN V3).',
    innervationAr: 'العصب الماضغي من الشعبة الفكية السفلية للعصب الخامس CN V3.',
    clinicalPearlsEn: 'Masticatory Muscle Myositis (MMM): Autoantibodies against unique 2M muscle fibers cause acute jaw swelling, severe trismus ("lockjaw"), and marked bilateral muscle atrophy.',
    clinicalPearlsAr: 'التهاب عضلات المضغ المناعي MMM: أجسام مضادة لألياف 2M الفريدة تسبب تورماً حاداً للفك واستحالة فتح الفم (Trismus) وضموراً عضلياً ثنائياً.',
    focusCoordinates: { position: [0.7, 0.8, 0.75], target: [0.12, 0.68, 0.72] },
    geometry: { shape: 'box', position: [0.12, 0.68, 0.72], rotation: [0.2, 0.3, 0], scale: [0.12, 0.22, 0.18], color: '#991b1b', roughness: 0.5, metalness: 0.08 },
    quizQuestions: [
      {
        questionEn: 'Masticatory Muscle Myositis (MMM) in dogs is an autoimmune disorder targeting which specific muscle isoform?',
        questionAr: 'التهاب عضلات المضغ المناعي (MMM) في الكلاب هو اضطراب مناعي ذاتي يستهدف أي نوع محدد من ألياف العضلات؟',
        options: [
          { en: 'Type 2M myosin fibers (unique to temporal and masseter muscles)', ar: 'ألياف الميوسين من النوع 2M (الفريدة لعضلات الصدغ والماضغة)' },
          { en: 'Type 1 slow-twitch fibers exclusively', ar: 'ألياف النوع الأول البطيئة حصراً' },
          { en: 'Smooth muscle actin', ar: 'أكتين العضلات الملساء' },
          { en: 'Cardiac troponin I', ar: 'التروبونين القلبي' }
        ],
        correctAnswer: 'Type 2M myosin fibers (unique to temporal and masseter muscles)',
        explanationEn: 'The muscles of mastication are derived from the 1st branchial arch and uniquely express 2M fibers; autoantibodies produce severe trismus.',
        explanationAr: 'تنشأ عضلات المضغ من القوس الخيشومي الأول وتتميز بألياف 2M؛ وتهاجمها الأجسام المضادة مسببة تيبس الفك واستحالة فتحه.'
      },
      {
        questionEn: 'What is the hallmark clinical sign during the acute phase of canine Masticatory Muscle Myositis?',
        questionAr: 'ما هي العلامة السريرية المميزة خلال المرحلة الحادة لالتهاب عضلات المضغ في الكلاب؟',
        options: [
          { en: 'Inability to open the mouth (trismus) and swollen, painful temporal and masseter muscles', ar: 'استحالة فتح الفم (Trismus) مع تورم وألم شديد بعضلات الصدغ والماضغة' },
          { en: 'Complete loss of vision', ar: 'فقدان تام للبصر' },
          { en: 'Flaccid dropped jaw hanging open loosely', ar: 'تدلي الفك وارتخاؤه مفتوحاً' },
          { en: 'Tongue protrusion without pain', ar: 'بروز اللسان دون ألم' }
        ],
        correctAnswer: 'Inability to open the mouth (trismus) and swollen, painful temporal and masseter muscles',
        explanationEn: 'Inflammation causes acute painful spasms of 2M-containing muscles; dogs cannot open their jaws even under general anesthesia if fibrosis ensues.',
        explanationAr: 'يحدث الالتهاب تشنجاً مؤلماً شديداً يمنع فتح الفم، وقد يتحول لتليف دائم إن لم يعالج بالكورتيزون مبكراً.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'muscular',
    meshId: 'Mesh_Canine_MusculusIliopsoas',
    nameEn: 'Canine Iliopsoas Muscle Complex',
    nameAr: 'العضلة الحرقفية القطنية للكلب',
    latinName: 'Musculus iliopsoas (M. psoas major et M. iliacus)',
    descriptionEn: 'Sublumbar compound muscle formed by the fusion of the psoas major and iliacus, inserting onto the lesser trochanter of the femur to flex the hip joint.',
    descriptionAr: 'عضلة مركبة أسفل الفقرات القطنية تتكون من اتحاد العضلة القطنية الكبرى والحرقفية، وترتكز على المدور الصغير لعظم الفخذ لثني مفصل الورك.',
    bloodSupplyEn: 'Lumbar arteries, deep circumflex iliac, and external iliac arteries.',
    bloodSupplyAr: 'الشرايين القطنية والحرقفية المنعطفة والظاهرة.',
    innervationEn: 'Femoral nerve (Nervus femoralis) and ventral rami of L3-L5.',
    innervationAr: 'العصب الفخذي (L3-L5).',
    clinicalPearlsEn: 'Iliopsoas Strain: Common cause of insidious hindlimb lameness in performance and agility dogs; pain is elicited on internal rotation and extension of the hip joint.',
    clinicalPearlsAr: 'إجهاد وتمزق العضلة الحرقفية القطنية: سبب شائع لعرج القوائم الخلفية في كلاب خفة الحركة؛ ويستثار الألم ببسط مفصل الورك وتدويره للداخل.',
    focusCoordinates: { position: [0.7, 0.5, -0.2], target: [0.08, 0.42, -0.3] },
    geometry: { shape: 'capsule', position: [0.08, 0.42, -0.3], rotation: [0.4, 0, 0.1], scale: [0.12, 0.45, 0.12], color: '#b91c1c', roughness: 0.5, metalness: 0.1 },
    quizQuestions: [
      {
        questionEn: 'Where does the combined tendon of the canine iliopsoas muscle insert on the skeleton?',
        questionAr: 'أين يرتكز الوتر المشترك للعضلة الحرقفية القطنية على الهيكل العظمي في الكلب؟',
        options: [
          { en: 'Lesser trochanter of the femur (Trochanter minor femoris)', ar: 'المدور الصغير لعظم الفخذ (Trochanter minor femoris)' },
          { en: 'Greater trochanter of the femur', ar: 'المدور الكبير لعظم الفخذ' },
          { en: 'Tibial tuberosity', ar: 'الحدبة القصبية' },
          { en: 'Tuber calcanei', ar: 'حدبة عظم الكعب' }
        ],
        correctAnswer: 'Lesser trochanter of the femur (Trochanter minor femoris)',
        explanationEn: 'The iliopsoas inserts onto the lesser trochanter on the proximomedial caudal aspect of the femur, acting as a primary hip flexor.',
        explanationAr: 'ترتكز الحرقفية القطنية على المدور الصغير في الوجه الأنسي الخلفي للفخذ وتعمل كثانية أساسية للورك.'
      },
      {
        questionEn: 'Which physical examination manipulation consistently elicits acute pain in a dog with an iliopsoas muscle strain?',
        questionAr: 'أي حركة فحص سريري تستثير ألماً حاداً ومؤكداً في كلب مصاب بتمزق أو إجهاد العضلة الحرقفية القطنية؟',
        options: [
          { en: 'Simultaneous hip extension combined with internal rotation and direct palpation of the lesser trochanter', ar: 'بسط مفصل الورك مع تدويره نحو الداخل وجس المدور الصغير مباشرة' },
          { en: 'Full stifle flexion', ar: 'ثني مفصل الركبة بالكامل' },
          { en: 'Compression of the hock joint', ar: 'ضغط مفصل العرقوب' },
          { en: 'Tarsal hyperextension', ar: 'فرط بسط مفصل العرقوب' }
        ],
        correctAnswer: 'Simultaneous hip extension combined with internal rotation and direct palpation of the lesser trochanter',
        explanationEn: 'Extending and internally rotating the coxofemoral joint stretches the iliopsoas muscle across its inflamed insertion site.',
        explanationAr: 'بسط الورك مع تدويره للداخل يشد ألياف العضلة الملتهبة فوق موضع ارتكازها فيحدث ألماً واضحاً.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'muscular',
    meshId: 'Mesh_Canine_MusculusQuadricepsFemoris',
    nameEn: 'Canine Quadriceps Femoris Muscle',
    nameAr: 'العضلة رباعية الرؤوس الفخذية للكلب',
    latinName: 'Musculus quadriceps femoris (Rectus femoris, Vasti lateralis, medialis, intermedius)',
    descriptionEn: 'Massive cranial thigh muscle comprising four heads uniting into the common patellar tendon, forming the primary extensor of the stifle joint essential for weight-bearing.',
    descriptionAr: 'عضلة الفخذ الأمامية الضخمة المكونة من أربعة رؤوس تتحد في وتر الرضفة المشترك، وتمثل الباسطة الرئيسية لمفصل الركبة اللازمة لحمل وزن الجسم.',
    bloodSupplyEn: 'Lateral circumflex femoral artery and femoral artery branches.',
    bloodSupplyAr: 'الشريان المنعطف الفخذي الوحشي وفروع الشريان الفخذي.',
    innervationEn: 'Femoral nerve (Nervus femoralis L4-L6).',
    innervationAr: 'العصب الفخذي (L4-L6).',
    clinicalPearlsEn: 'Femoral Nerve Paralysis: Inability to extend the stifle and bear weight; loss of the patellar tendon reflex (knee-jerk reflex) is pathognomonic.',
    clinicalPearlsAr: 'شلل العصب الفخذي: عجز الكلب عن بسط الركبة وحمل وزنه؛ وغياب المنعكس الرضفي (منعكس ضربة الركبة) علامة وصفية قاطعة.',
    focusCoordinates: { position: [0.8, 0.5, -0.3], target: [0.2, 0.38, -0.4] },
    geometry: { shape: 'box', position: [0.2, 0.38, -0.4], rotation: [0.25, 0, 0], scale: [0.18, 0.42, 0.22], color: '#dc2626', roughness: 0.5, metalness: 0.08 },
    quizQuestions: [
      {
        questionEn: 'Which specific head of the quadriceps femoris muscle arises from the ilium and crosses both the hip and stifle joints?',
        questionAr: 'أي رأس من رؤوس العضلة رباعية الرؤوس الفخذية ينشأ من عظم الحرقفة ويعبر كلاً من مفصلي الورك والركبة؟',
        options: [
          { en: 'Rectus femoris muscle (Musculus rectus femoris)', ar: 'العضلة المستقيمة الفخذية (Musculus rectus femoris)' },
          { en: 'Vastus lateralis', ar: 'المتسعة الوحشية' },
          { en: 'Vastus medialis', ar: 'المتسعة الإنسية' },
          { en: 'Vastus intermedius', ar: 'المتسعة المتوسطة' }
        ],
        correctAnswer: 'Rectus femoris muscle (Musculus rectus femoris)',
        explanationEn: 'The rectus femoris arises from the rectus tuberosity of the ilium, functioning to flex the hip and extend the stifle.',
        explanationAr: 'تنشأ المستقيمة الفخذية من حدبة الحرقفة، فتقوم بثني مفصل الورك وبسط مفصل الركبة في آن واحد.'
      },
      {
        questionEn: 'Loss of the patellar reflex (knee-jerk reflex) in a dog localizes a neurological lesion to which spinal cord segments or peripheral nerve?',
        questionAr: 'غياب المنعكس الرضفي (منعكس الركبة) في الكلب يحدد موقع الآفة العصبية في أي فقرات نخاعية أو أي عصب محيطي؟',
        options: [
          { en: 'L4 - L6 spinal cord segments and Femoral nerve', ar: 'الفقرات النخاعية L4-L6 والعصب الفخذي' },
          { en: 'L7 - S1 and Sciatic nerve', ar: 'الفقرات L7-S1 والعصب الوركي' },
          { en: 'C6 - T2 and Radial nerve', ar: 'الفقرات C6-T2 والعصب الكعبري' },
          { en: 'S1 - S3 and Pudendal nerve', ar: 'الفقرات S1-S3 والعصب الاستحيائي' }
        ],
        correctAnswer: 'L4 - L6 spinal cord segments and Femoral nerve',
        explanationEn: 'The femoral nerve (originating from L4, L5, and L6 spinal cord segments) mediates both the afferent and efferent limbs of the patellar reflex.',
        explanationAr: 'ينقل العصب الفخذي (المنبثق من L4 إلى L6) الإشارات الحسية والحركية لقوس المنعكس الرضفي.'
      }
    ]
  },
  {
    speciesSlug: 'canine',
    systemSlug: 'muscular',
    meshId: 'Mesh_Canine_MusculusGastrocnemius',
    nameEn: 'Canine Gastrocnemius & Achilles Tendon Complex',
    nameAr: 'العضلة التوأمية الساقية ومجمع وتر أخيل للكلب',
    latinName: 'Musculus gastrocnemius et Tendo calcaneus communis',
    descriptionEn: 'Two-headed muscular engine on caudal crus (medial and lateral heads with fabellae) uniting into the calcanean tendon inserting on the tuber calcanei.',
    descriptionAr: 'عضلة ثنائية الرؤوس خلف الساق (رأسان وحشي وإنسي يحتويان على عظمتي الفابيلا) تتحد في وتر العرقوب المرتكز على كعب القدم.',
    bloodSupplyEn: 'Distal caudal femoral artery and popliteal artery.',
    bloodSupplyAr: 'الشريان الفخذي الذيلي البعيد والشريان المأبضي.',
    innervationEn: 'Tibial nerve (Nervus tibialis, branch of sciatic nerve).',
    innervationAr: 'العصب القصبي (شعبة من العصب الوركي).',
    clinicalPearlsEn: 'Common Calcaneal Tendon Rupture (Achilles tendon rupture): Causes complete plantigrade stance ("dropped hock") with flexion of the digits (curled toes).',
    clinicalPearlsAr: 'تمزق وتر العرقوب (وتر أخيل): يسبب وقوفاً أخمصياً مسطحاً للقدم على الأرض (سقوط العرقوب) مع انثناء مخالب الأصابع للأعلى.',
    focusCoordinates: { position: [0.7, 0.4, -0.4], target: [0.18, 0.22, -0.52] },
    geometry: { shape: 'capsule', position: [0.18, 0.22, -0.52], rotation: [0.35, 0, 0], scale: [0.1, 0.48, 0.1], color: '#991b1b', roughness: 0.5, metalness: 0.08 },
    quizQuestions: [
      {
        questionEn: 'Complete traumatic rupture of the common calcanean (Achilles) tendon in a dog causes what pathognomonic clinical stance?',
        questionAr: 'التمزق الرضحي الكامل لوتر العرقوب المشترك (وتر أخيل) في الكلب يسبب أي وقفة سريرية وصفية؟',
        options: [
          { en: 'Plantigrade stance (hock drops flat to the ground during weight-bearing)', ar: 'وقوف أخمصي كامل (هبوط مفصل العرقوب مسطحاً على الأرض عند حمل الوزن)' },
          { en: 'Hyperextension of the hock with digit locking', ar: 'فرط بسط العرقوب مع قفل الأصابع' },
          { en: 'Knuckling of the forelimb carpus', ar: 'انثناء رسغ القائمة الأمامية' },
          { en: 'Rigid spastic extensor thrust', ar: 'تشنج تيبسي باسط' }
        ],
        correctAnswer: 'Plantigrade stance (hock drops flat to the ground during weight-bearing)',
        explanationEn: 'Loss of the calcanean tendon prevents extension of the hock joint, causing the tarsus to drop to the floor like a human foot.',
        explanationAr: 'فقدان وتر العرقوب يمنع بسط مفصل العرقوب، مما يجعل الكلب يمشي على كامل سطح المشط كقدم الإنسان.'
      },
      {
        questionEn: 'How many distinct tendons contribute to the canine common calcanean tendon (Achilles tendon)?',
        questionAr: 'كم عددا الأوتار المنفصلة التي تشترك في تكوين وتر العرقوب المشترك في الكلب؟',
        options: [
          { en: 'Three main components: Gastrocnemius tendon, Superficial digital flexor tendon, and common tendon of gracilis, semitendinosus, and biceps femoris', ar: 'ثلاثة مكونات رئيسية: وتر العضلة التوأمية، وتر الثنية السطحية، والوتر المشترك للعضلات الرشيقة ونصف الوترية وذات الرأسين' },
          { en: 'Only the gastrocnemius tendon alone', ar: 'وتر العضلة التوأمية فقط بمفرده' },
          { en: 'Deep digital flexor tendon exclusively', ar: 'وتر الثنية العميقة حصراً' },
          { en: 'Extensor digitorum longus', ar: 'باسطة الأصابع الطويلة' }
        ],
        correctAnswer: 'Three main components: Gastrocnemius tendon, Superficial digital flexor tendon, and common tendon of gracilis, semitendinosus, and biceps femoris',
        explanationEn: 'The common calcanean tendon is a complex structure formed by the gastrocnemius, SDFT, and fascial contributions from the thigh muscles.',
        explanationAr: 'وتر العرقوب المشترك بنية مركبة تشارك فيها التوأمية الساقية والثنية السطحية للأصابع مع أوتار من عضلات الفخذ.'
      }
    ]
  }
];
