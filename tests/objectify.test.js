'use strict';
import { objectify } from "../utils/objectify.js";

test('Converts a multidimensional array of design tokens names and values into an object', () => {
  const array = [
    ['brand', 'measure', 'large', '75ch'],
    ['brand', 'measure', 'small', '60ch'],
  ];

  const object = objectify(array);
  expect(Object.values(object)[0]).toBe('75ch');
  expect(Object.keys(object)[1]).toBe('brand-measure-small');
});