import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk adsy topbar/brand', function() {
  setupComponentTest('uk-adsy-topbar/brand', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-adsy-topbar/brand}}
    //     template content
    //   {{/uk-adsy-topbar/brand}}
    // `);

    this.render(hbs`{{uk-adsy-topbar/brand}}`);
    expect(this.$()).to.have.length(1);
  });
});
