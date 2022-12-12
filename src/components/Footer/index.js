import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import logo from "../../assets/footer_logo.png";

function Footer() {
  return (
    <section id="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="time">
          <h4>Horário de funcionamento</h4>
          <p>Quarta e quinta das 16h às 00h</p>
          <p>Sexta e Sábado das 16h às 2h</p>
          <p>Domingo das 16h às 00h</p>
        </div>
        <div className="social">
          <div className="social-title">
            <h4>Redes Sociais</h4>
          </div>
          <div className="footer-links">
            <div className="footer_link">
              <a
                href="https://instagram.com/stjohnsenseada?igshid=YmMyMTA2M2Y="
                target="_blanck"
              >
                <BsInstagram color="#ccc" size={25} />
              </a>
            </div>
            <div className="footer_link">
              <a
                href="https://pt-br.facebook.com/stjohnsenseada/"
                target="_blanck"
              >
                <BsFacebook color="#ccc" size={25} />
              </a>
            </div>
            <div className="footer_link">
              <a
                href="https://api.whatsapp.com/send?phone=5511982027297"
                target="_blanck"
              >
                <BsWhatsapp color="#ccc" size={25} />
              </a>
            </div>
            <div className="footer_link">
              <a href="https://www.spotify.com/" target="_blanck">
                <BsSpotify color="#ccc" size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-contact">
          <div className="phone">
            <div className="phone-icon">
              <BsTelephoneFill color="#ccc" size={25} />
            </div>
            <div className="phone-number">
              <p>(13) 3324-1157</p>
            </div>
          </div>
          <div className="email">
            <div className="email-icon">
              <TfiEmail color="#ccc" size={25} />
            </div>
            <div className="email-adress">
              <p>contato@stjohnsbeerstore.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
