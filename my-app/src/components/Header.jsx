import React from "react"
import '../sass/Header.scss'
import Menu from './Menu'


function Header() {
    return (
    <div>
            <img src="/assets/logo.png" alt='KASA' className='logo-kasa'/>
            <Menu />
    </div>
    )
}

export default Header