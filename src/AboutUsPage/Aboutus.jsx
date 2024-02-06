import React from 'react';
import './AboutUsCss/AboutUs.css';
import AboutUsPage from "./HeroSectionAbout.jsx";
import SocialIcons from "./SocialIcons.jsx";


const Aboutus = () => {
    return (
        <div className='container'>
            <AboutUsPage />      
            <SocialIcons/>  
        </div>
    );
};

export default Aboutus;
