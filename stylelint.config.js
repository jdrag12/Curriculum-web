module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-scss"],
  rules: {
    "selector-nested-pattern": "^&",
    "selector-class-pattern":
      "^.[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
    "unit-whitelist": ["%", "px", "em", "deg"],
    indentation: 2,
    "no-descending-specificity": null,
    "no-eol-whitespace": null,
    "declaration-empty-line-before": null,
    "value-keyword-case": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["apply", "responsive", "variants", "screen", "use"]
      }
    ]
  }
};
