import { createCounter } from "./counter.factory";

test("it should increment its value", () => {
  const counter = createCounter();
  counter.increment(2);

  expect(counter.value).toBe(2);
});

test("it should decrement its value", () => {
  const counter = createCounter();
  counter.decrement(3);

  expect(counter.value).toBe(-3);
});

test("it should reset to zero", () => {
  const counter = createCounter();
  counter.reset();

  expect(counter.value).toBe(0);
});
