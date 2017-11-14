import LinkComponent from '@ember/routing/link-component'
import layout from '../../templates/components/uk-adsy-topnav/brand'

export default LinkComponent.extend({
  layout,

  logo: true,

  classNames: ['uk-navbar-item', 'uk-logo']
})
