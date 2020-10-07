const knex = require('knex');
const configuration = require('../../knexfile');

//Criando a conexão com o banco de dados
const connection = knex(configuration.development);

//Exportando a conexão
module.exports = connection