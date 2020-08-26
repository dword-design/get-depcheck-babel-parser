<!-- TITLE/ -->
# depcheck-parser-babel
<!-- /TITLE -->

<!-- BADGES/ -->
[![NPM version](https://img.shields.io/npm/v/depcheck-parser-babel.svg)](https://npmjs.org/package/depcheck-parser-babel)
![Linux macOS Windows compatible](https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue)
[![Build status](https://img.shields.io/github/workflow/status/dword-design/depcheck-parser-babel/build)](https://github.com/dword-design/depcheck-parser-babel/actions)
[![Coverage status](https://img.shields.io/coveralls/dword-design/depcheck-parser-babel)](https://coveralls.io/github/dword-design/depcheck-parser-babel)
[![Dependency status](https://img.shields.io/david/dword-design/depcheck-parser-babel)](https://david-dm.org/dword-design/depcheck-parser-babel)
![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)

<a href="https://www.buymeacoffee.com/dword">
  <img
    src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
    alt="Buy Me a Coffee"
    height="32"
  >
</a><a href="https://gitpod.io/#https://github.com/dword-design/depcheck-parser-babel">
  <img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod">
</a>
<a href="https://paypal.me/SebastianLandwehr">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
    alt="PayPal"
    height="30"
  >
</a>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
A depcheck babel parser that uses an existing babel config instead of a fixed set of plugins.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# NPM
$ npm install depcheck-parser-babel

# Yarn
$ yarn add depcheck-parser-babel
```
<!-- /INSTALL -->

## Usage

Start by creating a `.babelrc.json` file with your babel config, if needed.

Custom parsers are currently only supported when using `depcheck` via the Node.js API. Simply add the parser to your parser config and run depcheck:

```js
import depcheck from 'depcheck'
import parserBabel from 'depcheck-parser-babel'

const options = {
  parsers: {
    '*.js': parserBabel,
  },
}

depcheck('/path/to/your/project', options, (unused) => {
  console.log(unused.dependencies); // an array containing the unused dependencies
  console.log(unused.devDependencies); // an array containing the unused devDependencies
  console.log(unused.missing); // a lookup containing the dependencies missing in `package.json` and where they are used
  console.log(unused.using); // a lookup indicating each dependency is used by which files
  console.log(unused.invalidFiles); // files that cannot access or parse
  console.log(unused.invalidDirs); // directories that cannot access
})
```

<!-- LICENSE/ -->
## License

Unless stated otherwise all works are:

Copyright &copy; Sebastian Landwehr <info@dword-design.de>

and licensed under:

[MIT License](https://opensource.org/licenses/MIT)
<!-- /LICENSE -->