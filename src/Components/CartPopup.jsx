// CartPopup.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext.jsx';

const CartPopup = ({ onClose }) => {
  const { cart, getTotal, handleCheckout } = useCart();
  const handleCheckoutAndClose = () => {
  
    onClose();

    // kan ta bort den här funktionen och sätta handleCheckout på "till kassa" om något går fel
  };
  return (
    <div className="popup">
      <h2 className="cart-title">Varukorg</h2>
      <div className="cart-line"></div>

      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.attributes.Title}</p>
            <strong>Pris: {item.attributes.Price} kr</strong>
          </div>
        ))}
      </div>
      <div className="cart-line"></div>
      <div className="cart-total">
        <strong>Totalt: {getTotal().toFixed(2)} kr</strong>
      </div>
      <div className="buttons-container">
        <button className="close-button" onClick={onClose}>
          Stäng
        </button>
        <Link to="/ShoppingCartPage">
          <button className="checkout-button" onClick={handleCheckoutAndClose}>
            Till kassan
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPopup;
