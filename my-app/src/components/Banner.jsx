import React from "react"
import "../App"

function Banner(){

    const currentUrl = window.location.href;

    let imageUrl;
    if(currentUrl === "/"){
        imageUrl = '/assets/source1.png';
    } else if(currentUrl ==="/About"){
        imageUrl = '/assets/source2.png';
    }

    return( 
        <main className="banner"> 
        <div className="image-container">
            <img src={imageUrl} alt="" className="image-banner"/>
            </div>
            <div className="text-image">
                Chez vous, partout et ailleurs
        </div>
        </main>
    )
}
export default Banner;

