import React from "react"
import Header from '../components/Header'

function Error (){
    return (
        <><div>
            <Header />
            <h1>404</h1>
        </div>
        <div>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <div>
                <p>Retourner sur la page d'accueil</p>
            </div></>
    )
}

export default Error