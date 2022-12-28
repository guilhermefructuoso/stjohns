import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "./cardapio.css";
import trevo from "../../assets/trevo.svg";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";

function Cardapio() {
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1800 },
      items: 5,
    },
    teste: {
      breakpoint: { max: 1800, min: 1440 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1440, min: 1072 },
      items: 3,
    },

    miniTablet: {
      breakpoint: { max: 1072, min: 700 },
      items: 2,
    },

    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="cardapio">
      <div className="container-cardapio">
        <div className="clover">
          <img src={trevo} alt="trevo" />
        </div>
        <div className="title">
          <h1>Cardápio</h1>
        </div>
      </div>
      <div>
        <div className="central">
          <Carousel responsive={responsive} autoPlaySpeed={30000}>
            <div className="foto">
              <img src={foto} alt="consultorio" />
              <div className="label">
                <h3>CHICKEN BURGER</h3>
                <label>
                  Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                  voluptatem ut mollitia repellendus ut esse magni et corporis
                  dolorem. Ut rerum esse ea dignissimos verita
                </label>
              </div>
            </div>
            <div className="foto">
              <img src={foto2} alt="consultorio" />
              <div className="label">
                <h3>SEX ON THE BEACH</h3>
                <label>
                  Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                  voluptatem ut mollitia repellendus ut esse magni et corporis
                  dolorem. Ut rerum esse ea dignissimos verita
                </label>
              </div>
            </div>
            <div className="foto">
              <img src={foto3} alt="consultorio" />
              <div className="label">
                <h3>MAC MORAN RIBS</h3>
                <label>
                  Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                  voluptatem ut mollitia repellendus ut esse magni et corporis
                  dolorem. Ut rerum esse ea dignissimos verita et molestiae
                  voluptatem ut mollitia repellendus ut esse.
                </label>
              </div>
            </div>
            <div className="foto">
              <img src={foto} alt="consultorio" />
              <div className="label">
                <h3>CHICKEN BURGER</h3>
                <label>
                  Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                  voluptatem ut mollitia repellendus ut esse magni et corporis
                  dolorem. Ut rerum esse ea dignissimos verita
                </label>
              </div>
            </div>
            <div className="foto">
              <img src={foto2} alt="consultorio" />
              <div className="label">
                <h3>SEX ON THE BEACH</h3>
                <label>
                  Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                  voluptatem ut mollitia repellendus ut esse magni et corporis
                  dolorem. Ut rerum esse ea dignissimos verita
                </label>
              </div>
            </div>
            <div className="foto">
              <img src={foto3} alt="consultorio" />
              <div className="label">
                <h3>MAC MORAN RIBS</h3>
                <label>
                  Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                  voluptatem ut mollitia repellendus ut esse magni et corporis
                  dolorem. Ut rerum esse ea dignissimos verita et molestiae
                  voluptatem ut mollitia repellendus ut esse.
                </label>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="link-cardapio">
          <a
            href="https://drive.google.com/drive/u/0/folders/1-2ReRiIABWDPcahVDHKkZ7QuQVSwSadN"
            target="_blanck"
          >
            Veja o cardápio completo
          </a>
          <div className="link-promo">
            <Link to="/promo">Confira nossas promoções</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cardapio;
