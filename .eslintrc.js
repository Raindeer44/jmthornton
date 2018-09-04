const fs = require('fs');

module.exports = {
  parser: 'babel-eslint',
  extends: 'stylelint-config-standard',
  plugins: ['react', 'jsx-a11y'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './util/webpack/webpack.prod.babel.js',
      },
    },
  },
};
