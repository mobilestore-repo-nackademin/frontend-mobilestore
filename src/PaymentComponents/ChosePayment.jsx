import React from 'react';
import {Link} from "react-router-dom";
import './Payment.css';

const ShoppingCartPage = () => {
    // const handleConfirmation = () => {
    //     // ... annan kod ...
    //     history.push(`/ConfirmedPage?deliveryMethod=${deliveryMethod}`);
    // }



    return (
        <div>
            {/* Välj hur du vill betala, gör dessa klickbara och ev. zooma ut*/}
            <div className="grid-container">
            <Link to="/InvoicePayment">
                <div className='grid-item'>
                    <h2>Betala med faktura</h2>
                    <svg width="100px" height="100px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                    <path d="M182.87 146.29h585.14v292.57h73.14V73.14H109.72v877.72h402.29v-73.15H182.87z" fill="#0F1F3C"></path>
                    <path d="M713.14 481.52L512 582.1v88.24c0 110.29 62.31 211.11 160.95 260.43l40.19 20.09 40.19-20.09c98.64-49.32 160.95-150.14 160.95-260.43V582.1L713.14 481.52z m128 188.81c0 83.12-46.18 157.84-120.52 195.01l-7.48 3.74-7.48-3.74c-74.34-37.17-120.52-111.9-120.52-195.01V627.3l128-64 128 64v43.03z" fill="#0F1F3C"></path><path d="M657.87 683.21l-36.33 41.11 93.25 82.43 113.93-131.09-41.39-36L709.69 729zM256 256h438.86v73.14H256zM256 438.86h292.57V512H256zM256 621.71h146.29v73.14H256z" fill="#0F1F3C"></path>
                    </g></svg>
                </div>
            </Link>
           <Link to="/CardPayment">
                <div className='grid-item'>
                <h2>Betala med kort</h2>
                    <svg width="100px" height="100px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"><path d="M934.4 755.2c0 14.08-11.52 25.6-25.6 25.6H153.6c-14.08 0-25.6-11.52-25.6-25.6V294.4c0-14.08 11.52-25.6 25.6-25.6h755.2c14.08 0 25.6 11.52 25.6 25.6v460.8z" fill="#B8CA43"></path>
                    <path d="M908.8 793.6H153.6c-21.76 0-38.4-16.64-38.4-38.4V294.4c0-21.76 16.64-38.4 38.4-38.4h755.2c21.76 0 38.4 16.64 38.4 38.4v460.8c0 21.76-16.64 38.4-38.4 38.4zM153.6 281.6c-7.68 0-12.8 5.12-12.8 12.8v460.8c0 7.68 5.12 12.8 12.8 12.8h755.2c7.68 0 12.8-5.12 12.8-12.8V294.4c0-7.68-5.12-12.8-12.8-12.8H153.6z" fill="#231C1C"></path>
                    <path d="M934.4 482.56c0 8.96-11.52 16.64-25.6 16.64H153.6c-14.08 0-25.6-7.68-25.6-16.64v-67.84c0-8.96 11.52-16.64 25.6-16.64h755.2c14.08 0 25.6 7.68 25.6 16.64v67.84z" fill="#513328"></path>
                    <path d="M908.8 512H153.6c-21.76 0-38.4-12.8-38.4-29.44v-67.84C115.2 396.8 131.84 384 153.6 384h755.2c21.76 0 38.4 12.8 38.4 29.44v67.84c0 17.92-16.64 30.72-38.4 30.72z m-755.2-102.4c-7.68 0-12.8 3.84-12.8 5.12v67.84c0 1.28 5.12 3.84 12.8 3.84h755.2c7.68 0 11.52-2.56 12.8-5.12v-67.84c0-1.28-5.12-3.84-12.8-3.84H153.6z" fill="#231C1C"></path>
                    <path d="M460.8 640h115.2v25.6h-115.2z" fill="#231C1C"></path>
                    <path d="M384 704h268.8v25.6H384z" fill="#231C1C"></path>
                    </g></svg>
                </div>
            </Link>

            </div>
        </div>
    );
  };

export default ShoppingCartPage;