import React from 'react'
import '../sass/Card.scss'

const Card - {( identifiant, title, cover) } => {
    return(
        <img src-{cover} alt-{title}/>
        <h3>{title}</h3>
    )
}

function Card(){
    return (
        <div>
            <article>
                <h2>Titre de la location</h2>
            </article>
            <article>
                <h2>Titre de la location</h2>
            </article>
            <article>
                <h2>Titre de la location</h2>
            </article>
            <article>
                <h2>Titre de la location</h2>
            </article>
            <article>
                <h2>Titre de la location</h2>
            </article>
            <article>
                <h2>Titre de la location</h2>
            </article>
        </div>
    )
}
export default Card