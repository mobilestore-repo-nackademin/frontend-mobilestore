// Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage-Css/HeroSection.css'; // Skapa en separat CSS-fil för att styla komponenten

const HeroSection = () => {
  return (
    <div className="container">
      <div className="hero">
      </div>

      <div className="boxes">
        <div className="box box1">
          <h2>Mobiler</h2>
          <Link to="/Products">
          <button>Köp</button>
          </Link>
        </div>
        <div className="box box2">
          <h2>Mobilskal</h2>
          <Link to="/Products">
          <button>Köp</button>
          </Link>
        </div>
        <div className="box box3">
          <h2>Mobilladdare</h2>
          <Link to="/Products">
          <button>Köp</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
