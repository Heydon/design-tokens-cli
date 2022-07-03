import { refToName } from "./refToName.js";

/**
 * Searches through chained references to replace reference with originating value
 * @param {Object} pairs The flattened token key/value pairs 
 * @returns {Object}
 */
const findTrueValues = groups => {
  const newGroups = JSON.parse(JSON.stringify(groups));
  let justPairs = {};
  Object.keys(newGroups).forEach(group => {
    Object.assign(justPairs, newGroups[group]);
  });
  for (const pair in justPairs) {
    let val = justPairs[pair];
    while (val.startsWith('{')) {
      let name = refToName(justPairs[pair]);
      if (!justPairs[name]) {
        throw new Error(`The token reference name '${name}' does not exist.`);
      }
      val = justPairs[name];
    }
    justPairs[pair] = val;
  } 
  return justPairs;
}

export { findTrueValues }
