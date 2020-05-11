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
    item:"",
    editItem:false
  };
  handleChange=(e)=>{
    console.log('handleChange')
  }
  handleSubmit =(e)=>{
    console.log('handleSubmit')
  }
  clearList =()=>{
    console.log('clearList')
  }
  handleDelete =()=>{
    console.log('handle edit ${id}')
  }
  handleEdit =()=>{
    console.log('edit edit ${id}')
  }
  render() {
    console.log(this.state);
    return (
      <div className="App-header">
      <div className="container">
        <div className="row">
          <div className="headline">Todo-list</div>
            <div className="col-10 mx-auto col-md-8 mt-5">
            <TodoInput item={this.state.item} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}/>

            <TodoList items={this.state.items} 
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}/>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default App;
//<header className="App-header">
//<div className="headline">Todo-List</div>
//</header>