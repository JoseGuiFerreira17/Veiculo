import axios from 'axios';

//Criando a conexão com API Restful
const api = axios.create({
    baseURL: 'http://localhost:3333',
});
export default api;
