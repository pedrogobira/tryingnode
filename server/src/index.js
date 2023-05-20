const express = require('express');
const app = express();
const db = require('./db/init');
const body = require('body-parser');
const route = require('./route');
const cors = require('cors');

db.init();
app.use(cors());
app.use(body.json());
app.use(route);

app.listen(8000, () => console.log('Servidor iniciado na porta 8000'));
