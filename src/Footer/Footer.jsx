import React from 'react';
import { footerLists } from '../ConstentData';
import { Link,useLocation } from 'react-router-dom';
import payi from '../image/Frame-payment -1.jpg'
import { socialLinkData } from '../ConstentData';
import './footer.css';

function Footer() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
    {!(path === '/login' || path === '/signup' || path === '/checkout' || path === '/checkout/cart' || path === '/checkout/shipping' || path === '/checkout/payment') && (
    <div className='footer-section'>
      <div className="footer-container">
        <div className="foot-con">
          {footerLists.map((data, index) => (
            <div className="foot-content" key={index}>
              <h3>{data.title}</h3>
              {data.items.map((dcon, index) => (
                <Link key={index} to={`/${dcon}`}>{dcon}</Link>
              ))}
              {data.app && (
                <div className="app-section">
                  <h3>{data.app.heading}</h3>
                  <div className="app-links">
                    <a href={data.app.app[0]} target="_blank" rel="noopener noreferrer">
                      <img src={data.app.app[0]} alt="Play Store" />
                    </a>
                    <a href={data.app.app[1]} target="_blank" rel="noopener noreferrer">
                      <img src={data.app.app[1]} alt="App Store" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <hr />
        <div className="pay-social-icon">
          <div className="pay-contener">
            <h3>100% SECURE PAYMENT</h3>
            <img src={payi} alt="" />
          </div>
          <hr className='psd'/>
          <div className="social-container">
          <h3>LET'S BE FRIENDS</h3>
          <div className="social-link">
              {socialLinkData.map((pro, index) => (
                <Link key={index} to='/social media'>
                  <img src={pro} alt="shirt-img" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
}

export default Footer;
