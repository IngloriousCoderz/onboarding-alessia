import { createSlice } from "@reduxjs/toolkit";

import { addTask } from "../store/actions";

const slice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    toggleCompleted: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      task.completed = !task.completed;
    },

    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
      // return state.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: {
    [addTask]: (state, action) => {
      const maxId = state.length ? state[state.length - 1].id : 0;
      state.push({ id: maxId + 1, text: action.payload });
    },
  },
});

export default slice.reducer;

export const { toggleCompleted, removeTask } = slice.actions;
