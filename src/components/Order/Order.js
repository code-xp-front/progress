import React from "react";
import "./Order.css";

var pedido = '#18801934';
var progress_code = '3110556';

var veiculo = {
    ano:'2010',
    modelo: 'Mini Cooper S',
    milhas:'31.209',
    VIN:'000193HHAAO1I345'
};

export default (props) => (
    <section class="order">
    <div class="order___entreprise">
        <h3>{props.empresa.nome}</h3>
        <span>{props.empresa.endereco}</span>
        <h3>Prepared for {props.vendedor.nome_vendedor}</h3>
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