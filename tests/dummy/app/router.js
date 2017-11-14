import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('getting-started', { path: '/' }, function() {
    this.route('installation')
    this.route('javascript')
  })

  this.route('components', function() {
    this.route('navigation')
    this.route('colors')
  })
})

export default Router
