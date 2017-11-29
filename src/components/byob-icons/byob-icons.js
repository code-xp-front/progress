import React from "react";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";
import icon6 from "./icon6.png";
import icon7 from "./icon7.png";
import icon8 from "./icon8.png";
import "./byob-icons.css"

export default (props) => (
    <section className="byob__icons">
        <div className="business-byob">
            <img className="business-byob__icon" src={icon1} alt="">
            <img className="business-byob__icon" src={icon2} alt="">
            <img className="business-byob__icon" src={icon3} alt="">
            <img className="business-byob__icon" src={icon4} alt="">
        </div>
        <figure>
            <img className="business-byob__icon--fone" src="../../images/phone.png" alt="">
        </figure>
        <div className="business-byob">
            <img className="business-byob__icon" src={icon3.png} alt="">
            <img className="business-byob__icon" src={icon4.png} alt="">
            <img className="business-byob__icon" src={icon7.png} alt="">
            <img className="business-byob__icon" src={icon8.png} alt="">
        </div>
    </section>
);