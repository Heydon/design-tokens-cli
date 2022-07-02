/**
 * Convert an object of design token name/value pairs into CSS custom Properties 
 * @param {Object} tokensObject 
 * @returns {String}
 */
const toCustomProps = (tokensObject, includeRoot = true) => {
  let string = '';
  if (includeRoot) string += ':root {\n';
  Object.keys(tokensObject).forEach(key => {
    if (includeRoot) string += ' ';
    string += `\t--${key}: ${tokensObject[key]};\n`;
  });
  if (includeRoot) string += '}\n';
  return string;
}

export { toCustomProps }