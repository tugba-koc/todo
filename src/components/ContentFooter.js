import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeActiveFilter,
  removeAll,
  selectTodos,
} from "../redux/todo/todoSlice";

function ContentFooter() {
  const items = useSelector(selectTodos);
  const itemsLeft = items.filter((item) => !item.completed).length;

  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.todo.activeFilter);

  console.log(activeFilter);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> left
      </span>

      <ul className="filters">
        <li>
          <a
            href="##"
            onClick={() => dispatch(changeActiveFilter("all"))}
            className={activeFilter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="##"
            onClick={() => dispatch(changeActiveFilter("active"))}
            className={activeFilter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="##"
            onClick={() => dispatch(changeActiveFilter("completed"))}
            className={activeFilter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => dispatch(removeAll())}>
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
