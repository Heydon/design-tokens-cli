'use strict';
import { toScssVars } from "../utils/transformers/toScssVars.js";

test('Converts tokens to CSS custom properties', () => {
  const tokens = {
    'token-color-1': '#000',
    'token-color-2': '#fff'
  }

  const expectedString = `
    $token-color-1: #000;
    $token-color-2: #fff;
  `;

  const returnedString = toScssVars(tokens);
  expect(expectedString.replace(/\s/g, '')).toEqual(returnedString.replace(/\s/g, ''));
});