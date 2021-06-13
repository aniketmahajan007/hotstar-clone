import React from "react";
import './MovieList.css';

function MovieList({Title, Image}){
    return(
        <div className="MovieList">
            <h3>{Title}</h3>
            <div className="Movie_Box">
                {
                    Image.map((image)=>{
                        return (
                            <div>
                                <a>
                                    <img src={image} alt="Series" />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MovieList;
