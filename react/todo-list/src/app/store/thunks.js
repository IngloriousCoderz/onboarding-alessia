import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../service/api";
import { selectTaskById } from "./selectors";

export const fetchTasks = createAsyncThunk("thunk/fetchTasks", async () => {
  const tasks = await api.retrieveTasks();
  return tasks;
});

export const addTask = createAsyncThunk(
  "thunk/addTask",
  async (text, { dispatch }) => {
    await api.createTask({ text });
    dispatch(fetchTasks());
  }
);

export const toggleCompleted = createAsyncThunk(
  "thunk/toggleCompleted",
  async (id, { dispatch, getState }) => {
    const { completed } = selectTaskById(getState(), id);
    await api.updateTask(id, { completed: !completed });
    dispatch(fetchTasks());
  }
);

export const removeTask = createAsyncThunk(
  "thunk/removeTask",
  async (id, { dispatch }) => {
    await api.deleteTask(id);
    dispatch(fetchTasks());
  }
);
