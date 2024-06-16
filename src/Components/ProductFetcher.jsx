import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loading from '../image/focus_looding.gif';
import './components.css';

const ProductFetcher = ({ selectCategary, productData, selectedColor, selectedSize, selectedBrand, selectedPriceOrder }) => {
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
          filter = {
            ...filter,
            subCategory: selectCategary,
          };
        }
        if (selectedColor) {
          filter = {
            ...filter,
            color: selectedColor,
          };
        }
        if (selectedSize) {
          filter = {
            ...filter,
            size: selectedSize,
          };
        }
        if (selectedBrand) {
          filter = {
            ...filter,
            brand: selectedBrand,
          };
        }
        // Adjusted API endpoint to include the ratings filter
        const apiEndpoint = 'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products';
        const filterQueryString = `?filter=${JSON.stringify(filter)}&limit=300&ratings[gte]=.0`; // Filter for ratings greater than or equal to 3.0
        const response = await fetch(`${apiEndpoint}${filterQueryString}`, {
          method: 'get',
          headers: new Headers({
            projectId: 'mmvz5wuhf8k7',
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        let filteredProducts = data.data;

        if (selectedPriceOrder) {
          filteredProducts = filteredProducts.sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;

            return selectedPriceOrder === 'Price : Low to High' ? priceA - priceB : priceB - priceA;
          });
        }

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
};

export default ProductFetcher;
