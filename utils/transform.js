import { toCustomProps } from './transformers/toCustomProps.js';
import { toScssVars } from './transformers/toScssVars.js';
import { toESM } from './transformers/toESM.js';
import { toJSON } from './transformers/toJSON.js';

/**
 * Convert an object of design token name/value pairs into Scss (Sass) variables
 * @param {Object} pairs The flattened token key/value pairs
 * @param {String} as What the tokens should be transformed into
 * @returns {String}
 */
 const transform = (pairs, as, groupName) => {
  switch (as) {
    case 'css':
      return toCustomProps(pairs, groupName);
    case 'scss':
      return toScssVars(pairs, groupName);
    case 'mjs' || 'js':
      return toESM(pairs, groupName);
    case 'json':
      return toJSON(pairs);
    default: 
      throw new Error(`The 'as' value ${as} is not recognized.`);
  }
}

export { transform }