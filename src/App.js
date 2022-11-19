import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Cardapio from './components/Cardapio'
import Agenda from './components/Agenda'

function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Home/>
   <Sobre/>
   <Cardapio/>
   <Agenda/>
   </BrowserRouter>
  );
}

export default App;
