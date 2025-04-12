module.exports = {
  extends: [
    "./rules/base",
    "./rules/import",
    "./rules/promise",
    "./rules/node",
    "./rules/typescript",
    "./rules/security",
    "eslint-config-prettier",
  ].map(require.resolve),
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    browser: false,
    node: true,
    es2019: true,
  },
};
