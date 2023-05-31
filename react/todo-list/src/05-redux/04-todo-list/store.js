import { combineReducers } from "@reduxjs/toolkit";

import text from "./text";
import tasks from "./tasks";
import { addTask } from "./actions";

// const store = configureStore({ reducer: { text, tasks } });
const store = createStore(combineReducers({ text, tasks }));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTask("Learn Redux"));

function createStore(reducer) {
  const store = {
    state: undefined,
    listeners: [],

    subscribe(listener) {
      this.listeners.push(listener);
    },

    dispatch(action) {
      this.state = reducer(this.state, action);
      this.listeners.forEach((listener) => listener());
    },

    getState() {
      return this.state;
    },
  };

  store.dispatch({ type: "@@INIT" });

  return store;
}
