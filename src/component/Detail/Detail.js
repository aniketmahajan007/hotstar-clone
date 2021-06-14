import React from "react";
import { useParams } from 'react-router-dom';
import './Detail.css';
import PlayerOptions from "./PlayerOptions";
import {useSelector} from "react-redux";

function Detail(){
    const { id } = useParams();
    const movielist = useSelector(state => state.hotstar).movielist;
    const pagedata = movielist.filter(x => x.id === id)[0];
    return(
        <div className="Detail">
            <img src={`../../detail/${pagedata.detail}`} alt="Background" className="Background" />
 <img className="Image_Title" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="Title" />
            <br/><br/><br/>
            <PlayerOptions />
            <div className="Description">
                <p>2018 • 7m • Family, Fantasy, Kids, Animation</p>
                <p className="Summary">
                    A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood<br/> when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
                </p>
            </div>
        </div>
    )
}

export default Detail;
