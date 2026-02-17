import React, { useState } from 'react'; // ¿
import { LanguageProvider, useLang } from './context/LanguageContext';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Tools from './components/Tools/Tools';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Contact from './components/Contacto/Contact';
import Footer from './components/Footer/Footer';


import imgRhcp from './assets/rhcp.jpg';
import imgCirse from './assets/cirse.jpg';
import imgInmob from './assets/inmob.jpg';
import imgMovie from './assets/movie.jpg';

import './index.css';
import './components/ProjectCard/ProjectCard.css'; 

const PortfolioContent = () => {
  const { t, toggleLang, lang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    { id: 1, title: "RHCPFAN", githubUrl: "https://github.com/GustavoLujan/rhcpfan", webUrl: "https://gustavolujan.github.io/rhcpfan/", img: imgRhcp },
    { id: 2, title: "CIRSE CLOTHES", githubUrl: "https://github.com/GustavoLujan/cirse-clothes", webUrl: "https://gustavolujan.github.io/cirse-clothes/", img: imgCirse },
    { id: 3, title: "INMOBILIARIA BROWN", githubUrl: "https://github.com/GustavoLujan/inmob-brown", webUrl: "https://gustavolujan.github.io/inmob-brown/", img: imgInmob },
    { id: 4, title: "MOVIE DEST", githubUrl: "https://github.com/GustavoLujan/moviedest", webUrl: "https://gustavolujan.github.io/moviedest/", img: imgMovie }
  ];

  return (
    <div className="app-wrapper">
      <nav className="navbar">
        {/*  Botón Hamburguesa */}
        <div 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="nav-empty-space"></div> 

        {/* 4. Clase dinámica 'active' para los links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {t.nav.slice(1).map((item, i) => (
            <li key={i}>
              <a 
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                onClick={() => setMenuOpen(false)} 
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="lang-switch-container">
          <span>ES</span>
          <label className="switch">
            <input type="checkbox" onChange={toggleLang} checked={lang === 'en'} />
            <span className="slider"></span>
          </label>
          <span>EN</span>
        </div>
      </nav>

      <Hero />
      <div id="sobremi"><About /></div>
      <div id="herramientas"><Tools /></div>

      <section className="projects-section" id="proyectos">
        <div className="container">
          <h2 className="projects-title">{t.projects_label}</h2>
          <div className="projects-grid">
            {projects.map(p => (
              <ProjectCard 
                key={p.id}
                title={p.title} 
                image={p.img} 
                githubUrl={p.githubUrl}
                webUrl={p.webUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <div id="contacto"><Contact /></div>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}