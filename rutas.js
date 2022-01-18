const express = require('express');
const router = express.Router();

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
    const id = req.params;
});

module.exports = router;