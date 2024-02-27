import React, {useState} from 'react'
import '../sass/_collapse.scss'

function Collapse({children, title}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className='collapse'>
            <button onClick={toggleCollapse} className={`btn-collapse ${isOpen ? 'open' : ''}`}>
                {title}
                <img src={isOpen ? "/assets/VectorClose.png" : "/assets/VectorOpen.png"} alt="" className='icon'/>
            </button>
            {isOpen && <div className='info-about'>{children}</div>}
        </div>
            );
};

export default Collapse;