import Component from '@ember/component'
import RecognizerMixin from 'ember-gestures/mixins/recognizers'
import { set } from '@ember/object'
import layout from '../templates/components/uk-adsy-menu'

export default Component.extend(RecognizerMixin, {
  layout,

  recognizers: 'swipe',

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
  },

  swipeRight() {
    set(this, 'open', true)
  },

  swipeLeft() {
    set(this, 'open', false)
  }
})
