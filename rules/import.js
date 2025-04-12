module.exports = {
  plugins: ["import"],
  extends: ["plugin:import/errors", "plugin:import/warnings"],
  rules: {
    "import/no-unresolved": 0,
    "import/extensions": [
      2,
      {
        ignorePackages: true,
        pattern: {
          js: "never",
          ts: "never",
          tsx: "never",
          mjs: "always",
        },
      },
    ],
  },
};
