'use strict';
import { refToName } from "../utils/refToName.js";

test('Converts a reference string to a real token name.', () => {
  const ref = '{ color.gray scale.0 }';

  const converted = refToName(ref);
  expect(converted).toBe('color-gray-scale-0');
});