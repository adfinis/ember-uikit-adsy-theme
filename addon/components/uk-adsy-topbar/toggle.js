import Component from '@ember/component';
import layout from '../../templates/components/uk-adsy-topbar/toggle';
import { getWithDefault } from '@ember/object';

export default Component.extend({
  layout,

  tagName: 'a',

  classNames: ['uk-navbar-toggle'],

  attributeBindings: ['href'],

  href: '#',

  click(e) {
    e.preventDefault();

    getWithDefault(this, 'on-click', () => {})();
  }
});
