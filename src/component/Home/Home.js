import React from "react";
import './Home.css';
import Background from '../../asset/images/home-background.png'
import ImageSlider from "./ImageSlider/ImageSlider";

function Home(){
    return(
        <div className="Home" style={{"backgroundImage":"url("+Background+")"}}>
            <br/>
            <ImageSlider/>
        </div>
    )
}
export default Home
