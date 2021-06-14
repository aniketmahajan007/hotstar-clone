import React from "react";
import './Header.css';
import Logo from '../../asset/images/logo.svg';
import Homeicon from  '../../asset/images/home-icon.svg';
import Searchicon from  '../../asset/images/search-icon.svg';
import Watchlisticon from  '../../asset/images/watchlist-icon.svg';
import Originalsicon from  '../../asset/images/original-icon.svg';
import Movieicon from  '../../asset/images/movie-icon.svg';
import SeriesIcon from  '../../asset/images/series-icon.svg';
import {Link} from "react-router-dom";

function Header(){
    const underDevelopment = () => {
        alert('This feature is under development');
    }
    return(
        <div className="Header">
            <img className="header__logo" src={Logo} alt="Hotstar Logo" />
            <div className="Nav_menu">
                <Link to='/Home' >
                    <img src={Homeicon} alt="Home" />
                    <span>HOME</span>
                </Link>
                <a href="#" onClick={underDevelopment}>
                    <img src={Searchicon} alt="Search" />
                    <span>SEARCH</span>
                </a>
                <a href="#" onClick={underDevelopment}>
                    <img src={Watchlisticon} alt="Watch list" />
                    <span>WATCHLIST</span>
                </a>
                <a href="#" onClick={underDevelopment} className="menu_short_remove">
                    <img src={Originalsicon} alt="Original" />
                    <span>ORIGINALS</span>
                </a>
                <a href="#" onClick={underDevelopment} className="menu_short_remove">
                    <img src={Movieicon} alt="Movies" />
                    <span>MOVIES</span>
                </a>
                <a href="#" onClick={underDevelopment} className="menu_short_remove">
                    <img src={SeriesIcon} alt="Series" />
                    <span>SERIES ICON</span>
                </a>
            </div>
            <img src="https://lh3.googleusercontent.com/ogw/ADea4I4e38gRgi_ih1EcgKnR1_K8MJTWwTOfSo--julzfQ=s83-c-mo" alt="User Avatar" className="UserAvatar" />
        </div>
    )
}
export default Header
