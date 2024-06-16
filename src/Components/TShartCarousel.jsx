import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';
import './components.css';

function TShartCarousel({ tShartData }) {
  const smallSlides = [];

  // Create pairs of unique indices for small-slid images
  for (let i = 1; i < tShartData.length; i += 2) {
    if (i + 1 < tShartData.length) {
      smallSlides.push([i, i + 1]);
    } else {
      // Handle the case when there is an odd number of images
      smallSlides.push([i]);
    }
  }

  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: false,
        padding:{right:'5rem'},
        breakpoints: {
          768: {
            perPage: 1,
            padding:{right:'0'},
          },
        },
      }}
    >
      {/* First Slide - Static */}
      <SplideSlide className='big-slid'>
        <div className="b-window">
          <Link className='bw-link' to='/combo-products'>
            <img src={tShartData[0]} alt="Image 0" />
          </Link>
        </div>
      </SplideSlide>

      {/* Dynamic Slides with different images */}
      {smallSlides.map((indices, index) => (
        <SplideSlide className='small-slid' key={index}>
          <div className="s-windows">
            {indices.map((i) => (
              <Link className='sw-link' to='/combo-products' key={i}>
              <img src={tShartData[i].timg} alt={`Image ${i}`} />
              <h4>{tShartData[i].heading}</h4>
            </Link>
            ))}
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default TShartCarousel;
