import { sortKeys } from './sortKeys';

/**
 * Create a simple object of design token name/value pairs
 * @param {Array} tokensArrays A multidimensional array of tokens with their categories, names, and values in that order
 * @returns {Object} of token names and values
 */
const objectify = tokensArrays => {
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

export { objectify }