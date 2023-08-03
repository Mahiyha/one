import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetailsForm = ({ nextStep }) => {
  const [productDetails, setProductDetails] = useState({
    productName: '',
    giftOptions: false,
    additionalDetails: '',
    price: '',
    soldBy: '',
    quantity: '',
    // Add more product details as needed
  });

  useEffect(() => {
    // Fetch the product details from the backend API
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      // Make an API call to your backend server to fetch the product details
      const response = await axios.get('/api/product/details'); // Replace with your backend endpoint
      const data = response.data;

      // Update the component state with the fetched product details
      setProductDetails(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  // Rest of the component code remains unchanged
  const { productName, giftOptions, additionalDetails, price, soldBy, quantity } = productDetails;

  return (
    <div>
      <h2>Product Details</h2>
      {/* ... rest of the component JSX ... */}
      {/* Remove the previous button */}
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default ProductDetailsForm;
