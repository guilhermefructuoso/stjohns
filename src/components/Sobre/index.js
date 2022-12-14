import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import trevo from "../../assets/trevo.svg";
import fachada from "../../assets/fachada.png";
import fachada1 from "../../assets/fachada1.png";
import "./sobre.css";

function Sobre() {
  const isTablet = useMediaQuery("(max-width: 700px)");
  return (
    <section id="sobrenos">
      <div className="left-content">
        <div className="content">
          <div className="clover">
            <img src={trevo} alt="trevo" />
          </div>
          <div className="title">
            <h1>Sobre nós</h1>
          </div>
        </div>
        <div className="text-sobre">
          <p>
            Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
            voluptatem ut mollitia repellendus ut esse magni et corporis
            dolorem. Ut rerum esse ea dignissimos veritatis ut nisi consequuntur
            sit pariatur iusto qui autem soluta cum ipsam necessitatibus et
            optio animi. Et ipsum nostrum ad quas consectetur eos incidunt
            consequatur. Vel nihil impedit et molestias fugit quo officiis
            consequatur et voluptas dignissimos non eaque rerum qui vero
            delectus. Qui necessitatibus enim et libero molestiae eum voluptate
            nemo. Est labore iusto qui optio cumque ut inventore veniam est
            fugit dolores et laudantium pariatur eos explicabo molestias quo
            corrupti consequatur. <br /> <br />
          </p>
          <p>
            Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
            voluptatem ut mollitia repellendus ut esse magni et corporis
            dolorem. Ut rerum esse ea dignissimos veritatis ut nisi consequuntur
            sit pariatur iusto qui autem soluta cum ipsam necessitatibus et
            optio animi. Et ipsum nostrum ad quas consectetur eos incidunt
            consequatur. Vel nihil impedit et molestias fugit quo officiis
            consequatur et voluptas dignissimos non eaque rerum qui vero
            delectus. Qui necessitatibus enim et libero molestiae eum voluptate
            nemo. Est labore iusto qui optio cumque ut inventore veniam est
            fugit dolores et laudantium pariatur eos explicabo molestias quo
            corrupti consequatur.
          </p>
        </div>
      </div>
      {isTablet ? (
        <div className="fachada">
          <img src={fachada1} alt="fachada" />
        </div>
      ) : (
        <div className="fachada">
          <img src={fachada} alt="fachada" />
        </div>
      )}
    </section>
  );
}

export default Sobre;
