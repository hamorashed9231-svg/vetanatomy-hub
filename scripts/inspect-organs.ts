import path from 'path';

interface OrganRecord {
  speciesSlug: string;
  systemSlug: string;
  meshId: string;
  nameEn: string;
  nameAr: string;
  latinName: string;
  descriptionEn: string;
  descriptionAr: string;
  bloodSupplyEn: string;
  bloodSupplyAr: string;
  innervationEn: string;
  innervationAr: string;
  clinicalPearlsEn: string;
  clinicalPearlsAr: string;
  focusCoordinates: {
    position: [number, number, number];
    target: [number, number, number];
  };
  geometry?: {
    shape: string;
    position: [number, number, number];
    rotation?: [number, number, number];
    scale?: [number, number, number];
    color?: string;
    roughness?: number;
    metalness?: number;
  };
  quizQuestions: Array<{
    questionEn: string;
    questionAr: string;
    options: Array<{ en: string; ar: string }>;
    correctAnswer: string;
    explanationEn: string;
    explanationAr: string;
  }>;
}

const files = [
  'data-equine.js',
  'data-bovine.js',
  'data-canine.js',
  'data-feline.js',
  'data-ovine.js',
  'data-avian.js',
  'data-camelid.js',
];

async function inspect() {
  let allOrgans: OrganRecord[] = [];
  for (const f of files) {
    try {
      const fullPath = path.resolve(process.cwd(), 'scripts', f);
      const mod = await import('file://' + fullPath);
      const organs: OrganRecord[] = mod.default || mod;
      console.log(`${f}: ${organs.length} organs`);
      allOrgans = allOrgans.concat(organs);
    } catch (e: any) {
      console.error(`Failed loading ${f}:`, e.message);
    }
  }

  // Also check build-camelid.js
  try {
    const camelidPath = path.resolve(process.cwd(), 'scripts', 'build-camelid.js');
    // Read camelidOrgans from file or require it
    // Wait, let's see how camelidOrgans is exported in build-camelid.js
  } catch (e) {}

  const speciesList = ['equine', 'bovine', 'canine', 'feline', 'ovine_caprine', 'avian', 'camelid'];
  const systemsList = ['cardiovascular', 'digestive', 'respiratory', 'nervous', 'urogenital', 'skeletal', 'muscular'];

  const sampleMeshIds = [
    'Mesh_Equine_Cor', 'Mesh_Equine_Pulmo', 'Mesh_Bovine_Rumen', 'Mesh_Bovine_Reticulum',
    'Mesh_Bovine_Omasum', 'Mesh_Bovine_Abomasum', 'Mesh_Canine_Femur', 'Mesh_Camelid_C1'
  ];
  for (const m of sampleMeshIds) {
    const found = allOrgans.find(o => o.meshId === m);
    console.log(`Checking ${m}:`, found ? 'FOUND' : 'MISSING (need alias or check)');
  }
}

inspect();
