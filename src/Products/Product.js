import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Product({ title, image, className }) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                //create id's per item
                title: title,
                image: '',
                price: '',
            }
        })
        //logic for state change
    }
    switch (className) {
        case "product__single":
            return (
                <div className="product__single">
                    <Link to="/" className="product__link">
                        <img src={image} alt={title} className="product__singleImage" />
                    </Link>
                </div>
            )
        case "product__singleAd1":
            return (
                <div className="product__single">
                    <Link to="/" className="product__link">
                        <h3>Continue Watching</h3>
                        <br />
                        <img src={image} alt={title} className="product__singleImageAd" />
                    </Link>
                    <span>{title}</span>
                    <a href="/" >See more from Prime</a>
                </div>
            )
            break;
        case "product__singleAd2":
            return (
                <div className="product__single">
                    <Link to="/" className="product__link">
                        <h3>Top Deal</h3>
                        <br />
                        <img src={image} alt={title} className="product__singleImageAd" />
                    </Link>
                    <span>{title}</span>
                    <a href="/" >See more from Prime</a>
                </div>
            )
            break;
        case "product__multiple":
            return (
                <div className="product__multiple">
                    <Link to="/" className="product__link">
                        <img src={image} alt={title} className="product__multipleImages" />
                        <p className="product__info">{title}</p>
                    </Link>
                </div>
            )
        default:
            break;
    }
}

export default Product;