import React from "react";
import guinness from "../../assets/videoguinness.mp4";
import "./home.css";

function Home() {
  return (
    <section id="home">
    <div>
      <video loop autoPlay>
        <source src={guinness} type="video/mp4" />
      </video>
    </div>
    </section>
  );
}

export default Home;
