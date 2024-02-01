import React from "react"
import Menu from './Menu'
import '../App'


function Header() {
    return (
    <div>
            <img src="/assets/logo.png" alt='KASA' className='logo-kasa'/>
            <Menu />
    </div>
    )
}

export default Header