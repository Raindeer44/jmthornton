module.exports = {
  parser: 'babel-eslint',
  extends: ['semistandard'],
  plugins: ['react', 'jsx-a11y', 'node', 'promise', 'flowtype', 'import'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './util/webpack/webpack.prod.babel.js'
      }
    }
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
};
