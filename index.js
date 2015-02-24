/*!
 * odd <https://github.com/jonschlinkert/odd>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isOdd = require('is-odd');

module.exports = function odd(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('odd expects an array.');
  }
  return arr.filter(isOdd);
};
