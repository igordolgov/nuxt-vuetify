module.exports = {
  root: false,

  env: {
    node: false,
  },

  extends: [
    'plugin:vue/essential',
  ],

 settings: {
    'import/resolver': {
        'node': {
            'extensions': ['.js', '.jsx', '.ts', '.tsx']
        }
    }
 },

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    "semi": 0,
  },

  'extends': [
    'plugin:vue/strongly-recommended',
  ]
};