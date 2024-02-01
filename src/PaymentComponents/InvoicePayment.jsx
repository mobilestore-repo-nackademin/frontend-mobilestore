import React from 'react';
import { Link } from 'react-router-dom';
import useFormData from '../Context/useFormData.jsx';

const InvoicePayment = () => {
  const { formData, updateFormData } = useFormData();


  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("Form data updated:", formData);
  };
  console.log("Form data on InvoicePayment:", formData);
  return (
    <div className="container">
      <h2>Fyll i dina uppgifter</h2>
      <form>
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
          <label htmlFor="personalNumber">Personnummer:</label>
          <input
            type="text"
            id="personalNumber"
            name="personalNumber"
            value={formData.personalNumber}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      <Link to="/ConfirmedPage" >
        <button>Gå vidare</button>
      </Link>
    </div>
  );
};

export default InvoicePayment;
