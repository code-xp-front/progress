import React from "react";
import Feature1 from "./feature1.png";
import Feature2 from "./feature2.png";
import "./Features.css"

export default (props) => (

    <section className="section-feature">
        <article className="feature">
            <div className="description">
                <h2>Track projects easily</h2>
                <p>Providers can give updates, share status, request updates, and require payments in one, efficient tool.
                        Simples, easy, progress.</p>
            </div>
        </article>

        <img src={Feature1} alt="chat feature" />
        <div className="description">
            <h2>Clear communication</h2>
            <p>Progress allows direct communication bewtween the consumer and service provider. No more waiting for
                        call backs, missing emails, or lost paperwork.</p>
        </div>
        <article className="feature">
            <img src={Feature2} alt="chat feature" />
            <div className="description">
                <h2>Estimate, approve, pay</h2>
                <p>The major steps of a service job are made simple with Progress. In one location, information and updates
                        on project estimates and scopes of work are shared between provider and consumer.</p>
            </div>
        </article>
    </section>

);
