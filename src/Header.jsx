import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
        {/* Lägg en A tagg för att länka till "homepage" sen */}
      <img src="./photos/mobilestore.png" alt="our-logo" />
      <h1>MobileStore</h1>
      <nav>
        <ul>
          <li><a href="/">Hem</a></li>
          <li><a href="/om">Mobiltelefoner</a></li>
          <li><a href="/om">Skal</a></li>
          <li><a href="/om">Laddare</a></li>
          <li><a href="/kontakt">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

