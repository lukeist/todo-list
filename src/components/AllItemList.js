import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import NewListButton from "./NewListButton";

const AllItemList = ({
  setCurrentList,
  currentList,
  setCurrentLists,
  showLists,
  setShowLists,
}) => {
  const lists = useSelector((state) => state.entities.lists);
  const exitLists = (e) => {
    const element = e.target;
    console.log(element);
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div onClick={exitLists} className="shadow">
      <div
        className={`lists-container ${
          showLists ? "active-lists-container" : ""
        }`}
      >
        <NewListButton
          setCurrentList={setCurrentList}
          setCurrentLists={setCurrentLists}
        />
        {lists.map((list) => (
          <ItemList
            currentList={currentList}
            setCurrentList={setCurrentList}
            list={list}
            id={list.id}
            key={list.id}
            title={list.title}
            status={list.status}
            // todos={list.todos}
          />
        ))}
      </div>
    </div>
  );
};

export default AllItemList;
