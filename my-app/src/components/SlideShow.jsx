import React from 'react'
import Slider from 'react-slick'
import '../sass/slide.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SlideShow = ({pictures}) => { 

    const CustomPrevArrow = (props) =>(
        <button {...props} className='custom-prev-arrow'>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
    );

    const CustomNextArrow = (props) => (
        <button {...props} className='custom-next-arrow'>
            <FontAwesomeIcon icon={faChevronRight}/>
        </button>
    );

    const settings = {
        arrows: true,
        prevArrow : <CustomPrevArrow/>,
        nextArrow : <CustomNextArrow/>,
    };

   return(
    <Slider className='carousel' {...settings}>
        {pictures.map((cardData, index)=>(
            <div key={index}>
                <img src={cardData} alt={""}/>
            </div>
        ))}
    </Slider>
   )
};

export default SlideShow;