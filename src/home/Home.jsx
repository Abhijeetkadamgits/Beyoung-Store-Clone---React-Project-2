import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import hti from '../image/home-1.jpg'
import du1 from '../image/home-2.jpeg'
import du2 from '../image/home-3.jpg'
import hb1 from '../image/home-4.png'
import hb2 from '../image/strip.jpg'
import hb3 from '../image/scrolling-strip.jpg'
import bspi1 from '../image/Combo-banner.jpg'
import bwba from '../image/Bottomwear-banner.jpg';
import Bsdi from '../image/Bsdi.jpg'
import reviewimg from '../image/review-illustration.png'
import { HomeData } from '../ConstentData'
import DiscountCarousel from '../Components/DiscountCarousel'
import HOtDealsCarousel from '../Components/HOtDealsCarousel'
import ProductCarousel from '../Components/ProductCarousel'
import TShartCarousel from '../Components/TShartCarousel'
import ReviewCarousel from '../Components/ReviewCarousel'
import FeaturedOn from '../Components/FeaturedOn'
import './home.css'
function Home() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home-section">
        <div className="home-container">
          <div className="home-top-img"><img src={hti} alt="" /></div>
          <div className="home-main-content">
            <div className="dis-coop-sec">
              <DiscountCarousel DisCoop={HomeData[0].DisCoopimages} />
            </div>
            <div className="home-duo-img">
              <Link to='/new-arrival' className="duo-item"><img src={du1} alt="" /></Link>
              <Link to='/bb-ke-favorites' className="duo-item"><img src={du2} alt="" /></Link>
            </div>
            <div className="hot-deals">
              <div className="hed-lin">
                <h2 className='hd-head'>HOT DEALS</h2>
              </div>
              <HOtDealsCarousel hotDealData={HomeData[1].HotDealimages} />
            </div>
            <div className="new-arrivals">
              <div className="hed-lin">
                <h2 className='hd-head'>NEW ARRIVALS</h2>
              </div>
              <ProductCarousel productContent={HomeData[2].NewArrivalData} />
            </div>
            <div className="home-banner">
              <img src={hb1} alt="" />
            </div>
            <div className="bsp-sec">
              <div className="bsp-container">
                <div className="bsp-head">
                  <h2 className='hd-head'>BEST SELLING PRODUCT</h2>
                  <Link to='/BestSelling'>ViewAll</Link>
                </div>
                <div className="bsp-body">
                  <img src={bspi1} alt="" />
                </div>
              </div>
            </div>
            <div className="home-banner hb-2">
              <img src={hb2} alt="" />
            </div>
            <div className="for-man-female">
              <p>FOR MEN</p>
            </div>
            <div className="new-arrivals">
              <div className="hed-lin">
                <h2 className='hd-head'>T-SHIRTS</h2>
                <p className='tag-line'>High On Demand</p>
              </div>
              <TShartCarousel tShartData={HomeData[3].TShartsData} />
            </div>
          </div>
          <div className="shirts-container">
            <div className="hed-lin">
              <div className="bsp-head">
                <h2 className='hd-head'>SHIRTS</h2>
                <Link to='/men/shirt'>ViewAll</Link>
              </div>
              <p className='tag-line'>Formal To Casual Styles</p>
            </div>
            <div className="shirts-aria">
              {HomeData[4].ShartsData.map((pro, index) => (
                <Link key={index} to={pro.sight}>
                  <img src={pro.img} alt="shirt-img" />
                </Link>
              ))}
            </div>
          </div>
          <div className="bottomwear-container">
            <div className="hed-lin">
              <h2 className='hd-head'>BOTTOMWEARS</h2>
              <p className='tag-line'>High On Demand</p>
            </div>
            <div className="bottomwear-img">
              <img src={bwba} alt="" />
            </div>
            <div className="bottomwear-aria">
              <ProductCarousel productContent={HomeData[5].BottomWareData} />
            </div>
          </div>
          <div className="for-man-female">
            <p>FOR WOMEN</p>
          </div>
          <div className="women-container">
            <ProductCarousel productContent={HomeData[6].WomenData} />
          </div>
          <div className="home-banner hb-2">
            <img src={hb3} alt="" />
          </div>
          <div className="review-by-customer">
            <div className="review-thumbnel">
              <img src={reviewimg} alt="" />
              <Link to='/viewAllReview'>View All Reviews</Link>
            </div>
            <div className="review-carousel">
              <ReviewCarousel reviewData={HomeData[7].Reviewimg} />
            </div>
          </div>
          <div className="home-banner-bb hb-2">
            <img src={Bsdi} alt="" />
          </div>
          <div className="shopl-container">
            <div className="hed-lin">
              <h2 className='hd-head'>SHOP THE LOOK</h2>
            </div>
            <div className="shirts-aria">
              {HomeData[8].ShopTheLook.map((pro, index) => (
                <Link key={index} to={pro.sight}>
                <img src={pro.img} alt="shirt-img" />
              </Link>
              ))}
            </div>
          </div>
          <div className="shop-by-collection">
            <div className="hed-lin">
              <h2 className='hd-head'>SHOP BY COLLECTION</h2>
            </div>
            <ProductCarousel productContent={HomeData[9].SPCollectionData} />
          </div>
          <div className="tranding-section">
            <div className="hed-lin">
              <h2 className='hd-head'>TRENDING STYLES</h2>
            </div>
            <ProductCarousel productContent={HomeData[10].TrandingStyleData} />
          </div>
          <div className="featured-on-secton">
            
              <div className="featured-on-head">
                <div className="bar"></div>
                <h2>FEATURED ON</h2>
                <div className="bar"></div>
              </div>
            <FeaturedOn featuredOn={HomeData[11].FeaturedOnimages} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home