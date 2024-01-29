import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Homepage/Homepage.jsx';
import Chargers from './Chargers/Charger.jsx';
import Cases from './Cases/Cases.jsx';
import Phones from './Phone/Phonepage.jsx';
import Support from './SupportPage/SupportPage.jsx';
import AboutUs from './AboutUsPage/Aboutus.jsx';
import ProductList from './Products/Products.jsx';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Phones" element={<Phones />} />
        <Route path="/Chargers" element={<Chargers />} />
        <Route path="/Cases" element={<Cases />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Products" element={<ProductList />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;