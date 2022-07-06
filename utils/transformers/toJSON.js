/**
 * Convert an object of design token name/value pairs into JSON (pass through, basically)
 * @param {Object} tokensObject 
 * @returns {String}
 */
 const toJSON = (tokensObject, config) => {
  if (config.globalPrefix) {
    tokensObject = Object.fromEntries(
      Object.entries(tokensObject).map(([k, v]) => [`${config.globalPrefix}-${k}`, v])
    )
  }
  return JSON.stringify(tokensObject, undefined, '\t');
}

export { toJSON }