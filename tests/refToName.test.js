'use strict';
import { refToName } from "../utils/refToName.js";

test('Sorts an object\'s keys alphabetically', () => {
  const ref = '{ color.gray scale.0 }';

  const converted = refToName(ref);
  expect(converted).toBe('color-gray-scale-0');
});