import jetpack from 'fs-jetpack';
import { findDuplicates } from "./findDuplicates.js";
import { findTrueValues } from "./findTrueValues.js";
import { flattenJSON } from './flattenJSON.js';
import { chooseTransform } from './chooseTransform.js';

const transform = (configPath, options) => {
  // If no config path argument, look for config file
  if (!configPath) {
    configPath = jetpack.find('./', { matching: 'tokens.config.json' })[0];
  }
  if (!configPath) {
    throw new Error('No config file found in current working directory.');
  }

  // Read the config file as JSON
  const config = jetpack.read(configPath, 'json');

  config.transforms.forEach(transform => {
    let from = jetpack.cwd(transform.from);
    // Keep track of tokens in one object
    let allTokens = {};
    from.find({ matching: ['*.tokens.json', '*.tokens'] }).forEach(path => {
      const json = from.read(path, 'json');
      const pairs = flattenJSON(json); 
      allTokens[path.split('.')[0]] = pairs;
    });
    
    // Resolve token references
    const resolvedPairs = findTrueValues(allTokens);
    // Exit if there are duplicate token names
    const duplicates = findDuplicates(Object.keys(resolvedPairs));
    if (duplicates.length) {
      throw new Error(`You have duplicate token names: ${duplicates.join(', ')}`);
    }

    // Place true values back into categorized object
    for (let group in allTokens) {
      Object.keys(allTokens[group]).forEach(token => {
        allTokens[group][token] = resolvedPairs[token];
      });
    }

    // If the transform has a name, concatenate under name
    if (transform.name) {
      transform.to.forEach(format => {
        let code = chooseTransform(resolvedPairs, format.as, transform.name);
        let formatTo = jetpack.cwd(format.to);
        let newPath = `${transform.name}.tokens.${format.as}`;
        formatTo.write(newPath, code);
      });
      return;
    // Otherwise, create separate files after file names
    } else {
      for (let group in allTokens) {
        transform.to.forEach(format => {
          let code = chooseTransform(allTokens[group], format.as, group);
          let formatTo = jetpack.cwd(format.to);
          let newPath = `${group}.tokens.${format.as}`;
          formatTo.write(newPath, code);
        });        
      }
    }
  });
}

export { transform }