'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
let env = process.env.EMBER_ENV;

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    workbox: {
      mode: env,
      globPatterns: [
        '**/*.{json,css,js,png,svg,eot,ttf,woff,jpg,gif,ico,xml,html,txt,webmanifest}',
      ],
      globIgnores: [
        'assets/icons/icon-*',
        'assets/icons/maskable_icon_*',
        'assets/icons/apple-touch-icon-*',
        'assets/icons/mstile-*',
        'assets/icons/splashscreens/*',
      ],
    },
  });

  return app.toTree();
};
