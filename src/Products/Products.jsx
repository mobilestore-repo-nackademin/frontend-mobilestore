import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductsCss/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/products?populate=*');
      console.log(response.data);
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    console.log(`Added to cart: ${product.attributes.Title}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => {
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
  );
};

export default ProductList;
