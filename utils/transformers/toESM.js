/**
 * Convert an object of design token name/value pairs into an ES module
 * @param {Object} tokensObject 
 * @returns {String}
 */
const toESM = (tokensObject, groupName) => {
  groupName = groupName.replace(/-./g, x=>x[1].toUpperCase());
  const keys = Object.keys(tokensObject);
  let string = '';
  string += `export const ${groupName} = {\n`;
  keys.forEach(key => {
    let comma = (keys.indexOf(key) + 1) === keys.length ? '' : ',';
    string += ` '${key}': '${tokensObject[key]}'${comma}\n`;
  });
  string += `}`;
  return string;
}

export { toESM }