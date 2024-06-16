import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Paymentimg from '../../image/Payment-Img.png';
import { BsCheckCircleFill } from "react-icons/bs";
import PaymentForm from './PaymentForm';
import './checkout.css';

function Payment({ handleStepChange }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserName = sessionStorage.getItem('userInfoN');
    const storedUserEmail = sessionStorage.getItem('userInfoE');
    if (storedUserName && storedUserEmail) {
      setUserName(storedUserName);
      setUserEmail(storedUserEmail);
    }
  }, []);

  const handleCheckout = () => {
    navigate('/myaccount/order');
    
  };

  // Retrieve price details from session storage
  const priceData = JSON.parse(sessionStorage.getItem('priceDetails'));
  const totalPriceWithGST = parseFloat(priceData.totalPriceWithGST);
  const discountAmount = parseFloat(priceData.discountAmount);
  const ShippingFee = parseFloat(priceData.shippingFee);
  const TotalAmount = parseFloat(priceData.totalAmount);

  return (
    <>
      <div className="pa-content pay-op">
        <PaymentForm handleCheckout={handleCheckout} />
      </div>
      <div className="ch-prising">
        <div className="delivery-address">
          <div className="deli-to"><BsCheckCircleFill /><p>Deliver To:</p><h3>{userName}</h3></div>
          <div className="deli-contact">
            <BsCheckCircleFill /><p>Contact Email:</p>{userEmail} <h3></h3>
          </div>
        </div>
        <div className="pd-conterner">
          <div className="pdc-child pdch"><p>PRICE DETAILS ({priceData.totalItems} items)</p></div>
          <div className="pdc-child pdc-data"><span>Total MRP (Inc. of Taxes)</span><span>₹{totalPriceWithGST.toFixed(2)}</span></div>
          <div className="pdc-child pdc-data"><span>Beyoung Discount</span><span>- ₹{discountAmount.toFixed(2)}</span></div>
          <div className="pdc-child pdc-data"><span>Shipping</span><span>₹{ShippingFee.toFixed(2)}</span></div>
          <div className="pdc-child pdc-data"><span>Cart Total</span><span>₹{TotalAmount.toFixed(2)}</span></div>
        </div>
        {/* <div className="ta-conterner">
          <div className="tac-child"><h3>Total Amount</h3><h3>₹{TotalAmount.toFixed(2)}</h3></div>
          <div className="tac-save"><span>You Saved ₹{discountAmount.toFixed(2)} on this order</span></div>
          <div className="steper-btn" onClick={handleCheckout}><h3>CHECKOUT SECURELY</h3></div>
        </div> */}
      </div>
    </>
  )
}

export default Payment;
