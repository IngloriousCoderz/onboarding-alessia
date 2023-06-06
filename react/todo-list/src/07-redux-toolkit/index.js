import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import AppComponent from "./app";

import text from "./form/form.slice";
import tasks from "./list/list.slice";

const INITIAL_STATE = {
  text: "",
  tasks: [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ],
};

const store = configureStore({
  reducer: { text, tasks },
  preloadedState: INITIAL_STATE,
});

function App(props) {
  return (
    <Provider store={store}>
      <AppComponent {...props} />
    </Provider>
  );
}

export default App;
