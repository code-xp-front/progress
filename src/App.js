import React from 'react';
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Services from "./components/Services/Services";
import FlexiblePlatform from "./components/FlexiblePlatform/FlexiblePlatform";
import Order from "./components/Order/Order";

var empresa = {
nome:'EuroTech Motors, LLC',
endereco: '555. Water Town Court, Holland, MI 49242'
};
var vendedor = { nome_vendedor:'Jake Montgomery'};

export default () => (
  <div className="App">
    <Hero />
    <Features />
    <Order  empresa={empresa} vendedor={vendedor}/>
    <Services />
  </div>
);