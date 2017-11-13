/* eslint-env node */

module.exports = {
  normalizeEntityName: name => name,

  afterInstall() {
    return this.addAddonToProject('ember-cli-sass')
  }
}
