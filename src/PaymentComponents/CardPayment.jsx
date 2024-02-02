
import {Link} from "react-router-dom";
import './Payment.css';
import React, { useState } from 'react';

const MyForm = () => {
    const [numbers, setNumbers] = useState('');
    const [letters, setLetters] = useState('');
    const [date, setDate] = useState('');

    const handleNumbersChange = (e) => {
        setNumbers(e.target.value);
    };

    const handleLettersChange = (e) => {
        setLetters(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const validateForm = () => {
        if (numbers.length === 16 && /^[A-Za-z]{3}$/.test(letters) && date) {
                alert('Alla krav är uppfyllda. Du kan gå vidare!');
                // Här kan du lägga till logik för att gå vidare i din applikation
            } else {
                alert('Vänligen fyll i fälten korrekt.');
            }
                };

                return (
                <div>
                    <label>
                        Ange siffror (exakt 16):
                        <input type="text" value={numbers} onChange={handleNumbersChange} pattern="\d{5}" title="Ange exakt 5 siffror" />
                    </label>

                    <br />

                    <label>
                Ange bokstäver (exakt 3):
                <input type="text" value={letters} onChange={handleLettersChange} pattern="[A-Za-z]{3}" title="Ange exakt 3 bokstäver" />
            </label>

            <br />

            <label>
                Ange datum:
                <input type="date" value={date} onChange={handleDateChange} />
            </label>

            <br />

            <button onClick={validateForm}>Gå vidare</button>
        </div>
    );
};

export default MyForm;
