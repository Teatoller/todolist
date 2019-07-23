import React, {Component} from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: todosData
    }
  }
  render(){
    const todosItems = this.state.todo.map(task => (
      <TodoItem key={task.id} text={task.text} completed={task.completed} />
    ));
    return (
      <div className="todo-list">
        {todosItems}
      </div>
    );
  }
  
}

export default App;
