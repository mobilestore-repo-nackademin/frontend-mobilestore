// Homepage.jsx
import React from 'react';
import './Homepage-Css/HeroSection.css'; // Skapa en separat CSS-fil för att styla komponenten

const HeroSection = () => {
  return (
    <div className="container">
      <div className="hero">
        <button>Gå till erbjudande</button>
      </div>

      <div className="boxes">
        <div className="box box1">
          <h2>Mobiler</h2>
          <button>Köp</button>
        </div>
        <div className="box box2">
          <h2>Mobilskal</h2>
          <button>Köp</button>
        </div>
        <div className="box box3">
          <h2>Mobilladdare</h2>
          <button>Köp</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
