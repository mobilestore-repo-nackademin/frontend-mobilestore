import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:1337/api/products?populate=*');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  // Rendera produkterna här...
};