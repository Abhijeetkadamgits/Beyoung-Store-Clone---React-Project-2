import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import Beyoung from '../assets/beyoung.png'
import MenDropdown from '../men/MenDropdown';
import WomenDropdown from '../women/WomenDropdown';
import NewArrivalDropdown from '../new-arrivals/NewArrivalDropdown';
import MyAccountDropdown from '../Account/MyAccountDropdown';
import WishlistIcon from './WishlistIcon';
import CartIcon from './CartIcon';
import SearchBar from './SearchBar';
import Auth from '../Authenticion/auth';
import SightDropdown from './SightDropdown';
import { TfiMenuAlt } from "react-icons/tfi";
import './navigationbar.css';

function NavigationBar() {
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [isMenDropdownOpen, setMenDropdownOpen] = useState(false);
  const [isWomenDropdownOpen, setWomenDropdownOpen] = useState(false);
  const [isNewArrivalDropdownOpen, setNewArrivalDropdownOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isSightDropdownOpen, setIsSightDropdownOpen] = useState(false);

  const handleAccountDropdownToggle = () => setAccountDropdownOpen(!isAccountDropdownOpen);
  const handleMenDropdownToggle = () => setMenDropdownOpen(!isMenDropdownOpen);
  const handleWomenDropdownToggle = () => setWomenDropdownOpen(!isWomenDropdownOpen);
  const handleNewArrivalDropdownToggle = () => setNewArrivalDropdownOpen(!isNewArrivalDropdownOpen);
  const handleSightDropdownToggle = () => {
    setIsSightDropdownOpen(!isSightDropdownOpen);
  };

  // const closeSightDropdown = () => {
  //   setIsSightDropdownOpen(false);
  // };


  const handleSearchToggle = () => {
      setIsSearchBarOpen(!isSearchBarOpen);
  };
  const isAuthenticated = Auth.isAuthenticated();
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate()
  const handleLogout = () => {
    Auth.logout();
    navigate('/');
  };

  return (
    <>
      {!(path === '/login' || path === '/signup' || path === '/checkout' || path === '/checkout/cart' || path === '/checkout/shipping' || path === '/checkout/payment' || path === '/myaccount' || path === '/myaccount/order' || path === '/myaccount/address' || path === '/myaccount/profile' || path === '/myaccount/wishlist' || path === '/myaccount/coupons' || path === '/myaccount/tickets') && (
        <div className="navigation-sec">
          <div className="navi-container">
            <div className="navi-container-top">
              <div className="track-order-sec">
                <SlLocationPin /> <span>TRACK YOUR ORDER</span>
              </div>
              <div className="auth-sec">
                {isAuthenticated ? (
                  <>
                    <div className="auth-btn" onMouseEnter={handleAccountDropdownToggle} onMouseLeave={handleAccountDropdownToggle}>My Account
                      {isAccountDropdownOpen && <MyAccountDropdown  onClose={handleAccountDropdownToggle}/>}
                    </div>
                    <hr className="diveder" />
                    <div className="auth-btn" onClick={handleLogout}>Logout</div>
                  </>
                ) : (
                  <>
                    <Link to='/login' className="auth-btn">LogIn</Link>
                    <hr className="diveder" />
                    <Link to='/signup' className="auth-btn">SignUp</Link>
                  </>
                )}
              </div>
            </div>
            <div className="navi-container-bottom">
              <div className="navig-container-left">
                <div className="sight-bar" onClick={handleSightDropdownToggle}>
                  <TfiMenuAlt />
                </div>
                {isSightDropdownOpen && <SightDropdown onClose={handleSightDropdownToggle} />}
                <div className="logo">
                  <Link to="/">
                    <img src={Beyoung} alt="" />
                  </Link>
                </div>
                <nav>
                  <ul>
                    <li onMouseEnter={handleMenDropdownToggle} onMouseLeave={handleMenDropdownToggle}>
                      <Link to="/mens-clothing" onClick={handleMenDropdownToggle}>MEN</Link>
                      {isMenDropdownOpen && <MenDropdown  onClose={handleMenDropdownToggle}/>}
                    </li>
                    <li onMouseEnter={handleWomenDropdownToggle} onMouseLeave={handleWomenDropdownToggle}>
                      <Link to="/womens-clothing" onClick={handleWomenDropdownToggle}>WOMEN</Link>
                      {isWomenDropdownOpen && <WomenDropdown onClose={handleWomenDropdownToggle}/>}
                    </li>
                    <li>
                      <Link to="/combo-products">COMBOS</Link>
                    </li>
                    <li>
                      <Link to="/bb-ke-favorites">BB KE FAVORITES</Link>
                    </li>
                    <li>
                      <Link to="/winter-wears">WINTER WEARS</Link>
                    </li>
                    <li onMouseEnter={handleNewArrivalDropdownToggle} onMouseLeave={handleNewArrivalDropdownToggle}>
                      <span>NEW ARRIVALS</span>
                      {isNewArrivalDropdownOpen && <NewArrivalDropdown onClose={handleNewArrivalDropdownToggle}/>}
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navig-container-right">
                <div className="ncr-icon" onClick={handleSearchToggle}><AiOutlineSearch /></div>
                <WishlistIcon />
                <CartIcon />
              </div>
            </div>
          </div>
          {isSearchBarOpen && <SearchBar onClose={handleSearchToggle}/>}
        </div>
      )}
    </>
  );
}

export default NavigationBar;
