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
    items:[],
    id: uuid(),
    item:"",
    editItem:false
  };
  handleChange=(e)=>{
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit =(e)=>{
    e.preventDefault();
    const newItem={
      id:this.state.id,
      title:this.state.item
    };
    const updatedItems=[...this.state.items,newItem]
    this.setState({
      items:updatedItems,
      item: " ",
      id: uuid(),
      editItem:false
    } 
    );
  };
  clearList =()=>{
    console.log('clearList')
  }
  handleDelete = id =>{
    console.log('handle delete ${id}')
  }
  handleEdit = id =>{
    console.log('edit edit ${id}')
  }
  render() {
    return (
      <div className="App-header">
      <div className="container">
        <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
            <h5 className="title">Todo-List</h5>
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