import React from "react";
import { useSelector } from "react-redux";
import { destroy, toggle, selectFilteredTodos } from "../redux/todo/todoSlice";
import { useDispatch } from "react-redux";

function ToDoList() {
  const dispatch = useDispatch();

  const filteredTodos = useSelector(selectFilteredTodos);

  const removeTodo = (id) => {
    dispatch(destroy(id));
  };

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li className={item.completed ? "completed" : ""} key={item.id}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.text}</label>
            <button
              onClick={() => removeTodo(item.id)}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
