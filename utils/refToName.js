/**
 * Convert design token references to design token names
 * @param {String} refString The design tokens reference $value
 * @returns {String} A design token name (kebab case)
 */
const refToName = refString => {
  const cropped = refString.slice(1,-1).trim();
  const kebabbed = cropped.split('.').join('-').split(' ').join('-');
  return kebabbed;
}

export { refToName }