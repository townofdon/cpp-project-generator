
function templatize(t, spaces = 4) {
  return (t || '')
    .toString()
    .replace(new RegExp(`\\n\\s{${spaces}}`, 'g'), '\n');
}

function templateCpp() {
  return templatize(`
    #include <iostream>

    using namespace std;

    int main() {
      // begin the awesome

      return 0;
    }
  `);
}


function generateCppProject(projectPath) {

  // if project path already exists, err

  // mkdir /<projectPath>

  // mkdir /<projectPath>/Sources

  // createFile /<projectPath>/Sources/main.cpp

  const template = templateCpp();
}

module.exports = generateCppProject;
