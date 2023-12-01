import React, { useState } from "react";
import "./AddInput.css";
import { v4 } from "uuid";
import PropTypes from "prop-types";

const AddInput = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    let updatedTodos = [
      ...todos,
      {
        id: v4(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

AddInput.propTypes = {
  setTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default AddInput;
