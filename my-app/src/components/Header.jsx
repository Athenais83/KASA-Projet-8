import React from "react";
import './Header';
import Menu from './Menu';


function Header() {
    return (
    <div>
            <img src="/assets/logo.png" alt='KASA' className='logo-kasa'/>
            <Menu />
    </div>
    )
}

export default Header;