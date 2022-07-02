'use strict';
import { toCustomProps } from "../utils/transformers/toCustomProps.js";

test('Converts tokens to CSS custom properties', () => {
  const tokens = {
    'token-color-1': '#000',
    'token-color-2': '#fff'
  }

  const expectedString = `
    :root {
      --token-color-1: #000;
      --token-color-2: #fff;
    }
  `;

  const returnedString = toCustomProps(tokens);
  expect(expectedString.replace(/\s/g, '')).toEqual(returnedString.replace(/\s/g, ''));
});