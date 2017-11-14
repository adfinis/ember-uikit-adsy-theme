import Component from '@ember/component'
import layout from '../../templates/components/uk-adsy-topbar/toggle'

export default Component.extend({
  layout,

  tagName: 'a',

  classNames: ['uk-navbar-toggle'],

  attributeBindings: ['href'],

  href: '#',

  click(e) {
    e.preventDefault()

    this.getWithDefault('on-click', () => {})()
  }
})
