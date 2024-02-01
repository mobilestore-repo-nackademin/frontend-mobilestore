import React from 'react';
import {Link} from "react-router-dom";
import './Payment.css';


const ShoppingCartPage = () => {
    return (
      <div className="container">
      <h1 className='thx'>Varukorg

      </h1>

      <div className="grid-confirm">
        <div className="grid-confirm-item">
          <strong>Produkter</strong> <br />
          
          <Link to="/"><button>Handla mer</button></Link> <Link to="/ChoseDelivery"><button>Välj leveranssätt</button></Link>
        </div>
   
      </div></div>
    );
  };

export default ShoppingCartPage;