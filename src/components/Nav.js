import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import store from "../store";
import { useDispatch } from "react-redux";
import { loadTodo } from "../actions/todoAction";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const inputTodo = (e) => {
    setContent(e.target.value);
  };
  // const trim = str => str.trim();
  const submitInput = (e) => {
    e.preventDefault();
    const id = uuidv4();
    if (content.length > 0) {
      dispatch(loadTodo(id, content, true));
    } else {
      alert("This field can't be empty!");
    }
    setContent("");
    // console.log(store.getState());
  };
  return (
    <NavBar>
      <h2>my to-do list</h2>
      <form className="nav-submit">
        <input type="text" onChange={inputTodo} value={content} />
        <button type="submit" className="button-submit" onClick={submitInput}>
          Submit
        </button>
      </form>
    </NavBar>
  );
};

const NavBar = styled(motion.div)`
  /* flex-direction: column; */
  /* justify-content: space-between; */
  /* padding: 2rem; */
  text-align: center;
  padding: 2rem 5rem;
  h2 {
    padding: 2rem 0rem;
  }
  button {
    border: none;
    cursor: pointer;
    /* border-radius: 0.5rem; */
    border-color: #ff7676;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    background: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    z-index: 1;

    color: #ff7676;
    :hover {
      background: #ff7676;
      border: none;
      color: white;
    }
    :active {
      /* outline: none; */
      background: #cf2929;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
      transition: ease-out 0.3s;
    }
    :focus {
      outline: none;
    }
  }
  input {
    border: none;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    background: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    z-index: 3;
    :focus {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

      outline: none;
    }
  }
`;
export default Nav;
