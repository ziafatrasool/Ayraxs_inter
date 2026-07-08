import React from 'react';
import logoImg from '../../assets/logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImg} alt="Greelance Logo" className="logo-image" />
    </div>
  );
};

export default Logo;
