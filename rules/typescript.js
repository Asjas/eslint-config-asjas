module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/restrict-plus-operands": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: false,
      },
    ],
    "@typescript-eslint/await-thenable": 2,
    "@typescript-eslint/no-floating-promises": 2,
    "@typescript-eslint/promise-function-async": 2,
  },
};
