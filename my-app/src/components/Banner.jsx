import React from "react"
import "../App"

function Banner ({imageUrl, text}) {

    return(
        <div className="banner">
            <img src={imageUrl} alt={"Image" + imageUrl} className="image-banner"/>
            <div className="overlay"></div>
            <p className="text-image">{text}</p>
        </div>
        
    )
}
export default Banner;

