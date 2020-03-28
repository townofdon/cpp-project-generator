# C++ Project Generator

Create SUPER basic project template for C++.

I was most familiar with node.js so creating this script was the path of least resistance.
Since Visual Studio is not available for MacOS users I wanted a quick way to spin up new c++ projects.

## Project notes

- I may add additional build+run commands in the future, I may not
- Visual Studio Code has quite a few helpful add-ons for C++ for building and testing code,
  so that's probably the biggest deterrent to this project going anywhere
- This only intended for learning and discovery and NOT intended to replace an IDE
- If you're doing any serious C++ development I'd give serious pause before using this package, instead recommend:
  - Get a windows machine instead
  - Develop in Microsoft Visual Studio

## Installation

```
npm install -g cpp-project-generator
```

## Command usage

```
cd <path>
gen-cpp <project_name> <args>
```

### Args

- `<project_name>` - New project folder name e.g. `cpp-tutorial-01`
- `<args>` - Documentation TBA
