import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { TbShieldLockFilled } from "react-icons/tb";
import { CartFooter } from '../../ConstentData';
import Cart from './Cart';
import CAddress from './CAddress';
import Payment from './Payment';
import { Stepper, Step, StepLabel } from '@mui/material';
import Beyoung from '../../assets/beyoung2.png'
import './checkout.css'
function CheckOut() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Cart', 'Address', 'Payment'];
    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <>
            <div className="checkout-section">
                <div className="checkout-container">
                    <div className="checkout-header">
                        <div className="ch-left">
                            <div className="logo">
                                <Link to="/">
                                    <img src={Beyoung} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="ch-right">
                            <div className="se-icon"><TbShieldLockFilled /></div>
                            <h2>100% SECURE PAYMENT</h2>
                        </div>
                    </div>
                    <div className="checkout-body">
                        <div className="progress-bar">
                            <Stepper activeStep={activeStep} >
                                {steps.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </div>
                        <div className="checkout-content">
                            {/* Render content based on activeStep */}
                            {activeStep === 0 && <Cart handleStepChange={handleStepChange} />}
                            {activeStep === 1 && <CAddress handleStepChange={handleStepChange} />}
                            {activeStep === 2 && <Payment handleStepChange={handleStepChange} />}
                        </div>
                    </div>
                    <div className="checkout-footer">
                        {CartFooter.map((item, index) => (
                            <img src={item} alt="" key={index} />
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default CheckOut