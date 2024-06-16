import React from 'react'
import pdi1 from '../image/product-discription-icon1.jpg'
import pdi2 from '../image/product-discription-icon2.jpg'
import pdi3 from '../image/product-discription-icon3.jpg'
import pdi4 from '../image/product-discription-icon4.jpg'
function ProductDisIcon() {
    return (
        <>
            <div className="product-d-highlite">
                <div className="pdh-container">
                    <img src={pdi1} alt="" />
                    <h4>1.5M+ Happy Beyoungsters</h4>
                </div>
                <div className="pdh-container">
                    <img src={pdi2} alt="" />
                    <h4>15 Days Easy Returns</h4>
                </div>
                <div className="pdh-container">
                    <img src={pdi3} alt="" />
                    <h4>Homegrown Brand</h4>
                </div>
                <div className="pdh-container">
                    <img src={pdi4} alt="" />
                    <h4>Packed with Safety</h4>
                </div>
            </div>
        </>
    )
}

export default ProductDisIcon