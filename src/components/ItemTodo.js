import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { todoAdded } from "../store/rtodos";
import styled from "styled-components";
import { motion } from "framer-motion";
import { todoRemoved, todoChecked, todoEdited } from "../store/rtodos";

const ItemTodo = ({ id, content, check }) => {
  const dispatch = useDispatch();
  const [contentX, setContentX] = useState(content);

  const inputTodo = (e) => {
    setContentX(e.target.value);
  };
  const clickNew = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(todoAdded({ id, content: contentX, check: true }));
  };

  const todoEditing = (e) => {
    e.preventDefault();
    dispatch(todoEdited({ id, content: contentX }));
  };

  const todoChecking = () => {
    dispatch(todoChecked({ id, check }));
  };

  const todoRemoving = () => {
    dispatch(todoRemoved({ id }));
  };
  return (
    <StyledItem>
      {/* <h3 onClick={editClick}>{contentX}</h3> */}
      <StyledIcons>
        <form className="nav-submit">
          <input
            type="text"
            onClick={inputTodo}
            onChange={inputTodo}
            value={contentX}
            onBlur={todoEditing}
          />
          <button
            type="submit"
            className="button-submit"
            onClick={todoEditing}
          ></button>
        </form>

        {check === true ? (
          <button onClick={todoChecking}>unchecked</button>
        ) : (
          <button onClick={todoChecking}>checked</button>
        )}

        <button onClick={todoRemoving}>remove</button>
      </StyledIcons>
    </StyledItem>
  );
};

const StyledItem = styled(motion.div)`
  width: 60%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  h3 {
    cursor: pointer;
  }
`;
const StyledIcons = styled(motion.div)`
  display: flex;
  button {
    border: none;
    cursor: pointer;
    /* border-radius: 0.5rem; */
    background: #ff7676;
    padding: 0rem 1rem;
    font-size: 1rem;
    color: white;
    :hover {
      background: #ff7676;
      border: none;
      color: white;
    }
    :active {
      /* outline: none; */
      background: #cf2929;
      transition: ease-out 0.3s;
    }
    :focus {
      outline: none;
    }
  }
`;
export default ItemTodo;
