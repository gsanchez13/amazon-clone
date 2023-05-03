import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <p>{title}</p>
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