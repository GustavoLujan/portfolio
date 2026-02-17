import React, { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import miFoto from '../../assets/perfil.jpg'; 
import './About.css';

const About = () => {
  const { t } = useLang();
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about-section" id="sobremi">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="orange-border"></div>
          <img src={miFoto} alt="Gustavo Luján" className="profile-photo" />
        </div>

        <div className="about-content">
          <h2>{t.about_title}</h2>
          
          <div className="about-text-wrapper">
            <p>{t.about_p1}</p>
            <p>{t.about_p2}</p>

            <div className={`more-text ${showMore ? 'show' : ''}`}>
              <p>{t.about_p3}</p>
            </div>

            <button 
              className="read-more-btn" 
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? t.btn_less : t.btn_more}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;