import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import guinness from "../../assets/videoguinness.gif";
import guinness1 from "../../assets/videoguinness.mp4";

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
    </section>
  );
}

export default Home;
