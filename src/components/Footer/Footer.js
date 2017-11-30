import React from 'react';
import './Footer.css';

export default (props) => (
    <footer class="footer">
        <p><i class="fa fa-copyright" aria-hidden="true"></i>{props.text}</p>
    </footer>
  );