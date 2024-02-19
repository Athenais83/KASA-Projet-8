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
        <Collapse>
        <h2>Fiabilité</h2>
        </Collapse>
        <Collapse>
        <h2>Respect</h2>
        </Collapse>
        <Collapse>
        <h2>Service</h2>
        </Collapse>
        <Collapse>
        <h2>Sécurité</h2>
        </Collapse>
        </div>
        <Footer />
        </>
    )
}

export default About;