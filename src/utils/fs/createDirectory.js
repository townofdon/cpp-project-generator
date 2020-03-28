'use strict';

const fs = require('fs');

const logSuccess = require('../log/logSuccess');
const logNotice = require('../log/logNotice');
const logError = require('../log/logError');

/**
 * Create a directory.
 * @param {string} path - the absolute path
 * @returns {Error|null}
 */
module.exports = function createDirectory(path) {
  logNotice(`>> creating dir: ${path} ... `);

  try {
    fs.mkdirSync(path);
  } catch (err) {
    logError(err);
    logNotice(err.stack);
    return err;
  }

  logSuccess('success!');
  return null;
};
