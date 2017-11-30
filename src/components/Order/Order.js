import React from "react";
import "./Order.css";

export default (props) => (
<section className="order">
    <div className="order___entreprise">
        <h3>euro</h3>
        <span>water</span>
        <span>prepared</span>
        <h3>jake</h3>
    </div>
    <div className="order__details">
        <h3>Estimate</h3>
        <h3>Progress</h3>
        <span>Vehicule</span>
        <span>2010 Mini</span>
    </div>
    <div className="order__description">
        <table>
           <tr>
                <th>Description</th>
                <th>Qty</th> 
                <th>Price</th>
                <th>Amount</th>
           </tr>
           <tr>
                <td>{props.service1.qty}</td>
                <td>{props.service2.qty}</td> 
                <td>{props.service3.qty}</td>
                <td>{props.service4.qty}</td>
           </tr>
           <tr>
                <td>{props.service1.price}</td>
                <td>{props.service2.price}</td> 
                <td>{props.service3.price}</td>
                <td>{props.service4.price}</td>
           </tr>
           <tr>
                <td>{props.service1.amount}</td>
                <td>{props.service2.amount}</td> 
                <td>{props.service3.amount}</td>
                <td>{props.service4.amount}</td>
           </tr>

        </table>
    </div>
    <div className="order__submit">
        <button> approve </button>
        <button> decline </button>
    </div>
</section>
);