import { useSelector } from "react-redux";
import ItemTodo from "./ItemTodo";
import Nav from "./Nav";

const AllItemTodo = ({
  currentList,
  setCurrentList,
  setCurrentLists,
  currentLists,
}) => {
  const todos = useSelector((state) => state.entities.todos);
  const listsActive = currentLists.filter((list) => list.status === true);
  const currentTodos = todos.filter((todo) => todo.listId === currentList.id);

  return (
    <div className="todos-container">
      <Nav
        currentList={currentList}
        setCurrentLists={setCurrentLists}
        setCurrentList={setCurrentList}
      />
      <div className="all-todos">
        {listsActive.length === 1
          ? currentTodos.map((todo) => (
              <ItemTodo
                todo={todo}
                key={todo.id}
                id={todo.id}
                content={todo.content}
                check={todo.check}
              />
            ))
          : todos.map((todo) => (
              <ItemTodo
                todo={todo}
                key={todo.id}
                id={todo.id}
                content={todo.content}
                check={todo.check}
              />
            ))}
      </div>
    </div>
  );
};

export default AllItemTodo;
