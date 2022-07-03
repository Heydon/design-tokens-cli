'use strict';
import { filterByGroup } from '../utils/filterByGroup.js';

test('Filters tokens key/value pairs by group name', () => {
  const tokens = {
    "color-token-1": "#000",
    "color-token-2": "#fff",
    "size-token-1": "1em",
    "size-token-2": "2em"
  }

  const filtered = filterByGroup(tokens, 'color');
  expect(Object.keys(filtered).length).toEqual(2);
});