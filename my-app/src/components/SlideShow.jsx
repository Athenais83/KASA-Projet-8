import React from 'react'
import Slider from 'react-slick'
import '../sass/slide.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        {pictures.map((image, index)=>(
            <div key={index}>
                <img src={image} alt={""}/>
            </div>
        ))}
    </Slider>
   )
};

export default SlideShow;