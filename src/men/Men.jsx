import React, { useState,useEffect } from 'react';
import { MenProduct } from '../ConstentData';
import ProductFetcher from '../Components/ProductFetcher';
import ColorFilter from '../Components/Filter/ColorFilters';
import SizeFilter from '../Components/Filter/SizeFilter';
import PriceFilter from '../Components/Filter/PriceFilter';
import BrandFilter from '../Components/Filter/BrandFilter';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './men.css';

function Men() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPriceOrder, setSelectedPriceOrder] = useState(null);
  const [isColorFilterVisible, setIsColorFilterVisible] = useState(true);
  const [isSizeFilterVisible, setIsSizeFilterVisible] = useState(true);
  const [isBrandFilterVisible, setIsBrandFilterVisible] = useState(true);
  const [isPriceFilterVisible, setIsPriceFilterVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
  const toggleBrandFilter = () => {
    setIsBrandFilterVisible(!isBrandFilterVisible);
  };
  const togglePriceFilter = () => {
    setIsPriceFilterVisible(!isPriceFilterVisible);
  };

  const handleColorItemClick = (color) => {
    setSelectedColor(color);
  };
  const handleSelectedSize = (size) => {
    setSelectedSize(size);
  }
  const handleSelectedBrand = (brand) => {
    setSelectedBrand(brand);
  }
  const handlePriceOrderChange = (order) => {
    setSelectedPriceOrder(order === selectedPriceOrder ? null : order);
  };
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="men-section">
        <div className="men-container">
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
            <div className="brand-filter">
              <div className="open-filter-btn" onClick={toggleBrandFilter}>
                BRAND {isBrandFilterVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isBrandFilterVisible && <BrandFilter selectedBrand={selectedBrand} onBrandItemClick={handleSelectedBrand} />}
            </div>
            <div className="price-filter">
              <div className="open-filter-btn" onClick={togglePriceFilter}>
                PRICE {isPriceFilterVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isPriceFilterVisible && <PriceFilter onPriceChange={handlePriceOrderChange} />}
            </div>
          </div>
          )}
          <div className="product-sec" >
            <h2>MENS CLOTHING</h2>
            <p>Mens Clothing is all about being stylish and comfortable all day long. Beyoung understands the same and provides you with a handsome range of Clothing For Men out there. Scroll below to get a look at it.</p>
            <ProductFetcher productData={MenProduct} selectedColor={selectedColor} selectedSize={selectedSize} selectedBrand={selectedBrand} selectedPriceOrder={selectedPriceOrder} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Men;
