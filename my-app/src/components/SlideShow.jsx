import React, {useState, useEffect} from 'react';
import '../sass/slide.scss'


const SlideShow = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideNumber, setSlideNumber] = useState (`${currentIndex + 1}/${pictures.length}`);

    const goToPreviousSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    const goToNextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % pictures.length);
    };

    useEffect(() => {
        setSlideNumber(`${currentIndex + 1}/${pictures.length}`);
    }, [currentIndex, pictures.length]);

    const isSingleImage = pictures.length === 1;

    return (
        <div className='carousel'>
            {!isSingleImage && (
            <button className='custom-prev-arrow' onClick={goToPreviousSlide}>
                <img src="/assets/VectorPrev.png" alt=""/>
            </button>
            )}
            <img src={pictures[currentIndex]} alt={""}/>
            {!isSingleImage && (
            <button className='custom-next-arrow' onClick={goToNextSlide}>
                <img src="/assets/VectorNext.png" alt=""/>
            </button>
            )}
            {!isSingleImage && (
            <div className="slide-number">{slideNumber}</div>
            )}
            </div>
    );
};

export default SlideShow;