import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit}=this.props
        return (
            <ul className="list-group my-5 text-capitalize">
                <h3 className="text-capitalize text-center">todo List</h3>
                {items.map(item=>{return(<TodoItem key={item.id} 
                    title={item.title} handleDelete={()=>handleDelete(item.id)} 
                    handleEdit={()=>handleEdit(item.id)}/>)})}
                <button type="button" className="btn btn-danger btn-block font-italic mt-5" 
                onClick ={clearList}>Clear list</button>
            </ul>
        );
    }
}

