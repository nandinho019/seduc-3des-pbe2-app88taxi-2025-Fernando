const express = require('express');
const routes = express.Router();

const passageiro = require('./controllers/passageiro.js');
const motorista = require('./controllers/motorista.js/');
const viagem = require('./controllers/viagem.js/');

routes.get('/', (req, res) => {
  return res.json({ titulo: '88 Taxi' });
});

routes.post('/passageiros', passageiro.create);
routes.get('/passageiros', passageiro.read);
routes.get('/passageiros/:ra', passageiro.readOne);
routes.put('/passageiros/:ra', passageiro.update);
routes.delete('/passageiros/:ra', passageiro.remove);

routes.post('/motoristas', motoristas.create);
routes.get('/motoristas', motoristas.read);
routes.get('/motoristas/:ra', motoristas.readOne);
routes.put('/motoristas/:ra', motoristas.update);
routes.delete('/motoristas/:ra', motoristas.remove);

module.exports = routes;