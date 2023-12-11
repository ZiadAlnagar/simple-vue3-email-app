module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  overrides: [],
  plugins: [],
  rules: {
    "vue/multi-word-component-names": 0,
    "@typescript-eslint/no-this-alias": 0,
  },
};
