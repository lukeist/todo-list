import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoRemoved, todoChecked, todoEdited } from "../store/rtodos";
import { monthNames } from "../store/ListInitialState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

const ItemTodo = ({ todo, id, content, check }) => {
  const dispatch = useDispatch();
  const [contentX, setContentX] = useState(content);
  const [submitB, setSubmitB] = useState(false);

  let date = new Date();
  date.setDate(date.getDate());
  date =
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  const inputTodo = (e) => {
    setContentX(e.target.value);
  };

  const todoEditing = (e) => {
    e.preventDefault();
    dispatch(todoEdited({ id, content: contentX }));
    setSubmitB(!submitB);
  };

  const todoChecking = () => {
    dispatch(todoChecked({ id, check, dateFinished: date }));
  };

  const todoRemoving = () => {
    dispatch(todoRemoved({ id }));
  };
  return (
    <div className="item-todo">
      <form className="todo-submit" onSubmit={todoEditing}>
        <input
          type="text"
          onClick={inputTodo}
          onChange={inputTodo}
          value={contentX}
          onBlur={todoEditing}
          onSubmit={todoEditing}
        />
        <button
          onSubmit={todoEditing}
          type="submit"
          onClick={todoEditing}
          className="button-submit"
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        {check === true ? (
          <p>added on {todo.dateAdded}</p>
        ) : (
          <p>
            added on {todo.dateAdded}, finished on {date}
          </p>
        )}
      </form>
      <div className="todo-button-icons">
        {check === true ? (
          <button onClick={todoChecking}>
            {/* unchecked */}
            <FontAwesomeIcon icon={faSquare} />
          </button>
        ) : (
          <button onClick={todoChecking}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        )}
        <button onClick={todoRemoving}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default ItemTodo;
