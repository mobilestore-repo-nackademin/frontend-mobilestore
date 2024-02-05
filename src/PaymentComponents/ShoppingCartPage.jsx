import React from 'react';
import { useCart } from '../Context/CartContext.jsx';
import { Link } from 'react-router-dom';
import './Payment.css';

const ShoppingCartPage = () => {
  const { cart, getTotal } = useCart();

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
          <Link to="/ChoseDelivery">
            <button>Välj leveranssätt</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
