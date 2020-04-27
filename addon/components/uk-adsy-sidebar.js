import Component from "@ember/component";
import layout from "../templates/components/uk-adsy-sidebar";

export default Component.extend({
  layout,

  tagName: "nav",

  classNames: ["uk-sidebar"],

  classNameBindings: [
    "muted:uk-background-muted",
    "primary:uk-background-primary",
    "primary:uk-light",
    "secondary:uk-background-secondary",
    "secondary:uk-light",
  ],

  muted: false,

  primary: false,

  secondary: false,
});
