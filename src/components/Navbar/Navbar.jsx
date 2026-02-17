import React, { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { t, lang, toggleLang } = useLang();
  // Estado para controlar la apertura del menú en móviles
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* 1. Logo o Nombre */}
      <div className="nav-logo">GUSTAVO LUJÁN</div>

      {/* 2. Botón Hamburguesa (Visible solo en móviles vía CSS) */}
      <div 
        className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
        onClick={handleToggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* 3. Enlaces de navegación */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {t.nav.slice(1).map((item, index) => (
          <li key={index}>
            <a 
              href={`#${item.toLowerCase().replace(/\s/g, "")}`} 
              onClick={closeMenu}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* 4. Contenedor del Switch de Idioma */}
      <div className="lang-switch-container">
        <span>ES</span>
        <label className="switch">
          <input 
            type="checkbox" 
            onChange={toggleLang} 
            checked={lang === 'en'} 
          />
          <span className="slider"></span>
        </label>
        <span>EN</span>
      </div>
    </nav>
  );
};

export default Navbar;