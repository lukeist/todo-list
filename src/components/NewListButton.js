import { listAdded, currentListStatusSet } from "../store/rlists";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import setStore from "../store/setStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const NewListButton = ({ setCurrentList, setCurrentLists }) => {
  const dispatch = useDispatch();
  const [titleX, setTitleX] = useState("");
  const [openInput, setOpenInput] = useState(false);
  const [plus, setPlus] = useState(false);
  const id = uuidv4();

  const openInputField = () => {
    setPlus(!plus);
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
      dispatch(listAdded({ id, title: titleX, status: true }));
      dispatch(currentListStatusSet({ id, status: true }));
      const lists = setStore.getState().entities.lists;
      const lastIndex = lists.length - 1;
      setCurrentList(lists[lastIndex]);
      setCurrentLists(lists);
      setTitleX("");
    }
  };
  return (
    <div className="new-list">
      <div className="list-header">
        <h3>My Lists</h3>
        <button
          type="button"
          // className="button-newlist"
          onClick={openInputField}
        >
          {plus ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </button>
      </div>
      <div className="new-list-form">
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
    </div>
  );
};

export default NewListButton;
