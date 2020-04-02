module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-scss"],
  rules: {
    // "selector-nested-pattern": "^&",
    "selector-class-pattern": "[a-z][a-z0-9]*(-[a-z0-9]+)*",
    "scss/selector-no-redundant-nesting-selector": true,
    "unit-whitelist": ["%", "px", "em", "deg", "s"],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "apply",
          "sass",
          "responsive",
          "variants",
          "screen",
          "use"
        ]
      }
    ]
  }
};
