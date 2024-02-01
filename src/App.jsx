import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Homepage/Homepage.jsx';
import Chargers from './Chargers/Charger.jsx';
import Cases from './Cases/Cases.jsx';
import Phones from './Phone/Phonepage.jsx';
import Support from './SupportPage/SupportPage.jsx';
import AboutUs from './AboutUsPage/Aboutus.jsx';
import ProductList from './Products/Products.jsx';
import Terms from './TermsAndCondition/TermsAndConditions.jsx';
import Delivery from './DeliveryPage/Delivery.jsx';
import CardPayment from './PaymentComponents/CardPayment.jsx';
import ChoseDelivery from './PaymentComponents/ChoseDelivery.jsx';
import ChosePayment from './PaymentComponents/ChosePayment.jsx';
import ConfirmedPage from './PaymentComponents/ConfirmedPage.jsx';
import InvoicePayment from './PaymentComponents/InvoicePayment.jsx';
import ShoppingCartPage from './PaymentComponents/ShoppingCartPage.jsx';

const App = () => {
  return (
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Phones" element={<Phones />} />
        <Route path="/Chargers" element={<Chargers />} />
        <Route path="/Cases" element={<Cases />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Products" element={<ProductList />} />
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Delivery" element={<Delivery/>}/>
        <Route path="/CardPayment" element={<CardPayment/>}/>
        <Route path="/ChoseDelivery" element={<ChoseDelivery/>}/>
        <Route path="/ChosePayment" element={<ChosePayment/>}/>
        <Route path="/ConfirmedPage" element={<ConfirmedPage/>}/>
        <Route path="/InvoicePayment" element={<InvoicePayment/>}/>
        <Route path="/ShoppingCartPage" element={<ShoppingCartPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;