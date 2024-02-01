import React from 'react';
import {Link} from "react-router-dom";


const ShoppingCartPage = () => {
    return (
        <div>
            <h1>Alla produkter man köpt</h1>
        
         <Link to="/ChoseDelivery"><button>Välj leveranssätt</button></Link> 
         <Link to="/Products"><button>Cancel</button></Link>
        </div>
    );
  };

export default ShoppingCartPage;