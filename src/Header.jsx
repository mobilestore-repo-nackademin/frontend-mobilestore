import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <header>

      <img className='logo-img-header' src="./photos/mobilestore.png" alt="our-logo" />
      <h1 className='h1-header'>MobileStore</h1>

      <nav>
        <ul>
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/Phones">Mobiltelefoner</Link></li>
          <li><Link to="/Chargers">Laddare</Link></li>
          <li><Link to="/Cases">Mobilskal</Link></li>
          <li><Link to="/AboutUs">Om oss</Link></li>
          <li><Link to="/Support">Kontakt</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;

