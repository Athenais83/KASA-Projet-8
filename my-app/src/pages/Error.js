import React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../sass/_error.scss'

function Error (){
    return (
        <><div>
            <Header />
            <h1 className="erreur">404</h1>
        </div>
        <div className="oups">
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <div className="lien">
                <a href="/">Retourner sur la page d'accueil</a>
            </div>
            <Footer/>
            </>
            
    )
}

export default Error