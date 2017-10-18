'use strict';

var should = require('chai').should();
var luxcore = require('../');

describe('#versionGuard', function() {
  it('global._luxcore should be defined', function() {
    should.equal(global._luxcore, luxcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      luxcore.versionGuard('version');
    }).should.throw('More than one instance of luxcore');
  });
});
