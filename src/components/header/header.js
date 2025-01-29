import React, { useState, useEffect } from 'react';
import './Header.css';
const Header = ({ onExperienceCalculated }) => {
  const [yearsOfExperience, setYearsOfExperience] = useState(null);

  useEffect(() => {
    // Perform the years of experience calculation inside the Header component
    const startDate = new Date(2017, 6); // July 2017 (month is 0-indexed)
    const currentDate = new Date();
    const years = (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25); // Convert milliseconds to years
    const formattedExperience = years.toFixed(1); // Format to 1 decimal place
    setYearsOfExperience(formattedExperience);

    // Pass the result back to the parent component (App.js)
    onExperienceCalculated(formattedExperience);
  }, [onExperienceCalculated]);

  // Image path (assuming the image is in the public folder)
  const imageUrl = process.env.PUBLIC_URL + '/swangiti.jpeg';
  const address = "Prestige Lakeside Habitat, Bangalore-560087";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const githubUrl = "https://github.com/SwangitiSharma?tab=repositories";
  return (
    <header className="resume-header">
      <div className="header-content">
        <div className="header-left">
          <img src={imageUrl} alt="Swangiti Sharma" className="profile-image" />
        </div>
        <div className="header-right">

          <h1>Swangiti Sharma</h1>
          <p className="subtitle">Frontend Developer with {yearsOfExperience} Years of Experience</p>
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> Address:{' '}
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="address-link">
                {address}
              </a>
            </p>
            <p><i className="fas fa-phone-alt"></i> Phone:{' '}
              <a href="tel:8884678295" className="phone-link">
                8884678295
              </a>{' '} | {' '}
              <i className="fas fa-envelope"></i> Email:{' '}
              <a href="mailto:swangitianshu@gmail.com" className="email-link">
                swangitianshu@gmail.com
              </a>
            </p>
            <p> <i className="fab fa-github"></i> GitHub:{' '}
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                Swangiti Sharma GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;