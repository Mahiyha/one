import React from 'react';
import './index.css'
const AddressForm = ({ formData, handleChange, nextStep, prevStep }) => {
  const { fullName, mobileNumber, flatHouseNo, building, company, apartment, landmark, country, state, town, city } = formData;

  return (
    <div class = 'one'>
      <h1> </h1>
      <h1></h1>
      <h2>Address Details</h2>
      <div className="form-group">
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={fullName}
          onChange={handleChange}
          placeholder='Enter your Full Name '
          required
        />
      </div>
      <div className="form-group">
        <label>Mobile Number:</label>
        <input
          type="tel"
          name="mobileNumber"
          value={mobileNumber}
          onChange={handleChange}
          pattern="[0-9]{10}"
          placeholder='Enter your mobile Number'
          required
        />
      </div>
      <div className="form-group">
        <label>Flat / House No:</label>
        <input
          type="text"
          name="flatHouseNo"
          value={flatHouseNo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Building:</label>
        <input
          type="text"
          name="building"
          value={building}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Company:</label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Apartment:</label>
        <input
          type="text"
          name="apartment"
          value={apartment}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Landmark:</label>
        <input
          type="text"
          name="landmark"
          value={landmark}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Town:</label>
        <input
          type="text"
          name="town"
          value={town}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
          required
        />
      </div>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default AddressForm;
