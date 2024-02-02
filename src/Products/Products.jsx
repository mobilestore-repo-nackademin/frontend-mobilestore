// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductsCss/ProductList.css';
import UseCart from '../Components/UseCart.jsx'  // Importera UseCart

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);  // Lägg till en state för varukorgen

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/products?populate=*');
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      {
        title: product.attributes.Title,
        price: product.attributes.Price,
      },
    ]);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="product-list">
        {products.map((product) => {
          const attributes = product.attributes || {};
          const photoData = attributes.Photos.data.attributes || {};

          return (
            <div key={product.id} className="product-card">
              {photoData.url && <img src={`http://localhost:1337${photoData.url}`} alt={attributes.Title} />}
              <h3>{attributes.Title}</h3>
              <p>{attributes.Description}</p>
              <p>Pris: {attributes.Price} kr</p>
              <button onClick={() => addToCart(product)}>Köp</button>
            </div>
          );
        })}
      </div>
      {/* Skicka varukorgsdata till UseCart */}
      <UseCart varukorgOpen={false} cartItems={cartItems} />
    </div>
  );
};

export default ProductList;
