import counter from "./counter.reducer";

test("it should increment its value", () => {
  const stateBefore = 0;
  const action = { type: "INCREMENT", payload: 2 };
  const stateAfter = 2;

  const state = counter(stateBefore, action);

  expect(state).toBe(stateAfter);
});

test("it should decrement its value", () => {
  const stateBefore = 0;
  const action = { type: "DECREMENT", payload: 3 };
  const stateAfter = -3;

  const state = counter(stateBefore, action);

  expect(state).toBe(stateAfter);
});

test("it should reset to zero", () => {
  const stateBefore = 7;
  const action = { type: "RESET" };
  const stateAfter = 0;

  const state = counter(stateBefore, action);

  expect(state).toBe(stateAfter);
});
