import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import animeController from './controller/animeController.js'


const server= express ();

server.use(cors());
server.use(express.json());
server.use(animeController);

server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));
console.log ('BD conectado!');
