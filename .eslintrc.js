module.exports = {
  parser: 'babel-eslint',
  extends: ['standard'],
  plugins: ['react', 'jsx-a11y', 'node', 'flowtype', 'import'],
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
    'react/jsx-uses-vars': 'error',
    'object-curly-spacing': [2, 'never'],
    'semi': [2, 'always'],
    'no-extra-semi': 2,
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}]
  }
};