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
      this.route('detail');
    });

    this.route('contracts', function() {
      this.route('detail');
    });

    this.route('students', function() {
      this.route('detail');
    });

    this.route('teachers', function() {
      this.route('detail');
    });
  });
});

export default Router;
