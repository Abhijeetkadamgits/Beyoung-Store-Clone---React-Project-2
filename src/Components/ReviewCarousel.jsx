import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';
import './components.css';
function ReviewCarousel({ reviewData }) {
    return (
        <Splide
            options={{
                type: 'loop',
                autoplay: true,
                perPage: 1,
                perMove: 1,
                arrows: false,
                interval: 1000,
                pagination: false,
                autoScroll: {
                    speed: 2,
                  },
            }}
        >
            {reviewData.map((rd, i) => (
                <SplideSlide className='re-slid' key={i}>
                    <div className='rc-con'>
                        <img src={rd} alt={`Image ${i}`} />
                    </div>
                </SplideSlide>
            ))}
        </Splide>
    )
}

export default ReviewCarousel