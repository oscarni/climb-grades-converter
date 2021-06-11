'use strict';

module.exports = function (/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: 'Climbing Grade Converter',
    short_name: 'Converter',
    description: 'Convert between any climbing grades',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#dfdfdf',
    theme_color: '#1063ff',
    orientation: 'portrait',
    icons: [
      {
        src: '/assets/icons/favicon.ico',
        targets: ['favicon'],
      },
      ...[120, 152, 180].map((size) => ({
        src: `/assets/icons/apple-touch-icon-${size}x${size}.png`,
        sizes: `${size}x${size}`,
        targets: ['apple'],
      })),
      {
        src: '/assets/icons/safari-pinned-tab.svg',
        safariPinnedTabColor: '#1063ff',
        targets: ['safari-pinned-tab'],
      },
      {
        src: '/assets/icons/maskable_icon_x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
        targets: ['manifest'],
      },
      ...[72, 96, 144, 192, 256, 384, 512].map((size) => ({
        src: `/assets/icons/icon-${size}x${size}.png`,
        sizes: `${size}x${size}`,
        targets: ['manifest'],
      })),
      {
        src: '/assets/icons/mstile-150x150.png',
        element: 'square150x150logo',
        targets: ['ms'],
      },
    ],
    ms: {
      tileColor: '#2d89ef',
    },
  };
};
