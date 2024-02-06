import React from 'react';
import { Link } from 'react-router-dom';
import '../CssFolder/Navbar.css'
const Navbar = () => {
  return (

      <nav className="nav-container">
        <ul className="nav-list">
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/Support">Kontakt</Link></li>
          <li><Link to="/Products">Produkter</Link></li>
        </ul>
      </nav>
      

  );
};

export default Navbar;