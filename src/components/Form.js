import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo/todoSlice";

function Form() {
  const [text, setText] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if text is empty, do nothing
    if (text.trim()) {
      dispatch(addTodo({ text }));
    }
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default Form;
