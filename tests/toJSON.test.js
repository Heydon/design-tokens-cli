'use strict';
import { toJSON } from "../utils/transformers/toJSON.js";

test('Converts tokens to CSS custom properties', () => {
  const tokens = {
    "token-color-1": "#000",
    "token-color-2": "#fff"
  }

  const expectedString = `
    {
      "token-color-1": "#000",
      "token-color-2": "#fff"
    }
  `;

  const returnedString = toJSON(tokens);
  expect(expectedString.replace(/\s/g, '')).toEqual(returnedString.replace(/\s/g, ''));
});