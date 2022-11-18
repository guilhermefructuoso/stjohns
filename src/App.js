import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home'
import Sobre from './components/Sobre'

function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Home/>
   <Sobre/>
   </BrowserRouter>
  );
}

export default App;
