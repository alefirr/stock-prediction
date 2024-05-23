import React from 'react';
import './Analysis.css';

export const Analysis = ({ currentTicker }) => {
  console.log(currentTicker);
  return (
    <div className="analysis-container">
      <div className="plot-container"></div>
      <div className="summary-container"></div>
    </div>
  );
};
