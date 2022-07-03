/**
 * Filter an object of token key/values by the group name
 * @param {Object} tokens The starting object (one level of key/value pairs only)
 * @returns {Object}
 */
const filterByGroup = (tokens, groupName) => {
  let filtered = Object.keys(tokens)
    .filter(key => key.startsWith(groupName))
    .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: tokens[key]
        });
    }, {});
  return filtered;
}

export { filterByGroup }