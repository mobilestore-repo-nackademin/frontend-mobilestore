import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Homepage/Homepage.jsx';
import Support from './SupportPage/SupportPage.jsx';
import AboutUs from './AboutUsPage/Aboutus.jsx';
import Products from './Products/Products.jsx';
import Terms from './TermsAndCondition/TermsAndConditions.jsx';
import Delivery from './DeliveryPage/Delivery.jsx';
import CardPayment from './PaymentComponents/CardPayment.jsx';
import ChoseDelivery from './PaymentComponents/ChoseDelivery.jsx';
import ChosePayment from './PaymentComponents/ChosePayment.jsx';
import ConfirmedPage from './PaymentComponents/ConfirmedPage.jsx';
import InvoicePayment from './PaymentComponents/InvoicePayment.jsx';
import ShoppingCartPage from './PaymentComponents/ShoppingCartPage.jsx';
import HomeDelivery from './PaymentComponents/HomeDelivery.jsx';
import FAQ from './FAQPage/FAQFile.jsx';
import BytenReturer from './BytenReturerPage/BytenReturerFile.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import { FormProvider } from './Context/FormContext';
import PurchasePage from './PaymentComponents/PurchasePage.jsx'

const App = () => {
  return (
    <Router>
        <CartProvider>
        <FormProvider>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Delivery" element={<Delivery/>}/>
        <Route path="/CardPayment" element={<CardPayment/>}/>
        <Route path="/ChoseDelivery" element={<ChoseDelivery/>}/>
        <Route path="/ChosePayment" element={<ChosePayment/>}/>
        <Route path="/ConfirmedPage" element={<ConfirmedPage/>}/>
        <Route path="/InvoicePayment" element={<InvoicePayment/>}/>
        <Route path="/ShoppingCartPage" element={<ShoppingCartPage/>}/>
        <Route path="/HomeDelivery" element={<HomeDelivery/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/BytenReturer" element={<BytenReturer/>}/>
        <Route path="/PurchasePage" element={<PurchasePage/>}/>
      </Routes>
      <Footer/>
        </FormProvider>
        </CartProvider>
    </Router>
  );
};

export default App;