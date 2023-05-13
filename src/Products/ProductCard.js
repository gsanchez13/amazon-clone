import React from 'react'
import Product from './Product';
import './ProductCard.css';

function ProductCard({ count, category, image, title, image1, title1, image2, title2, image3, title3 }) {
    if (count === 1) {
        return (
            <div className="productCard__single">
                <div className="productCard__singleBox">
                    <Product
                        className="product__single"
                        image={image}
                        title={title}
                    />
                </div>
            </div>
        )
    }
    else if(count === 4){
        return (
            <div className="productCard">
                <h3 className="productCard__category">{category}</h3>
                <div className="productCard__box">
                    <Product
                        className="product__multiple"
                        image={image1}
                        title={title1}
                    />
                    <Product
                        className="product__multiple"
                        image={image2}
                        title={title2}
                    />
                    <Product
                        className="product__multiple"
                        image={image3}
                        title={title3}
                    />
                    <Product
                        className="product__multiple"
                        image={image3}
                        title={title3}
                    />
                </div>
            </div>
        )
    }
}

export default ProductCard;