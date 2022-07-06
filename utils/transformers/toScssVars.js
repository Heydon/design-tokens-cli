/**
 * Convert an object of design token name/value pairs into Scss (Sass) variables
 * @param {Object} tokensObject 
 * @returns {String}
 */
const toScssVars = (tokensObject, config) => {
  const prefix = `${config.globalPrefix}-` || '';
  let string = '';
  Object.keys(tokensObject).forEach(key => {
    string += `$${prefix}${key}: ${tokensObject[key]};\n`;
  });
  return string;
}

export { toScssVars }