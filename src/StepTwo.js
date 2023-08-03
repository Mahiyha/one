import React from 'react';

const StepTwo = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Step 2</h2>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {/* Add more fields for Step 2 */}
    </div>
  );
};

export default StepTwo;
