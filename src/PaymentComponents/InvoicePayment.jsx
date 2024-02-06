import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormContext } from '../Context/FormContext.jsx';
import './Payment.css';

const InvoicePayment = () => {
  const { formData, updateFormData } = useFormContext();
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'personalNumber' && value.length > 12) {
      return;
    }

    if (name === 'zipcode' && value.length > 5) {
      return;
    }

    updateFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

<<<<<<< HEAD
  const handleConfirmation = (tabToOpen) => {
    // Gör något med tabToOpen, till exempel använd det som argument till onTabCompletion
    onTabCompletion(tabToOpen);
=======
  const handleConfirmation = () => {

    navigate('/ConfirmedPage');
>>>>>>> 6cb1b45646d92eb7e3a32ea85c28d0db8c596c3a
  };

  return (
      <div className="container">
        <h4 className='thx'>Kontaktuppgifter</h4>
        <form>
          <div className="form-group">
            <label htmlFor="name">Fullständiga Namn:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="street">GataNamn:</label>
            <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="city">PostOrt:</label>
            <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="zipcode">PostNummer:</label>
            <input
                type="text"
                id="zipcode"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                maxLength="5"
                required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="personalNumber">PersonNummer:</label>
            <input
                type="text"
                id="personalNumber"
                name="personalNumber"
                value={formData.personalNumber}
                onChange={handleChange}
                maxLength="10"
                required
            />

          </div>
          <br />
          <Link to="/ConfirmedPage">
            <button className="betalning-button" onClick={() => handleConfirmation(0)}> Bekräfta Informatinen</button>
          </Link>
        </form>
        <div className="FK_icon-container">


          <img className="FK_icon" src="../../photos/faktura-bild-05.webp" alt=""/>
          <img className="FK_icon" src="../../photos/faktura-bild-06.webp" alt=""/>
        </div>

      </div>
  );
};

export default InvoicePayment;





