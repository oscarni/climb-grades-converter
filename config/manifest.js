'use strict';

module.exports = function (/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: 'Climbing Grades Converter',
    short_name: 'Converter',
    description: 'Convert between any climbing grades',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#dfdfdf',
    theme_color: '#dfdfdf',
    icons: [
      {
        src: '/assets/icons/favicon.ico',
        targets: ['favicon'],
      },
      {
        src: '/assets/icons/apple-touch-icon.png',
        sizes: '180x180',
        targets: ['apple'],
      },
      ...[72, 96, 128, 144, 152, 192, 384, 512].map((size) => ({
        src: `/assets/icons/icon-${size}x${size}.png`,
        sizes: `${size}x${size}`,
      })),
    ],
    ms: {
      tileColor: '#fff',
    },
  };
};
