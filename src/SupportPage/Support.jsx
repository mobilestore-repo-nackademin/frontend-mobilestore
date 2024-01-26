import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '/.Support.css';

const support = () =>{
    return(
        <div>

        <Header/>
        <h1>Kontaktsida</h1>


      <div className="support-box">
        <h2>Nummer</h2>
        <p>+46 123 456 789</p>
      </div>

      <div className="support-box">
        <h2>Email Address</h2>
        <p>MobileShopsupport@hotmail.com</p>
      </div>

      <div className="support-box">
        <h2>Adress</h2>
        <p>Torögatan, Stockolm, Sverige</p>
      </div>
        <Footer/>,
        </div>
        

    )
    
}

export default support