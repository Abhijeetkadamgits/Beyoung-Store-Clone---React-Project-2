import React, { useState,useEffect } from 'react';
import { UrbanShirtProduct } from '../ConstentData'
import ProductFetcher from '../Components/ProductFetcher';
import urbanSBanner from '../image/Urban-shirt-banners.jpg'
import ColorFilter from '../Components/Filter/ColorFilters';
import SizeFilter from '../Components/Filter/SizeFilter';
import PriceFilter from '../Components/Filter/PriceFilter';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './urbanshirts.css'
function UrbanShirts() {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedPriceOrder, setSelectedPriceOrder] = useState(null);
    const [isColorFilterVisible, setIsColorFilterVisible] = useState(true);
    const [isSizeFilterVisible, setIsSizeFilterVisible] = useState(true);
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
    const togglePriceFilter = () => {
      setIsPriceFilterVisible(!isPriceFilterVisible);
    };
  
    const handleColorItemClick = (color) => {
      setSelectedColor(color);
    };
    const handleSelectedSize = (size) => {
      setSelectedSize(size);
    }
    const handlePriceOrderChange = (order) => {
      setSelectedPriceOrder(order === selectedPriceOrder ? null : order);
    };
    useEffect(() => {
    
      window.scrollTo(0, 0);
    }, []);
    return (
      <>
        <div className="u-shirt-section">
          <div className="u-shirt-banner">
            <img src={urbanSBanner} alt="" />
          </div>
          <div className="u-shirt-page-container">
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
            <div className="product-sec">
              <h2>URBAN SHIRTS</h2>
              <ProductFetcher productData={UrbanShirtProduct} selectedColor={selectedColor} selectedSize={selectedSize}  selectedPriceOrder={selectedPriceOrder}/>
            </div>
          </div>
        </div>
      </>
    )
}

export default UrbanShirts