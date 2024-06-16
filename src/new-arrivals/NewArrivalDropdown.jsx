import React from 'react'
import { Link } from 'react-router-dom'
import {newArrivalDropdownData} from '../ConstentData'
import './newarrivals.css'
function NewArrivalDropdown({onClose}) {
  const handleLinkClick = () => {
    onClose(); // Call the onClose function to close the dropdown
  };
  return (
    <div className='new-arrival-section'>
      <div className="new-arrival-container">
        {newArrivalDropdownData.map((data,index)=>(
          <Link key={index} to={`/${data.path}`} onClick={handleLinkClick}>{data.heading}</Link>
        ))}
      </div>
    </div>
  )
}

export default NewArrivalDropdown