import React from 'react';

const PlaceOrder = ({ formData, prevStep, placeOrder }) => {
  return (
    <div>
      <h2>Place Order</h2>
      {/* Display the order summary based on collected form data */}
      <button onClick={prevStep}>Previous</button>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default PlaceOrder;
