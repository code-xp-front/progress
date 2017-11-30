import React from 'react';
import Link from '../Link/Link';
import './Follow-along.css';

export default (props) => (
    <section class="follow-along">
        <p class="follow-along__description">{props.description}<a class="follow-along__link" href=""><Link link=" @Progress_App"></Link></a></p>
    </section>
  );