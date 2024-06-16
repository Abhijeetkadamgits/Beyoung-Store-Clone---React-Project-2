import React from 'react'

function ProductAllDetails({product}) {
  return (
    <>
    {product && (
        <div className="product-details-container">
            <div className="product-highlight">
                <h4>Product Highlights</h4>
                {/* <h4>Type - {product.type}</h4>
                <h4>Fabric - {product.fabric}</h4> */}
                <h4>Brand - {product.brand}</h4>
                <h4>Category - {product.category}</h4>
                <h4>SubCategory - {product.subCategory}</h4>
                {/* <h4>Theme - {product.theme}</h4> */}
                <h4>SellerTag - {product.sellerTag}</h4>
                <h4>Gender - {product.gender}</h4>
                <h4>CreatedAt - {product.createdAt}</h4>
            </div>
            <div className="product-description">
                <h4>Product Description</h4>
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
            <div className="delivery-returnpolicy-sec">
                <h4>Delivery & Return Policy</h4>
                <p>We provide free shipping on all orders. Pay online to avoid charges of Rs50/product applicable on COD orders. The return or exchange can be done within 15 days after delivery. Every delivery from Beyoung is processed under excellent condition and in the fastest time possible. For our beloved customers care, we give contactless delivery. Refer to FAQ for more information.</p>
                <h4>support@beyoung.in</h4>
            </div>
        </div>
        )}
    </>
  )
}

export default ProductAllDetails