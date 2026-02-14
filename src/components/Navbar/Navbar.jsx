import React from 'react';
import { useLang } from '../../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { t, lang, toggleLang } = useLang();
  return (
    <nav className="navbar">
      <div className="nav-right">
        <a href="#projects">{t.nav[0]}</a>
        <button onClick={toggleLang} className="lang-btn">{lang.toUpperCase()}</button>
      </div>
    </nav>
  );
};
export default Navbar;