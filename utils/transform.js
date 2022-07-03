import jetpack from 'fs-jetpack';
import { findDuplicates } from "./findDuplicates.js";
import { findTrueValues } from "./findTrueValues.js";
import { flattenJSON } from './flattenJSON.js';
import { chooseTransform } from './chooseTransform.js';

const transform = (configPath, options) => {
  if (!configPath) {
    configPath = jetpack.find('./', { matching: 'tokens.config.json' })[0];
  }
  if (!configPath) {
    throw new Error('No config file found in current working directory.');
  }

  const config = jetpack.read(configPath, 'json');
  let groups = {};
  config.transforms.forEach(t => {
    let from = jetpack.cwd(t.from);
    from.find({ matching: ['*.tokens.json', '*.tokens'] }).forEach(path => {
      const json = from.read(path, 'json');
      const pairs = flattenJSON(json); 
      groups[path.split('.')[0]] = pairs;
    });
  });

  const resolvedPairs = findTrueValues(groups);
  
  const duplicates = findDuplicates(Object.keys(resolvedPairs));
  if (duplicates.length) {
    throw new Error(`You have duplicate token names: ${duplicates.join(', ')}`);
  }

  config.transforms.forEach(t => {
    let from = jetpack.cwd(t.from);
    let to = t.to

    /*if (t.name) {
      to.forEach(format => {
        let code = chooseTransform(resolvedPairs, format.as, t.name);
        let formatTo = jetpack.cwd(format.to);
        let newPath = `${t.name}.tokens.${format.as}`;
        formatTo.write(newPath, code);
      });
      return;
    }*/

    from.find({ matching: ['*.tokens.json', '*.tokens'] }).forEach(path => {
      const json = from.read(path, 'json');
      const pairs = flattenJSON(json); 
      Object.keys(pairs).forEach(key => {
        if (pairs[key].startsWith('{')) {
          pairs[key] = resolvedPairs[key];
        }
      });

      const groupName = path.split('.')[0];

      to.forEach(format => {
        let code = chooseTransform(pairs, format.as, groupName);
        let formatTo = jetpack.cwd(format.to);
        let newPath = `${groupName}.tokens.${format.as}`;
        formatTo.write(newPath, code);
      });       
    });
  });

}

export { transform }