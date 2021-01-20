import { createSlice } from "@reduxjs/toolkit";
import { iniTodos } from "../store/ListInitialState";

const slice = createSlice({
  name: "todos",
  initialState: iniTodos,
  reducers: {
    todoAdded: (todos, action) => {
      todos.push({
        listId: action.payload.listId,
        id: action.payload.id,
        content: action.payload.content,
        check: action.payload.check,
        dateAdded: action.payload.dateAdded,
        dateFinished: action.payload.dateFinished,
      });
    },
    todoEdited: (todos, action) => {
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      todos[index].content = action.payload.content;
    },
    todoChecked: (todos, action) => {
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      todos[index].check = !action.payload.check;
    },
    todoRemoved: (todos, action) => {
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      todos.splice(index, 1);
    },
    todosThisListRemoved: (todos, action) => {
      return todos.filter((todo) => todo.listId !== action.payload.id);
    },
  },
});

export const {
  todoAdded,
  todoEdited,
  todoChecked,
  todoRemoved,
  todosThisListRemoved,
} = slice.actions;
export default slice.reducer;
