const express = require('express');
const routes = express.Router();

const passageiro = require('./controllers/passageiro.js');
// const Professor = require('./controllers/motorista');
// const Turma = require('./controllers/viagem');

routes.get('/', (req, res) => {
  return res.json({ titulo: '88 Taxi' });
});

routes.post('/passageiros', passageiro.create);
routes.get('/passageiros', passageiro.read);
routes.get('/passageiros/:ra', passageiro.readOne);
routes.put('/passageiros/:ra', passageiro.update);
routes.delete('/passageiros/:ra', passageiro.remove);

module.exports = routes;