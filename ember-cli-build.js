/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let options = {
    snippetPaths: ['tests/dummy/app/snippets'],
    fingerprint: {
      prepend: 'https://anehx.github.io/ember-uikit-adsy-theme/'
    },
    includeHighlightJS: false,
    includeHighlightStyles: false
  };

  let app = new EmberAddon(defaults, options);

  app.import('vendor/highlight.pack.js', {
    using: [{ transformation: 'amd', as: 'highlight.js' }]
  });

  app.import('vendor/atom-one-light.css');

  return app.toTree();
};
