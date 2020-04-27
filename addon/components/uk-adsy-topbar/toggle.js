import Component from "@ember/component";
import layout from "../../templates/components/uk-adsy-topbar/toggle";
import { get } from "@ember/object";

export default Component.extend({
  layout,

  tagName: "a",

  classNames: ["uk-navbar-toggle"],

  attributeBindings: ["href"],

  href: "#",

  click(e) {
    e.preventDefault();

    (get(this, "on-click") === undefined ? () => {} : get(this, "on-click"))();
  },
});
