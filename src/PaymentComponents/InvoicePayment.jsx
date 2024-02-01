import React, { useState } from 'react';
import './Payment.css';
import { Link } from 'react-router-dom';

const InvoicePayment = () => {
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    zipcode: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Skicka formData till nästa sida eller utför önskad åtgärd här
  };

  return (
    <div className='Information-div'>
      <h2>Fyll i dina uppgifter</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Namn:</label>
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
          <label htmlFor="street">Gata:</label>
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
          <label htmlFor="city">Postort:</label>
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
          <label htmlFor="zipcode">Postnummer:</label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Telefonnummer:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Gå vidare</button>
      </form>
    </div>
  );
};

export default InvoicePayment;
