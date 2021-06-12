import React from "react";

function GenreLoader({Image, Video}){
    return (
        <div className="GenreLoader">
            <img src={Image} alt="Genre" />
            <video autoPlay loop muted>
                <source src={Video} type="video/mp4"/>
            </video>
        </div>
    )
}
export default GenreLoader;
