import { INCREMENT, DECREMENT, RESET } from "./action-types";

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;

    case DECREMENT:
      return state - action.payload;

    case RESET:
      return 0;

    default:
      return state;
  }
}
