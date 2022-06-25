import server from '../controller/animeController.js';
import { con } from './connection.js'



export async function inserirAnime(anime) {

    const comando = 
    
        ` INSERT INTO TB_ANIME (ID_ANIME, NM_ANIME)
        VALUES  (?,?);`
    
    const [resposta] = await con.query (comando,[anime.nome]);
    anime.id = resposta.insertId;
    
    return resposta;
    
    }

    export async function consultarAnime() {

        const comando = 
        
            ` SELECT ID_ANIME   ID,
            NM_ANIME   NOME
         FROM TB_ANIME;`
        
        const [resposta] = await con.query (comando);
        
        return resposta;
        
        }


        export default server;


