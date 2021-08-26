import { increment } from "./index";

test('test increment', () => {
  expect(increment(1)).toEqual(2);
  expect(increment(1)).toEqual(3);
});
