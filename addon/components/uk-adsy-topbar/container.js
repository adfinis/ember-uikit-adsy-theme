import Component from "@ember/component";
import { computed } from "@ember/object";
import layout from "../../templates/components/uk-adsy-topbar/container";
import { get } from "@ember/object";

const UkAdsyTopbarContainerComponent = Component.extend({
  layout,

  align: "left",

  classNameBindings: ["containerClass"],

  containerClass: computed("align", function() {
    return `uk-navbar-${get(this, "align")}`;
  })
});

UkAdsyTopbarContainerComponent.reopenClass({
  positionalParams: ["align"]
});

export default UkAdsyTopbarContainerComponent;
