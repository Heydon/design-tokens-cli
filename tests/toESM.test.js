'use strict';
import { toESM } from "../utils/transformers/toESM.js";

test('Converts tokens to CSS custom properties', () => {
  const tokens = {
    'token-color-1': '#000',
    'token-color-2': '#fff'
  }

  const groupName = 'my-colors';

  const expectedString = `
    export const myColors = {
      'token-color-1': '#000',
      'token-color-2': '#fff'
    }
  `;

  const returnedString = toESM(tokens, groupName);
  expect(expectedString.replace(/\s/g, '')).toEqual(returnedString.replace(/\s/g, ''));
});