/*!
 * odd <https://github.com/jonschlinkert/odd>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var should = require('should');
var odd = require('./');

describe('odd', function () {
  it('should filter the odd numbered items from an array:', function () {
    odd([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).should.eql([1, 3, 5, 7, 9]);
  });

  it('should work with strings:', function () {
    odd(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']).should.eql(['1', '3', '5', '7', '9']);
    odd(['0', 1, '2', 3, 4, 5, '6', '7', '8', '9', '10']).should.eql([1, 3, 5, '7', '9']);
  });

  it('should throw an error on bad args:', function () {
    (function () {
      odd();
    }).should.throw('odd expects an array.');
  });
});
