import EmberRouter from '@embroider/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mano');
  this.route('favela');
});

export default Router;
