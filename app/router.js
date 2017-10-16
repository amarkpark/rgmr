import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('credits');
  this.route('movies', function() {
    this.route('new');
  });
});

export default Router;
