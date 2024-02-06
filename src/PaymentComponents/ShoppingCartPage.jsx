import React from 'react';
import { useCart } from '../Context/CartContext.jsx';
import { Link, useNavigate } from 'react-router-dom';
import './Payment.css';


const ShoppingCartPage = () => {
  
  const navigate = useNavigate();
  const { cart, getTotal } = useCart();
  const handleConfirmation = () => {
    const queryParams = cart.map((item) => {
      return `title=${encodeURIComponent(item.attributes.Title)}&price=${item.attributes.Price}`;
    }).join('&');

    navigate(`/PurchasePage?${queryParams}`);
  };

  return (
    <div className="container">
      <h1 className="thx">Varukorg</h1>

      <div className="grid-confirm">
        <div className="grid-confirm-item">
          <strong>Produkter</strong> <br />
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.attributes.Title}</p>
              <strong>Pris: {item.attributes.Price} kr</strong>
            </div>
          ))}
          <br />
          <strong>Totalt: {getTotal().toFixed(2)} kr</strong> <br />

          <Link to="/">
            <button>Handla mer</button>
          </Link>{' '}
          <button onClick={handleConfirmation}>Gå vidare</button>
          
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
