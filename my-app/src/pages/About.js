import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

function About(){
    return(
        <>
        <Header />
        <Banner imageUrl="/assets/source2.png"/>
        <div className='collapse'>
        <Collapse title="Fiabilité">
        </Collapse>
        <Collapse title="Respect">
        </Collapse>
        <Collapse title="Service">
        </Collapse>
        <Collapse title="Sécurité">
        </Collapse>
        </div>
        <Footer />
        </>
    )
}

export default About;