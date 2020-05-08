import React, { Component } from 'react'
import './App.css';
import uuid  from 'uuid';
//import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="headline">Todo-List</div>
        </header>
      </div>
    )
  }
}

export default App;
