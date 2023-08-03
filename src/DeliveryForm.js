import React from 'react';

const DeliveryForm = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div>
      <h2>Delivery</h2>
      {/* Your delivery form fields */}
      {/* For example, delivery options, estimated delivery time, etc. */}
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default DeliveryForm;
