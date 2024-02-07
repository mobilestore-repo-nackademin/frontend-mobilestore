// CartPopup.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext.jsx';
import '../CssFolder/Header.css';

const CartPopup = ({ onClose }) => {
  const { cart, getTotal, removeFromCart, addToCart } = useCart();
  const cartPopupClass = cart.length > 0 ? 'cart-popup-filled' : 'cart-popup-empty';

  const handleCheckoutAndClose = () => {
    onClose();
    // kan ta bort den här funktionen och sätta handleCheckout på "till kassan" om något går fel
  };

  return (
    <div className={`popup ${cartPopupClass}`}>
      <h2 className="cart-title">Varukorg</h2>
      <div className="cart-line"></div>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <strong>Pris: {item.price} kr</strong>
            <span>Antal: {item.quantity}</span>
            <div className="quantity-buttons">
              <button className="quantity-buttons-minus" onClick={() => removeFromCart(item.id)}>-</button>
              <button className="quantity-buttons-plus" onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-line"></div>
      <div className="cart-total">
        <strong>Totalt: {getTotal().toFixed(2)} kr</strong>
      </div>

      <div className="buttons-container">
        <button onClick={onClose}>
          Stäng
        </button>
        <Link to="/ShoppingCartPage">
          <button onClick={handleCheckoutAndClose}>
            Till kassan
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPopup;
