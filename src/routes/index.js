import { BrowserRouter, Routes, Route } from "react-router-dom";
import Promo from "../pages/Promo";
import Footer from "../components/Footer";
import Main from "../pages/Main";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/promo" element={<Promo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
