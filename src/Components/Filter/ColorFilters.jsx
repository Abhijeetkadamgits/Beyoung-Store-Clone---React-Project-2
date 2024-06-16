import React from 'react'
import {Link} from 'react-router-dom'
import {ColorData} from '../../ConstentData'
import './filter.css'
function ColorFilter({ selectedColor,onColorItemClick }) {
    const handleColorItemClick = (color) => {
      onColorItemClick(color);
    };
  return (
    <>
     <div className="color-section">
        <div className="color-container">
          {ColorData.map((item,index)=>(
            <div className={`color-item-outer ${selectedColor === item.color ? 'selected' : ''}`}
            key={index}
            onClick={() => handleColorItemClick(item.color)}>
            <div className="color-item" style={{backgroundColor:item.bg_color}} ></div>
            </div>
          ))}
        </div>
     </div>
    </>
  )
}

export default ColorFilter