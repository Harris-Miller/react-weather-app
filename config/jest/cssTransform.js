'use strict';

const objectHash = require('object-hash');

// This is a custom Jest transformer turning style imports into
// a constant object. Fill that object with any key/value pairs you need for testing
// http://facebook.github.io/jest/docs/tutorial-webpack.html

const cssObject = {
};

module.exports = {
  process() {
    return `module.exports = ${JSON.stringify(cssObject)};`;
  },
  getCacheKey() {
    return `${objectHash(cssObject)}`;
  },
};
