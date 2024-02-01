import React from "react"
import Menu from './Menu'
import '../App'


function Header() {
    return (
    <section>
            <img src="/assets/logo.png" alt='KASA' className='logo-kasa'/>
            <Menu />
    </section>
    )
}

export default Header