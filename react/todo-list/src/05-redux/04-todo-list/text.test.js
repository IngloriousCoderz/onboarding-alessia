import { setText } from "./actions";
import text from "./text";

test("it should initialize as an empty string", () => {
  const stateBefore = undefined;
  const action = { type: "@@INIT" };
  const stateAfter = "";

  const state = text(stateBefore, action);
  expect(state).toBe(stateAfter);
});

test("it should set some text", () => {
  const stateBefore = "Some text";
  const action = setText("Some other text");
  const stateAfter = "Some other text";

  const state = text(stateBefore, action);
  expect(state).toBe(stateAfter);
});
