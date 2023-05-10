import React from 'react';
import './Home.css';
import Product from './Products/Product.js';
import ProductCard from './Products/ProductCard';
import StackedProduct from './Products/StackedProduct';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <ProductCard
          category="Pick up where you left off"
        />
        <ProductCard
          category="Keep shopping for"
        />
        <ProductCard
          category="Buy Again"
        />
        <div className="home__stackedRow">
          <StackedProduct
            id="12345"
            category="stackedProduct_top"
            image="https://images-na.ssl-images-amazon.com/images/G/01/dex/2022/Speed/March/030822_DEX_Speed_AdToppers_MothersDay2_2x._CB626696217_.jpg"
          />
          <StackedProduct
            id="12345"
            category="stackedProduct_bottom"
            image="https://www.amazon.com/dp/B089B6CPJS?aaxitk=4c7b17846ee5c76514c40e1ba40ab329&pd_rd_plhdr=t&ref=dacx_dp_586103675645598861_585113923207267201"
            price="15.99"
            rating={5}
          />
        </div>
      </div>

      <div className="home__secondRow">
        <ProductCard
          id="12345"
          className="product"
          title="Samsung 50 inch"
          image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401735_sd.jpg;maxHeight=640;maxWidth=550"
          price="379.99"
          rating={5}
        />
      </div>
    </div>
  )
}

export default Home;

{/* <Product
id="12345"
category="Pick up where you left off"
title="All The Light We Cannot See - Anthony Doerr"
image="https://m.media-amazon.com/images/P/1501173219.01._SCLZZZZZZZ_SX500_.jpg"
price="15.99"
rating={5}
/>
<Product
id="12345"
category="Keep shopping for"
title="Miracle Grow Moisture Control Soil"
image="https://m.media-amazon.com/images/I/71AE-afEZfL._AC_SL1500_.jpg"
price="5.67"
rating={5}
/>
<Product
id="12345"
category="Buy Again"
title="Amazon Basics Unscented Dog Poop Bags"
image="https://m.media-amazon.com/images/I/61ENFFolX3L._AC_SL1322_.jpg"
price="18.31"
rating={4}
/> */}