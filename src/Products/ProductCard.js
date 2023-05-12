import React from 'react'
import Product from './Product';
import './ProductCard.css';

function ProductCard({ category, image1, title1, image2, title2 , image3, title3 }) {
    return (
        <div className="productCard">
            <h3 className="productCard__category">{category}</h3>
            <div className="productCard__box">
                <Product
                    image={image1}
                    title={title1}
                />
                <Product
                    image={image2}
                    title={title2}
                />
                <Product
                    image={image3}
                    title={title3}
                />
                <Product
                    image={image3}
                    title={title3}
                />
            </div>
        </div>
    )
}

export default ProductCard;