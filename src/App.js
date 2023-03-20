import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Main from './Main';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };

  return (
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} />
      <Main theme={theme} />
      <Content theme={theme} />
    </div>
  );
}

export default App;
