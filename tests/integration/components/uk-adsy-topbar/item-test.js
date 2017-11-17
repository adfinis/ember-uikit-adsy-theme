import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | uk adsy topbar/item', function() {
  setupComponentTest('uk-adsy-topbar/item', {
    integration: true
  })

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-adsy-topbar/item}}
    //     template content
    //   {{/uk-adsy-topbar/item}}
    // `);

    this.render(hbs`{{uk-adsy-topbar/item}}`)
    expect(this.$()).to.have.length(1)
  })
})
