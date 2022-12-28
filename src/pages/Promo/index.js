import { Link } from "react-router-dom";
import './promo.css'
import trevo from "../../assets/trevo.svg";
import promo1 from "../../assets/promo1.jpg";
import promo2 from "../../assets/promo2.jpg";
import promo3 from "../../assets/promo3.jpg";
import promo4 from "../../assets/promo4.jpg";
import promo5 from "../../assets/promo5.jpg";
import promo6 from "../../assets/promo6.jpg";


function Promo() {
  return (
    <section id="promo">
      <div className="container-agenda">
        <div className="clover">
          <img src={trevo} alt="trevo" />
        </div>
        <div className="title">
          <h1>Promoções</h1>
        </div>
      </div>
      <div className="central">
        <div className="cards-thumbs">
          <img src={promo1} alt="ambiente" />
          <img src={promo2} alt="ambiente" />
          <img src={promo3} alt="ambiente" />
          <img src={promo4} alt="ambiente" />
          <img src={promo5} alt="ambiente" />
          <img src={promo6} alt="ambiente" />
        </div>
        <div className="link-promo">
            <Link to="/">Voltar ao site</Link>
          </div>
      </div>
    </section>
  );
}

export default Promo;
