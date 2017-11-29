import React from "react";
import imgService1 from "./hero-icon-320px.png";
import "./Bring.css"

var bring = {
    title: "Bring Your Own Business",
    imgService1: "https://codexp-front-p4ge.github.io/progress/img/icon1.png",
    imgService2: "https://codexp-front-p4ge.github.io/progress/img/icon2.png",
    imgService3: "https://codexp-front-p4ge.github.io/progress/img/icon3.png",
    imgService4: "https://codexp-front-p4ge.github.io/progress/img/icon4.png",
    imgService5: "https://codexp-front-p4ge.github.io/progress/img/icon5.png",
    imgService6: "https://codexp-front-p4ge.github.io/progress/img/icon6.png",
    imgService7: "https://codexp-front-p4ge.github.io/progress/img/icon7.png",
    imgService8: "https://codexp-front-p4ge.github.io/progress/img/icon8.png",
    imgPhone: "https://codexp-front-p4ge.github.io/progress/img/phone.png",
    subtitle:"Flexible Platform",
    description: "We are an industry agnostic platform. If you can track it, you can Progress it! Progress makes it easy for service providers to connect directly with their customers."
}

export default (props) => (
    <section class="bring">
        <h1 class="bring-title">Bring Your Own Business</h1>
        <div class="services">
            <div class="services-icon services-icon--left">
                <img class="services-icon__demo services-icon__demo--1" src="img/icon1.png" alt="icon detail">
                <img class="services-icon__demo services-icon__demo--2" src="img/icon2.png" alt="icon flower">
                <img class="services-icon__demo services-icon__demo--4" src="img/icon3.png" alt="icon grave">
                <img class="services-icon__demo services-icon__demo--3" src="img/icon4.png" alt="icon pc">
            </div>
            <div class="services-phone">
                <img class="services-phone__demo" src="img/phone.png" alt="phone">
            </div>
            <div class="services-icon services-icon--right">
                <img class="services-icon__demo services-icon__demo--2" src="img/icon5.png" alt="icon bug">
                <img class="services-icon__demo services-icon__demo--1" src="img/icon6.png" alt="icon tool">
                <img class="services-icon__demo services-icon__demo--3" src="img/icon7.png" alt="icon mech">
                <img class="services-icon__demo services-icon__demo--4" src="img/icon8.png" alt="icon garden">
            </div>
        </div>

        <div class="bring-text">
            <h2 class="bring-subtitle">Flexible Platform</h2>
            <p class="bring-parag">We are an industry agnostic platform. If you can track it, you can Progress it! Progress makes it easy for service providers to connect directly with their customers.</p>
        </div>

        <form class="invite">
            <input class="invite__input" type="email" placeholder="Add your email address">
            <button class="invite__button">Invite me</button>
        </form>
    </section>
);