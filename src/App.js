import React, { Component } from 'react';
import Switcher from './components/Switcher';
import Counter from './components/Counter';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';

import data from './data';
const { todos, colorPicker } = data;

class App extends Component {
  state = {
    todoList: todos,
  };

  deleteTodoItem = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(item => item.id !== id),
    }));
  };

  render() {
    const { todoList } = this.state;
    return (
      <>
        <Counter startValue={12} />
        <Switcher />
        <ColorPicker options={colorPicker} />
        <TodoList todo={todoList} deleteTodoItem={this.deleteTodoItem} />
      </>
    );
  }
}

export default App;
