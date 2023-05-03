import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12345"
          className="product"
          title="All The Light We Cannot See - Anthony Doerr"
          image="https://m.media-amazon.com/images/P/1501173219.01._SCLZZZZZZZ_SX500_.jpg"
          price="15.99"
          rating={5}
        />
        <Product
          id="12345"
          className="product"
          title="All The Light We Cannot See - Anthony Doerr"
          image="https://m.media-amazon.com/images/P/1501173219.01._SCLZZZZZZZ_SX500_.jpg"
          price="15.99"
          rating={5}
        />
        <Product
          id="12345"
          className="product"
          title="All The Light We Cannot See - Anthony Doerr"
          image="https://m.media-amazon.com/images/P/1501173219.01._SCLZZZZZZZ_SX500_.jpg"
          price="15.99"
          rating={5}
        />
        <div className="home__stackedRow">
          <Product
            id="12345"
            className="product__stackedRow"
            image="https://m.media-amazon.com/images/P/1501173219.01._SCLZZZZZZZ_SX500_.jpg"
            price="15.99"
            rating={5}
          />
          <Product
            id="12345"
            className="product__stackedRow"
            image="https://m.media-amazon.com/images/P/1501173219.01._SCLZZZZZZZ_SX500_.jpg"
            price="15.99"
            rating={5}
          />
        </div>
      </div>

      <div className="home__row">
        <Product
          id="12345"
          className="product"
          title="All The Light We Cannot See - Anthony Doerr"
          image="https://m.media-amazon.com/images/P/1501173219.01._SCLZZZZZZZ_SX500_.jpg"
          price="15.99"
          rating={5}
        />
        <Product
          id="12345"
          className="product"
          title="All The Light We Cannot See - Anthony Doerr"
          image="https://m.media-amazon.com/images/P/1501173219.01._SCLZZZZZZZ_SX500_.jpg"
          price="15.99"
          rating={5}
        />
        <Product
          id="12345"
          className="product"
          title="All The Light We Cannot See - Anthony Doerr"
          image="https://m.media-amazon.com/images/P/1501173219.01._SCLZZZZZZZ_SX500_.jpg"
          price="15.99"
          rating={5}
        />
      </div>
    </div>
  )
}

export default Home;