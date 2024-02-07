import React from 'react';
import './Support.css';

const MapComponent = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8137.04104263346!2d18.0233301!3d59.3453033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d9d263b022d%3A0x82fc0f30ed84f9ed!2sNackademin!5e0!3m2!1ssv!2sse!4v1707047984535!5m2!1ssv!2sse"
      width="600"
      height="450"
      className='Map-contact'
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapComponent;