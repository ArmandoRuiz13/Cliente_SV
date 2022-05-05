const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const explorer1 = await prisma.ExplorerInfo.upsert({
      where: { name: 'Armando Ruiz' },
      update: {},
      create: {
        name: 'Armando Ruiz',
				lang: 'Español',
				missionCommander: 'Carlo'
      },
    });

    const explorer2 = await prisma.ExplorerInfo.upsert({
      where: { name: 'Jesus Anaya' },
      update: {},
      create: {
        name: 'Jesus Anaya',
				lang: 'Ingles',
				missionCommander: 'Carlo'
      },
    });
    console.log('Create 2 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();