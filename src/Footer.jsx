import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

    <footer className="footer">
      <div className="column">
        <h2>MobileStore</h2>
        <img className='footer-img' src="./photos/mobilestore.png" alt="ourlogo" />
      </div>
      <div className="column">
        <ul>
            {/* Sätt in A tagg på alla länkar */}
            <li>FAQ</li>
            <li>About Us</li>
            <li>Forum</li>
            <li>Contact</li>
            <li>Support</li>
        </ul>
      </div>
      <div className="column">
        <h2>Mobilestore</h2>
        <h4>Address</h4>
        <p>Blabla vägen 2, Stockholm</p>

      </div>
    </footer>
    );
  };

export default Footer;