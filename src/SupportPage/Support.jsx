import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Support.css';
import MapComponent from './MapComponent.jsx';

export const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3euqlw5', 'template_n1kiexa', form.current, {
        publicKey: 'BQausaa_7cEodVftr',
      })
      .then(
        () => {
          setSuccessMessage('Ditt meddelande har skickats!');
          setErrorMessage('');
        },
        (error) => {
          setErrorMessage('Misslyckades med att skicka meddelandet. Försök igen senare.');
          setSuccessMessage('');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="containerEmail">
    <div className="ContactBox1">
    <form ref={form} onSubmit={sendEmail}>
  <div className="form-row">
    <label htmlFor="user_name">Name</label>
    <input className='ContactInputs' type="text" id="user_name" name="user_name" />
  </div>
  <div className="form-row">
    <label htmlFor="user_email">Din Epost</label>
    <input className='ContactInputs' type="email" id="user_email" name="user_email" />
  </div>
  <div className="form-row">
    <label htmlFor="message">Message</label>
    <textarea className='ContactInputs' id="message" name="message" />
  </div>
  <div className="form-row">
    <input className='EmailSubmit' type="submit" value="Send" />
  </div>
</form>
{successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
{errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

<img className='contactPhoto' src="./photos/mobilestore.png" alt="" />

    </div>
    <div className="ContactBox2">
      <h2>Telefonnummer</h2>
      <p>070 123 45 67</p>
    </div>
    <div className="ContactBox3">
        <MapComponent/>
    </div>
    </div>
  );
};

export default ContactUs;
