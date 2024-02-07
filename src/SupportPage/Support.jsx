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
  const handleRingUppClick = () => {
    window.location.href = 'tel:+123456789';
    //För att ringa upp
  };
  return (
    
    
    
    <div className="containerEmail">
    <div className='Header'>
      <h1>Kontakta Oss</h1>
    </div>
    
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

<img className='contactPhoto' src="./photos/tech-support.png" alt="" />

    </div>
    <div className="ContactBox2">
    <h2>Slå oss en signal!</h2>
      <svg width="100px" height="100px" viewBox="0 0 128 128" onClick={handleRingUppClick} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ariaHidden="true" role="img" className="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
        <path d="M29.7 41.3c-1.9 0-3.7 1.5-3.7 3.7v7.6c0 1.4-1.1 2.5-2.5 2.5h-15C6 55 4 57 4 59.5v9.9C4 71.9 6.1 74 8.6 74h14.9c1.4 0 2.5 1.1 2.5 2.5V83c0 2.2 1.8 3.7 3.7 3.7c.9 0 1.8-.3 2.6-1.1l18.3-18.3c1.8-1.8 1.9-4.8 0-6.7L32.3 42.4c-.8-.8-1.7-1.1-2.6-1.1z" fill="#b0bec5"></path><path d="M113.74 124h-46.8c-4.7 0-8.6-3.8-8.6-8.6V12.6c0-4.7 3.9-8.6 8.6-8.6h46.8c4.7 0 8.6 3.8 8.6 8.6v102.9c0 4.7-3.9 8.5-8.6 8.5z" fill="#424242"></path>
        <path d="M113.11 120.11H66.26c-2.15 0-3.89-1.74-3.89-3.89V19.65c0-2.14 1.74-3.88 3.88-3.88h48.15c2.15 0 3.89 1.74 3.89 3.89v95.93c.01.93-1.39 4.52-5.18 4.52z" fill="#000000"></path><path d="M99.99 11.59h-19.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2h19.1c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.1 1.2z" fill="#212121"></path>
        <path d="M113.74 6c3.64 0 6.6 2.96 6.6 6.6v102.9c0 3.58-2.96 6.5-6.6 6.5h-46.8c-3.64 0-6.6-2.96-6.6-6.6V12.6c0-3.58 3.02-6.6 6.6-6.6h46.8m0-2h-46.8c-4.7 0-8.6 3.9-8.6 8.6v102.8c0 4.8 3.9 8.6 8.6 8.6h46.8c4.7 0 8.6-3.8 8.6-8.5V12.6c0-4.8-3.9-8.6-8.6-8.6z" fill="#757575"></path>
        <path d="M74.68 29.96h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" fill="#eab56e"></path>
        <path d="M87.24 29.96h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" fill="#fb8c00"></path>
        <path d="M99.79 29.96h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" fill="#ff80ab"></path>
        <path d="M112.34 29.96h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c.01.73-.59 1.32-1.32 1.32z" fill="#0288d1"></path>
        <path d="M74.68 44.12h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" fill="#00bfa5"></path>
        <path d="M87.24 44.12h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" fill="#81d4fa"></path>
        <path d="M99.79 44.12h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" fill="#fb8c00"></path>
        <path d="M112.34 44.12h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c.01.73-.59 1.32-1.32 1.32z" fill="#eab56e"></path>
        <path d="M74.68 58.28h-6.36c-.73 0-1.32-.59-1.32-1.32V50.6c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" fill="#fb8c00"></path>
        <path d="M87.24 58.28h-6.36c-.73 0-1.32-.59-1.32-1.32V50.6c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" fill="#ff80ab"></path>
        <path d="M99.79 58.28h-6.36c-.73 0-1.32-.59-1.32-1.32V50.6c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" fill="#00bfa5"></path>
        <path d="M112.34 58.28h-6.36c-.73 0-1.32-.59-1.32-1.32V50.6c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c.01.73-.59 1.32-1.32 1.32z" fill="#0288d1"></path>
        <path d="M74.68 72.44h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" fill="#0288d1"></path>
        <path d="M87.24 72.44h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .73-.59 1.32-1.32 1.32z" fill="#81d4fa"></path>
        <path d="M74.68 114.92h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .72-.59 1.32-1.32 1.32z" fill="#81d4fa"></path>
        <path d="M87.24 114.92h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .72-.59 1.32-1.32 1.32z" fill="#0288d1"></path>
      <path d="M99.79 114.92h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c0 .72-.59 1.32-1.32 1.32z" fill="#00bfa5"></path>
      <path d="M112.34 114.92h-6.36c-.73 0-1.32-.59-1.32-1.32v-6.36c0-.73.59-1.32 1.32-1.32h6.36c.73 0 1.32.59 1.32 1.32v6.36c.01.72-.59 1.32-1.32 1.32z" fill="#ff80ab"></path>
      </g></svg>
     <p className='PhoneNumber'>Telefonnummer: 070 123 45 67</p>
    </div>
    <div className="ContactBox3">
        <MapComponent/>
    </div>
    </div>
  );
};

export default ContactUs;
