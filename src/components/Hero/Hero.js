import React from "react";
import HeroPhoneIcon from "./phone-hero.png";
import HeroLogoIcon from "./logo-progress.png";
import "./Hero.css"

export default(props) => (
<header className="hero"> 
    <div className="hero--size">
    <div className="hero__title">
        <figure className="hero__title-figura">
            <img className="hero__title-figura--size-img" src={HeroLogoIcon} alt="Logo_progress"/>
        </figure>
        <p className="hero__title-texto">{props.text}</p>
    </div>
    <figure className="hero__phone">
        <img src={HeroPhoneIcon} className="hero__phone--size-img" alt="Phone_Hero"/>
    </figure>
</div> 
</header>
        );