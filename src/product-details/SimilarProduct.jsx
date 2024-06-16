import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function SimilarProduct({ subCategory,gender,brand }) {
  const [sProduct, setSProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filter = {
          subCategory: subCategory,
          gender:gender,
          brand:brand,
        };

        const filterQueryString = `?filter=${JSON.stringify(filter)}&limit=20`; 

        const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products${filterQueryString}`, {
          method: 'GET',
          headers:new Headers({
            'projectId': 'mmvz5wuhf8k7',
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        let filteredProducts = data.data;
        setSProduct(filteredProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [subCategory]);

  
  return (
    <div className="sm-product-section">
      <div className="sm-product-container">
        {sProduct.map((item, index) => (
          <div className="sm-product" key={index}>
            <Link to={`/details/${item.name}/${item._id}`}>
              <div className="sm-product-img">
                <img src={item.displayImage} alt={item.name} />
              </div>
              <div className="sm-product-details">
                <p>{item.name}</p>
                <p>{item.subCategory}</p>
                <p>₹{item.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarProduct;
