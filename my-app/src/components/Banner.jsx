import React from "react"
import "../App"

function Banner(){
    return( 
        <main className="banner"> 
        <div className="image-container">
            <img src="/assets/source1.png" alt="" className="image-banner"/>
            </div>
            <div className="text-image">
                Chez vous, partout et ailleurs
        </div>
        </main>
    )
}
export default Banner