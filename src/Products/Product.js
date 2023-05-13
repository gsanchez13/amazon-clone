import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product({ title, image, className}) {
    if (className === "product__single") {
        return (
            <div className="product__single">
                <Link to="/" className="product__link">
                    <img src={image} alt={title} className="product__singleImage" />
                    {/* <p className="product__info">{title}</p> */}
                </Link>
            </div>
        )
    }
    else if (className === "product__multiple") {
        return (
            <div className="product__multiple">
                <Link to="/" className="product__link">
                    <img src={image} alt={title} className="product__multipleImages" />
                    <p className="product__info">{title}</p>
                </Link>
            </div>
        )
    }
}

export default Product;