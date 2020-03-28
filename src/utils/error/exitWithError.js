'use strict';

const logError = require('../log/logError');

/**
 * Alert the user to their ignorance and halten das Skript
 * @param {string} message
 */
module.exports = function exitWithError(message) {
  logError(message);
  process.exit(1);
};
