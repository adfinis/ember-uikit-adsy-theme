import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uk-adsy-topnav/list', 'Integration | Component | uk adsy topnav/list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uk-adsy-topnav/list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uk-adsy-topnav/list}}
      template block text
    {{/uk-adsy-topnav/list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
