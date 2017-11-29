import React from 'react';
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer"


var textos = [
  "Texto 1",
  "Texto 2"
];

export default () => (
  <div className="App">
    <Hero title="progress" textos={textos} />
    <Footer texto="Copyright" />
  </div>
);