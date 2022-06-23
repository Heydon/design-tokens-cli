/**
 * Convert an object of design token name/value pairs into custom Properties 
 * @param {Object} tokensObject 
 * @returns {String}
 */
const toCustomProps = (tokensObject, groupName, includeRoot = true) => {
  let string = '';
  if (includeRoot) string += ':root {\n';
  string += ` /* ↓ ${groupName} */\n`;
  Object.keys(tokensObject).forEach(key => {
    if (includeRoot) string += ' ';
    string += ` --${key}: ${tokensObject[key]};\n`;
  });
  if (includeRoot) string += '}\n';
  return string;
}

export { toCustomProps }