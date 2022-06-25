import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import {cadastrarAnime} from '../../api/animeApi';
import './index.scss'

export default function Index(){
    const [nome, setNome] = useState('');

    async function inserir() {
        if(!nome.trim()){
            alert('Digite um texto valido!');
        }else{
            const resposta = await cadastrarAnime(nome);
            setNome('');
            alert('Anime cadastrado com sucesso!');
        }
    }

    return(
        <div>
            <div>
                <h1 className='a'> 
                    Cadastrar anime 
                </h1>
                <p className='c'> 
                    Insira o nome do anime:
                    <input type='text' placeholder='Nome do anime'className='b' value={nome} onChange={e => setNome(e.target.value)} />
                </p>
                <button className='d'> Salvar anime</button>
                 
            </div>
           
            <div>
                <br/>
                <br/>
                <Link to='./consultarAnimes'>  Animes Cadastrados </Link>
            </div>
            
        </div>
    )
}