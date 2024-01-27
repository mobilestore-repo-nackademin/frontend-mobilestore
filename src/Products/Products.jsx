import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gör en förfrågan till Strapi API för att hämta produkter
    axios.get('http://localhost:1337/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Produkter</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Pris: {product.price} kr</p>
            {product.image && <img src={`http://localhost:1337${product.image.url}`} alt={product.title} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;