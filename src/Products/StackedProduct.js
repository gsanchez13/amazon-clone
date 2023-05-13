import React from 'react';
import './StackedProduct.css';
import { Link } from 'react-router-dom'

function StackedProduct({ className, image, title, rating }) {
    if (className === "stackedProduct_top") {
        return (
            <div className="stackedProduct__top">
                <div className="stackedProduct__info">
                <p>Gifts for mom, delivered overnight</p>
                <Link to="" className="stackedProduct__link"> Shop Now </Link>
                </div>
                <img src={image} alt="product" className="stackedProduct__imgTop"/>
            </div>
        )
    }
    else {
        return (
            <div className="stackedProduct__bottom">
                <img src={image} alt="product" className="stackedProduct__imgBottom"/>
                <p className="stackedProduct__info">{title}</p>
                <div className="stackedProduct__rating">
                {
                    Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐️</p>
                        ))
                }
            </div>
            <button>Shop Now</button>
            </div>
        )
    }
}

export default StackedProduct;