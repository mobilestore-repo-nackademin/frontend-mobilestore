// CartProvider.jsx
import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const findProductIndex = (productId) => {
    return cart.findIndex((product) => product.id === productId);
  };

  const addToCart = (product) => {
    const productPrice = product.attributes && product.attributes.Price;

    if (productPrice !== undefined) {
      const price = parseFloat(productPrice);

      if (!isNaN(price) && price >= 0) {
        const productIndex = findProductIndex(product.id);

        if (productIndex !== -1) {
          // Produkten finns redan i varukorgen, öka antalet istället för att lägga till en ny rad
          const updatedCart = [...cart];
          updatedCart[productIndex].quantity += 1;
          setCart(updatedCart);
        } else {
          // Produkten finns inte i varukorgen, lägg till en ny rad
          const updatedCart = [...cart, { ...product, price, title: product.attributes.Title, quantity: 1 }];
          setCart(updatedCart);
        }
      } else {
        console.error('Invalid price:', productPrice);
      }
    } else {
      console.error('Price is undefined for product:', product);
    }
  };

  const removeFromCart = (productId) => {
    const productIndex = findProductIndex(productId);

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[productIndex].quantity > 1) {
        // Minska antalet om det är mer än en av samma produkt
        updatedCart[productIndex].quantity -= 1;
      } else {
        // Ta bort produkten helt om det är bara en kvar
        updatedCart.splice(productIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    const total = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    console.log('Total:', total);
    return total;
  };

  const contextValue = useMemo(() => {
    console.log('Cart:', cart);
    return { cart, addToCart, removeFromCart, clearCart, getTotal };
  }, [cart]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
