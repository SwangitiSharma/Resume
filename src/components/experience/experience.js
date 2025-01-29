// src/components/Experience.js
import React from 'react';
import './Experience.css'; // Add a separate CSS file for experience section styling

const Experience = () => {
  return (
    <section id="experience" className="resume-section">
      <h2 className="page-break">Experience</h2>

      <div className="job experience-section">
        <h3>Pure Storage, Member of Technical Staff (MTS-3)</h3>
        <p className="job-duration">07/2024 - Present | Bangalore</p>
        <ul>
          <li>Revamped the Px-Central application by integrating components from Storybook, significantly enhancing its modularity and maintainability.</li>
          <li>Designed and created new reusable components in Storybook, contributing to the UI library and fostering consistency across projects.</li>
        </ul>
      </div>
      <div className="job">
        <h3>Vestas, SDE-2</h3>
        <p className="job-duration">12/2021 - 07/2024 | Bangalore</p>
        <ul>
          <li>Designed and developed the best-in-class Sass application to help customers track asset performance and visualization in renewable energy.</li>
          <li>Implemented all front-end related functionality using HTML, CSS, Bootstrap, JavaScript, Angular 9.</li>
          <li>Written +80% of test coverage using Jasmine and Karma to ensure code quality and minimize defect-prone code.</li>
          <li>Created a product from scratch on React JS along with small enhancements on Python.</li>
          <li>Mentored 3 team members, enabling them to achieve professional growth and personal goals.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Société Générale, Application Developer</h3>
        <p className="job-duration">03/2021 - 12/2021 | Bangalore</p>
        <ul>
          <li>Scaled the E-Cred application from an idea to market using HTML, CSS, Bootstrap, JavaScript & Angular.</li>
          <li>Actively involved in cross-functional stakeholder conversations to enable high-integrity product development.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Capgemini, Associate Consultant</h3>
        <p className="job-duration">08/2019 - 03/2021 | Bangalore</p>
        <ul>
          <li>Collaborated with designers to create clean interfaces and intuitive interactions and experiences.</li>
          <li>Involved in complete SDLC including architecture, analysis, design, development, testing, implementation & maintenance of the application.</li>
          <li>Implemented all front-end related functionality using HTML, CSS, Bootstrap, JavaScript, Angular.</li>
          <li>Fixed defects and provided enhancements.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Silly Punter Designs Pvt Ltd, UI Developer</h3>
        <p className="job-duration">07/2017 - 08/2019 | Bangalore</p>
        <ul>
          <li>Involved in complete SDLC including architecture, analysis, design, development, testing, implementation & maintenance of the E-Commerce platform.</li>
          <li>Implemented all front-end related functionality using Web 2.0 technologies and Angular.</li>
        </ul>
      </div>
      {/* <div className="page-margin"></div> */}
    </section>
  );
};

export default Experience;