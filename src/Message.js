import React from 'react';
import './theme.css';

function Message(props) {
  return (
    <div className={`theme-${props.theme}`}>
      <h1>Message</h1>
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

export default Message;
