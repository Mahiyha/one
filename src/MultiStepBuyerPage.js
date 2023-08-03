import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import ProductDetailsForm from './ProductDetailsForm';
import AddressForm from './AddressForm';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';
import PlaceOrder from './PlaceOrder';

const steps = [
  { name: 'Product Details', component: ProductDetailsForm },
  { name: 'Address Details', component: AddressForm },
  { name: 'Delivery', component: DeliveryForm },
  { name: 'Payment Form', component: PaymentForm },
  { name: 'Place Order', component: PlaceOrder },
];

const MultiStepBuyerPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize form data with default values
    // You can add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const placeOrder = () => {
    // You can implement the logic to place the order here
    console.log('Order placed successfully!');
  };

  const CurrentForm = steps[currentStep - 1].component;

  return (
    <div>
      <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

      <CurrentForm
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
        placeOrder={placeOrder}
      />
    </div>
  );
};

export default MultiStepBuyerPage;
