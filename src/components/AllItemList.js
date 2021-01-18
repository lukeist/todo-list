import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import NewListButton from "./NewListButton";

const AllItemList = ({ setCurrentList, currentList, setCurrentLists }) => {
  const lists = useSelector((state) => state.entities.lists);
  return (
    <div className="all-item-list">
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
  );
};

export default AllItemList;
