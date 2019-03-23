import React from 'react';

class AddTodo extends React.Component {

  state = {
    todo: ''
  }

  handleTodoChange = (e) => {
    const todo = e.target.value;
    this.setState({ todo })
  }
  handleAddButton= ()=>{
    this.props.addTodo(this.state.todo);
    this.setState({todo:''});
  }

  render() {
  return (
    <div style={{ border: '1px solid red'}}>
      <input type='text' id='input' value={this.state.todo} onChange={this.handleTodoChange} ref={el => this.todo = el} />
      <button onClick={this.handleAddButton}>Add</button>
    </div>
  );
}
};

export default AddTodo;
