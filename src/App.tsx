import React from 'react';
import logo from './logo.svg';
import ToDoForm from './app/views/Todo';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoForm />
      </header>
    </div>
  );
}

export default App;
