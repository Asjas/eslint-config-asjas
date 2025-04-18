module.exports = {
  plugins: ["react", "react-hooks", "jsx-a11y"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    // Custom React rules
    "react/button-has-type": 2,
    "react/display-name": 1,
    "react/forbid-prop-types": 0,
    "react/no-array-index-key": 2,
    "react/no-children-prop": 0,
    "react/no-unescaped-entities": 0,
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 2,
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js"],
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],

    // Custom React Hooks rules
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,

    // Custom Accessibility rules
    "jsx-a11y/accessible-emoji": 2,
    "jsx-a11y/img-redundant-alt": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        assert: "either",
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      1,
      {
        aspects: ["invalidHref"],
      },
    ],
  },
};
