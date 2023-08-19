//individual page for product that allows add to cart state change functionality
import React from 'react';
import Product from '../HomePage/ProductCard';
import './ProductPage.css';

function ProductPage(className = 'productCard__single', id, title) {
    //do a db call using id to obtain info to fill in for variables for this component. then, use variables from call to fill in page template
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
                    //fetch product info from backend
                </text>
            </div>
            //reviews
            //reccomendations
            //add to cart state
        </div>
    )
}
export default ProductPage;