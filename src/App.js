import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Skills from './components/skills/skill';
import Experience from './components/experience/experience';
import Education from './components/education/education';
import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
function App() {
  const [yearsOfExperience, setYearsOfExperience] = useState(null);
// Reference for the content to download as PDF
const contentRef = useRef();
  // Callback to receive years of experience from Header and pass it to App state
  const handleExperienceCalculated = (experience) => {
    setYearsOfExperience(experience);
  };
   // Function to download content as PDF
   const downloadPDF = () => {
    console.log("Download PDF button clicked!"); // Debugging
    const element = contentRef.current; // Get the content to be downloaded as PDF

    // Custom options for PDF
    const options = {
      filename: 'Swangiti_sharma_resume.pdf', // PDF title
      html2canvas: { scale: 2, logging: false, dpi: 192 }, // Optional: Improve image quality
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        margin: { top: 0, left: 10, bottom: 30, right: 10 }, // Custom margins (including bottom margin)
        pageSize: 'a4',
      },
    };

    // Convert content to PDF and apply the options
    html2pdf()
      .from(element)
      .set(options)
      .save(); // Trigger the download
  };
  return (
    <>
    <div className="App" ref={contentRef}>
 <Header onExperienceCalculated={handleExperienceCalculated}/>
 {yearsOfExperience && <About yearsOfExperience={yearsOfExperience} />}
      <Skills />
      <Experience />
      <Education />
      </div>
      <button className="download-button App" onClick={downloadPDF}>
  Download Resume as PDF
</button>
    
    </>
  );
}

export default App;
