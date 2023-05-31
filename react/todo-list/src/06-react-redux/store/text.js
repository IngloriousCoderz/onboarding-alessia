import { ADD_TASK, SET_TEXT } from "./action-types";

export default function text(state = "", action) {
  switch (action.type) {
    case SET_TEXT:
      return action.payload;

    case ADD_TASK:
      return "";

    default:
      return state;
  }
}

export const selectText = (state) => state.text;
