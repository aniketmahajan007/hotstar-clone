import React from "react";
import './MovieList.css';
import {Link} from "react-router-dom";

function MovieList({Title, Image}){
    return(
        <div className="MovieList">
            <h3>{Title}</h3>
            <div className="Movie_Box">
                {
                    Image.map((image)=>{
                        return (
                            <div key={image.id}>
                                <Link to={`/Detail/${image.id}`} >
                                    <img src={`./movielist/${image.avatar}`} alt="Series" />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MovieList;
