import React from 'react';
import './Header.css';
import 'AboutUsPage';

const Header = () => {
  return (
    <header>
        {/* 
        Lägg en A tagg för att länka till "homepage" sen 
        Kan även separera Navbar och header. Navbaren kan vara position absolut och header relative. Då följer navbaren med hela tiden.
        */}
      <img className='logo-img-header' src="./photos/mobilestore.png" alt="our-logo" />
      <h1 className='h1-header'>MobileStore</h1>
      <nav>
        <ul>
          <li><a href="/">Hem</a></li>
          <li><a href="AboutUsPage">Gå till Om Oss</a></li>
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

