#!/usr/bin/env node

const generateCppProject = require('./commands/generate-cpp-project');

async function main() {
  await generateCppProject();

  console.log('✓ Success!');
  process.exit(0);
}

main();
