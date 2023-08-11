import React, { useState } from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';
import './MultiStepBuyerPage.css'; // 
import ProductDetailsForm from './ProductDetailsForm';
import AddressForm from './AddressForm';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';
import PlaceOrder from './PlaceOrder';
import './index.css';
const steps = [
  { name: 'Product Details', component: ProductDetailsForm },
  { name: 'Address Details', component: AddressForm },
  { name: 'Delivery', component: DeliveryForm },
  { name: 'Payment Form', component: PaymentForm },
  { name: 'Place Order', component: PlaceOrder },
];

const MultiStepBuyerPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ /* ...initial form data */ });

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
    // Logic to place the order
  };

  const CurrentForm = steps[currentStep - 1].component;

  return (
    
      <div className="multistep-container">
        <ProgressBar
          percent={(currentStep / steps.length) * 100}
          filledBackground="linear-gradient(to right, #746c6c,#000)"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              {({ accomplished }) => (
                <div className={`step ${accomplished ? 'accomplished' : null}`}>
                  {step.name}
                </div>
              )}
            </Step>
          ))}
        </ProgressBar>
      
    
      

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
