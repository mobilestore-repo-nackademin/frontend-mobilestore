import React from 'react';
import { Link } from 'react-router-dom';
import '../CssFolder/Header.css'
import Cart from './CartIcon';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img className='logo-img-header' src="./photos/mobilestore.png" alt="our-logo" />
      </div>

      <div className='emptySpaceContainer'>
        <h1 className='h1-header'>MobileStore</h1>
      </div>
      <div className='cartContainer'>
        <Cart/>
      </div>
    </header>
  );
};

export default Header;