import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://localhost:5000'
})

export async function cadastrarAnime(nome){
    const resposta = await api.post('/anime', {
        nome:nome
    })
    return resposta.data;
}

export async function visualizarAnime() {
    const resposta = await api.get('/anime');
    return resposta.data;
}


