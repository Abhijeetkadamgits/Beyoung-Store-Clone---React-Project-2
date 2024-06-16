import React,{useState} from 'react'

function ProductImgCarousel({product}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <>
            {product && product.images && (
                <div className="carousel-container">
                    <div className="thumbnail-carousel">
                        {product.images.map((image, index) => (
                            <div
                                key={index}
                                className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            >
                                <img src={image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="big-screen">
                        <img src={product.images[currentSlide]} alt={`Image ${currentSlide + 1}`} />
                    </div>

                    
                </div>
            )}
        </>
    )
}

export default ProductImgCarousel