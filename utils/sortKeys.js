const sortKeys = object => {
  return Object.keys(object)
    .sort()
    .reduce((acc, key) => ({
        ...acc, [key]: object[key]
    }), {});
}

export { sortKeys }