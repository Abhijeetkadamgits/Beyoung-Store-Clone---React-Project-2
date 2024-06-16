import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loading from '../image/focus_looding.gif';
import './components.css';

function BestProductFetcher({ selectCategary, productData, selectedColor, selectedSize, selectedBrand, selectedPriceOrder }) {
    const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { gender, sellerTag, subCategory, brand } = productData[0];
        
        let filter = {
          gender,
          sellerTag,
          subCategory,
          brand,
        };

        if (selectCategary) {
          filter.subCategory = selectCategary;
        }

        if (selectedColor) {
          filter.color = selectedColor;
        }

        if (selectedSize) {
          filter.size = selectedSize;
        }

        if (selectedBrand) {
          filter.brand = selectedBrand;
        }

        const apiEndpoint = 'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products';
        const filterQueryString = `?filter=${encodeURIComponent(JSON.stringify(filter))}&limit=300`;
        const response = await fetch(`${apiEndpoint}${filterQueryString}`, {
          method: 'GET',
          headers: {
            projectId: 'mmvz5wuhf8k7',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Filter products based on ratings greater than 3.5
        const filteredProducts = data.data.filter(product => product.ratings >= 3.5);
        setProducts(filteredProducts);
        setLoadingProducts(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingProducts(false);
      }
    };

    fetchData();
  }, [selectCategary, productData, selectedColor, selectedSize, selectedBrand, selectedPriceOrder]);

  return (
    <div className="product-section">
      <div className="product-container">
        {loadingProducts ? (
          <div className="loading-container">
            <img src={loading} alt="Loading..." />
          </div>
        ) : (
          products.map((item) => (
            <div className="product" key={item._id}>
              <Link to={`/details/${item.name}/${item._id}`}>
                <div className="product-img">
                  <img src={item.displayImage} alt={item.name} />
                </div>
                <div className="product-details">
                  <p>{item.name}</p>
                  <p>{item.subCategory}</p>
                  <p>₹{item.price}</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BestProductFetcher