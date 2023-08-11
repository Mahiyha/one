import React from 'react';

const DeliveryForm = ({ formData, handleChange, nextStep, prevStep }) => {
  const getNextTenDaysWithTime = () => {
    const today = new Date();
    const nextTenDaysWithTime = [];

    for (let i = 0; i < 10; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      nextTenDaysWithTime.push({
        day: nextDay.toLocaleDateString('en-US', { weekday: 'long' }),
        time: '12:00 PM', // Replace with the desired time format
      });
    }

    return nextTenDaysWithTime;
  };

  const deliveryDatesWithTime = getNextTenDaysWithTime();

  const deliverySpeedOptions = ['10 min', '20 min', '30 min', '1 hour', '2 hours'];

  return (
    <div className="delivery-form-container">
      <h1>
        
      </h1>
      <h2>Delivery</h2>
      <div className="form-group">
        <label>Select Delivery Date:</label>
        <select
          name="selectedDeliveryDate"
          value={formData.selectedDeliveryDate}
          onChange={handleChange}
        >
          <option value="">Select Date</option>
          {deliveryDatesWithTime.map((date, index) => (
            <option key={index} value={date.day}>
              {date.day} ({date.time})
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Select Delivery Speed:</label>
        <select
          name="selectedDeliverySpeed"
          value={formData.selectedDeliverySpeed}
          onChange={handleChange}
        >
          <option value="">Select Speed</option>
          {deliverySpeedOptions.map((speed) => (
            <option key={speed} value={speed}>
              {speed}
            </option>
          ))}
        </select>
      </div>
      {/* Other delivery form fields */}
      {/* For example, delivery address, additional instructions, etc. */}
      <div className="button-group">
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default DeliveryForm;
