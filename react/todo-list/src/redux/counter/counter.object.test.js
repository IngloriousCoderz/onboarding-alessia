import { counter } from "./counter.object";

beforeEach(() => {
  counter.reset();
});

test("it should increment its value", () => {
  counter.increment(2);

  expect(counter.value).toBe(2);
});

test("it should decrement its value", () => {
  counter.decrement(3);

  expect(counter.value).toBe(-3);
});

test("it should reset to zero", () => {
  counter.reset();

  expect(counter.value).toBe(0);
});
