import React from 'react';
import './About.css';

const About = ({ yearsOfExperience }) => {
  return (
    <section id="about" className="resume-section">
      <h2>Summary</h2>
      <p className="summary-text">
      {yearsOfExperience} years of IT industry experience encompassing a wide range of skill sets, roles, and industry verticals. Extensive experience with development, customizations, and implementation of software applications using various UI development technologies such as HTML, CSS, Bootstrap, JavaScript, Angular, React 18, TypeScript, Ag-Grid, MongoDB, Jasmine, Karma, Jira, Jenkins, Python, Jest.
      </p>
    </section>
  );
};

export default About;