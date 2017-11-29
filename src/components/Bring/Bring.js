import React from "react";
import imgService1 from "./icon1.png";
import imgService2 from "./icon2.png";
import imgService3 from "./icon3.png";
import imgService4 from "./icon4.png";
import imgService5 from "./icon5.png";
import imgService6 from "./icon6.png";
import imgService7 from "./icon7.png";
import imgService8 from "./icon8.png";
import imgPhone from "./phone.png";
import "./Bring.css"

var bring = {
    title: "Bring Your Own Business",
    subtitle:"Flexible Platform",
    description: "We are an industry agnostic platform. If you can track it, you can Progress it! Progress makes it easy for service providers to connect directly with their customers."
}

export default (props) => (
    <section className="bring">
        <h1 className="bring-title">
            {props.title}
        </h1>
        <div className="services">
            <div className="services-icon services-icon--left">
                <img className="services-icon__demo services-icon__demo--1" src="img/icon1.png" alt="icon detail">
                <img className="services-icon__demo services-icon__demo--2" src="img/icon2.png" alt="icon flower">
                <img className="services-icon__demo services-icon__demo--4" src="img/icon3.png" alt="icon grave">
                <img className="services-icon__demo services-icon__demo--3" src="img/icon4.png" alt="icon pc">
            </div>
            <div className="services-phone">
                <img className="services-phone__demo" src="img/phone.png" alt="phone">
            </div>
            <div className="services-icon services-icon--right">
                <img className="services-icon__demo services-icon__demo--2" src="img/icon5.png" alt="icon bug">
                <img className="services-icon__demo services-icon__demo--1" src="img/icon6.png" alt="icon tool">
                <img className="services-icon__demo services-icon__demo--3" src="img/icon7.png" alt="icon mech">
                <img className="services-icon__demo services-icon__demo--4" src="img/icon8.png" alt="icon garden">
            </div>
        </div>

        <div className="bring-text">
            <h2 className="bring-subtitle">
                {props.subtitle}
            </h2>
            <p className="bring-parag">
                {props.description}
            </p>
        </div>

        <form className="invite">
            <input className="invite__input" type="email" placeholder="Add your email address">
            <button className="invite__button">Invite me</button>
        </form>
    </section>
);