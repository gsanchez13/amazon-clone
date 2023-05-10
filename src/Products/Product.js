import React from 'react';
import './Product.css';

function Product({ id, className, category, title, image, price, rating }) {
    return (
        <div className={className}>
            <h3 className="product__category">{category}</h3>
            <img src={image} alt="product" />
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
            <button>Add to Basket</button>
        </div>
    )
}

export default Product;