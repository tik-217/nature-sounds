const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      semi: ["off"],
      "no-unused-vars": ["warn"],
    },
  },
  pluginJs.configs.recommended,
];
