import { Counter } from "./counter.class";

test("it should increment its value", () => {
  const counter = new Counter();
  counter.increment(2);

  expect(counter.value).toBe(2);
});

test("it should decrement its value", () => {
  const counter = new Counter();
  counter.decrement(3);

  expect(counter.value).toBe(-3);
});

test("it should reset to zero", () => {
  const counter = new Counter();
  counter.reset();

  expect(counter.value).toBe(0);
});
