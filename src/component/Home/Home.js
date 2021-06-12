import React from "react";
import './Home.css';
import Background from '../../asset/images/home-background.png'
import ImageSlider from "./ImageSlider/ImageSlider";
import Genres from "./Genres/Genres";

function Home(){
    return(
        <div className="Home" style={{"backgroundImage":"url("+Background+")"}}>
            <br/>
            <ImageSlider/>
            <br/><br/>
            <Genres/>
            <br/><br/><br/><br/>

        </div>
    )
}
export default Home
