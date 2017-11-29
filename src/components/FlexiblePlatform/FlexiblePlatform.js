import React from "react";
import "./FlexiblePlatform.css";

export default (props) => (
<section className="flexible-platform">
        <h3 className="flexible-platform__title">Flexible Platform</h3>
        <p className="flexible-platform__text">
            We are an industry agnostic platform. If you can track it, you can Progress it!
            Progress makes it easy for service providers to connect directly with their costumes.
        </p>
        <form action="" className="form">
            <input type="email" name="email" id="email" className="form__input" placeholder="Add your email address"/>
            <button type="submit" className="form__button">invite me</button>
        </form>

        <div class="twitter">
            <p class="twitter__text">
                Follow along on Twitter for all the latest news! <a className="twitter__link" href="">@Progress_App</a>
            </p>
        </div>
</section>
);