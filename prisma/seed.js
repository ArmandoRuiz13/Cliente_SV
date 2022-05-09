const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.missionCommander.upsert({
      where: { name: 'Fernando' },
      update: {},
      create: {
        name: 'Fernando',
				username: 'Fernandito123',
				mainStack: 'Node'
      },
    });

    const woopa1 = await prisma.missionCommander.upsert({
      where: { name: 'Carlos' },
      update: {},
      create: {
        name: 'Carlos',
				username: 'Carlo',
				mainStack: 'Node'
      },
    });

    const woopa2 = await prisma.missionCommander.upsert({
      where: { name: 'Alejandra' },
      update: {},
      create: {
        name: 'Alexandra',
				username: 'Alexandra2',
				mainStack: 'Java'
      },
    });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();