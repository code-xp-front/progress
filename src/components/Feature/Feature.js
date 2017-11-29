import React from "react";
import "./Feature.css"

export default (props) => (

    <div className={props.classFeature}>
    
        <div className="feature__content">
            <h2 className="feature__content-title">{props.title1}</h2>

            <p className="feature__content-description">{props.description1}</p>
        </div>

        
        <picture className="feature__picture">
            <img src={props.image} alt="Screen mobile"/>
        </picture>

        <div className="feature__content">
            <h2 className="feature__content-title">{props.title2}</h2>

            <p className="feature__content-description">{props.description2}</p>
        </div>

    </div>

);