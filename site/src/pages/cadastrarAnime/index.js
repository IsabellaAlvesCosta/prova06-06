
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function Index(){
    cons [nome, setNome] = useState('');
    return(
        <div>
            <div>
                <h1> 
                    Cadastrar anime 
                </h1>
                <p> 
                    Insira o nome do anime:
                    <input type='text' placeholder='Nome do anime' value={nome} onChange={e => setNome(e.target.value)} />
                </p>
                <p> Salvar anime</p>
            </div>
            <div>
                <Link to='./consultarAnimes'>  Animes Cadastrados </Link>
            </div>
            
        </div>
    )
}