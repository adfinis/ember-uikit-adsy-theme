import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk adsy sidebar/list', function() {
  setupComponentTest('uk-adsy-sidebar/list', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-adsy-sidebar/list}}
    //     template content
    //   {{/uk-adsy-sidebar/list}}
    // `);

    this.render(hbs`{{uk-adsy-sidebar/list}}`);
    expect(this.$()).to.have.length(1);
  });
});
