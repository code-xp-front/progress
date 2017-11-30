import React from "react";
import "./button.css"

export default (props) => (
    <section className="buttons"> 
        <a href="" className="primary-button">{props.primary}</a>
        <a href="" className="secundary-button">{props.secundary}</a>
    </section>
); 
