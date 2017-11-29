import React from "react";
import IconBug from "./icon_bug.png";
import IconFlower from "./icon_flower.png";
import IconGear from "./icon_gear.png";
import IconLeaf from "./icon_leaf.png";
import IconNotebook from "./icon_notebook.png";
import IconPliers from "./icon_pliers.png";
import IconTombstone from "./icon_tombstone.png";
import IconTools from "./icon_tools.png";
import Phone from "./phone.png";
import "./Services.css"

export default (props) => (
    <section className="services">
        <div className="services__title">
            <h1>Bring Your Own Business</h1>
        </div>
        <div className="services__content">
            <div className="services__content__group">
                <div className="services__content__group__icons-1">
                    <img className="services__icon" src={IconPliers} alt="pliers"/>
                    <img className="services__icon" src={IconFlower} alt="flower"/>
                </div>
                <div className="services__content__group__icons-2">
                    <img className="services__icon" src={IconBug} alt="bug"/>
                    <img className="services__icon" src={IconTools} alt="tools"/>
                </div>
            </div>
                <div className="services__content__phone">
                    <img src={Phone} alt="mobile phone"/>
                </div>
            <div className="services__content__group">     
                <div className="services__content__group__icons-3">
                    <img className="services__icon" src={IconTombstone} alt="tombstone"/>
                    <img className="services__icon" src={IconNotebook} alt="notebook"/>
                </div>
                <div className="services__content__group__icons-4">
                    <img className="services__icon" src={IconGear} alt="machine gear"/>
                    <img className="services__icon" src={IconLeaf} alt="leaf"/>
                </div>
            </div>
        </div>
    </section>
);