import React from 'react'

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiAngularSimple,
  DiMysql,
  DiReact,
  DiPython,
  DiSass,
  DiPhp,
  DiJava,


} from 'react-icons/di';
import { SiTypescript, SiPowerbi } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

import './../styles/components/technologiescontainer.sass';

const technologies = [
  { id: "html5", name: "HTML5", icon: <DiHtml5 />},
  { id: "css", name: "CSS3", icon: <DiCss3 />},
  { id: "js", name: "JavaScript", icon: <DiJsBadge />},
  { id: "react", name: "React", icon: <DiReact />},
  { id: "angular", name: "Angular", icon: <DiAngularSimple />},
  { id: "ts", name: "TypeScript", icon: <SiTypescript />},
  { id: "sass", name: "Sass", icon: <DiSass />},
  { id: "bi", name: "Powerbi", icon: <SiPowerbi />},
  { id: "figma", name: "Figma", icon: <FaFigma />},
  { id: "mysql", name: "MySQL", icon: <DiMysql />},
  { id: "python", name: "Python", icon: <DiPython />},
  { id: "php", name: "PHP", icon: <DiPhp />},
  { id: "java", name: "Java", icon: <DiJava />},
  
];

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech) => (
          <div className='technology-card' id={tech.id} key={tech.id}>
            {tech.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer