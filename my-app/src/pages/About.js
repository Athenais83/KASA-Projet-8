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
        <p>Fiabilité</p>
        </Collapse>
        <Collapse>
        <p>Respect</p>
        </Collapse>
        <Collapse>
        <p>Service</p>
        </Collapse>
        <Collapse>
        <p>Sécurité</p>
        </Collapse>
        </div>
        <Footer />
        </>
    )
}

export default About;