import React from 'react';
import { useLang } from '../../context/LanguageContext';
import { FaWhatsapp, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  // Extraemos t (textos) y contactLinks (URLs) del Contexto
  const { t, contactLinks } = useLang();

  // Mapeamos los datos combinando los iconos con las traducciones y links del contexto
  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      label: t.contact_whatsapp, // Usamos la traducción del context
      url: contactLinks.whatsapp
    },
    {
      icon: <FaEnvelope />,
      label: t.contact_email, // Usamos la traducción del context
      url: contactLinks.email
    },
    {
      icon: <FaLinkedinIn />,
      label: t.contact_linkedin, // Usamos la traducción del context
      url: contactLinks.linkedin
    }
  ];

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-box">
        {/* Textos traducibles para el título y subtítulo */}
        <p className="contact-pretitle">{t.contact_subtitle}</p>
        <h2 className="contact-title">{t.contact_title}</h2>
        
        <div className="contact-links-container">
          {socialLinks.map((item, index) => (
            <a 
              key={index} 
              href={item.url} 
              target="_blank" 
              rel="noreferrer" 
              className="contact-item"
            >
              <div className="contact-icon">
                {item.icon}
              </div>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;