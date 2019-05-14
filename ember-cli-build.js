"use strict";

const EmberAddon = require("ember-cli/lib/broccoli/ember-addon");

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    sassOptions: { implementation: require("node-sass") },
    snippetPaths: ["tests/dummy/app/snippets"],
    includeHighlightJS: false,
    includeHighlightStyles: false
  });

  app.import("vendor/highlight.pack.js", {
    using: [{ transformation: "amd", as: "highlight.js" }]
  });

  app.import("vendor/atom-one-light.css");

  return app.toTree();
};
