const express = require('express');
const courseController = require('./controllers/courseController');

const route = express.Router();

route.get('/', (req, res) => {
    res.send('NuFinance - Inovar para Pessoas Negras - Equipe: Aidê Romão, Marcelo Vitor, Pedro Gobira e Samuel Santos');
});

route.get('/api/courses/list', courseController.list);
route.get('/api/courses/show/:id', courseController.getById);
route.post('/api/courses/create', courseController.create);
route.put('/api/courses/update/:id', courseController.update);
route.delete('/api/courses/delete/:id', courseController.delete);

module.exports = route;