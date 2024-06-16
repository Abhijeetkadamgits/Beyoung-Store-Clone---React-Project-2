import React, { useState,useEffect } from 'react';
import { OTshirtProduct } from '../ConstentData'
import ProductFetcher from '../Components/ProductFetcher';
import oversizeB from '../image/oversize-banner.jpg'
import ColorFilter from '../Components/Filter/ColorFilters';
import SizeFilter from '../Components/Filter/SizeFilter';
import PriceFilter from '../Components/Filter/PriceFilter';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './oversizetshirt.css'
function OverSizeTshirt() {
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
        <div className="oversize-tshirt-section">
          <div className="oversize-tshirt-banner">
            <img src={oversizeB} alt="" />
          </div>
          <div className="oversize-tshirt-page-container">
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
            <div className="product-sec" >
              <h2>OVERSIZE T SHIRT</h2>
              <p>Get the best look with oversize t shirt for men online in India at Beyoung. We bring you amazing colors, styles, and sizes in our coolest collection. Shop your favorites online at Beyoung from the amazing collection of Oversized T shirts for men at the best price starting from just Rs.209.</p>
              <ProductFetcher productData={OTshirtProduct} selectedColor={selectedColor} selectedSize={selectedSize}  selectedPriceOrder={selectedPriceOrder}/>
            </div>
          </div>
        </div>
      </>
    )
}

export default OverSizeTshirt