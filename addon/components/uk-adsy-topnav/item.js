import Component from '@ember/component'
import layout from '../../templates/components/uk-adsy-topnav/item'

const UkTopnavItemComponent = Component.extend({
  layout,

  tagName: 'li'
})

UkTopnavItemComponent.reopenClass({
  positionalParams: ['routeName']
})

export default UkTopnavItemComponent
