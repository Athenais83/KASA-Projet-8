import React, {useState} from 'react'
import '../sass/_collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse({children}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <button onClick={toggleCollapse} className='btn-collapse'>
                description
                <FontAwesomeIcon icon={faChevronUp} className='icon'/>
            </button>
            {isOpen && <div>{children}</div>}
        </div>
            );
};

export default Collapse;