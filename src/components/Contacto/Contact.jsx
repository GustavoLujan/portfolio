import React from 'react';
import { useLang } from '../../context/LanguageContext';
import { FaWhatsapp, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
 
  const { t, contactLinks } = useLang();


  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      label: t.contact_whatsapp, 
      url: contactLinks.whatsapp
    },
    {
      icon: <FaEnvelope />,
      label: t.contact_email, 
      url: contactLinks.email
    },
    {
      icon: <FaLinkedinIn />,
      label: t.contact_linkedin, 
      url: contactLinks.linkedin
    }
  ];

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-box">
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