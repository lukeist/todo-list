import { combineReducers } from "redux";
import todosReducer from "./rtodos";
import listsReducer from "./rlists";
export default combineReducers({
  lists: listsReducer,
  todos: todosReducer,
});
