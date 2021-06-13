import React from "react";
import PlayBlack from "../../asset/images/play-icon-black.png";
import PlayWhite from "../../asset/images/play-icon-white.png";
import GrpIcon from "../../asset/images/group-icon.png";
import './PlayerOptions.css';

function PlayerOptions(){
    return(
        <div className="PlayerOptions">
            <button className="PlayButton PlayButtonLight">
                <img src={PlayBlack} alt="Play Button" />
                <span>PLAY</span>
            </button>
            <button className="PlayButton PlayButtonDark">
                <img src={PlayWhite} alt="Play Button" />
                <span>TRAILER</span>
            </button>
            <button className="QueueBtn">
                +
            </button>
            <button className="QueueBtn Sharebtn">
                <img src={GrpIcon} alt="Share" />
            </button>
        </div>
    )
}
export default PlayerOptions;
