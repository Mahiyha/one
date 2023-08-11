import React from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css'; // Import the default styles

const Progress = ({ steps, currentStep }) => {
  return (
    <ProgressBar
      percent={(currentStep / (steps.length - 1)) * 100}
      filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    >
      {steps.map((step, index) => (
        <Step key={index} transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished ? 'completed' : ''}`}>
              {step}
            </div>
          )}
        </Step>
      ))}
    </ProgressBar>
  );
};

export default Progress;
