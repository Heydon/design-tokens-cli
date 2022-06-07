/**
 * Sort a shallow object alphabetically by key
 * @param {Object} object A shallow object to be sorted alphabetically, by key 
 * @returns {Object} 
 */
const sortKeys = object => {
  return Object.keys(object)
    .sort()
    .reduce((acc, key) => ({
        ...acc, [key]: object[key]
    }), {});
}

export { sortKeys }