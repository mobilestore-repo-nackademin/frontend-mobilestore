// Products.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductsCss/Products.css';
import { useCart } from '../Context/CartContext.jsx';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/products?populate=*');
      console.log('All Products:', response.data.data);
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching all products:', error);
    }
  };

  const fetchProductsByCategory = async (categoryId) => {
    try {
      const categoryResponse = await axios.get(`http://localhost:1337/api/categories/${categoryId}?populate[products][populate]=*`);
      
      console.log('Category Response:', categoryResponse);

      const categoryData = categoryResponse.data && categoryResponse.data.data;
      const categoryProducts = categoryData && categoryData.attributes && categoryData.attributes.products && categoryData.attributes.products.data;
      console.log('Category Products:', categoryProducts);

      if (categoryProducts) {
        // Omvandla objektet till en array
        const productsArray = Object.values(categoryProducts);

        setProducts(productsArray);
      } else {
        console.error('No products found for the category');
      }
    } catch (error) {
      console.error('Error fetching products by category:', error);
    }
  };

  const handleFilter = async (categoryId) => {
    if (categoryId === selectedCategory) {
      // Om samma kategori redan är vald, visa alla produkter
      fetchAllProducts();
      setSelectedCategory(null);
    } else {
      // Annars filtrera produkter baserat på den valda kategorin
      setSelectedCategory(categoryId);
      await fetchProductsByCategory(categoryId);
    }
  };

  useEffect(() => {
    // Hämta alla produkter initialt
    fetchAllProducts();
  }, []);

  return (
    <div className='productContainer'>
      <div className="boxes">
        <div className="box box1" onClick={() => handleFilter(1)}>
          <h2>Mobiler</h2>
        </div>
        <div className="box box2" onClick={() => handleFilter(3)}>
          <h2>Mobilskal</h2>
        </div>
        <div className="box box3" onClick={() => handleFilter(2)}>
          <h2>Mobilladdare</h2>
        </div>
      </div>

      <div className="product-list">
        {products.map((product) => {
          const attributes = product.attributes || {};
          const photoData = attributes.Photos.data.attributes || {};

          return (
            <div key={product.id} className="product-card">
              {photoData.url && <img src={`http://localhost:1337${photoData.url}`} alt={attributes.Title} />}
              <h3>{attributes.Title}</h3>
              <p>{attributes.Description}</p>
              <p>Pris:<strong> {attributes.Price}:- </strong></p>
              <p>Lagerstatus: <strong>{attributes.Stock}</strong> </p>
              <button onClick={() => handleAddToCart(product)}>Köp</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
