import './index.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { visualizarAnime } from '../../api/animeApi';

export async function Index(){
    const[animes, setAnimes] = useState('');

    const navigate = useNavigate();

    async function carregarTodosAnimes(){
        const resp = await visualizarAnime();
        setAnimes(resp);
    }
    useEffect(() => {
        carregarTodosAnimes();
    }, [])

    return (
        <div>
            <div>
                <h1> 
                    Animes Cadastrados
                </h1>
                
            </div>
        </div>
    )
}