import Component from "@ember/component";
import layout from "../../templates/components/uk-adsy-sidebar/list";

export default Component.extend({
  layout,

  tagName: "ul",

  classNames: ["uk-nav", "uk-nav-default", "uk-margin-bottom"]
});
