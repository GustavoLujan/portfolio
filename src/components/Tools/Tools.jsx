import React from 'react';
import { useLang } from '../../context/LanguageContext';
import './Tools.css';

const Tools = () => {
  const { t } = useLang();

  const toolsList = [
    { name: "HTML5", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS3", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }, 
    { name: "React JS", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Next JS", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "Vite", icon: "https://cdn.worldvectorlogo.com/logos/vitejs.svg" },
    { name: "Redux", icon: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
    { name: "SASS", icon: "https://cdn.worldvectorlogo.com/logos/sass-1.svg" },
    { name: "Figma", icon: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg" }, 
    { name: "GitHub", icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
    { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    { name: "Photoshop", icon: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" },
    { name: "Tailwind", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  ];

  return (
    <section className="tools-section" id="herramientas">
      <div className="tools-container">
        <div className="tools-title">
          <h2>{t.tools_title}</h2>
        </div>
        
        <div className="tools-grid">
          {toolsList.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon-wrapper">
                <img src={tool.icon} alt={tool.name} loading="lazy" />
              </div>
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;