// src/components/Skills.js
import React from 'react';
import './Skills.css'; // Add a separate CSS file for skills section styling

const Skills = () => {
  return (
    <section id="skills" className="resume-section">
      <h2>Core Competencies</h2>
      <div className="skills-grid">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>MongoDB</li>
          <li>Jenkins</li>
          <li>JIRA</li>
        </ul>
        <ul>
          <li>Angular 12/15/16</li>
          <li>Cypress, Karma, and Jasmine</li>
          <li>TypeScript</li>
          <li>Bootstrap/SASS/Tailwind CSS</li>
          <li>Angular Material/Animation/UI-Material</li>
          <li>GIT/Bit-bucket</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;