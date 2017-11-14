import Component from '@ember/component'
import { computed } from '@ember/object'
import layout from '../../templates/components/uk-adsy-topnav/container'

const UkAdsyTopnavContainerComponent = Component.extend({
  layout,

  align: 'left',

  classNameBindings: ['containerClass'],

  containerClass: computed('align', function() {
    return `uk-navbar-${this.get('align')}`
  })
})

UkAdsyTopnavContainerComponent.reopenClass({
  positionalParams: ['align']
})

export default UkAdsyTopnavContainerComponent
