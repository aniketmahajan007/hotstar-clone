import React from "react";
import './Home.css';
import Background from '../../asset/images/home-background.png'
import ImageSlider from "./ImageSlider/ImageSlider";
import Genres from "./Genres/Genres";
import MovieList from "./MovieList/MovieList";
import {useSelector} from "react-redux";

function Home(){
        // use any Api to fetch list and save to redux using dispatch
        const movielist = useSelector(state => state.hotstar);
        const recommend  = movielist.movielist.slice(0,4);
        const trending = movielist.movielist.slice(4,7);
        trending.push(movielist.movielist[0])
        const disney = movielist.movielist.slice(7,11);
        const originals = movielist.movielist.slice(11,15)
    return(
        <div className="Home" style={{"backgroundImage":"url("+Background+")"}}>
            <br/>
            <ImageSlider/>
            <br/><br/>
            <Genres/>
            <br/><br/>
            <MovieList Image={recommend} Title="Recommended For You" />
            <br/>
            <MovieList Title="Trending" Image={trending}/>
            <br/>
            <MovieList Title="New to Disney+" Image={disney} />
            <br/>
            <MovieList Title="Originals" Image={originals} />
            <br/><br/><br/>
        </div>
    )
}
export default Home;
