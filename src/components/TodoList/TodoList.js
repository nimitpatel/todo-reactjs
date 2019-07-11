import React, { Component } from 'react';
import './TodoList.css'

export class TodoList extends Component {
    componentDidUpdate() {
      this.props.inputElement.current.focus()
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="input">
                        <form onSubmit={ this.props.addItem }>
                            <input
                                ref = { this.props.inputElement }
                                value = { this.props.currentItem.text }
                                onChange = { this.props.handleInput }
                            />
                            <button type="submit">
                                <i class="fas fa-plus fa-2x"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default TodoList
