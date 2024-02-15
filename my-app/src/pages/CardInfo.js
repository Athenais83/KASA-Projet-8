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

    return (
        <><Header/>
        <section className='cardinfo'>
          {cardData ? (
            <div>
              <div>
                <SlideShow pictures={cardData.pictures}/>
                </div>
                <h3 className='location'>{cardData.location}</h3>
                <p>{cardData.tags}</p>
                <p>{cardData.rating}</p>
                <div className='collapse'>
                <Collapse>
                <p>{cardData.description}</p>
                </Collapse>
                <Collapse>
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
