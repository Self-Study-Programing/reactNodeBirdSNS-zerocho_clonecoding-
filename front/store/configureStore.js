import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares)) // devtool 연결 X
      : composeWithDevTools(applyMiddleware(...middlewares)); // devtool 연결

  const store = createStore(rootReducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
