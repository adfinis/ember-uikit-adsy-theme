/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const Merge = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-uikit-adsy-theme',

  treeForPublic(tree) {
    let firaSans = new Funnel('node_modules/typeface-fira-sans/files', {
      include: ['*.woff', '*.woff2'],
      destDir: '/assets/files/'
    });

    let firaMono = new Funnel('node_modules/typeface-fira-mono/files', {
      include: ['*.woff', '*.woff2'],
      destDir: '/assets/files/'
    });

    return new Merge([firaSans, firaMono, tree].filter(Boolean));
  }
};
