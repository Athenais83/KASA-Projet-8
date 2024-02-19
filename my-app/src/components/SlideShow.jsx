import React, {useState} from 'react';
import '../sass/slide.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SlideShow = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const CustomPrevArrow = (props) => (
        <button {...props} className='custom-prev-arrow' onClick={() => setCurrentIndex(prevIndex => (prevIndex - 1 + pictures.length) % pictures.length)}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
    );

    const CustomNextArrow = (props) => (
        <button {...props} className='custom-next-arrow' onClick={() => setCurrentIndex(prevIndex => (prevIndex + 1) % pictures.length)}>
            <FontAwesomeIcon icon={faChevronRight}/>
        </button>
    );

    return (
        <div className='carousel'>
            <CustomPrevArrow />
            <img src={pictures[currentIndex]} alt={""}/>
            <CustomNextArrow />
        </div>
    );
};

export default SlideShow;