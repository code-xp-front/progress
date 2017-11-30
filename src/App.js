import React from 'react';
import Hero from "./components/Hero/Hero";
import Pedido from "./components/Pedido/Pedido";


var servicos = {
  servico1: {
      description: "Tensioner",
      qty: 1,
      price: 45,
      amount: 45
  },
  servico2: {
      description: "Oil Filter",
      qty: 1,
      price: 103,
      amount: 103
  },
  servico3: {
      description: "Bilstein 5100 Shocks",
      qty: 4,
      price: 200,
      amount: 800
  },
  servico4: {
      description: "Labor (per hour)",
      qty: 1,
      price: 70,
      amount: 980
  }
};

export default () => (
  <div className="App">
    <Hero />
    <Pedido servicos={servicos} />
  </div>
);