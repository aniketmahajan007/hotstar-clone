import React, {useState} from "react";
import './Header.css';
import Logo from '../../asset/images/logo.svg';
import Homeicon from  '../../asset/images/home-icon.svg';
import Searchicon from  '../../asset/images/search-icon.svg';
import Watchlisticon from  '../../asset/images/watchlist-icon.svg';
import Originalsicon from  '../../asset/images/original-icon.svg';
import Movieicon from  '../../asset/images/movie-icon.svg';
import SeriesIcon from  '../../asset/images/series-icon.svg';
import {useHistory} from "react-router-dom";
import firebase from "firebase";
import '../../firebase';
import {useSelector, useDispatch} from "react-redux";
import {updateuser} from "../../features/movie/movieSlice";


function Header(){
    const underDevelopment = () => {
        alert('This feature is under development');
    }
    const userdata = useSelector(state => state.hotstar);
    const dispatch = useDispatch();
    const history = useHistory();
    const loginredirect = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const temp = {
                    name: result.additionalUserInfo.profile.name,
                    picture: result.additionalUserInfo.profile.picture
                }
                dispatch(updateuser(temp));
                history.push('/Home');
            }).catch((error) => {
                console.log(error);
        });
    }
    const loginchecker = () => {
        if(userdata.loginuser.length < 1){
            alert('Login required to access this content');
        }else{
            history.push('/Home');
        }
    }
    const signout_initiate = () => {
        dispatch(updateuser([]));
        history.push('/')
    }
    const [signout, signout_update] = useState(0);
    const update_signout = () => {
        signout_update(!signout);
    }
    return(
        <div className="Header">
            <img className="header__logo" src={Logo} alt="Hotstar Logo" />
            <div className="Nav_menu">
                <a href="#" onClick={loginchecker} >
                    <img src={Homeicon} alt="Home" />
                    <span>HOME</span>
                </a>
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
            { (userdata.loginuser.length < 1)
                ? <div className="login__button" onClick={loginredirect}><span>LOGIN</span></div>
                : <div className="user_data_box"><img onClick={update_signout} src={userdata.loginuser[0].picture} alt="User Avatar" className="UserAvatar" />{signout ? <span onClick={signout_initiate} className=" Sign__out">Sign Out</span>: ""}</div>
            }
        </div>
    )
}
export default Header
