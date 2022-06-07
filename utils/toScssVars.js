const toScssVars = tokensObject => {
  let string = '';
  Object.keys(tokensObject).forEach(key => {
    string += `$${key}: ${tokensObject[key]};\n`;
  });
  return string;
}

export { toScssVars }