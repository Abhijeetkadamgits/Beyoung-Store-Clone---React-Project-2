import React, { useState,useEffect } from 'react';
import {BBFevouritProduct } from '../ConstentData';
import ProductFetcher from '../Components/ProductFetcher';
import ColorFilter from '../Components/Filter/ColorFilters';
import SizeFilter from '../Components/Filter/SizeFilter';
import PriceFilter from '../Components/Filter/PriceFilter';
import BBFevouriteFilter from '../Components/Filter/BBFevouriteFilter';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './bbkifavorites.css'
function BbKiFavorites() {
  const [selectCategary,setSelectCategary]=useState(null);
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
  const handleSelectCategory =(subCategory)=>{
    setSelectCategary(subCategory);
  }
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
      <div className="bb-feb-section">
        <div className="bb-feb-filter">
        <h2>LOVED BY BB</h2>
         <BBFevouriteFilter selectCategary={selectCategary} onCategoryChange={handleSelectCategory}/>
         
       </div>
        <div className="bb-feb-container">
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
            <h2>BB KE FAVORITES</h2>
            
            <ProductFetcher productData={BBFevouritProduct} selectedColor={selectedColor} selectedSize={selectedSize} selectedPriceOrder={selectedPriceOrder} selectCategary={selectCategary}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default BbKiFavorites