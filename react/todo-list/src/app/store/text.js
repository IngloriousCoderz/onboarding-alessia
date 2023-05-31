import { createReducer } from "@reduxjs/toolkit";
import { addTask, setText } from "./actions";

export default createReducer("", {
  [setText]: (state, action) => action.payload,
  [addTask]: (state, action) => "",
});

// export default function text(state = "", action) {
//   switch (action.type) {
//     case setText.toString():
//       return action.payload;

//     case addTask.toString():
//       return "";

//     default:
//       return state;
//   }
// }

export const selectText = (state) => state.text;
