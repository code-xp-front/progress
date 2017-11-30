import React from "react";
import HeroIcon320 from "./hero-icon-320px.png";
import HeroIcon768 from "./hero-icon-768px.png";
import HeroIcon992 from "./hero-icon-992px.png";
import HeroIcon1200 from "./hero-icon-1200px.png";
import HeroLogo from "./logo-progress.png";
import HeroIcon from "./icon-hero-desktop2.png";
import "./Hero.css"

export default (props) => (
    <header className="hero">
        <div className="hero__title">
            <img src={HeroLogo} alt="icone" class="hero__logo"/>
            <p className="hero__text">{props.text}</p>
        </div>
        <img className="hero__phone" srcset={`${HeroIcon320} 562w, ${HeroIcon768} 634, ${HeroIcon992} 808, ${HeroIcon1200} 886`} sizes="50vw" 
src={HeroIcon320} alt="Celular com a tela inicial do aplicativo progress"/>
    </header>
);
