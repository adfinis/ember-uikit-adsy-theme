import Component from '@ember/component';
import layout from '../templates/components/uk-adsy-topbar';

export default Component.extend({
  layout,

  classNames: ['uk-navbar-container'],

  classNameBindings: [
    'primary:uk-background-primary',
    'primary:uk-light',
    'secondary:uk-background-secondary',
    'secondary:uk-light'
  ],

  primary: false,

  secondary: false
});
