import React from 'react'
import { Link } from 'react-router-dom';
import { NewArrivalData } from '../../ConstentData';
import './filter.css'
function NewArrivalFilter({ selectCategary, onCategoryChange }) {
    const categoryItemClick = (subCategory) => {
        onCategoryChange(subCategory);
      };
    
      return (
        <div className="newarrival-f-section">
          <div className="newarrival-f-container">
            {NewArrivalData.map((item, index) => (
              <div
                className={`newarrival-f-optionn ${selectCategary === item.subCategory ? 'selected' : ''}`}
                onClick={() => categoryItemClick(item.subCategory)} 
                key={index}
              >
                <p>{item.na_heading}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default NewArrivalFilter