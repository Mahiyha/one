import React from 'react';
import './index.css'

const PaymentForm = ({ formData, handleChange, prevStep, nextStep }) => {
  const worldBanks = [
    'Bank A',
    'Bank B',
    'Bank C',
    // Add more banks as needed
  ];

  const creditCardYears = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year <= currentYear + 10; year++) {
    creditCardYears.push(year);
  }

  const creditCardMonths = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'
  ];

  return (
    <div>
      <h1>
      </h1>
      <h2>Payment</h2>
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
          {formData.paymentMethod === 'upi' && (
            <div className="sub-options">
              <label className="radio-label">
                <input
                  type="radio"
                  name="upiOption"
                  value="gpay"
                  checked={formData.upiOption === 'gpay'}
                  onChange={handleChange}
                />
                GPay
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="upiOption"
                  value="phonepay"
                  checked={formData.upiOption === 'phonepay'}
                  onChange={handleChange}
                />
                PhonePay
              </label>
            </div>
          
          )}
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
          {formData.paymentMethod === 'card' && (
            <div className="sub-options">
              <div className="form-group card-holder">
                <label>Card Holder Name:</label>
                <input
                  type="text"
                  name="cardHolderName"
                  value={formData.cardHolderName}
                  onChange={handleChange}
                  placeholder="Card Holder Name"
                  required
                />
              </div>
              <div className="form-group card-number">
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
              <div className="form-group expiry-cvv">
                <div className="expiry-group">
                  <label>Expiry Date:</label>
                  <div className="expiry-date-group">
                    <select
                      name="expiryMonth"
                      value={formData.expiryMonth}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Month</option>
                      {creditCardMonths.map((month) => (
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
                      {creditCardYears.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="cvv-group">
                  <label>CVV:</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="CVV"
                    pattern="[0-9]{3}"
                    required
                  />
                  <small>3 digits at the back of your card</small>
                </div>
              </div>
            </div>
          )}
          <label className="radio-label">
            <input
              type="radio"
              name="paymentMethod"
              value="netbanking"
              checked={formData.paymentMethod === 'netbanking'}
              onChange={handleChange}
            />
            Net Banking
          </label>
          {formData.paymentMethod === 'netbanking' && (
            <div className="sub-options">
              <div className="form-group">
                <label>Select Bank:</label>
                <select
                  name="selectedBank"
                  value={formData.selectedBank}
                  onChange={handleChange}
                >
                  <option value="">Select Bank</option>
                  {worldBanks.map((bank) => (
                    <option key={bank} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          <label className="radio-label">
            <input
              type="radio"
              name="paymentMethod"
              value="cashondelivery"
              checked={formData.paymentMethod === 'cashondelivery'}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>

            {/* Coupon option */}
      <div className="coupon-option">
        <label>Add Coupon </label>
        <input
          type="text"
          name="couponCode"
          value={formData.couponCode}
          onChange={handleChange}
          placeholder="Enter coupon code"
        />
        <button>Verify</button>
      </div>
          {/* ... Other payment options ... */}
        </div>
      </div>

      {/* Additional payment options form fields */}
      {/* ... Other payment options ... */}

      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default PaymentForm;
