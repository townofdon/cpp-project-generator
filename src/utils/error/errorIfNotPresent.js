'use strict';

const exitWithError = require('../error/exitWithError');

module.exports = function errorIfNotPresent(item, itemName = 'var') {
  if (item === null || item === undefined) {
    exitWithError(`${itemName} is required.`);
  }
};
