import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const InvoicePayment = () => {
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    zipcode: '',
    personalNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'personalNumber' && value.length > 12) {
      return;
    }

    if (name === 'zipcode' && value.length > 5) {
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleConfirmation = () => {
    const queryParams = Object.entries(formData)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

    window.location.href = `/ConfirmedPage?${queryParams}`;
  };

  return (
      <div className="container">
        <h4>Kontaktuppgifter</h4>
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
          <div className="form-group">
            <label htmlFor="personalNumber">PersonNummer:</label>
            <input
                type="text"
                id="personalNumber"
                name="personalNumber"
                value={formData.personalNumber}
                onChange={handleChange}
                maxLength="12"
                required
            />

          </div>
          <Link to="/ConfirmedPage">
            <button className="betalning-button" onClick={handleConfirmation}> Bekräfta Informatinen</button>
          </Link>
        </form>
        <div className="FK_icon-container">

          <img className="FK_icon" src="../../photos/faktura-icon-02.jpg" alt=""/>
          <img className="FK_icon" src="../../photos/faktura-icon-01.png" alt=""/>
          <img className="FK_icon" src="../../photos/faktura-icon.png" alt=""/>
        </div>

      </div>
  );
};

export default InvoicePayment;





