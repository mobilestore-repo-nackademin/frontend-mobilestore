import React, { useState } from 'react';
import { useCart } from '../Context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';
import '../CssFolder/Header.css';
import CartIcon from './CartIcon.jsx';
import CartPopup from './CartPopup.jsx'; // Importera CartPopup

const Header = () => {
  const { cart } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const navigate = useNavigate();

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleCheckout = () => {
    const checkoutUrl = `/ShoppingCartPage?total=${getTotal().toFixed(2)}`;
    console.log('Navigera till kassan med URL:', checkoutUrl);
    navigate(checkoutUrl);
  };

  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img className="logo-img-header" src="./photos/mobilestore.png" alt="our-logo" />
      </div>
      <div className="emptySpaceContainer">
        <h1 className="h1-header">MobileStore</h1>
      </div>
      <div className="cartContainer">
        <div className="cart-icon" onClick={toggleCartVisibility}>
          <CartIcon />
          <span className="cart-count">{cart ? cart.length : 0}</span>
        </div>
      </div>

      {/* Lägg till överlagring (overlay) och CartPopup */}
      {isCartVisible && (
        <>
          <div className="overlay" onClick={toggleCartVisibility}></div>
          <CartPopup onClose={toggleCartVisibility} />
        </>
      )}
    </header>
  );
};

export default Header;
