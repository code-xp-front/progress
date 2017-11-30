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

var service1 = {
    description: "Tensioner",
    qty: 1,
    price: 45.00,
    amount: 45.00
};

var service2 = {
    description: "Oil Filter",
    qty: 1,
    price: 103.00,
    amount: 103.00
};

var service3 = {
    description: "Bilstein 5100 Shocks",
    qty: 4,
    price: 200.00,
    amount: 800.00
};

var service4 = {
    description: "Labor (per hour)",
    qty: 14,
    price: 70.00,
    amount: 980.00
};
var subtotal = (service1.amount + service2.amount + service3.amount + service4.amount);
var tax = (115.68);

var total = (subtotal + tax);


export default () => (
  <div className="App">
    <Hero />
    <Features />
    <Order  empresa={empresa} vendedor={vendedor}/>
    <Services />
  </div>
);