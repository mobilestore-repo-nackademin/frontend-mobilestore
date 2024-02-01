import React from 'react';
import { Link } from 'react-router-dom';
import '../CssFolder/Navbar.css'
const Navbar = () => {
  return (

      <nav className="nav-container">
        <ul className="nav-list">
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/Phones">Mobiltelefoner</Link></li>
          <li><Link to="/Chargers">Laddare</Link></li>
          <li><Link to="/Cases">Mobilskal</Link></li>
          <li><Link to="/AboutUs">Om oss</Link></li>
          <li><Link to="/Support">Kontakt</Link></li>
          <li><Link to="/Products">Produkter</Link></li>
          <li><Link to="/Terms">Terms</Link></li>
          <li><Link to="/Delivery">Delivery</Link></li>

          {/* Kasta nedan sen*/}
          <li><Link to="/ShoppingCartPage">kassa</Link></li>
          <li><Link to="/ChoseDelivery">Leverans</Link></li>
          <li><Link to="/ChosePayment">Betalsätt</Link></li>
          <li><Link to="/CardPayment">Kort</Link></li>
          <li><Link to="/InvoicePayment">Faktura</Link></li>
          <li><Link to="/ConfirmedPage">Bekräftelse</Link></li>
          
          
          
        </ul>
      </nav>
      

  );
};

export default Navbar;