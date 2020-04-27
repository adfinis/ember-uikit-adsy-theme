/* eslint-env node */
"use strict";

const funnel = require("broccoli-funnel");
const Merge = require("broccoli-merge-trees");

module.exports = {
  name: require("./package").name,

  included() {
    this._super.included.apply(this, arguments);
  },

  treeForPublic(tree) {
    let sourceSansPro = funnel("node_modules/typeface-source-sans-pro/files", {
      include: ["*.woff", "*.woff2"],
      destDir: "/assets/files/",
    });

    let sourceCodePro = funnel("node_modules/typeface-source-code-pro/files", {
      include: ["*.woff", "*.woff2"],
      destDir: "/assets/files/",
    });

    return new Merge([sourceSansPro, sourceCodePro, tree].filter(Boolean));
  },
};
