import React from 'react';

const StepOne = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Step 1</h2>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      {/* Add more fields for Step 1 */}
    </div>
  );
};

export default StepOne;
