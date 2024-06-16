import React from 'react'
import underProgress from '../image/Under construction-amico.png'
function Address() {
  return (
    <div className="address-section">
      <div className="address-container">
        <img src={underProgress} alt="under progress" />
        <h2>Hi, hope you are doing well.</h2>
          <h1>This feature is coming soon, stay tuned!</h1>
      </div>
    </div>
  )
}

export default Address