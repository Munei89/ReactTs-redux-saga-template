import React, {useState} from 'react';
import logo from './logo.svg';
import ToDoForm from './app/views/Todo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Row, Col  } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const saveTodo = (todoText: string) => {
    const trimmedText = todoText.trim();
    if (trimmedText.length > 0) {
      setTodos([...todos, trimmedText]);
    }
  }

  return (
    <Router>
      <Row>
        <Col span={24}>
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to='/to-do'>To Do App</Link>
        </header>
        </Col>
      </Row>
     
      <Row>
       <Col span={24}>
       <Switch>
          <Route path="/to-do">
            <ToDoForm saveTodo={(todoText) => saveTodo(todoText)} />
          </Route>
        </Switch>
       </Col>
      </Row>
    </Router>
  );
}

export default App;
