import { inserirAnime, consultarAnime } from "../repository/animeRepository.js";

import { Router } from "express";

const server=Router();

server.post('/anime', async (req,resp) => {
    try{
        const anime = req.body;
        const resposta = await inserirAnime(anime);
       resp.send({
        nome:anime
       });
        
    }catch(err){
        resp.status(404).send ({
            erro:err.message
        })
    }

});

server.get('/anime', async (req, resp) => {

    try {
        const resposta = await consultarAnime();
        resp.send(resposta);
    } catch (err) {

        resp.status(400).send({

            erro: err.message

        });

    }

});

export default server;

