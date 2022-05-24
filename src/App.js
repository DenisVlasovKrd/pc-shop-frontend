import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [text, setText] = useState('hello world');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code automation-id='text'>{text}</code> and save to reload.
        </p>
        <button
          automation-id='button'
          onClick={() => setText('Хуй')}
        >
          Click
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
