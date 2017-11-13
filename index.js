/* eslint-env node */
'use strict'

const path = require('path')

module.exports = {
  name: 'ember-uikit-adsy-theme',

  included() {
    this._super.included.apply(this, arguments)

    let app

    // Climb up the hierarchy of addons up to the host
    // If the addon has the `_findHost()` method (in ember-cli >= 2.7.0) then use it
    if (typeof this._findHost === 'function') {
      app = this._findHost()
    } else {
      // Otherwise, use the copied `_findHost()` implementation
      // https://github.com/ember-cli/ember-cli/blob/v2.15.1/lib/models/addon.js#L614-L625
      let current = this
      do {
        app = current.app || app
      } while (current.parent.parent && (current = current.parent))
    }

    this.app = app

    // see: http://ember-cli.com/extending/#broccoli-build-options-for-in-repo-addons
    app.options = app.options || {}

    // Build path to Bulma's sass paths
    let uikitPath = path.dirname(require.resolve('uikit/src/scss/uikit.scss'))

    app.options.sassOptions = app.options.sassOptions || {}
    app.options.sassOptions.includePaths =
      app.options.sassOptions.includePaths || []

    // Import sass dependencies
    app.options.sassOptions.includePaths.push(uikitPath)

    app.import(require.resolve('uikit/dist/js/uikit.min.js'))
    app.import(require.resolve('uikit/dist/js/uikit-icons.min.js'))
  }
}
