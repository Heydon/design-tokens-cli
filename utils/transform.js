import { flatten } from './flatten.js';
import { sortKeys } from './sortKeys.js';

/**
 * Create a simple object of design token name/value pairs
 * @param {Array} tokens A standard design tokens object (JSON))
 * @returns {Object} of token names and values
 */
const transform = tokens => {
  const tokensArrays = flatten(tokens);
  const newObject = {};
  tokensArrays.forEach(arr => {
    const keys = arr.slice(0, -1).map(k => {
      return k.split(' ').join('-');
    });
    const key = keys.join('-');
    const value = arr.at(-1);
    newObject[key] = value;
  });
  return sortKeys(newObject); 
}

export { transform }