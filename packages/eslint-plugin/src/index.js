// @ts-check
"use strict";

module.exports = {
  configs: {
    recommended: require("./configs/recommended"),
  },
  rules: {
    "no-const-enum": require("./rules/no-const-enum"),
    "no-export-all": require("./rules/no-export-all"),
  },
};
