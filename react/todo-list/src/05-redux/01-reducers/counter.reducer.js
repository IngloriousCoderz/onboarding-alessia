// action types

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

// action creators

export const increment = (amount) => ({ type: INCREMENT, payload: amount });
export const decrement = (amount) => ({ type: DECREMENT, payload: amount });
export const reset = () => ({ type: RESET });

// reducer

export default function counter(state, action) {
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

// export function increment(state, amount) {
//   return state + amount;
// }

// export function decrement(state, amount) {
//   return state - amount;
// }

// export function reset() {
//   return 0;
// }

// const state = [
//   { type: "INCREMENT", payload: 2 },
//   { type: "DECREMENT", payload: 3 },
// ].reduce(counter, 0);
// console.log(state);
