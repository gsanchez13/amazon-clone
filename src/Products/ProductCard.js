import React from 'react'
import Product from './Product';
import './ProductCard.css';

function ProductCard({ category, className, image, title, image1, title1, image2, title2, image3, title3, image4, title4, additionalLink}) {
    switch (className) {
        case "productCard__single":
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
        case "productCard__singleAd1":
            return (
                <div className="productCard__singleAd1">
                    <div className="productCard__singleBoxAd">
                        <Product
                            className="product__singleAd1"
                            image={image}
                            title={title}
                        />
                    </div>
                </div>
            )
        case "productCard__singleAd2":
            return (
                <div className="productCard__singleAd2">
                    <div className="productCard__singleBoxAd">
                        <Product
                            className="product__singleAd2"
                            image={image}
                            title={title}
                        />
                    </div>
                </div>
            )
        case "productCard__multiple":
            return (
                <div className="productCard">
                    <h3 className="productCard__category">{category}</h3>
                    <div className="productCard__multiple">
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
                            image={image4}
                            title={title4}
                        />
                    </div>
                    <br/>
                    <a>{additionalLink}</a>
                </div>
            )
        default:
            break;
    }
}

export default ProductCard;