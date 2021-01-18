import { useSelector } from "react-redux";
import ItemTodo from "./ItemTodo";
import ItemList from "./ItemList";
import NewTodoButton from "../components/NewTodoButton";
import Nav from "./Nav";
import { listAdded } from "../store/rlists";
import setStore from "../store/setStore";
const AllItemTodo = ({
  currentList,
  setCurrentList,
  setCurrentLists,
  currentLists,
}) => {
  // const lists = useSelector((state) => state.entities.lists);
  const lists = setStore.getState().entities.lists;
  const todos = useSelector((state) => state.entities.todos);
  // const index = lists.findIndex((list) => list.id === id);
  // const todosIndex = lists[index].todos;
  const listsActive = currentLists.filter((list) => list.status === true);
  const currentTodos = todos.filter((todo) => todo.listId === currentList.id);

  return (
    <div className="all-item-todo">
      <Nav currentList={currentList} setCurrentLists={setCurrentLists} />
      <NewTodoButton
        currentList={currentList}
        setCurrentList={setCurrentList}
      />
      {listsActive.length === 1
        ? currentTodos.map((item) => (
            <ItemTodo
              key={item.id}
              id={item.id}
              content={item.content}
              check={item.check}
            />
          ))
        : todos.map((todo) => (
            <ItemTodo
              key={todo.id}
              id={todo.id}
              content={todo.content}
              check={todo.check}
            />
          ))}
    </div>
  );
};

export default AllItemTodo;
