import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const list = useSelector((state) => state.todos);
  return (
    <div className="todo-list">
      {/* <TodoItem content={content} id={id} /> */}
      {list.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          content={item.content}
          check={item.check}
        />
      ))}
    </div>
  );
};

// const StyledList = styled
export default TodoList;
