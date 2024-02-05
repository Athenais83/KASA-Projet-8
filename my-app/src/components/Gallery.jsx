import React from "react";
import Logement from '../data/logement.json';
import Card from '../components/Card';

function Gallery(){
    return(
        <div className="card_gallery">
            
            {Logement.map((data) => {
                return(
                    <Card
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    cover={data.cover}
                    />
                );
            })}
        </div>
    ); 
};

export default Gallery;
