import React from 'react';
import './AboutUsCss/AboutUs.css';
import HomePage from "../Homepage/Homepage.jsx";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import AboutUsPage from "./HeroSection.jsx";
const Aboutus = () => {
    return (
        <div>

            < Header/>
            <AboutUsPage/>
            < Footer/>

        </div>
    );
};

export default Aboutus;