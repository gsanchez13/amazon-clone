import React from 'react';
import './Product.css';

function Product({ id, className, title, image, price, rating }) {
    return (
        <div className={className}>
            <p className="product__info">{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐️</p>
                    ))
                }
            </div>
                <img src={image} alt="product"/>
                <button>Add to Basket</button>
        </div>
    )
}

export default Product;