import { con } from './connection.js'


export async function inserirAnime(anime) {

    const comando = 
    
        ` INSERT INTO TB_ANIME (ID_ANIME, NM_ANIME)
        VALUES  (?,?);`
    
    const [resposta] = await con.query (comando,[anime.nome]);
    anime.id = resposta.insertId;
    
    return anime;
    
    }

    export async function consultarAnime(anime) {

        const comando = 
        
            ` SELECT ID_ANIME   ID,
            NM_ANIME   NOME
         FROM TB_ANIME;`
        
        const [resposta] = await con.query (comando,[anime.nome]);
        anime.id = resposta.insertId;
        
        return filme;
        
        }



