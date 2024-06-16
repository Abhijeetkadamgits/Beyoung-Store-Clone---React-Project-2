import React, { useState,useEffect } from 'react';
import { FaTruck } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import AddToCart from '../Components/Checkout/AddToCart';
import BuyNow from '../Components/Checkout/BuyNow';
import WishlistBtn from '../Components/Wishlist/WishlistBtn';

function ProductBasicDetails({ product }) {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedQty, setSelectedQty] = useState(1); 

    const qty = Array.from({ length: 10 }, (_, index) => index + 1);
    const size_order = ['S', 'M', 'L', 'XL', 'XXL'];

    useEffect(() => {
        // Reset selected size and quantity when a new product is rendered
        setSelectedSize('');
        setSelectedQty(1);
    }, [product]); // Trigger effect when product changes
   
    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleQtyChange = (event) => {
        setSelectedQty(parseInt(event.target.value));
    };
    const isSizeSelected = selectedSize !== '';

    return (
        <>
            {product && product.size && (
                <div className="product-bd-section">
                    <div className="product-bd-container">
                        <div className="pdc-head">
                            <h2>{product.name}</h2>
                            <WishlistBtn id={product._id}/>
                        </div>
                        <p>{product.subCategory}</p>
                        <h3>₹ {product.price}</h3>
                        <h4>Inclusive of All Taxes + Free Shipping</h4>
                        <h4>{product.ratings.toFixed(1)} (Ratings & Reviews)</h4>
                        <h4>Extra ₹100 OFF on ₹999 (Code:BEYOUNG100)</h4>
                        <h4>COLOR: {product.color}</h4>
                        <div className="p-color" style={{ backgroundColor: product.color }}></div>
                        <h4>SIZE:</h4>
                        <div className="p-size">
                            {product.size.sort((a, b) => size_order.indexOf(a) - size_order.indexOf(b)).map((size, index) => (
                                <div className={`p-s-circle ${selectedSize === size ? 'selected' : ''}`} key={index} onClick={() => handleSizeChange(size)}>
                                    <p>{size}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-qut">
                            <label htmlFor="qty">QTY:</label>
                            <select name="qty" id="qty" onChange={handleQtyChange}>
                                {qty.map((value) => (
                                    <option key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="p-action-btn">
                            <AddToCart id={product._id} size={selectedSize} qty={selectedQty} />
                            <BuyNow id={product._id} size={selectedSize} qty={selectedQty} />
                            
                        </div>
                        <h4>DELIVERY OPTIONS</h4>
                        <div className="dalivary-section">
                            <p>Enter your Pincode to check the delivery time and free pick up options</p>
                            <div className="pin-aria">
                                <input className='pin-input' type="password" inputmode="numeric" maxLength="6" name='pin' id='pin' placeholder='Enter Pincode' />
                                <button className='chk-btn'>Check</button>
                            </div>
                            <div className="hi-li"><BsCashCoin /> Cash On Delivery</div>
                            <div className="hi-li"><FaTruck /> Express Shipping</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductBasicDetails;
