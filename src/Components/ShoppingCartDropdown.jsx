import React from 'react';
import '../CssFolder/shoppingcart.css'

const ShoppingCartDropdown = ({ cartItems }) => {
  // Implementera logik för varukorgen här
  return (
    <div className="shopping-cart-dropdown">
      {/* Rendera varukorgens innehåll */}
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          {/* Lägg till annan information om produkten */}
          
        </div>
      ))}
    </div>
  );
};

export default ShoppingCartDropdown;
