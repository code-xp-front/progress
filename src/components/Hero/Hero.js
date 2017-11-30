import React from "react";
import HeroIcon320 from "./hero-icon-320px.png";
import HeroIcon768 from "./hero-icon-768px.png";
import HeroIcon992 from "./hero-icon-992px.png";
import HeroIcon1200 from "./hero-icon-1200px.png";

import "./Hero.css";


export default (props) => {
    var textos = [];
    for (var i = 0; i < props.textos.length; i++) {
        textos.push(<p>{props.textos[i]}</p>);
    }

    return (
        <header className="hero">
            <div>
                <h1 className="hero__title">{props.title}</h1>
                {textos}
            </div>
            <img className="hero__icon" 
                 srcset={`${HeroIcon320} 562w, ${HeroIcon768} 634w, ${HeroIcon992} 808w, ${HeroIcon1200} 886w`} 
                 sizes="(min-width: 320px) 33.3vw, 100vw"
                 alt="Celular com a tela inicial do aplicativo progress"/>
        </header>
    );
};