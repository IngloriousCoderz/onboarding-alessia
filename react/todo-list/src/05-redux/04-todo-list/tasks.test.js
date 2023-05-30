import { addTask, removeTask, toggleCompleted } from "./actions";
import tasks, { selectAreAllCompleted } from "./tasks";

test("it should initialize as an empty array", () => {
  const stateBefore = undefined;
  const action = { type: "@@INIT" };
  const stateAfter = [];

  const state = tasks(stateBefore, action);
  expect(state).toEqual(stateAfter);
});

test("it should add a new task", () => {
  const stateBefore = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
  ];
  const action = addTask("Forget everything");
  const stateAfter = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];

  const state = tasks(stateBefore, action);
  expect(state).toEqual(stateAfter);
});

test("it should toggle the 'completed' property on a task", () => {
  const stateBefore = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = toggleCompleted(2);
  const stateAfter = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: true },
    { id: 3, text: "Forget everything" },
  ];

  const state = tasks(stateBefore, action);
  expect(state).toEqual(stateAfter);
});

test("it should remove a task", () => {
  const stateBefore = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = removeTask(2);
  const stateAfter = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 3, text: "Forget everything" },
  ];

  const state = tasks(stateBefore, action);
  expect(state).toEqual(stateAfter);
});

test("ti should check if all tasks are completed", () => {
  const state = [
    { id: 1, text: "Learn Redux", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];

  expect(selectAreAllCompleted(state)).toBe(false);
});
