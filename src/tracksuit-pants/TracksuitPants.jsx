import React, { useState,useEffect } from 'react';
import { TracksuitProduct } from '../ConstentData'
import ProductFetcher from '../Components/ProductFetcher';
import cargoBaner from '../image/cargo_banner.jpg'
import ColorFilter from '../Components/Filter/ColorFilters';
import SizeFilter from '../Components/Filter/SizeFilter';
import PriceFilter from '../Components/Filter/PriceFilter';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './tracksuitpant.css'
function TracksuitPants() {
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
        <div className="track-suit-section">
          <div className="track-suit-banner">
            <img src={cargoBaner} alt="" />
          </div>
          <div className="track-suit-page-container">
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
              <h2>MENS TRACKSUIT PANTS</h2>
              <p>Flat 50% OFF! Beyoung offers highly functional, stylish, and comfortable Mens Tracksuit Pants at jaw-dropping discounts. We bring you an amazing collection of Tracksuit pants that are as versatile as it’s appealing to the eyes. Specially designed for modern lifestyle and urban fashion, crafted from high-quality material, ensure durability and comfort throughout the day. ✅COD ✅Premium Quality ✅15 Days Easy Return</p>
              <ProductFetcher productData={TracksuitProduct} selectedColor={selectedColor} selectedSize={selectedSize}  selectedPriceOrder={selectedPriceOrder}/>
            </div>
          </div>
        </div>
      </>
    )
}

export default TracksuitPants