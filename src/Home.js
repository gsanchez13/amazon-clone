import React from 'react';
import './Home.css';
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
          className="productCard__multiple"
          category="Pick up where you left off"
          image1="https://m.media-amazon.com/images/I/81k24XoZOEL._AC_SY879_.jpg"
          title1="Miracle-Gro Garden Soil All Purpose: 1 cu. ft., For In-Ground Use"
          image2="https://m.media-amazon.com/images/I/71AE-afEZfL._AC_SL1500_.jpg"
          title2="Miracle Grow Moisture Control Soil"
          image3="https://m.media-amazon.com/images/I/71R4jRMmnHL._AC_SX679_.jpg"
          title3="Miracle-Gro Potting Mix, 8 qt. (2 Pack)"
          image4="https://m.media-amazon.com/images/I/71knReUJJCL._AC_SY879_.jpg"
          title4="Miracle-Gro Moisture Control Potting Mix, 1 cu. ft."
        />
        <ProductCard
          className="productCard__multiple"
          category="Keep shopping for"
          image1="https://m.media-amazon.com/images/I/61LKoDxQahL._AC_SX679_PIbundle-6,TopRight,0,0_SH20_.jpg"
          title1="WYT Clear Storage Latch Bins, 6-Pack Storage Organizer Box with Handle and Lids, 5-Litre"
          image2="https://m.media-amazon.com/images/I/41+dS1ai5JL._MCnd_AC_.jpg"
          title2="BlissTotes Large Moving Boxes with Zippers & Handles Moving Supplies with lids, Heavy Duty Totes for Storage Bags for Space Saving, Fold Flat, Moving and Storing 93L, 6 Pack"
          image3="https://m.media-amazon.com/images/I/81ErVnrCkfL._AC_SX679_.jpg"
          title3="GIVERARE Picnic Beach Blanket, XL Sandfree Waterproof Outdoor Camping Blanket, Quick Drying Oxford Family Mat, Portable Extra Large Picnic Mat for Travel, Hiking, Music Festival, Lawn"
          image4="https://m.media-amazon.com/images/I/51Ba1CpRjnL._AC_UX679_.jpg"
          title4="High Waist Baggy Cargo Jeans for Women Flap Pocket Relaxed Fit Straight Wide Leg Y2K Fashion Jeans"
        />
        <ProductCard
          className="productCard__multiple"
          category="Buy Again"
          image1="https://m.media-amazon.com/images/I/81UKTJnGFeL._AC_SY240_.jpg"
          title1="Baby Wipes, Pampers Sensitive Water Based Baby Diaper Wipes, Hypoallergenic and Unscented, Tub Not Included, 72 Count (Pack of 8)"
          image2="https://m.media-amazon.com/images/I/81YLdjTyKPL._AC_SY240_.jpg"
          title2="Scotch Heavy Duty Packaging Tape, Clear, 6 Rolls with Dispenser (142-6)"
          image3="https://m.media-amazon.com/images/I/81h3LPzb5TL._AC_SY240_.jpg"
          title3="Amazon Basics Unscented Dog Poop Bags with Dispenser and Leash Clip, Standard 13 x 9 Inches, Black - 600 Bags (40 Rolls)Amazon Basics Unscented Dog Poop Bags with Dispenser and Leash Clip, Standard 13 x 9 Inches, Black - 600 Bags (40 Rolls)"
          image4="https://m.media-amazon.com/images/I/61zM4TT142L._AC_SY240_.jpg"
          title4="Method Gel Hand Soap Refill, Pink Grapefruit, Biodegradable Formula, 34 fl oz (Pack of 6)Method Gel Hand Soap Refill, Pink Grapefruit, Biodegradable Formula, 34 fl oz (Pack of 6)"
        />
        <div className="home__stackedRow">
          <StackedProduct
            className="stackedProduct_top"
            image="https://images-na.ssl-images-amazon.com/images/G/01/dex/2022/Speed/March/030822_DEX_Speed_AdToppers_MothersDay2_2x._CB626696217_.jpg"
          />
          <StackedProduct
            className="stackedProduct_bottom"
            image="https://www.amazon.com/dp/B089B6CPJS?aaxitk=4c7b17846ee5c76514c40e1ba40ab329&pd_rd_plhdr=t&ref=dacx_dp_586103675645598861_585113923207267201"
            price="15.99"
            rating={5}
          />
        </div>
      </div>

      <div className="home__secondRow">
        <ProductCard
          className="productCard__single"
          title="Samsung 50 inch"
          image="https://m.media-amazon.com/images/I/81J3JEwri3L._RI_AC_SL1584_.jpg"
          price="379.99"
          rating={5}
        />
        <ProductCard
          category="Continue Watching"
          className="productCard__singleAd"
          title="The Boys"
          image="https://m.media-amazon.com/images/I/81J3JEwri3L._RI_AC_SL1584_.jpg"
          price="379.99"
          rating={5}
        />
        <ProductCard
          category="Continue Watching"
          className="productCard__singleAd"
          title="The Boys"
          image="https://m.media-amazon.com/images/I/81J3JEwri3L._RI_AC_SL1584_.jpg"
          price="379.99"
          rating={5}
        />
      </div>
    </div>
  )
}

export default Home;
