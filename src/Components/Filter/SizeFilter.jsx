import React from 'react'
import {Link} from 'react-router-dom'
import { SizeData } from '../../ConstentData'
import './filter.css'
function SizeFilter({selectedSize,onSizeItemClick}) {
  const handleSizeItemClick =(size)=>{
    onSizeItemClick(size);
  }
  return (
    <>
    <div className="size-section">
       <div className="size-container">
         {SizeData.map((item,index)=>(
          <div className={`size_aria ${selectedSize === item.size ? 'selected' : ''}`} key={index}
          onClick={()=>handleSizeItemClick(item.size)}
          >
            <p>{item.d_size}</p>
          </div>
         ))}
       </div>
    </div>
   </>
  )
}

export default SizeFilter