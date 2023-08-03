import React, { useState } from 'react';

const CardDetailsPage = ({ formData, handleChange, prevStep, nextStep }) => {
  // Define months and years for the dropdown lists
  const months = Array.from({ length: 12 }, (_, index) => index + 1); // 1 to 12
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

  return (
    <div>
      <h2>Card Details</h2>
      <div className="form-group">
        <label>Cardholder Name:</label>
        <input
          type="text"
          name="cardHolderName"
          value={formData.cardHolderName}
          onChange={handleChange}
          placeholder="Cardholder Name"
          required
        />
      </div>
      <div className="form-group">
        <label>Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
          pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
          required
        />
        <small>Format: xxxx-xxxx-xxxx-xxxx</small>
      </div>
      <div className="form-group">
        <label>Expiry Date:</label>
        <div className="expiry-date-group">
          <select
            name="expiryMonth"
            value={formData.expiryMonth}
            onChange={handleChange}
            required
          >
            <option value="">Month</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            name="expiryYear"
            value={formData.expiryYear}
            onChange={handleChange}
            required
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default CardDetailsPage;
