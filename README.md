# `ESLint + Prettier Config`

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm version](https://badge.fury.io/js/eslint-config-asjas.svg)](https://badge.fury.io/js/eslint-config-asjas)

## Supported Node.js versions

The latest versions of the following Node.js versions are tested and supported.

- 12
- 14
- 16

### Installation instructions (eslint-config-asjas)

Install the package using `npm`:

```sh
npm i -D --save-exact eslint-config-asjas
```

or `yarn`:

```sh
yarn add eslint-config-asjas
```

or `pnpm`:

```sh
pnpm add eslint-config-asjas
```

## Configs

### ESLint Config

Create a file named `.eslintrc` in the root folder of the project. Then add one of the following configs.

#### JavaScript Config

```json
{
  "extends": ["eslint-config-asjas/javascript"],
  "rules": {}
}
```

#### TypeScript Config

```json
{
  "extends": ["eslint-config-asjas/typescript"],
  "parserOptions": {
    "tsconfigRootDir": ".",
    "project": "tsconfig.json"
  },
  "rules": {}
}
```

#### Node.js Config

```json
{
  "extends": ["eslint-config-asjas/node"],
  "rules": {}
}
```

#### Node.js TypeScript Config

```json
{
  "extends": ["eslint-config-asjas/node-typescript"],
  "parserOptions": {
    "tsconfigRootDir": ".",
    "project": "tsconfig.json"
  },
  "rules": {}
}
```

#### React Config

```json
{
  "extends": ["eslint-config-asjas/react"],
  "rules": {}
}
```

#### React TypeScript Config

```json
{
  "extends": ["eslint-config-asjas/react-typescript"],
  "parserOptions": {
    "tsconfigRootDir": ".",
    "project": "tsconfig.json"
  },
  "rules": {}
}
```

#### ESLint Ignore

You can create a `.eslintignore` file and then add any files or folders to it that you do not want ESLint to lint.

```json
# don't ever lint node_modules
node_modules

# don't lint build output (make sure it's set to your correct build folder name)
dist
build

# don't lint cache output
.cache
.next
.vercel
.keystone

# don't lint nyc coverage output
coverage

# don't link vscode project settings
.vscode

# don't lint tooling config files
postcss.config.js
remix.config.js
jest.setup.js
tailwind.config.js
```

### Prettier Config

Create a file named `.prettierrc.js` in the root folder of the project. Then add the following config.

```js
module.exports = {
  ...require("eslint-config-asjas/prettier"),
};
```

## NPM Scripts

You can add the following NPM scripts to your `package.json` file to simplify the linting and formatting of your code.

In a mono-repo you might need to change `.gitignore` to `../.gitignore` to reference a valid Git ignore file.

```json
"scripts": {
  "build": "replace with your build command",
  "check-types": "tsc",
  "lint": "eslint --ext .js,.mjs,.ts,.tsx .",
  "lint-fix": "npm run lint -- --fix",
  "prettier": "prettier --ignore-path .eslintignore \"**/**/*.+(js|mjs|json|ts|tsx|md|mdx)\"",
  "format": "npm run prettier -- --write",
  "check-format": "npm run prettier -- --list-different",
  "validate": "npm-run-all --parallel check-types check-format lint build"
}
```

## Husky and lint-staged

The packages `husky` and `lint-staged` are used to create pre-commit hooks to check our code.

### Installation instructions (Husky and lint-staged)

```sh
npm i -D npm-run-all husky lint-staged
```

#### Configuration (Husky and lint-staged)

Add these fields to your `package.json` file.

```json
"husky": {
  "hooks": {
    "pre-commit": "npm run check-types && lint-staged && npm run build"
  }
},
"lint-staged": {
  "*.+(js|mjs|ts|tsx)": [
    "eslint"
  ],
  "**/**/*.+(js|mjs|json|ts|tsx|md|mdx)": [
    "prettier --write",
    "git add"
  ]
},
```

## VS Code extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### VS Code settings

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true
}
```
