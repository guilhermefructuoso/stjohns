import React from "react";
import "./ambientes.css";
import trevo from "../../assets/trevo.svg";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

export default function Ambientes() {
  return (
    <section id="ambientes">
        
      <div className="container-agenda">
        <div className="clover">
          <img src={trevo} alt="trevo" />
        </div>
        <div className="title">
          <h1>Ambientes</h1>
        </div>
      </div>
      <div className="central">
      <div className="cards-thumbs">
        <img src={img1} alt="ambiente" />
        <img src={img2} alt="ambiente" />
        <img src={img3} alt="ambiente" />
        <img src={img4} alt="ambiente" />
        <img src={img5} alt="ambiente" />
        <img src={img6} alt="ambiente" />
      </div>
      </div>
    </section>
  );
}
