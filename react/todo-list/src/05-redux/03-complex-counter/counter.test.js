import counter from "./counter";
import { increment, decrement, reset } from "./actions";

test("it should initialize with zero", () => {
  const stateBefore = undefined;
  const action = { type: "@@INIT" };
  const stateAfter = { value: 0 };

  const state = counter(stateBefore, action);

  expect(state).toEqual(stateAfter);
});

test("it should increment its value", () => {
  const stateBefore = { value: 0 };
  const action = increment(2);
  const stateAfter = { value: 2 };

  const state = counter(stateBefore, action);

  expect(state).toEqual(stateAfter);
});

test("it should decrement its value", () => {
  const stateBefore = { value: 0 };
  const action = decrement(3);
  const stateAfter = { value: -3 };

  const state = counter(stateBefore, action);

  expect(state).toEqual(stateAfter);
});

test("it should reset to zero", () => {
  const stateBefore = { value: 7 };
  const action = reset();
  const stateAfter = { value: 0 };

  const state = counter(stateBefore, action);

  expect(state).toEqual(stateAfter);
});

test("it should ignore any other action", () => {
  const stateBefore = { value: 7 };
  const action = { type: "MAKE_COFFEE" };
  const stateAfter = { value: 7 };

  const state = counter(stateBefore, action);

  expect(state).toEqual(stateAfter);
  expect(state).toBe(stateBefore);
});
