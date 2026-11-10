import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function verify() {
  const speciesCount = await prisma.species.count();
  const systemsCount = await prisma.anatomicalSystem.count();
  const ssCount = await prisma.speciesSystem.count();
  const organCount = await prisma.organ.count();
  const quizCount = await prisma.quizQuestion.count();

  console.log('--- NEON DATABASE RECORD VERIFICATION ---');
  console.log('Species Count:', speciesCount);
  console.log('Systems Count:', systemsCount);
  console.log('SpeciesSystem Link Count:', ssCount);
  console.log('Total Organ Count:', organCount);
  console.log('Total Quiz Question Count:', quizCount);

  // Sample check for each meshId from prompt
  const samples = [
    'Mesh_Equine_Cor', 'Mesh_Equine_Pulmo', 'Mesh_Bovine_Rumen',
    'Mesh_Bovine_Reticulum', 'Mesh_Bovine_Omasum', 'Mesh_Bovine_Abomasum',
    'Mesh_Canine_Femur', 'Mesh_Camelid_C1'
  ];

  for (const s of samples) {
    const o = await prisma.organ.findFirst({
      where: { meshId: s },
      include: { quizQuestions: true, speciesSystem: { include: { species: true, system: true } } }
    });
    if (o) {
      console.log('  [PASS]', s.padEnd(26), '| Species:', o.speciesSystem.species.slug.padEnd(14), '| System:', o.speciesSystem.system.slug.padEnd(15), '| NAV Latin:', o.latinName.padEnd(35), '| Quizzes:', o.quizQuestions.length);
    } else {
      console.log('  [FAIL] Missing', s);
    }
  }

  await prisma.$disconnect();
}

verify().catch(console.error);
