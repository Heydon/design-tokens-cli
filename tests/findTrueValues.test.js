'use strict';
import { findTrueValues } from '../utils/findTrueValues.js';

test('Searches through references to find true value and apply it', () => {
  const tokens = {
    'color': {
      'color-white': '#ffffff',
      'color-blanche': '{color.white}',
      'color-weiss': '{color.blanche}'
    }
  }

  const resolved = findTrueValues(tokens);
  expect(resolved['color-weiss']).toBe('#ffffff');
});