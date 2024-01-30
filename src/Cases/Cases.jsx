import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Products/ProductsCss/ProductList.css';

const CasePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const handleCategoryChange = async (categoryId) => {
    setSelectedCategory(categoryId);
    await fetchProductsByCategory(categoryId);
  };

  useEffect(() => {
    // Hämta alla produkter initialt
    fetchProductsByCategory(3); // Byt ut "3" mot din specifika kategori-ID
  }, []);

  return (
    <div className="product-list">
      {/* Lägg till eventuella andra komponenter här */}

      {products && products.length > 0 && products.map(product => {
        const attributes = product.attributes || {};
        const photoData = attributes.Photos && attributes.Photos.data && attributes.Photos.data.attributes || {};

        return (
          <div key={product.id} className="product-card">
            {photoData.url && <img src={`http://localhost:1337${photoData.url}`} alt={attributes.Title} />}
            <h3>{attributes.Title}</h3>
            <p>{attributes.Description}</p>
            <p>Pris: {attributes.Price ? `${parseFloat(attributes.Price).toFixed(2)} kr` : 'N/A'}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CasePage;
