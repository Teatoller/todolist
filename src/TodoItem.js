import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item" >
            <input type="checkbox"  />
            {props.text}
            <p>{props.completed}</p>
        </div>
    )
}

export default TodoItem
