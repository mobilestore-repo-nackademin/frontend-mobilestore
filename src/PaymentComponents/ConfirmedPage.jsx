import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext.jsx'; 
import { useFormContext } from '../Context/FormContext.jsx';
import './Payment.css';

const ConfirmedPage = () => {
  const { cart, getTotal } = useCart(); // Hämta varukorgen
  const { formData } = useFormContext(); // Hämtar formulärens svar
  const navigate = useNavigate(); // För att navigera


  const handleButtonClick = () => {
    navigate('/');
    window.location.reload(); // Ladda om sidan för att inte se produkter i varukorgen efter köp
  };

  return (
      <div className="container">
        <h1 className='thx'>Tack för ditt köp!
          <svg width="3em" height="3em" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <defs></defs>
              <path className="cls-1" d="M28.75,55.5a23.5,23.5,0,1,1,14-42.38,2,2,0,0,1-2.38,3.21A19.51,19.51,0,1,0,48.25,32,19.65,19.65,0,0,0,48,28.93a2,2,0,1,1,4-.62A23.85,23.85,0,0,1,52.25,32,23.52,23.52,0,0,1,28.75,55.5Z"></path>
              <path className="cls-2" d="M31.25,39.5a2,2,0,0,1-1.41-.59l-9.5-9.5a2,2,0,0,1,2.82-2.82l8.09,8.08L55.34,10.59a2,2,0,0,1,2.82,2.82l-25.5,25.5A2,2,0,0,1,31.25,39.5Z"></path>
            </g>
          </svg>
        </h1>

        <div className="grid-confirm">
          <div className="grid-confirm-item">
            <strong><h3>Tack för ditt köp</h3></strong>

            <p>Din vara kommer att skickas till dig inom 1-3 dagar</p>
          </div>

          <div className="grid-confirm-item">
            <strong>Leveranssätt</strong>
            <p>Namn: {formData.nameDelivery}</p>
            <p>Gata: {formData.addressDelivery}</p>
            <p>Postort: {formData.cityDelivery}</p>
            <p>Postnummer: {formData.zipCodeDelivery}</p>
          </div>

          <div className="grid-confirm-item">
          <strong>Produkter</strong>
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <strong> {item.quantity}x </strong>
              <strong> {item.price} kr </strong><br />
              <strong>Totalt: {item.price} kr</strong>
            </div>
          ))}
          <br />
          <strong>Totalt: {getTotal().toFixed(2)} kr</strong> <br />
        </div>

          <div className="grid-confirm-item">
          <strong>Faktura adress</strong>
          <p>Namn: {formData.name}</p>
          <p>Gata: {formData.street}</p>
          <p>Postort: {formData.city}</p>
          <p>Postnummer: {formData.zipcode}</p>
          
        </div>
        </div>
        <button onClick={handleButtonClick}>Handla mer</button>
      </div>
  );
};

export default ConfirmedPage;




