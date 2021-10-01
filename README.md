# Express Typescript ES2020 Boilerplate

[![Node.js version][nodejs-badge]][nodejs]
[![Express version][express-badge]][express]
[![TypeScript version][ts-badge]][typescript-4-4]
[![JavaScript version][es2020-badge]][es2020]
[![APLv2][license-badge]][license]

This is a minimal boilerplate project for starting a new express project written in 
Typescript and ES2020. It includes scripts for compiling and running the project.

You can also read more details about this boilerplate here: https://patrick-h-zaw.medium.com/node-express-typescript-and-es2020-boilerplate-ed2ba9164a40

## Requirements
You will need the following installed:
- Yarn: https://yarnpkg.com
- Node.js 14.18.0: https://nodejs.org

## Getting started
### Clone the git repo
Clone the repo and run `yarn` to install dependencies.
```
git clone https://github.com/patrickzaw/express-typescript-es2020-boilerplate.git
cd express-typescript-es2020-boilerplate
yarn
```

### Compiling and running
To compile and run the project:
```
yarn start
```

## Features
* Uses Node.js native support for ES2020 - https://node.green
* Uses gulp tasks for compiling and starting server - https://gulpjs.com 
* Watches for code changes using nodemon and recompiles and restarts the server

## Notes
* The `import` must be relative files with the `.js` file extensions and not `.ts` i.e. `import sampleClass from "./src/sampleClass.js";`
* Because ES2020 is supported by later Node.js versions, note that the typescript compiler option for `module` is `ES2020` and not `commonjs`
* This `dist` folder is where the code is compiled and run

[es2020-badge]: https://img.shields.io/badge/JavaScript->=%20ES2020-blue.svg
[es2020]: https://nodejs.org/dist/latest-v14.x/docs/api/
[express-badge]: https://img.shields.io/badge/Express->=%204.17.3-blue.svg
[express]: https://nodejs.org/dist/latest-v14.x/docs/api/
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2014.18.0-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[ts-badge]: https://img.shields.io/badge/TypeScript-4.4.3-blue.svg
[typescript-4-4]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
