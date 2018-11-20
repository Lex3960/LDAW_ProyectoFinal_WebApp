import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path: '/'});
  this.route('signup');
  this.route('auth', function() {
    this.route('dashboard');
    this.route('subscribers', function() {});
    this.route('contracts', function() {
      this.route('edit', {path: '/:id'});
      this.route('new');
    });
    this.route('students', function() {
      this.route('detail', {path: '/:id'});
    });
    this.route('teachers', function() {});
    this.route('substudents', function() {});
  });
});

export default Router;
