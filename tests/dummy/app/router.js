import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('colors')
  this.route('components')
  this.route('form')
  this.route('grid')
  this.route('modifiers')
})

export default Router
