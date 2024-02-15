import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Logement from '../data/logement.json'

const MyCarousel = () => { 
    return(
        <Carousel>
            {Logement.map((data)=>(
                <div key={data.id}>
                    <img src={data.pictures} alt=""/>
                </div>
            ))}
        </Carousel>
    )
}

export default MyCarousel