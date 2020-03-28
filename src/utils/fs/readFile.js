'use strict';

const fs = require('fs');

/**
 * Read a file and return the content as a string.
 * @param {string} filePath
 * @param {boolean} shouldThrowError
 * @returns {string|null}
 * @throws {error}
 */
module.exports = function readFile(filePath, shouldThrowError = false) {
  let content = '';
  try {
    const buf = fs.readFileSync(filePath);
    content = buf.toString();
  } catch (err) {
    // file-not-found error.
    if (err instanceof Error && err.code === 'ENOENT') {
      if (shouldThrowError) {
        throw err;
      }
      return null;
    }
    // non file-not-found error. should always be thrown.
    throw err;
  }
  return content;
};
