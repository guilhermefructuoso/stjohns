import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Cardapio from './components/Cardapio'
import Agenda from './components/Agenda'
import Ambientes from './components/Ambientes'
import Contato from './components/Contato'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Home/>
   <Sobre/>
   <Cardapio/>
   <Agenda/>
   <Ambientes/>
   <Contato/>
   <Footer/>
   <ToastContainer autoClose={3000} />
   </BrowserRouter>
  );
}

export default App;
