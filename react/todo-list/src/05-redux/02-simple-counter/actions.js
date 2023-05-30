import { INCREMENT, DECREMENT, RESET } from "./action-types";

export const increment = (amount) => ({ type: INCREMENT, payload: amount });
export const decrement = (amount) => ({ type: DECREMENT, payload: amount });
export const reset = () => ({ type: RESET });
