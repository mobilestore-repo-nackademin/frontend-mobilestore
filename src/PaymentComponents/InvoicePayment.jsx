import React from 'react';
import { Link } from 'react-router-dom';
import useFormData from '../Context/useFormData.jsx';

const InvoicePayment = () => {
  const { formData, updateFormData } = useFormData();

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
    console.log("Form data updated:", formData);
  };

  console.log("Form data on InvoicePayment:", formData);

  return (
      <div className="container">
        <h4>Kontaktuppgifter</h4>
        <form>
          <div className="form-group">
            <label htmlFor="name">Namn:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{width:'150'}}
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
                style={{width:'150'}}
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
                style={{width:'150'}}
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
                maxLength="5" // Begränsa till 5 siffror
                style={{width:'150'}}
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
                maxLength="12"
                style={{width:'150'}}
                required
            />
          </div>
          <Link to="/ConfirmedPage">

            <button className="betalning-button">Bekräfta informatinen</button>
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