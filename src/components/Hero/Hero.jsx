import React from 'react';
import { useLang } from '../../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLang();

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-frame">
        <div className="hero-content">
          <h1 className="hero-name">{t.hero_title}</h1>
          <div className="hero-badge">
            <span className="hero-role">{t.hero_subtitle}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;