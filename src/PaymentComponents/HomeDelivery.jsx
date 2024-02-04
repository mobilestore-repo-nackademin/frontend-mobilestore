import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';


const AddressForm = () => {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    zipCode: '',
    selectedOption: 'option1', // Välj en standardval
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
    // Hantera formulärinskickning här
    console.log(formData);
  };

  return (
    <div>
      <h2>Fyll i dina uppgifter</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="address">Adress:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
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
          <label htmlFor="zipCode">Postnummer:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="selectedOption">Välj ett alternativ:</label>
          <select
            id="selectedOption"
            name="selectedOption"
            value={formData.selectedOption}
            onChange={handleChange}
            required
          >
            <option value="option1">09:00 - 12:00</option>
            <option value="option2">13:00 - 16:00</option>
            <option value="option3">16:00 - 19:00</option>
          </select>

        </div>

       <Link to="/ChosePayment"> <button type="submit">Gå vidare</button></Link>

      </form>
    </div>
  );
};

export default AddressForm;
