import React, {useState} from 'react'
import '../sass/_collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({children, title}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className='collapse'>
            <button onClick={toggleCollapse} className='btn-collapse'>
                {title}
                <FontAwesomeIcon icon={faChevronUp} className='icon'/>
            </button>
            {isOpen && <div>{children}</div>}
        </div>
            );
};

export default Collapse;