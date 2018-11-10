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
    this.route('subscribers', function() {
      this.route('new');
      this.route('edit', {path:':subscriber_id'});
    });
    this.route('contracts', function() {
      this.route('edit');
      this.route('new');
    });
    this.route('students', function() {
      this.route('new');
      this.route('edit');
    });
    this.route('teachers', function() {
      this.route('new');
      this.route('edit');
    });

    this.route('substudents', function() {});
  });
});

export default Router;
