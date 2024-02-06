import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductsCss/Products.css';
import { useCart } from '../Context/CartContext.jsx';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/products?populate=*');
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='productContainer'>
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
              <button onClick={() => handleAddToCart(product)}>Köp</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
