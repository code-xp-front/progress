import React from "react";
import HeaderCel from "./cel.png";
import HeaderLogo from "./logo.png";
import "./Header.css"

export default (props) => (
    <header className="header">
        <div className="header__conteiner">
            <img className="header__logo" src={HeaderLogo} alt="logo"/>
            <p className="header__paragrafo">{props.title}</p>      
        </div>
        <img className="header__imagem"  src={HeaderCel} alt="imagem"/>
    </header>
);