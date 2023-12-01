import React from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoList.css";
import PropTypes from "prop-types";

const TodoList = ({ todos, setTodos }) => {
  const updateTask = (id) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed && "todo-item-active"}`}
              onClick={() => updateTask(todo.id)}
              onKeyDown={() => updateTask(todo.id)}
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default TodoList;
