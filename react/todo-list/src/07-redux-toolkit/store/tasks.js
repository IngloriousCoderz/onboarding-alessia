import { createReducer } from "@reduxjs/toolkit";
import { addTask, toggleCompleted, removeTask } from "./actions";

export default createReducer([], {
  [addTask]: (state, action) => {
    const maxId = state.length ? state[state.length - 1].id : 0;
    state.push({ id: maxId + 1, text: action.payload });
  },

  [toggleCompleted]: (state, action) => {
    const task = state.find((task) => task.id === action.payload);
    task.completed = !task.completed;
  },

  [removeTask]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload);
    state.splice(index, 1);
    // return state.filter((task) => task.id !== action.payload);
  },
});

// export default function tasks(state = [], action) {
//   switch (action.type) {
//     case addTask.toString():
//       const maxId = state.length ? state[state.length - 1].id : 0;
//       return [...state, { id: maxId + 1, text: action.payload }];

//     case toggleCompleted.toString():
//       return state.map((task) =>
//         task.id === action.payload
//           ? { ...task, completed: !task.completed }
//           : task
//       );

//     case removeTask.toString():
//       return state.filter((task) => task.id !== action.payload);

//     default:
//       return state;
//   }
// }

// selectors

export const selectTasks = (state) => state.tasks;
