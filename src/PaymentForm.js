import React from 'react';


const PaymentForm = ({ formData, handleChange, prevStep, nextStep }) => {
  const worldBanks = [
    'Bank A',
    'Bank B',
    'Bank C',
    // Add more banks as needed
  ];

  const handleCardDetailsLink = () => {
    // Implement the logic to navigate to the card details page
    // You can use React Router or any other navigation method here
    // For demonstration purposes, let's assume the card details page is named "CardDetailsPage"
    window.location.href = '/card-details-page';
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <div className="form-group">
        <label>Payment Method:</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={formData.paymentMethod === 'upi'}
              onChange={handleChange}
            />
            UPI
          </label>
          {/* ... UPI options ... */}
          <label className="radio-label">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === 'card'}
              onChange={handleChange}
            />
            Credit Card / Debit Card
          </label>
          {/* ... Other payment options ... */}
        </div>
      </div>

      {/* Display hyperlink for entering card details */}
      {formData.paymentMethod === 'card' && (
        <div>
          <p>Click the link below to enter card details:</p>
          <button onClick={handleCardDetailsLink}>Enter Card Details</button>
        </div>
      )}

      {/* Additional payment options form fields */}
      {formData.paymentMethod === 'netbanking' && (
        <div className="form-group">
          <label>Select Bank:</label>
          <select
            name="selectedBank"
            value={formData.selectedBank}
            onChange={handleChange}
          >
            {/* ... Options for netbanking ... */}
          </select>
        </div>
      )}

      {/* Add more payment options as needed */}

      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default PaymentForm;
