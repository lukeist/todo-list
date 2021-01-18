import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { currentListStatusSet, allListStatusSet } from "../store/rlists";
import setStore from "../store/setStore";

const Nav = ({ currentList, setCurrentLists }) => {
  const lists = setStore.getState().entities.lists;

  const dispatch = useDispatch();

  const setToCurrentList = () => {
    if (lists.length > 0) {
      dispatch(currentListStatusSet({ id: currentList.id, status: true }));
    }
    const listsUpdate = setStore.getState().entities.lists;
    setCurrentLists(listsUpdate);
  };
  const setToAllList = () => {
    dispatch(allListStatusSet({ status: true }));
    const listsUpdate = setStore.getState().entities.lists;
    setCurrentLists(listsUpdate);
  };

  const setFinished = () => {
    const clickM = setStore
      .getState()
      .entities.todos.filter((todo) => todo.check === false);
    console.log(clickM);
  };
  const setUnfinished = () => {
    const clickM = setStore
      .getState()
      .entities.todos.filter((todo) => todo.check === true);
    console.log(clickM);
  };

  return (
    <NavBar>
      {lists.length > 0 ? (
        <h2>{currentList.title}</h2>
      ) : (
        <h2>you have no active todo list</h2>
      )}

      {/* {lists.filter(
        (item) => (item.id = <ItemList key={item.id} title={item.title} />)
      )} */}
      {/* 
      <form className="nav-submit">
        <input type="text" onChange={inputTodo} value={content} />
        <button type="submit" className="button-submit" onClick={setTodo}>
          New
        </button>
      </form> */}
      <StyledBar>
        <button onClick={setFinished}>finished</button>
        <button onClick={setUnfinished}>unfinished</button>
        <button onClick={setToCurrentList}>current list</button>
        <button onClick={setToAllList}>all lists</button>
        {/* <button>newest</button>
        <button>oldest</button> */}
      </StyledBar>
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
const StyledBar = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 0rem 2rem;
  button {
    border: none;
    padding: 1rem 2rem;
    background: #006c86;
    cursor: pointer;
    :focus {
      outline: none;
    }
    :active {
      /* outline: none; */
      background: #cf2929;
      transition: ease-out 0.3s;
    }
  }
`;
export default Nav;
