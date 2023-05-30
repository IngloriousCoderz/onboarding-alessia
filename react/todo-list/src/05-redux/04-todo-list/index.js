import {
  ADD_TASK,
  REMOVE_TASK,
  SET_TEXT,
  TOGGLE_COMPLETED,
} from "./action-types";
// import { setText } from "./actions";
import tasks from "./tasks";
import text from "./text";

// export default function rootReducer(state, action) {
//   switch (action.type) {
//     case SET_TEXT:
//       return {
//         // ...state,
//         text: text(state.text, action),
//         tasks: tasks(state.tasks, action),
//       };

//     case ADD_TASK:
//       return {
//         // text: text(state.text, setText("")),
//         text: text(state.text, action),
//         tasks: tasks(state.tasks, action),
//       };

//     case TOGGLE_COMPLETED:
//     case REMOVE_TASK:
//       return {
//         // ...state,
//         text: text(state.text, action),
//         tasks: tasks(state.tasks, action),
//       };

//     default:
//       return state;
//   }
// }

// export default function rootReducer(state, action) {
//   return {
//     text: text(state.text, action),
//     tasks: tasks(state.tasks, action),
//   };
// }

const combineReducers = (reducers) => (state, action) =>
  Object.entries(reducers).reduce((acc, [name, reducer]) => {
    acc[name] = reducer(state[name], action);
    return acc;
  }, {});

export default combineReducers({ text, tasks });
