// InvoicePayment.js
import React from 'react';
import './Payment.css';
import { useFormData } from '../Context/FormDataContext';

const InvoicePayment = () => {
  const { formData: invoiceFormData, updateFormData } = useFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fillWithDeliveryData = () => {
    // Fyll formuläret med data från hemleveransformuläret
    updateFormData({
      name: homeDeliveryFormData.name,
      street: homeDeliveryFormData.street,
      city: homeDeliveryFormData.city,
      zipcode: homeDeliveryFormData.zipcode,
      phoneNumber: homeDeliveryFormData.phoneNumber,
    });
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
            value={invoiceFormData.name}
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
            value={invoiceFormData.street}
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
            value={invoiceFormData.city}
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
            value={invoiceFormData.zipcode}
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
            value={invoiceFormData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" onClick={fillWithDeliveryData}>
          Samma som Leverans
        </button>
        <button type="submit">Gå vidare</button>
      </form>
    </div>
  );
};

export default InvoicePayment;
