// HomeDelivery.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormContext } from '../Context/FormContext.jsx';
import './Payment.css';

const HomeDelivery = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ingen ytterligare behandling behövs här, data uppdateras direkt i FormContext
  };

  return (
    <div className='container'>
      <h2 className='thx'>Fyll i dina uppgifter för hemleverans</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameDelivery">Namn:</label>
          <input
            type="text"
            id="nameDelivery"
            name="nameDelivery"
            value={formData.nameDelivery}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="addressDelivery">Adress:</label>
          <input
            type="text"
            id="addressDelivery"
            name="addressDelivery"
            value={formData.addressDelivery}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="cityDelivery">Postort:</label>
          <input
            type="text"
            id="cityDelivery"
            name="cityDelivery"
            value={formData.cityDelivery}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="zipCodeDelivery">Postnummer:</label>
          <input
            type="text"
            id="zipCodeDelivery"
            name="zipCodeDelivery"
            maxLength="5"
            value={formData.zipCodeDelivery}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="selectedOptionDelivery">Välj ett alternativ:</label>
          <select
            id="selectedOptionDelivery"
            name="selectedOptionDelivery"
            value={formData.selectedOptionDelivery}
            onChange={handleChange}
            required
          >
            <option value="option1">09:00 - 12:00</option>
            <option value="option2">13:00 - 16:00</option>
            <option value="option3">16:00 - 19:00</option>
          </select>
        </div>
          <br />
        <Link to="/ChosePayment">
          <button type="submit">Gå vidare</button>
        </Link>
      </form>
    </div>
  );
};

export default HomeDelivery;
