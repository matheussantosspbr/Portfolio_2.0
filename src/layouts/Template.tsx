import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import Inicio from '../views/Inicio';
import Sobre from '../views/Sobre';

export default function Template() {
    return (
        <>
            
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/sobre' element={<Sobre/>}/>
                    <Route path='/portfolio'/>
                </Routes>
                <Footer/>
             </BrowserRouter>
            
        </>
      
    )
  }