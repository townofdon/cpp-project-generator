'use strict';

const fs = require('fs');

const logSuccess = require('../log/logSuccess');
const logNotice = require('../log/logNotice');
const logError = require('../log/logError');

/**
 * Write to a file.
 * @param {string} path - the absolute path
 * @param {string} content
 */
module.exports = function writeFile(path, content) {
  logNotice(`>> writing ${path} ... `);

  try {
    fs.writeFileSync(path, content);
  } catch (err) {
    logError(err);
    logNotice(err.stack);
    return;
  }

  logSuccess('success!');
};
