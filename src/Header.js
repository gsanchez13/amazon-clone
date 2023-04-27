import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <nav className="header">
      <Link to="/" >
        <img className="header__logo"
          src="/amazonlogo3.png"
          alt="Amazon logo with white lettering and orange Amazon smile"
        />
      </Link>
      <input className="header__searchInput "/>
      <SearchIcon className="header__searchIcon"/>

      {/* three links: 
            sign in
            returns & orders
            your prime */}
      {/* shopping cart / basket icon with a number*/}
    </nav>
  )
}

export default Header