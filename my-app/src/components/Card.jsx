import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/_card.scss';

function Card({ id, title, cover}) {
    return (
       
        <article className='card'>
            <Link to={`/CardInfo/${id}`} className="gallery_card">
                <img src={cover} alt={title} className='img_card'/>
                <h3 className='title-card'>{title}</h3>
            </Link>
        </article>
    ); 
   
}

export default Card;
