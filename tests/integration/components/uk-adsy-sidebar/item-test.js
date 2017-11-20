import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk adsy sidebar/item', function() {
  setupComponentTest('uk-adsy-sidebar/item', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-adsy-sidebar/item}}
    //     template content
    //   {{/uk-adsy-sidebar/item}}
    // `);

    this.render(hbs`{{uk-adsy-sidebar/item}}`);
    expect(this.$()).to.have.length(1);
  });
});
