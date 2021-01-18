import { useDispatch, useSelector } from "react-redux";
import {
  listTitleEdited,
  listRemoved,
  currentListStatusSet,
} from "../store/rlists";
import { todosThisListRemoved } from "../store/rtodos";
import React, { useEffect, useState } from "react";
import setStore from "../store/setStore";

const ItemList = ({ setCurrentList, currentList, list, id, title, status }) => {
  const dispatch = useDispatch();
  const lists = setStore.getState().entities.lists;

  const [titleX, setTitleX] = useState(title);
  const [onEdit, setOnEdit] = useState(false);

  // const listId = id;
  // useEffect(() => {
  //   console.log(id, title);
  //   console.log("values in child: " + listId);
  //   props.passPropsToParent(listId);
  // }, []);

  const listRemoving = () => {
    if (status === true && lists.indexOf(list) !== 0) {
      // const lists = setStore.getState().entities.lists;
      const newIndex = lists.indexOf(list) - 1;
      setCurrentList(lists[newIndex]);
      dispatch(currentListStatusSet({ id: lists[newIndex].id, status: true }));
      dispatch(listRemoved({ id }));
      dispatch(todosThisListRemoved({ id }));
    } else {
      dispatch(listRemoved({ id }));
      dispatch(todosThisListRemoved({ id }));
    }
    // const todos = setStore.getState().entities.todos;
    // const todosThisList = todos.filter((todo) => todo.listId !== id);
    // todosThisList.length = 0;
    // PHAI REMOVE LITS'S TODOS LUON

    // const lists = setStore.getState().entities.lists;
    // if (lists.indexOf(currentList) === lists.length - 1) {
    //   dispatch(listRemoved({ id }));
    //   lists = setStore.getState().entities.lists;
    //   dispatch(
    //     currentListStatusSet({ id: lists[lists.length - 1].id, status: true })
    //   );
    // } else {
    //   dispatch(listRemoved({ id }));
    //    lists = setStore.getState().entities.lists;
    //    dispatch(
    //     currentListStatusSet({ id: lists[lists.length - 1].id, status: true })
    //   );
    // }
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

    // console.log(currentList);
    // console.log(AllItemTodo);
    // store.subscribe(() => {
    //   const state = store.getState();
    //   console.log(state.lists[index].todos);
    // });
    // dispatch(todosAssigned(todos));
  };

  return (
    <div>
      <div className="list-item" onClick={clickCurrentList}>
        <div>
          {onEdit ? (
            <form onSubmit={listTitleEditing}>
              <input
                type="text"
                // onClick={titleInput}
                onChange={titleInput}
                value={titleX}
                onBlur={listTitleEditing}
              />
              <button onSubmit={listTitleEditing}>submit</button>
            </form>
          ) : (
            <form>
              <h2>{title}</h2>
              <button className="list-edit" onClick={listTitleOpenEditing}>
                edit name
              </button>
            </form>
          )}
        </div>
      </div>
      <div>
        <button className="list-remove" onClick={listRemoving}>
          remove list
        </button>
      </div>
      {/* <div className="todo-items">
        <AllItemTodo />
      </div> */}
    </div>
  );
};
export default ItemList;
