import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './components.css'
function ProductCarousel({ productContent }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const{apiEndpoint,sellerTag,subCategory,gender}=productContent;
      const filter = {
        gender,
        sellerTag,
        subCategory,
      };
      const filterQueryString = `?filter=${JSON.stringify(filter)}&limit=10`;
      try {
        const response = await fetch(`${apiEndpoint}${filterQueryString}`,{
          method: "get",
          headers: new Headers({
            projectId: "mmvz5wuhf8k7",
          }),
        }
      );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setItems(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [productContent]);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    variableWidth: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className='product-card'>
            <Link to={`/details/${item.name}/${item._id}`}>
            <div className="product-card-img">
            <img src={item.displayImage} alt={item.name} />
            </div>
            <div className="product-card-title">
            <h3>{item.name}</h3>
            </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;
