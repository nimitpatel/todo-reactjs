import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodoItems from './components/TodoItems/TodoItems';

class App extends React.Component {
  inputElement = React.createRef()

  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        key: '',
        text: ''
      }
    }
  }

  handleInput = e => {
    e.preventDefault()
    const item = e.target.value
    const currentItem = { 
      key: Date.now(),
      text: item 
    }
    this.setState({
      currentItem
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [
        ...this.state.items,
        newItem
      ]
      this.setState({
        items: items,
        currentItem: {
          key: '',
          text: ''
        }
      })
    }
  }

  deleteItems = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <TodoList 
          addItem = { this.addItem } 
          handleInput = { this.handleInput }
          inputElement = { this.inputElement }
          currentItem = { this.state.currentItem }
        />
        <TodoItems 
          entries = { this.state.items }
          deleteItems = { this.deleteItems }
        />
      </div>
    )
  }
}

export default App;
