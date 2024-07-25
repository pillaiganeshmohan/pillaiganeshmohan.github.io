import React from 'react';
import '../App.css';

const CustomDots = ({ dots, onDotClick }) => {
  if (dots.length === 0) return null;

  return (
    <div className="custom-dots">
      {dots.map((dot, index) => (
        <div
          key={index}
          className={`dot ${dot.props.className.includes('slick-active') ? 'line' : ''}`}
          onClick={() => onDotClick(index)}
        >
          {dot.props.className.includes('slick-active') ? '' : dot}
        </div>
      ))}
    </div>
  );
};

export default CustomDots;
