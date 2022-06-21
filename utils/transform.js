import { toCustomProps } from './toCustomProps.js';
import { toScssVars } from './toScssVars.js';

/**
 * Convert an object of design token name/value pairs into Scss (Sass) variables
 * @param {Object} pairs The flattened token key/value pairs
 * @param {String} as What the tokens should be transformed into
 * @returns {String}
 */
 const transform = (pairs, as) => {
  switch (as) {
    case 'css':
      return toCustomProps(pairs);
    case 'scss':
      return toScssVars(pairs);
    default: 
      return console.error("The `as` value is not recognized."); 
  }
}

export { transform }