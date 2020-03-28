
const path = require('path');
const errorIfPathPresent = require('../utils/error/errorIfPathPresent');
const readFile = require('../utils/fs/readFile');

function generateCppProject(projectPath) {

  // if project path already exists, err

  errorIfPathPresent(projectPath);

  // mkdir /<projectPath>

  // mkdir /<projectPath>/Sources

  const template = readFile(path.resolve(process.cwd(), 'src/templates/main.cpp'));

  console.log(template);

  // createFile /<projectPath>/Sources/main.cpp
}

module.exports = generateCppProject;
