import GlobalStyle from "./components/GlobalStyle";
import AllItemList from "./components/AllItemList";
import AllItemTodo from "./components/AllItemTodo";
import ItemList from "./components/ItemList";

import { useSelector } from "react-redux";
import { useState } from "react";
import { current } from "@reduxjs/toolkit";

function App() {
  const lists = useSelector((state) => state.entities.lists);
  // const todos = useSelector((state) => state.entities.todos);
  const [currentList, setCurrentList] = useState(lists[0]);
  const [currentLists, setCurrentLists] = useState(lists);
  // const [currentTodos, setCurrentTodos] = useState(todos);
  // const getPropsFromChild = (listId) => {
  //   console.log("listId in parent: " + listId);
  // };
  return (
    <div className="App">
      <GlobalStyle />
      <AllItemList
        currentList={currentList}
        setCurrentList={setCurrentList}
        setCurrentLists={setCurrentLists}
      />
      {/* <ItemList passPropsToParent={(listId) => getPropsFromChild(listId)} /> */}
      <AllItemTodo
        currentList={currentList}
        setCurrentList={setCurrentList}
        currentLists={currentLists}
        setCurrentLists={setCurrentLists}
      />
    </div>
  );
}
export default App;
