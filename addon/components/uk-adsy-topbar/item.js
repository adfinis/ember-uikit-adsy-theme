import Component from '@ember/component';
import layout from '../../templates/components/uk-adsy-topbar/item';

const UkTopbarItemComponent = Component.extend({
  layout,

  tagName: 'li'
});

UkTopbarItemComponent.reopenClass({
  positionalParams: ['routeName']
});

export default UkTopbarItemComponent;
