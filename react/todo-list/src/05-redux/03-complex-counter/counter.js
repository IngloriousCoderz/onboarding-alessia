import { INCREMENT, DECREMENT, RESET } from "./action-types";

export default function counter(state = { value: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + action.payload };

    case DECREMENT:
      return { value: state.value - action.payload };

    case RESET:
      return { value: 0 };

    default:
      return state;
  }
}
