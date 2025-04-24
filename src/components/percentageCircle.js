import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function PercentageCircle({ percentage }) {
  const customStyles = {
    path: {
      stroke: '#F57F20',
    },
    text: {
      fill: '#F57F20', 
    },
  }
  return (
    <div className="w-12">
      <CircularProgressbar value={percentage} text={`${percentage}%`} styles={customStyles} />
    </div>
  );
}

export default PercentageCircle;
