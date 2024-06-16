import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Coup from '../../image/coupon.png';
import './checkout.css';

function CAddress({ handleStepChange }) {
    const [addressData, setAddressData] = useState({
        addressType: '',
        address: {
            street: '',
            city: '',
            state: '',
            country: '',
            zipCode: ''
        }
    });

    const [priceData, setPriceData] = useState([]);
    const [totalPriceWithGST, setTotalPriceWithGST] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showWarning, setShowWarning] = useState(false);

    const handleCheckout = async () => {
        if (
            addressData.addressType &&
            addressData.address.street &&
            addressData.address.city &&
            addressData.address.state &&
            addressData.address.country &&
            addressData.address.zipCode
        ) {
            try {
                const url = 'https://academics.newtonschool.co/api/v1/ecommerce/order/convertCartToOrder';
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
                        'projectID': 'mmvz5wuhf8k7',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        addressType: addressData.addressType,
                        address: { ...addressData.address }
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to submit address');
                }

                handleStepChange(2); 
            } catch (error) {
                console.error('Error Submitting Address:', error);
            }
        } else {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false); 
            }, 1000);
        }
    };

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const url = 'https://academics.newtonschool.co/api/v1/ecommerce/cart';
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
                        'projectID': 'mmvz5wuhf8k7'
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setPriceData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error Fetching Data');
                setLoading(false);
            }
        };

        fetchContent();
    }, []);

    useEffect(() => {
        const calculateTotalWithGST = () => {
            const gstPercentage = 18;
            const totalPrice = priceData?.data?.totalPrice || 0;
            const gstAmount = (gstPercentage / 100) * totalPrice;
            const totalPriceAfterGST = totalPrice + gstAmount;
            setTotalPriceWithGST(totalPriceAfterGST);
        };
        calculateTotalWithGST();
    }, [priceData]);

    const discountAmount = (totalPriceWithGST - (priceData?.data?.totalPrice || 0)).toFixed(2);
    const ShippingFee = priceData.results > 0 ? 50 : 0;
    const TotalAmount = (priceData?.data?.totalPrice || 0) + ShippingFee;

    return (
        <>
            <div className="pa-content">
                <div className="put-address-section">
                    <div className="put-address-container">
                        <div className="put-address-head">
                            <h3>&#8226; SHIPPING DETAILS</h3>
                            <div className="add-new-address"><span>+ Add New Address</span></div>
                        </div>
                        <div className="put-address-body">
                        <form>
                            <div className="form-input-group">
                            <input
                                type="text"
                                placeholder="Address Type"
                                value={addressData.addressType}
                                onChange={(e) =>
                                    setAddressData({ ...addressData,
                                        addressType: e.target.value.toUpperCase() })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Street"
                                value={addressData.address.street}
                                onChange={(e) =>
                                    setAddressData({
                                        ...addressData,
                                        address: { ...addressData.address, street: e.target.value }
                                    })
                                }
                            />
                            </div>
                            <div className="form-input-group">
                            <input
                                type="text"
                                placeholder="City"
                                value={addressData.address.city}
                                onChange={(e) =>
                                    setAddressData({
                                        ...addressData,
                                        address: { ...addressData.address, city: e.target.value }
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="State"
                                value={addressData.address.state}
                                onChange={(e) =>
                                    setAddressData({
                                        ...addressData,
                                        address: { ...addressData.address, state: e.target.value }
                                    })
                                }
                            />
                            </div>
                            <div className="form-input-group">
                            <input
                                type="text"
                                placeholder="Country"
                                value={addressData.address.country}
                                onChange={(e) =>
                                    setAddressData({
                                        ...addressData,
                                        address: { ...addressData.address, country: e.target.value }
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="ZipCode"
                                value={addressData.address.zipCode}
                                onChange={(e) =>
                                    setAddressData({
                                        ...addressData,
                                        address: { ...addressData.address, zipCode: e.target.value }
                                    })
                                }
                            />
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                {showWarning && ( 
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="warning">Please fill in all address fields!</Alert>
                </Stack>
            )}
            </div>
            <div className="ch-prising">
                <div className="ob-conterner">
                    <div className="obc-child"><img className='coup-img' src={Coup} alt="coupon" /> <span>Offers & Benefits</span></div>
                    <div className="obc-child">
                        <div className="applycoup-container">
                            <div className="applycoup-bar">
                                <input type="text" placeholder='Enter Code' />
                            </div>
                            <button className='applycoup-btn'>APPLY</button>
                        </div>
                    </div>
                    <div className="obc-child c-code">
                        <p>Flat ₹100 off on orders above ₹999 </p>
                        <div className="coup-c">BEYOUNG100</div>
                    </div>
                </div>
                <div className="pd-conterner">
                    <div className="pdc-child pdch"><p>PRICE DETAILS ({priceData.results} items)</p></div>
                    <div className="pdc-child pdc-data"><span>Total MRP (Inc. of Taxes)</span><span>₹{totalPriceWithGST.toFixed(2)}</span></div>
                    <div className="pdc-child pdc-data"><span>Beyoung Discount</span><span>- ₹{discountAmount}</span></div>
                    <div className="pdc-child pdc-data"><span>Shipping</span><span>₹{ShippingFee}</span></div>
                    <div className="pdc-child pdc-data"><span>Cart Total</span><span>₹{TotalAmount}</span></div>
                </div>
                <div className="ta-conterner">
                    <div className="tac-child"><h3>Total Ammount</h3><h3>₹{TotalAmount}</h3></div>
                    <div className="tac-save"><span>You Saved ₹{discountAmount} on this order</span></div>
                    <div className="steper-btn" onClick={handleCheckout}><h3>CHECKOUT SECURELY</h3></div>
                </div>
            </div>
        </>
    )
}

export default CAddress