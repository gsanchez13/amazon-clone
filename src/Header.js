import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import {initalState} from './Products/reducer.js'

function Header() {
  return (
    <nav className="header">
      <div className="header__container">
        <Link to="/" >
          <img className="header__logo"
            src="/amazonlogo3.png"
            alt="Amazon logo with white lettering and orange Amazon smile"
          />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" placeholder="Search Amazon" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello Giselle</span>
              <span className="header__optionLineTwo">Account & Lists</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingCartOutlinedIcon />
              <br/>
              <span className="header__optionLineTwo header__basketCount">{initalState.basket.length}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="header__menuBar">
        <div className="header__menuBundle">
          <MenuIcon className="header__menuIcon" /> <span className="header__menuBarLink">All</span>
        </div>
        <span className="header__menuBarLink">Clinic</span>
        <span className="header__menuBarLink">Same-Day Delivery</span>
        <span className="header__menuBarLink">Prime Video</span>
        <span className="header__menuBarLink">Customer Service</span>
        <span className="header__menuBarLink">Health & Household</span>
        <span className="header__menuBarLink">Amazon Home</span>
        <span className="header__menuBarLink">Coupons</span>
        <span className="header__menuBarLink">Beauty & Personal Care</span>
        <span className="header__menuBarLink">Pet Supplies</span>
      </div>
    </nav>
  )
}

export default Header;