import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | uk adsy topbar/container', function() {
  setupComponentTest('uk-adsy-topbar/container', {
    integration: true
  })

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-adsy-topbar/container}}
    //     template content
    //   {{/uk-adsy-topbar/container}}
    // `);

    this.render(hbs`{{uk-adsy-topbar/container}}`)
    expect(this.$()).to.have.length(1)
  })
})
