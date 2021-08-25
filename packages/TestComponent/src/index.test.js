import { count, increment } from "./index";

test('test increment', () => {
  expect(count).toEqual(1);
  expect(increment(1)).toEqual(2);
});
