const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorerInfo.findMany({});
    res.json(allExplorers);
  });

app.get('/explorers/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorerInfo.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      lang: req.body.lang,
      missionCommander: req.body.missionCommander
     };

app.put('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.explorerInfo.update({
        where: {
            id: id
        },
        data: {
            mission: req.body.mission
        }
    })

    return res.json({message: "Actualizado correctamente"});
    });

app.delete('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.explorerInfo.delete({where: {id: id}});
    return res.json({message: "Eliminado correctamente"});
});

    const message = 'Explorer creado.';
    await prisma.explorerInfo.create({data: explorer});
    return res.json({message});
  });

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});