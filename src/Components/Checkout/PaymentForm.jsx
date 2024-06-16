import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessPay from '../../assets/success.jpg'
const PaymentForm = ({ handleCheckout }) => {
  // State to hold form input values
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  // const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic to handle payment submission here
    console.log('Payment submitted!');
    sessionStorage.removeItem('priceDetails');
    setShowSuccessModal(true); // Show success modal
    setTimeout(() => {
      setShowSuccessModal(false); 
      setTimeout(() => {
        handleCheckout(); // Activate handleCheckout after hiding modal
      }, 1000);
    }, 1000);
  };

  // Function to handle changes in expiry input
  const handleExpiryChange = (e) => {
    const value = e.target.value;
    // Check if the value is in MM/YY format
    if (/^\d{0,2}\/?\d{0,2}$/.test(value)) {
      // Automatically insert slash (/) after the first two digits (MM)
      if (value.length === 2 && !value.includes('/')) {
        setExpiry(value + '/');
      } else {
        setExpiry(value);
      }
    }
  };

// Function to handle changes in card number input
const handleCardNumberChange = (e) => {
  const value = e.target.value.slice(-16).replace(/\D/g, ''); // Take only the last 16 digits and remove non-digits
  setCardNumber(value);
};


// Function to handle changes in CVV input
const handleCVVChange = (e) => {
  const value = e.target.value.slice(-3).replace(/\D/g, ''); // Take only the last 3 digits and remove non-digits
  setCvv(value);
};

  return (
    <div className="payment-container">
      <h2>Enter Card Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardName">Cardholder Name</label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry">Expiry Date</label>
            <input
              type="text"
              id="expiry"
              value={expiry}
              onChange={handleExpiryChange}
              placeholder="MM/YY"
              maxLength="5" // Limit to 5 characters (MM/YY)
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCVVChange}
              placeholder="123"
              maxLength="3" // Limit to 3 characters
              required
            />
          </div>
        </div>
        <button type="submit">Pay Now</button>
      </form>
      {showSuccessModal && (
        <div className="success-modal">
          <img src={SuccessPay} alt="" />
          <p>Payment successfully done!</p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
