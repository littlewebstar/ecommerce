import React, { Component } from 'react';
import AddTodo from './AddTodo';
import List from './List';

class Todos extends Component {
  state = {
    todos : [],
    editIndex: null
  }

  addTodo = (todo) => {
    const todos = this.state.todos
    todos.push(todo)
    this.setState({ todos})
  }

  editTodo= (index) => {
    this.setState({ editIndex: index})
  }

  render() {
    
    return (
      <div>
        <h1>Todo</h1>
        <AddTodo addTodo={this.addTodo} editIndex={this.state.editIndex} />
        <List list={this.state.todos} edit={this.editTodo} />
      </div>
    )
  }
}

export default Todos;
