module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    eqeqeq: 'error', // strict equals
  },
}
