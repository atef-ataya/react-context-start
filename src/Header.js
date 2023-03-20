import React from 'react';
import './theme.css';

function Header(props) {
  const { toggleTheme } = props;

  return (
    <header className="header">
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}

export default Header;
