import React from 'react';
import '../../../styles/Header.css';

const Header: React.FC = () => {
  return (
    <div className="header-container">
      {/* Background bar */}
      <div className="header-background" />
      
      {/* Logo */}
      <img 
        className="header-logo" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/b14bd17cd73b3500f16d387463f2e8366bfb2fd2?width=180" 
        alt="ABC Logo" 
      />
      
      {/* Vaccination button */}
      <div className="vaccination-button">
        <span className="vaccination-text">Vaccination</span>
      </div>
      
      {/* Login button */}
      <div className="login-button">
        <span className="login-text">Log In</span>
      </div>
    </div>
  );
};

export default Header;
