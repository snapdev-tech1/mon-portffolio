import React from 'react';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Competencies from './pages/Competencies';
import Parcours from './pages/Parcours';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import Footer from './pages/Footer';


const App = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="competencies">
        <Competencies />
      </section>

      <section id="parcours">
        <Parcours />
      </section>

      <section id="Apropos">
        <Apropos />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;