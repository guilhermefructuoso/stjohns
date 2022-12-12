import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import guinness from "../../assets/videoguinness.gif";
import guinness1 from "../../assets/videoguinness.mp4";
import whats from "../../assets/whatsapp.png";

import "./home.css";

function Home() {
  const isTablet = useMediaQuery("(max-width: 700px)");
  return (
    <section id="home">
      {isTablet ? (
        <div>
          <img src={guinness} alt="trevo" />
        </div>
      ) : (
        <div>
          <video loop autoPlay muted>
            <source src={guinness1} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="whats">
        <a
          href="http://wa.me/5511982027297?text=Olá, gostaria de fazer uma reserva!"
          target="-blank"
        >
          <img src={whats} alt="botão whatsapp" width={75} height={75} />
        </a>
      </div>
    </section>
  );
}

export default Home;
