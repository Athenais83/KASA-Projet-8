import React from "react"
import '../styles/Header.scss'


function Header() {
    return (
    <div>
            <img src="/assets/logo.png" alt='KASA' className='logo-kasa'/>
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