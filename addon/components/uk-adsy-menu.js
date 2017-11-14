import Component from '@ember/component'
import layout from '../templates/components/uk-adsy-menu'

export default Component.extend({
  layout,

  classNames: ['uk-adsy-menu-wrapper'],

  classNameBindings: ['open:uk-adsy-menu-wrapper-sidebar-open'],

  open: false,

  primaryTop: false,
  secondaryTop: true,

  mutedSide: true,
  primarySide: false,
  secondarySide: false,

  actions: {
    toggle() {
      this.toggleProperty('open')
    }
  }
})
