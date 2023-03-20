import React from 'react';
import './Content.css';

function Content(props) {
  return (
    <div className={`content ${props.theme}`}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
        lobortis eros, quis consequat ipsum. Praesent elementum enim vitae augue
        commodo, sit amet tincidunt eros varius. Nunc euismod ipsum nec ligula
        accumsan aliquet. Praesent pulvinar consequat est, vel hendrerit nunc
        eleifend at.
      </p>
    </div>
  );
}

export default Content;
