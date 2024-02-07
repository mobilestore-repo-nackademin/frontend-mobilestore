import './Payment.css';
import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


const PaymentPage = () => {
    const [cardHolderName, setCardHolderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonthYear, setExpiryMonthYear] = useState('');
    const [cvv, setCVV] = useState('');

    const handleCardHolderNameChange = (e) => {
        setCardHolderName(e.target.value.slice(0, 50));
    };

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value.slice(0, 16));
    };

    const handleExpiryMonthYearChange = (e) => {
        setExpiryMonthYear(e.target.value);
    };

    const handleCVVChange = (e) => {
        setCVV(e.target.value.slice(0, 3));
    };


    const validate = () => {
        const [expiryYear, expiryMonth] = expiryMonthYear.split('-');

        if (
            cardHolderName.trim() === '' ||
            cardNumber.length !== 16 ||
            !expiryMonth || !expiryYear ||
            cvv.trim() === '' || cvv.length !== 3
        ) {
            alert('Vänligen fyll i alla obligatoriska fält korrekt.');
            return false;
        }

        return true;
    };

    const handlePaymentSubmit = async () => {
        if (validate()) {
            try {
                const paymentData = {
                    cardHolderName,
                    cardNumber,
                    expiryMonth: expiryMonthYear.split('-')[1], // Använd andra delen för månad
                    expiryYear: expiryMonthYear.split('-')[0],  // Använd första delen för år
                    cvv,

                };

                const response = await axios.post('', paymentData);

                console.log('Betalning lyckades:', response.data);
                alert('Betalningen har behandlats.');
                history.push('/ConfirmedPage');

                // Om betalningen lyckades, navigera till bekräftelsesidan

            } catch (error) {
                console.error('Fel vid betalning:', error.message);
            }
        }
    };

    return (
        <div className='container'>
        
            <h4>Betalningsinformation.</h4>
            <form>
            <div className="form-group">
                <label>Kortinnehavarens namn:</label>
                    <input className='CardInput' type="text" value={cardHolderName} onChange={handleCardHolderNameChange} required />
                
                </div>
               
                <div className="form-group">
                <label>Kortnummer:</label>
                    <input className='CardInput' type="text" value={cardNumber} onChange={handleCardNumberChange} required />
                </div>
              
                <div className="form-group">
                <label>Giltighetsmånad och år:</label>
                <input className='CardInput' type="month" value={expiryMonthYear} onChange={handleExpiryMonthYearChange} required />
                
                </div>
                <div className="form-group">

                <label>CVV:</label>
                <input className='CardInput' type="text" value={cvv} onChange={handleCVVChange} maxLength="3" required />
                
                </div>
              

                <Link to="/ConfirmedPage">
                    <button className="but" onClick={handlePaymentSubmit}>
                        Bekräfta betalning
                    </button>

                </Link>


            </form>


            <img className='betalning-icon' src="../../photos/betalnings.jpg" alt="" />
        </div>
        
    );
};

export default PaymentPage;

