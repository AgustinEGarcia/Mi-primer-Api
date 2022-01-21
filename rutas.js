const express = require('express');
const router = express.Router();

router.use(express.json());

let notas = [
    {
      id: 1,
      content: 'Me tengo que suscribir a @midudev en YouTube',
      date: '2019-05-30T17:30:31.098Z',
      important: true
    },
    {
      id: 2,
      content: 'Tengo que estudiar las clases del FullStack Bootcamp',
      date: '2019-05-30T18:39:34.091Z',
      important: false
    },
    {
      id: 3,
      content: 'Repasar los retos de JS de midudev',
      date: '2019-05-30T19:20:14.298Z',
      important: true
    }
  ]

router.get('/', (req, res) => {
    res.send('<h1>Mi primer Api</h1>');
});

router.get('/api/notas', (req, res) => {
    res.json(notas);
});

router.get('/api/notas/:id', (req, res) => {
    const id = Number(req.params.id); //siempre los parametros que nos vengan de una request van a ser strings
    const nota = notas.find(nota => nota.id === id); 
    
    if(nota){
      res.json(nota);
    }else{
      res.status(404).end();
    };
});

router.delete('/api/notas/:id', (req, res) => {
  const id = Number(req.params.id);
  notas = notas.filter(nota => nota.id !== id);
  res.json(notas);
  res.status(204).end();
});


router.post('/api/notas', (req, res) => {
  const nota = req.body;

  if(!nota || !nota.content){
    return res.status(400).json({
      error: 'nota.content no tiene contenido'
    });
  };

  const ids = notas.map(nota => nota.id);
  const maxId = Math.max(...ids);

  const nuevaNota = {
    id: maxId + 1,
    content: nota.content,
    important: typeof nota.important !== 'undefined' ? nota.important : false,
    date: new Date().toISOString()
  }

  notas = [...notas, nuevaNota]; //o tambien se puede hacer notas.concat(nuevaNota);

  res.status(201).json(nuevaNota);
});

module.exports = router;