import React from "react";
import "./Order.css";

var empresa = {
    nome:'EuroTech Motors, LLC',
    endereco: '555. Water Town Court, Holland, MI 49242'
};
var pedido = '#18801934';
var progress_code = '3110556';
var nome_vendedor = 'Jake Montgomery';
var veiculo = {
    ano:'2010',
    modelo: 'Mini Cooper S',
    milhas:'31.209',
    VIN = '000193HHAAO1I345'
};




export default (props) => (
    <section class="order">
    <div class="order___entreprise">
        <h3></h3>
        <span></span>
        <span></span>
        <h3></h3>
    </div>
    <div class="order__details">
        <h3></h3>
        <h3></h3>
        <span></span>
        <span></span>
    </div>
    <div class="order__description">

    </div>
    <div class="order__submit">
        
    </div>
</section>
);