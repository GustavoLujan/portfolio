import React, { useState } from 'react'; // ¿
import { LanguageProvider, useLang } from './context/LanguageContext';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Tools from './components/Tools/Tools';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Contact from './components/Contacto/Contact';
import Footer from './components/Footer/Footer';


import imgCommerceAI from './assets/commerce.jpg';
import imgInmob from './assets/inmob.jpg';
import imgPsc from './assets/psc.png';
import imgMovie from './assets/movie.jpg';

import './index.css';
import './components/ProjectCard/ProjectCard.css'; 

const PortfolioContent = () => {
  const { t, toggleLang, lang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "COMMERCE AI HUB",
      githubUrl: "https://github.com/GustavoLujan/commerce-ai-hub",
      webUrl: "https://gustavolujan.github.io/commerce-ai-hub/",
      img: imgCommerceAI,
      descEs: "Plataforma de BI para retail con dashboard de KPIs en tiempo real, análisis de ventas por región y chat de IA con Claude.",
      descEn: "Retail BI platform with real-time KPI dashboard, regional sales analysis, and AI chat powered by Claude.",
      tech: ["React", "TypeScript", "FastAPI", "Claude API", "Recharts"]
    },
    {
      id: 2,
      title: "INMOB BROWN",
      githubUrl: "https://github.com/GustavoLujan/inmob-brown",
      webUrl: "https://github.com/GustavoLujan/inmob-brown",
      img: imgInmob,
      descEs: "Sitio web para inmobiliaria con listado de propiedades, galería de imágenes y formulario de contacto.",
      descEn: "Real estate website with property listings, image gallery and contact form.",
      tech: ["React", "Firebase", "React Query", "Vite"]
    },
    {
      id: 3,
      title: "PSCINDUMENTARIA",
      githubUrl: "https://github.com/GustavoLujan/pscindumentaria",
      webUrl: "https://pscindumentaria.com.ar",
      img: imgPsc,
      descEs: "Sitio web de tienda de indumentaria con catálogo de productos, navegación por secciones y diseño orientado a la venta.",
      descEn: "Clothing store website with product catalog, section navigation and sales-oriented design.",
      tech: ["React", "React Router", "Font Awesome"]
    },
    {
      id: 4,
      title: "MOVIE DEST",
      githubUrl: "https://github.com/GustavoLujan/moviedest",
      webUrl: "https://gustavolujan.github.io/moviedest/",
      img: imgMovie,
      descEs: "App para descubrir películas y series con búsqueda, detalle de títulos y animaciones fluidas.",
      descEn: "App to discover movies and TV shows with search, title details and smooth animations.",
      tech: ["React", "Bootstrap", "Axios", "Framer Motion", "Vite"]
    }
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
                description={lang === 'es' ? p.descEs : p.descEn}
                tech={p.tech}
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