import axios from 'axios';

// Cria uma configuração padrão para o axios
const api = axios.create({
    // Define a baseURL, e todas as requisições partem desse endereço
    baseURL: 'https://api.github.com',
});

export default api;

