# Design Tokens CLI

A design-tokens-format-adhering token transformation CLI (Command Line Interface).

## Supports

* Converting from design tokens in the [standard JSON format](https://design-tokens.github.io/community-group/format/) to CSS (custom properties), Sass (scss) variables, and ES modules
* (Chained) token reference resolution
* Composite tokens (`$value`s as objects)
* `*.tokens.json` and `*.tokens` file types

## Getting started

### Installation

Install the CLI globally using **npm**:

```
npm i -g design-tokens-cli
```

### Configuration

Transformations are defined using a master config file. From the example folder: 

```
{
  "transforms": [
    {
      "from": "example/tokens",
      "to": [
        {
          "as": "scss",
          "to": "example/scss"
        },
        {
          "as": "css",
          "to": "example/css"
        },
        {
          "as": "mjs",
          "to": "example/js"
        }      
      ]
    }
  ]
}
```

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

