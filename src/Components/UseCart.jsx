import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UseCart = ({ varukorgOpen, cartItems }) => {
  useEffect(() => {
    console.log('Cart Items:', cartItems);
  }, [cartItems]);

  return (
    <div className="varukorg-dropdown">
      {varukorgOpen && (
        <div className="varukorg-content">
          <p>Varukorgsinnehåll</p>
          {/* Loopa igenom varukorgsobjekt och visa titel och pris */}
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> - {item.price} kr
              </li>
            ))}
          </ul>
          <Link to='/ShoppingCartPage'><button>Till Kassa</button></Link>
        </div>
      )}
    </div>
  );
};

export default UseCart;
