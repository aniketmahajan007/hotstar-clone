import React from "react";
import './Detail.css';
import Bao from '../../asset/detail/bao.jpg';
import PlayerOptions from "./PlayerOptions";

function Detail(){
    return(
        <div className="Detail">
            <img src={Bao} alt="Background" className="Background" />
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
