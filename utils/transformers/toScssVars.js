/**
 * Convert an object of design token name/value pairs into Scss (Sass) variables
 * @param {Object} tokensObject 
 * @returns {String}
 */
const toScssVars = (tokensObject) => {
  let string = '';
  Object.keys(tokensObject).forEach(key => {
    string += `$${key}: ${tokensObject[key]};\n`;
  });
  return string;
}

export { toScssVars }