import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import "./nav.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    width: "300px",
    padding: "0",
    height: "auto",
    color: "#fff",
    background: "#222222",
    top: "180px",
    right: "auto",
    bottom: "auto",
    borderRadius: "8px",
    left: "75%",
    transform: "translate(-50%, -50%)",
    border: "none",
    scroll: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
};

function Nav() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  function handleOpenModal() {
    setIsModalOpened(true);
  }

  function handleCloseModal() {
    setIsModalOpened(false);
  }

  const isTablet = useMediaQuery("(max-width:1280px)");
  const isMobile = useMediaQuery("(max-width:700px)");
  customStyles.content.width = isMobile ? "100%" : "300px";
  customStyles.content.left = isMobile ? "50%" : "75%";

  return (
    <section id="nav">
      <nav className="nav-container">
        <div className="logo">
          <AnchorLink href="#nav">
            <img src={logo} alt="Sistema Logo" />
          </AnchorLink>
        </div>
        <div className="menu">
          {isTablet ? (
            <div className="menu-navi">
              <button
                className="modal-button"
                onClick={isModalOpened ? handleCloseModal : handleOpenModal}
              >
                {isModalOpened ? (
                  <RiCloseFill size={35} color="#fff" />
                ) : (
                  <GiHamburgerMenu size={30} color="#fff" />
                )}
              </button>
              <Modal isOpen={isModalOpened} style={customStyles}>
                <div className="menu-modal">
                  <div className="anchor-modal">
                    <AnchorLink href="#home">Home</AnchorLink>
                  </div>
                  <div className="anchor-modal">
                    <AnchorLink href="#sobrenos">Sobre nós</AnchorLink>
                  </div>

                  <div className="anchor-modal">
                    <AnchorLink href="#cardapio">Cardápio</AnchorLink>
                  </div>
                  <div className="anchor-modal">
                    <AnchorLink href="#agenda">Agenda</AnchorLink>
                  </div>
                  <div className="anchor-modal">
                    <AnchorLink href="#ambientes">Ambientes</AnchorLink>
                  </div>
                  <div className="anchor-modal">
                    <AnchorLink href="#contato">Contato</AnchorLink>
                  </div>
                </div>
              </Modal>
            </div>
          ) : (
            <div className="menu-anchor">
              <div className="anchor-modal">
                <AnchorLink href="#home">Home</AnchorLink>
              </div>
              <div className="anchor-modal">
                <AnchorLink href="#sobrenos">Sobre nós</AnchorLink>
              </div>
              <div className="anchor-modal">
                <AnchorLink href="#cardapio">Cardápio</AnchorLink>
              </div>
              <div className="anchor-modal">
                <AnchorLink href="#agenda">Agenda</AnchorLink>
              </div>
              <div className="anchor-modal">
                <AnchorLink href="#ambientes">Ambientes</AnchorLink>
              </div>
              <div className="anchor-modal">
                <AnchorLink href="#contato">Contato</AnchorLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </section>
  );
}

export default Nav;
