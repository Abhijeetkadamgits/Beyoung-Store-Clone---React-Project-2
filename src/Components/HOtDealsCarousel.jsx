import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide-extension-grid';

import { Link } from 'react-router-dom';
import './components.css';

function HOtDealsCarousel({hotDealData}) {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 2,
        perMove: 1,
        pagination: false,
        padding:{right:'11rem'},
        breakpoints: {
          768: {
            perPage: 3,
            padding:{right:'0'},
          
          },
        },
      }}
    >
      <SplideSlide>
        <div className="splide_slide">
          <div className="window">
            <Link to='/bb-ke-favorites'>
              <img src={hotDealData[0]} alt="Image 0" />
            </Link>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide_slide">
          <div className="windows">
            <Link to='/men/tshirt'>
              <img src={hotDealData[1]} alt="Image 2" />
            </Link>
            <Link to='/women/tshirt'>
              <img src={hotDealData[2]} alt="Image 3" />
            </Link>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide_slide">
          <div className="window">
            <Link to='/winter-wears'>
              <img src={hotDealData[3]} alt="Image 4" />
            </Link>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide_slide">
          <div className="windows">
            <Link to='/men/shorts'>
              <img src={hotDealData[4]} alt="Image 5" />
            </Link>
            <Link to='/men/pyjamas'>
              <img src={hotDealData[5]} alt="Image 6" />
            </Link>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide_slide">
          <div className="window">
            <Link to='/urban-shirt'>
              <img src={hotDealData[6]} alt="Image 7" />
            </Link>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide_slide">
          <div className="windows">
            <Link to='/oversize-tshirts'>
              <img src={hotDealData[7]} alt="Image 8" />
            </Link>
            <Link to='/men/sweater'>
              <img src={hotDealData[8]} alt="Image 9" />
            </Link>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide_slide">
          <div className="window">
            <Link to='/tracksuit-pants'>
              <img src={hotDealData[9]} alt="Image 1" />
            </Link>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default HOtDealsCarousel;





//Second Type

/*import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide-extension-grid';

import { Link } from 'react-router-dom';
import './components.css';

function HOtDealsCarousel({ hotDealData }) {
  // Organize the hotDealData array to have unique images for each SplideSlide.
  const organizedData = [
    [hotDealData[0]],
    [hotDealData[1],hotDealData[2]],
    [hotDealData[3]],
    [hotDealData[4], hotDealData[5]],
    [hotDealData[6]],
    [hotDealData[7], hotDealData[8]],
    [hotDealData[9]],
  ];

  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 2,
        perMove: 1,
        pagination: false,
        padding: { right: '11rem' },
        breakpoints: {
          768: {
            perPage: 2,
          },
        },
      }}
    >
      {organizedData.map((images, index) => (
        <SplideSlide key={index}>
          <div className="splide_slide">
            <div className={images.length === 1 ? 'window' : 'windows'}>
              {images.map((image, imageIndex) => (
                <Link key={imageIndex} to="/">
                  <img src={image} alt={`Image ${index * 2 + imageIndex}`} />
                </Link>
              ))}
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default HOtDealsCarousel; */