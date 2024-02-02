import React from "react"
import Menu from './Menu'
import '../App'
import '../sass/_header.scss'


function Header() {
    return (
    <section className="header">
            <img src="/assets/logo.png" alt='KASA' className='logo-kasa'/>
            <Menu />
    </section>
    )
}

export default Header