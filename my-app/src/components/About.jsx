import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../sass/_about.scss'

function About(){
    return(
        <>
        <Header />
        <img src="/assets/source2.png" alt="banniere" className='photo-banner'/>
        <Footer />
        </>
    )
}

export default About;