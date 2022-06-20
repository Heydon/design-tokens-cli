'use strict';
import { sortKeys } from "../utils/sortKeys.js";

test('Sorts an object\'s keys alphabetically', () => {
  const object = {
    b: true,
    c: true,
    z: true,
    a: true
  }

  const sorted = sortKeys(object);
  expect(Object.keys(sorted)[0]).toBe('a');
});