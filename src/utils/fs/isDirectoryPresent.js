
const fs = require('fs');

/**
 * Determine if a directory is present.
 * See: https://stackoverflow.com/a/14392235/4262653
 *
 * @param {string} dir
 * @returns {boolean}
 */
module.exports = function isDirectoryPresent(dir) {
  try {
    fs
      .readdirSync(dir);
    return true;
  } catch (err) {
    if (err instanceof Error && err.code === 'ENOENT') {
      return false;
    }
    throw err;
  }
};
