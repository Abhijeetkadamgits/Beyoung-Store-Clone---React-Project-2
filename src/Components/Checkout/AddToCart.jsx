import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import Auth from '../../Authenticion/auth';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useCart } from '../../context/CartProvider';
function AddToCart({id,size,qty}) {
  const { setCartCount } = useCart(); 
    const [isInAddToCart, setIsInAddToCart] = useState(false);
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
              setIsInAddToCart(true);
            }
            else {
              setIsInAddToCart(false);
            }
          } catch (error) {
            setIsInAddToCart(false);
          }
        };
    
        fetchContent();
      }, [id]);
    
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
            setIsInAddToCart((prevIsInWishlist) => !prevIsInWishlist);
            setShowAlert(true);
            setAlertMessage('Product added to cart!');
            // Fetch the updated cart count
        const updatedResponse = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            projectID: 'mmvz5wuhf8k7',
          },
        });

        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          setCartCount(updatedData.data.items.length); // Update the context with the new count
        }
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
        <div className={`add-to-cart-btn ${!size ? 'disabled' : ''}`} onClick={handleAddTOCart}>
        <FaCartShopping /> ADD TO CART
      </div>
            <Snackbar
        open={showAlert}
        autoHideDuration={1000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MuiAlert onClose={handleCloseAlert} severity={isInAddToCart ? 'success' : 'error'} sx={{ width: '100%' }}>
          {alertMessage}
        </MuiAlert>
      </Snackbar>
        </>
      );
}

export default AddToCart