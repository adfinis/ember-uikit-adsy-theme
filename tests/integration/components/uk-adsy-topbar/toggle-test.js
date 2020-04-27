import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | uk-adsy-topbar/toggle", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{uk-adsy-topbar/toggle}}`);

    assert.dom(this.element).hasText("");

    // Template block usage:
    await render(hbs`
      {{#uk-adsy-topbar/toggle}}
        template block text
      {{/uk-adsy-topbar/toggle}}
    `);

    assert.dom(this.element).hasText("");
  });
});
