import React from "react";
import Feature from "../Feature/Feature";
import Eurotech from "./eurotech.png";
import Feature_Mobile from "./feature_mobile.png";
import "./Features.css";

export default (props) => (
    <section className="features">
        <Feature classFeature="feature" title1="Track projects easily" description1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nam eum officia fuga eius accusantium placeat, quisquam illo dolores minus numquam rem libero expedita saepe!" title2="Clear communication" description2="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nam eum officia fuga eius accusantium placeat, quisquam illo dolores minus numquam rem libero expedita saepe!" image={Feature_Mobile}/>
        <Feature classFeature="feature feature-reverse" title1="Track projects easily" description1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nam eum officia fuga eius accusantium placeat, quisquam illo dolores minus numquam rem libero expedita saepe!" image={Eurotech}/>
    </section>
);