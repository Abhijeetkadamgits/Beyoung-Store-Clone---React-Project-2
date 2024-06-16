import React from 'react'
import underProgress from '../image/Under construction-amico.png'
import './commingsoon.css'
function CommingSoon() {
    return (
        <div className="commingsoon-section">
          <div className="commingsoon-container">
            <img src={underProgress} alt="under progress" />
            <h2>Hi, hope you are doing well.</h2>
              <h1>This feature is coming soon, stay tuned!</h1>
          </div>
        </div>
      )
}

export default CommingSoon