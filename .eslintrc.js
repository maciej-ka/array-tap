module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  globals: {
    it: 'readonly',
    expect: 'readonly',
    describe: 'readonly',
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'no-unexpected-multiline': 0,
  }
};
