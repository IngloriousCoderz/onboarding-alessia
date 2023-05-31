import {
  ADD_TASK,
  REMOVE_TASK,
  SET_TEXT,
  TOGGLE_COMPLETED,
} from "./action-types";

export const setText = (text) => ({ type: SET_TEXT, payload: text });
export const addTask = (text) => ({ type: ADD_TASK, payload: text });
export const toggleCompleted = (id) => ({
  type: TOGGLE_COMPLETED,
  payload: id,
});
export const removeTask = (id) => ({ type: REMOVE_TASK, payload: id });
