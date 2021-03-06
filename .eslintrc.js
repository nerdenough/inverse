// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 2,
    'brace-style': [2, '1tbs'],
    'camelcase': 1,
    'computed-property-spacing': [2, 'never'],
    'curly': 2,
    'eol-last': 2,
    'eqeqeq': [2, 'smart'],
    'max-depth': [1, 3],
    'max-len': [1, 80],
    'max-statements': [1, 15],
    'no-extend-native': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'no-use-before-define': [2, 'nofunc'],
    'object-curly-spacing': [2, 'always'],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': [2, 'always'],
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    'space-unary-ops': 2,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
