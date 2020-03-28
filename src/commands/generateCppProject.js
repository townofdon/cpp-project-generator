
const path = require('path');
const errorIfPathPresent = require('../utils/error/errorIfPathPresent');
const readFile = require('../utils/fs/readFile');
const writeFile = require('../utils/fs/writeFile');
const createDirectory = require('../utils/fs/createDirectory');

function generateCppProject(projectName) {
  const projectPath = path.resolve(process.cwd(), projectName);
  const projectSourcesPath = path.resolve(projectPath, 'Sources');
  const mainFilePath = path.resolve(projectSourcesPath, 'main.cpp');

  errorIfPathPresent(projectPath);
  errorIfPathPresent(projectSourcesPath);
  errorIfPathPresent(mainFilePath);

  const templatePath = path.resolve(global.appRoot, 'templates/main.cpp');
  const template = readFile(templatePath);

  createDirectory(projectPath);
  createDirectory(projectSourcesPath);
  writeFile(mainFilePath, template);
}

module.exports = generateCppProject;
