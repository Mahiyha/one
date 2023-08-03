import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
