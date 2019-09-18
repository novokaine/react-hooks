import React from 'react';
import logo from './assets/logo.svg';
import ClickCount from './components/clickCount';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ClickCount />
      </header>
    </div>
  );
}

export default App;
