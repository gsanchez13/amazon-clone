import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product({ id, category, title, image, price, rating }) {
    return (
        <div className="product">
            <Link to="/" className="product__link">
                <img src={image} alt={title} className="product__image"/>
                <p className="product__info">{title}</p>
            </Link>
        </div>
    )
}

export default Product;