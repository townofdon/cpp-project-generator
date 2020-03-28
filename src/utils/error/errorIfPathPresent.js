'use strict';

const exitWithError = require('../error/exitWithError');
const isFilePresent = require('../fs/isFilePresent');
const isDirectoryPresent = require('../fs/isDirectoryPresent');

module.exports = function errorIfPathPresent(pathAbsolute = '', helperText = '') {
  if (typeof pathAbsolute !== 'string') {
    exitWithError(`\`pathAbsolute\` must be a string! Got: ${pathAbsolute}`);
  }
  const isFile = pathAbsolute && pathAbsolute.indexOf('.') > -1;
  const isPresent = isFile
    ? isFilePresent
    : isDirectoryPresent;
  if (isPresent(pathAbsolute)) {
    exitWithError(`${pathAbsolute} already exists. ${helperText}`);
  }
};
