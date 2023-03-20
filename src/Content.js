import React from 'react';
import './theme.css';
import Message from './Message';

function Content(props) {
  return (
    <div className={`theme-${props.theme}`}>
      <h1>Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
        lobortis eros, quis consequat ipsum. Praesent elementum enim vitae augue
        commodo, sit amet tincidunt eros varius. Nunc euismod ipsum nec ligula
        accumsan aliquet. Praesent pulvinar consequat est, vel hendrerit nunc
        eleifend at.
      </p>
      <Message theme={props.theme} />
    </div>
  );
}

export default Content;
