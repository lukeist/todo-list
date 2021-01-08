// // import

export const loadTodo = (id, content, check) => (dispatch) => {
  // const loadData = todoItem(id);
  dispatch({
    type: "TODO_ADDED",
    payload: {
      id,
      content,
      check,
    },
  });
};

export const checkTodo = (id, check) => (dispatch) => {
  dispatch({
    type: "TODO_CHECKED",
    payload: { id, check },
  });
};

export const removeTodo = (id) => (dispatch) => {
  dispatch({
    type: "TODO_REMOVED",
    payload: { id },
  });
};
