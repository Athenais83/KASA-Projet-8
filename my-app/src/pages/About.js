import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

function About(){
    return(
        <>
        <Header />
        <Banner imageUrl="/assets/source2.png"/>
        <div className='collapse center'>
        <Collapse title="Fiabilité">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrmeent vérifiées par nos équipes.</p>
        </Collapse>
        <Collapse title="Respect">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Service">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Sécurité">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
        </div>
        <Footer />
        </>
    )
}

export default About;