import React from 'react';
import '../CssFolder/Footer.css'
import {Link} from "react-router-dom";


const Footer = () => {
    return (

    <footer className="footer">
      <div className="column">
        <img className='footer-img' src="./photos/mobilestore.png" alt="ourlogo" />
      </div>
      <div className="column">

        <ul className='FooterUl'>
            {/* Sätt in A tagg på alla länkar */}
           <Link to='/AboutUs'><li className='FooterLi'>Om oss</li></Link>
           <Link to='/BytenReturer'><li className='FooterLi'>Byten & Returer</li></Link>
           <Link to='/Delivery'><li className='FooterLi'>Leverans</li></Link>
           <Link to='/Support'><li className='FooterLi'>Kontakt</li></Link>
           <Link to='/Terms'><li className='FooterLi'>Köpvilkor</li></Link>
           <Link to='/FAQ'><li className='FooterLi'>FAQ</li></Link>
        </ul>
      </div>
      <div className="column">
        <h1>𝕄𝕠𝕓𝕚𝕝𝕖𝕊𝕥𝕠𝕣𝕖</h1>

      </div>
    </footer>
    );
  };

export default Footer;
