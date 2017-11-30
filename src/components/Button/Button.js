import React from "react";
import "./Button.css";

export default (props) => (
    <a className={"button button--" + props.type}>{props.children}</a>
);