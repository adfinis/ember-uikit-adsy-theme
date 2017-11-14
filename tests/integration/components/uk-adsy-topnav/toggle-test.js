import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uk-adsy-topnav/toggle', 'Integration | Component | uk adsy topnav/toggle', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uk-adsy-topnav/toggle}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uk-adsy-topnav/toggle}}
      template block text
    {{/uk-adsy-topnav/toggle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
