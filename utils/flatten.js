const flatten = object => {
  const existingObjects = [];
  const path = [];
  const tokensArrays = [];
  (function find(object) {
    for (const key of Object.keys(object)) {
      if (key === '$value') {
        path.push(object[key]);
        tokensArrays.push([...path]);
        path.pop();
      }
      const o = object[key];
      if (o && typeof o === "object" && !Array.isArray(o)) {
        if (!existingObjects.find(object => object === o)) {
          path.push(key);
          existingObjects.push(o);
          find(o);
          path.pop();
        }
      }
    }
  }(object));
  return tokensArrays;  
}

export { flatten }