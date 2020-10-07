const { request, response } = require('express');
const express = require('express');
const VehicleController = require('./controllers/VehicleController');
const ProfileController = require('./controllers/ProfileController');

//Desacoplando o módulo de rotas na variável routes
const routes = express.Router();

routes.post('/veiculos', VehicleController.create);

//Função para inserção de dados
routes.get('/veiculos/find', VehicleController.find);

//Função para listagem de todos os veiculos do banco
routes.get('/veiculos', VehicleController.index);

//Função para listagem de detalhes de um veiculo
routes.get('/veiculos/:id', VehicleController.detail);

//Função para deletar um veiculo do banco
routes.delete('/veiculos/:id', VehicleController.delete);

//Função para alterar dados de um veiculo do banco
routes.put('/veiculos/:id', VehicleController.update);

routes.patch('/veiculos/:id', VehicleController.sold);

//Exportando a veriável routes
module.exports = routes;