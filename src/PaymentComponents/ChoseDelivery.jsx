import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';

const ChoseDelivery = () => {
  return (
    <div>
      {/* Välj hur du vill betala, gör dessa klickbara och med pris på hemleverans*/}
      <div className="grid-container">
      
        <Link to="/HomeDelivery">
          <div className="grid-item">
          <label >Hemleverans</label>
          <svg height="100px" width="100px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0fill:#000000; </style> <g> 
          <path className="st0" d="M447.77,33.653c-36.385-5.566-70.629,15.824-82.588,49.228h-44.038v37.899h40.902 c5.212,31.372,29.694,57.355,62.855,62.436c41.278,6.316,79.882-22.042,86.222-63.341C517.428,78.575,489.07,39.969,447.77,33.653z "></path> <path className="st0" d="M162.615,338.222c0-6.88-5.577-12.468-12.468-12.468H96.16c-6.891,0-12.467,5.588-12.467,12.468 c0,6.868,5.576,12.467,12.467,12.467h53.988C157.038,350.689,162.615,345.091,162.615,338.222z"></path> <path className="st0" d="M392.999,237.965L284.273,340.452l-37.966,9.398v-86.619H0v215.996h246.307v-59.454l35.547-5.732 c16.95-2.418,29.396-6.692,44.336-15.018l46.302-24.228v104.432h132.435V270.828C504.927,202.618,428.016,202.43,392.999,237.965z M215.996,448.913H30.313v-155.37h185.683v63.805l-36.419,9.01c-15.968,4.395-25.708,20.518-22.174,36.696l0.298,1.247 c3.478,15.912,18.651,26.436,34.785,24.14l23.51-3.788V448.913z"></path> </g> </g></svg>
        </div>
        </Link>
        
        <Link to="/ChosePayment">
          <div className="grid-item">
            <label >Hämta i butik</label>
            <svg fill="#000000" width="100px" height="100px" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
            <path d="M25.562 2.966l-25.562 18.034h6v22h4v-15h8v15h27v-22h5l-24.438-18.034zm16.438 34.034h-19v-9h19v9zm0-12h-33v-8h33v8zm-2-6v4h-29v-4h29m1-1h-31v6h31v-6z"></path></g></svg>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default ChoseDelivery;
