import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './components.css';

function FeaturedOn({featuredOn}) {
  return (
    <Splide
            options={{
                type: 'loop',
                autoplay: true,
                perPage: 4,
                perMove: 1,
                
                arrows: false,
                interval: 2000,
                pagination: false,
                autoScroll: {
                    speed: 1,
                  },
            }}
        >
            {featuredOn.map((fo, i) => (
                <SplideSlide className='fo-slid' key={i}>
                    <div className='fo-con'>
                        <img src={fo} alt={`Image ${i}`} />
                    </div>
                </SplideSlide>
            ))}
        </Splide>
  )
}

export default FeaturedOn