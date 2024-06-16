import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { MyAccountDropdownData } from '../ConstentData'
import Auth from '../Authenticion/auth'
function MyAccountDropdown({onClose}) {
    const UserName = sessionStorage.getItem('userInfoN');
    const UserEmail=sessionStorage.getItem('userInfoE')
    const isAuthenticated = Auth.isAuthenticated();
    if (!isAuthenticated) {
        return null; 
    }
    return (
        <div className='MyADrop-section'>
          <div className="MyADrop-container">
            <div className="a-detail">
                <h3>{UserName}</h3>
                <p>{UserEmail}</p>
            </div>
            {MyAccountDropdownData.map((data,index)=>(
              <Link key={index} to={`${data.path}`} onClick={onClose}>{data.heading} <IoIosArrowForward /></Link>
            ))}
          </div>
        </div>
      )
}

export default MyAccountDropdown