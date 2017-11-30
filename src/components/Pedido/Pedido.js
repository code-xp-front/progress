import React from "react";
import Button from "../Button/Button";
import "./Pedido.css";


export default (props) => (
    <div className="request">
        <table className="request-values">
            <thead>
                <tr>
                    <th className="request-values__title">Description</th>
                    <th className="request-values__title">Qty</th>
                    <th className="request-values__title">Price</th>
                    <th className="request-values__title">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.servicos.servico1.description}</td>
                    <td>{props.servicos.servico1.qty}</td>
                    <td>{props.servicos.servico1.price}</td>
                    <td>{props.servicos.servico1.amount}</td>
                </tr>
                <tr>
                    <td>{props.servicos.servico2.description}</td>
                    <td>{props.servicos.servico2.qty}</td>
                    <td>{props.servicos.servico2.price}</td>
                    <td>{props.servicos.servico2.amount}</td>
                </tr>
                <tr>
                    <td>{props.servicos.servico3.description}</td>
                    <td>{props.servicos.servico3.qty}</td>
                    <td>{props.servicos.servico3.price}</td>
                    <td>{props.servicos.servico3.amount}</td>
                </tr>
                <tr>
                    <td>{props.servicos.servico4.description}</td>
                    <td>{props.servicos.servico4.qty}</td>
                    <td>{props.servicos.servico4.price}</td>
                    <td>{props.servicos.servico4.amount}</td>
                </tr>
            </tbody>
        </table>
        <Button type="primary">approve</Button>
        <Button type="secondary">decline</Button>
    </div>
);