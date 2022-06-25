import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastrar from './pages/cadastrarAnime/index';
import Consultar from './pages/consultarAnimes';



export default function Paths() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Cadastrar />} />
                <Route exact path='/consultarAnimes' element={<Consultar/>} />
            </Routes>
        </BrowserRouter>
    )
}