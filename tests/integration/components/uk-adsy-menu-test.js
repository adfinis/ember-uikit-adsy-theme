import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | uk-adsy-menu", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{uk-adsy-menu}}`);

    assert.dom(this.element).hasText("");

    // Template block usage:
    await render(hbs`
      {{#uk-adsy-menu}}
        template block text
      {{/uk-adsy-menu}}
    `);

    assert.dom(this.element).containsText("template block text");
  });
});
