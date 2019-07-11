import React, { Component } from 'react';
import './TodoItems.css'

export class TodoItems extends Component {
    createItems = (item) => {
        return (
            <div className="display">
                <li key = { item.key }> 
                    { item.text } 
                    <button onClick = { () => this.props.deleteItems(item.key) }>
                        <i class="fas fa-trash-alt fa-2x"></i>
                    </button>
                </li>
            </div>
        )
    }
    render() {
        const entries = this.props.entries
        const list = entries.map( this.createItems )
        return <ul> { list } </ul>
    }
}

export default TodoItems
