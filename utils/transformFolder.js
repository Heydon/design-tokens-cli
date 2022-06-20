import jetpack from 'fs-jetpack';
import { transform } from "./transform.js";
import { toCustomProps } from "./toCustomProps.js";

const src = jetpack.cwd('example/in');
const dst = jetpack.cwd('example/out');

src.find({ matching: "*.tokens.json" }).forEach((path) => {
  const json = src.read(path, 'json');
  const transformed = transform(json);
  const customProps = toCustomProps(transformed);
  const newPath = `${path.split('.')[0]}.css`;
  dst.write(newPath, customProps);
});
