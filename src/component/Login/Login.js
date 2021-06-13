import React from "react";
import './Login.css';
import LoginBg from '../../asset/images/login-background.jpg';
import CTone from '../../asset/images/cta-logo-one.svg';
import CTtwo from '../../asset/images/cta-logo-two.png';

function Login(){
    return (
        <div className="Login">
            <img className="LoginBg" src={LoginBg} alt="Bg Login" />
            <div className="CenterElement">
                <img src={CTone} alt="Logo"/>
                <button>GET ALL HERE</button>
                <p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
                    <br/> As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </p>
                <img src={CTtwo} alt="All logi"/>
            </div>
        </div>
    )
}

export default Login;
