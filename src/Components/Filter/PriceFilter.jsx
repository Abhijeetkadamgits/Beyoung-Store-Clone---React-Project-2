import React, { useState } from 'react';
import { PriceData } from '../../ConstentData';
import './filter.css';

function PriceFilter({ onPriceChange }) {
  const [selectedPriceOrder, setSelectedPriceOrder] = useState(null);

  const handlePriceOrderChange = (order) => {
    if (selectedPriceOrder === order) {
      // If the same checkbox is clicked again, uncheck it
      setSelectedPriceOrder(null);
      // Notify the parent component about the change
      onPriceChange(null); 
     
    } else {
      // Otherwise, update the selected order
      setSelectedPriceOrder(order);
      onPriceChange(order); // Notify the parent component about the change
    }
  };

  return (
    <>
      <div className="price-section">
        <div className="price-container">
          {PriceData.map((item, index) => (
            <div className="price-option" key={index}>
              <input
                type="checkbox"
                id={`price-${index}`}
                value={item}
                checked={selectedPriceOrder === item}
                onChange={() => handlePriceOrderChange(item)}
              />
              <label htmlFor={`price-${index}`}>{item}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PriceFilter;
