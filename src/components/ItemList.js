import { useDispatch } from "react-redux";
import {
  listTitleEdited,
  listRemoved,
  currentListStatusSet,
} from "../store/rlists";
import { todosThisListRemoved } from "../store/rtodos";
import React, { useState } from "react";
import setStore from "../store/setStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const ItemList = ({ setCurrentList, list, id, title, status }) => {
  const dispatch = useDispatch();
  const lists = setStore.getState().entities.lists;

  const [titleX, setTitleX] = useState(title);
  const [onEdit, setOnEdit] = useState(false);

  const listRemoving = () => {
    if (status === true && lists.indexOf(list) !== 0) {
      const newIndex = lists.indexOf(list) - 1;
      setCurrentList(lists[newIndex]);
      dispatch(currentListStatusSet({ id: lists[newIndex].id, status: true }));
      dispatch(listRemoved({ id }));
      dispatch(todosThisListRemoved({ id }));
    } else {
      dispatch(listRemoved({ id }));
      dispatch(todosThisListRemoved({ id }));
    }
  };

  const titleInput = (e) => {
    e.preventDefault();
    setTitleX(e.target.value);
  };

  const listTitleOpenEditing = (e) => {
    e.preventDefault();
    setOnEdit(true);
  };

  const listTitleEditing = (e) => {
    e.preventDefault();
    dispatch(listTitleEdited({ id, title: titleX }));
    setOnEdit(false);
  };

  const clickCurrentList = () => {
    setCurrentList(list);
    dispatch(currentListStatusSet({ id, status: true }));
  };

  return (
    <div className={`item-list ${list.status ? "selected" : ""}`}>
      <div className="item-list-child" onClick={clickCurrentList}>
        {onEdit ? (
          <form className="item-list-form" onSubmit={listTitleEditing}>
            <input
              className="item-list-input-active"
              type="text"
              onChange={titleInput}
              value={titleX}
              onBlur={listTitleEditing}
            />
            <div className="item-list-buttons">
              <button onSubmit={listTitleEditing}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
          </form>
        ) : (
          <form>
            <input className="item-list-input-inactive" value={title} />
            <div className="item-list-buttons">
              <button
                className="button-list-edit"
                onClick={listTitleOpenEditing}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          </form>
        )}
      </div>
      {/* 
        //can not put button 'remove' together with button 'edit' because of the
        //clickCurrentList: when we click on this 'remove' button, it runs
        //clickCurrentList at the same time thus error 
    */}
      <div>
        <button className="button-list-remove" onClick={listRemoving}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};
export default ItemList;
