'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  const Webpack = require('@embroider/webpack').Webpack;
  return require('@embroider/compat').compatBuild(app, Webpack, {
    // The default settings give maximum compatability, and they work fine here,
    // but we are also going to enable some optimizations.

    // These two flags are used when building classic addons to v2 format. They
    // cause any unused Javascript modules these addon trees to not be included
    // in the build. Most addons are fine with this, but some are not, so this
    // is an opt-in optmization.
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,

    // Resolve all helpers (in app and all addons) at build time. Unused helpers
    // will not be included. This is usually a safe optimization, as there are
    // not common ways of dynamically referring to helpers in templates.
    staticHelpers: true,

    // Resolve all components (in app and all addons) at build time. Unused
    // components will not be included. This is generally not a safe
    // optimization unless you also deal with any dynamic component warnings by
    // providing packageRules.
    staticComponents: true,

    // Each of these entries can be a string or RegExp. Any route names that
    // match will get split out of the initial app payload. When you split at a
    // route, that route and all its child routes will be lazily loaded on
    // demand.
    splitAtRoutes: ['favela']
  });
};
