
const { where } = require('../database/connection');
const connection = require('../database/connection');


module.exports = {
    async create(request, response){
        //Recebendo dados da requisição
        const {vehicle, brand, year, description, sold} = request.body;

        //Inserindo os dados 
        await connection('vehicle').insert({
            vehicle,
            brand,
            year,
            description,
            sold,
        });

        return response.status(204).send();
    },

    async index(request, response){
        //Buscando os dados no banco
        const veiculos = await connection('vehicle').select('*');

        return response.json(veiculos);
    },
    async find(request, response){
        const {q} = request.query;
        //Buscando os dados no banco
        const veiculos = await connection('vehicle')
        .where('vehicle', 'like', '%'+q+'%')
        .select('*');

        return response.json(veiculos);
    },
    async delete(request, response){
        //Recebendo id do parametro da rota
        const {id} = request.params;

        //Apagando veiculo com id igual ao passado na rota
        await connection('vehicle').where('id', id).delete();

        return response.status(204).send();
    },
 
    async  update(request, response){
        //Buscando dados para serem alterados no corpo da menssagem
        const {vehicle, brand, year, description, sold} = request.body;
        //Buscando Id na rota
        const {id}  = request.params;
        //Atribuindo data e hora atual da atualização do veiculo
        const updated = new Date();

        //Atualizando dados do veiculo
        await connection('vehicle').update({vehicle, brand, year, description, sold, updated}).where('id', id);

        return response.status(204).send();
    },

    async sold(request, response){
        //Buscando dados para serem alterados no corpo da menssagem
        const {sold} = request.body;
        //Buscando Id na rota
        const {id}  = request.params;
        //Atribuindo data e hora atual da atualização do veiculo
        const updated = new Date();

        //Atualizando dados do veiculo
        await connection('vehicle').update({sold, updated}).where('id', id);

        return response.status(204).send();
    },
    async detail(request, response){
        //Recebendo id do parametro da rota
        const {id} = request.params;

        //Buscando veiculo com id igual ao passado na rota
        const vehicle = await connection('vehicle').where('id', id).select('*');

        return response.json(vehicle);

    }
};