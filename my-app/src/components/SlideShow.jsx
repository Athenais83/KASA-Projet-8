import React, {useState, useEffect} from 'react';
import '../sass/slide.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const SlideShow = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    const goToNextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % pictures.length);
    };

    useEffect(() => {
        const updateSlideNumber = () => {
            document.querySelector(".slide-number").innerText = `${currentIndex + 1}/${pictures.length}`;
        };
        updateSlideNumber();
    }, [currentIndex, pictures.length]);

    return (
        <div className='carousel'>
            <button className='custom-prev-arrow' onClick={goToPreviousSlide}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <img src={pictures[currentIndex]} alt={""}/>
            <button className='custom-next-arrow' onClick={goToNextSlide}>
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
            <div className="slide-number">{currentIndex + 1}/{pictures.length}</div>
        </div>
    );
};

export default SlideShow;