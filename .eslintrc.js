module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': ["eslint:recommended", "plugin:react/recommended",'google'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    "_": true,//ignore lodash
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'max-len':["error", { "ignoreComments": true }]
  },
};
