import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Logement from '../data/logement.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SlideShow from '../components/SlideShow';

function CardInfo () {
    const {id} = useParams();
    const [cardData, setCardData] = useState(null);

    useEffect(()=>{
        const data = Logement.find(card=>card.id===id);
        setCardData(data);
    },[id]);

    return (
        <><Header/>
        <div>
          {cardData ? (
            <div>
              <div className='carousel'>
                <SlideShow pictures={cardData.pictures}/>
                </div>
                <p>{cardData.location}</p>
                <p>{cardData.tags}</p>
                <p>{cardData.rating}</p>
                <p>{cardData.description}</p>
                <p>{cardData.equipments}</p>
            </div>
          ) : (
            <p>Chargement des données...</p>
          )}
        </div>
        <Footer/>
        </>
      );
    }; 

export default CardInfo
