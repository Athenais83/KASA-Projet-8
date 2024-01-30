import React from 'react'
import data from "../data/logement.json"
import Card from "../components/Card"

const Gallery - {} => {
    return(
        <main className- "home_gallery">
            {data.map{(data) => {
        return(
            <Card
            key- {data.identifiant}
            identifiant- {data.identifiant}
            title- {data.title}
            cover- {data.cover}
            />
        );
            }}};
        </main>
    );
};

export default Gallery