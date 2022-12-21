import { BrowserRouter, Routes, Route } from "react-router-dom";
import Promo from "../pages/Promo";
import Nav from '../components/Nav'
import Home from '../components/Home'
import Sobre from '../components/Sobre'
import Cardapio from '../components/Cardapio'
import Agenda from '../components/Agenda'
import Ambientes from '../components/Ambientes'
import Contato from '../components/Contato'
import Footer from '../components/Footer'
import App from "../App";




function RoutesApp() {
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
    <Routes>
      <Route path="/promo" element={<Promo />} />
      <Route path="/app" element={<App />} />
    </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
