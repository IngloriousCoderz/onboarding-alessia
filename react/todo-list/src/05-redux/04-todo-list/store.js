import { configureStore } from "@reduxjs/toolkit";

import text from "./text";
import tasks from "./tasks";
import { addTask } from "./actions";

const store = configureStore({ reducer: { text, tasks } });

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTask("Learn Redux"));
