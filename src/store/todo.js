import {
  createAction,
  createReducer,
  createSlice,
  createStore,
} from "@reduxjs/toolkit";

// // Actions OLD
// export const loadTodo = (id, content, check) => (dispatch) => {
//   // const loadData = todoItem(id);
//   dispatch({
//     type: "TODO_ADDED",
//     payload: {
//       id,
//       content,
//       check,
//     },
//   });
// };

// export const checkTodo = (id, check) => (dispatch) => {
//   dispatch({
//     type: "TODO_CHECKED",
//     payload: { id, check },
//   });
// };

// export const removeTodo = (id) => (dispatch) => {
//   dispatch({
//     type: "TODO_REMOVED",
//     payload: { id },
//   });
// };

// Reducer OLD
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case "TODO_ADDED":
//       return [
//         ...state,
//         {
//           id: action.payload.id,
//           content: action.payload.content,
//           check: action.payload.check,
//         },
//       ];
//     case "TODO_CHECKED":
//       return state.map((todo) =>
//         todo.id !== action.payload.id
//           ? todo
//           : { ...todo, check: !action.payload.check }
//       );

//     case "TODO_REMOVED":
//       return state.filter((todo) => todo.id !== action.payload.id);
//     default:
//       return [...state];
//   }
// };

// Reducer NEW
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case todoAdded.type:
//       return [
//         ...state,
//         {
//           id: action.payload.id,
//           content: action.payload.content,
//           check: action.payload.check,
//         },
//       ];
//     case todoChecked.type:
//       return state.map((todo) =>
//         todo.id !== action.payload.id
//           ? todo
//           : { ...todo, check: !action.payload.check }
//       );

//     case todoRemoved.type:
//       return state.filter((todo) => todo.id !== action.payload.id);
//     default:
//       return [...state];
//   }
// };

// // Actions NEW
// export const todoAdded = createAction("todoAdded");
// export const todoChecked = createAction("todoChecked");
// export const todoRemoved = createAction("todoRemoved");
// // Reducer NEWER with createReducer
// const reducer = createReducer([], {
//   todoAdded: (state, action) => {
//     // ^^^ Option 1: Let the variable todoAdded here
//     state.push({
//       id: action.payload.id,
//       content: action.payload.content,
//       check: action.payload.check,
//     });
//   },
//   [todoChecked.type]: (state, action) => {
//     // ^^^ Option2: with: type = 'todoChecked' here because todoChecked is an object// if action todoChecked has 'todoXXXed', then type = 'todoXXXed'
//     state.map((todo) =>
//       todo.id !== action.payload.id
//         ? todo
//         : { ...todo, check: !action.payload.check }
//     );
//   },
//   todoAdded: (state, action) => {
//     state.filter((todo) => todo.id !== action.payload.id);
//   },
// });
// export default reducer;

const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoAdded: (todos, action) => {
      // ^^^ cant use [todoAdded.type] like above because todoAdded is not an object anymore
      todos.push({
        id: action.payload.id,
        content: action.payload.content,
        check: action.payload.check,
      });
    },
    todoChecked: (todos, action) => {
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      todos[index].check = !action.payload.check;
    },
    todoRemoved: (todos, action) => {
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      todos.splice(index, 1);
    },
  },
});

export const { todoAdded, todoChecked, todoRemoved } = slice.actions;
export default slice.reducer;
