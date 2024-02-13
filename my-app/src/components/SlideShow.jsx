import React, {useState} from 'react';

const SlideShow = ({images})=>{
    const[currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex)=>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex)=>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return(
        <div className='SlideShow'>
            <button onClick={prevSlide}>Prev</button>
            <img src={images[currentIndex]} alt="SlideShow"/>
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default SlideShow;