#!/usr/bin/env node

const path = require('path');

const generateCppProject = require('./commands/generateCppProject');
const errorIfNotPresent = require('./utils/error/errorIfNotPresent');

global.appRoot = path.resolve(__dirname);

async function main() {
  const args = process.argv.splice(process.execArgv.length + 2);
  const [projectName] = args;

  errorIfNotPresent(projectName, 'arg <project_name>');

  await generateCppProject(projectName);

  console.log('✓ Success!');
  process.exit(0);
}

main();
