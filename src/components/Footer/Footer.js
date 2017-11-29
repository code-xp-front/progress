import React from "react";
import "./Footer.css"

var footer = {
    social: "Follow along on Twitter for all the latest news!",
    bold: " @Progress_App"
    info: "© 2014 Shooting Brake Design"
}

export default (props) => (
    <footer className="footer">
        <p className="footer__social">{footer.social}<span className="footer__bold">{footer.bold}</span></p>
        <p className="footer__info max-size-global">{footer.info}</p>
    </footer>
);