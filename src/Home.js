import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="" />
      {/* Product id, title, price, rating, image */}
      {/* Product */}
      <Product
        id="12345"
        title="All The Light We Cannot See"
        link="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FAll-Light-We-Cannot-See%2Fdp%2F1501173219&psig=AOvVaw3hLybik3tH_w5rGVBuIQu9&ust=1683048869681000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjir-LT1P4CFQAAAAAdAAAAABAE"
        price="15.99"
        rating="5"
      />
    </div>
  )
}

export default Home;