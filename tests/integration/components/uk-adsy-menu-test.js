import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describe('Integration | Component | uk adsy menu', function() {
  setupComponentTest('uk-adsy-menu', {
    integration: true
  })

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-adsy-menu}}
    //     template content
    //   {{/uk-adsy-menu}}
    // `);

    this.render(hbs`{{uk-adsy-menu}}`)
    expect(this.$()).to.have.length(1)
  })
})
