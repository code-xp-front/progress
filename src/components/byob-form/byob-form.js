import React from "react";
import "./byob-form.css"

export default (props) => (
        <div>
        <form className="byob-form">
        <input className="byob-form__input" type="text" name="email" value={props.email}/>
        <a href="" className="byob-form__button">{props.description}</a>
        </form>
        </div>
);

// <ByobForm description="Invite Me" email="Add your mail here"/>