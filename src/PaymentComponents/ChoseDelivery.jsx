import React from 'react';
import { Link } from 'react-router-dom';

const ChoseDelivery = () => {
  return (
    <div>
      {/* Välj hur du vill betala, gör dessa klickbara och ev. zooma ut*/}
      <div className='FirstHalf'>
        <h2>Hämta i butik</h2>
      </div>
      <div className='SecondHalf'>
        <h2>Hemleverans</h2>
        
      </div>
    </div>
  );
};

export default ChoseDelivery;
