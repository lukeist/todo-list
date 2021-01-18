import {
  listAdded,
  currentListStatusSet,
  todosAssigned,
} from "../store/rlists";
import { todoAdded } from "../store/rtodos";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import setStore from "../store/setStore";

const NewListButton = ({ setCurrentList, setCurrentLists }) => {
  const dispatch = useDispatch();
  const [titleX, setTitleX] = useState("");
  const [openInput, setOpenInput] = useState(false);
  const id = uuidv4();

  const openInputField = (e) => {
    setOpenInput(!openInput);
    if (openInput === false) {
      setTitleX("");
    }
  };
  const getListTitle = (e) => {
    setTitleX(e.target.value);
  };
  const setNewList = (e) => {
    e.preventDefault();
    if (titleX === "") {
      setTitleX("");
    } else {
      dispatch(
        listAdded({ id, title: titleX, status: true })
        // listAdded({
        //   listInfo: { id, title: titleX },
        //   todos: [],
        // })
      );
      dispatch(currentListStatusSet({ id, status: true }));
      const lists = setStore.getState().entities.lists;
      const lastIndex = lists.length - 1;
      setCurrentList(lists[lastIndex]);
      setCurrentLists(lists);
      setTitleX("");
    }
  };
  return (
    <div>
      <div className="nav-list">
        <h2>select a list</h2>
        {openInput ? (
          <form onSubmit={setNewList}>
            <input
              type="text"
              value={titleX}
              onChange={getListTitle}
              onBlur={setNewList}
            />
          </form>
        ) : (
          ""
        )}
      </div>
      <div>
        <button
          type="button"
          className="button-newlist"
          onClick={openInputField}
        >
          New List
        </button>
      </div>
    </div>
  );
};

export default NewListButton;
