import React from 'react';
import './Follow-along.css';

export default (props) => (
    <section class="follow-along">
        <p class="follow-along__description">{props.description}<a class="follow-along__link" href="">{props.link}</a></p>
    </section>
  );