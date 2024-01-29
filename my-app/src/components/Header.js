import React from "react"
import logo from '../assets/logo.png'
import '../styles/Header.css'


function Header() {
    return (
    <div>
            <img src={logo} alt='KASA' className='logo-kasa'/>
            <nav className='menu'>
                <ul>
                    <li>Accueil</li>
                    <li>A Propos </li>
                </ul>
            </nav>
    </div>
    )
}

export default Header