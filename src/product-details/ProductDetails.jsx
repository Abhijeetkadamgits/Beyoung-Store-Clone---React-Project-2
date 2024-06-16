import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetailsData } from '../ConstentData';
import ProductImgCarousel from './ProductImgCarousel';
import ProductBasicDetails from './ProductBasicDetails';
import ProductAllDetails from './ProductAllDetails';
import ProductDisIcon from './ProductDisIcon';
import SimilarProduct from './SimilarProduct';
import './productdetails.css';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { apiEndpoint } = ProductDetailsData[0];
                const response = await fetch(`${apiEndpoint}${id}`, {
                    method: 'get',
                    headers: new Headers({
                        projectId: 'mmvz5wuhf8k7',
                    }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                let getProduct = data.data;
                setProduct(getProduct);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchProduct();
    }, [id]);
    useEffect(() => {
    
        window.scrollTo(0, 0);
      }, [id]);
    return (
        <div className="select-product-section">
            <div className="select-product-container">
                <div className="select-product-top">
                    <div className="select-carousel">
                        <ProductImgCarousel product={product} />
                    </div>
                    <div className="select-B-details">
                        <ProductBasicDetails product={product} />
                    </div>
                </div>
                <div className="product-d-section">
                    <h2>Product Details</h2>
                    <ProductAllDetails product={product} />
                    <ProductDisIcon />
                </div>
                <div className="similar-product-section">
                    <span>SIMILAR PRODUCTS</span>
                    <SimilarProduct subCategory={product ? product.subCategory : null} gender={product ? product.gender :null} brand={product ? product.brand :null}/>
                </div>

            </div>
        </div>
    );
}

export default ProductDetails;
