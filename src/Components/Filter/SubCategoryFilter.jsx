import React from 'react';
import { Link } from 'react-router-dom';
import { SubcategoryData } from '../../ConstentData';
import './filter.css';

function SubCategoryFilter({ selectCategary, onCategoryChange }) {
  const categoryItemClick = (subCategory) => {
    onCategoryChange(subCategory);
  };

  return (
    <div className="sub-c-section">
      <div className="sub-c-container">
        {SubcategoryData.map((item, index) => (
          <div
            className={`sub-c-optionn ${selectCategary === item.subCategory ? 'selected' : ''}`}
            onClick={() => categoryItemClick(item.subCategory)} 
            key={index}
          >
            <p>{item.h_subCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubCategoryFilter;
