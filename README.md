# Design Tokens CLI

A design-tokens-format-adhering token transformation CLI (Command Line Interface).

## Supports

- [x] Converting from design tokens in the [standard JSON format](https://design-tokens.github.io/community-group/format/)... 
- [x] ...to CSS (custom properties)
- [x] ...to Sass (scss) variables 
- [x] ...to ES modules
- [x] ...to JSON (flattened to name/value pairs)
- [x] (Chained) token reference resolution
- [x] Reference resolution _between_ separate tokens files in one transform
- [ ] Reference resolution _between_ separate tokens _between_ separate transforms
- [x] Composite tokens (`$value`s as objects)
- [x] `*.tokens.json` and `*.tokens` file types
- [x] Concatenation of separate token files under a single name

## Getting started

### Installation

Install the CLI globally using **npm**:

```
npm i -g design-tokens-cli
```

### Configuration

Transformations are defined using a master config file. Here is a configuration with just one transform: 

```json
{
  "transforms": [
    {
      "from": "origin/tokens",
      "to": [
        {
          "as": "scss",
          "to": "destination/scss"
        },
        {
          "as": "css",
          "to": "destinatione/css"
        },
        {
          "as": "mjs",
          "to": "destination/js"
        }      
      ]
    }
  ]
}
```

#### Formats

The `to` array for each transformation lists the formats you want and their respective output folders. The `as` property must be the file extension for the output format. Both `mjs` and `js` output ES modules.

### Running the transforms

Either you explicitly define the path to the config file&hellip;

```
designTokens transform ./path/to/my-config.json
```

&hellip;or you leave that argument out and the CLI will look for a `tokens.config.json` file anywhere in the current working directory:

```
designTokens transform
```

## File names and groups

By convention, the file name for each tokens file found in `from` represents the top level "group" name for those tokens. In practice, this means converting **/origin/tokens/color-greyscale.tokens.json** will result in a set of tokens each prefixed with `color-greyscale-`. For js/mjs transformations the file would look something like the following, with `color-greyscale` converted into camel case:

```js
export const colorGreyscale = {
  'color-black': '#000000',
  'color-blanche': '#ffffff',
}
```

## Concatenation 

If the transform has a `name` property, multiple files found in the `from` origin will be concatenated into a single output file of that name. Take the following example:

```json
{
  "transforms": [
    {
      "name": "layout",
      "from": "origin/tokens",
      "to": [
        {
          "as": "css",
          "to": "destination/css"
        }   
      ]
    }
  ]
}
```

Where there are **breakpoints.tokens.json** and **sizes.tokens.json** files in **/origin/tokens**, their tokens will be placed in the same **/destination/css/layout.tokens.css** file. Without the `name`, separate  **breakpoints.tokens.css** and **sizes.tokens.css** files would be made.
