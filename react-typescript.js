module.exports = {
  extends: [
    "./rules/base",
    "./rules/import",
    "./rules/promise",
    "./rules/react",
    "./rules/typescript",
    "./rules/security",
    "eslint-config-prettier",
  ].map(require.resolve),
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: "module",
    ignorePatterns: ["babel.config.js"],
  },
  env: {
    browser: true,
    es2019: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { name: "Link", linkAttribute: "to" },
      "Hyperlink",
      { name: "Link", linkAttribute: "href" },
    ],
  },
  rules: {
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".tsx"],
      },
    ],
  },
};
