import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductFetcher from '../Components/ProductFetcher';
import ColorFilter from '../Components/Filter/ColorFilters';
import SizeFilter from '../Components/Filter/SizeFilter';
import PriceFilter from '../Components/Filter/PriceFilter';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import CommingSoon from '../CommingSoon/CommingSoon';
import '../App.css';

const MenSubcategory = () => {
  const { subCategory } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPriceOrder, setSelectedPriceOrder] = useState(null);
  const [isColorFilterVisible, setIsColorFilterVisible] = useState(true);
  const [isSizeFilterVisible, setIsSizeFilterVisible] = useState(true);
  const [isPriceFilterVisible, setIsPriceFilterVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const MenSubcategoryProduct=[{gender:'Men',subCategory:subCategory}]
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleColorFilter = () => {
    setIsColorFilterVisible(!isColorFilterVisible);
  };

  const toggleSizeFilter = () => {
    setIsSizeFilterVisible(!isSizeFilterVisible);
  };

  const togglePriceFilter = () => {
    setIsPriceFilterVisible(!isPriceFilterVisible);
  };

  const handleColorItemClick = (color) => {
    setSelectedColor(color);
  };

  const handleSelectedSize = (size) => {
    setSelectedSize(size);
  };

  const handlePriceOrderChange = (order) => {
    setSelectedPriceOrder(order === selectedPriceOrder ? null : order);
  };

  if (!subCategory) {
    return <CommingSoon />;
  }
  
  return (
    <>
      <div className="pages-section">
        <div className="pages-page-container">
        {windowWidth <= 760 ? null : (
          <div className="fil-sec">
            <h2>FILTER</h2>
            <div className="col-filter">
              <div className="open-filter-btn" onClick={toggleColorFilter}>
                COLOR {isColorFilterVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isColorFilterVisible && <ColorFilter selectedColor={selectedColor} onColorItemClick={handleColorItemClick} />}
            </div>
            <div className="size-filter">
              <div className="open-filter-btn" onClick={toggleSizeFilter}>
                SIZE {isSizeFilterVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isSizeFilterVisible && <SizeFilter selectedSize={selectedSize} onSizeItemClick={handleSelectedSize} />}
            </div>
            <div className="price-filter">
              <div className="open-filter-btn" onClick={togglePriceFilter}>
                PRICE {isPriceFilterVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isPriceFilterVisible && <PriceFilter onPriceChange={handlePriceOrderChange} />}
            </div>
          </div>
        )}
          <div className="product-sec" style={{ width: windowWidth <= 760 ? '100%' : '75%' }}>
          <h2>{`MEN ${subCategory.toUpperCase()}`}</h2>
            <ProductFetcher productData={MenSubcategoryProduct} selectedColor={selectedColor} selectedSize={selectedSize} selectedPriceOrder={selectedPriceOrder} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MenSubcategory;