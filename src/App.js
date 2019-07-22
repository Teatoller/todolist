import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

function App() {
  const todosComponent = todosData.map(task => (
    <TodoItem key={task.id} text={task.text} completed={task.completed} />
  ));
  return (
    <div className="todo-list">
      {todosComponent}
    </div>
  );
}

export default App;
