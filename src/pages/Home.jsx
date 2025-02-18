import React, { useState } from 'react';
import femmeBureau from "../assets/femmeBureau.svg";

const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <a href="#home">Accueil</a>
        <a href="#projects">Projets</a>
        <a href="#competencies">Compétences</a>
        <a href="#parcours">Parcours</a>
        <a href='#Apropos'>À propos</a>
        <a href="#contact">Contact</a>
        {/* Menu Burger */}
        <div className="burger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#home">Accueil</a>
          <a href="#projects">Projets</a>
          <a href="#competencies">Compétences</a>
          <a href="#parcours">Parcours</a>
          <a href='#Apropos'>À propos</a>
          <a href="#contact">Contact</a>
        </div>
      )}

      <div className='bloc-centre'>
        <div className="header">
          <div className="illustration-cloud"></div>
          <h3 className='titleHome'>Je suis Sam 🚀 🖥️<br /><span>Développeuse Web</span></h3>
          <p>Passionnée par le développement web, je crée des expériences numériques modernes et accessibles.</p>
          <p className='specialisteReact'>Spécialisée en React.js, je développe des expériences utilisateur performantes et intuitives.</p>
          <button>Développeur web</button>
        </div>
        <div className="illustration">
          <img src={femmeBureau} alt="Illustration femme de bureau" className="illustration-image" />
        </div>
          {/* Background Circles */}
      <div className="circle backgroundd-circle-0"></div>
      <div className="circle backgroundd-circle-1"></div>
      <div className="circle backgroundd-circle-2"></div>
      <div className="circle backgroundd-circle-3"></div>

      </div>
    </div>
  );
};

export default Home;