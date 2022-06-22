import { refToName } from "./refToName.js";

/**
 * Searches through chained references to replace reference with originating value
 * @param {Object} pairs The flattened token key/value pairs 
 * @returns {Object}
 */
const findTrueValues = pairs => {
  const pairsCopy = JSON.parse(JSON.stringify(pairs));
  for (const pair in pairsCopy) {
    let val = pairsCopy[pair];
    while (val.startsWith('{')) {
      let name = refToName(pairsCopy[pair]);
      if (!pairsCopy[name]) {
        throw new Error(`The token reference name '${name}' does not exist.`);
      }
      val = pairsCopy[name];
    }
    pairsCopy[pair] = val;
  } 
  return pairsCopy;
}

export { findTrueValues }
