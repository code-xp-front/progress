import React from "react";
import HeroIcon320 from "./hero-icon-320px.png";
import "./Hero.css"

export default (props) => (
    <header className="hero">
        <div>
            <h1 className="hero__title">progress</h1>
            <p className="hero__text">
                A new way for service<br/>
                providers and consumers<br/>
                track project profression.
            </p>
        </div>
        <img className="hero__icon" src={HeroIcon320} alt="Celular com a tela inicial do aplicativo progress"/>
    </header>
);