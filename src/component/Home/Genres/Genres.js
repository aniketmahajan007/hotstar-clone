import React from "react";
import './Genres.css';
import Disney from '../../../asset/images/viewers-disney.png';
import Marvel from '../../../asset/images/viewers-marvel.png';
import National from '../../../asset/images/viewers-national.png';
import Pixer from '../../../asset/images/viewers-pixar.png';
import StarWars from '../../../asset/images/viewers-starwars.png';
import VDisney from '../../../asset/videos/1564674844-disney.mp4';
import VMarvel from '../../../asset/videos/1564676115-marvel.mp4';
import VNational from '../../../asset/videos/1564676296-national-geographic.mp4';
import VPixer from '../../../asset/videos/1564676714-pixar.mp4';
import VStarWars from '../../../asset/videos/1608229455-star-wars.mp4';

import GenreLoader from "./GenreLoader";

function Genres(){
    return(
        <div className="Genres">
            <GenreLoader Image={Disney} Video={VDisney} />
            <GenreLoader Image={Marvel} Video={VMarvel} />
            <GenreLoader Image={Pixer} Video={VPixer} />
            <GenreLoader Image={StarWars} Video={VStarWars} />
            <GenreLoader Image={National} Video={VNational} />
        </div>
    )
}
export default Genres;
