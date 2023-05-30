import counter from "./counter";
import { increment, decrement, reset } from "./actions";

test("it should initialize with zero", () => {
  const stateBefore = undefined;
  const action = { type: "@@INIT" };
  const stateAfter = 0;

  const state = counter(stateBefore, action);

  expect(state).toBe(stateAfter);
});

test("it should increment its value", () => {
  const stateBefore = 0;
  const action = increment(2);
  const stateAfter = 2;

  const state = counter(stateBefore, action);

  expect(state).toBe(stateAfter);
});

test("it should decrement its value", () => {
  const stateBefore = 0;
  const action = decrement(3);
  const stateAfter = -3;

  const state = counter(stateBefore, action);

  expect(state).toBe(stateAfter);
});

test("it should reset to zero", () => {
  const stateBefore = 7;
  const action = reset();
  const stateAfter = 0;

  const state = counter(stateBefore, action);

  expect(state).toBe(stateAfter);
});

test("it should ignore any other action", () => {
  const stateBefore = 7;
  const action = { type: "MAKE_COFFEE" };

  const state = counter(stateBefore, action);

  expect(state).toBe(stateBefore);
});
