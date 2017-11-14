import Component from '@ember/component'
import layout from '../../templates/components/uk-adsy-sidenav/item'

const UkAdsySidenavItemComponent = Component.extend({
  layout,

  tagName: 'li',

  classNameBindings: ['header:uk-nav-header'],

  header: false
})

UkAdsySidenavItemComponent.reopenClass({
  positionalParams: ['routeName']
})

export default UkAdsySidenavItemComponent
