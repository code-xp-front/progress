import React from 'react';
import './Link.css';

export default (props) => (
    <section>
    <article className="information">
        <div className="information-label">
            <h4 className="information-label__name">{props.empresa.nome}</h4>
            <h5 className="information-label__description">{props.empresa.endereco}<br></br>{props.empresa.cidade}</h5>
        </div>
        <div className="information-label">
            <p className="information-label__caps align--right">{props.pedido.numero}<br></br>{props.pedido.codigo}</p>
        </div>
    </article>
    <article className="information">
        <div className="information-label">
            <h5 className="information-label__description">Prepared for</h5>
            <h4 className="information-label__name">{props.vendedor.nome}</h4>
        </div>
        <div className="information-label"> 
            <h5 className="information-label__description align--right">Vehicle</h5>
            <h4 className="information-label__name align--right">{props.veiculo.nome}<br></br>{props.veiculo.modelo}<br></br>{props.veiculo.milhas}<br></br>{props.veiculo.VIN}</h4>
        </div> 
    </article>
    </section>
);
