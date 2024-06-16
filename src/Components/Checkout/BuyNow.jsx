import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightCircle } from "react-icons/bs";
import Auth from '../../Authenticion/auth';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
function BuyNow({id,size,qty}) {
    const [BuyNow, setBuyNow] = useState(false);
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    useEffect(() => {
        const fetchContent = async () => {
          try {
            const url = 'https://academics.newtonschool.co/api/v1/ecommerce/cart';
            const response = await fetch(url, {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
                'projectID': 'mmvz5wuhf8k7',
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            const content = data.data.items;
            const isPresent = content.filter(item => item._id === id); 
            if (isPresent.length > 0) {
              setBuyNow(true);
            }
            else {
              setBuyNow(false);
            }
          } catch (error) {
            setBuyNow(false);
          }
        };
    
        fetchContent();
      }, []);
    
      const handleAddTOCart = async () => {
        try {
            if (!Auth.isAuthenticated()) {
                navigate('/login');
                return;
              }
              if (!size) {
                setShowAlert(true);
                setAlertMessage('Please select a size');
                return;
              }
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,
            {
              method: 'PATCH',
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
                'projectID': 'mmvz5wuhf8k7',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                quantity: qty,
                size:size,
              }),
            }
          );
    
          if (response.ok) {
            setBuyNow((prevIsInWishlist) => !prevIsInWishlist);
            setShowAlert(true);
            setAlertMessage('Product added to cart!');
            navigate('/checkout/cart');
          }
        } catch (error) {
          console.error('Error adding to wishlist', error);
        }
      };
      const handleCloseAlert = () => {
        setShowAlert(false); 
      };
  return (
    <>
    <div className={`buy-now-btn ${!size ? 'disabled' : ''}`} onClick={handleAddTOCart}>
        <BsArrowRightCircle /> BUY NOW</div>
        <Snackbar
        open={showAlert}
        autoHideDuration={1000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MuiAlert onClose={handleCloseAlert} severity={BuyNow ? 'success' : 'error'} sx={{ width: '100%' }}>
          {alertMessage}
        </MuiAlert>
      </Snackbar>
        </>
  )
}

export default BuyNow