import React from 'react';
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer"
import FollowAlong from "./components/Follow-along/Follow-along";
import Footer from "./components/Footer/Footer";
import ByobIcons from "./components/byob-icons/ByobIcons";

var textos = [
  "Texto 1",
  "Texto 2"
];

var empresa = {
  nome: "Eurotech Mottors, LCC",
  endereco: "555 Water Tower Court",
  cidade: "Holland, MI 49242"
}

var vendedor = {
  nome: "Jake Montgomery"
}

var veiculo = {
  nome: "2010 Mini Cooper",
  modelo: "S",
  milhas: 31.209,
  VIN: "000193HHAAO1I345"
}

var pedido = {
  numero: 188801934,
  codigo: 3110556
} 

export default () => (
  <div className="App">
    <Hero title="progress" textos={textos} />
    <Footer texto="Copyright" />
    <Hero />  
    <ByobIcons />
    <FollowAlong description="Follow along on Twitter for all the lastest news!" />
    <Footer text="2014 Shooting Brake Design" />
  </div>
);