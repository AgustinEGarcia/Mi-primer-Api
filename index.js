const express = require('express');
const app = express();
const puerto = 3000;

const router = require('./rutas.js');

app.use(router);

app.listen(puerto, () => {
    console.log(`Servidor en puerto ${puerto}`);
});