import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastrar from '/pages/cadastrarAnime';
import Consultar from './pages/consultarAnimes';



export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Cadastrar />} />
                <Route path='/consultarAnimes' element={<Consultar/>} />
            </Routes>
        </BrowserRouter>
    )
}