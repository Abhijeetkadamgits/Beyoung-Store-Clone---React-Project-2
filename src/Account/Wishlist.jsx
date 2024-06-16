import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";
import { useWishlist } from '../context/WishlistProvider';
function Wishlist() {
  const { updateWishlistCount } = useWishlist();
  const [contentData, setContentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const url = 'https://academics.newtonschool.co/api/v1/ecommerce/wishlist';
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
        setContentData(content);
        setLoading(false);
      } catch (error) {
        console.error('Error Fetching Data');
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const removeFromWishlist = async (id) => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`,
            'projectID': 'mmvz5wuhf8k7',
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const updatedContent = contentData.filter(item => item.products._id !== id);
        setContentData(updatedContent);
        updateWishlistCount();
      }
    } catch (error) {
      console.error('Error removing from wishlist', error);
    }
  };

  if (loading || contentData.length === 0) {
    return (
      <div className='wle-body'>
        <h1 className='wle-desc'>Uh-Oh! Nothing to shop</h1>
      </div>
    )
  }

  return (
    <div className="wishlist-product-section">
      <h2> My-Wishlist</h2>
      <div className="wishlist-product-container">
        
        {contentData.map((item, index) => (
          <div className="wishlist-product" key={index}>
            <div className="del-wishlist">
              <button onClick={() => removeFromWishlist(item.products._id)}>
              <IoCloseSharp />
              </button>
            </div>
            <Link to={`/details/${item.products.name}/${item.products._id}`}>
              <div className="wishlist-product-img">
                <img src={item.products.displayImage} alt={item.products.name} />
              </div>
              <div className="wishlist-product-details">
                <p>{item.products.name}</p>
                <p>₹{item.products.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist;
