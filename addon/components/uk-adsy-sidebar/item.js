import Component from '@ember/component'
import layout from '../../templates/components/uk-adsy-sidebar/item'

const UkAdsySidebarItemComponent = Component.extend({
  layout,

  tagName: 'li',

  classNameBindings: ['header:uk-nav-header'],

  header: false
})

UkAdsySidebarItemComponent.reopenClass({
  positionalParams: ['routeName']
})

export default UkAdsySidebarItemComponent
