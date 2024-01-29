import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Products/ProductsCss/ProductList.css';

const PhonePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    try {
      const categoriesResponse = await axios.get('http://localhost:1337/api/categories?populate=*');
      console.log('Categories Response:', categoriesResponse);

      const firstCategory = categoriesResponse.data.data[0];
      console.log('First Category:', firstCategory);

      setCategories(categoriesResponse.data.data);

      // Om det finns minst en kategori, hämta produkter från den första kategorin
      if (firstCategory) {
        await fetchProducts(firstCategory.id);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProducts = async (categoryId) => {
    try {
      const productsResponse = await axios.get(`http://localhost:1337/api/products?populate=*&category.id=${categoryId}`);
      console.log('Products Response:', productsResponse);
      setProducts(productsResponse.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchCategory(); // Anropa fetchCategory när komponenten monteras
  }, []); // Tomt beroendearrayer betyder att detta körs en gång vid montering

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
          </div>
        );
      })}
    </div>
  );
};

export default PhonePage;
