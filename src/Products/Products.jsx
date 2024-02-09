import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductsCss/Products.css';
import { useCart } from '../Context/CartContext.jsx';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/products?populate=*');
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching all products:', error);
    }
  };

  const fetchAllCategories = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/categories');
      setCategories(response.data.data);
    } catch (error) {
      console.error('Error fetching all categories:', error);
    }
  };

  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await axios.get(`http://localhost:1337/api/categories/${categoryId}?populate[products][populate]=*`);
      const categoryData = response.data && response.data.data;
      const categoryProducts = categoryData && categoryData.attributes && categoryData.attributes.products && categoryData.attributes.products.data;

      if (categoryProducts) {
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
      fetchAllProducts();
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
      await fetchProductsByCategory(categoryId);
    }
  };

  useEffect(() => {
    fetchAllProducts();
    fetchAllCategories();
  }, []);

  return (
    <div className='productContainer'>
      <div className="boxes">
        {categories.map((category) => (
          <div key={category.id} className={`box box${category.id}`} onClick={() => handleFilter(category.id)}>
            <h2>{category.attributes.Title}</h2>
          </div>
        ))}
      </div>

      <div className="product-list">
        {products.map((product) => {
          const attributes = product.attributes || {};
          const photoData = attributes.Photos.data.attributes || {};
          const stock = attributes.Stock || 0;

          let stockStatusText, stockStatusColor;

          if (stock > 20) {
            stockStatusText = 'Finns i lager';
            stockStatusColor = 'green';
          } else if (stock > 0) {
            stockStatusText = 'Få i lager!';
            stockStatusColor = 'black';
          } else {
            stockStatusText = 'Slut i lager';
            stockStatusColor = 'red';
          }

          return (
            <div key={product.id} className="product-card">
              {photoData.url && <img src={`http://localhost:1337${photoData.url}`} alt={attributes.Title} />}
              <div className="product-details">
                <h3>{attributes.Title}</h3>
                <p>{attributes.Description}</p>
              </div>
              <div className="product-footer">
                <p>Pris: <br /><strong> {attributes.Price}:- </strong></p>
                <p>Lagerstatus: <strong style={{ color: stockStatusColor }}> <br /> {stockStatusText}</strong></p>
                {stock > 0 && <button onClick={() => handleAddToCart(product)}>Köp</button>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
