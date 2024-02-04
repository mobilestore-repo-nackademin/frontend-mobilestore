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

  const addToCart = (product) => {
    const productPrice = product.attributes && product.attributes.Price;

    if (productPrice !== undefined) {
      const price = parseFloat(productPrice);

      if (!isNaN(price) && price >= 0) {
        const updatedCart = [...cart, { ...product, price, title: product.attributes.Title }];
        setCart(updatedCart);
      } else {
        console.error('Invalid price:', productPrice);
      }
    } else {
      console.error('Price is undefined for product:', product);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    const total = cart.reduce((total, product) => total + product.price, 0);
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
