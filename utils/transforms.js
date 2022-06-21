import jetpack from 'fs-jetpack';
import { flattenJSON } from './flattenJSON.js';
import { transform } from './transform.js';

const transforms = (configPath, options) => {
  const config = jetpack.read(configPath, 'json');
  config.transforms.forEach(t => {
    let src = jetpack.cwd(t.src);
    let dst = jetpack.cwd(t.dst);
    src.find({ matching: "*.tokens.json" }).forEach((path) => {
      const json = src.read(path, 'json');
      const pairs = flattenJSON(json);
      const customProps = transform(pairs, t.as);
      const newPath = `${path.split('.')[0]}.tokens.${t.as}`;
      dst.write(newPath, customProps);
    });
  });

}

export { transforms }