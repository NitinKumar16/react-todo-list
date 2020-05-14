import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit}=this.props
        return (
            <li className="list-group-item text-capitalized d-flex justify-content-between my-2 
            bg-transparent">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-white" onClick={handleEdit}>
                    <i className="fas fa-user-edit fa-xs"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                    <i className="fas fa-trash fa-xs"></i>
                    </span>
                </div>
            </li>
        )
    }
}
