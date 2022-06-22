import jetpack from 'fs-jetpack';
import { findTrueValues } from "./findTrueValues.js";
import { flattenJSON } from './flattenJSON.js';
import { transform } from './transform.js';

const transforms = (configPath, options) => {
  if (!configPath) {
    configPath = jetpack.find('./', { matching: 'tokens.config.json' })[0];
  }
  if (!configPath) {
    throw new Error('No config file found in current working directory.');
  }
  const config = jetpack.read(configPath, 'json');
  config.transforms.forEach(t => {
    let from = jetpack.cwd(t.from);
    let to = t.to;
    from.find({ matching: ['*.tokens.json', '*.tokens'] }).forEach((path) => {
      const json = from.read(path, 'json');
      const pairs = flattenJSON(json);
      const resolvedPairs = findTrueValues(pairs);
      to.forEach(format => {
        let code = transform(resolvedPairs, format.as);
        let formatTo = jetpack.cwd(format.to);
        let newPath = `${path.split('.')[0]}.tokens.${format.as}`;
        formatTo.write(newPath, code);
      });
    });
  });

}

export { transforms }