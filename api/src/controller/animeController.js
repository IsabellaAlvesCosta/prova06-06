import { inserirAnime } from "../repository/animeRepository.js";
import multer from "multer";


import { Router } from "express";

const server=Router();

server.post('/anime', async (req,resp) => {
    try{
        const inserirAnime = req.body
        if(!inserirAnime.nome)
            throw new error ('nome do anime é necessário!!!!!!!')
    }catch(err){
        resp.status(400).send ({
            erro:err.message
        })
    }
    resp.send=inserirAnime;
});

server.get('/anime', async (req, resp) => {

    try {

        const resposta = await consultarAnime();
        resp.send(resposta)
    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

});

export default server

