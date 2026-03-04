import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  es: {
    nav: ["INICIO", "SOBRE MI", "HERRAMIENTAS", "PROYECTOS", "CONTACTO"],
    hero_title: "HOLA! SOY GUSTAVO LUJÁN",
    hero_subtitle: "DESARROLLADOR FULLSTACK",
    projects_label: "PROYECTOS",
    view_github: "VER GITHUB",
    // Sobre Mí
    about_title: "SOBRE MÍ",
    about_p1: "Mi nombre es Gustavo y soy graduado de la carrera Desarrollo Full-Stack en Coderhouse, donde sigo estudiando para perfeccionarme y aprender nuevas tecnologías.",
    about_p2: "Mi nivel de ingles es intermedio, bueno a nivel escrito, sigo mejorando y aprendiendo para tener una buena fluidez en la comunicación oral.",
    about_p3: "Me considero una persona muy activa y curiosa. Disfruto el proceso de planificar, investigar y ejecutar cada uno de mis proyectos.",
    btn_more: "LEER MÁS",
    btn_less: "LEER MENOS",
    // Herramientas
    tools_title: "HERRAMIENTAS",
    // Contacto
    contact_subtitle: "¿TE GUSTÓ LO QUE VISTE?",
    contact_title: "¡TRABAJEMOS JUNTOS!",
    contact_whatsapp: "Hablame en Whatsapp",
    contact_email: "Enviame un email",
    contact_linkedin: "Conectemos en LinkedIn"
  },
  en: {
    nav: ["HOME", "ABOUT ME", "TOOLS", "PROJECTS", "CONTACT"],
    hero_title: "HELLO! I'M GUSTAVO LUJÁN",
    hero_subtitle: "FULLSTACK DEVELOPER",
    projects_label: "PROJECTS",
    view_github: "VIEW GITHUB",
    // About Me
    about_title: "ABOUT ME",
    about_p1: "My name is Gustavo and I am a Full-Stack Development graduate from Coderhouse, where I continue to study to improve myself and learn new technologies.",
    about_p2: "My English level is intermediate, good at a written level, I continue improving and learning to have a good fluency in oral communication.",
    about_p3: "I consider myself a very active and curious person. I enjoy the process of planning, researching, and executing each of my projects.",
    btn_more: "READ MORE",
    btn_less: "READ LESS",
    // Tools
    tools_title: "TOOLS",
    // Contact
    contact_subtitle: "LIKED WHAT YOU SAW?",
    contact_title: "LET'S WORK TOGETHER!",
    contact_whatsapp: "Message me on Whatsapp",
    contact_email: "Send me an email",
    contact_linkedin: "Connect on LinkedIn"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es');
  
  const t = translations[lang];
  
  const toggleLang = () => setLang(l => (l === 'es' ? 'en' : 'es'));

  // Links actualizados y corregidos
  const contactLinks = {
    whatsapp: "https://wa.me/5491133047796", 
    email: "mailto:tavolujan13@gmail.com",
    linkedin: "https://www.linkedin.com/in/gustavo-ariel-luján-894792166"
  };

  return (
    <LanguageContext.Provider value={{ t, lang, toggleLang, contactLinks }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);