import React from 'react'
import { Link } from 'react-router-dom';
import { BBFevouritData } from '../../ConstentData';
import './filter.css'

function BBFevouriteFilter({ selectCategary, onCategoryChange }) {
    const categoryItemClick = (subCategory) => {
        onCategoryChange(subCategory);
      };
    
      return (
        <div className="fab-c-section">
          <div className="fab-c-container">
            {BBFevouritData.map((item, index) => (
              <div
                className={`fab-c-optionn ${selectCategary === item.subCategory ? 'selected' : ''}`}
                onClick={() => categoryItemClick(item.subCategory)} 
                key={index}
              >
                <img src={item.f_img} alt="" />
              </div>
            ))}
          </div>
        </div>
      );
}

export default BBFevouriteFilter