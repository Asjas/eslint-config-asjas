module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "./rules/base",
    "./rules/import",
    "./rules/node",
    "./rules/promise",
    "./rules/security",
    "eslint-config-prettier",
  ].map(require.resolve),
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
