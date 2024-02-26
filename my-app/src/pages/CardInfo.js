import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Logement from '../data/logement.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SlideShow from '../components/SlideShow';
import '../sass/_cardinfo.scss';
import Collapse from '../components/Collapse';

function CardInfo () {
    const {id} = useParams();
    const [cardData, setCardData] = useState(null);

    useEffect(()=>{
        const data = Logement.find(card=>card.id===id);
        setCardData(data);
    },[id]);

    const generateStarRating = (rating) => {
      const roundedRating = Math.round(rating);
      const stars = [];

      for(let i = 0; i<5; i++){
        if(i<roundedRating){
          stars.push(<span key={i} className='star-filled'>&#9733;</span>);
        } else{
          stars.push(<span key={i} className='star-empty'>&#9734;</span>);
        }
      }
      return stars;
    };

    return (
        <><Header/>
        <section className='cardinfo'>
          {cardData ? (
            <div>
              <div className='slide'>
                <SlideShow pictures={cardData.pictures}/>
                </div>
                <div className='lieu'>
                <h3 className='title'>{cardData.title}</h3>
                <div className='info-location'>
                  <div className='host-info'>
                  <p className='name'>{cardData.host.name}</p>
                  <img src={cardData.host.picture} alt="" className='picture'/>
                </div>
                <div className='star-rating'>
                  {generateStarRating(cardData.rating)}
                </div>
                </div>
                </div>
                <h2 className='location'>{cardData.location}</h2>
                <div className='tags'>{cardData.tags.map((tag, index)=>(
            <div key={index}>
                {tag}
            </div>
        ))}</div>
        <div className='info-location-mobile'>
        <div className='host-info'>
                  <p className='name'>{cardData.host.name}</p>
                  <img src={cardData.host.picture} alt="" className='picture'/>
                </div>
                <div className='star-rating'>
                  {generateStarRating(cardData.rating)}
                </div>
                </div>
                <div className='info-collapse'>
                <Collapse title="Description">
                <p>{cardData.description}</p>
                </Collapse>
                <Collapse title="Equipements">
                <p>{cardData.equipments}</p>
                </Collapse>
                </div>
            </div>
          ) : (
            <p>Chargement des données...</p>
          )}
        </section>
        <Footer/>
        </>
      );
    }; 

export default CardInfo
