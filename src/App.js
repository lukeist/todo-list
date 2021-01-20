import GlobalStyle from "./components/GlobalStyle";
import AllItemList from "./components/AllItemList";
import AllItemTodo from "./components/AllItemTodo";
import { useSelector } from "react-redux";
import { useState } from "react";
import ListsButton from "./components/ListsButton";
import "./styles/app.scss";

function App() {
  const lists = useSelector((state) => state.entities.lists);
  const [currentList, setCurrentList] = useState(lists[0]);
  const [currentLists, setCurrentLists] = useState(lists);
  const [showLists, setShowLists] = useState(false);

  return (
    <div className={`App ${showLists ? "lists-active" : ""}`}>
      <ListsButton showLists={showLists} setShowLists={setShowLists} />
      <GlobalStyle />
      <AllItemList
        showLists={showLists}
        setShowLists={setShowLists}
        currentList={currentList}
        setCurrentList={setCurrentList}
        setCurrentLists={setCurrentLists}
      />
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
