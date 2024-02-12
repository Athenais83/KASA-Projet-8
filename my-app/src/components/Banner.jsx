import React from "react"
import "../App"

function Banner ({imageUrl, text}) {

    return(
        <div>
            <img src={imageUrl} alt={"Image" + imageUrl} className="image-banner"/>
            <p className="text-image">{text}</p>
        </div>
    )
}
export default Banner;

