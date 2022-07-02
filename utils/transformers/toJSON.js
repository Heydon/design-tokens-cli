/**
 * Convert an object of design token name/value pairs into JSON (pass through, basically)
 * @param {Object} tokensObject 
 * @returns {String}
 */
 const toJSON = (tokensObject) => {
  return JSON.stringify(tokensObject, undefined, '\t');
}

export { toJSON }