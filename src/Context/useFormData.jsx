import { useState } from 'react';
import React from 'react';

const useFormData = () => {
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    zipcode: '',
    personalNumber: '',
  });

  const updateFormData = (newFormData) => {
    setFormData(newFormData);
  };

  return { formData, updateFormData };
};

export default useFormData;