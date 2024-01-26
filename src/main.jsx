import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import HomePage from './Homepage/Homepage.jsx'
import AboutUsPage from "./AboutUsPage/HeroSection.jsx";





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <HomePage/>
      <AboutUsPage/>
    <Footer/>
  </React.StrictMode>
)
