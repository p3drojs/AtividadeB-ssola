import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export const enviarReceita = async (body) => {
    const { resp } = await Api.post('/receitas', body);
    return resp; 
}

export const pegarReceitas = async () => {
    const { resp } = await Api.get('/receitas');
    return resp; 
}

export const cadastrarIngrediente = async (receitaId, body) => {
    const { resp } = await Api.post(`/addIngrediente/${receitaId}`, body);
    return resp; 
}

export default Api;