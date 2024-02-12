import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Logement from '../data/logement.json';
import Header from '../components/Header';

function CardInfo () {
    const {id} = useParams();
    const [cardData, setCardData] = useState(null);

    useEffect(()=>{
        const data = Logement.find(card=>card.id===id);
        setCardData(data);
    },[id]);

    return (
        <div>
          {cardData ? (
            <div>
                <img src={cardData.pictures} alt={cardData.title}/>
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
      );
    }; 

export default CardInfo
