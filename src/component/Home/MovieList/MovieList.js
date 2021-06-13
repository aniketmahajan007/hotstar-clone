import React from "react";
import './MovieList.css';
import { v4 as uuidv4 } from 'uuid';

function MovieList({Title, Image}){
    return(
        <div className="MovieList">
            <h3>{Title}</h3>
            <div className="Movie_Box">
                {
                    Image.map((image)=>{
                        return (
                            <div key={uuidv4()}>
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
