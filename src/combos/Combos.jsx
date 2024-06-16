import React,{useState,useEffect} from 'react'
import { ComboProduct } from '../ConstentData'
import ProductFetcher from '../Components/ProductFetcher';
import comboBanner from '../image/combo-categry-banner.jpg'
import PriceFilter from '../Components/Filter/PriceFilter';
import BrandFilter from '../Components/Filter/BrandFilter';
import SubCategoryFilter from '../Components/Filter/SubCategoryFilter';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './combos.css'
function Combos() {
  const [selectCategary,setSelectCategary]=useState(null);
  const [isBrandFilterVisible, setIsBrandFilterVisible] = useState(true);
  const [isPriceFilterVisible, setIsPriceFilterVisible] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPriceOrder, setSelectedPriceOrder] = useState(null);
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
  const toggleBrandFilter = () => {
    setIsBrandFilterVisible(!isBrandFilterVisible);
  };
  const togglePriceFilter = () => {
    setIsPriceFilterVisible(!isPriceFilterVisible);
  };

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
    <div className="combo-section">
      <div className="combo-banner">
        <img src={comboBanner} alt="" />
      </div>
      <div className="combo-categori-filter">
         <SubCategoryFilter  selectCategary={selectCategary} onCategoryChange={handleSelectCategory}/>
      </div>
      <div className="combo-page-container">
      {windowWidth <= 760 ? null : (
        <div className="fil-sec">
          <h2>FILTER</h2>
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
          <h2>COMBOS (UNISEX)</h2>
          <p>Combo T Shirts - Buy T Shirt Combos Online in India at Low Price. Latest Collection of Plain and Printed Combo T shirts For Mens Online at Beyoung. ✓ Pack of 3 & 4 Combo T-shirts ✓Big Discounts ✓Free Shipping ✓COD.</p>
         <ProductFetcher productData={ComboProduct} selectedBrand={selectedBrand} selectedPriceOrder={selectedPriceOrder} selectCategary={selectCategary}/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Combos