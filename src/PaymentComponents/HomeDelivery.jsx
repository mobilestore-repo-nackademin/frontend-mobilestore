// HomeDelivery.js
import React from 'react';
import './Payment.css';
import { useFormData } from '../Context/FormDataContext';
import {Link} from "react-router-dom";


const HomeDelivery = () => {
  const { formData: homeDeliveryFormData, updateFormData } = useFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sparar hemleveransformulärdatan till en variabel
    // Du kan göra mer här, t.ex. skicka datan till en server
    const homeDeliveryData = { ...homeDeliveryFormData };
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
            value={homeDeliveryFormData.name}
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
            value={homeDeliveryFormData.street}
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
            value={homeDeliveryFormData.city}
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
            value={homeDeliveryFormData.zipcode}
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
            value={homeDeliveryFormData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
     
      <Link to="/ChosePayment">   <button type="submit">Gå vidare</button></Link>
      </form>
    </div>
  );
};

export default HomeDelivery;
