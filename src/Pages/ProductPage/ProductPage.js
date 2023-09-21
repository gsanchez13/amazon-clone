//individual page for product that allows add to cart state change functionality
import React from 'react';
import Product from '../HomePage/ProductCard';
import './ProductPage.css';
import reducer from '../reducer';

function ProductPage(className = 'productCard__single', id, title, description, reviews) {
    return (
        <div className="productPage__item">
            <img src="" alt="info" />
            <h3>{title}</h3>
            <Product 
            className="product__single"
            image=""
            title={title}
            id={id}/>
            <div className='productPage__reviewBox'>
                <img src="" alt=""/>
                <text>
                    {description}
                </text>
            </div>
            <ul>
                <li>
                    {reviews}
                </li>
            </ul>
            //reviews in loop with count limit
            //reccomendations
            <button onClick={reducer("ADD_TO_BASKET")}>
            //add to cart state - reducer should add item to state
            </button>
        </div>
    )
}
export default ProductPage;