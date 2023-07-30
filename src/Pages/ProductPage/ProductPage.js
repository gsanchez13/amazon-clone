//individual page for product that allows add to cart state change functionality
import React from 'react';
import Product from '../HomePage/ProductCard';

function ProductPage(className = 'productCard__single') {
    return (
        <div className="productPage__item">
            <img src="" alt="info" />
            <h3>Caption</h3>
            <Product 
            className="product__single"
            image=""
            title=""/>
        </div>
    )
}
export default ProductPage;