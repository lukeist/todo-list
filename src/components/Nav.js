import React from "react";
import { useDispatch } from "react-redux";
import { currentListStatusSet, allListStatusSet } from "../store/rlists";
import setStore from "../store/setStore";
import NewTodoButton from "../components/NewTodoButton";

import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = ({ currentList, setCurrentList, setCurrentLists }) => {
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
    <div class="nav-bar">
      <div className="title">
        {lists.length > 0 ? (
          <h2>{currentList.title}</h2>
        ) : (
          <h2>you have no active todo list</h2>
        )}
      </div>
      <div class="nav-buttons">
        <button onClick={setUnfinished}>unfinished</button>
        <button onClick={setFinished}>finished</button>
        <button onClick={setToCurrentList}>current list</button>
        <button onClick={setToAllList}>all lists</button>
      </div>
      <NewTodoButton
        currentList={currentList}
        setCurrentList={setCurrentList}
      />
    </div>
  );
};

export default Nav;
