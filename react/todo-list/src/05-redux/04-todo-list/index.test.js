import rootReducer from ".";
import { addTask, removeTask, setText, toggleCompleted } from "./actions";

import "./store";

test("it should set some new text", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = setText("Some other text");
  const stateAfter = {
    text: "Some other text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = rootReducer(stateBefore, action);
  expect(state).toEqual(stateAfter);
});

test("it should add a task", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
    ],
  };
  const action = addTask("Forget everything");
  const stateAfter = {
    text: "",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = rootReducer(stateBefore, action);
  expect(state).toEqual(stateAfter);
});

test("it should toggle the 'completed' property on a task", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = toggleCompleted(2);
  const stateAfter = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: true },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = rootReducer(stateBefore, action);
  expect(state).toEqual(stateAfter);
});

test("it should remove a task", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = removeTask(2);
  const stateAfter = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn Redux", completed: true },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = rootReducer(stateBefore, action);
  expect(state).toEqual(stateAfter);
});
