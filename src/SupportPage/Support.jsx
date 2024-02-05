import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Support.css';

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
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Din Epost</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
};

export default ContactUs;
