import rootReducer from "./reducers";
// import todoReducer from "./reducers/todoReducer";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  //   todoReducer,
  composeEnchancer(applyMiddleware(thunk))
);

export default store;
