'use strict';
import { flatten } from "../utils/flatten.js";

test('Sorts an object\'s keys alphabetically', () => {
  const tokens = {
    "brand": {
      "size": {
        "big": {
          "$value": "2em"
        },
        "small": {
          "$value": "1em"
        }
      },
      "color": {
        "acid green": {
          "$value": "#00ff66"
        },
        "hot pink": {
          "$value": "#dd22cc",
          "$description": "That’s hot!"
        }
      }
    }
  }

  const arrays = flatten(tokens);
  
  expect(arrays.at(0)[1]).toBe('size');
  expect(arrays.at(1)[3]).toBe('1em');
});