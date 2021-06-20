'use strict';

const browsers = [
  'last 2 Chrome versions',
  'last 2 Firefox versions',
  'last 2 Safari versions',
];

const isCI = Boolean(process.env.CI);
const isProduction = process.env.EMBER_ENV === 'production';

if (isCI || isProduction) {
  browsers.push('last 3 iOS major versions');
  browsers.push('last 4 Edge versions');
}

module.exports = {
  browsers,
};
