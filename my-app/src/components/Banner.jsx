import React from "react"
import "../App"
import { useLocation } from "react-router-dom";

function Banner () {

    const location = useLocation();
    const {pathname} = location;

    const getImageUrl = (pathname) => {
        switch (pathname) {
            case "/About": 
            return "/assets/source2.png";
            case "/":
                return "/assets/source1.png";
                default:
                    return '/assets/source1.png';
        }
    };

    const imageUrl = getImageUrl(pathname);

    return(
        <div>
            <img src={imageUrl} alt={"Image" + pathname} className="image-banner"/>
            <p className="text-image">Chez vous, partout et ailleurs</p>
        </div>
    )
}
export default Banner;

