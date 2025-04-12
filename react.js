module.exports = {
  extends: [
    "./rules/base",
    "./rules/import",
    "./rules/promise",
    "./rules/react",
    "./rules/security",
    "eslint-config-prettier",
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: "module",
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
};
