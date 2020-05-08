import React, { Component } from 'react'
import './App.css';
import uuid from 'react-uuid';
//import uuid  from "uuid";
//import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

class App extends Component {
  state={
    items:[{id:1,item:"Brush"},{id:2,item:"plan your day"},{id:3,item:"Workout"}],
    id: uuid(),
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <div className="headline">Todo-List</div>
          <TodoInput/>
          <TodoList/>
        </header>
      </div>
    )
  }
}

export default App;
