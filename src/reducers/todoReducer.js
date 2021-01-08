// import todoItem from "../components/todoItem";

const initState = [
  //   {
  //     id: uuidv4,
  //     content: todoItem,
  //     resolved: false,
  //   },
];

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "TODO_ADDED":
      return [
        ...state,
        {
          id: action.payload.id,
          content: action.payload.content,
          check: action.payload.check,
        },
      ];
    case "TODO_CHECKED":
      return state.map((todo) =>
        todo.id !== action.payload.id
          ? todo
          : { ...todo, check: !action.payload.check }
      );

    case "TODO_REMOVED":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return [...state];
  }
};

export default todoReducer;
