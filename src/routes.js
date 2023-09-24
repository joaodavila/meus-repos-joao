import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Repositorio from './pages/Repositorio';
import Main from './pages/Main';
import Erro from './pages/Erro';

const MyRotes = () => {
    return(        
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/repositorio/:repositorio" element={<Repositorio />} />
            <Route path="*" element={<Erro />} />
        </Routes>
        </BrowserRouter>
    );
}

export default MyRotes;