import React from 'react'
import Slider from 'react-slick'
import '../sass/slide.scss'

const SlideShow = ({pictures}) => { 

    const CustomPrevArrow = (props) =>(
        <button {...props} className='custom-prev-arrow'>
            <i class="fa-solid fa-chevron-right"></i>
        </button>
    );

    const CustomNextArrow = (props) => (
        <button {...props} className='custom-next-arrow'>
            <i class="fa-solid fa-chevron-left"></i>
        </button>
    );

    const settings = {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow : <CustomPrevArrow/>,
        nextArrow : <CustomNextArrow/>,
    };

   return(
    <Slider className='carousel' {...settings}>
        {pictures.map((picture, index)=>(
            <div key={index}>
                <img src={picture} alt={`Slide ${index}`}/>
            </div>
        ))}
    </Slider>
   )
};

export default SlideShow;