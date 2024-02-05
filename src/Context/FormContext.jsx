import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    zipcode: '',

    nameDelivery: '',
    addressDelivery: '',
    cityDelivery: '',
    zipCodeDelivery: '',
    selectedOptionDelivery: '',
  });

  const updateFormData = (data) => {
    setFormData(data);
  };



  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
