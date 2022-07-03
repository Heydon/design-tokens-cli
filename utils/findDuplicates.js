/**
 * Finds duplicates in an array
 * @param {Array} arr The starting array
 * @returns {Array}
 */
const findDuplicates = arr => {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

export { findDuplicates }