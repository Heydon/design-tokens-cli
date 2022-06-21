import jetpack from 'fs-jetpack';
import { flattenJSON } from './flattenJSON.js';
import { transform } from './transform.js';

const transforms = (configPath, options) => {
  const config = jetpack.read(configPath, 'json');
  config.transforms.forEach(t => {
    let from = jetpack.cwd(t.from);
    let to = t.to;
    from.find({ matching: ['*.tokens.json', '*.tokens'] }).forEach((path) => {
      const json = from.read(path, 'json');
      const pairs = flattenJSON(json);
      to.forEach(format => {
        let code = transform(pairs, format.as);
        let formatTo = jetpack.cwd(format.to);
        let newPath = `${path.split('.')[0]}.tokens.${format.as}`;
        formatTo.write(newPath, code);
      });
    });
  });

}

export { transforms }