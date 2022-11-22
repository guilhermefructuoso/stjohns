import React from "react";
import "./agenda.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import gullivera from "../../assets/gullivera.png";
import degasperi from "../../assets/degasperi.png";
import anne from "../../assets/anne.png";
import satisfactor from "../../assets/satisfactor.png";
import vitao from "../../assets/satisfactor.png";
import trevo from "../../assets/trevo.svg";

function Agenda() {
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
    <section id="angenda">
      <div className="container-agenda">
        <div className="clover">
          <img src={trevo} alt="trevo" />
        </div>
        <div className="title">
          <h1>Agenda</h1>
        </div>
      </div>
      <div className="p-agenda" >
      <p>
        Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
        voluptatem ut mollitia repellendus ut esse magni et corporis dolorem. Ut
        rerum esse ea dignissimos verita
      </p>
      </div>
     
      <div>
        <div className="central">
        <Carousel responsive={responsive} autoPlaySpeed={30000}>
          <div className="card">
            <div className="music">
              <img src={gullivera} alt="consultorio" />
              <h3>Gullivera</h3>
              <p>01/DEZ</p>
              <p>Quinta</p>
            </div>
          </div>
          <div className="card">
            <div className="music">
              <img src={degasperi} alt="consultorio" />
              <h3>Degasperi</h3>
              <p>02/DEZ</p>
              <p>Sexta</p>
            </div>
          </div>
          <div className="card">
            <div className="music">
              <img src={anne} alt="consultorio" />
              <h3>Anne</h3>
              <p>3/DEZ</p>
              <p>Sábado</p>
            </div>
          </div>
          <div className="card">
            <div className="music">
              <img src={vitao} alt="consultorio" />
              <h3>Satisfactor</h3>
              <p>04/DEZ</p>
              <p>Domingo</p>
            </div>
          </div>
          <div className="card">
            <div className="music">
              <img src={satisfactor} alt="consultorio" />
              <h3>Satisfactor</h3>
              <p>05/DEZ</p>
              <p>Segunda</p>
            </div>
          </div>
          <div className="card">
            <div className="music">
              <img src={gullivera} alt="consultorio" />
              <h3>Gullivera</h3>
              <p>06/DEZ</p>
              <p>Terça</p>
            </div>
          </div>
        </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Agenda;
