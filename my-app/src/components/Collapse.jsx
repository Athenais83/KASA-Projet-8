import React, {useState} from 'react'
import '../sass/_collapse.scss'

function Collapse({children}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <button onClick={toggleCollapse} className='btn-collapse'>
                Description
                <i class="fa-solid fa-chevron-up chevron"></i>
            </button>
            {isOpen && <div>{children}</div>}
        </div>
            );
};

export default Collapse;