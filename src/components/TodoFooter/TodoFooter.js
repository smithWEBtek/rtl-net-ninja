import React from "react";
import "./TodoFooter.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
};

TodoFooter.propTypes = {
  numberOfIncompleteTasks: PropTypes.number.isRequired,
};

export default TodoFooter;
