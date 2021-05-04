import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import ToDoForm from './app/views/Todo';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <ToDoForm />
      </header>
    </div>
  );
}

export default App;
