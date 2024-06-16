import React from 'react'
import {Link} from 'react-router-dom'
import { BrandData } from '../../ConstentData'
import './filter.css'
function BrandFilter({selectedBrand,onBrandItemClick}) {
  const handleBrandItemClick =(brand)=>{
    onBrandItemClick(brand);
  }
  return (
    <>
    <div className="brand-section">
       <div className="brand-container">
         {BrandData.map((item,index)=>(
            <div className={`brand_aria ${selectedBrand === item.brand ? 'selected' : ''}`} key={index}
            onClick={()=>handleBrandItemClick(item.brand)}
            >
              <p>{item.p_brand}</p>
            </div>
         ))}
       </div>
    </div>
   </>
  )
}

export default BrandFilter