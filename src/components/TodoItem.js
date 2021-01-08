import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { removeTodo, checkTodo } from "../actions/todoAction";
import store from "../store";

const TodoItem = ({ id, content, check }) => {
  const dispatch = useDispatch();
  const [box, setBox] = useState("unchecked");
  // var box = "unchecked";
  const checkClick = () => {
    dispatch(checkTodo(id, check));
    if (check === true) {
      setBox("checked");
      console.log(box);
    } else {
      setBox("unchecked");
      console.log(box);
    }
  };
  const removeClick = () => {
    dispatch(removeTodo(id));
  };
  return (
    <StyledItem>
      <h3>{content}</h3>
      <StyledIcons>
        <button onClick={checkClick}>{box}</button>
        <button onClick={removeClick}>remove</button>
      </StyledIcons>
    </StyledItem>
  );
};

const StyledItem = styled(motion.div)`
  width: 60%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
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
`;
export default TodoItem;
