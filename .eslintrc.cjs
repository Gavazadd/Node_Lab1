module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "plugin:sonarjs/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  " plugins": ["sonarjs"],
  rules: {},
};
