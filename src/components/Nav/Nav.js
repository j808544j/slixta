import React from 'react'
import CartSvg from './CartSvg';
import FullLogoSvg from './FullLogoSvg';
import SearchSvg from './SearchSvg';
import "./styles.css";
import UserSvg from './UserSvg';

function Nav() {
  return (
    <div className='nav-container'>
     <div className='nav-logo'>
        <FullLogoSvg />
        <div className='nav-logo-text'>
            Hygge
        </div>
     </div>
     <div className='nav-right-container'>
        <SearchSvg/>
        <CartSvg/>
        <UserSvg/>
     </div>
    </div>
  )
}

export default Nav