//
// import {Link} from "react-router-dom";
// import './Payment.css';
// import React, { useState } from 'react';
// import axios from "axios";
//
// const PaymentPage = () => {
//     const [cardHolderName, setCardHolderName] = useState('');
//     const [cardNumber, setCardNumber] = useState('');
//     const [expiryMonthYear, setExpiryMonthYear] = useState('');
//     const [cvv, setCVV] = useState('');
//     const [expiryOption, setExpiryOption] = useState('12');
//
//     const handleCardHolderNameChange = (e) => {
//
//         setCardHolderName(e.target.value.slice(0, 50));
//     };
//
//     const handleCardNumberChange = (e) => {
//
//         setCardNumber(e.target.value.slice(0, 16));
//     };
//
//     const handleExpiryMonthYearChange = (e) => {
//         setExpiryMonthYear(e.target.value);
//     };
//
//     const handleCVVChange = (e) => {
//
//         setCVV(e.target.value.slice(0, 3));
//     };
//
//     const handleExpiryOptionChange = (e) => {
//         setExpiryOption(e.target.value);
//     };
//     const handlePaymentSubmit = async () => {
//         try {
//             // Skapa ett objekt med betalningsinformation
//             const paymentData = {
//                 cardHolderName,
//                 cardNumber,
//                 expiryMonth: expiryMonthYear.split('-')[1], // Använd andra delen för år
//                 expiryYear: expiryMonthYear.split('-')[0],  // Använd första delen för månad
//                 cvv,
//                 expiryOption,
//             };
//
//             // Skicka betalningsinformationen till din backend
//             const response = await axios.post('https://din-backend-api.com/betalning', paymentData);
//
//             // Om betalningen lyckades kan du hantera svaret här
//             console.log('Betalning lyckades:', response.data);
//
//             // Lägg till din egen logik här för att hantera betalningen
//             // Exempelvis, anropa en betalningstjänst och behandla resultatet
//             alert('Betalningen har behandlats.');
//         } catch (error) {
//             // Om det uppstår fel kan du hantera det här
//             console.error('Fel vid betalning:', error.message);
//         }
//     };
//
//     return (
//         <div className="boxpay">
//             <h5>Betalingssida:!</h5>
//             <form>
//                 <label>
//                     Kortinnehavarens namn:
//                     <input type="text" value={cardHolderName} onChange={handleCardHolderNameChange} required />
//                 </label>
//
//                 <br />
//
//                 <label>
//                     Kortnummer:
//                     <input type="text" value={cardNumber} onChange={handleCardNumberChange} required />
//                 </label>
//
//                 <br />
//
//                 <label>
//                     Giltighetsmånad och år:
//                     <input type="month" value={expiryMonthYear} onChange={handleExpiryMonthYearChange} required />
//                 </label>
//
//                 <br />
//
//                 <label>
//                     CVV:
//                     <input type="text" value={cvv} onChange={handleCVVChange} maxLength="3" required />
//                 </label>
//
//                 <br />
//
//                 <label>
//                     Giltighetstid:
//                     <select value={expiryOption} onChange={handleExpiryOptionChange} required>
//                         <option value="24">24 månader</option>
//                     </select>
//                 </label>
//
//                 <br />
//
//                 <button type="button" onClick={handlePaymentSubmit}>
//                     Bekräfta betalning
//                 </button>
//
//                 <img className='betalning-icon' src="../../photos/betalnings.jpg" alt=""/>
//
//             </form>
//
//         </div>
//     );
// };
//
// export default PaymentPage;




// PaymentPage.js
// import './Payment.css';
// import React, { useState } from 'react';
// import axios from 'axios';
// const PaymentPage = () => {
//     const [cardHolderName, setCardHolderName] = useState('');
//     const [cardNumber, setCardNumber] = useState('');
//     const [expiryMonthYear, setExpiryMonthYear] = useState('');
//     const [cvv, setCVV] = useState('');
//     const [expiryOption, setExpiryOption] = useState('12');
//
//     const handleCardHolderNameChange = (e) => {
//         setCardHolderName(e.target.value.slice(0, 50));
//     };
//
//     const handleCardNumberChange = (e) => {
//         setCardNumber(e.target.value.slice(0, 16));
//     };
//
//     const handleExpiryMonthYearChange = (e) => {
//         setExpiryMonthYear(e.target.value);
//     };
//
//     const handleCVVChange = (e) => {
//         setCVV(e.target.value.slice(0, 3));
//     };
//
//     const handleExpiryOptionChange = (e) => {
//         setExpiryOption(e.target.value);
//     };
//
//     const validate = () => {
//         const [expiryYear, expiryMonth] = expiryMonthYear.split('-');
//
//         if (
//             cardHolderName.trim() === '' ||
//             cardNumber.length !== 16 ||
//             !expiryMonth || !expiryYear ||
//             cvv.trim() === '' || cvv.length !== 3
//         ) {
//             alert('Vänligen fyll i alla obligatoriska fält korrekt.');
//             return false;
//         }
//
//         return true;
//     };
//
//     const handlePaymentSubmit = async () => {
//         if (validate()) {
//             try {
//                 const paymentData = {
//                     cardHolderName,
//                     cardNumber,
//                     expiryMonth: expiryMonthYear.split('-')[5], // Använd andra delen för år
//                     expiryYear: expiryMonthYear.split('-')[0],  // Använd första delen för månad
//                     cvv,
//                     expiryOption,
//                 };
//
//                 const response = await axios.post('https://din-backend-api.com/betalning', paymentData);
//
//                 console.log('Betalning lyckades:', response.data);
//                 alert('Betalningen har behandlats.');
//             } catch (error) {
//                 console.error('Fel vid betalning:', error.message);
//                 alert('Något gick fel vid betalningen. Vänligen försök igen.');
//             }
//         }
//     };
//
//     return (
//         <div className="boxpay">
//             <h5>Betalingssida:!</h5>
//             <form>
//                 <label>
//                     Kortinnehavarens namn:
//                     <input type="text" value={cardHolderName} onChange={handleCardHolderNameChange} required />
//                 </label>
//
//                 <br />
//
//                 <label>
//                     Kortnummer:
//                     <input type="text" value={cardNumber} onChange={handleCardNumberChange} required />
//                 </label>
//
//                 <br />
//
//                 <label>
//                     Giltighetsmånad och år:
//                     <input type="month" value={expiryMonthYear} onChange={handleExpiryMonthYearChange} required />
//                 </label>
//
//                 <br />
//
//                 <label>
//                     CVV:
//                     <input type="text" value={cvv} onChange={handleCVVChange} maxLength="3" required />
//                 </label>
//
//                 <br />
//
//                 <label>
//                     Giltighetstid:
//                     <select value={expiryOption} onChange={handleExpiryOptionChange} required>
//                         <option value="24">24 månader</option>
//                     </select>
//                 </label>
//
//                 <br />
//
//                 <button type="button" onClick={handlePaymentSubmit}>
//                     Bekräfta betalning
//                 </button>
//
//                 <img className='betalning-icon' src="../../photos/betalnings.jpg" alt="" />
//
//             </form>
//         </div>
//     );
// };
//
// export default PaymentPage;

import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const PaymentPage = () => {
    const [cardHolderName, setCardHolderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonthYear, setExpiryMonthYear] = useState('');
    const [cvv, setCVV] = useState('');
    const [expiryOption, setExpiryOption] = useState('12');





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

    const handleExpiryOptionChange = (e) => {
        setExpiryOption(e.target.value);
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
                    expiryOption,
                };

                const response = await axios.post('https://din-backend-api.com/betalning', paymentData);

                console.log('Betalning lyckades:', response.data);
                alert('Betalningen har behandlats.');

                // Om betalningen lyckades, navigera till bekräftelsesidan

            } catch (error) {
                console.error('Fel vid betalning:', error.message);
                alert('Något gick fel vid betalningen. Vänligen försök igen.');
            }
        }
    };

    return (
        <div className="boxpay">
            <h5>Betalingssida:!</h5>
            <form>
                <label>
                    Kortinnehavarens namn:
                    <input type="text" value={cardHolderName} onChange={handleCardHolderNameChange} required />
                </label>

                <br />

                <label>
                    Kortnummer:
                    <input type="text" value={cardNumber} onChange={handleCardNumberChange} required />
                </label>

                <br />

                <label>
                    Giltighetsmånad och år:
                    <input type="month" value={expiryMonthYear} onChange={handleExpiryMonthYearChange} required />
                </label>

                <br />

                <label>
                    CVV:
                    <input type="text" value={cvv} onChange={handleCVVChange} maxLength="3" required />
                </label>

                <br />

                <label>
                    Giltighetstid:
                    <select value={expiryOption} onChange={handleExpiryOptionChange} required>
                        <option value="24">24 månader</option>
                    </select>
                </label>

                <br />
                <Link to="/ConfirmedPage">
                    <button type="button" onClick={handlePaymentSubmit}>
                        Bekräfta betalning
                    </button>

                </Link>
                <img className='betalning-icon' src="../../photos/betalnings.jpg" alt="" />

            </form>



        </div>
    );
};

export default PaymentPage;

