import React from 'react'
import Product from './Product';
import './ProductCard.css';

function ProductCard({ category, image, title }) {
    return (
        <div className="productCard">
            <h3 className="productCard__category">{category}</h3>
            <div className="productCard__box">
                <Product
                    image="https://m.media-amazon.com/images/P/1501173219.01._SCLZZZZZZZ_SX500_.jpg"
                    title="All The Light We Cannot See - Anthony Doerr"
                />
                <Product
                    image="https://m.media-amazon.com/images/I/71AE-afEZfL._AC_SL1500_.jpg"
                    title="Miracle Grow Moisture Control Soil"
                />
                <Product
                    image="https://m.media-amazon.com/images/I/61ENFFolX3L._AC_SL1322_.jpg"
                    title="Amazon Basics Unscented Dog Poop Bags"

                />
                <Product
                    image="https://m.media-amazon.com/images/P/1501173219.01._SCLZZZZZZZ_SX500_.jpg"
                    title="Amazon Basics Unscented Dog Poop Bags"
                />
            </div>
        </div>
    )
}

export default ProductCard;