module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'google',
    "plugin:jsx-a11y/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    'google'
  ],
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
    'jsx-a11y'
  ],
  'rules': {
    'max-len':["error", {
      "ignoreComments": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true
    }],
    'indent': [2, 4, {"SwitchCase": 1}],
    'no-console': ["error", { allow: ["warn", "error"] }]
  },
};
