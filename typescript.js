module.exports = {
  extends: [
    "./rules/base",
    "./rules/import",
    "./rules/promise",
    "./rules/typescript",
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
    browser: true,
    es2019: true,
  },
};
